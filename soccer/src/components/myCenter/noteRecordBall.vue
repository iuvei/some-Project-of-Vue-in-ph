<template>
	<div class="noteRecord">
		<div class="noteRecord-heard">
			<router-link to="/myCenter" class="noteRecord-heard-left"></router-link>
			<div class="noteRecord-heard-tab">
				<router-link to="/noteRecord">足球</router-link>
				<a class="active">篮球</a>
			</div>
			<a></a>
		</div>
		<ul class="noteRecord-content-tab">
			<li :class="{ active: 1 == scoreIndex}" @click="toggleTab('1')">近期投注</li>
			<li :class="{ active: 2 == scoreIndex}" @click="toggleTab('2')">未结投注</li>
			<li :class="{ active: 3 == scoreIndex}" @click="toggleTab('3')">历史记录</li>
		</ul>
		<div class="noteRecord-content">
			<mt-loadmore :top-method="loadTop" ref="loadmore">
				<mt-tab-container v-model="scoreIndex" ref="tab" swipeable>
					<mt-tab-container-item id="1">
						<div class="noteRecord-item-warp">
							<div class="noteRecord-item-tab">
								<a :class="{ active: 1 == tabIndex}" @click="toggleItem('1')">按时间</a>
								<a :class="{ active: 2 == tabIndex}" @click="toggleItem('2')">按场次</a>
							</div>
							<div v-if="dataTime.length>0" v-show="tabIndex == 1">
								<div class="noteRecord-list" v-for="item in dataTime">
									<div class="noteRecord-list-heard" @click="showItem(item)">
										<p>{{item.date}}<span>{{item.date | formWeek}}</span></p>
										<p>盈亏：{{item.wins}}<i :class="{active: item.show}"></i></p>
									</div>
									<div v-show="item.show">
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount == 1">
											<div class="noteRecord-list-list"><span>{{data.info[0].name}}</span>
												<p class="color-hui"><span>{{data.info[0].matchType |formMatchType}}</span></p>
											</div>
											<div class="color-hui noteRecord-list-list">
												<p class="team-name">
													<span class="name">{{data.info[0].home}}</span>
													<span v-if="data.info[0].status != 1">{{data.info[0].homeScore}}:{{data.info[0].awayScore}}</span>
													<span v-if="data.info[0].status == 1 && data.info[0].matchType != 0">vs</span>
													<span class="name">{{data.info[0].away}}</span>{{data.info[0].openTime | formData}}
												</p>
											</div>
											<div class="noteRecord-list-list"><span class="color-hui">回报：{{data.info[0].payRate}}倍</span><span :class="color[data.info[0].status]">{{data.info[0].status | formWinType}}</span></div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount != 1">
											<div v-for="list in data.info" class="noteRecord-list-warp">
												<div class="noteRecord-list-list"><span>{{list.name}}</span>
													<p class="color-hui"><span>{{list.matchType |formMatchType}}</span></p>
												</div>
												<div class="color-hui noteRecord-list-list">
													<p class="team-name">
														<span class="name">{{list.home}}</span>
														<span v-if="list.status != 1">{{list.homeScore}}:{{list.awayScore}}</span>
														<span v-if="list.status == 1">vs</span>
														<span class="name">{{list.away}}</span>{{list.openTime | formData}}
													</p>
												</div>
												<div class="noteRecord-list-list"><span class="color-hui">回报：{{list.payRate}}倍</span><span :class="color[list.status]">{{list.status | formWinType}}</span></div>
											</div>
											<div class="noteRecord-list-list">{{data.cCount}}串1</div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="dataTeam.length>0" v-show="tabIndex == 2">
								<div class="noteRecord-list" v-for="item in dataTeam">
									<div class="noteRecord-list-heard" @click="showItem(item)">
										<p>{{item.leagueName}}</p>
										<p>盈亏：{{item.wins}}<i :class="{active: item.show}"></i></p>
									</div>
									<div v-show="item.show">
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount == 1">
											<div class="noteRecord-list-list"><span>{{data.info[0].name}}</span>
												<p class="color-hui"><span>{{data.info[0].matchType |formMatchType}}</span></p>
											</div>
											<div class="color-hui noteRecord-list-list">
												<p class="team-name">
													<span class="name">{{data.info[0].home}}</span>
													<span v-if="data.info[0].status != 1">{{data.info[0].homeScore}}:{{data.info[0].awayScore}}</span>
													<span v-if="data.info[0].status == 1 && data.info[0].matchType != 0">vs</span>
													<span class="name">{{data.info[0].away}}</span>{{data.info[0].openTime | formData}}
												</p>
											</div>
											<div class="noteRecord-list-list"><span class="color-hui">回报：{{data.info[0].payRate}}倍</span><span :class="color[data.info[0].status]">{{data.info[0].status | formWinType}}</span></div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount != 1">
											<div v-for="list in data.info" class="noteRecord-list-warp">
												<div class="noteRecord-list-list"><span>{{list.name}}</span>
													<p class="color-hui"><span>{{list.matchType |formMatchType}}</span></p>
												</div>
												<div class="color-hui noteRecord-list-list">
													<p class="team-name">
														<span class="name">{{list.home}}</span>
														<span v-if="list.status != 1">{{list.homeScore}}:{{list.awayScore}}</span>
														<span v-if="list.status == 1">vs</span>
														<span class="name">{{list.away}}</span>{{list.openTime | formData}}
													</p>
												</div>
												<div class="noteRecord-list-list"><span class="color-hui">回报：{{list.payRate}}倍</span><span :class="color[list.status]">{{list.status | formWinType}}</span></div>
											</div>
											<div class="noteRecord-list-list">{{data.cCount}}串1</div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="2">
						<div class="noteRecord-item-warp">
							<div v-if="data2.length>0">
								<div class="noteRecord-list" v-for="item in data2">
									<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount == 1">
										<div class="noteRecord-list-list"><span>{{data.info[0].name}}</span>
											<p class="color-hui"><span>{{data.info[0].matchType |formMatchType}}</span></p>
										</div>
										<div class="color-hui noteRecord-list-list">
											<p class="team-name">
												<span class="name">{{data.info[0].home}}</span>
												<span v-if="data.info[0].status != 1">{{data.info[0].homeScore}}:{{data.info[0].awayScore}}</span>
												<span v-if="data.info[0].status == 1 && data.info[0].matchType != 0">vs</span>
												<span class="name">{{data.info[0].away}}</span>{{data.info[0].openTime | formData}}
											</p>
										</div>
										<div class="noteRecord-list-list"><span class="color-hui">回报：{{data.info[0].payRate}}倍</span><span :class="color[data.info[0].status]">{{data.info[0].status | formWinType}}</span></div>
										<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
										<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
									</div>
									<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount != 1">
										<div v-for="list in data.info" class="noteRecord-list-warp">
											<div class="noteRecord-list-list"><span>{{list.name}}</span>
												<p class="color-hui"><span>{{list.matchType |formMatchType}}</span></p>
											</div>
											<div class="color-hui noteRecord-list-list">
												<p class="team-name">
													<span class="name">{{list.home}}</span>
													<span v-if="list.status != 1">{{list.homeScore}}:{{list.awayScore}}</span>
													<span v-if="list.status == 1">vs</span>
													<span class="name">{{list.away}}</span>{{list.openTime | formData}}
												</p>
											</div>
											<div class="noteRecord-list-list"><span class="color-hui">回报：{{list.payRate}}倍</span><span :class="color[list.status]">{{list.status | formWinType}}</span></div>
										</div>
										<div class="noteRecord-list-list">{{data.cCount}}串1</div>
										<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
										<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
									</div>
								</div>
							</div>
						</div>
					</mt-tab-container-item>
					<mt-tab-container-item id="3">
						<div class="noteRecord-item-warp">
							<div class="noteRecord-date">
								<div>从<img src="../../images/rili.png" /><span @click="openStart">{{starText}}</span></div>
								<div>至<img src="../../images/rili.png" /><span @click="openEnd">{{endText}}</span></div>
								<a @click="getDate">查询</a>
							</div>
							<div class="noteRecord-item-warp">
								<div v-if="data3.length>0">
									<div class="noteRecord-list" v-for="item in data3">
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount == 1">
											<div class="noteRecord-list-list"><span>{{data.info[0].name}}</span>
												<p class="color-hui"><span>{{data.info[0].matchType |formMatchType}}</span></p>
											</div>
											<div class="color-hui noteRecord-list-list">
												<p class="team-name">
													<span class="name">{{data.info[0].home}}</span>
													<span v-if="data.info[0].status != 1">{{data.info[0].homeScore}}:{{data.info[0].awayScore}}</span>
													<span v-if="data.info[0].status == 1 && data.info[0].matchType != 0">vs</span>
													<span class="name">{{data.info[0].away}}</span>{{data.info[0].openTime | formData}}
												</p>
											</div>
											<div class="noteRecord-list-list"><span class="color-hui">回报：{{data.info[0].payRate}}倍</span><span :class="color[data.info[0].status]">{{data.info[0].status | formWinType}}</span></div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
										<div class="noteRecord-list-content" v-for="data in item.payDetails" v-if="data.cCount != 1">
											<div v-for="list in data.info" class="noteRecord-list-warp">
												<div class="noteRecord-list-list"><span>{{list.name}}</span>
													<p class="color-hui"><span>{{list.matchType |formMatchType}}</span></p>
												</div>
												<div class="color-hui noteRecord-list-list">
													<p class="team-name">
														<span class="name">{{list.home}}</span>
														<span v-if="list.status != 1">{{list.homeScore}}:{{list.awayScore}}</span>
														<span v-if="list.status == 1">vs</span>
														<span class="name">{{list.away}}</span>{{list.openTime | formData}}
													</p>
												</div>
												<div class="noteRecord-list-list"><span class="color-hui">回报：{{list.payRate}}倍</span><span :class="color[list.status]">{{list.status | formWinType}}</span></div>
											</div>
											<div class="noteRecord-list-list">{{data.cCount}}串1</div>
											<div class="noteRecord-list-list"><span>投注金币：{{data.info[0].amount}}</span><span>预计返还：{{data.info[0].profit}}</span></div>
											<div class="color-hui noteRecord-list-list"><span>订单号：{{data.info[0].orderID}}</span><span>{{data.info[0].createDate}}</span></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</mt-tab-container-item>
				</mt-tab-container>
			</mt-loadmore>
			</div>
			<mt-datetime-picker
			    ref="startime"
			    type="date"
			    @confirm="choseStar"
			    v-model="startime">
			  </mt-datetime-picker><mt-datetime-picker
			    ref="endtime"
			    type="date"
			    :endDate='endDate'
			    @confirm="choseEnd"
			    v-model="endtime">
			  </mt-datetime-picker>
		</div>
</template>

<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	import { Indicator, Toast } from "mint-ui";
	import { requestOpt, getUserInfo, getToday, setUserInfo ,dtFormate } from 'api/recommend'
	export default {

		components: {

		},
		data() {
			return {
				scoreIndex: "1",
				tabIndex: "1",
				dataTime: [],
				dataTeam: [],
				data2: [],
				data3: [],
				color: ['', 'blue', 'red', 'green', 'yellow', 'yellow', 'yellow'],
				startime:dtFormate.yestaday(7,true),
				endtime:dtFormate.date(),
				endDate:new Date(),
				starText:dtFormate.yestaday(7,true),
				endText:dtFormate.date(),
			}
		},
		computed: {

		},
		mounted() {
			Indicator.open();
			this.getData();
			
		},
		methods: {
			getDate(){
				Indicator.open();
				this.getData()
			},
			choseStar(val){
				this.starText = dtFormate.date(val);
			},
			choseEnd(val){
				this.endText = dtFormate.date(val);
			},
			openStart(){
				 this.$refs.startime.open();
			},
			openEnd(){
				 this.$refs.endtime.open();
			},
			toggleTab(index) {
				this.scoreIndex = index;
				
			},
			toggleItem(index) {
				this.tabIndex = index;
				if((index == 1 && this.dataTime.length == 0) || (index == 2 && this.dataTeam.length == 0)) {
					Indicator.open();
					this.getData();
				}
			},
			showItem(item) {
				if(!item.show) {
					this.$set(item, 'show', true)
				} else {
					item.show = !item.show;
				}
			},
			loadTop() {
				this.getData();
			},
			getData() {
				let url = '';
				if(this.scoreIndex == 1) {
					url = `payBall/ball/recent/type/${this.tabIndex}`;
				} else if(this.scoreIndex == 2) {
					url = 'payBall/ball/unchecked';
				} else {
					let startDate = this.starText.replace(/[-]/g, "");
					let endDate = this.endText.replace(/[-]/g, "");
					url = `payBall/ball/history/startDate/${startDate}/endDate/${endDate}`;
				}
				requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
					Indicator.close();
					if(res.data.status) {
						if(this.scoreIndex == 1 && this.tabIndex == 1) {
							this.dataTime = res.data.data;
						} else if(this.scoreIndex == 1 && this.tabIndex == 2) {
							this.dataTeam = res.data.data;
						} else if(this.scoreIndex == 2) {
							this.data2 = res.data.data;
						} else if(this.scoreIndex == 3) {
							this.data3 = res.data.data;
						}
					}
					this.$refs.loadmore.onTopLoaded();
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
			}
		},
		watch: {
			scoreIndex:function(index){
				if((index == 1 && this.dataTime.length == 0) || (index == 2 && this.data2.length == 0) || (index == 3 && this.data3.length == 0)) {
					Indicator.open();
					this.getData();
				}
			}
		}
	}
</script>

<style scoped>
	.noteRecord {
		background: #f3f4f4;
	}
	
	.noteRecord-heard {
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
		z-index: 9999;
	}
	
	.noteRecord-heard>a {
		height: .34rem;
		width: .34rem;
	}
	
	.noteRecord-heard-left {
		cursor: pointer;
		background: url(../../images/return.png) no-repeat center;
		background-size: contain;
	}
	
	.noteRecord-heard-tab a:first-child {
		margin-left: .3rem;
		margin-right: .1rem;
	}
	
	.noteRecord-heard-tab a {
		opacity: .4;
		color: #fff;
	}
	
	.noteRecord-heard-tab a.active {
		opacity: 1;
	}
	.noteRecord-content-tab {
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
	
	.noteRecord-content-tab li {
		padding: .13rem 0;
		background: #fff;		
		color: #333;
		font-size: .3rem;
		text-align: center;
		height: .5rem;
	}
	
	.noteRecord-content-tab li.active {
		color: #24a8de;
		border-bottom: 2px solid #24a8de;
	}
	
	.noteRecord-content {
		padding-top: 1.68rem;
	}
	
	.noteRecord-item-tab {
		display: flex;
		align-items: center;
		background: #fff;
		height: .8rem;
		padding-left: .38rem;
	}
	
	.noteRecord-item-tab>a {
		margin-right: .2rem;
		height: .36rem;
		border-bottom: 1px solid #fff;
	}
	
	.noteRecord-item-tab>a.active {
		color: #24a8de;
		border-bottom: 1px solid #24a8de;
	}
	
	.noteRecord-list {
		margin-bottom: .1rem;
	}
	
	.noteRecord-list-heard {
		position: relative;
		height: .8rem;
		padding-left: .38rem;
		padding-right: .6rem;
		background: #dadfe2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		cursor: pointer;
	}
	
	.noteRecord-list-heard span {
		margin-left: .2rem;
	}
	
	.noteRecord-list-heard i {
		width: .2rem;
		height: .2rem;
		position: absolute;
		top: .4rem;
		right: .2rem;
		border-left: 1px solid #999;
		border-bottom: 1px solid #999;
		transform: translate(0, -50%) rotate(-135deg);
	}
	
	.noteRecord-list-heard i.active {
		transform: translate(0, -80%) rotate(-45deg);
	}
	
	.noteRecord-list-content {
		background: #ffffff;
		padding: .3rem .38rem;
		margin-bottom: .16rem;
	}
	
	.noteRecord-list-content .noteRecord-list-list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: .48rem;
	}
	
	.noteRecord-list-content .noteRecord-list-list p span {
		margin-right: .2rem;
	}
	
	.noteRecord-list-content>div:last-child {
		height: .7rem;
		margin-top: .3rem;
		border-top: 1px solid #adadad;
	}
	
	.noteRecord-list-content .color-hui {
		color: #adadad;
	}
	
	.noteRecord-list-content .team-name {
		display: flex;
	}
	
	.noteRecord-list-content .team-name .name {
		flex-shrink: 0;
		max-width: 2rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.noteRecord-list-warp {
		border-bottom: 1px solid #adadad;
		padding-bottom: .1rem;
		margin-bottom: .3rem;
	}
	
	.noteRecord-item-warp {
		min-height: 10.66rem;
	}
	
	.noteRecord-list-list .blue {
		color: #24a8de;
	}
	
	.noteRecord-list-list .red {
		color: #ee0c0c;
	}
	
	.noteRecord-list-list .green {
		color: #0ef129;
	}
	
	.noteRecord-list-list .yello {
		color: #ff7e00;
	}
	.noteRecord-date {
		display: flex;
		justify-content: space-around;
		align-items: center;
		background: #fff;
		margin-bottom: .1rem;
		height: .6rem;
	}
	.noteRecord-date>div{
		display: flex;
		align-items: center;
	}
	.noteRecord-date>div span{
		border:1px solid #adadad;
		padding: .06rem;
		border-radius: .06rem;
	}
	.noteRecord-date img{
		width: .38rem;
		margin: 0 .16rem;
	}
	.noteRecord-date a{
		width: 1rem;
		height: .4rem;
		border-radius: .06rem;
		background: #24a8de;
		color: #fff;
		text-align: center;
		line-height: .4rem;
	}
</style>