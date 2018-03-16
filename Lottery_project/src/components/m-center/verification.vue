<template>
  <div class="verification_content">
    <back title="手机验证" go-back="true"></back>
    <div class="verification">
      <dl>
        <dt  class="phones">手机号码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="phone">
        </dd>
      </dl>
      <dl>
        <dt  class="code">验证码</dt>
        <dd class="verification1">
          <input type="text" placeholder="请输入验证码" maxlength="22" v-model="verification">
        </dd>
        <dd class="obtain">
          <input type="button" v-model="getVerifitxt"  @click="getVerificat($event)" >
        </dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="完成" @click="okVerificated">
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt, isPhone, mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        phone: '',
        verification: '',
        getVerifitxt: '获取验证码'
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!this.user.token) {
        this.$router.push('/login')
      }*/
    },

    methods: {
      getVerificat(e) { // 获取验证码
        if (isPhone(this.phone)) {
          let t = 60;
          let timer = setInterval( () => {
            if (t===0) {
              clearInterval(timer);
              return;
            }
            t--;
            t = t<=0 ? 0 : t;
            this.getVerifitxt = t===0 ? '获取验证码': t + '秒后重新获取'
            t===0 ? e.target.disabled = false : e.target.disabled = true;
            e.target.className = t===0 ? '': 'resBtn';
          },1000)
          // sessionStorage.getItem('token')  this.user.token
          requestOpt.reqGetuser('phone_code?phone='+this.phone, sessionStorage.getItem('token'), res => {
            mt_toast(res.data.msg)
            if (res.data.msg === '验证码发送次数超出系统限制！') {
//              e.target.disabled = true;
              clearInterval(timer)
              this.getVerifitxt =  '获取验证码'
              e.target.className = ''
            } else {
              e.target.disabled = false;
            }
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
          }, err => {
            mt_toast(err)
          });
        }
      },
      okVerificated() { // 完成操作
        if (isPhone(this.phone)) {
          if (!this.verification) {
            mt_toast('验证码不能为空');
            return false;
          };
          requestOpt.reqPostuser('phone', sessionStorage.getItem('token'), { // 完成操作
            phone: this.phone,
            code: this.verification
          }, res => {
//            alertip(res.data.msg)
//            alertip(res.data.status)
            if (res.data.status === 1) {
              mt_toast('验证码校验成功')
              this.$router.replace('/m-center')
            } else if (res.data.status === 0) {
              mt_toast('验证码校验失败')
            } else {
              mt_toast(res.data.msg)
              setTimeout(() => {
                this.$router.push('/login')
              },500)
            };
          }, err => {
            mt_toast(err)
          })
        }
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .verification_content{
    width :7.5rem;
    height 100%
    // height: 13.34rem;
    /*height: 100%;*/
/*    display block*/
    overflow hidden
    background #eeeeee
  }
  .verification{
    width 7.1rem
    /*height 8rem*/
    display block
    margin 0.98rem auto
  }
  .verification dl{
    position relative
    width 7.1rem
    height 0.98rem
    display block
    background #ffffff
    line-height 0.98rem
    margin-top 0.1rem
  }
  .verification dl  dt{
    width 1.5rem
    height 0.98rem
    display inline-block
    color #000000
    font-size 0.32rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .verification dl  dd.verification1{
    position: relative;
    top: -1px;
    width 4rem
    /*height 0.68rem*/
    display inline-block
    color #000000
    font-size 0.2rem
    float left
  }
  .verification dl  dd.obtain{
    position absolute
    top .14rem
    right .1rem
    width 1.9rem
    height 0.88rem
    line-height .88rem
    /*display inline-block*/
    /*float right
    margin-right 0.1rem*/
  }
  .verification1 input[type=text]{
    position relative
    top 3px
    width 4rem
    /*height 0.68rem*/
    color #000000
    font-size 0.32rem
    border none
    outline none
    line-height 1.5em
  }
  .obtain input[type=button]{
    width 100%
    height 0.6rem
    line-height .6rem
    /*padding 0 .1rem*/
    color #ffffff
    background #35b5fe
    display block
    border:none
    outline:none
    margin-right 0.1rem
    margin-top 0.06rem
    border-radius 0.04rem
    font-size 0.24rem
  }
  .obtain input.resBtn {
    background : #555;
  }


  .verification dl.verification3{
    line-height 0.68rem
    margin-top 0.4rem
  }
  .verification dl.verification3 input{
    width 7.1rem
    height 0.68rem
    color #ffffff
    background #ff3a3a
    display block
    border:none
    outline:none
    border-radius 0.04rem
    font-size 0.32rem
  }
</style>










































































