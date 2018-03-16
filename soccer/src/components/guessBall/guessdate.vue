<template>
	<div>
		<div class="guess-time-warp">
			<a v-for="(time,index) in arr" @click="choseTime(index,time)" :class="{active: index == atciveIndex}">{{time | guessTime}}</a>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
import { dtFormate } from 'api/recommend'
	export default {
		
		props:[],
		data() {
			return {
				arr:[],
				atciveIndex:0
			}
		},
		mounted() {
			let arr = [];
		
			for (let i = 0 ; i<5;i++) {
				arr.push(dtFormate.future(i))
			}
			arr.push('1970010100:00:00');
			this.arr = arr;
			
		},
		methods: {
			choseTime(index,time){
				this.atciveIndex = index;
				this.$emit('choseTime',time);
			}

		}
	}
</script>

<style scoped>
	.guess-time-warp{
		/*position: fixed;*/
		display: flex;
		/*top: 2.88rem;
		left: 0;
		width: 100%;
		z-index: 99;*/
		align-items: center;
		background: #00638c;
		padding-left: .2rem;
		height: .6rem;
	}
	.guess-time-warp a{
		color: #fff;
		height: .3rem;
		line-height: .3rem;	
		padding:0 .12rem;
		border-right: 1px solid #fff;
		white-space:nowrap;
	}
	.guess-time-warp a:last-child{
		border-right:none;
	}
	.guess-time-warp a.active{
		color: #fff000;
	}
</style>