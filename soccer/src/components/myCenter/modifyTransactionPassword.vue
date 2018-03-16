<template>
	<div class="modifyTransactionPassword">
		<back title="修改交易密码"></back>
		<div class="modify-input">
			<login-input bgType="2" placeholder="请输入您的交易密码" needEye="true" type="password" @inputVal="getPassword"></login-input>
			<login-input bgType="2" placeholder="请输入您的新密码" needEye="true" type="password" @inputVal="getPasswordR"></login-input>
		</div>
		<a :class="{disabled : disabled}" @click="modify" class="modify-btn">确定</a>

	</div>

</template>

<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	import { requestOpt , getUserInfo } from 'api/recommend'
	import loginInput from '@/components/login/loginInput'
	import { Indicator, Toast } from "mint-ui";

	export default {
		components: {
			Back,
			loginInput
		},
		data() {
			return {
				disabled:true,
				password: '',
				repassword: '',
			}
		},
		mounted() {

		},
		methods: {
			modify() {
				if(this.disabled) {
					return false;
				} else if(this.password == this.repassword) {
					Toast('新密码不能跟旧密码一样');
					return false;
				} else if(this.password.length < 6 && this.repassword.length < 6) {
					Toast('密码长度必须大于6位');
					return false;
				}
				Indicator.open();
				requestOpt.reqTokenPost('extract/pwd/forget',getUserInfo().authToken,{
					password: this.password,
					repassword: this.repassword,
				}, res => {
					Indicator.close();
					if(res.data.status) {
						Toast('修改成功')
						setTimeout(res => {
							this.$router.push('/setting');
						}, 1000)

					} else {
						Toast(res.data.msg)
					}
				}, err => {
					Toast(err.msg)
				})
			},
			getDisabled() {
				if(this.password !== "" && this.repassword !== "") {
					this.disabled = false;
				} else {
					this.disabled = true;
				}
			},
			getPassword(password) {
				this.password = password;
				this.getDisabled();
			},
			getPasswordR(repassword) {
				this.repassword = repassword;
				this.getDisabled();
			},
		}
	}
</script>

<style scoped>
	.modifyTransactionPassword {
		padding: 1.8rem .2rem 0 .2rem;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		width: 7.1rem;
		background: #efeff4;
	}
	
	.modify-btn {
		height: 1rem;
		display: block;
		background-color: #ff5b06;
		font-size: .3rem;
		line-height: 1rem;
		text-align: center;
		color: #fff;
		border-radius: .5rem;
		margin-bottom: .3rem;
		margin-top: .6rem;
	}
	
	.modify-btn.disabled {
		background-color: #ccc;
	}
</style>