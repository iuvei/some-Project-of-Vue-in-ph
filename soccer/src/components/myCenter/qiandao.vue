<template>
    
    <div class="qiandao" v-if="isShow&&qData" @click="chose">
        <div class="qiandao_cont" v-if="is_show_qian_dao_son" >
            <div class="qiandao_cont_head">
                <h4>签到有礼</h4>
                <p>天天签到有惊喜</p>
            </div>
            <div class="qiandao_cont_yuan"></div>
            <ul>
                <li :class="{'has_qian' : qData.dayCount >= item.date}" v-for="item in qData.tasks">
                	<strong></strong>
                	<span>第{{item.date}}天</span> <i>+{{item.banlance}}元</i>
                </li>
            </ul>
            <h5 @click="qian_dao" class="qian_dao_btn" >签到领取</h5>
        </div>
		<div class="qiandao_bet" v-if="!is_show_qian_dao_son">
            <img src="../../images/qiandao_bet_1.png" >
            <img src="../../images/qiandao_bet_2.png" >
            <p v-if="!qData.dayCount">恭喜你+{{ qData.tasks[0].banlance }}元</p>
            <p v-if="qData.dayCount">恭喜你+{{ qData.tasks[qData.dayCount].banlance }}元</p>
            <img src="../../images/close_qiandao.png"  class="close">	
        </div>
    </div>

</template>

<script>
    import { requestOpt,getUserInfo,setUserInfo} from 'api/recommend'
	import { Indicator,Toast } from "mint-ui";
    export default{
        data(){
            return{ 	
            	isShow:false,
                is_show_qian_dao_son: true,
                qData:'',
                total_bet : '',               
            }
        },
        methods:{
        	chose(e){
        		if(e.target.className == 'qiandao' || e.target.className == 'close'){
        			this.isShow = false;
        		}       		
        	},
            startFn(){
            	if(getUserInfo() && getUserInfo().isSign==0 && !window.isQiandao){
            		this.isShow = true;
            		window.isQiandao = true; 
	                requestOpt.reqTokenGet('userTask/day',getUserInfo().authToken,res=>{
	                	if(res.data.status&&res.data.data){
	                		this.qData = res.data.data;	                		
	                	}	                            
	                },err=>{
                    })
            	}
               
            },
            qian_dao(){
            	Indicator.open();
                 requestOpt.reqTokenPost('userTask',getUserInfo().authToken,{},res=>{
                 	Indicator.close();
                    if(res.data.status){                      	
	                    	this.is_show_qian_dao_son = false;  
	                    	this.$emit('change')
	                    	requestOpt.reqTokenGet('user/getUser',getUserInfo().authToken,res => {
													if(res.data.status){
														setUserInfo(res.data.data);
														this.userInfo = res.data.data;
													}
													if(res.data.code == 403){
														this.userInfo = {};
														this.isLogin = false;
													}				         	
								        }, err => {
								          Toast('网络链接失败，请稍后再试')
								        })	
			              	}else{
			                    	Toast(res.data.msg);
			                    	this.isShow = false;
			                    }
			                },err=>{
                         Toast('网络链接失败，请稍后再试');
                    	this.isShow = false;
                    })

            },
            
        },
        mounted(){
            this.startFn();
        },


    }

</script>

<style scoped>

    /* 签到红色背景部分 */
    .qiandao{
        z-index:10000;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        margin: 0;
        background:rgba(0,0,0,.6);
    }


    .qiandao_cont{
        width: 90%;
        margin:0 auto;
        position: absolute;
        left:50%;
        top:45%;
        transform: translate(-50%,-50%);
        border-radius: 20px;
        padding-bottom: .2rem;
        background:#fff;
        transition: all .7s;
        animation: qian_dao_move .7s ease 1;
    }

    .qiandao_cont.box_end{
        animation: qian_dao_move .8s ease 1;
    }
    
    @keyframes qian_dao_move {
        from{
            transform: translate(-50%,-200%);
            opacity: 0;
        }
        to{
            transform: translate(-50%,-50%);
            opacity: 1;
        }
    }

     @keyframes qian_dao_down {
        
        from{
            transform: translate(-50%,-50%);
            opacity: 1;
        }
        to{
            transform: translate(-50%,100%);
            opacity: 0;
        }

    }

    .qiandao_cont_head{
        background: #d13a48;
        position: relative;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .qiandao_cont_head>h4{
        font-size: .46rem;
        padding-top:.3rem;
        letter-spacing: 5px;
        
    }

    .qiandao_cont_head>p{
        font-size: .26rem;
        letter-spacing: 2px;
        padding-top:.1rem;
    }
    .qiandao_cont_head>h4, .qiandao_cont_head>p{
        color : #fff;
        text-align: center;
        box-sizing: border-box;
    }

    .qiandao_cont_head::before,  .qiandao_cont_head::after{
        content: "";
        display: inline-block;
        width:.26rem;
        height: .26rem;
        border-radius: 50%;
        background: #333;
        position: absolute;
        top:.25rem;
        
    }

    .qiandao_cont_head::before{
        left:15px;
    }
    .qiandao_cont_head::after{
        right:15px;
    }

    .qiandao_cont_yuan{
        width: 100%;
        height: .6rem;
        margin-top:-.3rem;
         background: #d13a48;
         border-bottom-left-radius: 80%;
         border-bottom-right-radius: 80%;        
    }

    /* 白色背景部分 */
    .qiandao_cont ul{
        padding-top:.2rem;
        height: 5.8rem;
    }
    .qiandao_cont ul li{
        text-align: center;
    }
    .qiandao_cont ul li strong, .qiandao_cont ul li span{
        margin-right: .4rem;
    }

    .qiandao_cont ul li strong{
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #fff17d;
        vertical-align: middle;
        position: relative;
    }

    .qiandao_cont ul li strong::after{

        content: "";
        display: inline-block;
        width:.1rem;
         height:.43rem;
         background: #fff17d;
         position: absolute;
         top:-.43rem;
         left: 50%;
         transform: translateX(-50%); 

    }

    .qiandao_cont ul li:first-child strong::after{
        display: none;
    }

    .qiandao_cont ul li span{
        color : #adadad;
        padding-left: 5px;
        font-size: 15px;
    }
    .qiandao_cont ul li i{
        color : #eab3b7;
        font-style: normal;
        line-height: .8rem;
        padding-left: 2px;
        font-size: 15px;
        display: inline-block;
        width: 1.6rem;
    }

    /* 已经签到的有has_qian类名的 */

    .qiandao_cont ul li.has_qian strong{

         background : #d23b49;
    }

    .qiandao_cont ul li.has_qian strong::after{
        background : #d23b49;
    }

    .qiandao_cont ul li.has_qian span{

        color : #000;
         font-weight: 600;
    }
    .qiandao_cont ul li.has_qian i{
        font-weight: 600;
        color:  red;
    }

    .qian_dao_btn{
        width: 1.8rem;
        margin: 0 auto;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        background: #fff17d;
        border-radius: .06rem;
        margin-top:.2rem;
        color : #d13a48;
        cursor:pointer;
        font-size: .26rem;
    }

    /* 签到后的奖励 */

    .qiandao_bet{
        width:35%;
        margin: 0 auto;
        position: absolute;
        top:40%;
        left:50%;
        transform: translate(-50%,-60%);
        animation: do_bet_move .8s ease-in 1;
    }

      @keyframes do_bet_move {
	    from{
	        transform: translate(-50%,-200%) scale(0,0);
	        opacity: 0;
        }
        to{
            transform: translate(-50%,-50%) scale(1,1);
            opacity: 1;
        }
    }


    .qiandao_bet>img{
        width:100%;
        
    }

    .qiandao_bet>img:nth-child(2){
        width: 60%;
        position: absolute;
        left:20%;
        top:70%;
    }
    .qiandao_bet>p:nth-child(3){
        width: 60%;
        position: absolute;
        left:20%;
        top:100%;
        height: .6rem;
        line-height: .6rem;
        text-align: center;
        color : #d62020;
        font-size: .4rem;
    }
    .qiandao_bet>img:nth-child(4){
        width: 10%;
        position: absolute;
        left: 45%;
        margin-top:1.3rem;
    }
   
</style>

