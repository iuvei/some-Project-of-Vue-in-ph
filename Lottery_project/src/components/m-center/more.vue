<template>
  <div class="more_content">
    <back title="更多设置" go-back="true"></back>
    <div class="more">
       <div class="more-conten">
         <dl @click="clear_login">
           <dt>清除历史登录信息</dt>
           <dd class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
         </dl>
         <dl>
           <dt @click="clear_all">清除缓存</dt>
           <dd class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
         </dl>
         <!-- <dl>
            <dt>开奖推送通知</dt>
            <mt-switch v-model="on_btn" @change="setApp"></mt-switch>
          </dl>
          <dl>
            <dt>中奖推送通知</dt>
            <mt-switch v-model="off_btn" @change="setApp"></mt-switch>
          </dl>-->
         <!--<dl>-->
         <!--<dt>摇一摇音效</dt>-->
         <!--<dd  class="personal2"><el-switch class="per-switch" v-model="soundVal" on-color="#13ce66" off-color="#888" on-text="开" off-text="关" ></el-switch></dd>-->
         <!--</dl>-->
         <!-- <dl @click="getAppNewVer">
           <dt>版本查看</dt>
           <dd class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
         </dl> -->
         <router-link to="/about">
           <dl>
             <dt>关于</dt>
             <dd class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
           </dl>
         </router-link>
         <router-link to="/helpCenter">
           <dl>
             <dt>帮助中心</dt>
             <dd class="personal2"><img src="../../images/my_more.png" alt="右箭头"></dd>
           </dl>
         </router-link>
         <!--$store.state.user.islogin-->
       </div>
      <div class="log-out" v-show="islogin">
        <input type="button"  v-model="logoutText" @click="logout">
      </div>
    </div>

  </div>
</template>


<script type="text/ecmascript-6">
import Back from "@/components/back/back";
import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component.vue";

import {
  alertip,
  requestOpt,
  mt_loading_open,
  mt_loading_close,
  mt_toast
} from "api/recommend";

import { mapState, mapActions } from "vuex";
import { Indicator } from "mint-ui";
import { Toast } from "mint-ui";
import { USER_SIGNOUT } from "../../store/user";

import { Switch } from "mint-ui";

import { MessageBox } from "mint-ui";

// Vue.component(Switch.name, Switch);

export default {
  components: {
    ElSwitch,
    Back
  },
  data() {
    return {
      // startVal: true,
      // endVal: true,
      soundVal: true,
      logoutText: "退出登录",
      logoutShow: false,
      on_btn: true,
      off_btn: true,
      islogin: sessionStorage.getItem('login'),
    };
  },
  computed: mapState({
    user: state => state.user
  }),
  created() {
    this.logout_init();
    mt_loading_open();
    setTimeout(() => {
      mt_loading_close();
    }, 300);
  },
  methods: {
    ...mapActions([USER_SIGNOUT]),
    setStart() {
      //        alertip('设置成功');
    },
    setApp() {
      // 开关设置
      requestOpt.reqPut(
        "config",
        {
          lot_result_switch: this.on_btn ? 1 : 0,
          lot_lucky_switch: this.off_btn ? 1 : 0
          // push_id: '1'
        },
        res => {
          mt_toast(res.data.msg);
        },
        err => {
        //   alertip("设置失败");
        }
      );
    },
    logout_init(){

        let obj = this.$store.state.user.islogin;
//        var len = JSON.stringify(obj).length;
        // console.log();
        if(obj){
            // this.logoutText = '登陆'
            this.logoutShow = false;
            return;
        }else{
            this.logoutShow = true;
        }

    },
    logout() {
        let obj = this.$store.state.user;
        var len = JSON.stringify(obj).length;
        // console.log();
     this.logoutShow =    len > 3 ?  true : false;


        Indicator.open({
            text: "退出中...",
            spinnerType: "fading-circle"
        });
        // 退出登录
    //   if (this.logoutShow) {
    //     this.$router.push("/login");
    //     return false;
    //   }
      //console.log(this.user.token)

      requestOpt.reqGet(
        "logout",
        sessionStorage.getItem('token'),
        res => {
          if (res.data.status === 1) {
            // this.logoutShow = true;
            // this.logoutText = "登录";
//            this.USER_SIGNOUT();
            this.$store.commit('ISLOGIN', false)
            this.$store.state.user.token=''
            this.$store.state.user.userinfo={}
            this.$router.push("/m-center");
            //this.$router.push({path: '/login'});
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
          } else {
            this.logoutShow = false;
            this.logoutText = "退出登录";
            this.$router.push({path: '/login'});
          }
          mt_toast(res.data.msg);
          Indicator.close();

        },
        err => {
          mt_toast("退出失败");
            Indicator.close();
        }
      );
    },
    getAppNewVer() {
      let type = 1;
      let ver = "0.9.0";
      requestOpt.reqnoGet(
        "latest_ver?type=" + type + "&ver=" + ver,
        res => {
          if (res.data.status === 1) {
            //            alertip(res.data.msg)
            console.log(res);
          } else {
            mt_toast(res.data.msg);
          }
        },
        err => {
          mt_toast(err);
        }
      );
    },
    // 清除登录
    clear_login() {
      // if (sessionStorage.getItem("user")) {
        MessageBox.confirm("确定执行此操作?").then(action => {
          Indicator.open({
            spinnerType: "fading-circle"
          });
          // sessionStorage.removeItem("user");
          // if (!sessionStorage.getItem("user")) {
            setTimeout(function() {
              Indicator.close();

              Toast({
                message: "操作成功",
                iconClass: "icon icon-success",
                duration: 1000
              });
            }, 1000);
          // }
        });
      // } else {
      //   Toast({
      //     message: "无历史登录信息",
      //     duration: 1000
      //   });
      // }
    },
    // 清除缓存
    clear_all() {
      // if (sessionStorage.length > 0) {
        MessageBox.confirm("确定执行此操作?").then(action => {
          Indicator.open({
            spinnerType: "fading-circle"
          });
          // if (sessionStorage.length > 0) {
          // sessionStorage.clear();
            setTimeout(function() {
              Indicator.close();
              console.log(sessionStorage);
              Toast({
                message: "操作成功",
                iconClass: "icon icon-success",
                duration: 1000
              });
            }, 1000);
          // }
        });
      // }else{
      //       Toast({
      //           message: "暂无缓存记录",
      //           duration: 1000
      //         });
      // }
    }
  },

  mounted() {

  }

};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.more_content label {
  width: 1.2rem;
}

.more_content {
  width: 7.5rem;
  // height: 13.34rem;
  height: 100%;
  display: block;
  overflow: hidden;
  /*background: #ffffff;*/
}

.more {
  width: 7.5rem;
  /*min-height:12rem;*/
  height: auto;
  display: block;
  margin: auto;
  margin-top: 0.88rem;
}
.more-conten {
  padding .35rem 0
}
.more dl {
  width: 7.5rem;
  height: 1rem;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  line-height: 1rem;
  display: flex;
  justify-content: space-bettewen;
  display: -webkit-flex;
  -webkit-justify-content: space-bettewen;
}

.more dl dt {
  // width 3.5rem
  flex: 7;
  -webkit-flex: 7;
  height: 1rem;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  float: left;
  margin-left: 0.3rem;
  display: block;
  font-size: 0.28rem;
  color: #000000;
}

.more dl dd {
  flex: 1;
  -webkit-flex: 1;
}

.more dl dd.personal2 {
  width: 0.18rem;
  float: right;
  display: inline-block;
  text-align: right;
  height: 1rem;
  margin-right: 0.3rem;
}

.more dl dd.personal2 img {
  width: 0.18rem;
  height: 0.3rem;
  float: right;
  display: inline-block;
  margin-top: 0.35rem;
}

.more .log-out {
  width: 7.5rem;
  /*height: .8rem;
  line-height: .8rem;*/
  /*margin-top: 2rem;*/
  border 0
}

.more .log-out input[type=button] {
  width: 7.1rem;
  height: .8rem;
  color: #ffffff;
  display: block;
  border: none;
  outline: none;
  border-radius: 0.04rem;
  font-size: 0.32rem;
  background: #35b5fe;
  margin: auto;
}

.more .log-out input[type=button].login-color {
  background: #ff3a3b;
}

.per-switch {
  transform: translateX(-58px) translateY(-0.14rem);
}
</style>










































































