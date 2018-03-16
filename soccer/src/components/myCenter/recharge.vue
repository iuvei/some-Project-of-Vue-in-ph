<template>
	<div class="recharge">
		<back title="充值"></back>
		<div class="recharge-content" v-if="dataArr">
			<div class="recharge-balance">
				<span>充值金额:</span>
				<input placeholder="请输入充值金额至少10元" v-model="rNum" type="number" onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')"/>
				<span class="fr">元</span>
			</div>
			<div class="recharge-balance-btn">
				<span :class="{'balance-item': rNum==items}" @click="handleBalance(items)" v-for="items in dataArr[payIndex-1].moneys">{{items}}</span>
			</div>
			<div class="recharge-sel">
				<h4>请选择支付方式</h4>
				<ul class="recharge-sel-tab">
					<li :class="{ active: item.id == payIndex}" 
						:key="item.id" 
						v-for="(item,index) in dataArr"
						@click="togglePay(item.id)"
					>{{item.name}}</li>
				</ul>
				<mt-tab-container v-model="payIndex" class="pay-content">
				  <mt-tab-container-item :id="item.id" :key="item.id" v-for="(item,index) in dataArr">
				  	<div class="pay-item" 
				  		v-for="n in item.info" 
				  		v-if="item.id != 3"
				  		@click="toPay(n)">
				  		<div class="pay-item-img" >
				    		<img :src="n.logo" :alt="n.name"/>
				    	</div>
				    	<div class="pay-item-text" >
				    		<span>{{n.name}}</span>
				    		<p>{{n.mfrom}} - {{n.mto}}</p>				    		
				    	</div>
				  	</div>
				  	<div v-if="item.id == 3" style="padding: 0 .2rem;">
				  		<ul v-for="(n,index) in item.info" class="pay-item-bank" :class="{active:bankIndex == index}" @click="choseBank(index)">
				    	<li><span>收款银行</span><span>{{n.name}}</span></li>
				    	<li><span>收款账号</span><span>{{n.cardNumber}}</span></li>
				    	<li><span>收款人</span><span>{{n.owner}}</span></li>
				    	<li><span>收款支行</span><span>{{n.bankAddress}}</span></li>
				    	</ul>
				    	<a class="bank_btn" @click="rechargeInfo(item.info[bankIndex].id)">下一步</a>
				  	</div>
				     
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
	</div>

</template>

<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	import { requestOpt , getUserInfo } from 'api/recommend'
	import { Indicator, Toast } from "mint-ui";

	export default {
		components: {
			Back
		},
		data() {
			return {
				rNum: 10,
				dataArr: null,
				payIndex:"",
				swipeable:true,
				bankIndex:0,
				authToken:getUserInfo().authToken,
				
			}
		},
		created() {

		},
		computed: {

		},
		activated(){
			if(this.authToken !== getUserInfo().authToken){
				this.authToken = getUserInfo().authToken;
				this.getChargeTypes();
			}
		},
		methods: {
			rechargeInfo(id){
				let index = this.bankIndex;
				this.$router.push({ path: '/rechargeInfo', query: {cash:this.rNum,id:id,data: JSON.stringify(this.dataArr[2].info[index])}})
			},
			choseBank(index){
				this.bankIndex = index;
			},
			toPay(n){
				if(this.rNum>n.mto || this.rNum<n.mfrom){
					Toast("请输入规定范围的充值金额")
					return false;
				}
				this.$router.push({ path: '/rechargeConfrim', query: { title: n.title ,id: n.id ,amount:this.rNum,chargeType:n.chargeType,payIndex:this.payIndex,isThird:n.isThird,bankAddress:n.bankAddress}})
			},
			togglePay(index){
				this.payIndex = index;
			},
			handleBalance(numStr) {
				this.rNum = numStr;
			},
			getChargeTypes() {
				Indicator.open();
				requestOpt.reqTokenGet('charge/type', getUserInfo().authToken, res => {
					if(res.data.status) {
						this.dataArr = res.data.data;
						this.payIndex = this.dataArr[0].id;
						Indicator.close()
					} else {
						Toast(res.data.msg);
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
				})
			},

		},
		mounted() {
			this.getChargeTypes();
		}
		
	}
</script>

<style scroped>

	.recharge {
		width: 7.5rem;
		padding-top: 1.28rem;
		
	}
	
	.recharge-balance {
		background: #fff;
		margin: 0 0.3rem;
		padding: 0 0.2rem 0 0.1rem;
		font-size: .28rem;
	}
	
	.recharge-balance input {
		outline: none;
		width: 4.8rem;
		padding: .3rem 0;
		font-size: .32rem;
		color: #fc823c;
		border: none;
	}
	
	.recharge-balance input::placeholder {
		color: #bfbfbf
	}
	
	.recharge-balance-btn {
		margin: 0.3rem 0.3rem 0.1rem;
		color: #333;
		font-size: .4rem;
		display: flex;
		flex-wrap: wrap;
	}
	
	.recharge-balance-btn span {
		width: 1.66rem;
		height: .8rem;
		margin-right: 0.06rem;
		margin-bottom: 0.06rem;
		padding: 0.15rem 0;
		background: #fff;
		border: 1px solid #fc823c;
		color: #fc823c;
		text-align: center;
		box-sizing: border-box;
		border-radius: 0.1rem;
	}
	
	.recharge-balance-btn span.balance-item {
		background: #fc823c;
		color: #fff;
	}
	.recharge-sel{
		min-height: 8.96rem;
	}
	.recharge-sel h4 {
		color: #333;
		font-size: 0.3rem;
		margin: 0 0 .3rem .3rem;
	}
	.recharge-sel-tab{
		display: flex;
		width: 100%;
	}
	.recharge-sel-tab li {
		flex-grow:1;
		padding:.25rem 0;
		background: #fff;
		border-bottom: 1px solid #ddd;
		color: #333;
		font-size: .3rem;
		text-align: center;
	}
	
	.recharge-sel-tab li.active {
		color: #fc823c;
		border-bottom: 2px solid #fc823c;
	}
	.pay-content{	
    color: #000;
    
	}
	.pay-item{
		display: flex;
		align-items: center;
		height: 1rem;
		cursor: pointer;
		padding-left: .2rem;
		background: #fff;
		margin-top: .2rem;
	}
	.pay-item-img{
		width: 1rem;
		min-height: 1rem;
		font-size: .14rem;
		display: flex;
		align-items: center;
		margin-right: .2rem;
	}
	.pay-item-img img{
		width: 100%;
		text-align: center;
	}
	.pay-item-bank {
		margin-top: .2rem;
		padding: 0.3rem 0.3rem;
    	font-size: 0.28rem;
    	background: url(../../images/bank_f.jpg) no-repeat right .5rem center #fff;
    	background-size: .5rem .5rem;
	}
	.pay-item-bank.active{
		background: url(../../images/bank_t.jpg) no-repeat right .5rem center #fff;
    	background-size: .5rem .5rem;
	}
	.pay-item-bank li{
		display: block;
		display: flex;
		color: #7e8c8d;
	}
	.pay-item-bank li span:first-child{
		width: 1.6rem;
	}
	.bank_btn{
		position: fixed;
		bottom: 0;
		left: .38rem;
		
		display: block;
		margin: .3rem 0;
		width: 6.8rem;
		height: .68rem;
		line-height: .68rem;
		text-align: center;
		background: #24a8de;
		color: #fff;
		border-radius: .05rem;
	}
</style>