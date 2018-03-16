<template>
	<div class="agencyMoney">
		<back title="代理佣金"></back>
 		<div class="agencyMoney-content">		 	
			<div class="noteRecord-date">
				<div>从<img src="../../../images/rili.png" /><span @click="openStart">{{starText}}</span></div>
				<div>至<img src="../../../images/rili.png" /><span @click="openEnd">{{endText}}</span></div>
				<a @click="getDate">查询</a>
			</div>	
			<div class="all-money">
				<div>
					<p>佣金（元）</p>
					<p>{{amount}}</p>
				</div>
				<div>
					<p>投注金额（元）</p>
					<p>{{fee}}</p>
				</div>
			</div>
			<mt-loadmore :top-method="getDate" ref="loadmore" style="min-height: 8rem;"> 							
				<div class="agencyMoney-title">
					<span>用户名</span>
					<span>投注金额</span>
					<span>佣金（元）</span>
				</div>
				<div class="no-data" v-if="!listData">
					<img src="../../../images/no_data.png"/>
				</div>
				<ul class="agencyMoney-list">
					<li v-for="list in listData">
						<span>{{list.username}}</span>
						<span>{{list.amount}}</span>
						<span>{{list.fee}}</span>
					</li>
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
import Back from '../../back/back.vue';
import { requestOpt ,getUserInfo ,setUserInfo,dtFormate} from 'api/recommend'
import { Indicator, Toast } from "mint-ui";
export default {
	components: {
		Back
	},
	data() {
		return {
			startime:dtFormate.yestaday(7,true),
			endtime:dtFormate.date(),
			endDate:new Date(),
			starText:dtFormate.yestaday(7,true),
			endText:dtFormate.date(),
			listData:"",
			amount:"",
			fee:""
		}
	},
	computed: {

	},
	mounted() {
		this.getDate();
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
		getDate(){
			Indicator.open();
			let startDate = this.starText.replace(/[-]/g, "");
			let endDate = this.endText.replace(/[-]/g, "");
			let url = `agent/check/startDate/${startDate}/endDate/${endDate}`;
			requestOpt.reqTokenGet(url, getUserInfo().authToken, res => {
				Indicator.close();
				if(res.data.status){
					this.listData = res.data.data.users;
					this.amount = res.data.data.amount;
					this.fee = res.data.data.fee;
				}
				this.$refs.loadmore.onTopLoaded();
			}, err => {
				Indicator.close();
				
			})
		},
	}
}</script>

<style scoped>
.agencyMoney-title{
	height: .8rem;
	background: #fff;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-top: .2rem;
}
.agencyMoney-title span ,.agencyMoney-list span{
	width: 33.3%;
	text-align: center;
}
.agencyMoney .no-data{
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.agencyMoney .no-data img{
	width: 5rem;
}
.all-money{
	display: flex;
}
.all-money>div{
	width: 2.2rem;
	margin-left: .3rem;
	height: .6rem;
	padding: .3rem 0 .3rem 1.1rem;
}
.all-money>div:first-child{
	background: url(../../../images/zhanghu.png) no-repeat left .2rem center #fff;
	background-size: .6rem .6rem;
}
.all-money>div:last-child{
	background: url(../../../images/login_money.png) no-repeat left .2rem center #fff;
	background-size: .6rem .6rem;
}
.agencyMoney-content{
	padding-top: .88rem;
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
