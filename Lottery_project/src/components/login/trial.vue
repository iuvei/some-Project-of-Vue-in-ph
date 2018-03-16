<template>
  <div class="login_content" @touchmove.prevent>

    <!--<img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">-->
    <div class="loginbg_images" ></div>
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="trial">
      <form action="">
        <dl class="trial1">
          <dt>
            <img class="trial-user" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input" v-model="username" maxlength="32" value="" >
          </dd>
        </dl>
        <dl  class="trial1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  maxlength="32" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="trial1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  maxlength="32" placeholder="请确认密码" v-model="pwa">
          </dd>
        </dl>
        <dl class="trial2">
          <input type="button" class="play1" value="立即试玩" @click="createDemoUser">
        </dl>
      </form>
      <dl class="trial3">
        <dt class="trial-left">
          <span></span>
        </dt>
        <dd class="trial-middle">
          <router-link tag="div" to="/login" replace>
            <input type="button" value="已有账号,直接登录">
          </router-link>
        </dd>
        <dd class="trial-right">
          <span></span>
        </dd>
      </dl>
      <dl class="trial4">
        <!--<dt v-for="(items, $index) in user.app_info.trial_account_info">{{items}}</dt>-->
        <dt>1、每个试玩账号初始金额5000元</dt>
        <dt>2、每个IP每天做多可以创建20个试玩帐号</dt>
        <dt>3、每个账号从注册开始有效期为7天,超过有效期系统自动收回</dt>
        <dt>4、试玩帐号不允许充值、提现操作</dt>
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt,mt_loading_open,mt_loading_close,mt_toast} from 'api/recommend'
  import {mapState,mapActions} from  'vuex'
  import {USER_SIGNIN, OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE} from '../../store/user'
  export default {
    components: {
      Back
    },
    data() {
      return {
        username: 'Trial202224',
        pw: '',
        pwa: ''
      }
    },
    computed:{
      ...mapState(['user'])
    },
    created() {
      this.getDemoUser();
      /*console.log(this.$store.state.user)
      console.log(this.$store.state.user.app_info)*/
    },
    methods: {
      ...mapActions([USER_SIGNIN,OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE]),
      createDemoUser() { // 立即试玩
        if (this.pw.length<6 || this.pwa.length<6) {
          mt_toast('密码至少6位')
          return
        }
        if (this.pw !== this.pwa) {
          mt_toast('两次密码不一致')
          return
        }
        mt_loading_open('创建账号中...')
        setTimeout(() => {
          mt_loading_close()
        },10000)
//        return
        requestOpt.reqPostNouser('trial_user',{
          username: this.username,
          password: this.pw,
          password_confirm: this.pwa
        }, res => {
          if (res.data.status === 1) {
            this.userData = res.data.data
            mt_loading_close()

            setTimeout(() => {
              mt_loading_open('创建成功,登录中...')
              this.quickPlay()
            },300)
//            this.USER_SIGNIN(res.data.data);
//            this.$router.push('/m-center')
//            this.quickPlay()
//            this.$router.push('/login')
//            alertip(res.data.msg)
          } else {
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err)
        })
      },
      getDemoUser() { // 获取玩家用户列表
        requestOpt.reqnoGet('trial_username', res => {
          if (res.data.status === 1) {
            this.username = res.data.data.username
          } else {
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err)
        })
      },
      quickPlay() { //  登录
        requestOpt.reqPostNouser('session', {
          username: this.username,
          password: this.pw,
          ver: '',
          imei: 'H5',
          imsi: '',
          idfa: '',
          uuid: '',
          sim: '',
          udid: '',
          mac: '',
          sys_ver: '',
          android_id : '',
          model: '',
          screen_size: '',
          screen_resolution: '',
          root: '',
          channel_code: '',
          push_id: ''
        }, res => {
          mt_loading_close()
          if (res.data.status === 1) {
            mt_toast('可以免费试玩了')
            window.sessionStorage.setItem('userinfo',JSON.stringify(res.data.data.userinfo))
            window.sessionStorage.setItem('login',true)
            window.sessionStorage.setItem('token',res.data.data.token)
            this.USER_SIGNIN(res.data.data);
            this.OF_CARD_NUMMBER(res.data.data.userinfo.bankcard)
            this.OF_CARD_NAME(res.data.data.userinfo.bankcard_user)
            this.OF_AVATE(res.data.data.userinfo.avatar)
            this.$store.commit('ISLOGIN', true)
            this.$store.commit('TOKEN',res.data.data.token )
            /*setTimeout(() => {
              if (res.data.data.token) {
                this.getSingInfo(res.data.data.token)
              }
            },5000)*/
            if(window.link === 'vicode') {
              this.$router.replace('/home')
              window.link === 'home'
            } else {
              this.$router.go(-1)
            }
          }else {
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_loading_close()
          mt_toast(err)
        })
      },
      getSingInfo(token) {
        requestOpt.reqGet('sign',token, res => {
          if (res.data.status === 1) {
            let list = res.data.data
            this.$store.commit('SINGINFO',list)
//            console.log(res.data)
          } else {
//            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err.response.statusText)
        })
      },
    },

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

  /*.login_content{
    width :7.5rem;
    height: 100%;
    display block
    overflow hidden
  }
  .bg_images{
    width 7.5rem
    height 13.34rem
    z-index -9999
    float left
  }*/
  .login_content{
    /*width :7.5rem;
    height: 13.34rem;*/
    display block
    overflow hidden
    width 100%
    height 100%
  }
  .bg_images{
    /*width 7.5rem*/
    /*height 13.34rem*/
  // z-index -9999
    /*float left*/

  }
  .loginbg_images {
    position absolute
    z-index 0
    width 100%
    height 100%
    background linear-gradient(#e54a55, #A588A8, #86A2CE, #6db7eb),url(../../images/bg@2x.png)
  }
  .back1-content{
    width 6.9rem
    margin auto
    height :0.88rem;
  }
  .back1-btn{
    position relative
    width 0.88rem
    height 0.88rem
    display block
    z-index 2
  }
  .back1-btn i{
    width 0.88rem
    height 0.88rem
    display block
    z-index 3
  }

  .trial{
    width 6.9rem
    height 10rem
    display block
    z-index 0
    position absolute
    top: 2.28rem
    left 0.3rem
  }
  .trial dl{
    width 6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
    background none
  }
  .trial1 dl dt{
    float left
    width 0.72rem
    height 0.8rem

  }
  .trial1 dl dd{
    float right
    width 6.18rem
    height 0.8rem
  }
  input.login-input{
    width 6.18rem
    height 0.8rem
    font-size 0.3rem
    text-indent 0.1rem
    display block
    color #fff
    border:none
    outline:none
    background none
    float right
    line-height 1.5em
  }
  .trial-user{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  .trial-password{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.trial-user{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.23rem
    margin-left 0.235rem
  }
  img.trial-password{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.23rem
    margin-left 0.235rem
  }

  .trial dl.trial1{
    margin-bottom 0.2rem
    background : #c390a3
  }
  //  立即试玩
  input.play1{
    width  6.9rem
    height 0.8rem
    display block
    font-size 0.32rem
    color #ffffff
    font-weight normal
    float left
    border none
    outline none
    background none
  }
  .trial dl.trial2{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
    float left
    margin-top 0.4rem
  }
  .trial dl.trial3{
    width 6.9rem
    height 0.8rem
    display block
    margin-top  1.2rem
  }
  dl.trial3 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.trial3 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.trial3 dd.trial-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block
  }
  dl.trial3 dd.trial-middle input{

    width 3.9rem
    float left
    height 0.8rem
    font-size 0.32rem
    color #ffffff
    font-weight normal
    text-align center
    line-height 0.8
    border none
    outline none
    background none
  }
  dl.trial3 dd.trial-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.trial3 dd.trial-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  .trial dl.trial4{
    width 6.9rem
    margin-top 1rem
    display block
    /*color #ff3a3b*/
    color #fff
  }
  .trial dl.trial4 dt{
    width 6.9rem
    display block
    float left
    font-size 0.24rem
    font-weight normal
    text-align left
    overflow hidden
    line-height 0.34rem
  }
  img.back1-icon{
    width 0.22rem
    height 0.3rem
    display block
    z-index 999
    float left
    position fixed
    top:0.22rem
  }
  //  设置输入框的颜色
  ::-webkit-input-placeholder {

    color: #fff;

  }
  :-moz-placeholder {/* Firefox 18- */

    color: #fff;
  }

  ::-moz-placeholder{/* Firefox 19+ */

    color: #fff;

  }

  :-ms-input-placeholder {

    color: #fff;

  }
  .login input:focus{color:#fff}





</style>










































































