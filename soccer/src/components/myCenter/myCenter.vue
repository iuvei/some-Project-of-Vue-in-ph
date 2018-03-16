<template>
<div class="myCenter">
	<div class="myCenter-login-warp" >
		<div class="myCenter-login-yes" v-if="isLogin" >
			<router-link tag="div" to="/myInfo" class="icon-info"></router-link>
			<div class="myCenter-login-content" >
				<div class="myCenter-login-content-left" @click="loginHeard">
					<div class="touxiang"  v-if="userInfo.avatar">
						<img  :src="userInfo.avatar" />
					</div>
					<img class="touxiang-no" src="../../images/user_no.png" v-if="!userInfo.avatar"/>
				</div>
				<div class="myCenter-login-content-right">
					<p class="name" :class="{nan:userInfo.sex == 1 ,nv:userInfo.sex == 2 , chai: userInfo.sex == 3}">{{userInfo.username}}</p>
					<p class="text">会员号:<span>{{userInfo.id}}</span></p>
					<p class="text signature">{{userInfo.signature}}</p>
					<p class="money" >
						<span>{{userInfo.banlance}}</span>
						<i @click="shuaxin" :class="{animate : isAnimate}"></i>
					</p>
				</div>
			</div>
		</div>
		<div class="myCenter-login-no" v-if="!isLogin" @click="loginHeard">
			<div class="icon-info"></div>
			<div class="myCenter-login-pic">
				<img src="../../images/user_no.png" />
				<p>登陆/注册</p>
			</div>
		</div>
		<div class="use-money">
			<div @click="recharge">
				<img src="../../images/recharge.png"/>
				<p>充值</p>
			</div>
			<div @click="takeMoney">
				<img src="../../images/withdrawals.png"/>
				<p>提现</p>
			</div>
			<div @click="freeMoney">
				<img src="../../images/free_gold.png"/>
				<p>免费领币</p>
			</div>
		</div>
	</div>

	<ul class="operation-list">
		<li @click="linkTo('moneyDetailed')">
			<img src="../../images/zhanghu.png"/>
			<p>账户明细</p>
		</li>
		<li @click="linkTo('noteRecord')">
			<img src="../../images/record.png"/>
			<p>投注记录</p>
		</li>
		<li @click="linkTo('rechargeRecord')">
			<img src="../../images/recharge_r.png"/>
			<p>充值记录</p>
		</li>
		<li @click="linkTo('presentRecord')">
			<img src="../../images/account.png"/>
			<p>提款记录</p>
		</li>								
	</ul>
	<ul class="operation-list">
		<li @click="linkTo('agency')">
			<img src="../../images/daili.png"/>
			<p>代理中心</p>
		</li>
		<li @click="linkTo('invitingFriend')">
			<img src="../../images/invitation_gold.png"/>
			<p>邀请好友</p>
		</li>
		<li @click="linkTo('invitingAwards')">
			<img src="../../images/invitation.png"/>
			<p>邀请领奖</p>
		</li>
	</ul>
	<ul class="operation-list">
		<router-link tag="li" to="/setting">
			<img src="../../images/login-set.png"/>
			<p>更多设置</p>
		</router-link>
		<li @click="linkTo('feedback')">
			<img src="../../images/opinion.png"/>
			<p>意见反馈</p>
		</li>
	</ul>
	<qiandao></qiandao>
 	<tab></tab>
 </div>
</template>

<script type="text/ecmascript-6">
import Tab from '@/components/tab/tab'
import Qiandao from '@/components/myCenter/qiandao'
import { Toast } from "mint-ui";
import { getUserInfo ,requestOpt,setUserInfo} from 'api/recommend';
	export default {
		components: {
			Tab,
			Qiandao
		},
		data() {
			return {
				isLogin: false,
				userInfo : "",
				isAnimate:false
			}
		},
		computed: {

		},
		mounted() {
			this.isLogin = getUserInfo() ? true : false;
			this.userInfo = getUserInfo();
			if(this.isLogin){
				this.getInfo();
			}
		},
		methods: {
			shuaxin(){
				this.isAnimate = true;
				setTimeout(()=>{
					this.isAnimate = false;
				},1000)
				this.getInfo(true);
			},
			getInfo(flag){
				requestOpt.reqTokenGet('user/getUser',getUserInfo().authToken,res => {
					if(res.data.status){
						setUserInfo(res.data.data);
						this.userInfo = res.data.data;
						if(flag){
							Toast('刷新成功')
						}
					}
					if(res.data.code == 403){
						this.userInfo = {};
						this.isLogin = false;
					}		         	
		        }, err => {
		          Toast('网络链接失败，请稍后再试')
		        })	
			},
			loginHeard(){
				if (!this.isLogin) {
		          this.$router.push('/login');
		        } else {
		          this.$router.push('/myData');
		        }
			},
			linkTo(id){
				if (!this.isLogin) {
		          this.$router.push('/login');
		        } else if( (id=='rechargeRecord' || id=='presentRecord') && this.userInfo.userType === 3){
		        	 Toast("试玩账号不能进行此操作")
		        } else {
		          this.$router.push('/'+id);
		        }
			},
			recharge(){
				if (!this.isLogin) {
		          this.$router.push('/login');
		        } else if(this.userInfo.userType === 3){
		          Toast("试玩账号不能充值")
		        }else{
		        	this.$router.push('/recharge');
		        }
			},
			takeMoney(){
				if (!this.isLogin) {
		          this.$router.push('/login');
		        } else if(this.userInfo.userType === 3){
		          Toast("试玩账号不能提现")
		        }else{
		        	if(this.userInfo.isBindCard){
		        		this.$router.push('/takeMoney');
		        	}else{
		        		this.$router.push('/bindCard');
		        	}
		        	
		        }
			},
			freeMoney(){
				if (!this.isLogin) {
		          this.$router.push('/login');
		        } else{
		        	this.$router.push('/freeMoney');
		        }
			}
		}
	}
</script>

<style scoped>
	.myCenter{
		padding-top: 4.8rem;
		padding-bottom: 1rem;
	}
	.myCenter-login-warp{
		height: 4.5rem;
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
	}
	.myCenter-login-yes,.myCenter-login-no{
		height: 3.2rem;
		background: url(../../images/login_bg.png) no-repeat center;
		background-size: 7.5rem 3.2rem;
		position: relative;
	}
	.myCenter-login-content-right .signature{
		max-width: 5rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.myCenter-login-no{
		display: flex;
		justify-content: center;
	}
	.myCenter-login-pic{
		margin-top: .34rem;
	}
	.myCenter-login-pic>img{
		width: 1.38rem;
	}
	.myCenter-login-pic>p{
		margin-top: .15rem;
		text-align: center;
		color: #fff;
		font-size: .26rem;
		letter-spacing:.03rem;
	}
	.icon-info{
		position: absolute;
		right: .52rem;
		top: .32rem;
		width: .44rem;
		height: .48rem;
		background: url(../../images/information.png) center no-repeat;
	    background-size: contain;	    
	}
	.myCenter-login{		
		display: flex;
		background: #fff;
		justify-content:flex-start;
		cursor: pointer;
	}
	.myCenter-login-content{
		display: flex;
	}
	.myCenter-login-content-left{
		position: relative;
		width: 1.5rem;
		margin: .54rem .3rem 0 .3rem;
	}
	.myCenter-login-content-left .touxiang{
		width: 1.5rem;
		height: 1.5rem;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		border: 1px solid #fff;		
	}
	.myCenter-login-content-left .touxiang img{
		width: 1.3rem;
		border-radius: 50%;
	}
	.myCenter-login-content-left .touxiang-no{
		width: 1.5rem;
	}
	.myCenter-login-content-right .name{
		margin-top: .5rem;
		margin-bottom: .1rem;
		color: #fff;
		font-weight: bold;
		font-size: .26rem;
		padding-right: .4rem;
		display: inline-block;
	}
	.myCenter-login-content-right .name.nan{
		background: url(../../images/l_nan.png) no-repeat right center;
		background-size: .3rem .3rem;
	}
	.myCenter-login-content-right .name.nv{
		background: url(../../images/l_nv.png) no-repeat right center;
		background-size: .3rem .3rem;
	}
	.myCenter-login-content-right .name.chai{
		background: url(../../images/l_cai.png) no-repeat right center;
		background-size: .3rem .3rem;
	}
	.myCenter-login-content-right .text{
		color: rgba(255,255,255,.7);
		font-size: .22rem;
	}
	.myCenter-login-content-right .text span{
		margin-left: .16rem;
	}
	.myCenter-login-content-right .money{
		margin-top: .16rem;
		padding-left: .42rem;
		background: url(../../images/login_money.png) no-repeat left center;
		background-size: .36rem .36rem;
		color: #fff;
		display: flex;
		align-items: center;
		color: #ffff00;
		font-size: .28rem;
	}
	.myCenter-login-content-right .money i{
		height: .36rem;
		width: .36rem;
		background: url(../../images/money-shuaxin.png) no-repeat center;
		background-size: .36rem;
		margin-left: .3rem;		
	}
	.myCenter-login-content-right .money i.animate{
		transition: all 1s;
		transform:rotate(360deg);
	}
	.bg-more{
		background: url(../../images/more_right.png) no-repeat right .4rem center;
		background-size: .1rem .18rem;
	}
	.use-money{
		display: flex;
		justify-content: space-around;
		background: #fff;
		height: 1.06rem;
		padding-bottom: .24rem;
	}
	.use-money>div{
		display: flex;
		align-items: center;
		font-size: .32rem;
		cursor: pointer;
		color: #666666;
	}
	.use-money>div img{
		width: .68rem;
		height: .5rem;
		margin-right: .16rem;
	}


	.operation-list{
		background: #fff;
		font-size: .32rem;
		color: #666666;
		margin-bottom: .3rem;
	}
	.operation-list li{
		height: .85rem;
		display: flex;
		align-items: center;
		
		cursor: pointer;
		background: url(../../images/more_right.png) no-repeat right .4rem center;
		background-size: .1rem .18rem;
	}
	.operation-list li img{
		width: .4rem;
		margin-left: .32rem;
		margin-right: .26rem;
		flex-shrink: 0;
	}
	.operation-list li p{
		height: 100%;
		box-sizing: border-box;
		line-height: .84rem;
		width: 6.52rem;
		border-bottom: 1px solid #ededf3;
	}
</style>