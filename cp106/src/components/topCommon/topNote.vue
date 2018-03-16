<template>

    <div class="topNote">
        <div class="banxin">
            <div class="note_left fl">
                <span></span>
            </div>
            <div class="note_text fl" @click="go_note_detail">
                <p > 
                    <!-- {{ item.content }} -->
                     <marquee scrollamount="2" onMouseOver="this.stop()"  onMouseOut="this.start()">
                        <!--<span v-for="item in notice">{{item.content}}</span>-->
                        <span style="margin-right:10px;"  v-for = "(item,index) in dataList"  :key="index" >{{item.content}}</span>
                        <!-- <span >走过了很多地方 尊敬的会员您好，如您遇到无法充值问题，强烈建议您使用【银行转账】方式存款，使用支付宝，手机转账.柜台转账.ATM转账，单笔满100元送1%存款优惠哦，如您存款1000元实际到账为1010元，财务人员收到您的款项会第一时间为您添加的，如您有任何疑问请您联系在线客服为您处理，感谢您对106的理解与支持，祝您盈利多多！</span> -->
                    </marquee>
                    <!-- {{ dataList }} -->

                    <!-- <span >尊敬的会员您好，如您遇到无法充值问题，强烈建议您使用【银行转账】方式存款，使用支付宝，手机转账.柜台转账.ATM转账，单笔满100元送1%存款优惠哦，如您存款1000元实际到账为1010元，财务人员收到您的款项会第一时间为您添加的，如您有任何疑问请您联系在线客服为您处理，感谢您对106的理解与支持，祝您盈利多多！</span>
                    <span >106彩票官方投注站，高赔率，派彩快，支持微信、支付宝快速充值，更多幸运彩金随时花落在你身上，动动手指，大奖抱回家！</span>
                    <span>欢迎加入106彩票，下载手机app送16</span> -->
                </p>
            </div>
            <ul class="note_right fr">
                <li @click="jairu_shoucang">加入收藏</li>

                <router-link to="/helpcenter">
                     <li>帮助中心</li>
                </router-link>

                <li @click="go_inst">玩法说明</li>
                <li>
                     <a class="on_line" v-if="this.config_arr" target="_blank" :href="this.config_arr.client_service_url" >
                        在线客服
                    </a>
                </li>
            </ul>
        </div>
    </div>

</template>

<script>
    import { requestOpt , el_tip } from '../../api/recommend'
    import { messageBox } from 'element-ui';
    export  default{
        name:  'NopNote',
        data(){

            return{
                dataList:[],
                config_arr : [],
            }
        },
        mounted(){
            this.get_config();
            this.getData();
        },
        methods:{
            jairu_shoucang(){
                alert('请按 CTRL + D 收藏。');
            },
            go_inst(){
                if(this.$route.params.lot_type_id && this.$route.params.code){

                    this.$router.push('/instructions/'+ this.$route.params.code +'/' + this.$route.params.lot_type_id );

                }else{
                    this.$router.push('/instructions/CQSSC/1');
                }
            },
            getData(){
                this.dataList  = JSON.parse(sessionStorage.getItem('topNotice'));
                if(!this.dataList){
                    requestOpt.reqnoGet('notice',
                        (res)=>{
                            if(res.data.status == 1 || res.status == 200){
                              this.dataList = res.data.data.list;
                              sessionStorage.setItem('topNotice' , JSON.stringify(this.dataList)) 
                            }
                            else if(res.data.status == 0 && res.data.code == -2){
                                el_tip(res.data.msg + ' 请重新登录');
                                sessionStorage.removeItem('user')
                                setTimeout(()=>{
                                    window.location.reload();
                                    this.$root.bus.$emit("sendData",true);
                                },1000)
                            }else {
                                el_tip(res.data.msg)
                            }
                        },
                        (err)=>{
                            if(err.data){
                                el_tip(err.data.msg);
                            }
                     })
                }

            },
            get_config(){

                this.config_arr = JSON.parse(sessionStorage.getItem('app_config'));
                if(!this.config_arr){
                    requestOpt.reqnoGet('config',(res)=>{
                        if(res.data.status == 1 || res.status == 200){
                            this.config_arr = res.data.data.config;
                            sessionStorage.setItem('app_config',this.config_arr);
                        }
                        else if(res.data.status == 0 && res.data.code == -2){
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
                        }
                    })
                }

            },
            go_note_detail(){
                this.$router.push('/topNoteDetail')
            }
        }
    }

</script>


<style scoped>

    .topNote{
        width:100%;
        height: 3rem;
        background: #666;
    }

    .banxin {
        width: 1200px;
        height: 3rem;
        margin:0 auto;
    }

    .note_left span{
        display: inline-block;
        width: 40px;
        height: 3rem;
        overflow: hidden;
        background: url('../../image/top_laba.png') no-repeat center / cover;
        font-size: 14px;
    }

    .note_right{
        height: 100%;
    }
    .note_right li {
        height: 1rem;
        float: left;
        color: #fff;
        border-left: 1px solid #ffffff;
        margin-top: 1rem;
        line-height: 13px;
        padding-left: 10px;
        margin-right: 10px;
        font-size: 13px;
        cursor: pointer;
    }

    .note_text{
        width:850px;
        overflow: hidden;
        height: 3rem;
        /* cursor: pointer; */
        /* position: relative; */
    }

    .note_text p{
        /* min-width: 170%; */
        /* width: auto; */
        position: relative;
        height: 3rem;
        line-height: 3rem;
        font-size: 14px;
        text-align: center;
        color: rgb(250,250,250);
        cursor: pointer;
        /* animation: text_move 60s infinite linear; */
        overflow: visible;
        /* overflow:-webkit-marquee;
        overflow-style:marquee,panner;
        -webkit-marquee-style:scroll;
        -webkit-marquee-repetition:infinite;
        -webkit-marquee-speed:slow;
        -webkit-marquee-direction:left; */
    }

     .note_text p marquee{
         height: 3rem;
         line-height: 3rem;
         cursor: pointer;
     }

    .note_text p:hover{
        animation-play-state:paused;
        -webkit-animation-play-state:paused;
        cursor : default;
    }

    /* .note_text p span:nth-child(1), .note_text p span:nth-child(2){
        position: absolute;
        left:0;
        z-index: 2;
        height:30px;
        line-height: 30px;
    } */

    @keyframes text_move{

        0%{
            transform: translateX(60%);
        }
        100%{
            transform: translateX(-100%);
        }
       


    }

    .on_line{
        color: #fff;
    }
    .on_line:visited{
        color: #fff;
    }
    .on_line:active{
        color: #fff;
    }

</style>

