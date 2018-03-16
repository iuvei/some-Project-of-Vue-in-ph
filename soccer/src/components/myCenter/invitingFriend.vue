<template>
<div class="invitingFriend">
	<back title="邀请好友"></back>
	<div class="invitingFriend-title">
		<p>邀请朋友：<span>{{data.count}}</span>个</p>
		<p>累计收益：{{data.banlance}}元</p>
	</div>
	<div class="qrcode-warp">
		<qr-code :text="data.shareUrl" :size="parseInt(160)" v-if="data.shareUrl"></qr-code>
	</div>
	<div class="qrcode-text">
		<p>我的邀请码</p>
		<p>{{data.code}}</p>
		<a @click="isShow">将邀请码发送给好友</a>
	</div>
	<h5 v-if="data.explain">{{data.explain[0]}}</h5>
	<ul>
		<li v-for="(item,index) in data.explain" v-if="index!=0"><span></span><p>{{item}}</p></li>
	</ul>
	<mt-popup
	  v-model="popupVisible"
	  position="bottom">
	  <slot>
	  	<div class="share-warp">
	  		<p>分享</p>
	  		<ul class="share-content">
	  			<li @click="xinlang">
	  				<img src="../../images/login_weibo.png"/>
	  				<span>新浪微博</span>
	  			</li>
	  			<li @click="weixin">
	  				<img src="../../images/login_weixin.png"/>
	  				<span>微信好友</span>
	  			</li>
	  			<li @click="weixinpy">
	  				<img src="../../images/login_weixinpy.jpg"/>
	  				<span>微信朋友圈</span>
	  			</li>
	  			<li v-clipboard="data.shareUrl" @success="handleSuccess" @error="handleError">
	  				<img src="../../images/login_fuzhi.jpg"/>
	  				<span>复制链接</span>
	  			</li>
	  			<li v-show="noCopy">{{data.shareUrl}}</li>
	  		</ul>
	  		<a @click="isShow">取消</a>
	  	</div>
	  </slot>
	</mt-popup>
 </div>
</template>

<script type="text/ecmascript-6">
import 'common/js/mshare.js'
import Vue from 'vue'
import Back from '@/components/back/back'
import VueClipboards from 'vue-clipboards';
import qrCode from 'vue-qrcode-component'
import { Indicator ,Toast} from "mint-ui";
import { getUserInfo ,requestOpt } from 'api/recommend';
	export default {
		components: {
			Back,
			qrCode
		},
		data() {
			return {
				data:"",
				popupVisible:false,
				noCopy:false,
				mshare:""
			}
		},
		mounted() {	
			Vue.use(VueClipboards);
			Indicator.open();
			requestOpt.reqTokenGet('user/inviteCode',getUserInfo().authToken,res => {
				Indicator.close();
				if(res.data.status){
					this.data = res.data.data;	
					this.mshare = new mShare({  
					    title: 'aaaaaa',  
					    url: res.data.data.shareUrl,  
					    desc: '11111',  
					    img: 'http://placehold.it/150x150'  
					});
				}
	        }, err => {
	          Toast('网络链接失败，请稍后再试')
	        })	
	        
		},
		methods: {
			xinlang(){
				let url = 'http://service.weibo.com/share/share.php?appkey=&title=嗨,我在皇冠现金网注册乐账号,我想您也会喜欢,使用我的邀请码注册:'+this.data.shareUrl+'&url='+this.data.shareUrl+'&pic=&searchPic=false&style=simple'
				window.open(url)
			},
			weixin(){
				let UA = navigator.appVersion; 
				let uc = UA.split('UCBrowser/').length > 1 ? 1 : 0; 
				let qq = UA.split('MQQBrowser/').length > 1 ? 2 : 0;  
				if(uc || qq){
					this.mshare.init(2);
				}else{
					Toast('该浏览器不支持，请点击复制链发送给好友')
				}
			},
			weixinpy(){
				let UA = navigator.appVersion; 
				let uc = UA.split('UCBrowser/').length > 1 ? 1 : 0; 
				let qq = UA.split('MQQBrowser/').length > 1 ? 2 : 0;  
				if(uc || qq){
					this.mshare.init(1);
				}else{
					Toast('该浏览器不支持，请点击复制链发送给好友')
				}
			},
			handleSuccess(){				
				Toast('复制成功,发送给好友吧')				
			},
			handleError(){
				Toast('长按下方链接发送给好友')		
				this.noCopy = true;
			},
			isShow(){
				this.popupVisible = !this.popupVisible;
			},
		}
	}
</script>

<style scoped>
	.invitingFriend{
		padding: 1rem .3rem 0 .3rem;
		background: #fff;
		min-height: 12.34rem;
	}
	#biao{
		width: 0;
		height: 0;
	}
	.share-warp{
		height: 7rem;
		width: 7.5rem;
		box-sizing: border-box;
		padding: .2rem .4rem;
	}
	.share-warp>p{
		text-align: center;
		margin-top: .1rem;
		margin-bottom: .3rem;
		font-size: .32rem;
	}
	.share-content{
		display: flex;
		flex-wrap: wrap;
	}
	.share-content li{
		margin-right: 1.5rem;
		margin-bottom: .2rem;
	}
	.share-content li:nth-child(3){
		margin-right: 0;
	}
	.share-content img{
		width: 1.2rem;
		height: 1.2rem;
	}
	.share-content span{
		display: block;
		text-align: center;
		margin-top: .1rem;
	}
	.share-warp>a{
		margin-top: .4rem;
		display: block;
		width: 100%;
		text-align: center;
		height: .8rem;
		line-height: .8rem;
		background: #D9D9D9;
		color: #9B9B9B;
	}
	.invitingFriend-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #C0C0C0;
		height: 1rem;
		color: #7E8C8D;
		font-size: .26rem;
	}
	.invitingFriend-title span{
		color: red;
	}
	.qrcode-warp{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 160px;
		padding-top: .2rem;
	}
	.qrcode-text{
		text-align: center;
		font-size: .3rem;
		margin-top: .2rem;
		line-height: .6rem;
		padding-bottom: .2rem;
		font-weight: bold;
	}
	.qrcode-text a{
		font-weight: normal;
		display: inline-block;
		margin-top: .1rem;
		height: .8rem;
		line-height: .8rem;
		background: #ff4800;
		color: #fff;
		padding: 0 .8rem;
		border-radius: 1.2rem;
	}
	.invitingFriend>h5{
		padding-left: .46rem;
		background: url(../../images/jiangli.jpg) no-repeat left center;
		background-size: contain;
		height: .36rem;
		line-height: .36rem;
		font-size: .24rem;
		margin-top: .16rem;
		margin-bottom: .16rem;
	}
	.invitingFriend>ul li{
		display: flex;		
		margin-bottom: .1rem;
		color: #7E8C8D;
	}
	.invitingFriend>ul li span{
		height: .26rem;
		width: .08rem;
		margin-top: .05rem;
		background: #ff4800;
		margin-right: .16rem;
		flex-shrink: 0;
		
	}
</style>