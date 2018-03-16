<template>
  <div class="personal_content">
    <back title="个人资料" go-back="true"></back>
    <div class="personal">
      <!--dialogShow=true-->
      <dl @click="buildInputFile" style="position: relative;">
        <dt>头像</dt>
        <dd class="personal1">
          <span>
            <!--<img id="center-list2" src="../../images/Applcon29x29@3x.png" alt="">-->
            <!--<img :src="user.userinfo.avatar" alt="" >-->
            <img :src="userinfo.avatar" alt="" >
          </span>
        </dd>
        <dd class="personal2">
          <img src="../../images/my_more.png" alt="右箭头">
        </dd>
        <!--input type=file-->
        <div style="position: absolute;width: 100%;height: 100%;">
          <input type="file" id="upload" accept="image" @change="preview" style="display: none">
          <label for="upload" style="position: absolute;width:100%;height:100%;border: 0px solid red;"></label>
        </div>
      </dl>
      <dl @click="noupdateAlias">
        <dt>昵称</dt>
        <dd class="personal1" id="users-name">
          <!--{{user.userinfo.username}}-->
          {{userinfo.username}}
        </dd>
        <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
      </dl>
    <!--<router-link tag="div" class="tab-item" to="/verification">-->
      <!--<dl @click="toPhoneBind">
        <dt>绑定手机</dt>
        <dd class="personal1 " :class="userinfo.phone?'gray-color':'red-color'" >
          {{userinfo.phone?'已绑定':'立即绑定'}}
        </dd>
        <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
      </dl>-->
     <!--</router-link>-->
      <!--<router-link tag="div" class="tab-item" to="/b-card">-->
        <dl @click="toBankBind">
          <dt>绑定银行卡</dt>
          <!--user.userinfo.bankcard-->
          <dd class="personal1 " :class="userinfo.bankcard?'gray-color':'red-color'" >
            <!--{{user.userinfo.bankcard?'已绑定':'立即绑定'}}-->
            {{userinfo.bankcard?'已绑定':'立即绑定'}}
          </dd>
          <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      <!--</router-link>-->
      <router-link tag="div" class="tab-item" to="/t-password">
        <dl>
          <dt>修改密码</dt>
          <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/r-password">
        <dl>
          <dt>修改交易密码</dt>
          <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </router-link>

     <!-- <div class="tab-item" @click="toBankBind">
        <dl>
          <dt>修改密码</dt>
          <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </div>
      <div class="tab-item" @click="toBankBind">
        <dl>
          <dt>修改交易密码</dt>
          <dd  class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
        </dl>
      </div>-->
    </div>
    <!--弹层-->
    <div class="dialog-bg" v-if="dialogShow" @click="dialogShow=false"></div>
    <div class="dialog-container" v-show="dialogShow">
      <div class="dialog-content">
        <a href="javascript:;" class="dialog-file">选择图片
          <input type="file"  name="file" accept="image/png,image/gif,image/jpeg"  @change="preview">
        </a>
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Exif from 'exif-js'
  import axios from  'axios'
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
  import {mapState, mapActions} from 'vuex'
  import {OF_AVATE} from '../../store/user'

  export default {
    components: {
      Back,
    },
    data() {
      return {
        dialogShow: false,
        headerImage:'',
        picValue:'',
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        avatar:JSON.parse(sessionStorage.getItem('userinfo')).avatar || sessionStorage.getItem('avatar')
        /*username: this.user.userinfo.username,
        avate:  window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.avatar:'':'',
        isphone: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.phone?false:true:true:true,
        isbank: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.bankcard?false:true:true:true,*/
      }
    },
    computed: mapState({user: state => state.user}),
    /*{
      isbank() {
        return this.user.userinfo.bankcard?false:true
      },
      isphone() {
        return this.user.userinfo.phone?false:true
      },
      xx() {
        return mapState({user: state => state.user})
      }

    }*/
    created() {
      mt_loading_open();
      setTimeout(() => {
        mt_loading_close();
      },300)
    },
    methods: {
      ...mapActions([OF_AVATE]),
      buildInputFile() {
        /*let file = document.createElement('input')
        file.setAttribute('type','file')
        file.setAttribute('name','file')
        file.setAttribute('style','display:none;')
        file.setAttribute('accept','image/jpeg,image/gif,image/jpg,image/png')
        file.setAttribute('capture','photolibrary') // camera*/
      },
      preview(e) { // 上传头像
        mt_loading_open('上传中...')
        let file = e.target.files[0];
        let param = new FormData();
        param.append('file',file,file.name);
        console.log(param);
        let config = { // sessionStorage.getItem('token')  this.user.token
          headers:{'Content-Type':'multipart/form-data', 'Authorization': 'Bearer '+ sessionStorage.getItem('token')}
        };
        axios.post(requestOpt.urlAuthUser+'avatar',param,config)
          .then(res => {
            if (res.data.status === 1) {
              mt_toast('上传成功');
              mt_loading_close()
              this.dialogShow = false;
              this.userinfo.avatar = res.data.data.avatar;
              window.sessionStorage.setItem('avatar', res.data.data.avatar)


            } else {
              if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                window.sessionStorage.removeItem('userinfo')
                window.sessionStorage.removeItem('login')
                window.sessionStorage.removeItem('token')
                this.$router.push('/login')
              }
              mt_toast(res.data.msg)
            }
          }).catch(err => {
          mt_toast(err)
        })
      },
      noupdateAlias() {
        mt_toast('不能修改昵称')
      },
      toBankBind() { //  this.user.userinfo.bankcard
//        mt_toast('请联系在线客服修改')
        if (!this.userinfo.bankcard) {
          this.$router.push('/b-card')
        } else {
          mt_toast('请联系在线客服修改')
//          this.$router.push('/b-card')
//          this.$router.push('/p-bindbank')
//          alertip('已经绑定银行卡了')
        }
      },
      toPhoneBind() {
        if (!this.userinfo.phone) {
          this.$router.push('/verification')
        } else {
          this.$router.push('/p-bindphone')
//          alertip('已经绑定手机号码了')
        }
      }

    },
    mounted(){
        this.$root.bus.$on('sendFlag', (flag)=>{
            this.user.userinfo.bankcard = flag;
            this.user.userinfo.bankcard = flag;
        })
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .personal_content{
    width :7.5rem;
    height: 100%;
    display block
    overflow hidden
    background #ffffff
  }
  .personal{
    width 7.5rem
    height 8rem
    display block
    margin auto
    margin-top 0.88rem
  }
  .personal dl{
    width 7.5rem
    height 1rem
    border-bottom 1px solid #eeeeee;
    background #ffffff
    line-height 1rem
  }
  .personal dl dt{
    width 3.5rem
    height 1rem
    border-bottom 1px solid #eeeeee;
    background #ffffff
    float left
    margin-left 0.3rem
    display block
    font-size 0.34rem;
    color #000000
  }
  .personal dl dd.personal1{
      width: 2.92rem;
      float: left;
      display: inline-block;
      text-align: right;
      height 1rem
      font-size 0.34rem
      color #000000
    }
    .personal1 span{
      width 0.75rem
      height 0.75rem
      display inline-block
      border-radius 50%;
      text-align right
      margin-top 0.13rem
      z-index 99
    }
  .personal1 span img{
    vertical-align : baseline;
    width 0.75rem
    height 0.75rem
    display inline-block
    z-index 9
    border-radius 50%

  }
  .personal dl dd.red-color{
    color #ff3a3a;
  }
  .personal dl dd.gray-color{
    color #bbb;
  }

  .personal dl dd.personal2{
    width: 0.18rem;
    float: right;
    display: inline-block;
    text-align: right;
    height  : 1rem
    margin-right 0.3rem
  }
  .personal dl dd.personal2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top 0.4rem;

  }
  /* 弹层公共样式*/
  .dialog-bg {
    position absolute
    top 0
    z-index 999
    width 100%
    height 100%
    background transparent
  }
  .dialog-container {
    position absolute
    bottom 0rem
    overflow hidden
    z-index 1000
    width 92%
    padding .3rem
    background #fff
    text-align center
    font-size .3rem
    .dialog-content {
      width 100%
      .dialog-file {
        box-sizing border-box
        position: relative;
        display: block;
        width 100%
        background: #fff;
        border: 1px solid #ff3a3b;
        border-radius: 4px;
        padding: 4px 12px;
        overflow: hidden;
        color: #000;
        text-decoration: none;
        text-indent: 0;
        line-height: .5rem;
        box-shadow 0 2px 1px rgba(0,0,0,.2)
        input {
          position: absolute;
          width 100%
          height 100%
          right: 0 ;
          top: 0;
          opacity: 0;
        }
      }
    }
  }
</style>
