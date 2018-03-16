<template>
    <div class="agency">
        <Back title="代理中心"></Back>
        <div class="agency_wrap">
            <div class="agency_cont">
                <div class="agency_cont_left" v-if="!user.avatar">
                    
                </div>
                <div class="agency_cont_img" v-if="user.avatar">
                	<img :src="user.avatar" />
                </div>
                <div class="agency_cont_right">
                    <p>用户名:{{yong_jin_data.userName}}</p>
                    <p>账户余额:￥ {{yong_jin_data.banlance}}</p>
                    <p>佣金收入:￥ {{yong_jin_data.fee}}</p>
                </div>
            </div>
        </div>
        <router-link tag="h4" to="/agentInstruction">代理说明</router-link>
        <router-link tag="h4" to="/agencyCode" v-if="user.userType == 4">邀请码</router-link>
        <router-link tag="h4" to="/agencyAdmin" v-if="user.userType == 4">用户管理</router-link>
        <router-link tag="h4" to="/agencyMoney" v-if="user.userType == 4">代理佣金</router-link>
        <router-link tag="h4" to="/agencySeach" v-if="user.userType == 4">报表查询</router-link>
    </div>
</template>

<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from '../../../api/recommend'
    import { Toast , Indicator } from 'mint-ui';
    export default{
        components:{
            Back
        },
        name : 'Agency',
        data(){
            return{
                yong_jin_data:'',
                user:getUserInfo()
            }
        },
        methods:{
            // 获取佣金信息
            get_yong_jin(){
				Indicator.open();
                requestOpt.reqTokenGet('agent',getUserInfo().authToken,
                    (res)=>{
                    	Indicator.close();
                        if(res.data.status){
                            this.yong_jin_data = res.data.data;
                        }else{
                            Toast(res.data.msg);
                        }
                    },
                    
                    (err)=>{
                       Toast('网络链接失败，请稍后再试');;
                    })
                }
            

        },

        mounted(){
            this.get_yong_jin();
        }

    }
</script>

<style scoped>


    .agency_wrap{
        background: #f3f4f4;
        height: 4.2rem;
        margin-top:0.88rem;
        padding: 1rem .6rem;
        box-sizing: border-box;
    }
    .agency_cont{
        height: 100%;
        /* background:pink; */
        display: flex;
        align-items: center;
    }

    .agency_cont_left,.agency_cont_img{
        width:1.2rem;
        height: 1.2rem;
        background:#ffbf9b;
        border-radius: 50%;
        position: relative;
        margin-right:.6rem;
        overflow: hidden;
    }
    .agency_cont_img img{
    	width: 100%;
    }
    .agency_cont_left::before{
        content: "";
        position: absolute;
        background:#fff;
        top:18%;
        left:50%;
        transform: translateX(-50%);
        width:.45rem;
        height: .45rem;
        border-radius: 50%;
    }
    .agency_cont_left::after{
        content: "";
        position: absolute;
        background:#fff;
        top:55%;
        left:50%;
        transform: translateX(-50%);
        width:0.7rem;
        height: .34rem;
        border-radius: 5px;
    }
    .agency_cont_right p{
        font-size: .3rem;
        line-height: .64rem; 
    }
    .agency>h4{
        background:#fff;
        border-bottom: 1px solid #ddd;
        height: 0.88rem;
        line-height: 0.88rem;
        /* text-align: center; */
        font-size: 0.3rem;
        color: #000;
        padding-left: .3rem;
        position: relative;
    }

    .agency>h4::before{
        content: "";
        display: inline-block;
        width:.4rem;height: .4rem;
        background: url(../../../images/arrow_right.png) no-repeat center /50% 80%;
        position: absolute;
        right: .2rem;
        top:50%;
        transform: translateY(-50%);
    }
</style>

