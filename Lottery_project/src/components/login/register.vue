<template>
  <div class="register_content" @touchmove.prevent>

    <!--<img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">-->
    <div class="loginbg_images" ></div>
    <div class="back1-content">
      <a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>
    </div>
    <div class="register">
      <form action="">
        <dl class="register1">
          <dt>
            <img class="trial-user" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  maxlength="16" minlength="6" placeholder="用户名(字母或数字[6-12位])" v-model="username">
          </dd>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  minlength="8" placeholder="请输入密码" v-model="pw">
          </dd>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="password" class="login-input"  minlength="8" placeholder="请再次输入密码" v-model="pwagain" >
          </dd>
        </dl>
        <dl class="register1"  style="position: relative">
          <dt>
            <img class="trial-password" src="../../images/code@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="password login-input"  maxlength="32" placeholder="请输入验证码" v-model="yzm">
          </dd>
          <img v-if="verify_code" :src="verify_code" class="verify" @click="getVerify_code">
          <img v-else src="../../images/code_bgk.png" alt="" class="verify">
          <p v-if="errflag" class="verify" @click="getVerify_code">重试</p>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  minlength="8" maxlength="8" placeholder="邀请码（选填）"  v-model="inv_code">
          </dd>
        </dl>
        <dl class="register2">
          <dt>
            <input type="checkbox" id="checkbox_a1" class="chk_1" checked/>
            <label for="checkbox_a1"></label>
          </dt>
          <dd>
            <router-link tag="div"  to="/agreement">
              <input type="button" value="我已阅读并同意《彩票》相关条例">
            </router-link>
          </dd>
        </dl>
        <dl class="register3">
          <!--handleRegist-->
          <!--regist-->
          <input type="button" class="log-btn" value="注册" @click="regist">
        </dl>

      </form>

      <dl class="register5">
        <router-link tag="div"  to="/trial" replace>
          <input type="button" class="play-btn" value="免费试玩">
        </router-link>
      </dl>
      <dl class="register4">
        <dt class="register-left">
          <span></span>
        </dt>
        <dd class="register-middle">
          <router-link tag="div" to="/login" replace>
            <input type="button" value="已有账号,直接登录">
          </router-link>
        </dd>
        <dd class="register-right">
          <span></span>
        </dd>
      </dl>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import { Indicator } from "mint-ui";
  import Back from '@/components/back/back'
  import {alertip, requestOpt,mt_toast,mt_loading_open,mt_loading_close} from 'api/recommend'
  import {mapActions} from  'vuex'
  import {USER_SIGNIN, OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE} from '../../store/user'

  export default {
    components: {
      Back
    },
    data() {
      return {
        username: '',
        pw: '',
        pwagain: '',
        inv_code: '',
        yzm: '',
        code: '',
        verify_code:'',
        status:'',
        verify_key:'',
        errflag: false,
      }
    },
    mounted() {
      this.getVerify_code()
    },
    methods: {
      ...mapActions([USER_SIGNIN,OF_CARD_NAME, OF_CARD_NUMMBER, OF_AVATE]),
      getVerify_code() {
        requestOpt.reqnoGet('verify_code', res => {
          mt_loading_close()
          if (res.data.status === 1) {
            this.errflag = false
            this.verify_code = res.data.data.verify_code
            this.verify_key = res.data.data.verify_key
            console.log(this.verify_code)
          } else {
            this.verify_code=''
            this.errflag = true
            mt_toast(res.data.msg)
          }
        }, err => {
          this.verify_code=''
          this.errflag = true
          mt_loading_close()
//          mt_toast(err.response.statusText)
        })
      },
      regist() {
        if(!this.username) {
          mt_toast('用户名不能为空')
          return;
        }
        if(!/^[a-z|A-Z]{1}\w{5,11}$/.test(this.username.replace(/\s/g,''))) {
          mt_toast('用户名(字母或数字[6-12位])且首字符必须是字母')
          return;
        }
        mt_loading_open()
        requestOpt.reqPostNouser('user_new', {
          username: this.username,
          password: this.pw,
          password_confirm: this.pwagain,
          inv_code: this.inv_code,
          verify_code: this.yzm,
          verify_key: this.verify_key,
          ver: '1.0.0',
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
            mt_toast(res.data.msg)
            this.$router.push('/m-center');
            window.sessionStorage.setItem('userinfo',JSON.stringify(res.data.data.userinfo))
            window.sessionStorage.setItem('login',true)
            window.sessionStorage.setItem('token',res.data.data.token)
            this.USER_SIGNIN(res.data.data);
            this.OF_CARD_NUMMBER(res.data.data.userinfo.bankcard)
            this.OF_CARD_NAME(res.data.data.userinfo.bankcard_user)
            this.OF_AVATE(res.data.data.userinfo.avatar)
            this.$store.commit('ISLOGIN', true)
            this.$store.commit('TOKEN',res.data.data.token )
            Indicator.close();
          } else {
            mt_toast(res.data.msg)
            this.getVerify_code()
          }

        }, err => {
          mt_toast(err)
        })
      },
      handleRegist() {
        if(!this.username) {
          mt_toast('用户名不能为空')
          return;
        }
        if(!/^[a-z|A-Z]{1}\w{5,11}$/.test(this.username)) {
          mt_toast('用户名(字母或数字[6-12位])且首字符必须是字母')
          return;
        }
        mt_loading_open()
        requestOpt.reqPostNouser('user', {
          username: this.username,
          password: this.pw,
          password_confirm: this.pwagain,
          inv_code: this.inv_code,
          verify_code: this.yzm,
          verify_key: this.verify_key
        }, res => {
          mt_loading_close()
          if (res.data.status === 1) {
            mt_toast(res.data.msg)
            this.$store.commit('RIGESTNAME',this.username)
            this.$router.replace('/login');

            /*setTimeout(() => {
              this.usrlogin()
            },300)*/
          } else {
            /*this.status = res.data.code
            if (this.status==666) {
              this.getVerify_code()
              mt_toast(res.data.msg)
            } else {
              mt_toast(res.data.msg)
            }*/
            mt_toast(res.data.msg)
            this.getVerify_code()
          }
        }, err => {
          mt_loading_close()
          mt_toast(err)
        })
      },
      usrlogin() {
        Indicator.open({
          text: "登录中...",
          spinnerType: "fading-circle"
        });
        requestOpt.reqPostNouser('session', {
          username: this.username,
          password: this.pw,
          ver: '1.0.0',
          verify_code: this.yzm,
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
            this.$router.push('/m-center');
//            console.log(res.data.msg)
            window.sessionStorage.setItem('userinfo',JSON.stringify(res.data.data.userinfo))
            window.sessionStorage.setItem('login',true)
            window.sessionStorage.setItem('token',res.data.data.token)
            this.USER_SIGNIN(res.data.data);
            this.OF_CARD_NUMMBER(res.data.data.userinfo.bankcard)
            this.OF_CARD_NAME(res.data.data.userinfo.bankcard_user)
            this.OF_AVATE(res.data.data.userinfo.avatar)
            this.$store.commit('ISLOGIN', true)
            this.$store.commit('TOKEN',res.data.data.token )
            mt_toast(res.data.msg)
//            this.$router.replace({path:'/m-center'})
            Indicator.close();


          }else {
            Indicator.close();
          }
        }, err => {
//          console.log(err)
          Indicator.close();
        })
      },
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  /*.register_content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow hidden
  }
  .bg_images{
    width 7.5rem
    height 13.34rem
    z-index -9999
    float left
  }*/
  .register_content{
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

  .register{
    width 6.9rem
    height 10rem
    display block
    z-index 0
    position absolute
    top: 2.28rem
    left 0.3rem
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
  .verify{
    position absolute
    right  0
    width 2rem
    height .8rem
    text-align center
    line-height .8rem
    font-size .32rem
  }

  //  设置dl样式
  .register dl.register1{
    margin-bottom 0.2rem
    background : #c390a3
  }
  .register dl{
    width 6.9rem
    height 0.8rem
    display block
    margin-bottom 0.4rem
  }
  .register dl dt{
    float left
    width 0.72rem
    height 0.8rem

  }
  .register dd{
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



  .register dl.register2 dd input{
    width 5.9rem
    float left
    height 0.8rem
    font-size 0.26rem
    color #ffffff
    font-weight normal
    text-align left
    line-height 0.8
    border none
    outline none
    background none
  }

  //注册
  input.log-btn{
    width  6.9rem
    height 0.8rem
    display block
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border none
    background none
    outline none
  }

  .register dl.register2{
    margin-bottom 0.2rem
  }

  //  免费试玩
  .login dl.pa-1{
    margin-bottom 0.2rem
    background : #666666
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
    border 1px solid #ffffff
    box-sizing: border-box;
    background: rgba(0,0,0,0);
  }
  .trial dl.register4{
    width 6.9rem
    height 0.8rem
    display block
    margin-top  1.2rem
  }
  dl.register4 dt{
    width 1.5rem
    float left
    height 0.8rem
    display block

  }
  dl.register4 dt span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }
  dl.register4 dd.register-middle{
    width 3.9rem
    float left
    height 0.8rem
    display block


  }
  dl.register4 dd.register-middle input{

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
  dl.register4 dd.register-right{
    width 1.5rem
    float right
    height 0.8rem
    display block
  }
  dl.register4 dd.register-right span{
    width 1.5rem
    float left
    height 1px
    display block
    background #ffffff
    position relative
    top: 0.4rem
  }


  .chk_1 {
    display: none;
  }

  .chk_1 + label {
    border: 1px solid #ffffff;
    width 0.26rem
    height 0.26rem
    display: inline-block;
    position: relative;
    outline:none
    float left
    text-align center
    margin 0.28rem 0.24rem
    /*-webkit-appearance: none;*/
    vertical-align: middle;
    box-sizing: border-box;
    (-prefix-)user-select none;
    -webkit-appearance:none;
    appearance:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-indent: 0;
    background: transparent;
    resize:none;
    line-height: normal;
  }

  .chk_1:checked + label {
    border: 1px solid #ffffff;
    position : relative;
  }

  .chk_1:checked + label:after {
    content: ''; //勾选符号
    position: absolute;
    color: #35b5fe;
    width: 0.26rem
    height 0.26rem;
    text-align: center;
    // font-size: 0.3rem;
    left:-0.02rem;
    top:-0.01rem;
    background: url('../../images/choice-select@3x.png') no-repeat center / cover
    // vertical-align: text-top;
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


  dl.register3{
    width  6.9rem
    height 0.8rem
    display block
    line-height 0.8rem
    background #35b5fe
    font-size 0.32rem
    color #ffffff
    font-weight normal
    border-radius 4px
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










































































