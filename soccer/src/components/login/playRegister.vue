<template>
  <div class="register">
		<back title="试玩用户注册"></back>
		<div class="register-input">
			<login-input bgType="1" read='readonly' type="text" ref="input" noClose="true"></login-input>
			<login-input bgType="2" placeholder="请输入密码" needEye="true" type="password" @inputVal="getPassword"></login-input>
			<login-input bgType="2" placeholder="请再次输入密码" needEye="true" type="password" @inputVal="getPasswordR"></login-input>
		</div>
		<a :class="{disabled : disabled}" @click="register" class="register-btn">立即试玩</a>
    	<router-link tag="div"  to="/login" class="line-warp">
			<div class="line"></div>
			<p style="color:#c1c1c7">已有账号，<span style="color: #24a8de;">直接登陆</span></p>
			<div class="line"></div>
		</router-link>
		<p class="register-text">1.每个试玩账号初始金额1000元</br>
			2.每个IP每天最多可以创建20个试玩账号</br>
			3.每个账号从注册开始有效期为7天,超过有效期系统自动回收</br>
			4.试玩账号不允许充值、提现操作"</br>
		</p>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import { requestOpt , setUserInfo} from 'api/recommend'
  import loginInput from '@/components/login/loginInput'
  import { Indicator,Toast } from "mint-ui";

  export default {
    components: {
      Back,
      loginInput
    },
    data() {
      return {   
      	disabled:'',
        password: '',
        repassword: '',
      }
    },
    mounted() {
    	if(this.$route.query.name){
    		this.$refs.input.setModel(this.$route.query.name);
    	}else{
    		this.$router.push('/login');
    	}
    	
	},
    methods: {
    	register(){
			if(this.password !== this.repassword){
				Toast('两次密码不一致');
				return false;
			}else if(this.password.length<6){
				Toast('密码长度必须大于6位');
				return false;
			}
    			Indicator.open();
    		 requestOpt.reqPost('user/reg/trial', {
          		account: this.$route.query.name,
		        password: this.password,
		        repassword: this.repassword,
        }, res => {
        	Indicator.close();
          if (res.data.status) {
          	setUserInfo(res.data.data);
          	this.$router.push('/myCenter');
          } else {
            Toast(res.data.msg)
          }
        }, err => {
          Toast(err.msg)
        })
    	},
      getDisabled(){
			if(this.password !=="" && this.repassword !==""){
				this.disabled = false;
			}else{
				this.disabled = true;					
			}
		},
      getPassword(password){
      	this.password = password;
      	this.getDisabled();
      },
      getPasswordR(repassword){
      	this.repassword = repassword;
      	this.getDisabled();
      },
    }
  }

</script>

<style scoped >
  .register{
  padding: 1.4rem .38rem 1.1rem .38rem;
		width: 7.5rem;
		background: #fff;
		box-sizing: border-box;
  }
  .register-input div{
  	margin-bottom: 1px;
  	border-bottom: 1px solid #ededed;
  }
  .register-text{
  	color: #aaa;
  	line-height: .6rem;
  	font-size: .22rem;
  	padding-left: .16rem;
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
		margin-top: 1.2rem;
	}
	
	.register-btn.disabled {
		background-color: #ccc;
	}

.line-warp {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: .9rem 0 .6rem 0;
	}
	
	.line-warp .line {
		height: 1px;
		width: 2rem;
		background: #c1c1c7;
	}
	
</style>










































































