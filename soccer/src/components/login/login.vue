<template>
	<div class="login">
		<back :title="title"></back>
		<div class="login-input-warp">
			<login-input bgType="1" placeholder="请输入您的手机号/会员号" type="text" @inputVal="getName"></login-input>
			<login-input bgType="2" placeholder="请输入您的密码" needEye="true" type="password" @inputVal="getPassword"></login-input>
		</div>
		<div class="login-btn-warp">
			<a :class="{disabled : disabled}" @click="login">登陆</a>
			<a @click="tryPlay">游客登陆</a>
		</div>
		<div class="register-btn-warp">
			<!-- <router-link to="/registerPhone">手机号注册</router-link>-->
			 <router-link to="/register" style="margin:0 .24rem;" >用户名注册</router-link>
			  <a @click="forget">忘记密码</a>
		</div>
		<!--<div class="line-warp">
			<div class="line"></div>
			<p>其他登陆方式</p>
			<div class="line"></div>
		</div>
		<div class="orther-login">
			<img src="../../images/login_qq.png" />
			<img src="../../images/login_weixin.png" />
			<img src="../../images/login_weibo.png" />
		</div>-->
	</div>

</template>

<script type="text/ecmascript-6">
	import { Indicator,Toast } from "mint-ui";
	import Back from '@/components/back/back'
	import loginInput from '@/components/login/loginInput'
	import {requestOpt ,setUserInfo} from 'api/recommend'
	import { MessageBox } from 'mint-ui';

	export default {
		components: {
			Back,
			loginInput
		},
		data() {
			return {
				title: "登陆",
				disabled: true,
				username: "",
				password: ""
			}
		},

		methods: {
			forget(){
				MessageBox.confirm('忘记密码需联系在线客服找回，确认联系在线客服吗').then(action => {
				  this.$router.push('/service')
				},() => {
					
				});
			},
			getDisabled(){
				if(this.username !=="" && this.password !==""){
					this.disabled = false;
				}else{
					this.disabled = true;					
				}
			},
			getName(username) {
				this.username = username;
				this.getDisabled();
			},
			getPassword(password) {
				this.password = password;				
				this.getDisabled();
			},
			tryPlay(){
				Indicator.open();
				requestOpt.reqGet('user/reg/trial/msg', res => {
					Indicator.close();
					if (res.data.status) {
						this.$router.push({ path: '/playRegister', query:{name:res.data.data.account}});
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			},
			login() {
				if(this.disabled){
					Toast('请填写完整');
					return false;
				}
				Indicator.open();
				requestOpt.reqPost('user/login', {
					mobile:this.username,
					password:this.password
				}, res => {
					Indicator.close();
					if (res.data.status) {
						setUserInfo(res.data.data);
						this.$router.go(-1);
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			}

		}
	}
</script>

<style scoped>
	.login {
		padding: 1.8rem .2rem 0 .2rem;
		
		width: 7.1rem;
	
	}
	
	.login-input-warp {
		margin-bottom: 1rem;
		
	}
	.login-input-warp div{
		margin-bottom: 1px;
	}
	.login-btn-warp{
		padding:0 .2rem;
	}
	.login-btn-warp a {
		height: .85rem;
		display: block;
		background-color: #24a8de;
		font-size: .32rem;
		line-height: .85rem;
		text-align: center;
		color: #fff;
		border-radius: .05rem;
		margin-bottom: .33rem;
		
	}
	.login-btn-warp a:last-child{
		box-sizing: border-box;
		background: #f3f4f4;
		border: 1px solid #24a8de;
		color: #24a8de;
	}
	
	
	.register-btn-warp {
		margin-top: .6rem;
		font-size: .26rem;
		display: flex;
		justify-content: center;
	}
	
	.register-btn-warp a {
		color: #93afc5;
		border-right: 1px solid #aaa;
		padding-right: .24rem;
		height: .23rem;
		line-height: .23rem;
	}
	.register-btn-warp a:last-child{
		border-right:none;
	}
	.line-warp {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 1.2rem 0 .9rem 0;
	}
	
	.line-warp .line {
		height: 1px;
		width: 2rem;
		background: #aaa;
	}
	
	.orther-login {
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	
	.orther-login img {
		width: 1.2rem;
		height: 1.2rem;
		cursor: pointer;
	}
</style>