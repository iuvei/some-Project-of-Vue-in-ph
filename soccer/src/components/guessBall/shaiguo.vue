<template>
	<div class="guess-duying">
		<guess-title :date="date" @filters="filters" :totalCount="totalCount" @changeGage="changeGage" @changeOrder="changeOrder" orderType="3" @refresh="refresh" ref="title"></guess-title>
		<mt-loadmore :top-method="loadTop" ref="loadmore">
			<chose-date :right='false' @changeDate="changeDate" @showMask="showMask" :index='clickTimeIndex'></chose-date>
			<div class="no-data"  v-if="JSON.stringify(obj) == '{}'">
				<img src="../../images/no_data.png"/>
			</div>
			<div class="guess-load"  v-if="JSON.stringify(obj) != '{}'">
				<div class="guess-item" v-for="(item,index) in obj">
					<div class="guess-item-heard" @click="toggleHeard(item)">
						<div class="heard-icon">
							<i :class="{active : item.isShow}"></i>
						</div>
						<p>{{index}}</p>
					</div>
					<transition-group name="fade">
					<div class="guess-item-content"  v-for="list in item" v-show="item.isShow" :key="list.id"> 
						<div class="guess-item-list" >
							<table width="100%" >
								<tr class="table-heard">
									<th>比赛队伍</th>
									<th :class="{red : list.hScore > list.aScore}">{{list.home}}</th>
									<th :class="{red : list.hScore < list.aScore}">{{list.away}}</th>		
								</tr>
								<tr>
									<td>半场</td>
									<td class="bg-yello" :class="{red : list.hHalfScore > list.aHalfScore}">{{list.hHalfScore}}</td>
									<td class="bg-yello" :class="{red : list.hHalfScore < list.aHalfScore}">{{list.aHalfScore}}</td>
								</tr>
								<tr>
									<td>全场</td>
									<td :class="{red : list.hScore > list.aScore}">{{list.hScore}}</td>
									<td :class="{red : list.hScore < list.aScore}">{{list.aScore}}</td>
									
								</tr>
							</table>
						</div>
					</div>
					</transition-group>	
				</div>
			</div>
		</mt-loadmore>		
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
	</div>
</template>

<script type="text/ecmascript-6">
	import GuessTitle from '@/components/guessBall/guessTitle'
	import { Indicator } from "mint-ui";
	import ChoseDate from '@/components/chosedate/chosedate'
	import { requestOpt } from 'api/recommend'
	export default {
		components: {
			GuessTitle,
			ChoseDate
		},
		props: ['orderType','path'],
		data() {
			return {
				page:1,
				totalCount:1,
				obj:{},
				id:0,
				order:0,
				isNow:true,
				clickTimeIndex:"",
				isTimeWarp:'',
				timeIndex:'',
				timeData:[],
				date:''
			}
		},
		destroy () {
		 Indicator.close();
		},
		mounted() {
			this.getTitleData();	
		},
		methods: {
			filters(id){
				this.id = id;
				this.page = 1;
				this.$refs.title.page();
				this.getTitleData();
			},
			closeTime(event){
				if(event.target.className == 'time-warp'){
					this.isTimeWarp = false;
				}					
			},
			choseTime(index){
				if(index == this.timeIndex){
					return false;
				}
				this.clickTimeIndex = index;
				this.isTimeWarp = false;
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
			changeDate(date){
				this.date = date;
				this.getTitleData();
			},		
			changeOrder(order){
				this.order = order;
				this.getTitleData();
			},
			changeGage(page){
				this.page = page;
				this.getTitleData();
			},
			toggleHeard(item){
				if(item.isShow){
					item.isShow = !item.isShow
					return false;
				}
				this.$set(item, 'isShow', true);
			},
			loadTop() {
				this.id = 0;
				this.isNow = true;
				this.$refs.title.refresh(true);

			},
			refresh(){
				this.isNow = true;
				this.$emit('refresh');
				this.getTitleData();
			},
			getTitleData(){
				Indicator.open();
				let url = `match/type/3/date/${this.date}/subType/0/leagueIDs/${this.id}/stype/${this.order}/page/${this.page}/count/20`;
				requestOpt.reqGet(url, res => {
					Indicator.close();
					if(res.data.status) {
						this.totalCount = res.data.data.totalCount;
						let items = res.data.data.items;
						let obj = {};
						let arr = [];
						let nameObj = {};
						
						for(let i = 0;i < items.length; i++){

							if(obj[items[i].leagueName]){
								obj[items[i].leagueName].push(items[i])
							}else{
								obj[items[i].leagueName] = [items[i]];
							}
						}
				
						this.obj = obj;
						this.$refs.loadmore.onTopLoaded();
					}
				}, err => {
					Indicator.close();
				})
			}
		}
	}
</script>

<style scoped>
	.guess-item-content .table-heard {
		height: .7rem;
		text-align: center;
		 background: #fff;
		 color: #000;
	}
	.guess-item-content .table-heard th{
		   border-left: 1px solid #e7e7e7;
    	border-bottom: 1px solid #e7e7e7;
		width: 38%;
	}
	.guess-item-content .table-heard th:first-child{
		width: 22%;
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
</style>