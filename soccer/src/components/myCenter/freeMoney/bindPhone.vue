<template>
    
    <div class="bindPhone">
        <back title="绑定手机号"></back>
        <div class="bindPhone_cont">
            <p>
                <label for="">手机号</label>
                <input type="text" v-model="phone_number" placeholder="请输入您的手机号">
                 <i v-show="phone_number.length>0" @click="clear_input(phone_number)"> × </i>
            </p>

            <p>
                <label for="">验证码</label>
                <input type="text" v-model="Verifi_code" placeholder="输入验证码">
                 <i v-show="Verifi_code.length>0" @click="clear_input(Verifi_code)"> × </i>
                <button @click="get_code">
                    
                    <span v-if="this.get_code_text == '获取验证码' "> {{get_code_text}} </span>
                    <span v-if="this.get_code_text != '获取验证码' "> {{get_code_text}}后再试 </span>
                </button>
            </p>


            <p>
                <label for="">密码</label>
                <input type="text" v-model="password" placeholder="设置登录密码">
                <i v-show="password.length>0" @click="clear_input(password)"> × </i>
            </p>

            <div @click="bind_all">请输入以上内容</div>
        </div>
    </div>

</template>


<script>
    import Back from '../../back/back.vue';
    import {requestOpt,getUserInfo} from '../../../api/recommend'
    import { Toast ,Indicator} from 'mint-ui';
    export default{
        components:{
            Back
        },
        name : 'BindPhone',
        data(){
            return{
                phone_number:'',
                Verifi_code :'',
                password:'',
                user : '',
                get_code_text:'获取验证码'
            }
        },
        methods:{

            clear_input(str){
                if(str == this.phone_number){
                    this.phone_number = '';
                }

                if(str == this.Verifi_code){
                    this.Verifi_code = '';
                }

                if(str == this.password){
                    this.password = '';
                }

            },

            get_code(){

               let reg =  /^[1][3,4,5,7,8][0-9]{9}$/;  
               if(!reg.test(this.phone_number)){
                   Toast('请输入正确的手机号码')
                   return;
               }
                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });
               this.user = getUserInfo();
               requestOpt.reqPost('/authCode/bind',{
                   mobile:this.phone_number
               },              
               (res)=>{
                   if(res.data.status){
                       Indicator.close()
                    //    验证码获取玩后倒计时
                       this.get_code_text = 60;
                        let timer = setInterval(()=>{
                               this.get_code_text--;
                                if( Number(this.get_code_text) < 0){
                                    this.get_code_text = '获取验证码';
                                    clearInterval(timer);
                                }
                        },1000)
                        
                      
                       
                   }else{
                       Toast(res.data.msg);
                        Indicator.close()
                   }
               },
               
               (err)=>{
                   Indicator.close()
                  Toast('网络链接失败，请稍后再试');
               })

            },

            bind_all(){
                this.user = getUserInfo();
                if(!this.phone_number){

                    Toast('请输入手机号码')
                    return;
                }

                if(!this.Verifi_code){
                    Toast('请输入验证码')
                    return;
                }
                if(!this.password){
                    Toast('请输入密码')
                    return;
                }

                Indicator.open({
                    text: '加载中...',
                    spinnerType: 'fading-circle'
                });

                requestOpt.reqTokenPost('/user/bind',
                
                    this.user.authToken,{
                     mobile : this.phone_number,
                     openID : '1',
                     avatar : this.user.avatar,
                     name : this.username,
                     authCode : this.Verifi_code,
                     password : this.password,
                     type  : 0,
                    },

                    (res)=>{
                    if(res.data.status){
                        Indicator.close();
                        
                    }else{
                        Indicator.close();
                        Toast(res.data.msg);
                    }
              },
              (err)=>{
                  Indicator.close();
                 Toast('网络链接失败，请稍后再试');
              })


            }
  
      

        },

        mounted(){
         
        }

    }
</script>

<style>

/* .bindPhone{
    min-height: 12.45rem;
    background: #f3f4f4; */
/* } */

.bindPhone_cont{

    margin-top:0.88rem;
    padding: 1.2rem .55rem;
    background: #fff;
}

.bindPhone_cont p {
    position: relative;
    height: .8rem;
    line-height: .8rem;
    border-bottom: 0.002rem solid #000;
    margin-bottom: .45rem;
}

.bindPhone_cont p label{
    font-size: 0.27rem;
    position: absolute;
    left:0;
}

.bindPhone_cont p input{
    position: absolute;
    left:1.3rem;
    vertical-align: middle;
    top:52%;
    transform: translateY(-50%); 
    border: none;
    color:#000;
    font-size: 0.25rem;
}

.bindPhone_cont p input::-moz-placeholder{
    color:silver;
    font-size: 0.23rem;
}
.bindPhone_cont p input::-webkit-placeholder{
    color:silver;
    font-size: 0.23rem;
}

.bindPhone_cont p i{
    position: absolute;
    width: .24rem;
    height: .24rem;
    line-height: .22rem;
    text-indent: 0.035rem;
    background: #ccc;
    border-radius: 50%;
    right: 2rem;
    top:50%;
    transform: translateY(-50%);
    color:#fff;
}

.bindPhone_cont p button{
    position: absolute;
    background: #ff5b06;
    border: none;
    outline: none;
    right: 0;
    top:50%;
    transform: translateY(-50%);
    color: #fff;
    padding: .12rem .15rem;
    border-radius: 5px;
    width: 1.8rem;
}

.bindPhone_cont>div{

    height: .7rem;
    line-height: .7rem;
    text-align: center;
    color:#fff;
    background: #ff5b06;
    margin-top:1rem;
    border-radius: 5px;
}
</style>

