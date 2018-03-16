<template>
	<div class="sysMmessage">
		<back title="最新中奖榜"></back>
		<mt-loadmore :top-method="loadTop" ref="loadmore"  >
			<p class="sysMmessage-title">
				<span>用户名</span>
				<span>中奖金额(元)</span>
				<span>比赛</span>
			</p>
			<ul class="sysMmessage-content" infinite-scroll-distance="100" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check='false'>
				<li v-for="item in items">
					<p>{{item.userName}}</p>
					<p class="money">{{parseFloat(item.amount.replace(/,/ig,"")).toFixed(2)}}</p>
					<p v-if="item.matchName.indexOf('|') == -1">{{item.matchName}}</p>
					<div v-if="item.matchName.indexOf('|') != -1">
						<div>{{item.matchName | matchNameH}}</div>
						<div>{{item.matchName | matchNameA}}</div>
					</div>
				</li>
			</ul>    
			<div class="sys-loading" v-if="isShow">
				<mt-spinner type="triple-bounce"></mt-spinner>
			</div>
			<p class="nomore" v-if="nomore">已经全部加载完毕</p>
		</mt-loadmore>		
	</div>
</template>

<script>
	import Back from '@/components/back/back'
	import { requestOpt} from 'api/recommend';
	export default {
		components: {
			Back
		},
		data() {
			return {
				page:1,
				loading: false,
				items:[],
				nomore:false,
				isShow:false
			}
		},
		computed: {

		},
		mounted() { 
					
			this.getData();
		},
		methods: {
			loadMore(){
				this.getData(true);
			},
			loadTop(){
				this.page = 1;
				this.getData();
			},
			getData(flag){
				if(flag){
					this.page++;
					this.loading = true;
					this.isShow = true;
				}
				let url = `sysMessage/winning/list/page/${this.page}/count/20`
				requestOpt.reqGet(url, res => {
		         if(res.data.status){
		         	this.isShow = false;
		         	 let data = res.data.data;
			         if(!flag){
			         	this.items = data.items;
			         	 this.$refs.loadmore.onTopLoaded();
			         }else{
			         	this.items.push.apply(this.items, data.items);
			         }
			         if(this.page >= data.totalCount){
			         	this.loading = true;
			         	this.nomore = true;
			         }else{
			         	this.loading = false;
			         	this.nomore = false;
			         }
		         }
		        }, err => {
		        	this.isShow = false;
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>
.sysMmessage{
	padding-top: .88rem;
}
.sys-loading {
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
	}
.sysMmessage-title{
	display: flex;
	justify-content: space-around;
	text-align: center;
	align-items: center;
	height: .8rem;
	background: #fafafa;
}
.sysMmessage-title span{
	width: 33.33%;
	flex-shrink: 1;
}
.sysMmessage-content .money{
	color: red;
}
.sysMmessage-content li{
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;
	height: 1rem;
	border-bottom: 1px solid #d9d9d9;
	background: #fff;
	align-items: center;
}
.sysMmessage-content li p{
	width: 33.33%;
	flex-shrink: 1;
	display: flex;
	align-items: center;
	justify-content: center;
}
.sysMmessage-content li>div{
	box-sizing: border-box;
	width: 33.33%;
	flex-shrink: 1;
	padding-left: .8rem;
	background: url(../../images/VS.png) no-repeat .2rem center;
	background-size: .5rem;
}
.sysMmessage-content li>div>div{
	width: 1.66rem;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.sysMmessage-content li div i{
	color: red;
	font-size: .22rem;
	margin: 0 .02rem;
}
</style>