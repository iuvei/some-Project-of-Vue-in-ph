<template>
	<div class="agencySeach">
		<div class="back">
		  <a class="back-btn" @click="$router.goBack()" ></a>
		  <div class="back-title">
		  	<a :class="{ active: 1 == scoreIndex}" @click="toggleTab('1')">个人报表</a>
		  	<a :class="{ active: 2 == scoreIndex}" @click="toggleTab('2')">团队报表</a>
		  </div>
		  <div class="back-title-right"></div>
 		 </div>
 		 <div class="agencySeach-content">	
 		 	<div class="noteRecord-date">
				<div>从<img src="../../../images/rili.png" /><span @click="openStart">{{starText}}</span></div>
				<div>至<img src="../../../images/rili.png" /><span @click="openEnd">{{endText}}</span></div>
				<a @click="getData">查询</a>
			</div>	
			<mt-loadmore :top-method="getData" ref="loadmore" style="min-height: 10rem;"> 
				<ul>
					<li><span>盈亏总额</span><span style="color: red;">{{listData.wins}}元</span></li>
					<li><span>投注总额</span><span>{{listData.amount}}元</span></li>
					<li><span>派彩总额</span><span>{{listData.rewards}}元</span></li>
					<li><span>佣金总额</span><span>{{listData.fees}}元</span></li>
					<li><span>充值总额</span><span>{{listData.recharges}}元</span></li>
					<li><span>提现总额</span><span>{{listData.extracts}}元</span></li>
				</ul>
			</mt-loadmore>
 		 </div>
 		 <mt-datetime-picker
			    ref="startime"
			    type="date"
			    @confirm="choseStar"
			    v-model="startime">
		</mt-datetime-picker>
		  <mt-datetime-picker
		    ref="endtime"
		    type="date"
		    :endDate='endDate'
		    @confirm="choseEnd"
		    v-model="endtime">
		</mt-datetime-picker>
	</div>
</template>

<script type="text/ecmascript-6">
import { requestOpt ,getUserInfo ,setUserInfo ,dtFormate} from 'api/recommend'
import { Indicator, Toast,MessageBox} from "mint-ui";
export default {
	components: {
		
	},
	data() {
		return {
			scoreIndex: "1",
			startime:dtFormate.yestaday(7,true),
			endtime:dtFormate.date(),
			endDate:new Date(),
			starText:dtFormate.yestaday(7,true),
			endText:dtFormate.date(),
			listData:"",
		}
	},
	computed: {

	},
	mounted() {
		this.getData();
	},
	methods: {
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
			this.getData();
		},
		getData(){
			Indicator.open();
			let startDate = this.starText.replace(/[-]/g, "");
			let endDate = this.endText.replace(/[-]/g, "");
			let url ;
			if(this.scoreIndex == '1'){
				url = `report/startDate/${startDate}/endDate/${endDate}`;
			}else{
				url = `report/team/startDate/${startDate}/endDate/${endDate}`;
			}
			
			requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
				Indicator.close();
				if(res.data.status){
					this.listData = res.data.data
				}
				this.$refs.loadmore.onTopLoaded();
			}, err => {
				Indicator.close();
				
			})
		},
	}
}</script>

<style scoped>

.back{
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	height: .88rem;
	overflow: hidden;
	width: 6.9rem;
	padding: 0 .3rem;
	align-items:center;
	justify-content:space-between;
	font-size: .36rem;
	background-color: #24a8de;
	color: #fff;
	z-index: 9999;
}
.back-btn{
	height: .34rem;
    width: .34rem;
	background: url(../../../images/return.png) no-repeat center;
	background-size: contain;
}
.back-title-right{
	font-size: .36rem;
}
.back-title{
	font-size: .26rem;
	display: flex;
}
.back-title a{
	color: #fff;
	height: .5rem;
	line-height: .5rem;
	padding: 0 .1rem;
	overflow: hidden;
	border: 1px solid #fff;
}
.back-title a:first-child{
	border-radius: .04rem 0 0 .04rem;
}
.back-title a:last-child{
	border-radius: 0 .04rem .04rem 0;
}
.back-title a.active{
	background: #fff;
	color: #24a8de;
}
.agencySeach-content{
	padding-top: 0.88rem;
}
.agencySeach-content li{
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #fff;
	padding: 0 .3rem;
	height: 1rem;
	line-height: 1rem;
	border-bottom: 1px solid #9a9a9a;
}
.noteRecord-date {
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #fff;
	margin-bottom: .2rem;
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
