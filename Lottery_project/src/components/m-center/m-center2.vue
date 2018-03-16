<template>
  <div class="center">
    <!--头部-->
    <div class="center-head">
      <ul>
        <li class="center-head1"></li>
        <li class="center-head2">用户中心</li>
      <!--<router-link tag="div" class="tab-item" to="/activites">-->
        <li class="center-head3" @click="toActMessage()">
          <img class="center-head-icon" src="../../images/center-icon.png">
        </li>
       
      <!--</router-link>-->
      </ul>
    </div>
    <!--登录页面-->
    <div class="center-content">
      <div class="center-login">
          <dl v-if="islogin">
            <dt class="my-log-iocn" @click="to">
              <img  :src="userinfo.avatar" alt="" v-if="userinfo.avatar">
              <img  src="../../images/personal1.png" alt="" v-else>
            </dt>
            <dd class="center-login2" @click="to">
              <dl>
                <dt class="users-name" id="users-name">{{userinfo.username}}</dt>
                <dd class="users-money"><img src="../../images/money.png" alt="">
                  <span  v-if="userinfo">{{userinfo.balance}}</span>
                </dd>
              </dl>
            </dd>
            <dd class="refresh"><img ref="aimate" src="../../images/shuaxin.png" alt="" @click="refreshToken"></dd>
          </dl>

        <div class="center-login-bg" v-else @click="$router.push('/login');$store.commit('LOGINFLAG','m-center')">
          <div class="center-login-item">
            <img  src="../../images/personal1.png" alt="">
            <span>登录/注册</span>
          </div>
        </div>
      </div>

      <!--充值提现-->
      <div class="center-recharge">
        <ul>
          <!--<router-link tag="div" class="tab-item" to="/recharge-type">-->
          <div @click="toRecharge">
            <li class="center-recharge1">
              <img class="recharge-icon" src="../../images/Recharge@2x.png">
              充值
            </li>
          </div>
          <!--</router-link>-->
          <!--<router-link tag="div" class="tab-item" to="/b-card">-->
          <div @click="toWithdraw">
            <li class="center-recharge2">
              <img class="recharge-icon" src="../../images/Withdrawals@2x.png">
              提现
            </li>
          </div>
          <!--</router-link>-->
        </ul>
      </div>
      <!--信息明细-->
      <div class="center-list-content" >
        <!--<router-link tag="div" class="tab-item" to="/betting">-->
        <dl @click="toBetting">
          <dt class="center-list-icon1"><img src="../../images/Record@2x.png" alt="投注记录"></dt>
          <dd class="center-list1">投注记录</dd>
          <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
       <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/winning" >-->
          <dl @click="toWinning">
            <dt class="center-list-icon1"><img src="../../images/Winning@2x.png" alt="中奖记录"></dt>
            <dd class="center-list1">中奖记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/a-account">-->
          <dl @click="toAaccount">
            <dt class="center-list-icon1"><img src="../../images/account@2x.png" alt="账户明细"></dt>
            <dd class="center-list1">账户明细</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/recharge">-->
          <dl @click="toRechargeTab">
            <dt class="center-list-icon1"><img src="../../images/recharge_Record@2x.png" alt="充值记录"></dt>
            <dd class="center-list1">充值记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/withdrawals">-->
          <dl @click="toWithdrawals">
            <dt class="center-list-icon1"><img src="../../images/drawing@2x.png" alt="提款记录"></dt>
            <dd class="center-list1">提款记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/personals">-->
          <dl @click="toPersonals">
            <dt class="center-list-icon1"><img src="../../images/Personal_information@2x.png" alt="个人信息"></dt>
            <dd class="center-list1">个人信息</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        <!--</router-link>-->
        <!--<router-link tag="div" class="tab-item" to="/agent-mid">-->
        <div @click="toAgent">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/agent-cenger@2x.png" alt="代理中心"></dt>
            <dd class="center-list1">代理中心</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </div>
        <!--</router-link>-->
        <router-link tag="div" class="tab-item" to="/more">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/set@2x.png" alt="更多设置"></dt>
            <dd class="center-list1">更多设置</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </router-link>
      </div>
    </div>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import MHeader from '@/components/m-header/m-header'
  import Tab from '@/components/tab/tab'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'

  import {mapState, mapActions} from 'vuex'

  export default {
    components: {
      MHeader,
      Tab
    },
    data() {
      return {
        timer: null,
        islogin: sessionStorage.getItem('login'),
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        /*avatar: JSON.parse(sessionStorage.getItem('userinfo'))&&JSON.parse(sessionStorage.getItem('userinfo')).avatar,
        balance: JSON.parse(sessionStorage.getItem('userinfo'))&&JSON.parse(sessionStorage.getItem('userinfo')).balance,*/
        /*username: this.user.userinfo.username,
        balance: this.user.userinfo.balance,
        avate:  this.user.userinfo.avatar,
        is_trail: this.user.userinfo.is_trial?false:true*/
      }
    },
    created() {
      /*mt_loading_open();
      setTimeout(() => {
        mt_loading_close()
      },300)*/
    },
    mounted() {

    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('HOME_TAB','')
      if (to.path === '/recharge-type') {
        to.meta.keepAlive = false;
      } else if (to.path === '/betting') {
        to.meta.keepAlive = false;
      }
      next()
    },
    computed: mapState({user: state => state.user}),
    methods: {
      refreshToken() { // 刷新客户信息
        this.$refs.aimate.classList.add('aimate')
        setTimeout(() => {
          this.$refs.aimate.classList.remove('aimate')
        },600)
        //this.user.token
        requestOpt.reqGet('userinfo?push_id=',sessionStorage.getItem('token') , res => {
//          console.log(res.data)
          if (res.data.status===1) {
            /*this.user.userinfo.avatar = res.data.data.avatar
            this.user.userinfo.balance = res.data.data.balance*/

            this.userinfo.avatar = res.data.data.avatar
            this.userinfo.balance = res.data.data.balance
            sessionStorage.setItem('userinfo',JSON.stringify(res.data.data))
            mt_toast('刷新成功')
          } else {
//            mt_toast(res.data.msg)
          }

        }, err => {
          mt_toast(err)
        })
      },
      to() {
        this.$router.push('/personals')
      },
      toActMessage() {
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/actMessage')
        }
      },
      toRecharge() {
        if (!this.islogin) { // this.user.islogin
          this.$router.push('/login')
        } else {
          if (!this.userinfo.is_trial) { // this.user.userinfo.is_trial
            this.$router.push('/recharge-type')
//          this.$route.meta.keepAlive = false;
          } else {
            mt_toast('试玩账号不能进行充值操作！')
          }
        }

      },
      toWithdraw() {
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          if (!this.userinfo.is_trial) {// this.user.userinfo.is_trial
            if (this.userinfo.bankcard || this.user.of_card) {
              this.$router.push('/b-withdraw')
            } else {
              this.$router.push('/b-card')
            }
          } else {
            mt_toast('试玩账号不能进行提现操作！')
          }
        }

      },
      toAgent() {
        if (!this.islogin) { //this.$store.state.user.islogin
          this.$router.push('/login')
        } else {
          if (!this.userinfo.is_trial) {
            this.$router.push('/agent-mid')
          } else {
            mt_toast('试玩用户不能查看代理中心！')
          }
        }
      },
      toBetting() { // 投注记录
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/betting/0')
        }
      },
      toWinning() { // 中奖记录
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/winning')
        }
      },
      toAaccount() { // 账户明细
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/a-account')
        }
      },
      toRechargeTab() { // 充值记录
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/recharge')
        }
      },
      toWithdrawals() { // 提款记录
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/withdrawals')
        }
      },
      toPersonals() { // 个人信息
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/personals')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .center{
    /*width: 7.5rem;
    height: 13.34rem;
    display: block;*/
    height 100%
    /*overflow hidden*/
    overflow-y scroll
    background: #ffffff;
  }
  .center-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
  }
  .center-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .center-head ul li{
    float: left;
    height: 0.88rem;
    display: block;
  }
  .center-head1{
    width: 1.5rem
  }
  .center-head2{
    width :3.8rem;
    text-align: center;
    font-size : 0.36rem;
    font-weight :normal;
    color: #ffffff;
  }
  .center-head3{
    width: 1.5rem;
    text-align: right;
  }
  .center-head-icon{
    display: inline-block;
    width: 0.46rem;
    height: 0.42rem;
    position: relative;
    top: 0.1rem;
  }
  /*登录用户*/
  .center-login-bg {
    position relative
    width 100%
    height 1.3rem
    color #000000
    font-size .3rem
    .center-login-item {
      position absolute
      left 1.2rem
      top: .21rem
      margin-left -1rem
      display flex
      justify-items center
      align-items center
      display -webkit-flex
      -webkit-justify-content center
      -webkit-align-items center
    }
    img {
      width 0.88rem
      height .88rem
      margin-right .1rem
    }
  }
  .center-content{
    width: 7.5rem;
    background: #eeeeee;
/*    height: 12rem;*/
    display: block;
    height 100%
  }
.center-login{
  position: relative;
  width: 7.5rem;
  height: 1.3rem;
  background: #ffffff;
  display: block;
  margin-bottom: 0.2rem;
  border-bottom 1px solid #e5e5e5
}
  .center-login dl{
     width: 6.9rem;
     height: 1.3rem;
     display: block;
     margin: auto;
   }
  .center-login dl dt{
      width: 1.1rem;
      height: 1.3rem;
      display: block;
      margin: auto;
      float: left;
    }
  .center-login dl dd.center-login1{
    width: 3.8rem;
    height: 1.3rem;
    margin: auto;
    float: left;
    font-size: 0.32rem;
    color: #333333;
    line-height: 1.3rem;
    text-align: left;
    display: none;
  }
  .center-login dl dd.center-login2{
    width: 3.8rem;
    height: 1.3rem;
    display: block;
    margin: auto;
    float: left;
    font-size: 0.34rem;
    color: #333333;
    line-height: 1.3rem;
    text-align: left;
  }
  .center-login2 dl{
    width: 3.8rem;
    height: 1.3rem;
    display: block;
  }
  .center-login2 dl dt{
    width: 3.8rem;
    height: 0.65rem;
    display: block;
    line-height: 0.75rem;
    color: #222222;
  }
  .center-login2 dl dd{
    width: 2.9rem;
    height: 0.65rem;
    display: block;
    line-height: 0.65rem;
    color: #222222;
  }
  .center-login2 dl dd.users-money{
    float: left;
  }
  .center-login dl dd.refresh{
    position relative
    float: right;
    width .9rem
    height 1.3rem
  }
  .refresh img{
    position absolute
    bottom 0.2rem
    right 0
    margin auto
    width: 0.45rem;
    height: 0.4rem;
    &.aimate {
      transition all 1s
      transform rotate
      animation anmirotate 1s
    }
  }
    @keyframes anmirotate {
      from {
        transform rotate(0deg)
      }
      to {
        transform rotate(360deg)
      }
    }
  .users-money img{
    width: 0.36rem;
    height: 0.35rem;
    display: inline-block;
    position: relative;
    top:0.05rem;
  }
  .users-money span{
    color: #fc823c;
    font-size: 0.36rem;
    margin-left: 0.1rem;
  }

  .center-refresh {
    position: absolute;
    top: 1.5rem;
    right: .3rem;
    width: .65rem;
    height: .65rem;
    img {
      position absolute
      bottom 0
      top 0
      left 0
      right 0
      margin auto
      width: .35rem;
      height: .3rem;
    }
  }

  .my-log-iocn img{
    width: 0.92rem;
    height: 0.92rem;
    margin-top: 0.19rem;
    border-radius 50%
  }

  /*充值提现*/
.center-recharge{
  width: 7.5rem;
  height: 0.8rem;
  display: block;
  line-height: 0.8rem;
  background: #ffffff;
  margin-bottom: 0.4rem;
  border-bottom 1px solid #e5e5e5
}
  .center-recharge ul{
    width: 6.9rem;
    height: 0.8rem;
    display: block;
    margin: auto;
  }
  .center-recharge ul li{
    width: 3.45rem;
    height: 0.8rem;
    display: block;
    line-height: 0.8rem;
    float: left;
    text-align: center;
  }
  .center-recharge ul li{
    font-size: 0.34rem;
  }
  .center-recharge ul li.center-recharge1 {
    color: #fc823c;
  }
  .center-recharge ul li.center-recharge2{
    color: #35b5fe;
  }
  .center-recharge ul li img{
    width: 0.5rem;
    height: 0.5rem;
    display: inline-block;
    clear: both;
    position: relative;
    top: 0.12rem;
  }
  .center-list-content{
    width: 7.5rem;
    /*height: 9.5rem;*/
    overflow auto
    padding-bottom 1.2rem
   /* padding-bottom 3.4rem*/
  }
 /* .center-list-content dl*/
  .center-list-content dl{
    width: 7.5rem;
    height: 0.98rem;
    display: block;
    border-bottom: 1px solid #eeeeee;
    background: #ffffff;
    line-height: 0.98rem;
  }
  .center-list-content dl dt{
    height: 0.8rem;
    width: 0.8rem;
    display: block;
    float: left;
  }

  .center-list-icon1  img{
    height: 0.6rem;
    width: 0.6rem;
    display: inline-block;
    float: left;
    margin-left: 0.3rem;
    margin-top: 0.19rem;
  }
  .center-list1{
    font-size: 0.34rem;
    /*font-weight: bold;*/
    color: #323232;
    width: 5.8rem;
    padding-left .35rem
    float: left;
  }
  .center-list2{
    width: 0.8rem;
    float: right;
    display: inline-block;
    text-align: right;
    line-height: 0.8rem;
  }
  .center-list2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 0.35rem;
    margin-right: 0.3rem;
  }

</style>
