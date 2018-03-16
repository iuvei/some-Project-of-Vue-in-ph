<template>
	<div class="home">
		<div class="home-heard">
			<router-link to="/login" class="icon-setting" v-if="!isLogin">登陆</router-link>
			<div class="icon-setting" v-if="isLogin">{{info.username}}</div>
			<div>竞猜</div>
			<router-link tag="div" to="/register" class="btn" v-if="!isLogin">注册</router-link>
			<router-link tag="div" to="/recharge" class="btn" v-if="isLogin">充值</router-link>
		</div>
		<mt-loadmore :top-method="loadTop" ref="loadmore">
		 	<mt-swipe :auto="5000">
			  <mt-swipe-item v-for="item in adverts" :key="item.id" >
			  	<img @click="linkTo(item.forwardName,item.funsactionName)" :src="item.imageUrl"/>
			  <!--	<p @click="linkTo(item.forwardName,item.funsactionName)" class="swipe-bottom">{{item.name}}</p>-->
			  </mt-swipe-item>
			</mt-swipe>
			<ul class="nav-list">
				<router-link tag="li" to="/guessball/roll-football-duying">
					<img src="../../images/football.png"/>
					<p>足球</p>
				</router-link>
				<router-link tag="li" to="/guessball/roll-basketball-duying">
					<img src="../../images/basketball.png"/>
					<p>篮球</p>
				</router-link>
				<router-link tag="li" to="/casino" style="position: relative;top: -.06rem;">
					<img style="height: .91rem;" src="../../images/entertainment.png"/>
					<p>娱乐场</p>
				</router-link>
				<router-link tag="li" to="/help">
					<img src="../../images/help.png"/>
					<p>新手帮助</p>
				</router-link>
				<router-link tag="li" to="/service"> 
					<img src="../../images/service.png"/>
					<p>在线客服</p>
				</router-link>
			</ul>
			<div class="winning-info-warp" v-if="message.length">
				<ul class="winning-info" >
					<li v-for="ms in message"><span>{{ms.typeName}}</span>{{ms.content}}</li>
					<li v-if="message.length"><span>{{message[0].typeName}}</span>{{message[0].content}}</li>
				</ul>
			</div>
			<div class="hot-warp" v-if="basketBalls.length>0" @click="goMatch('/guessball/roll-basketball-duying')">
				<div class="hot-heard">
					<p class="bg-basketball">篮球热门</p>
					<p class="bg-more">更多</p>
				</div>
				<div class="hot-content"  v-for="item in basketBalls">
					<div class="hot-item" :key="item.id">
						<div class="hot-item-title">
							<p>
								<span class="title-name">{{item.leagueName}}</span>
								<span class="title-time">{{item.openTime | formData}}</span>
							</p>
							<div>
								<span class="btn-red">猜球</span>
								<!--<span class="btn-blue">解盘</span>-->
							</div>
						</div>
						<div class="hot-item-text">
							<div class="hot-item-team">
								<img :src="item.hImageUrl" v-if="item.hImageUrl"/>
								<img src="../../images/nohave.png"  v-else/>						
								<p>{{item.home}}</p>
							</div>
							<div class="item-data" >
								<p class="vs">VS</p>
								<p class="odds"  v-if="item.payRate">{{item.payRate.realRate1}}<span>{{item.payRate.realRate2}}</span>{{item.payRate.realRate3}}</p>
								<a>共{{item.num}}种玩法</a>
							</div>
							<div class="hot-item-team">
								<img src="../../images/nohave.png"/>
								<p>{{item.away}}</p>
							</div>
						</div>
					</div>
				</div>			
			</div>
			<div class="hot-warp" v-if="matchs.length>0" @click="goMatch('/guessball/roll-football-duying')">
				<div class="hot-heard">
					<p class="bg-football">足球热门</p>
					<p class="bg-more">更多</p>
				</div>
				<div class="hot-content" v-for="item in matchs">
					<div class="hot-item" :key="item.id">
						<div class="hot-item-title">
							<p>
								<span class="title-name">{{item.leagueName}}</span>
								<span class="title-time">{{item.openTime | formData}}</span>
							</p>
							<div>
								<span class="btn-red">猜球</span>
								<!--<span class="btn-blue">解盘</span>-->
							</div>
						</div>
						<div class="hot-item-text">
							<div class="hot-item-team">
								<img :src="item.hImageUrl" v-if="item.hImageUrl" :onerror="orrImg"/>
								<img src="../../images/nohave.png"  v-else/>						
								<p>{{item.home}}</p>
							</div>
							<div class="item-data">
								<p class="vs">VS</p>
								<p class="odds"  v-if="item.payRate">{{item.payRate.realRate1}}<span>{{item.payRate.realRate2}}</span>{{item.payRate.realRate3}}</p>
								<a>共{{item.num}}种玩法</a>
							</div>
							<div class="hot-item-team">
								<img :src="item.aImageUrl" v-if="item.aImageUrl" :onerror="orrImg"/>
								<img src="../../images/nohave.png"  v-else/>
								<p>{{item.away}}</p>
							</div>
						</div>
					</div>
				</div>			
			</div>
			<router-link tag="div" to="/sysMessage" v-if="sysMessge.length" class="hot-warp">
				<div class="hot-heard">
					<p class="bg-paihangbang">中奖榜单</p>
					<p class="bg-more">更多</p>
				</div>
				<div class="ranking-warp">
					<ul class="ranking-list" ref="rankingList">
						<li v-for='item in sysMessge'>
							<div>
								<p>{{item.userName}}</p>
								<p>{{item.matchName}}</p>
							</div>
							<span>赢得{{item.amount}}元</span>
						</li>
					</ul>
				</div>		
			</router-link>
		</mt-loadmore>		
		<tab></tab>
	</div>
</template>

<script>
	import Tab from '@/components/tab/tab'
	import {requestOpt,getUserInfo} from 'api/recommend'
	import { Toast } from "mint-ui";
	export default {
		components: {
			Tab
		},
		data() {
			return {
				adverts:[],
				basketBalls:[],
				matchs:[],
				message:[],
				sysMessge:[],
				orders:[],
				isLogin: getUserInfo() ? true : false,
				info:getUserInfo(),
				orrImg:'this.src="' + require('../../images/image_not_white.png') + '"'
			}
		},
		computed: {

		},
		activated(){
			this.isLogin = getUserInfo() ? true : false;
			this.info = getUserInfo();			
		},
		mounted() { 
			this.getData();
		},
		methods: {
			linkTo(forwardName,funsactionName){
				
                if ("篮球比分" == funsactionName && "即时" == forwardName) {
					this.$router.push('/scoreBall');
                } else if ("篮球比分" == funsactionName && "赛果" == forwardName) {
					this.$router.push('/scoreBall')
                } else if ("篮球比分" == funsactionName && "赛程" == forwardName) {
					this.$router.push('/scoreBall')
                } else if ("篮球比分" == funsactionName && "关注" == forwardName) {
					this.$router.push('/scoreBall')
                } else if ("篮球猜球" == funsactionName && "滚球" == forwardName) {
					this.$router.push('/guessBasketBall-duying')
                } else if ("篮球猜球" == funsactionName && "今日赛事" == forwardName) {
					this.$router.push('/guessTodayFootBall-duying')
                } else if ("篮球猜球" == funsactionName && "早盘" == forwardName) {
					this.$router.push('/guessMorningFootBall-duying')
                } else if ("足球比分" == funsactionName && "即时" == forwardName) {
					this.$router.push('/score')
                } else if ("足球比分" == funsactionName && "赛果" == forwardName) {
					this.$router.push('/score')
                } else if ("足球比分" == funsactionName && "赛程" == forwardName) {
					this.$router.push('/score')
                } else if ("足球比分" == funsactionName && "关注" == forwardName) {
					this.$router.push('/score')
                } else if ("足球猜球" == funsactionName && "滚球" == forwardName) {
					this.$router.push('/guessFootBall-duying')
                } else if ("足球猜球" == funsactionName && "今日赛事" == forwardName) {
					this.$router.push('/guessTodayFootBall-duying')
                } else if ("足球猜球" == funsactionName && "早盘" == forwardName) {
					this.$router.push('/guessMorningFootBall-duying')
                } else if ("娱乐活动" == funsactionName || "优惠活动" == funsactionName) {
					this.$router.push('/discount')
                } else if ("账户明细" == funsactionName) {
                	if (!this.isLogin) {
			          this.$router.push('/login');
			        }else{
			        	this.$router.push('/moneyDetailed');
			        }
                } else if ("投注记录" == funsactionName) {
					if (!this.isLogin) {
			          this.$router.push('/login');
			        }else{
			        	this.$router.push('/noteRecord');
			        }
                } else if ("充值记录" == funsactionName) {
					if (!this.isLogin) {
			          this.$router.push('/login');
			        } else if(getUserInfo().userType === 3){
			          Toast("试玩账号不能进入")
			        }else{
			        	this.$router.push('/rechargeRecord');
			        }
                } else if ("提款记录" == funsactionName) {
					if (!this.isLogin) {
			          this.$router.push('/login');
			        } else if(getUserInfo().userType === 3){
			          Toast("试玩账号不能进入")
			        }else{
			        	this.$router.push('/presentRecord');
			        }
                } else if ("代理中心" == funsactionName) {
					this.$router.push('/agency')
                } else if ("设置中心" == funsactionName) {
					this.$router.push('/setting')
                } else if ("意见反馈" == funsactionName) {
					this.$router.push('/feedback')
                } else if ("消息中心" == funsactionName) {
					this.$router.push('/myInfo')
                } else if ("新手帮助" == funsactionName) {
					this.$router.push('/help')
                } else if ("在线客服" == funsactionName) {
					this.$router.push('/help')
                } else if ("领币" == funsactionName) {
					this.$router.push('/freeMoney')
                } else if ("充值" == funsactionName) {
					if (!this.isLogin) {
			          this.$router.push('/login');
			        } else if(getUserInfo().userType === 3){
			           Toast("试玩账号不能进入")
			        }else{
			        	this.$router.push('/recharge');
			        }
                } else if ("提现" == funsactionName) {
					if (!this.isLogin) {
			          this.$router.push('/login');
			        } else if(getUserInfo().userType === 3){
			           Toast("试玩账号不能进入")
			        }else{
			        	this.$router.push('/takeMoney');
			        }
                }
                     
                            
                        
			},
			goMatch(str){
				 this.$router.push(str);
			},
			loadTop() {
				this.getData();			
			},
			getData(){
				requestOpt.reqGet('home', res => {
		         if(res.data.status){
		         	 let data = res.data.data;
			          this.adverts = data.adverts;
			          this.matchs = data.matchs;
			          this.sysMessge = data.orders.sysMessge;
			          this.basketBalls = data.basketBalls;
			          this.message = data.message;
			          this.$refs.loadmore.onTopLoaded();
		         }
		        }, err => {
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>
.home{
	padding-top: .88rem;
	padding-bottom: 1rem;
}
.home-heard{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	height: .88rem;
	width: 6.9rem;
	padding: 0 .3rem;
	align-items:center;
	justify-content: center;
	font-size: .36rem;
	background-color: #24a8de;
	color: #fff;
	z-index: 9999;
}
.home-heard div{
	white-space:nowrap; 
}
.home-heard .btn{
	position: absolute;
	right: .2rem;
	font-size: .26rem;
    top: .28rem;
}
.icon-setting{
	font-size: .26rem;
	position: absolute;
	left: .2rem;
	top: .28rem;
	color: #fff;
}
.home .mint-swipe {
    height: 3rem;
    font-size: 30px;
    text-align: center;
}
.home .mint-swipe-item img{
	width: 100%;
}
.swipe-bottom{
	position: absolute;
	width: 100%;
	left: 0;
	bottom: 0;
	height: .42rem;
	background: rgba(0,0,0,.6);
	color: #d5d4d7;
	font-size: .24rem;
	text-align: left;
	line-height: .48rem;
	text-indent: .2rem;
}
.nav-list{
	display: flex;
	flex-wrap: nowrap;
	font-size: .24rem;
	text-align: center;
	background: #fff;
	padding-top: .24rem;
	padding-bottom: .24rem;
}
.nav-list li{
	width: 20%;
	color: #2e2e2e;
}
.nav-list li img{
	width: 1.04rem;
	height: .85rem;
}
.winning-info-warp{
	padding-left: .66rem;
	height: .72rem;
	background:url(../../images/tongzhi.png) no-repeat left .2rem center #fff;
	background-size: .3rem .3rem;
	overflow: hidden;
}
.winning-info li{
	line-height: .72rem;
	color: #5c5c5c;
	max-width: 6rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.winning-info li span{
	color: #f07c65;
}
.hot-warp{
	margin-top: .2rem;
	background: #fff;
}
.hot-heard{
	height: .8rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #515151;
}
.hot-heard .bg-more{
	padding-right: .3rem;
	background: url(../../images/more_right.png) no-repeat right .15rem center;
	background-size: .1rem .18rem;
}
.hot-heard .bg-football,.hot-heard .bg-basketball,.bg-paihangbang{
	font-size: .3rem;
	padding-left: .64rem;
}
.hot-heard .bg-basketball{	
	background: url(../../images/bg-basketball.png) no-repeat left .18rem center;
	background-size: .34rem .34rem;
}
.hot-heard .bg-football{
	background: url(../../images/bg-football.png) no-repeat left .18rem center;
	background-size: .34rem .34rem;
}
.hot-heard .bg-paihangbang{
	background: url(../../images/paihangbang.png) no-repeat left .18rem center;
	background-size: .34rem .34rem;
}
.hot-item{
	height: 2.86rem;
	border-top: 1px solid #efeff5;
}
.hot-item-title{
	height: .64rem;
	padding: 0 .2rem;
	margin-bottom: .24rem;
	display: flex;
	justify-content: space-between;
	align-items: center;	
}
.hot-item-title .title-name{
	color: #7fd998;
	font-size: .26rem;
}
.hot-item-title .title-time{
	color: #8d8d8d;
	text-align: center;
}
.hot-item-title span{
	padding:.06rem .08rem;
	border-radius: .04rem;
	color: #fff;
	font-size: .16rem;
}
.hot-item-title .btn-red{
	background-color: #fb9194;
}
.hot-item-title .btn-blue{
	background-color: #96b6fb;
}
.hot-item-text{
	display: flex;
	justify-content: space-around;
	text-align: center;
}
.hot-item-team{
	width: 2.5rem;
}
.hot-item-team img{
	max-width: .8rem;
}
.hot-item-team p{
	margin-top: .3rem;
	color: #1e1e1e;
	font-size: .3rem;
}
.item-data .vs{
	color: #ff5f53;
	font-size: .3rem;
}
.item-data .odds{
	color: #b3b3b3;
	margin: .24rem 0 .16rem 0;
}
.item-data .odds span{
	color: #505050;
	margin: 0 .1rem;
}
.item-data a{
	padding:.06rem .09rem;
	border: 1px solid #1f76ff;
	color: #1f76ff;
	border-radius: .06rem;
}
.ranking-warp{
	height: 6rem;
	overflow: hidden;
}
.ranking-list li{
	padding-left: .7rem;
	padding-right: .6rem;
	height: 1.2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid #efeff5;
	background: url(../../images/jiangpai.png) no-repeat .2rem center;
	background-size: .36rem .42rem;
}

.ranking-list li>div p:last-child{
	color: #666666;
}
.ranking-list li>span{
	color: red;
}
.ranking-list li img{
	width: .78rem;
	height: .78rem;
	border-radius: 50%;
	margin: 0 .2rem;
}
.ranking-list{
        
        animation: zhongjiang 15s infinite linear;
        
 }
.winning-info{
	 animation: winning 18s infinite linear;
}
@keyframes winning {
    0%{
        transform: translateY(0%);
    }

    100%{
        transform: translateY(-91%);
    }
}
@keyframes zhongjiang {
    0%{
        transform: translateY(0%);
    }

    100%{
        transform: translateY(-50%);
    }
}
</style>