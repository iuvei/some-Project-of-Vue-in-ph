<template>
  <div class="register">
		<back title="用户名注册"></back>
		<div class="register-input">
			<login-input bgType="1" placeholder="请输入账号" type="text" @inputVal="getAccount"></login-input>
			<login-input bgType="2" placeholder="请输入密码" needEye="true" type="password" @inputVal="getPassword"></login-input>
			<login-input bgType="2" placeholder="请再次输入密码" needEye="true" type="password" @inputVal="getPasswordR"></login-input>
			<login-input bgType="4" placeholder="请输入验证码" type="text" @inputVal="getAuthCode" @sessionId="getSessionId" ref="authCode"></login-input>
			<login-input bgType="3" placeholder="邀请码（选填）" type="text" @inputVal="getAgentCode"></login-input>		
		</div>
		<div class="checkbox-warp">
			 <input type="checkbox" id="checkbox_a" class="checkbox_a"  v-model="checked"/>
       <label for="checkbox_a"></label>
	     <router-link tag="a"  to="/agreement" style="color:#c1c1c7">
	          我已阅读并同意《彩票》相关条例
	     </router-link>
		</div>
		<a :class="{disabled : disabled}" @click="register" class="register-btn">注册</a>
		
    <div class="line-warp" @click="$router.go(-1)">
			<div class="line"></div>
			<p style="color:#c1c1c7">已有账号，<span style="color: #24a8de;">直接登陆</span></p>
			<div class="line"></div>
		</div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import { requestOpt} from 'api/recommend'
  import loginInput from '@/components/login/loginInput'
  import { Indicator,Toast } from "mint-ui";

  export default {
    components: {
      Back,
      loginInput
    },
    data() {
      return {
      	disabled:true,
        account: '',
        password: '',
        repassword: '',
        agentCode: '',
        checked:'true',
        authCode:'',
        sessionId:''
      }
    },
    mounted() {

		},
    methods: {
    	register(){
	    		if(this.disabled){
	    			Toast('请填写完整');
						return false;
					}else if(!this.checked){
						Toast('必须同意彩票相关条例才能注册');
						return false;
					}else if(this.password !== this.repassword){
						Toast('两次密码不一致');
						return false;
					}else if(this.account.length<6&&this.password.length<6){
						Toast('账号和密码长度必须大于6位');
						return false;
					}
    			Indicator.open();
    		 requestOpt.reqPost('user/reg/account?JSESSIONID='+this.sessionId,{
          	account: this.account,
	          password: this.password,
	          repassword: this.repassword,
	          agentCode: this.agentCode,
	          code: this.authCode
        }, res => {
        	Indicator.close();
          if (res.data.status) {
          	Toast('注册成功')
          	setTimeout(res => {
          		this.$router.go(-1);
          	},1000)          
          } else {
          	this.$refs.authCode.changeCode();
            Toast(res.data.msg)
          }
        }, err => {
        	this.$refs.authCode.changeCode();
          Toast(err.msg)
        })
    	},
      getDisabled(){
				if(this.account !=="" && this.password !=="" && this.repassword !==""&& this.authCode !==""){
					this.disabled = false;
				}else{
					this.disabled = true;					
				}
			},
			getSessionId(sessionId){
				this.sessionId = sessionId;
			},
      getAccount(account){
      	this.account = account;
      	this.getDisabled();
      },
      getPassword(password){
      	this.password = password;
      	this.getDisabled();
      },
      getPasswordR(repassword){
      	this.repassword = repassword;
      	this.getDisabled();
      },
      getAgentCode(agentCode){
      	this.agentCode = agentCode;
      },
      getAuthCode(authCode){
      	this.authCode = authCode;
      	this.getDisabled();
      }
    }
  }

</script>

<style scoped >
  .register{
    padding: 1.4rem .38rem 1rem .38rem;
		width: 7.5rem;
		background: #fff;
		box-sizing: border-box;
  }
  .register-input .login-input{
  	border-bottom: 1px solid #ededed;
  	margin-bottom: .1rem;
  }
	.register-btn {
		height: .8rem;
		display: block;
		background-color: #24a8de;
		font-size: .32rem;
		line-height: .8rem;
		text-align: center;
		color: #fff;
		border-radius: .05rem;
		margin-top: .5rem;
	}

.checkbox_a { 
    display: none; 
} 
 
.checkbox_a + label { 
		background-color: #a0a0a0;
    width: .34rem;
    height: .34rem;
    border-radius: 50%; 
    display: inline-block; 
    position: relative; 
    margin-right: .24rem; 
    color: #fff;
} 

.checkbox_a:checked + label { 
    background-color: #52e05f;  
} 
 
.checkbox_a + label:after { 
		color: #fff;
		font-size: .32rem;
    content: '\2713'; 
    position: relative;
    top: -.08rem;
    left: .03rem;
} 
.checkbox-warp{
	margin-top: .4rem;
	display: flex;
	align-items: center;
	padding-left: .14rem;
}
.checkbox-warp a{
	color: #555555;
}
.line-warp {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: .9rem 0 .9rem 0;
	}
	
	.line-warp .line {
		height: 1px;
		width: 2rem;
		background: #c1c1c7;
	}
	
</style>










































































