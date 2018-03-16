<template>
	<div class="score">
		<div class="score-heard">
			<div class="score-heard-left"></div>
			<div class="score-heard-tab">
				<a class="active">足球</a>
				<router-link tag="a"  to="/scoreBall">篮球</router-link>
			</div>
			<div class="score-heard-right">
				<span class="screen-icon" @click="toScoreFilters" v-if="scoreIndex != 5"></span>
			</div>
		</div>
		<ul class="score-content-tab">
			<li :class="{ active: 2 == scoreIndex}" @click="toggleTab('2')">即时</li>
			<li :class="{ active: 3 == scoreIndex}" @click="toggleTab('3')">赛果</li>
			<li :class="{ active: 4 == scoreIndex}" @click="toggleTab('4')">赛程</li>
			<li :class="{ active: 5 == scoreIndex}" @click="toggleTab('5')">关注</li>
		</ul>
		<div class="score-content">
			<mt-loadmore :top-method="loadTop" ref="loadmore" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false">
				<mt-tab-container v-model="scoreIndex" ref="tab" swipeable>
					<mt-tab-container-item id="2">
						<div class="score-item-warp">
							<div v-if="match2.items" >
								<div v-for="item in match2.items" class="score-list">
									<div class="score-star" :class="{active : item.isFouce}" @click="star(item)"></div>
									<div class="score-text"  @click="linkTo(item)">
										<p class="score-text-top">
											<span class="score-league-match" :style="{color : color[parseInt(10*Math.random())]}">{{item.leagueName}}</span>											
											<span class="score-top-line">({{item.hHalfScore}}-{{item.aHalfScore}})</span>
											<span class="score-state" v-if="item.isOver">{{item.isOver | isOver}}</span>
											<span class="score-state" v-if="!item.isOver&&item.protime">{{item.protime}}<i></i></span>
											<span class="score-state" v-if="!item.isOver&&!item.protime">赛前</span>
											<span class="score-text-btn">猜球</span>
										</p>
										<div class="score-text-bottom">
											<div class="score-text-bottom-left">
												<span class="name">{{item.home}}</span>
												<span class="order">[{{item.hOrder || 0}}]</span>
												<span class="huangpai" v-if="item.hYellow">{{item.hYellow}}</span>
												<span class="hongpai" v-if="item.hRed">{{item.hRed}}</span>
											</div>
											<span class="score-bottom-line no-over">{{item.hScore}}-{{item.aScore}}</span>
											<div class="score-text-bottom-right">
												<span class="name">{{item.away}}</span>
												<span class="order">[{{item.aOrder || 0}}]</span>
												<span class="huangpai" v-if="item.aYellow">{{item.aYellow}}</span>
												<span class="hongpai" v-if="item.aYellow">{{item.aRed}}</span>
											</div>
										</div>
										<span class="score-text-time">{{item.openTime | scoreTime}}</span>
										<!--<p class="score-num">
											参与人数:{{item.joinCount}}
										</p>-->
									</div>
								</div>
								<div class="score-nodata" v-if="match2.items.length==0">
									<img src="../../images/no_data.png" />
								</div>
								<div class="score-loading" v-if="isShow">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
								<p class="nomore" v-if="match2.nomore">已经全部加载完毕</p>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<chose-date :right='false' @changeDate="changeDate3" :index='clickTimeIndex3' @showMask="showMask"></chose-date>
						<div class="score-item-warp">
							<div v-if="match3.items">
								<div v-for="item in match3.items" class="score-list">
									<div class="score-star" :class="{active : item.isFouce}" @click="star(item)"></div>
									<div class="score-text"  @click="linkTo(item)">
										<p class="score-text-top">
											<span class="score-league-match" :style="{color : color[parseInt(10*Math.random())]}">{{item.leagueName}}</span>
											
											<span class="score-top-line">({{item.hHalfScore}}-{{item.aHalfScore}})</span>
											<span class="score-state" v-if="item.isOver">{{item.isOver | isOver}}</span>
											<span class="score-state" v-if="!item.isOver&&item.protime">{{item.protime}}<i></i></span>
											<span class="score-state" v-if="!item.isOver&&!item.protime">赛前</span>
											<span class="score-text-btn">猜球</span>
										</p>
										<div class="score-text-bottom">
											<div class="score-text-bottom-left">
												<span class="name">{{item.home}}</span>
												<span class="order">[{{item.hOrder || 0}}]</span>
												<span class="huangpai" v-if="item.hYellow">{{item.hYellow}}</span>
												<span class="hongpai" v-if="item.hRed">{{item.hRed}}</span>
											</div>
											<span class="score-bottom-line">{{item.hScore}}-{{item.aScore}}</span>
											<div class="score-text-bottom-right">
												<span class="name">{{item.away}}</span>
												<span class="order">[{{item.aOrder || 0}}]</span>
												<span class="huangpai" v-if="item.aYellow">{{item.aYellow}}</span>
												<span class="hongpai" v-if="item.aYellow">{{item.aRed}}</span>
											</div>
										</div>
										<span class="score-text-time">{{item.openTime | scoreTime}}</span>
									</div>
								</div>
								<div class="score-nodata" v-if="match3.items.length==0">
									<img src="../../images/no_data.png" />
								</div>
								<div class="score-loading" v-if="isShow">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
								<p class="nomore" v-if="match3.nomore">已经全部加载完毕</p>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="4">
						<chose-date :right='true' @changeDate="changeDate4" @showMask="showMask" :index='clickTimeIndex4'></chose-date>
						<div class="score-item-warp">
							<div v-if="match4.items">
								<div v-for="item in match4.items" class="score-list">
									<div class="score-star" :class="{active : item.isFouce}" @click="star(item)"></div>
									<div class="score-text"  @click="linkTo(item)">
										<p class="score-text-top">
											<span class="score-league-match" :style="{color : color[parseInt(10*Math.random())]}">{{item.leagueName}}</span>											
											<span class="score-text-btn">猜球</span>
										</p>
										<div class="score-text-bottom">
											<div class="score-text-bottom-left">
												<span class="name">{{item.home}}</span>
												<span class="order">[{{item.hOrder || 0}}]</span>												
											</div>
											<span class="score-bottom-line">{{item.hScore}}-{{item.aScore}}</span>
											<div class="score-text-bottom-right">
												<span class="name">{{item.away}}</span>
												<span class="order">[{{item.aOrder || 0}}]</span>
											</div>
										</div>
										<span class="score-text-time">{{item.openTime | scoreTime}}</span>
									</div>
								</div>
								<div class="score-nodata" v-if="match4.items.length==0">
									<img src="../../images/no_data.png" />
								</div>
								<div class="score-loading" v-if="isShow">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
								<p class="nomore" v-if="match4.nomore">已经全部加载完毕</p>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="5">
						<div class="score-item-warp">
							<div v-if="match5.items" >
								<div v-for="item in match5.items" class="score-list">
									<div class="score-star" :class="{active : item.isFouce}" @click="star(item)"></div>
									<div class="score-text"  @click="linkTo(item)">
										<p class="score-text-top">
											<span class="score-league-match" :style="{color : color[parseInt(10*Math.random())]}">{{item.leagueName}}</span>											
											<span class="score-top-line">({{item.hHalfScore}}-{{item.aHalfScore}})</span>
											<span class="score-state" v-if="item.isOver">{{item.isOver | isOver}}</span>
											<span class="score-state" v-if="!item.isOver&&item.protime">{{item.protime}}<i></i></span>
											<span class="score-state" v-if="!item.isOver&&!item.protime">赛前</span>
											<span class="score-text-btn">猜球</span>
											
										</p>
										<div class="score-text-bottom">
											<div class="score-text-bottom-left">
												<span class="name">{{item.home}}</span>
												<span class="order">[{{item.hOrder || 0}}]</span>
												<span class="huangpai" v-if="item.hYellow">{{item.hYellow}}</span>
												<span class="hongpai" v-if="item.hRed">{{item.hRed}}</span>
											</div>
											<span class="score-bottom-line" :class="{'no-over':!item.isOver}">{{item.hScore}}-{{item.aScore}}</span>
											<div class="score-text-bottom-right">
												<span class="name">{{item.away}}</span>
												<span class="order">[{{item.aOrder || 0}}]</span>
												<span class="huangpai" v-if="item.aYellow">{{item.aYellow}}</span>
												<span class="hongpai" v-if="item.aYellow">{{item.aRed}}</span>
											</div>
										</div>
										<span class="score-text-time" style="margin-left: 1.28rem;">{{item.openTime.substring(5,16)}}</span>
									</div>
								</div>
								<div class="score-nodata" v-if="match5.items.length==0">
									<img src="../../images/no_data.png" />
								</div>
								<div class="score-loading" v-if="isShow">
									<mt-spinner type="triple-bounce"></mt-spinner>
								</div>
								<p class="nomore" v-if="match5.nomore">已经全部加载完毕</p>
							</div>
						</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</mt-loadmore>
		</div>
		<tab></tab>
		<transition name="fade">
		<div class="time-warp" v-if="isTimeWarp" @click="closeTime($event)" >
			<div class="time-warp-content">
				<div>请选择时间</div>
				<ul>
					<li v-for="(item,index) in timeData" :class="{active : timeIndex == index }" @click="choseTime(index)">({{item.week}}) {{item.date}}</li>
				</ul>
			</div>
		</div>
		</transition>
		<mt-popup
		  v-model="popupVisible"
		  position="right">
		  <slot>
		  	<div class="filters-warp">
		  		<score-filters @close="close" :query='query' v-if="popupVisible"></score-filters>
		  	</div>
		  </slot>
		</mt-popup>
	</div>
</template>

<script type="text/ecmascript-6">
	import Tab from '@/components/tab/tab'
	import ChoseDate from '@/components/chosedate/chosedate'
	import { Indicator, Toast } from "mint-ui";
	import { requestOpt, getUserInfo ,getToday ,dtFormate} from 'api/recommend'
	import scoreFilters from '@/components/score/scoreFilters'
	export default {
		components: {
			Tab,
			ChoseDate,
			scoreFilters
		},
		data() {
			return {
				scoreIndex: '2',
				loading: true,
				isShow:false,
				match2: {},
				match3: {},
				match4: {},
				match5: {},
				today:'',
				isTimeWarp:false,
				timeData:[],
				timeIndex:0,
				clickTimeIndex3:'',
				clickTimeIndex4:'',
				isLogin:getUserInfo() ? true : false,
				authToken:getUserInfo() ? getUserInfo().authToken : false,
				color:['#ca00ca','#01cda9','#e5a918','#e63d27','#0030ca','#00beca','#e97850','#8a50e9','#efb312','#ff6280'],
				popupVisible:false,
				query:""
			}
		},
		activated(){
			let isLogin = getUserInfo() ? true : false;	
			let authToken = getUserInfo() ? getUserInfo().authToken : false;
			if(this.isLogin !== isLogin || this.authToken !== authToken){
				this.authToken = authToken;
				this.isLogin = isLogin;
				this.match2 = {};
				this.match3 = {};
				this.match4 = {};
				this.match5 = {};
				this.scoreIndex = '2';
				Indicator.open();		
				this.getData(2, this.today);
			}else{
				if(this['match' + this.scoreIndex].totalCount != this['match' + this.scoreIndex].page){
					this.loading = false;
				}
			}			
		},
		deactivated(){
			Indicator.close();
			this.loading = true;
		},
		mounted() {
			Indicator.open();	
			this.today = getToday();
			this.getData(2, this.today);
		},
		methods: {
			close(id){
				this.popupVisible = false;
				let date = '';			
				let index = this.scoreIndex
				if(index == 3 || index == 4){					
					date = this['match' + index].date;
				}else{
					date = this.today;
				}
				if(id){	
					this['match' + index].id = id;
					this.getData(index, date , 1 ,'' , id);
				}
			},
			linkTo(item){
				this.$router.push({ path: 'scoreContent', query: {info:JSON.stringify(item)} });
			},
			toScoreFilters(){
				let index = this.scoreIndex
				if(this['match' + index].items.length == 0){
					Toast("有联赛才能筛选");
					return false;
				}
				
				let date = '';				
				if(index == 3 || index == 4){					
					date = this['match' + index].date;
				}else{
					date = this.today;
				}
				this.query = {type: index,date: date};
				this.popupVisible = true;

			},
			choseTime(index){
				if(index == this.timeIndex){
					return false;
				}
				Indicator.open();
				this['clickTimeIndex'+this.scoreIndex] = index;
				this.isTimeWarp = false;
			},
			star(item) {
				if(getUserInfo()) {
					let status = 0;
					item.isFouce == 0 ? status = 1 : status = 0;
					Indicator.open();
					requestOpt.reqTokenPost('fouceMatch', getUserInfo().authToken, {
						matchID: item.id,
						status: status
					}, res => {
						Indicator.close();
						if(res.data.status) {							
							item.isFouce = status;
							if(status){
								Toast('关注成功')
							}else{
								Toast('取消成功')
								item = null;
							}
						}else{
							item.isFouce = status;
						}
					}, err => {
						
					})
				} else {
					Toast('请登陆以后再关注')
				}

			},
			closeTime(event){
				if(event.target.className == 'time-warp'){
					this.isTimeWarp = false;
				}	
				
			},
			showMask(weekArr,dateArr,index){
				for(let i = 0; i <7 ;i++){
					this.timeData[i] = {};
					this.timeData[i].week = weekArr[i];
					this.timeData[i].date = dateArr[i].splice(4,0,'-').splice(7,0,'-').substring(0,10);
				}
				this.isTimeWarp = true;
				this.timeIndex = index;
			},
			changeDate3(date){
				this.match3.date = date;
				if(this.scoreIndex ==3){
					Indicator.open();
					this.getData(3, date, 1)
				}
				
			},
			changeDate4(date){
				this.match4.date = date;
				if(this.scoreIndex == 4){
					Indicator.open();
					this.getData(4, date, 1)
				}
			},
			toggleTab(index) {
				this.scoreIndex = index;
			},
			loadTop() {
				this['match' + this.scoreIndex].id = null
				this.getData(parseInt(this.scoreIndex), this['match' + this.scoreIndex].date, 1)
			},
			loadMore() {
				if(this['match' + this.scoreIndex].id){
					this.getData(parseInt(this.scoreIndex), this['match' + this.scoreIndex].date, '', true ,this['match' + this.scoreIndex].id)
				}else {
					this.getData(parseInt(this.scoreIndex), this['match' + this.scoreIndex].date, '', true)
				}
				
			},
			getData(type, date, page, flag , id = 0) {
				if(flag){
					this.loading = true;
					this.isShow = true;
					
				}				
				date ? '' : date = this.today;
				let str = 'match' + type;
				if(!page) {
					this[str].page ? page = this[str].page+1 : page = 1;
				}
				let url = `match/type/${type}/date/${date}/subType/0/leagueIDs/${id}/stype/0/page/${page}/count/10`;
				
				if(getUserInfo()) {
					requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
						this.isShow = false;
						let data = res.data.data;
						Indicator.close();
						if(res.data.status) {
							if(flag) {
								this[str].items.push.apply(this[str].items,data.items)
							} else {
								this[str] = data;
							}
							if(data.totalPage != data.totalCount) {
								this.loading = false;
								this[str].nomore = false;
							} else {
								this.loading = true;
								this[str].nomore = true;
								
							}
							if(data.totalPage==1&&data.items.length==0){
								this[str].nomore = false;
							}
							this[str].page = data.totalPage;
							this[str].totalCount = data.totalCount;
							this[str].date = date;
							this[str].id = id;
							if(!flag) {
								this.$refs.loadmore.onTopLoaded();
							}
						}
					}, err => {
						Indicator.close();
					})
				} else {
					requestOpt.reqGet(url, res => {
						this.isShow = false;
						let data = res.data.data;
						Indicator.close();
						if(res.data.status) {
							if(flag) {
								this[str].items.push.apply(this[str].items,data.items)
							} else {
								this[str] = data;
							}
							if(data.totalPage != data.totalCount) {
								this.loading = false;
								this[str].nomore = false;
							} else {
								this.loading = true;
								this[str].nomore = true;
								
							}
							if(data.totalPage==1&&data.items.length==0){
								this[str].nomore = false;
							}
							this[str].page = data.totalPage;
							this[str].totalCount = data.totalCount;
							this[str].date = date;
							this[str].id = id;
							if(!flag) {
								this.$refs.loadmore.onTopLoaded();
							}
						}
					}, err => {
						Indicator.close();
					})
				}
			}
		},
		watch: {
			scoreIndex: function(scoreIndex) {
				if(!this['match' + scoreIndex].items) {
					Indicator.open();
					if(scoreIndex ==3){
						this.getData(scoreIndex, dtFormate.yestaday(1), 1)
					}else if(scoreIndex ==4  ){
						this.getData(scoreIndex, dtFormate.future(1), 1)
					}else{
						this.getData(scoreIndex, this.today, 1)
					}
					
				}else if(this['match' + scoreIndex].totalCount != this['match' + scoreIndex].page){
					this.loading = false;
					
				}else if(this['match' + scoreIndex].totalCount == this['match' + scoreIndex].page){
					this.loading = true;
					
				}
			}
		}
	}
</script>


<style scoped>
	.mint-popup-right{
		width: 100%;
		height: 100%;
	}
	.filters-warp{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 9999999;
	}
	.time-warp{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.6);
		z-index: 99999;
	}
	.time-warp-mask{
		position: fixed;
		top: 0;
		bottom: 6.4rem;
		left: 0;
		right: 0;
	}
	.time-warp-content{
		position: fixed;		
		bottom: 0;
		left: 0;
		right: 0;
		height: 6.4rem;
		background: #fff;
	}
	.time-warp-content>div{
		height: .8rem;
		background: #f6f8f7;
		text-align: center;
		line-height: .8rem;
	}
	.time-warp-content li{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		
	}
	.time-warp-content li.active{
		color: #FC823C;
		background: url(../../images/time-ok.png) no-repeat right 1.8rem center;
		background-size: .3rem .3rem;
	}
	.score-loading {
		height: 1rem;
		line-height: 1rem;
		background: #fff;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nomore {
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		background-color: #f3f4f4;
		color: #c0c0c0;
	}
	
	.score-nodata {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 7.04rem;
		background:#f3f4f4;
	}
	
	.score-nodata img {
		width: 50%;
	}
	
	.score {
		padding-bottom: 1rem;
		background: #f3f4f4;
	}
	
	.score-heard {
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: .88rem;
		width: 6.9rem;
		padding: 0 .3rem;
		align-items: center;
		justify-content: space-between;
		font-size: .36rem;
		background-color: #24a8de;
		color: #fff;
		z-index: 99;
	}
	.score-heard-tab a:first-child {
		margin-left: .3rem;
		margin-right: .1rem;
	}
	
	.score-heard-tab a {
		opacity: .4;
		color: #fff;
	}
	
	.score-heard-tab a.active {
		opacity: 1;
	}
	.score-heard-right{
		margin-left: .1rem;
		height: .35rem;
    	width: .35rem;
	}
	.score-heard-right span{
		display: inline-block;
		height: .35rem;
		width: .35rem;
		cursor: pointer;
	}
	
	.score-content-tab {
		position: fixed;
		top: .88rem;
		left: 0;
		display: flex;
		justify-content: space-around;
		width: 100%;
		background: #fff;
		z-index: 99;
		height: .8rem;
		border-bottom: 1px solid #f6f6f6;
	}
	
	.score-content-tab li {
		padding: .13rem 0;
		background: #fff;		
		color: #323232;
		font-size: .3rem;
		text-align: center;
		height: .5rem;
	}
	
	.score-content-tab li.active {
		color: #24a8de;
		border-bottom: 2px solid #24a8de;
	}
	
	.score-heard-right .screen-icon {
		background: url(../../images/zonghe.png) no-repeat center;
		background-size: contain;
	}

	
	.score-content {
		padding-top: 1.68rem;
		height: 100%;
	}
	
	.score-content .score-item-warp>div {
		min-height: 10.06rem;
		
	}
	
	.score-content .score-num {
		position: absolute;
		right: .1rem;
		bottom: .1rem;
		color: #666666;
		font-size: .2rem;
	}
	
	.score-list {
		height: 1.34rem;
		border-top: 1px solid #ededed;
		display: flex;
		position: relative;
		background: #fff;
		background: linear-gradient(to bottom, #fff 0%,#f8f8f8 100%);
	}
	.score-state i{
		margin-left: .06rem;
		width: .02rem;
		height: .04rem;
		border-radius: .02rem;
		background: red;
		animation: shan 1s infinite ;
	}
	@keyframes shan {
	    0%{
	        transform: scale(.5);
	    }
	
	    100%{
	        transform: scale(1.5);
	    }
	}
	.score-star {
		flex-shrink: 0;
		width: .9rem;
		background: url(../../images/unstar.png) no-repeat center;
		background-size: .38rem .38rem;
	}
	.score-star.active{
		background: url(../../images/star.png) no-repeat center;
		background-size: .38rem .38rem;
	}
	.score-text {
		width: 100%;
	}
	
	.score-text-top {
		font-size: .2rem;
		padding: .2rem 0 .05rem;
		display: flex;
		align-items: center;
		position: relative;
	}
	
	.score-league-match {
		width: 2.46rem;
		text-align: right;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.score-text-time {
		margin-left: 1.92rem;
		font-size: .2rem;
		color: #8c8c8c;
	}
	
	.score-top-line {
		color: #9b9b9b;
		width: .8rem;
	    text-align: center;
	    margin: 0px 0.1rem;
	}
	.score-text-btn{
		font-size: .16rem;
		position: absolute;
		right: .3rem;
		bottom: .06rem;
		color: #fb6e2f;
		border: 1px solid #ee630f;
		border-radius: .04rem;
		padding: .01rem;
	}
	.score-state {
		display: flex;
		color: #ee630f;
	}
	
	.score-text-bottom {
		display: flex;
		align-items: center;
	}
	
	.score-bottom-line {
		color: #fe001e;
		margin: 0 .1rem;
		width: .8rem;
		font-weight: bold;
		font-size: .28rem;
		text-align: center;
		white-space: nowrap;
	}
	.score-bottom-line.no-over{
		color: #309f0e;
	}
	.score-text-bottom-left,
	.score-text-bottom-right{
		width: 2.46rem;
		height: .42rem;
		display: flex;
		align-items: center;
	}
	.score-text-bottom-left{
		flex-direction: row-reverse ;
	}

	.score-text-bottom-left span,
	.score-text-bottom-right span{
		display: inline-block;
		
	}
	.score-text-bottom-left span{
		margin-left: .08rem;
	}
	.score-text-bottom-left span:last-child{
		margin-left: 0;
	}
	.score-text-bottom-right span{
		margin-right: .08rem;
	}
	.score-text-bottom-right span:last-child{
		margin-left: 0;
	}
	.score-text-bottom-left .order,
	.score-text-bottom-right .order {
		font-size: .16rem;
		color: #9b9b9b;
	}
	.score-text-bottom-left .name,
	.score-text-bottom-right .name{	
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: .28rem;
		max-width: 1.68rem;
		flex-shrink: 0;
	}
	.huangpai,.hongpai{
		height: .2rem;
		width: .17rem;
		text-align: center;
		line-height: .2rem;
		font-size: .16rem;
		color: #fff;
	}
	.huangpai{
		background: #eb1312;		
	}
	.hongpai{
		background: #e9ad14;		
	}
	.score-text-bottom-left {
		text-align: right;
	}
	.score-heard-left{
		width: .2rem;
	}
	
</style>







