<template>
  <div class="r-confirm-content" >

    <back :title="params.title" go-back="true"></back>
    <!--<div v-if="list_arr.status  == 0" :class="list_arr.status == 0 ? 'wrap_bg' : '' " style="height:100%;width:100%">

    </div>-->
    <!--v-if="list_arr.status!==0 && isShowContent"-->
    <!--style="margin-top: .88rem"-->
    <div  v-if="this.params.addrid==2" >
      <div class="r-confirm-info" style="margin-top:.3rem;">
        <div class="r-info-item" >
          <div style="color: #000; font-size:.28rem;">{{params.title+'扫码信息:'}}</div>
        </div>
        <div class="r-info-item" >
          <span style="color: #929292; font-size:.28rem;">充值金额：</span>
          <span style="color: #929292; font-size:.28rem;"> {{params.cash}} 元</span>
        </div>
      </div>

      <div class="r-confirm">
        <div class="qrcode" >
          <img id="r_confirm_img" :src='params.addr' alt="扫一扫二维码充值"/>
          <!--v-if="status"-->
          <!--<div v-else class="rest-get" @click="get_erwima">
            <vue-loading v-if="!isShowContent" type="spiningDubbles" color="#999" :size="{ width: '50px', height: '50px' }"></vue-loading>
            <span v-else>点击重新获取二维码</span>
          </div>-->
        </div>
      </div>

      <!--btns-->
      <div class="r-c-btns">
        <button @click="goback_btn">上一步</button>
        <button @click="okRecharge" :download='params.addr'>立即充值</button>
        <!--dialogShow=true-->
        <button @click="okPlay" v-if="params.addrid==2">我已支付</button>
      </div>
      <!--interpretative statement-->
      <div class="inter-state">
        <!--{{params.remark}}-->
        扫码步骤：1，长按二维码并保存到手机相册中。2、点“立即充值”打开微信。
        3，请在微信中打开“扫一扫”。
        4，在扫一扫中点击右上角，选择“从相册选取二维码”选取刚保存的图片。
        5，输入您欲充值的金额并进行转账。如充值未及时到账，请联系在线客服。
        <br/><br/>
        <!--<span v-if="params.msg == '.'">{{params.msg}}</span>-->
        <span> PS:  浏览器用户请自行保存到相册(长按二维码并保存到手机相册中) </span>

        <!--PS:如果手机不支持相册二维码扫描，请使用另外一台手机进行扫描支付-->
      </div>
      <!--弹层-->
      <div class="dialog-bg" v-if="dialogShow" @click="dialogShow=false"></div>
      <div class="dialog-container" v-if="dialogShow">
        <div class="dialog-content">
          <a href="javascript:;" class="dialog-file">选择图片
            <input type="file"  name="imageToUpload" accept="image/*" @change="preview">
          </a>
        </div>
      </div>
    </div>
    <div  v-if="this.params.addrid==4" >
        <div class="r-confirm-info" style="margin-top:.3rem;">
            <div class="r-info-item" >
                <div style="color: #000; font-size:.28rem;">{{params.title+'扫码信息:'}}</div>
            </div>
            <div class="r-info-item" >
                <span style="color: #929292; font-size:.28rem;">充值金额：</span>
                <span style="color: #929292; font-size:.28rem;"> {{params.cash}} 元</span>
            </div>
        <!-- <div class="r-info-item">
            <span>转账用户：</span>
            <span>{{params.userName}}</span>
        </div>
        <div class="r-info-item">
            <span>转账账号：</span>
            <span>{{params.phone}}</span>
        </div> -->
        </div>

        <div class="r-confirm">
        <div class="qrcode" >
            <!--<h4>亚盘分析</h4>-->
            <!-- <img v-if="!/(.com)/g.test(params.addr)" :src='params.addr' alt="扫一扫获取解盘分析"/> -->
            <img v-if="status" id="r_confirm_img" :src='params.addr' alt="扫一扫二维码充值"/>
          <div v-else class="rest-get" @click="get_erwima">
            <vue-loading v-if="!isShowContent" type="spiningDubbles" color="#999" :size="{ width: '50px', height: '50px' }"></vue-loading>
            <span v-else>点击重新获取二维码</span>
          </div>
        </div>
        </div>

        <!--btns-->
        <div class="r-c-btns">
        <button @click="goback_btn">上一步</button>
        <button @click="okRecharge" :download='params.addr'>立即充值</button>
          <!--dialogShow=true-->
        <button @click="okPlay" v-if="params.addrid!=4">我已支付</button>
        </div>
        <!--interpretative statement-->
        <div class="inter-state">
        <!--{{params.remark}}-->
        扫码步骤：1，长按二维码并保存到手机相册中。2、点“立即充值”打开微信。
          3，请在微信中打开“扫一扫”。
          4，在扫一扫中点击右上角，选择“从相册选取二维码”选取刚保存的图片。
          5，输入您欲充值的金额并进行转账。如充值未及时到账，请联系在线客服。
        <br/><br/>
        <!--<span v-if="params.msg == '.'">{{params.msg}}</span>-->
        <span> PS:  浏览器用户请自行保存到相册(长按二维码并保存到手机相册中) </span>

        <!--PS:如果手机不支持相册二维码扫描，请使用另外一台手机进行扫描支付-->
        </div>
        <!--弹层-->
        <div class="dialog-bg" v-if="dialogShow" @click="dialogShow=false"></div>
        <div class="dialog-container" v-if="dialogShow">
        <div class="dialog-content">
            <a href="javascript:;" class="dialog-file">选择图片
            <input type="file"  name="imageToUpload" accept="image/*" @change="preview">
            </a>
        </div>
        </div>
    </div>
    <div  v-show="this.params.addrid==5||this.params.addrid==6" style="overflow: scroll;width: 100%;height: 100%;-webkit-overflow-scrolling: touch;">
      <iframe ref="iframe_my" :src="v_html" frameborder="0" style="overflow: scroll;height: 100%;margin-top: .98rem;" :style="v_width" ></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from "axios";
import Back from "@/components/back/back";
import {requestOpt, dtFormate, alertip, mt_loading_open, mt_loading_close,mt_toast,mt_loading_tip} from 'api/recommend'
import {mapState, mapActions} from 'vuex'
import {OF_CASH, TAB_STATUS, PAY_LIST,PAY_LIST_ID} from '../../store/user'
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";
//import VueLoading from  'vue-loading'
import vueLoading from 'vue-loading-template'

export default {
  components: {
    Back,
    vueLoading
  },
  data() {
    return {
      params: this.$route.params,
      dialogShow: false,
      fileData: "",
      app_type : 1,
      list_arr:[],
      isShowContent : false,
      status: 0,
      v_html: '',
      v_width: {
        width: '100%'
      }
    };
  },
//  computed: mapState({ user: state => state.user }),
  computed: {
    ...mapState({
      user: state => state.user
    }),
    /*htmls() {
      return this.$refs.iframe_my.contentDocument.documentElement.body
    }*/
  },
  beforeRouteLeave(to, from, next) {
    to.meta.keepAlive = true;
    next();
  },
  mounted() {
    /*setTimeout(() => {
      console.log(this.htmls)
    },3000)*/

    if (this.params.addrid!=2) {
      this.get_erwima();
    }


  },
  methods: {
    ...mapActions(['OF_CASH','TAB_STATUS','PAY_LIST','PAY_LIST_ID']),
    preview(e) {
      // 上传图片
    Indicator.open({
        text: "上传中...",
        spinnerType: "fading-circle"
    });
      this.fileData = "";
      let filename = e.target.files[0];

      let param = new FormData();
      param.append("file", filename, filename.name);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + this.user.token
        }
      };

      axios
        .post(requestOpt.urlAuth + "screen_shot", param, config)
        .then(res => {
          if (res.data.status === 1) {
            mt_toast("上传成功");
            this.dialogShow = false;
            this.fileData = res.data.data.screen_shot;
            // this.okRecharge();
            Indicator.close();
          } else {
            mt_toast(res.data.msg);
          }
        })
        .catch(err => {
          mt_toast(err);
        });
    },
    okRecharge() {
        var that = this;
            if(that.user.pay_list_id == 1 && that.params.title.indexOf('微信') !== -1){
                window.location.href = "weixin://";

                setTimeout(function(){
                    Toast({
                        message: "打开微信失败，请自行打开",
                        duration: 800
                    });
            },500);
            } else if(that.user.pay_list_id == 1 && that.params.title.indexOf('QQ') !== -1){
//                window.location.href = "http://sighttp.qq.com";
              window.location.href = "mqq://";
                setTimeout(function(){
                    Toast({
                        message: "打开QQ失败，请自行打开",
                        duration: 800
                    });
            },500);
            }  else if( that.user.pay_list_id == 2 && that.params.title.indexOf('支付宝') !== -1 ){
                window.location.href="alipay://"
                setTimeout(function(){
                    Toast({
                        message: "打开支付宝失败，请自行打开",
                        duration: 800
                    });
             },500);
            } else if( that.params.title.indexOf('京东') !== -1 ){
                // console.log(11111111);
                // if (navigator.userAgent.match(/(iPhone);?/i)){}
                // console.log(navigator.userAgent.match(/(iPhone);?/));
                if(navigator.userAgent.match(/(iPhone);?/i)){
                    window.location.href="openapp.jdmobile://"
                    setTimeout(function(){
                        Toast({
                            message: "打开京东失败，请自行打开",
                            duration: 800
                        });
                    },500);
                }
                if(navigator.userAgent.match(/(iPod|iPad);?/i)){
                    window.location.href="openapp.jdipad://"
                    setTimeout(function(){
                        Toast({
                            message: "打开京东失败，请自行打开",
                            duration: 800
                        });
                    },500);
                }

            }
    },

    /*我已支付*/
    okPlay() {
      mt_loading_open('请求中...')
      setTimeout(() => {
        mt_loading_close()
      },5000)
//      this.user.token  || JSON.parse(sessionStorage.getItem('userinfo')).bankcard
      requestOpt.reqPostuser("balance", sessionStorage.getItem('token'),
       {
         type_id: /微信/g.test(this.params.title)?1:2,
         charge_sum: ~~this.params.cash,
         card_number: window.addTyp.card_number ,
         bank_address: this.params.addr,
         screen_shot: '1',
         receipt_screen_shot: '1',
         bank_id: ~~this.params.pay_id ,// id
         realname: window.addTyp.userName,
         bank_charge_type:~~this.params.pay_id,
         bank_charge_time: new Date()

       },
       res => {
         mt_loading_close()
         if (res.data.status === 1) {
//               console.log(res.data)
//           mt_toast(res.data.msg);
           this.$router.replace('/r-success/'+this.params.cash)
         } else {
           /* this.$message({
               message: data.data.msg,
               type: 'warning',
               duration: 1000,
               customClass: 'restel-dialog'
               })*/
           if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
             window.sessionStorage.removeItem('userinfo')
             window.sessionStorage.removeItem('login')
             window.sessionStorage.removeItem('token')
             this.$router.push('/login')
           }
           setTimeout(() => {
             mt_toast(res.data.msg);
           }, 300);
         }
       },
       err => {
         mt_loading_close()
         this.$message(err);
       })
    },

    myClient() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth ||
                0,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight ||
                0
        };
    },
    // 上一步
    goback_btn(){
        this.$router.go(-1);
    },

    get_erwima(){
      this.isShowContent = false;
        // mt_loading_open();
        if(this.params.addrid == 4){
            /*Indicator.open({
                text: "加载中...",
                spinnerType: "fading-circle"
            });*/
//          mt_loading_tip()
            // console.log(this.params);
            requestOpt.reqGet('juhe_pay?amount=' + this.params.cash +'&bank_address=' + this.params.addr + '&credential=' + this.params.credential , sessionStorage.getItem('token'),
                (res)=>{
//                      console.log(res);
                    this.list_arr = res.data;
                    this.status = res.data.status
                    if(res.data.status == 1){
                        this.params.addr = res.data.data.list.qrcode;
                        this.app_type = res.data.data.list.app_type;
//                        console.log(this.params.addr)
                    }
                    if(res.data.status == 0){
                      if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                        window.sessionStorage.removeItem('userinfo')
                        window.sessionStorage.removeItem('login')
                        window.sessionStorage.removeItem('token')
                        this.$router.push('/login')
                      }
                        Toast({
                            message: res.data.msg,
                            duration: 2000
                        });
                    }

                    this.isShowContent = true;
                    Indicator.close();

                },(err)=>{
                    console.log(err);
                    // Toast({
                    //     message: err.data.msg,
                    //     duration: 2000
                    // });
                    Indicator.close();
            })

        } else if (this.params.addrid == 5) {
//          if(this.params.title != "QQ钱包迅银支付") {
            Indicator.open({
              text: "加载中...",
              spinnerType: "fading-circle"
            });
//          }

          requestOpt.reqGet('juhe_pay?amount=' + this.params.cash +'&bank_address=' + this.params.addr + '&credential=' + this.params.credential + "&addr_type=5"   , sessionStorage.getItem('token'),
            (res)=>{
              if(res.data.status == 1){
                if(this.params.title === '高通QQ钱包支付' || this.params.title === 'QQ钱包支付' || this.params.title === '微信扫码支付') {
                  this.v_width = {
                    width: '980px',
                    transform: 'translate3d(-197px,0,0)'
                  }
                }
                this.v_html = res.data.data.list.qrcode;
//                this.v_html =  window.location.protocol + res.data.data.list.qrcode.substr(res.data.data.list.qrcode.indexOf('://')+1);
                /*if(this.params.title == "QQ钱包迅银支付") {
                  let t = this.v_html.indexOf('?')
                  let m = this.v_html.substr(t)
                  let n = m.substr(1).split('&')
                  let arr = []
                  for (let i=0;i<n.length;i++) {
                    arr.push(n[i].split('=')[1])
                  }
                  setTimeout(() => {
                    location.href = 'http://pay.ecmayi.cn/pay/qqpay_qqQR/send.php?orderid='+arr[3]+'&price='+arr[2]+'&bankcode=qqQR&remark='
                  },30000)

                }*/
                console.log(this.v_html);
              }
              if(res.data.status == 0){
                if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                  window.sessionStorage.removeItem('userinfo')
                  window.sessionStorage.removeItem('login')
                  window.sessionStorage.removeItem('token')
                  this.$router.push('/login')
                }
                /*Toast({
                  message: res.data.msg,
                  duration: 2000
                });*/
              }

              this.isShowContent = true;
              Indicator.close();

            },(err)=>{
              console.log(err);
              Indicator.close();
            })
        } else if (this.params.addrid == 6) {
          requestOpt.reqGet('juhe_pay?amount=' + this.params.cash +'&bank_address=' + this.params.addr + '&credential=' + this.params.credential + "&addr_type=6"   , sessionStorage.getItem('token'),
            (res)=>{
              if(res.data.status == 1){
//                this.v_html = res.data.data.list.qrcode;
               location.href = res.data.data.list.qrcode;
//                console.log(this.v_html);
              }

              this.isShowContent = true;
              Indicator.close();

            },(err)=>{
              console.log(err);
              Indicator.close();
            })
        }
      }
  }
};
</script>

<style scoped lang="stylus">

.wrap_bg{
    height:auto;
    min-height:100%;
    background: rgb(250,250,250) url('../../images/no_data.png') no-repeat center / 25% 20%;

}

// .wrap_bg.active{
// }

.r-confirm-content {
    width: 7.5rem;
    height: 100%;
    overflow: scroll;
    background-color: #ffffff;
    color: #000;
    font-size: 0.3rem;
}

/* 二维码 */
.r-confirm {
    position: relative;
    top: 0.88rem;

    .qrcode {
      height: 2.78rem;
        margin: 0.2rem 0 0.25rem;
        text-align: center;

        h4 {
            font-size: 0.7rem;
            color: #fc823c;
            font-weight: bold;
            background-image: -webkit-linear-gradient(top, #fc823c, #ffdc00, yellow, #fc823c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        img {
            width: 2.78rem;
            height: 2.78rem;
        }
      .rest-get {
        width 100%
        height 2.78rem
        line-height 2.78rem
        color #999
      }
    }
}

/* 转账信息 */
.r-confirm-info {
    position: relative;
    top: 0.88rem;
    margin: 0 0.3rem;

    .r-info-item {
        padding-bottom: 0.15rem;

        span {
            &:last-child {
                color: #ff3a3b;
            }
        }
    }
}

/* btns */
.r-c-btns {
    display: flex;
    justify-content: space-around;
    position: relative;
    top: 0.88rem;
    margin: 0 0.25rem;

    button {
        display: inline-block;
        text-align:center;
        width: 30%;
        padding: 0.18rem;
        background-color: #ff3a3b;
        color: #ffffff;
        border: 0;
        border-radius: 0.08rem;

        // &:first-child {
            margin-right: 2%;
        // }
    }
}

/* interpretative statement */
.inter-state {
    position: relative;
    top: 0.88rem;
    margin-top: 0.3rem;
    color: #666;
    font-size: 0.24rem;
    line-height: 0.35rem;
    padding:0 .15rem;
}

/* 弹层公共样式 */
.dialog-bg {
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: transparent;
}

.dialog-container {
    position: absolute;
    bottom: 0rem;
    overflow: hidden;
    z-index: 1000;
    width: 92%;
    padding: 0.3rem;
    background: #fff;
    text-align: center;

    .dialog-content {
        width: 100%;

        .dialog-file {
            box-sizing: border-box;
            position: relative;
            display: block;
            width: 100%;
            background: #fff;
            border: 1px solid #ff3a3b;
            border-radius: 4px;
            padding: 4px 12px;
            overflow: hidden;
            color: #000;
            text-decoration: none;
            text-indent: 0;
            line-height: 0.5rem;
            box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);

            input {
                position: absolute;
                width: 100%;
                height: 100%;
                right: 0;
                top: 0;
                opacity: 0;
            }
        }

    }

}
</style>
