<template>
<div class="setName">
	<back title="昵称" btn="保存" @backRight="backRight"></back>
	<div class="setName-input">
		<input type="text"  v-model="text" autofocus="autofocus" placeholder="昵称只能修改一次" maxlength="20"/>
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
					Toast('请输入名称')
					return false
				}
				Indicator.open();
				requestOpt.reqTokenPost('user', getUserInfo().authToken,{
					username:this.text
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
	.setName{
		padding-top:.88rem;
	}
	.setName-input{
		height: 3rem;
		background: #fff;
		display: flex;
		padding-left: .2rem;
		align-items: center;
	}
	.setName-input input{
		border: none;
	}
</style>