<template>
<div class="setAutograph">
	<back title="签名" btn="保存" @backRight="backRight"></back>
	<div class="setAutograph-input">
		<textarea type="text"  v-model="text" autofocus="autofocus" placeholder="请输入您的个人签名（100字以内）"/>
	</div>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { Indicator ,Toast} from "mint-ui";
import { getUserInfo ,requestOpt } from 'api/recommend';
	export default {
		components: {
			Back
		},
		data() {
			return {
				text:''
			}
		},
		methods: {
			backRight(){
				if(this.text == ''){
					Toast('请输入个人签名')
					return false
				}
				Indicator.open();
				requestOpt.reqTokenPost('user', getUserInfo().authToken,{
					signature:this.text
				}, res => {
					Indicator.close();
					if (res.data.status) {
						this.$router.back();
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			},
		}
	}
</script>

<style scoped>
	.setAutograph{
		padding-top:.88rem;
	}
	.setAutograph-input{
		height: 3rem;
		background: #fff;
		display: flex;
		padding-left: .2rem;
		
	}
	.setAutograph-input textarea{
		margin-top: .2rem;
		border: none;
		outline:none;
		resize:none;
		width: 100%;
	}
</style>