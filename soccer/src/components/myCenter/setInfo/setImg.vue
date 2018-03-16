<template>
<div class="setName">
	<back title="头像"></back>
	<div class="setImg-warp" @click="choseImg">
		<img :src="src" v-if="src"/>
		<img src="../../../images/user_no.png" v-if="!src"/>
		<p>点击图片更改头像</p>
		<input type="file"  name="file" accept="image/png,image/gif,image/jpeg" ref="input" @change="setImg">
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
				src:''
			}
		},
		mounted() {
			this.src = this.$route.query.src;
		},
		methods: {
			choseImg(){
				this.$refs.input.click();
			},
			setImg(e){
				let file = e.target.files[0];
		        let param = new FormData();
		        param.append('file',file,file.name);
		       Indicator.open();
				requestOpt.reqTokenPostImg('user/image', getUserInfo().authToken,param, res => {
					Indicator.close();
					if (res.data.status&&res.data.data) {
						this.src = res.data.data;
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
	.setName{
		min-height: 10rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.setName input{
		width: .01rem;
		height: .01rem;
	}
	.setImg-warp{
		width: 2.5rem;
		height:3rem;
	}
	.setImg-warp img{
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
	}
	.setImg-warp p{
		color: #848484;
		margin-top: .1rem;
		text-align: center;
	}
</style>