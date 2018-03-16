<template>
  <div class="login_content" @touchmove.prevent>
<!--../../images/bg@2x.png-->
    <!--<img class="bg_images" :src="loginbg" alt="背景图片">-->
    <div class="loginbg_images" ></div>
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="login">
      <form action="" autocomplete="off">
        <dl class="ad-1">
          <dt>
            <img class="admin-icon" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="admin login-input" maxlength="32" placeholder="请输入账号" v-model="username">
          </dd>
        </dl>
        <dl class="pa-1">
          <dt>
            <img class="password-icon" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="password login-input"  maxlength="32" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="pa-1" v-if="status==666" style="position: relative">
          <dt>
            <img class="password-icon" src="../../images/code@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="password login-input"  maxlength="32" placeholder="请输入验证码" v-model="code">
          </dd>
          <img :src="verify_code" class="verify" @click="getVerify_code">
        </dl>
        <dl class="lg-1">
          <input type="button" class="log-btn" value="登录" @click="usrlogin">
        </dl>
        <dl class="pl-1">
          <router-link tag="div"  to="/trial" replace>
            <input type="button" class="play-btn" value="免费试玩">
          </router-link>
        </dl>
        <dl class="waring-title">
          <dt @click="toForget">
            <!--<router-link tag="dt" to="/forget">-->
              <span>忘记密码</span>
            <!--</router-link>-->
          </dt>
          <!--<dd>-->
            <router-link tag="dd" to="/register" replace>
              <a>还没有账号？立即注册</a>
            </router-link>
          <!--</dd>-->
        </dl>
      </form>
    </div>
    <!--第三方登录-->
   <!--
    <div class="other-login">
      <dl class="other-login1">
        <dt class="other-login1-left">
          <span></span>
        </dt>
        <dd class="other-login1-middle">
          第三方登录
        </dd>
        <dd class="other-login1-right">
          <span></span>
        </dd>
      </dl>
      <div class="other-login2">
        <ul>
          <li>
            <img src="../../images/qq.png" alt="" @click="getQQ">
          </li>
          <li>
            <img src="../../images/WeChat.png" alt="" @click="getVct">
          </li>
          <li>
            <img src="../../images/xinlang.png" alt="" @click="getVb">
          </li>
        </ul>
      </div>
    </div>-->

  </div>

</template>


<script type="text/ecmascript-6">

  import { Indicator } from "mint-ui";
  import Back from '@/components/back/back'
  import {alertip, requestOpt,mt_toast} from 'api/recommend'
  import {api_ver} from 'api/config'
  import Sha1 from 'sha1.js'
//  import Md5 from 'md5.js'
  import crypto from 'crypto'

  import {mapActions} from  'vuex'
  import {USER_SIGNIN, OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE} from '../../store/user'

  import loginbg from '@/images/bg@2x.png'

  export default {
    components: {
      Back
    },
    data() {
      return {
        username: this.$store.state.user.regist_name||'',
        pw: '',
        apiver: api_ver,
        loginbg: window.sessionStorage.getItem('loginBG') || loginbg,
        status: '',
        code: '',
        verify_code:'',
        verify_key: '',
      }
    },
    mounted() {
//      console.log(Sha1)
      /*console.log(crypto)
      let md5 = crypto.createHash('md5')
      md5.update(this.pw).digest('hex')*/
    },
    methods: {
      ...mapActions([USER_SIGNIN,OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE]),
      toForget() {
        mt_toast('请联系在线客户找回密码')
      },
      usrlogin() {
        Indicator.open({
            text: "登录中...",
            spinnerType: "fading-circle"
        });
        /*setTimeout(() => {
          Indicator.close();
        },5000)*/
        requestOpt.reqPostNouser('session', {
          username: this.username,
          password: this.pw,
//          password: Sha1.base64(this.pw),
//          password: crypto.createHash('md5').update(this.pw).digest('hex'),
          ver: this.apiver,
          verify_code: this.code,
          verify_key: this.verify_key,
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

          if (res.data.status === 1) {
            if(this.username === this.$store.state.user.regist_name) {
              this.$store.commit('RIGESTNAME','')
            }
            window.sessionStorage.setItem('userinfo',JSON.stringify(res.data.data.userinfo))
            window.sessionStorage.setItem('login',true)
            window.sessionStorage.setItem('token',res.data.data.token)
            this.USER_SIGNIN(res.data.data);
            // console.log(res.data.data.userinfo.bankcard)
            this.OF_CARD_NUMMBER(res.data.data.userinfo.bankcard)
            this.OF_CARD_NAME(res.data.data.userinfo.bankcard_user)
            this.OF_AVATE(res.data.data.userinfo.avatar)
            this.$store.commit('ISLOGIN', true)
            this.$store.commit('TOKEN',res.data.data.token )
            if(window.link === 'vicode') {
              this.$router.replace('/home')
              window.link === 'home'
            } else {
              this.$router.go(-1)
            }

            /*setTimeout(() => {
              if (res.data.data.token) {
                this.getSingInfo(res.data.data.token)
              }
            },5000)*/
            Indicator.close();
            /*if(this.$store.state.user.login_flag == 'gameplay') {
              this.$router.replace('gameplay/'+this.$store.state.user.lot_code_id_pan.code+'/'+this.$store.state.user.lot_code_id_pan.typeid+'/'+this.$store.state.user.lot_code_id_pan.pan)
            } else if(this.$store.state.user.login_flag == 'home') {
              this.$router.replace('/home')
            } else if(this.$store.state.user.login_flag == 'm-center') {
              this.$router.replace('/m-center')
            }
            else {*/
//              this.$router.go(-1)
//            }
//            setTimeout(() => {
//              this.$router.go(-1)
//            },300)
            mt_toast(res.data.msg)
//            this.$router.replace({path:'/m-center'})
          }else {
            this.status = res.data.code
            if (this.status==666) {
              this.getVerify_code()
              mt_toast(res.data.msg)
            } else {
              mt_toast(res.data.msg)
            }

//            console.log(res.data.msg)
//            mt_toast(res.data.msg)
            Indicator.close();
          }
        }, err => {
//          console.log(err)
//          alertip(err)
          Indicator.close();
        })
      },
      getSingInfo(token) {
        requestOpt.reqGet('sign',token, res => {
          if (res.data.status === 1) {
            let list = res.data.data
            this.$store.commit('SINGINFO',list)
            window.sessionStorage.setItem('signinfo',JSON.stringify(list))
//            console.log(res.data)
          } else {
//            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err.response.statusText)
        })
      },
      getVerify_code() {
        requestOpt.reqnoGet('verify_code', res => {
          if (res.data.status === 1) {
            this.verify_code = res.data.data.verify_code
            this.verify_key = res.data.data.verify_key
            console.log(this.verify_code)
          } else {
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err.response.statusText)
        })
      },
      //      第三方登陆
      getQQ(){
        console.log('QQ登陆')
      },
      getVct(){
        console.log('微信登陆')
      },
      getVb(){
        console.log('微博登陆')
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
    // z-index 3
  }
  .login{
    width 6.9rem
    display block
    // z-index 1
    position absolute
    top: 2.28rem
    left 0.3rem
  }
  //登录的界面
  .login dl{
    width  6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
  }

  .login dl dt{
    float left
    width 0.72rem
    height 0.8rem
  }
  .login dl dd{
    float right
    width 6.18rem
    height 0.8rem
  }
  input.login-input{
    width 6.18rem
    height 0.8rem
    font-size 0.3rem
    text-indent .2em
    display block
    color #ffffff
    border:none
    outline:none
    background: rgba(0,0,0,0);
    line-height 1.5em
    -webkit-user-modify: read-write-plaintext-only;
  }
  .admin-icon{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.admin-icon{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.2rem
    margin-left 0.235rem
  }
  .password-icon{
    width 0.72rem
    height 0.8rem
    display block
    text-align center
    float left
  }
  img.password-icon{
    width 0.32rem
    height 0.33rem
    display block
    margin-top 0.25rem
    margin-left 0.235rem
  }
  input.log-btn{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background: rgba(0,0,0,0);
    border none
    outline none
    font-size 0.32rem
    color #ffffff
    font-weight normal
  }
  .login dl.lg-1{
    position relative
    top: 0.1rem
    margin-top 0.4rem
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
    border-radius 4px
  }
  input.play-btn{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
    -webkit-appearance: none;
    -moz-appearance:    none;
    appearance:         none;
    border 1px solid #ffffff
    box-sizing: border-box;
    background: rgba(0,0,0,0);
  }

  .login dl.waring-title{
    margin-top .3rem
    line-height 0.6rem
  }
  dl.waring-title dt{
    loat left
    width 3.45rem
    height 0.6rem
  }
  dl.waring-title dd{
    loat right
    width 3.45rem
    height 0.6rem
    text-align right
  }
  .waring-title dt span{
    font-size 0.26rem
    color #ffffff
    font-weight normal
  }
  .waring-title  dd a{
    font-size 0.26rem
    color #ffffff
    font-weight normal
    text-decoration underline
  }


  .login dl.ad-1{
    margin-bottom 0.2rem
    background #c390a3
    border none
  }
  .login dl.pl-1{
    margin-bottom 0
  }
  .login dl.pa-1{
    margin-bottom 0.2rem
    background #c390a3
    border none
  }


  img.back1-icon{
    width 0.22rem
    height 0.3rem
    display block
    // z-index 999
    float left
    position fixed
    top:0.22rem
  }
    .verify{
      position absolute
      right  0
      height .8rem
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


  //  第三方登录

  .other-login{
    width 6.9rem
    height 2rem
    display block
    margin-left 0.3rem
    // z-index 99
    position fixed
    top: 8.3rem
  }

  .other-login dl.other-login1{
    width 6.9rem
    height 0.8rem
    display block
  }
  dl.other-login1 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.other-login1 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.other-login1 dd.other-login1-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block
  }
  dl.other-login1 dd.other-login1-middle{
    width 3.9rem
    float left
    height 0.8rem
    font-size 0.24rem
    color #ffffff
    font-weight normal
    text-align center
    line-height 0.8rem
  }
  dl.other-login1 dd.other-login1-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.other-login1 dd.other-login1-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }

  .other-login .other-login2{
    width 4rem
    height 0.76rem
    display block
    margin-left 1.85rem
  }

  .other-login .other-login2 ul li{
    width 0.76rem
    height 0.76rem
    display block
    margin-right 0.47rem
    background none
    float left
  }
  .other-login2 ul li img{
    width 0.76rem
    height 0.76rem
    display block
    float left
    border-radius 45px
  }
</style>










































































