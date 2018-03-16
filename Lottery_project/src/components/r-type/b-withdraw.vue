<template>
  <div class="b-withdraw-content">
    <back title="银行卡提款" go-back="true"></back>
    <div class="b-withdraw" v-if="showContent">
      <dl>
        <dt>持卡人:</dt>
        <dd>
          <span v-if="userinfo">{{userinfo.bankcard_user}}</span>
        </dd>
      </dl>
      <dl>
        <dt>卡号:</dt>
        <dd>
          <span v-if="userinfo">{{userinfo.bankcard | transPhoneFormate}}</span>
        </dd>
      </dl>
      <div class="b-withdraw-msg">
        <div><span>当前金额:</span><span v-if="userinfo">{{userinfo.balance}}<span v-if="userinfo.balance">元</span></span></div>
        <div><span>可提款金额:</span><span v-if="userinfo">{{userinfo.balance_can_withdraw}}<span v-if="userinfo.balance_can_withdraw">元</span></span></div>
        <div><span>不可提金额:</span><span v-if="userinfo">{{userinfo.balance_can_not_withdraw}}<span v-if="userinfo.balance_can_not_withdraw">元</span></span></div>
      </div>
      <dl>
        <dt><h4>提款金额:</h4></dt>
        <dd><input type="number" placeholder="请输入提款金额" v-model="willcash"><span style="color: #000">元</span></dd>
      </dl>
      <dl>
        <dt><h4>交易密码:</h4></dt>
        <dd><input type="password" placeholder="请输入您的交易密码" v-model="paypw"></dd>
      </dl>

      <div class="b-withdraw-opt">
        <input type="button" value="确认" @click="withDrawFn">
      </div>

      <div class="b-withdraw-warning" v-if="user.withdraw_hint">
        <h4>提醒</h4>
        <div v-html="user.withdraw_hint.replace(/\n/g,'<br/>')"></div>
      </div>
    </div>

    <!--define modal @close="closeModal"-->
    <modal v-if="showModule" :to-link="toLink" :body="modalbody"></modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import modal from '@/components/public/modal_comfire'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close, mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back,
      modal
    },
    data() {
      return {
        willcash: '',
        realname: '',
        paypw: '',
        showModule: false,
        modalbody: '申请提款成功',
        toLink: 'withdraw',
        userinfo: {},
        showContent: false,
//        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
      }
    },
//    computed: mapState({user: state => state.user}),
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      this.refreshToken()
      /*mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)*/
    },
    methods: {
      refreshToken() { // 刷新客户信息
        requestOpt.reqGet('userinfo?push_id=',sessionStorage.getItem('token') , res => {
          if (res.data.status===1) {
            this.showContent = true
            this.userinfo = res.data.data
            sessionStorage.setItem('userinfo',JSON.stringify(res.data.data))
          } else {
//            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err)
        })
      },
      closeModal(){
        this.showModule = false
        this.$router.replace('/withdrawals')
      },
      withDrawFn() {
        /*if (!this.realname) {
          alertip('真实姓名不能为空');
          return false
        }*/
        mt_loading_open('申请提款中...')
        setTimeout(() => {
          mt_loading_close()
        },5000)
        if (!this.willcash) {
          mt_toast('请输入提款金额');
          return false
        }
        if (!this.paypw) {
          mt_toast('请输入支付密码');
          return false
        }
        //   this.user.token
        requestOpt.reqPostuser('withdraw',sessionStorage.getItem('token') , {
          real_name: this.userinfo.bankcard_user, //  this.user.userinfo.bankcard_user
          withdraw_amount: this.willcash,
          password_pay: this.paypw,
          withdraw_type_id: 1
        }, res => {
          mt_loading_close()
          if (res.data.status === 1) {
            this.showModule = true
//            mt_toast(res.data.msg)
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
              mt_toast(res.data.msg);
            } else {
              mt_toast(res.data.msg);
            }
          }

        }, err => {
          mt_toast(err)
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .b-withdraw-content {
   /* width: 7.5rem;
    height: 13.34rem;*/
    overflow: hidden;
    background-color: #eee;
    color: #000;
    font-size: .3rem;
  }
  poscola {
    margin-top .88rem
  }
  .b-withdraw {
    margin-top 1.08rem
    dl {
      display flex
      align-items center
      display -webkit-flex
      -webkit-align-items center
      height .78rem
      margin 0 .3rem .1rem
      /*padding 0.2rem 0*/
      /*padding-top .3rem*/
      background #fff
      color #000
      font-size .3rem
      border-radius .08rem
      dd {
        flex-grow 1
        -webkit-flex-grow 1
        input {
          width 92%
          background transparent
          outline none
          color #000
          line-height 1.5em /*解决移动端placehold垂直居中问题*/
        }
        /*[readonly] {
          color #999
        }*/
      }
      dt {
        flex-basis 1.9rem
        -webkit-flex-basis 1.9rem
        text-indent .1rem
        h4 {
          color #000
        }
      }
    }
    .b-withdraw-msg {
      margin  0 0.3rem .1rem
      background #fff
      font-size .3rem
      line-height 1.3
      border-radius .08rem
      span {
        display inline-block
        padding .05rem 0
        &:first-child {
          width 1.9rem
          text-indent .1rem
        }
        &:last-child {
          color #ff3a3b
        }
      }
    }
    .b-withdraw-opt {
      margin .4rem .3rem
      input {
        width 100%
        padding .2rem
        background #ff3a3b
        color #fff
        text-align center
        border-radius .08rem
        /*box-shadow 0 2px 1px rgba(0,0,0,.3)*/
      }
    }
    .b-withdraw-warning {
      margin 0.3rem
      color #000
      font-size .24rem
      line-height 1.3
      h4 {
        padding-bottom .12rem
        color #ff3a3b
        font-size .28rem
      }
    }
  }
</style>
