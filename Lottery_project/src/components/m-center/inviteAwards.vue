<template>
   <div class="awards">
        <Back title="邀请领奖"></Back>
        <div class="awards_wrap">
            <div class="awards_invite_code">
                <img src="../../images/new_m_center/awards_capacity.png" alt="">
                <input type="text" placeholder="请输入邀请码即可领取10元" v-model="invite_code_text">
                <p>*验证码区分大小写</p>
                 
                 <div class="code_inner_box" @click="validate">
                     <img src="../../images/new_m_center/awards_bt.png" alt="">
                      <p>马上验证</p>
                 </div>
            </div>
        </div>
   </div>
</template>

<script>
    import Back from '../back/back'
    import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
    import {mapState, mapActions} from 'vuex'
    export default{
        data(){
           return{
               invite_code_text : ''
           }
        },
        components:{
            Back,
        },
        methods:{
            validate(){
                if(!this.invite_code_text){
                    mt_toast('请输入邀请码')
                    return; 
                }
                requestOpt.reqPost('userinvcodereward',sessionStorage.getItem('token'),
                    {
                        invCode : this.invite_code_text
                    },
                    (res)=>{
                        if(res.data.status == 1){
                            // alertip(res.data.msg)
                            mt_toast(res.data.msg)
                            this.invite_code_text = '';
                        }else{
                            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
                                window.sessionStorage.removeItem('userinfo')
                                window.sessionStorage.removeItem('login')
                                window.sessionStorage.removeItem('token')
                                this.$router.push('/login')
                            }
                             this.invite_code_text = ''
                             mt_toast(res.data.msg)
                        }
                    },(err)=>{
                        if(err){
                            alertip(err.data.msg)
                        }
                        // alertip('网络连接失败');
                    })
            }
        }

    }

</script>

<style lang="stylus" scoped>

    // .awards Back{
    //     position : fixed ;
    //     top: 0;

    // }
    .awards_wrap{
        width : 100%;
        height:100%;
        margin-top: 0.88rem;
        position: relative;
    }

    .awards {
        height : 100%;
        background: url('../../images/new_m_center/awards_bg.png') no-repeat center / cover;
    }

    .awards .awards_invite_code{
        width: 80%;
        height : auto;
        position: absolute;
        top:38%;
        left:50%;
        transform: translate(-50%,-50%);
        
    }

    .awards_invite_code img{
        width : 100%;
    }

    .awards_invite_code input{
        width: 80%;
        left: 10%;
        top: 10%;
        position : absolute ;   
        padding-left:0.2rem;
        height:1rem; 
        background: #e6cfa1;
        border-radius: 5px;
        border : 0.5px solid #bb9f68;
        font-size: 0.3rem;
        letter-spacing : 0.3px;
    }

    .awards_invite_code input::-webkit-input-placeholder{
            color:#dfb96e;
            font-size : 0.31rem;
        }
    .awards_invite_code  input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color:#dfb96e;
            font-size : 0.31rem;
        }
    .awards_invite_code  input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color:#dfb96e;
            font-size : 0.31rem;
        }
    .awards_invite_code  input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color:#dfb96e;
            font-size : 0.31rem;
    }

    .awards_invite_code p{
        
        color : #85672a;
        position: absolute ;
        left: 10%;
        top:32%;
    }

    .awards_invite_code .code_inner_box{
        position: absolute
            width:78%;
            left:11%;
            bottom:15%;
    }

    .awards_invite_code .code_inner_box p{
        color: #fff;
        font-size: 0.36rem;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50% , -50%);
    }
</style>

