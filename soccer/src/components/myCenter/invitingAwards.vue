<template>
<div class="invitingFriend">
	<back title="输入邀请码领现金"></back>
	<div class="invitingFriend-content">
		<div class="invitingFriend-input">
			<input type="text" v-model="num" :placeholder="data"/>
			<p>*邀请码区分大小写</p>
			<a @click="sureBtn">马上验证</a>
		</div>
	</div>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import {Indicator ,Toast} from "mint-ui";
import {requestOpt,getUserInfo } from 'api/recommend';
	export default {
		components: {
			Back
		},
		data() {
			return {
				num:'',
				data:''
			}
		},
		mounted() {
			Indicator.open();
			requestOpt.reqTokenGet('user/come/invite',getUserInfo().authToken,res => {
				Indicator.close();
				this.data = `输入邀请码即可领取${res.data.data}元`;
	        }, err => {
	          Toast('网络链接失败，请稍后再试')
	        })	
		},
		methods: {
			sureBtn(){
				if(this.num.length !== 12){
					Toast('请输入正确的12位邀请码');
					return false;
				}
				Indicator.open();
				let url = `user/invite/${this.num}`
				requestOpt.reqTokenGet(url,getUserInfo().authToken,res => {
					Indicator.close();
					if(res.data.status){
						Toast('邀请成功');
						this.num = ""
					}else{
						Toast(res.data.msg)
					}
		        }, err => {
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>
	.invitingFriend{
		margin-top: .88rem;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: url(../../images/yaoqign_bg.png);
		background-size: cover;
	}
	.invitingFriend-content{
		height: 6.34rem;
		width: 6.5rem;
		margin-left: .5rem;
		margin-top: 1.76rem;
		background-size:cover;
		display: flex;
		justify-content: center; 
		background: url(../../images/yaoqing_xinfeng.png) no-repeat;
		background-size: 6.5rem 6.34rem;
	}
	.invitingFriend-input{
		margin-top: .4rem;
	}
	.invitingFriend-input input::-webkit-input-placeholder {
        color: #dfb96e;
        font-size: .34rem;
     }
	.invitingFriend-input input{
		border: 1px solid #bb9f68;
		height: 1rem;
		width: 4.8rem;
		border-radius: .06rem;
		text-indent: .2rem;
		background: #e6cfa1;
		 font-size: .34rem;
	}
	.invitingFriend-input p{
		margin-top: .16rem;
		padding-left: .1rem;
		margin-bottom: .3rem;
		color: #85672a;
	}
	.invitingFriend-input a{
		display: block;
		text-align: center;
		margin: 2rem auto;
		width: 4.58rem;
		height: .84rem;
		line-height: .84rem;
		color: #fff;
		font-size: .36rem;
		background: url(../../images/yaoqing_btn.png) no-repeat;
		background-size: contain;
	}
</style>