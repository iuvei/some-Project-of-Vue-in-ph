<template>
<div class="setting">
	<back :title="title"></back>
	<ul v-if="isLogin">
		<router-link tag="li" to="/bindAccount" >账户绑定</router-link>
		<router-link tag="li" to="/modifyPassword" >修改登陆密码</router-link>
		<li @click="modifyTransactionPassword">修改交易密码</li>
	</ul>
	<ul>
		<li @click="appStroe">给我们评分</li>
		<li @click="isShow">分享给好友</li>
		<router-link tag="li" to="/disclaimer" >免责声明</router-link>
		<router-link tag="li" to="/agreement" >用户服务协议</router-link>
		<router-link tag="li" to="/aboutApp" >关于皇冠现金网</router-link>
	</ul>
	<a class="log-out" v-if="isLogin" @click="logOut">退出登陆</a>
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
	  			<li v-clipboard="shareUrl" @success="handleSuccess" @error="handleError">
	  				<img src="../../images/login_fuzhi.jpg"/>
	  				<span>复制链接</span>
	  			</li>
	  			<li v-show="noCopy">{{shareUrl}}</li>
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
	import VueClipboards from 'vue-clipboards';
	import Back from '@/components/back/back'
	import { Indicator,Toast } from "mint-ui";
	import { getUserInfo ,setUserInfo} from 'api/recommend';
	export default {
		
		components: {
			Back
		},
		data() {
			return {
				title:"设置",
				isLogin: false,
				userInfo:"",
				popupVisible:false,
				mshare:"",
				noCopy:false,
				shareUrl:'http://13.125.24.135/#/home'
			}
		},
		computed: {

		},
		mounted() {
			Vue.use(VueClipboards);
			this.isLogin = getUserInfo() ? true : false;
			this.userInfo = getUserInfo();
			this.mshare = new mShare({  
			    title: 'aaaaaa',  
			    url: this.shareUrl,  
			    desc: '11111',  
			    img: 'http://placehold.it/150x150'  
			});
		},
		methods: {
			logOut(){
				setUserInfo(null);
				window.isQiandao = false; 
				this.$router.push('/myCenter');
//				location.reload();
			},
			appStroe(){
				let u = navigator.userAgent, app = navigator.appVersion;
				let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
				let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
				if(isiOS){
					window.open('https://itunes.apple.com/cn/app/%E5%AE%9E%E6%98%AF%E7%90%83%E4%BA%8B/id1151751939?mt=8')
				}else{
					window.open('market://details?id=com.dading.ssqs')
				}
			},
			modifyTransactionPassword(){
				if(this.userInfo.isBindCard){
					this.$router.push('/modifyTransactionPassword');
				}else if(this.userInfo.userType === 3){
		          Toast("试玩账号不能修改交易密码")
		        }else{
					this.$router.push('/bindCard');
				}
			},
			xinlang(){
				let url = 'http://service.weibo.com/share/share.php?appkey=&title=嗨,我在皇冠现金网注册乐账号,我想您也会喜欢,使用我的邀请码注册:'+this.shareUrl+'&url='+this.shareUrl+'&pic=&searchPic=false&style=simple'
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
	.setting{
		padding-top: 1.3rem;

	}
	.setting>ul{
		margin-bottom: .3rem;
	}
	.setting>ul,.log-out{
		background-color: #fff;
	}
	.setting>ul li{
		height: 1rem;
		line-height: 1rem;
		padding-left: .2rem;
		border-bottom: 1px solid #ededf3;
		cursor: pointer;
		background: url(../../images/more_right.png) no-repeat right .4rem center;
		background-size: .1rem .18rem;
	}
	.log-out{
		display: block;
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		cursor: pointer;
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
</style>