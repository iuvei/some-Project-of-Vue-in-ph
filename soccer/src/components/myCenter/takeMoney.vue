<template>
	<div class="takeMoney">
		<back title="银行卡提款" ></back>
		<p class="takeMoney-list"><span>持卡人:</span>{{infoData.userName}}</p>
		<p class="takeMoney-list"><span>银行卡号:</span>{{infoData.bankCard}}</p>
		<ul class="takeMoney-ul">
			<li><span>当前余额:</span>{{infoData.currentMoney}}元</li>
			<li><span>可提款余额:</span>{{infoData.extractMoney}}元</li>
			<li><span>不可提金额:</span>{{infoData.dontUsed}}元</li>
		</ul>
		<mt-field label="提款金额" placeholder="元" type="number" v-model="money"></mt-field>
		<mt-field label="交易密码" placeholder="请输入交易密码" type="password" v-model="password"></mt-field>
		<a class="yes-btn" @click="takeMoneyBtn">确定</a>
	</div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { requestOpt ,getUserInfo } from 'api/recommend'
import { Indicator, Toast } from "mint-ui";
export default {
	components: {
		Back
	},
	data() {
		return {
			money:"",
			password:"",
			infoData:""
		}
	},
	computed: {

	},
	mounted() {
		Indicator.open();
		requestOpt.reqTokenGet('extract/msg/detail', getUserInfo().authToken, res => {
			this.infoData = res.data.data;
			Indicator.close();
		}, err => {

		})
	},
	methods: {
		choseBank() {
			this.showPicker = false;
		},
		takeMoneyBtn() {		
			if(!this.money || !this.password ) {
				Toast('请填写提现金额和提现密码');
				return false;
			}

			if(parseFloat(this.money)>parseFloat(this.infoData.extractMoney)) {
				Toast('提现金额必须小于等于可提款余额');
				return false;
			}

			if(!/^\d{6}$/.test(this.password)) {
				Toast('交易密码只能是6位数字');
				return false;
			}
			Indicator.open();
			requestOpt.reqTokenPost('extract',  getUserInfo().authToken, {
				money:this.money,
				password:this.password
				}, res => {
				if(res.data.status){
					Indicator.close();
					Toast("提现成功");
					this.$router.push('/myCenter');
				}else{
					Indicator.close();
					Toast(res.data.msg)
				}
			}, err => {
				Indicator.close();
				Toast('网络链接失败，请稍后再试')
			})}
	}
}
</script>

<style scoped>
.takeMoney {
	padding: 1.6rem .2rem 0 .2rem;	
	width: 7.1rem;;
	font-size: .28rem;
}

.yes-btn{
	display: block;
	margin-top: .5rem;
	width: 100%;
	text-align: center;
	height: 1rem;
	line-height: 1rem;
	background: #009BDB;
	color: #fff;
	border-radius: .1rem;
	font-size: .3rem;
}
.takeMoney-ul{
	background: #fff;
	margin-bottom: .2rem;
	color: red;
}
.takeMoney-list{
	height: .8rem;
	line-height: .8rem;
	background: #fff;
	margin-bottom: .1rem;
}
.takeMoney-list span,.takeMoney-ul span{
	display: inline-block;
	width: 2.1rem;
	padding-left: .2rem;
	color: #000;
}

.takeMoney-ul li{
	height: .8rem;
	line-height: .8rem;
	background: #fff;
}
</style>