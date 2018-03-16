
<template>
  <div class="center">
    <!--头部-->
    <div class="center-head">
      <ul>
        <li class="center-head1" >
            <img class="center-head-icon" src="../../images/new_m_center/m_kefu.png" alt="在线客服" @click="tolining">     
        </li>
        <li class="center-head2">我的</li>

        <li class="center-head3" @click="toMore()">
          <img class="center-head-icon" src="../../images/new_m_center/m_modefy.png">
        </li>
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
                <dd class="users-money">
                    <img src="../../images/new_m_center/m_money.png" alt="">
                    <span  v-if="userinfo">{{userinfo.balance}}</span>
                </dd>
              </dl>
            </dd>
            <dd class="refresh">
                   <img ref="aimate" src="../../images/new_m_center/m_refresh.png" alt="" @click="refreshToken">
            </dd>
          </dl>

        <div class="center-login-bg" v-else @click="$router.push('/login');$store.commit('LOGINFLAG','m-center')">
          <div class="center-login-item">
            <img  src="../../images/new_m_center/m_avatar.png" alt="">
            <span>登录/注册</span>
          </div>
        </div>
      </div>

      <!--充值提现-->
      <div class="center-recharge">
        <ul>
          <div @click="toRecharge">
            <li class="center-recharge1">
              <img class="recharge-icon" src="../../images/new_m_center/m_recharge_icon.png">
              充值
            </li>
          </div>
          <div @click="toWithdraw">
            <li class="center-recharge2">
              <img class="recharge-icon" src="../../images/new_m_center/m_ti_icon.png">
              提现
            </li>
          </div>
        </ul>
      </div>

      <!-- 主体内容 -->
      <div class="center-main">
         
        <ul>
            <!-- 投注记录 中奖记录  -->
            <li>
                <div class="out_content center-recharge1"  @click="toBetting">
                         <img class="recharge-icon" src="../../images/new_m_center/m_bet_history.png">
                    <div class="inner_content">
                        <h4>投注记录</h4>
                        <p>查看所参与的游戏记录</p>
                    </div>
                </div>

                 <div class="out_content" @click="toWinning">
                      <img class="recharge-icon" src="../../images/new_m_center/m_lot_history.png">
                    <div class="inner_content">
                        <h4>中奖记录</h4>
                        <p>查看所中奖的游戏记录</p>
                    </div>
                </div>
            </li>
            <!-- 充值记录 提款记录-->
            <li>
                <div class="out_content center-recharge1" @click="toRechargeTab">
                         <img class="recharge-icon" src="../../images/new_m_center/m_charge_history.png">
                    <div class="inner_content">
                        <h4>充值记录</h4>
                        <p>查看所有充值订单</p>
                    </div>
                </div>

                 <div class="out_content"  @click="toWithdrawals">
                      <img class="recharge-icon" src="../../images/new_m_center/m_ti_history.png">
                    <div class="inner_content">
                        <h4>提款记录</h4>
                        <p>查看所有提款历史</p>
                    </div>
                </div>
            </li>
            <!-- 账户明细 代理中心 -->
            <li>
                <div class="out_content center-recharge1" @click="toAaccount">
                         <img class="recharge-icon" src="../../images/new_m_center/m_promi.png">
                    <div class="inner_content">
                        <h4>账户明细</h4>
                        <p>查看您的账户信息</p>
                    </div>
                </div>

                 <div class="out_content" @click="toAgent">
                      <img class="recharge-icon" src="../../images/new_m_center/m_promx_center.png">
                    <div class="inner_content">
                        <h4>代理中心</h4>
                        <p>赢取现金奖励</p>
                    </div>
                </div>
            </li>
            <!-- 消息中心 意见反馈 -->
            <li>
                <div class="out_content center-recharge1">
                         <img class="recharge-icon" src="../../images/new_m_center/m_news_center.png">
                    <div class="inner_content" @click="toActMessage()">
                        <h4>消息中心</h4>
                        <p>查看历史消息内容</p>
                    </div>
                </div>

                 <div class="out_content" @click="go_suggest">
                      <img class="recharge-icon" src="../../images/new_m_center/m_suggest.png">
                    <div class="inner_content">
                        <h4>意见反馈</h4>
                        <p>解答各种问题</p>
                    </div>
                </div>
            </li>
            <!-- 分享朋友 邀请领奖 -->

            <li>
                <div class="out_content center-recharge1" @click="go_share">
                         <img class="recharge-icon" src="../../images/new_m_center/share_friend.png">
                    <div class="inner_content">
                        <h4>分享朋友</h4>
                        <p style="color:#fd0000;">赢取现金奖励</p>
                    </div>
                    <span>  </span>
                </div>

                 <div class="out_content"  @click="go_awards">
                      <img class="recharge-icon" src="../../images/new_m_center/m_invite.png">
                    <div class="inner_content">
                        <h4>邀请领奖</h4>
                        <p>请输入验证码领奖</p>
                    </div>
                </div>
            </li>

        </ul>

      </div>
      <!--信息明细-->
      <!-- <div class="center-list-content" >
        <dl @click="toBetting">
          <dt class="center-list-icon1"><img src="../../images/Record@2x.png" alt="投注记录"></dt>
          <dd class="center-list1">投注记录</dd>
          <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>

        <dl @click="toWinning">
            <dt class="center-list-icon1"><img src="../../images/Winning@2x.png" alt="中奖记录"></dt>
            <dd class="center-list1">中奖记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
     
        <dl @click="toAaccount">
        <dt class="center-list-icon1"><img src="../../images/account@2x.png" alt="账户明细"></dt>
        <dd class="center-list1">账户明细</dd>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
   
        <dl @click="toRechargeTab">
            <dt class="center-list-icon1"><img src="../../images/recharge_Record@2x.png" alt="充值记录"></dt>
            <dd class="center-list1">充值记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      
        <dl @click="toWithdrawals">
            <dt class="center-list-icon1"><img src="../../images/drawing@2x.png" alt="提款记录"></dt>
            <dd class="center-list1">提款记录</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      
        <dl @click="toPersonals">
            <dt class="center-list-icon1"><img src="../../images/Personal_information@2x.png" alt="个人信息"></dt>
            <dd class="center-list1">个人信息</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
       
        <div @click="toAgent">
          <dl>
            <dt class="center-list-icon1"><img src="../../images/agent-cenger@2x.png" alt="代理中心"></dt>
            <dd class="center-list1">代理中心</dd>
            <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>
        </div>
      </div> -->
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
      
      }
    },
    created() {
   
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

          if (res.data.status===1) {
            this.userinfo.avatar = res.data.data.avatar
            this.userinfo.balance = res.data.data.balance
            sessionStorage.setItem('userinfo',JSON.stringify(res.data.data))
            mt_toast('刷新成功')
          } else {

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
      toMore() {
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/more')
        }
      },
      toRecharge() {
        if (!this.islogin) { // this.user.islogin
          this.$router.push('/login')
        } else {
          if (!this.userinfo.is_trial) { // this.user.userinfo.is_trial
            this.$router.push('/recharge-type')

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
      },
      tolining() {
        location.href = this.$store.state.user.app_info.client_service_url
      },
      go_suggest(){
        if (!this.islogin) {
          this.$router.push('/login')
        } else {
          this.$router.push('/suggest')
        }
      },
      go_awards(){
        if (!this.islogin) {
            this.$router.push('/login')
        } else {
            this.$router.push('/inviteAwards')
        }
      },
      go_share(){
        if (!this.islogin) {
            this.$router.push('/login')
        } else {
            this.$router.push('/shareFriends')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
// 头部
    .center{
        /*width: 7.5rem;
        height: 13.34rem;
        display: block;*/
        height 100%
        /*overflow hidden*/
        overflow-y scroll
        background: #f5f4f9;
    }
    .center-head{
        width: 7.5rem;
        height: 0.88rem;
        display: block;
        margin: auto;
        background :#ff3a3b;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
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
        height 2.3rem
        color #000000
        font-size .3rem
        background: url('../../images/new_m_center/m_backhround.png') no-repeat center / cover;
        .center-login-item {
        position absolute
        left 1.2rem
        top: .35rem
        margin-left -1rem
        display flex
        justify-items center
        align-items center
        display -webkit-flex
        -webkit-justify-content center
        -webkit-align-items center
        }
        img {
        width 1.5rem
        height 1.5rem
        margin-right .1rem
        }
    }
    .center-content{
        width: 7.5rem;
        background: #f5f4f9;
        // height: 15.5rem;
        display: block;
        height 100%
    }
    .center-login{
        position: relative;
        width: 7.5rem;
        height: 2.3rem;
        background: #ffffff;
        display: block;
        margin-bottom: 0.4rem;
        border-bottom 1px solid #e5e5e5;
        margin-top: 0.9rem;
    }
    .center-login dl{
        // width: 6.9rem;
        // height: 1.3rem;
        height:100%;
        display: block;
        margin: auto;
        position:relative;
        background:  url('../../images/new_m_center/m_backhround.png') no-repeat center / cover;
    }
    .center-login dl dt{
            width: 1.7rem;
            height: 100%;
            display: block;
            margin: auto;
            float: left;
            display: flex;
            align-items: center;
            
    }
    .center-login dl dt.my-log-iocn{
        margin-left:15px;
    }
    .center-login dl dt.users-name{
        font-size: 0.34rem;
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
        margin-top: .4rem;
    }
    .center-login dl dd.center-login2 #users-name{
        font-size: 0.4rem;
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
        // position relative
        // float: right;
        width .5rem;
        height 1.8rem;
        position: absolute;
        left: 5rem;
        // width:0.5rem;
        // height:0.5rem;
        // display:flex;
        // justify-content : center;
        // align-items : center; 
    }
    .refresh img{
        position absolute
        bottom 0.2rem
        right 0
        margin auto
        width: 0.5rem;
        height: 0.5rem;
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
        width: 0.45rem;
        height: 0.45rem;
        display: inline-block;
        position: relative;
        top:0.05rem;
    }
    .users-money span{
        color: #f0ce0f;
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
        // width: 0.92rem;
        // height: 0.92rem;
        // margin-top: 0.19rem;
        
        width 1.4rem
        height 1.4rem
        margin-right .1rem
        border-radius 50%
        border:2px solid #f9e4b3;
        // box-shadow: 

    }

/*充值提现*/
    .center-recharge{
        width: 7.5rem;
        height: 1.2rem;
        display: block;
        line-height: 1.2rem;
        background: #ffffff;
        margin-bottom: 0.4rem;
        // border-bottom 1px solid #e5e5e5
    }
    .center-recharge ul{
        height: 1.2rem;
        display: block;
    }
    .center-recharge ul li{
        // width: 3.45rem;
        width: 50%;
        height: 1.2rem;
        display: block;
        // line-height: 1.2rem;
        float: left;
        text-align: center;
    }
    .center-recharge ul li{
        font-size: 0.35rem;
        position: relative ;
    }
    .center-recharge1::after {
        // color: #fc823c;
        content:"";
        display:inline-block;
        width:1px;
        height:60%;
        background: #ececec;
        position: absolute;
        right:0;
        top:20%;
    }
   
    .center-recharge ul li img{
        width: 0.8rem;
        height: 0.8rem;
        display: inline-block;
        clear: both;
        position: relative;
        top: 0.2rem;
        vertical-align : top;
        margin-left:-.2rem;
    }

//   主体内容
    .center-main{
        width: 7.5rem;
        padding-bottom:1.8rem;
    }
    .center-main ul li{
        height: 1.5rem;
        line-height:1.5rem;
        display: flex;
        background: #fff;
        // justify-content: space-around;
    }
    .center-main ul li{
      border-bottom: 1px solid #f0f0f0;
    }
    .center-main ul li:last-child{
         border: none;
    }
    .center-main ul li .out_content{
        width:50%;
        height: 100%;
        display:flex;
        position:relative;
    }
    .center-main ul li .out_content span{
       width:0.6rem;
       height: 0.6rem;
       background: url('../../images/new_m_center/HOT.png') no-repeat center / cover;
    }
    .center-main ul li .inner_content{
        height: 100%;
        line-height:1.5rem;
    }
    .center-main ul li .inner_content h4, .center-main ul li .inner_content p, {
      min-height: 20px;
      line-height: 20px;
    }
    .center-main ul li .inner_content h4{
        font-size: .3rem;
        color: #323232;
        // font-weight:550;
        margin-top:.34rem;
    }
    .center-main ul li .inner_content p{
        font-size: .23rem;
        color: #b4b4b4;
    }

   

    .center-main ul li img{
        width: 0.6rem;
        height: 0.6rem;
        display: inline-block;
        clear: both;
        position: relative;
        top: 0.3rem;
        margin: .1rem 0.15rem;
    }





</style>
