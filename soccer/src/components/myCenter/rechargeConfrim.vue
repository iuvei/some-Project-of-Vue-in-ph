<template>
	<div class="rechargeConfrim">
		<back :title="query.title"></back>
		<div class="rechargeConfrim-content" v-if="chargeType == 1">
			<p>充值金额:{{query.amount}}元</p>
			<div class="img-warp">
				<img :src="src.data" v-if="isThird"/>
				<img :src="bankAddress" v-if="!isThird"/>
			</div>
			<div class="rechargeConfrim-btn">
				<a @click="$route.goBack()">上一步</a>
				<a @click="toPay">立即充值</a>
				<a @click="payOk">我已支付</a>
			</div>
			<ul >
				<li>1，长按二维码并保存到手机相册中。</li>
				<li>2，点“立即充值”打开{{this.query.payIndex == 1? '微信':'支付宝'}}。</li>				
				<li>3，请在{{this.query.payIndex == 1? '微信':'支付宝'}}中打开“扫一扫”。</li>
				<li>4，在扫一扫中点击右上角，选择“从相册选取二维码”选取刚保存的图片。</li>
				<li>5，输入您欲充值的金额并进行转账。如充值未及时到账，请联系在线客服。</li>
			</ul>
		</div>
		<iframe ref="iframe" v-if="chargeType == 2" :srcdoc="src.data"></iframe>
		<iframe ref="iframe" v-if="chargeType == 3" :src="src.data"></iframe>
	</div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { requestOpt ,getUserInfo } from 'api/recommend'
import loginInput from '@/components/login/loginInput'
import { Indicator, Toast } from "mint-ui";

	export default {
		components: {
			Back,
		},
		data() {
			return {
				query:this.$route.query,
				src:"",
				id:this.$route.query.id,
				chargeType:this.$route.query.chargeType,
				bankAddress:this.$route.query.bankAddress,
				isThird:this.$route.query.isThird
			}
		},
		computed: {

		},
		mounted() {
			if(!this.isThird){
				return false;
			}
			Indicator.open();
			let src = `charge/qrcode/id/${this.query.id}/amount/${this.query.amount}`;
			requestOpt.reqTokenGet(src,getUserInfo().authToken,res => {
				Indicator.close();
				if(res.data.status){
					this.src = res.data;
				}else{
					Toast('网络链接失败，请稍后再试');				
				}
	          
	        }, err => {
	        	Indicator.close();
	          Toast('网络链接失败，请稍后再试')
	        })	
		},
		methods: {
			payOk(){
		      	Indicator.open();
		      	requestOpt.reqTokenPost('charge/save', getUserInfo().authToken,{
		      		amount:parseInt(this.query.amount),
		      		id:parseInt(this.query.id),
		      	}, res => {
					Indicator.close();
					if (res.data.status) {
						this.$router.push({ path: '/rechargeSuccess', query: {money:this.query.amount} })
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			},
			toPay(){
				 if(this.query.payIndex == 1 ){
	                window.location.href = "weixin://";
	                setTimeout(function(){
	                    Toast("打开微信失败，请自行打开");
	           		 },500);
	            } else if(this.query.payIndex == 2 ){
	                window.location.href="alipay://"
	                setTimeout(function(){
	                    Toast("打开支付宝失败，请自行打开");
	             },500);
	            } 
			}
		}	
	}
</script>

<style scoped>
	.rechargeConfrim iframe{
		width: 100%;
		height: 12rem;
		border: none;
	}
	.rechargeConfrim{
		padding-top: .88rem;
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		width: 7.5rem;
		background: #fff;
	}
	.rechargeConfrim-btn{
		display: flex;
		flex-grow:0;
		margin: .4rem 0 .6rem 0;
	}
	.rechargeConfrim-btn a{
		text-align: center;
		width: 3rem;
	    padding: 0.18rem;
	    background-color: #ff3a3b;
	    color: #fff;
	    border: 0;
	    border-radius: 0.08rem;
	    margin-right: .1rem;
	}
	.rechargeConfrim-btn a:last-child{
		margin-right: 0;
	}
	.rechargeConfrim-content{
		padding: .8rem .2rem 0 .2rem;
	}
	.rechargeConfrim-content ul{
		color: #666;
	}
	.rechargeConfrim-content .img-warp{
		height: 3rem;
		margin-top: .2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.rechargeConfrim-content .img-warp img{
		width: 3rem;
	}
</style>