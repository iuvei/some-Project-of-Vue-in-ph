<template>
	<div class="time-component">
		<div class="time-component-center">
			<div @click="date(-1)">
				<a :class="{no:nomoreLeft}"></a>
			</div>
			<p>{{arrDate[dataIndex] | dateAdd}}</p>
			<div @click="date(1)">
				<a :class="{no:nomoreRight}"></a>
			</div>
		</div>
		<a class="time-component-right" @click="showMask"></a>
	</div>
</template>

<script type="text/ecmascript-6">
	import { dtFormate } from 'api/recommend'
	export default {
		props: ['right','index'],
		data() {
			return {
				arrDate: "",
				nomoreLeft: false,
				nomoreRight: false,
				dataIndex:0,
				weekArr:[]
			}
		},
		computed: {

		},
		mounted() {
			let d = new Date();
			let dayNum = this.getDays();
			let afterDayNum = this.getDays(true);
			let nowDate = d.getDate();
			let nowMonth = d.getMonth() + 1;
			let nowYear = d.getFullYear();
			
			let week =  d.getDay(); 
			let weekArr = [];
			
			let arr = [];	
			if(this.right) {
				this.dataIndex = 0;
				this.nomoreLeft = true;
				for(let i = 1;i < 8;i++){
					let num = week+i;
					if(num>=7){
						num = num-7;
					}
					weekArr.push(num);
				}
				for (let n = 1 ; n<8;n++) {
					arr.push(dtFormate.future(n))
				}				
			} else {
				this.dataIndex = 6;
				
				for(let i = 0;i < 7;i++){
					let num = week-i-1;
					if(num<0){
						num = week-i+7-1;
					}
					weekArr.push(num);
				}
				weekArr.reverse();

				for (let n = 1 ; n<8;n++) {
					arr.push(dtFormate.yestaday(n))
				}
				arr.reverse();
			}
			this.arrDate = arr;
			this.weekArr = weekArr;

			this.$emit('changeDate', this.arrDate[this.dataIndex]);
			

		},	
		methods: {
			showMask(){
				let arr =[];
				for(let i = 0;i<7;i++){
					arr.push(this.getWeek(this.weekArr[i]));
				}
				this.$emit('showMask', arr ,this.arrDate, this.dataIndex);
			},
			date(index) {
				if(this.dataIndex+index>=0 && this.dataIndex+index<=6){
					this.dataIndex = this.dataIndex + index;
					this.$emit('changeDate', this.arrDate[this.dataIndex]);
				}
				
			},
			getWeek(week){ 
				if (week == 0) {  
				        return "星期日";  
				} else if (week == 1) {  
				        return "星期一";  
				} else if (week == 2) {  
				        return "星期二";  
				} else if (week == 3) {  
				        return "星期三";  
				} else if (week == 4) {  
				        return "星期四";  
				} else if (week == 5) {  
				        return "星期五";  
				} else if (week == 6) {  
				        return "星期六";  
				}  
			},
			appendzero(obj) {
				if(obj < 10) {
					return "0" + "" + obj;
				} else {
					return obj.toString();
				}

			},
			getDays(after) {
				var date = new Date();
				var year = date.getFullYear();
				
				var mouth = date.getMonth() + 1;
				if(after){
					mouth--;
				}
				var days;
				if(mouth == 2) {
					days = year % 4 == 0 ? 29 : 28;
				} else if(mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12) {
					days = 31;
				} else {
					days = 30;
				}
				return days;
			},
			
		},
		watch:{
			dataIndex(val){
				if(val==6){
					this.nomoreRight = true;
					this.nomoreLeft = false;
				}else if(val==0){
					this.nomoreLeft = true;
					this.nomoreRight = false;
				}else{
					this.nomoreRight = false;
					this.nomoreLeft = false;
				}
			},
			index: function(index) {				
				this.dataIndex = index;
				this.$emit('changeDate', this.arrDate[this.dataIndex]);
			}
		}
	}
</script>

<style scoped>
	.time-component {
		height: .5rem;
		display: flex;
		align-items: center;
		background: #fff;
	}
	
	.time-component-center {
		margin-left: 2.6rem;
		margin-right: 1.8rem;
		display: flex;
	}
	
	.time-component-center>div {
		width: .5rem;
		height: .5rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.time-component-center p {
		line-height: .5rem;
		font-size: .24rem;
		color: #ff60af;
	}
	
	.time-component-center>div>a {
		width: 0;
		height: 0;
		border-top: .1rem solid transparent;
		border-bottom: .1rem solid transparent;
	}
	
	.time-component-center>div:first-child>a {
		border-right: .18rem solid #f20e0e;
	}
	
	.time-component-center>div:last-child>a {
		border-left: .18rem solid #f20e0e;
	}
	
	.time-component-center>div:first-child>a.no {
		border-right: .18rem solid #ccc;
	}
	
	.time-component-center>div:last-child>a.no {
		border-left: .18rem solid #ccc;
	}
	
	.time-component-right {
		width: .5rem;
		height: .5rem;
		background: url(../../images/rili.png) no-repeat center;
		background-size: .3rem .3rem;
	}
</style>