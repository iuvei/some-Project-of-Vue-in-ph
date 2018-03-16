<template>

    <div class="fixmid" v-show="fixed_show">

        <div class="fixmid-left">
            <span @click="close_fix">关闭</span>
            <div class="fixmid-left-cont">
                <h3 @click="try_btn">免费试玩</h3>
                <h4 @click="go_help">帮助中心</h4>
                <img src="../../image/erweima_ad.png" alt="苹果二维码">
                <p>扫一扫</p>
                <p>下载苹果APP</p>
            </div>
        </div>

        <div class="fixmid-right">
            <span @click="close_fix">关闭</span>
            <div class="fixmid-right-cont">
                <h3 >
                    <a target="_blank" v-if="this.config_arr" :href="this.config_arr.client_service_url">
                        在线客服
                    </a>
                </h3>
                <h4>
                    <a target="_blank" href="tencent://message/?exe=qq&menu=yes&Uin=763222666">在线qq</a>
                </h4>
                <img src="../../image/erweima_ad.png" alt="安卓二维码">
                <p>扫一扫</p>
                <p>下载安卓APP</p>
            </div>
        </div>
    </div>

</template>


<script>
    import { requestOpt, el_tip } from "../../api/recommend";
    import { messageBox, Dialog, Loading } from "element-ui";
    export default{
        name:'Fixmid',
        data(){
            return{
                fixed_show : true,
                user:'',
                config_arr:[]
            }
        },
        methods:{
            try_btn(){
                this.user = JSON.parse(sessionStorage.getItem('user'));
                this.user ?  
                el_tip('已经处于登录状态'):
                this.$root.bus.$emit('sendData', true); 

            },
            close_fix(){
                this.fixed_show = false;
            },
            go_help(){
                this.$router.push('/helpcenter')
            },
            get_config(){

                this.config_arr = JSON.parse(sessionStorage.getItem('app_config'));
                if(!this.config_arr){
                    requestOpt.reqnoGet('config',(res)=>{
                        if(res.data.status == 1 || res.status == 200){
                            this.config_arr = res.data.data.config;
                            sessionStorage.setItem('app_config',this.config_arr);
                        }else if(res.data.status == 0 && res.data.code == -2){
                           el_tip(res.data.msg + ' 请重新登录');
                            sessionStorage.removeItem('user')
                            setTimeout(()=>{
                                window.location.reload();
                                this.$root.bus.$emit("sendData",true);
                            },1000)
                        }else {
                             el_tip(res.data.msg)
                        }
                    },(err)=>{
                        if(err){
                            el_tip(err.data.msg)
                        }else{
                            el_tip('网络连接失败')
                        }
                    })
                }

            }

        },
        mounted(){
            this.get_config();
        }

    }

</script>


<style scoped>

    .fixmid-left{
        width: 160px;
        position: fixed;
        top:50%;
        transform: translateY(-50%);
        left:10px;
       z-index:999;
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
        position: fixed;
        top:50%;
        transform: translateY(-50%);
        right:10px;
        width: 160px;
          z-index:999;
    }
    /* 关闭按钮 */
      /* 内容区域 */

        /* 左边固定 */
   .fixmid-left>span{
     display: block;
     width: 120px;
     height: 25px;
     line-height: 25px;
     text-align: center;
     margin: 0 auto;
     background:#fff;
     /* background:red; */
     font-size: 15px;
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
        border-bottom: 25px solid #fff;
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
       border-bottom: 25px solid #fff;
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

        margin-bottom: 10px;
    }

    .fixmid-left-cont>h3::before{
        display: inline-block;
        vertical-align: middle;
        content: "";
        width:22px;
        height: 22px;
        background: url('../../image/zaixian_kefu.png') no-repeat  center / cover;
        margin-left: -5px;
        margin-right: 5px;
    }

    .fixmid-left-cont>h4::before{
        content: "";
        vertical-align:middle;
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url('../../image/bangzhu_zhongxin.png') no-repeat center / cover ;
        margin-left: -5px;
        margin-right: 5px;
    }

    .fixmid-right-cont>h3::before{

        background: url('../../image/zaixian_kefu.png') no-repeat  center / cover;
    }


    .fixmid-left-cont>img{
        width: 100%;
        margin-top:10px;
    }



    .fixmid-left-cont>p:nth-child(4){
        color: #187e00;
        font-size: 15px;
        text-align: center;
    }

    .fixmid-left-cont>p:nth-child(5){
        color: #434343;
        font-size: 14px;
        text-align: center;
    }
        /* 右边固定 */


    .fixmid-right>span{
     display: block;
     width: 120px;
     height: 25px;
     line-height: 25px;
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
       border-bottom: 25px solid #fff;
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
        border-bottom: 25px solid #fff;
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
        background: url('../../image/zaixian_kefu.png') no-repeat center / cover;
        margin-left: -5px;
        margin-right: 5px;
    }

    .fixmid-right-cont>h4::before{
        content: "";
        vertical-align:middle;
        display: inline-block;
        width: 22px;
        height: 22px;
        background: url('../../image/zaixian_qq.png') no-repeat center / cover ;
        margin-left: -15px;
        margin-right: 10px;
    }

    .fixmid-right-cont>img{
        width: 100%;
        margin-top:10px;
    }



    .fixmid-right-cont>p:nth-child(4){
        color: #187e00;
        font-size: 15px;
        text-align: center;
    }

    .fixmid-right-cont>p:nth-child(5){
        color: #434343;
        font-size: 14px;
        text-align: center;
    }


</style>

