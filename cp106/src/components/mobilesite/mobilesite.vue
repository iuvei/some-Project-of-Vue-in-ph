<template>
  <div class="mobilesite">
      <TopNote></TopNote>
      <TopLoginReg></TopLoginReg>
      <TopTab :tabNum="3"></TopTab>
      <div class="mobilesite_wrap">
          <div class="mobilesite_cont">
              <div class="mobilesite_cont_left">
                  <img src="../../image/featured_placeholder.31446d07.png" alt="各种玩法">
              </div>
              <div class="mobilesite_cont_right">
                  <div class="mobilesite_cont_right_top">
                      <div>
                          <img src="../../image/screen-intro.541c598f.png" alt="">
                      </div>
                      <div>
                          <img src="../../image/introduction.bde3aa79.png" alt="">
                          <div class="mobilesite_cont_right_top_text">
                             <div>
                                 手机客户
                                 <br>
                                 &nbsp;&nbsp;
                                  端下载
                             </div>

                             <div>
                                 <p>彩种全面</p>
                                 <p>随时随地</p>
                             </div>
                             <div>
                                 <p>购彩简单</p>
                                 <p>想买就买</p>
                             </div>
                             <img src="../../image/yiqie_zongzhi.png" alt="">
                          </div>    
                      </div>
                  </div>
                  <div class="mobilesite_cont_right_bot">
                          <div>
                              <p class="to_down_app"> <a href="https://www.zzcp.com/down.html" target="_blank">IPhone 版</a></p>
                              <div>
                                 <img src="../../image/erweima_ip.png" alt="">
                              </div>
                          </div>
                          <div>
                              <p class="to_down_app"> <a href="https://www.zzcp.com/down.html" target="_blank"> Android 版</a></p>
                              <div> 
                                  <img src="../../image/erweima_ad.png" alt="">
                              </div>
                          </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="mobilesite_text">
          <div class="mobilesite_text_item">
              <div class="mobilesite_text_item_left">
                  <div class="mobilesite_text_item_left_top">
                        <img src="../../image/feature-0.8f85f054.png" alt="至尊彩票" style="width:126px;height:125px;">
                        <div class="mobilesite_text_item_left_top_right">
                            <h4> 至尊 彩票 </h4>
                            <p> 本软件功能强大、操作简单、安全方便、 </p>
                            <p>界面美观、更省流量，让你随时随地投注彩票，</p>
                            <p>是您最好的省钱中奖利器。</p>
                        </div>
                  </div>
                  <div class="mobilesite_text_item_left_bot">
                      <ul>
                          <li>
                              <h5>产品服务</h5>
                              <p>投注简单 支付方便</p>
                          </li>

                          <li>
                              <h5>银行服务</h5>
                              <p>0.3秒存款 25 秒提款</p>
                          </li>

                          <li>
                              <h5>值得信赖</h5>
                              <p>政府颁发执照</p>
                          </li>

                      </ul>
                  </div>
              </div>
               <div class="mobilesite_text_item_right">
                   <img src="../../image/phone-screen.eaa5e704.png" alt="">
                </div>
          </div>
          
      </div>
      <Qiandao></Qiandao>
      <BotCommon></BotCommon>
      <InfoPanel></InfoPanel>
      <Fixmid></Fixmid>
  </div>
</template>

<script>
import  TopNote from '../topCommon/topNote'
import TopLoginReg from '../topCommon/topLoginReg'
import TopTab from '../topCommon/topTab'
import BotCommon from '../topCommon/botCommon'
import Qiandao from '../home/qiandao'
import InfoPanel from '../topCommon/infoPanel'
import Fixmid from '../common/fixmid'
export default {
  name: 'mobilesite',
  components:{
      TopLoginReg,
      TopTab,
      TopNote,
      BotCommon,
      Qiandao,
      InfoPanel,
      Fixmid
      
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

    .mobilesite_wrap{
        width: 100%;
        height: 620px;
        padding:16px;
        background: url('../../image/featuredBg.7622db1d.png') no-repeat center / cover;
        overflow: hidden;
        box-sizing: border-box;
    }

    .mobilesite_cont{
        width: 1200px;
        margin: 0 auto;
        display: flex;
    }

    /* banner上半部分广告中文字样式 */
    .mobilesite_cont_left{
        /* flex: 1; */
        width:280px;
    }

    .mobilesite_cont_right{
        /* flex:2; */
        padding-top: 20px;
    }

    .mobilesite_cont_right_top{
        display: flex;
    }
    .mobilesite_cont_right_top>div:nth-child(1){
        margin-right: 20px;
    }

    .mobilesite_cont_right_top_text{
        display: flex;
        margin-top: 40px;
    }
    .mobilesite_cont_right_top_text>div:nth-child(1){
        color: #fff;
        font-size: 30px;
        line-height: 1;
    }
    .mobilesite_cont_right_top_text>div:nth-child(2){
        color: #fff;
        font-size: 18px;
        margin: 0 20px 0px 20px;
    }
    .mobilesite_cont_right_top_text>div:nth-child(3){
        color: #fff;
        font-size: 18px;
        /* margin-top: 5px; */
    }
     .mobilesite_cont_right_top_text>img{
         margin-top: -30px;
         margin-left: 20px;
     }

     .mobilesite_cont_right_top_text>div>p{
         line-height: 30px;
     }

     .mobilesite_cont_right_bot{
         width: 50%;
         margin: 0 auto;display: flex;
     }
    
    .mobilesite_cont_right_bot>div{
        margin-top: 30px;
    }
     .mobilesite_cont_right_bot>div:nth-child(1){
         margin-right: 80px;
     }
     .mobilesite_cont_right_bot>div>p{
         width: 180px;
         height: 60px;
         border: 2px solid #fff;
         border-radius: 40px;
         margin-bottom: 15px;
         line-height: 60px;
         text-align: center;
         font-size: 20px;
         font-weight: bold;
         color: #fff;
         margin-left: -15px;
         box-sizing: border-box;
     }

    .mobilesite_cont_right_bot>div>p::before{
         content: "";
         display: inline-block;
         width: 40px;
         height: 40px;
          vertical-align: middle;
         margin-top: -8px;
    }
     .mobilesite_cont_right_bot>div:nth-child(1)>p::before{
        
         background: url('../../image/iphone_logo.png') no-repeat left center / cover;
        
     }
     .mobilesite_cont_right_bot>div:nth-child(2)>p::before{
        
         background: url('../../image/andrion_logo.png') no-repeat left center / cover;
        
     }

      .mobilesite_cont_right_bot>div>div{
          width: 134px;
          height: 134px;
          padding: 10px;
         background: #fff;
          
     }
     .mobilesite_cont_right_bot>div>div>img{
         width: 100%;
         height: 100%;
     }

     /* banner下半部分广告中文字样式  */

     .mobilesite_text{
         width: 100%;
         /* height: 530px; */
         background: #fff;
         /* padding-bottom: 20px; */
     }

     .mobilesite_text_item{
         width: 1200px;
         height: 100%;
         box-sizing: border-box;
         margin:  0 auto;
         display: flex;
         padding-top: 30px;
     }

     .mobilesite_text_item_left{
         flex:3;
         height: 100%;
         padding-top: 50px;
         box-sizing: border-box;
     }
     .mobilesite_text_item_right{
         flex:4;
         height: 100%;
     }
    .mobilesite_text_item_left_top{
        display: flex;
    }

    .mobilesite_text_item_left_top_right{
        padding-left: 30px;
    }

    .mobilesite_text_item_left_top_right h4{
        color:#53c5d5;
        font-size: 35px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    .mobilesite_text_item_left_top_right>p{

        line-height: 25px;
        font-size: 13px;
    }

     .mobilesite_text_item_left_bot>ul{
         padding-top: 30px;
         padding-bottom: 30px;
     }
    .mobilesite_text_item_left_bot>ul>li{
        position: relative;
        height: 60px;
        padding-left: 120px;
        /* text-indent: 95px; */
        box-sizing: border-box;
    }

    div.mobilesite_text_item_left_bot>ul>li:nth-child(1),div.mobilesite_text_item_left_bot>ul>li:nth-child(2){
        margin-bottom: 45px;
        
    }


    .mobilesite_text_item_left_bot>ul>li>h5{
        color: #53c5d5;
        font-size: 18px;
        font-weight: 900;
    }

    .mobilesite_text_item_left_bot>ul>li>p{
        font-size: 16px;
        padding-top: 10px;
    }

    .mobilesite_text_item_left_bot>ul>li::before{

        content: "";
        display: inline-block;
        width: 60px;
        height: 60px;
        position: absolute;
        border-radius: 50%;
        /* left:50px; */
        left:50px;
        
    }

     .mobilesite_text_item_left_bot>ul>li:nth-child(1)::before{
         background: url('../../image/wo_shou.png') no-repeat center / cover;
     }
     .mobilesite_text_item_left_bot>ul>li:nth-child(2)::before{
         background: url('../../image/yinhang_fuwu.png') no-repeat center / cover;
     }
     .mobilesite_text_item_left_bot>ul>li:nth-child(3)::before{
         background: url('../../image/zhide_xinlai.png') no-repeat center / cover;
     }

     .mobilesite_text_item_right{
         /* background: url('../../image/phone-screen.eaa5e704.png') no-repeat bottom / 100% 90%; */
         /* transform: translateX(-10%); */
         /* position: relative */
         margin-left:-30px;
         /* margin-bottom: -100px; */
         margin-top:25px;
     }

     .mobilesite_text_item_right>img{
         /* margin-top: 5px; */
         /* transform: translateY(2px); */
         height:100%;
     }

     .to_down_app{
         cursor: pointer;
     }
     .to_down_app:hover{
         border-color: #53c5d5;
         background: #53c5d5;
     }

     .to_down_app a:active{
         color: #fff;
     }
     .to_down_app a:visited{
         color: #fff;
     }
    
</style>
