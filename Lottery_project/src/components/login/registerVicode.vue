<template>
  <div class="register_content" @touchmove.prevent>

    <!--<img class="bg_images" src="../../images/bg@2x.png" alt="背景图片">-->
    <div class="loginbg_images" ></div>
    <div class="back1-content">
      <!--<a class="back1-btn" onclick="history.go(-1)" >
        <img class="back1-icon" src="../../images/Return-@2x.png">
      </a>-->
    </div>
    <div class="register">
      <form action="">
        <dl class="register1">
          <dt>
            <img class="trial-user" src="../../images/username@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  maxlength="30" minlength="6" placeholder="请输入账号" v-model="username">
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
          <img v-if="verify_code" :src="verify_code" class="verify" @click="getVerify_code" />
          <img v-else src="../../images/code_bgk.png" alt="" class="verify" />
          <p v-if="errflag" class="verify" @click="getVerify_code">重试</p>
        </dl>
        <dl class="register1">
          <dt>
            <img class="trial-password" src="../../images/password@2x.png" alt="">
          </dt>
          <dd>
            <input type="text" class="login-input"  minlength="8" maxlength="8" placeholder="邀请码（选填）"  v-model="inv_code" readonly>
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
          <input type="button" class="log-btn" value="注册" @click="handleRegist">
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
          <!--<div onclick="javascript:window.open('https://www.zzcp.com/')">
            <input type="button" value="已有账号,直接登录">
          </div>-->
        </dd>
        <dd class="register-right">
          <span></span>
        </dd>
      </dl>
    </div>

    <div class="fixmid" v-show="fixed_show">

      <div class="fixmid-left">
        <span @click="fixed_show=false">关闭</span>
        <div class="fixmid-left-cont">
          <!--<h3 @click="try_btn">免费试玩</h3>-->
          <h3 @click="$router.push('/helpCenter')">帮助中心</h3>
          <img src="../../images/erweima_ip.png" alt="苹果二维码">
          <p>扫一扫</p>
          <p>下载苹果APP</p>
        </div>
      </div>

      <div class="fixmid-right">
        <span @click="fixed_show=false">关闭</span>
        <div class="fixmid-right-cont">
          <h3 >
            <a target="_blank" href="https://chat56.live800.com/live800/chatClient/chatbox.jsp?companyID=924733&configID=151352&jid=3735883802&s=1">
              在线客服
            </a>
          </h3>
          <!--<h4>
            <a target="_blank" href="tencent://message/?exe=qq&menu=yes&Uin=106962856">在线qq</a>
          </h4>-->
          <img src="../../images/erweima_ad.png" alt="安卓二维码">
          <p>扫一扫</p>
          <p>下载安卓APP</p>
        </div>
      </div>
    </div>


  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt,mt_toast,mt_loading_open,mt_loading_close} from 'api/recommend'

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
        fixed_show: !window.isDevice, // true mobile
      }
    },
    beforeRouteLeave(to, from, next) {
      document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px'
      next()
    },
    mounted() {
      document.documentElement.style.fontSize =  '50px'
      window.link = 'vicode';
      let hash = location.hash;
      if(hash.indexOf('?') > 0) {
        let strstr = hash.substr(hash.indexOf('?')+1)
        let hash_arr = strstr.split('=');
        this.inv_code = hash_arr[1]
      }

//      console.log(this.inv_code)
      this.getVerify_code()
    },
    methods: {

      getVerify_code() {
        requestOpt.reqnoGet('verify_code', res => {
          mt_loading_close()
          if (res.data.status === 1) {
            this.errflag = false
            this.verify_code = res.data.data.verify_code
            this.verify_key = res.data.data.verify_key
//            console.log(this.verify_code)
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
      handleRegist() {
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
//            this.$store.commit('RIGESTNAME',this.username)
//            this.$router.replace('/login');
            setTimeout(() => {
              window.location.href='https://www.zzcp.com/'
            },300)
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
      }
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
    display block
    overflow hidden
    width 100%
    height 100%
  }
  .loginbg_images {
    position absolute
    z-index 0
    width 100%
    height 100%
    background linear-gradient(#e54a55, #A588A8, #86A2CE, #6db7eb),url(../../images/bg@2x.png)
  }
  .back1-content{
    width 6.6rem
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
    width 6.6rem
    height 10rem
    z-index 0
    position absolute
    /*top: 2.28rem*/
    left 0.3rem
    right 0.3rem
    top 0
    bottom 0
    margin auto
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
    width 6.6rem
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
    width 5.88rem
    height 0.8rem
  }
  input.login-input{
    width 5.88rem
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
    width  6.6rem
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
    width  6.6rem
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
    width 6.6rem
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
    width 3.6rem
    float left
    height 0.8rem
    display block


  }
  dl.register4 dd.register-middle input{

    width 3.6rem
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
    width  6.6rem
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

  /*tip*/
  .fixmid-left{
    width: 130px;
    position: absolute;
    top:50%;
    transform: translate3d(-5.3rem,-50%,0);
    left:0;
    right 0
    z-index:999;
    margin auto
    /* background:#fff; */
  }

  .fixmid-left-cont{

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,.1);
    border-top: 1px dashed #ccc;
  }
  .fixmid-left>div, .fixmid-right>div {
    background: #fff;
    padding: 10px;
  }

  .fixmid-right{
    position: absolute;
    top:50%;
    transform: translate3d(5.3rem,-50%,0);
    right:0;
    left 0
    margin auto
    width: 130px;
    z-index:999;
  }
  /* 关闭按钮 */
  /* 内容区域 */

  /* 左边固定 */
  .fixmid-left>span{
    display: block;
    width: 90px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 auto;
    background:#fff;
    /* background:red; */
    font-size: 13px;
    color: red;
    cursor: pointer;
  }

  .fixmid-left>span::before{
    top:0px;
    left:0px;
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  .fixmid-left>span::after{
    top: 0px;
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    right: 0px;
  }


  .fixmid-left>span:hover{

    color: #666;
  }

  .fixmid-left-cont>h3,.fixmid-left-cont>h4{
    width: 100%;
    height: 30px;
    background: #187e00;
    text-align: center;
    /* line-height: 30px; */
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    padding: 5px  0;
  }

  .fixmid-left-cont>h3{

    margin-top:5px;
    margin-bottom: 10px;
  }

  .fixmid-left-cont>h3::before{
    display: inline-block;
    vertical-align: middle;
    content: "";
    width:22px;
    height: 22px;
    background: url('../../images/mianfei_shiwan.png') no-repeat  center / cover;
    margin-left: -5px;
    margin-right: 5px;
  }

  .fixmid-left-cont>h4::before{
    content: "";
    vertical-align:middle;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url('../../images/bangzhu_zhongxin.png') no-repeat center / cover ;
    margin-left: -5px;
    margin-right: 5px;
  }

  .fixmid-right-cont>h3::before{

    background: url('../../images/mianfei_shiwan.png') no-repeat  center / cover;
  }


  .fixmid-left-cont>img{
    width: 100%;
    margin-top:10px;
  }



  .fixmid-left-cont>p:nth-child(3){
    color: #187e00;
    font-size: 13px;
    text-align: center;
    padding: 10px 0px;
  }

  .fixmid-left-cont>p:nth-child(4){
    color: #434343;
    font-size: 12px;
    text-align: center;
  }
  /* 右边固定 */


  .fixmid-right>span{
    display: block;
    width: 90px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin: 0 auto;
    background:#fff;
    /* background:red; */
    font-size: 13px;
    color: red;
    cursor: pointer;
  }

  .fixmid-right>span::before{
    top:0px;
    left:0px;
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
  }

  .fixmid-right>span::after{
    top: 0px;
    position: absolute;
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-bottom: 20px solid #fff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    right: 0px;
  }


  .fixmid-right>span:hover{

    color: #666;
  }

  .fixmid-right-cont>h3, .fixmid-right-cont>h4{
    width: 100%;
    height: 30px;
    background: #187e00;
    text-align: center;
    /* line-height: 30px; */
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    padding: 5px  0;
  }

  .fixmid-right-cont>h3>a, .fixmid-right-cont>h4>a{

    color: #fff;
  }

  .fixmid-right-cont>h3{
    margin-top:5px;
    margin-bottom: 10px;
  }

  .fixmid-right-cont{
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 0px 10px 10px rgba(0,0,0,.1);
    border-top: 1px dashed #ccc;
  }

  .fixmid-right-cont>h3::before{
    display: inline-block;
    vertical-align: middle;
    content: "";
    width:22px;
    height: 22px;
    background: url('../../images/zaixian_kefu.png') no-repeat center / cover;
    margin-left: -5px;
    margin-right: 5px;
  }

  .fixmid-right-cont>h4::before{
    content: "";
    vertical-align:middle;
    display: inline-block;
    width: 22px;
    height: 22px;
    background: url('../../images/zaixian_kefu.png') no-repeat center / cover ;
    margin-left: -15px;
    margin-right: 10px;
  }

  .fixmid-right-cont>img{
    width: 100%;
    margin-top:10px;
  }



  .fixmid-right-cont>p:nth-child(3){
    color: #187e00;
    font-size: 13px;
    text-align: center;
    padding: 10px 0px;
  }

  .fixmid-right-cont>p:nth-child(4){
    color: #434343;
    font-size: 12px;
    text-align: center;
  }


</style>










































































