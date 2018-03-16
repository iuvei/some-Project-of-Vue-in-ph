<template>
    
    <div class="bindAccount">
        <Back title="账户绑定"></Back>
        <div class="bindAccount_cont">
            <p @click="go_bind_phone">
                <img src="../../../images/r_mobile@3x.png" alt="">
                <i>绑定手机</i>
                <span>未绑定</span>
            </p>

             <!--<p>
                <img src="../../../images/r_qq@3x.png" alt="">
                <i>QQ</i>
                <span>未绑定</span>
            </p>

             <p>
                <img src="../../../images/r_wechat@3x.png" alt="">
                <i>微信</i>
                <span>未绑定</span>
            </p>

             <p>
                <img src="../../../images/r_weibo@3x.png" alt="">
                <i>新浪微博</i>
                <span>未绑定</span>
            </p>-->
            
            <h6>绑定账户后，可使用其他账号登录当前账号</h6>
            
        </div>
    </div>

</template>


<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from '../../../api/recommend'
    import { Toast } from 'mint-ui';
    export default{
        components:{
            Back
        },
        name : 'BindAccount',
        data(){
            return{
            
            }
        },
        methods:{
            go_bind_phone(){
                this.$router.push('/bindPhone')
            }
        },

        mounted(){
         
        }

    }
</script>

<style>



.bindAccount_cont{
    margin-top:0.88rem;
}
.bindAccount_cont>p{
    height:0.6rem;
    background: #fff;
    border-top:1px solid #ddd;
    line-height: 1rem;
    padding: 0.2rem 0.3rem;
    display: flex;
    position: relative;
}
.bindAccount_cont>p>img{
    width: 0.6rem;
    height:0.6rem;
    margin-right: .2rem;
}

.bindAccount_cont>p>i, .bindAccount_cont>p>span{

    line-height: 0.6rem;
    font-size: .3rem;
    
} 

.bindAccount_cont>p>i{
    color:#000;
}

.bindAccount_cont>p>span{
    color:silver;
    position: absolute;
    right: 0.3rem;
}

.bindAccount_cont>p>span::after{
    content: "";
    display:inline-block;
    width: .3rem;
    height: .3rem;
    background: url('../../../images/r_get_in_ arrow@3x.png') no-repeat center / 50% , 50%;
    vertical-align: middle;
    margin-left: .2rem;
    margin-top:-.05rem;
}

.bindAccount_cont h6{
    color:#929292;
    font-size: 0.24rem;
    text-align: center;
    margin-top:.2rem;
}
</style>

