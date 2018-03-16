<template>
<div class="guessBall">
	<div class="guessBall-herder">
		<a :class="{active : topActive == 1}"  @click="changTop(1)">滚球</a>
		<a :class="{active : topActive == 2}" @click="changTop(2)">今日赛事</a>
		<a :class="{active : topActive == 3}" @click="changTop(3)">早盘</a>
	</div>
	<div class="guessBall-tab">
		<div class="guessBall-tab-top">
			<a :class="{active : middleActive == 1}" @click="changMiddle(1)">足球({{footballNum}})</a>
			<a :class="{active : middleActive == 2}" @click="changMiddle(2)">篮球/美式足球({{basketballNum}})</a>			
		</div>
		<div class="guessBall-tab-middle">
			<div :class="{big :topActive!=1&&middleActive==1}">				
				<a :class="{active : bottomActive == 1}" @click="changBottom(1)">独赢&让球&大小&单双</a>
				<a v-if="middleActive == 1" :class="{active : bottomActive == 2}" @click="changBottom(2)">波胆</a>
				<a v-if="middleActive == 1" :class="{active : bottomActive == 3}" @click="changBottom(3)">总入球</a>
				<a v-if="middleActive == 1" :class="{active : bottomActive == 4}" @click="changBottom(4)">半场/全场</a>
				<a v-if="topActive != 1" :class="{active : bottomActive == 5}" @click="changBottom(5)">综合过关</a>
				<a v-if="topActive != 1" :class="{active : bottomActive == 6}" @click="changBottom(6)">冠军</a>
				<a v-if="middleActive == 1" :class="{active : bottomActive == 7}" @click="changBottom(7)">赛果</a>	
			</div>	
		</div>
		<div class="guessBall-tab-bottom">
			<span>{{['滚球','今日赛事','早盘'][topActive-1]}} - </span>
			<span>{{['足球','篮球/美式足球'][middleActive-1]}} - </span>
			<span>{{['独赢&让球&大小&单双','波胆','总入球','半场/全场','综合过关','冠军','赛果'][bottomActive-1]}}</span>
		</div>
	</div>
	<div class="guessBall-content">
		<router-view  :orderType="orderType" :path="path" @choseTime="choseTime" @refresh="getNum"></router-view>
	</div>
 	<tab ball='true'></tab>
 </div>
</template>

<script type="text/ecmascript-6">
import Tab from '@/components/tab/tab'
import DuyingBasket from '@/components/guessBall/duying-basket'
import './guessBall-common.css'
import { requestOpt ,getToday } from 'api/recommend'
	export default {
		components: {
			Tab,
			DuyingBasket,
		},
		data() {
			return {
				topActive:1,
				middleActive:1,
				bottomActive:1,
				orderType:'',
				path:this.$route.path,
				footballNum:0,
				basketballNum:0,
				date:''
			}
		},
		created(){
			if(this.$route.path.indexOf('roll') != -1){
				this.topActive = 1;
				this.orderType = 6;
			}else if(this.$route.path.indexOf('today') != -1){
				this.topActive = 2;
				this.orderType = 2;
			}else if(this.$route.path.indexOf('morning') != -1){
				this.topActive = 3;
				this.orderType = 1;
			}			
			if(this.$route.path.indexOf('football') != -1){
				this.middleActive = 1
			}else{
				this.middleActive = 2
			}
			if(this.$route.path.indexOf('duying') != -1){
				this.bottomActive = 1
			}else if(this.$route.path.indexOf('bodan') != -1){
				this.bottomActive = 2
			}else if(this.$route.path.indexOf('zongruqiu') != -1){
				this.bottomActive = 3
			}else if(this.$route.path.indexOf('quanbanchang') != -1){
				this.bottomActive = 4
			}else if(this.$route.path.indexOf('zonghe') != -1){
				this.bottomActive = 5
			}else if(this.$route.path.indexOf('guanjun') != -1){
				this.bottomActive = 6
			}else if(this.$route.path.indexOf('shaiguo') != -1){
				this.bottomActive = 7 	
			}
			this.getNum();
		},
		mounted() {
			
		},
		
		methods: {
			choseTime(time){
				this.date = time;
				this.getNum();
			},
			getNum(){
				let url = `match/count/type/${this.orderType == 1? 7 : this.orderType}/date/${this.date || getToday()}/subType/0/leagueIDs/0/stype/0`;
				let url1 = `match/counts/ball/type/${this.orderType == 1? 7 : this.orderType}/date/${this.date || getToday()}/subType/0/leagueIDs/0/stype/0`;
				requestOpt.reqGet(url, res => {					
					if(res.data.status) {
						this.footballNum = res.data.data;
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
				requestOpt.reqGet(url1, res => {					
					if(res.data.status) {
						this.basketballNum = res.data.data;
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			},
			changTop(num){
				let orderArr = [6,2,1];
				let topArr = ['roll','today','morning'];
				this.topActive = num;
				this.middleActive = 1;
				this.bottomActive = 1;
				this.orderType = orderArr[num-1];
				let url = `/guessball/${topArr[this.topActive-1]}-football-duying`;
				this.path = url;
				this.$router.push({ path:url});
				if(num != 3){
					this.date = '';
				}
				this.getNum()
			},
			changMiddle(num){
				this.date = '';
				let topArr = ['roll','today','morning'];
				let middleArr = ['football','basketball'];
				this.middleActive = num;
				this.bottomActive = 1;
				let url = `/guessball/${topArr[this.topActive-1]}-${middleArr[num-1]}-duying`;
				this.path = url;
				this.$router.push({ path:url});
				if(this.topActive == 3){
					this.getNum();
				}
			},
			changBottom(num){
				this.date = '';
				let topArr = ['roll','today','morning'];
				let middleArr = ['football','basketball'];
				let bottomArr = ['duying','bodan','zongruqiu','quanbanchang','zonghe','guanjun','shaiguo'];
				this.bottomActive = num;
				let url = `/guessball/${topArr[this.topActive-1]}-${middleArr[this.middleActive-1]}-${bottomArr[num-1]}`;
				this.path = url;
				this.$router.push({ path:url});
			}
		}
	}
</script>

