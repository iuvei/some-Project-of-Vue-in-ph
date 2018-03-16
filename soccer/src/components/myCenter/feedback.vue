<template>
<div class="invitingFriend">
	<back title="意见反馈"></back>
	<textarea v-model="suggest" placeholder="请提出您的宝贵意见，我们将第一时间给你回复"></textarea>
	<div class="imgs-warp">
		<div class="img-warp" v-for="(src,index) in imageUrl">
			<i @click="delImg(index)">x</i>
			<img :src="src"/>
		</div>
		<div class="addImg" @click="choseImg">
			<span>+</span>
			<input type="file"  name="file" accept="image/png,image/gif,image/jpeg" ref="input" @change="setImg">
		</div>
	</div>
	<a @click="updata" class="updata">提交</a>
	<p class="text-warp">客服电话：<a href='tel:0755-26918451'>0755-26918451</a></br>工作事件：每周一至周日00：00-24：00</p	>
	<p class="text-warp">客服QQ：<a href="mqqwpa://im/chat?chat_type=wpa&uin=2698803023&version=1&src_type=web">2698803023</a></br>工作事件：每周一至周日00：00-24：00</p>
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
				suggest:'',
				imageUrl:[]
			}
		},
		mounted() {

		},
		methods: {
			choseImg(){
				this.$refs.input.click();
			},
			delImg(index){
				this.imageUrl.splice(index,1)
			},
			updata(){
				if(this.suggest.length < 13){
					Toast('请输入十三个以上字符');
					return false;
				}
				if(this.suggest.length >400){
					Toast('最多输入400字符');
					return false;
				}
				 Indicator.open();
				requestOpt.reqTokenPost('feedback', getUserInfo().authToken,{
					suggest:this.suggest,
					imageUrl:this.imageUrl
				}, res => {
					Indicator.close();
					if (res.data.status) {
						Toast('提交成功');
						this.suggest="";
						this.imageUrl = [];
					}else{
						Toast(res.data.msg)
					}						
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
				
			},
			setImg(e){
				if(this.imageUrl.length >= 6){
					Toast('最多添加6张图片');
					return false;
				}
				let file = e.target.files[0];
		        let param = new FormData();
		        param.append('file',file,file.name);
		       Indicator.open();
				requestOpt.reqTokenPostImg('feedback/uploadImage', getUserInfo().authToken,param, res => {
					Indicator.close();
					if (res.data.status&&res.data.data) {
						this.imageUrl.push(res.data.data.imageUrl[0])
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
	.invitingFriend{
		padding: 1.08rem .2rem 0 .2rem;
		overflow: hidden;
	}
	.invitingFriend .updata{
		display: block;
		width: 100%;
		height: .7rem;
		line-height: .7rem;
		text-align: center;
		color: #fff;
		font-size: .3rem;
		border-radius: 1.4rem;
		margin-top: .2rem;
		margin-bottom: .3rem;
		background: #ff4800;
	}
	.invitingFriend textarea{
		width: 100%;
		height: 4rem;
		border: none;
		outline:none;
		resize:none;	
		border-bottom: 1px solid #D9D9D9;
		text-indent: .2rem;
		padding-top: .1rem;
	}
	.invitingFriend .text-warp{
		margin-bottom: .36rem;
		color: #AAAAAA;
		font-size: .22rem;
	}
	.text-warp a{
		color: #AAAAAA;
	}
	.addImg input{
		position: absolute;
		left: 99999px;
		top: 9999px;
		width: .01rem;
		height: .01rem;
	}
	.addImg{
		font-size: 1.2rem;
		line-height: 1.3rem;
		text-align: center;
		border: 1px solid #D9D9D9;
		color: #D9D9D9;
	}
	.imgs-warp{
		display: flex;
		flex-wrap: wrap;
		padding:.13rem;
		background: #fff;
	}
	.img-warp i{
		position: absolute;
		right: 0;
		top: 0;
		height: .3rem;
		width: .3rem;
		background: #ff4800;
		border-radius: 50%;
		color: #fff;
		text-align: center;
		line-height: .26rem;
		font-family: arial;
	}
	.imgs-warp img{
		height: 1.55rem;
		width: 1.55rem;
	}
	.imgs-warp>div{
		height: 1.55rem;
		width: 1.55rem;
		position: relative;
		margin-right: .2rem;
		margin-bottom: .2rem;
	}
	.imgs-warp>div:nth-child(4){
		margin-right: 0;
	}
</style>