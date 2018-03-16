<template>
	<div>
		<div class="guessBall-content-title">
			<div class="guessBall-page-warp" @click="showPage">
				<p>总{{totalCount}}页</p>
				<div><span>{{dataIndex+1}}</span></div>
				<i></i>
			</div>
			<div class="guessBall-title-btn">
				<a @click="choseOrder">{{text[orderIndex]}}</a>
				<a @click="choseItem" v-if="!noFilter">选择联赛(<span style="color: #FFF000;">{{len}}</span>)</a>
				<a class="guessBall-title-time" @click="refresh"><img src="../../images/shuaxin.png"/>{{time}}</a>
			</div>
		</div>
		<transition name="fade">
			<div class="guessBall-mask" v-if="isGuessWarp" @click="closeMask($event)">
				<div class="guessBall-warp-content"  v-if="type===0">
					<div>请选择页数</div>
					<ul>
						<li v-for="(item,index) in dataArr" :class="{active : dataIndex == index }" @click="choseData(index)">第{{item}}页</li>
					</ul>
				</div>
				<div class="guessBall-warp-content"  v-if="type===1">
					<div>请选择排序方式</div>
					<ul>
						<li v-for="(item,index) in dataArr" :class="{active : orderIndex == index }" @click="choseData(index)">{{item}}</li>
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
import { getToday } from 'api/recommend'
import scoreFilters from '@/components/score/scoreFilters'
	export default {
		components: {
			scoreFilters
		},
		props:['totalCount','orderType','path','date','noFilter','isBall'],
		data() {
			return {
				isEye:false,
				type:"",
				inputText:"",
				isClose:false,
				isGuessWarp:false,
				dataIndex:0,
				time:0,
				setTime:0,
				dataArr:'',
				orderIndex:0,
				text:['按时间顺序','按联赛顺序'],
				len:'全部',
				timer:"",
				popupVisible:false,
				query:""
			}
		},
		watch: {
		  $route (data, oldData) {
		  	this.len = '全部';
		    if(this.orderType == 6){
				this.setTime = 30;
				this.time = 30;
			}else{
				this.setTime = 180;
				this.time = 180;
			}
		  },
		},
		destroy () {
		 window.clearInterval(this.timer)
		},
		mounted() {			
			this.timer = setInterval(res=>{
				this.time--;
				if(this.time===0){
					this.$emit('refresh');
					this.time = this.setTime;
				}
			},1000)
			if(this.orderType == 6){
				this.setTime = 30;
				this.time = 30;
			}else{
				this.setTime = 180;
				this.time = 180;
			}
		},
		methods: {
			close(id){
				this.popupVisible = false;
				if(id){	
					this.len = id.split(',').length;
					this.$emit('filters',id);
				}
			},
			refresh(falg){
				if(falg===true){
					
					this.len = '全部';
				}
				this.$emit('refresh');
				this.time = this.setTime;
			},
			page(){
				this.dataIndex = 0;
			},
			choseItem(){		
				
				this.query = {type: this.orderType ,date: this.date || getToday(),isBall: this.isBall};
				this.popupVisible = true;
			},
			choseOrder(){
				this.type = 1;
				this.dataArr = ['按时间顺序','按联赛顺序'];
				this.isGuessWarp = true;			
			},
			showPage(){
				this.type = 0;
				this.dataArr = this.totalCount;
				this.isGuessWarp = true;				
			},
			closeMask(event){
				if(event.target.className == 'guessBall-mask'){
					this.isGuessWarp = false;
				}				
			},
			choseData(index){
				
				if(this.type ===0){
					this.dataIndex = index;
					this.$emit('changeGage',index+1);
				}else{
					this.orderIndex = index;
					this.$emit('changeOrder',index);
				}
				
				this.isGuessWarp = false;
			},

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
	.guessBall-content-title{
		position: fixed;
		top: 2.3rem;
		left: 0;	
		width: 6.78rem;
		height: .44rem;
		line-height: .44rem;
		padding: .1rem .36rem;
		background: #007db0;
		display: flex;
		justify-content: space-between;
		color: #fff;
		z-index: 99;
	}
	.guessBall-content-title div{
		display: flex;
	}
	.guessBall-page-warp{
		position: relative;
	}
	.guessBall-page-warp>div{
		width: .4rem;
		height: .42rem;
		line-height: .42rem;
		padding-right: .2rem;
		background: #fff;
		color: #000;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: .1rem;
	}
	.guessBall-page-warp>i{
		position: absolute;
		right: .1rem;
		top: .14rem;
		width: 0;
	    height: 0;
	    border-left: .08rem solid transparent;
	    border-right: .08rem solid transparent;
	    border-top: .12rem solid #ff9600;
	}
	.guessBall-title-btn {
		display: flex;
		
	}
	.guessBall-title-btn a{
		margin-left: .16rem;
		
		padding: 0.02rem .06rem;
		background: #00afd0;
		border-radius: .05rem;
	}
	.guessBall-mask{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0,0,0,.6);
		z-index: 99999;
	}

	.guessBall-warp-content{
		position: fixed;		
		bottom: 0;
		left: 0;
		right: 0;
		max-height: 6.4rem;
		background: #fff;
	}
	.guessBall-warp-content>div{
		height: .8rem;
		background: #f6f8f7;
		text-align: center;
		line-height: .8rem;
	}
	.guessBall-warp-content>ul{
		max-height: 5.6rem;
		overflow: auto;
	}
	.guessBall-warp-content li{
		height: .8rem;
		line-height: .8rem;
		text-align: center;
		
	}
	.guessBall-warp-content li.active{
		color: #FC823C;
		background: url(../../images/time-ok.png) no-repeat right 1.8rem center;
		background-size: .3rem .3rem;
	}
	.guessBall-title-time{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff000;
		width: .76rem;
		padding: 0 .2rem;
	}
	.guessBall-title-time img{
		width: .28rem;
		height: .28rem;
		margin-right: .06rem;
	}
	.fade-enter-active, .fade-leave-active {
  	 transition: opacity .4s
	}
	.fade-enter, .fade-leave-active {
	   opacity: 0;
	}
</style>