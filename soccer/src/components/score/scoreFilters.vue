<template>
	<div class="scoreFilters">
		<div class="back">
			<a class="back-btn"  @click="back" ></a>
			<span class="back-title">赛事筛选</span>
			<div class="back-title-right"  @click="sureBtn">确定</div>
		</div>
		<ul class="scoreFilters-content-tab">
			<li :class="{ active: 0 == subType}" @click="toggleTab(0)">全部</li>
			<li :class="{ active: 0 != subType}" @click="toggleTab(1)">热门</li>
		</ul>
		<mt-index-list class="list-warp">
		  <mt-index-section :index="item.pinyin" v-for="item in listData"  :key="item.pinyin" >
		    	<ul class="section-item">
		    		<li v-for="data in item.filter" @click="choseItem(data)" :key="data.id" :class="{ no : idObj[data.id]}"><span>{{data.title}}</span><span>{{data.nums}}场</span></li>
		    	</ul>
		  </mt-index-section>
		</mt-index-list>
		<ul class="scoreFilters-chose">
			<li @click="choseAll">全选</li>
			<li @click="choseAll(true)">反选</li>
		</ul>
	</div>
</template>

<script>
	import Back from '@/components/back/back'
	import { Indicator ,Toast} from "mint-ui";
	import { requestOpt, getUserInfo ,getToday} from 'api/recommend'
	
	export default {
		props:['query'],
		data() {
			return {
				listData: [],
				subType:0,
				idObj:{},
				idAll:[],
			}
		},
		mounted(){
			this.getData();
		},
		methods: {
			back(){
				this.$emit('close');
			},
			toggleTab(val){
				this.subType = val;
				this.idObj = {};
				this.getData();
			},
			sureBtn(){
				let idObj = this.idObj;
				let idAll = this.idAll;
				let newId = [];
				for (let i = 0 ; i < idAll.length ; i++) {
					if(!idObj[idAll[i]]){
						newId.push(idAll[i])
					}
				}
				let id = newId.join(',');
				if(id === ''){
					Toast("请最少选择一个联赛");
					return false;
				}
				this.$emit('close',id);
			},
			getData(){		
				Indicator.open();
				let url = ''
				let type = this.query.type;
				type == 1 ? type = 7 : '';
				if(this.query.isBall){
					url = `match/ball/filter/type/${type}/subType/${this.subType}/date/${this.query.date || getToday()}`;
					
				}else{
					url = `match/filter/type/${type}/subType/${this.subType}/date/${this.query.date || getToday()}`;
				}				
				requestOpt.reqGet(url, res => {
					let arr = res.data.data;
					let idAll = [];
					for(let i in arr){
						for(let n in arr[i].filter){
							idAll.push(arr[i].filter[n].id)
						}
					}
					this.idAll = idAll;
		        	this.listData = res.data.data;
		         	Indicator.close();
		        }, err => {
		          Toast('网络链接失败，请稍后再试')
		        })						
			},
			choseAll(flag){
				let arr = this.idAll;
				if(flag === true){					
					for(let i in arr){
						this.$set(this.idObj, arr[i], true);						
					}
				}else{
					for(let i in arr){
						this.$delete(this.idObj, arr[i], true);						
					}	
				}
			},
			choseItem(data){
				if(this.idObj[data.id]){
					this.$delete(this.idObj, data.id);
				}else{
					this.$set(this.idObj, data.id, true);
				}
			}
		}
	}
</script>

<style scoped>
	.back{
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		height: .88rem;
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
	    cursor: pointer;
		background: url(../../images/return.png) no-repeat center;
		background-size: contain;
	}
	.list-warp{
		margin-top: 1.68rem;
	}
	.list-warp>ul,.mint-indexlist-content{
		padding-bottom: .88rem;
	}
	.scoreFilters-chose{		
		position: fixed;
		bottom: 0;
		left: 0;
		height: .88rem;
		width: 100%;
		background: #fff;
		z-index: 99;
		border-top: 1px solid #ddd;
		display: flex;
	}
	.scoreFilters-chose li{
		width: 50%;
		background: #fff;
		color: #333;
		font-size: .3rem;
		text-align: center;
		height: .88rem;
		line-height: .84rem;
		color: #fa6d1f;
		cursor: pointer;
	}
	.scoreFilters-chose li:first-child{
		border-right: 1px solid #ddd;
	}
	.scoreFilters-content-tab{
		position: fixed;
		top: .88rem;
		left: 0;
		display: flex;
		width: 100%;
		background: #fff;
		height: .8rem;
		z-index: 99;
	}
	.scoreFilters-content-tab li{
		flex-grow: 1;
		padding: .15rem 0;
		background: #fff;
		border-bottom: 1px solid #ddd;
		color: #333;
		font-size: .3rem;
		text-align: center;
		height: .5rem;
	}
	.scoreFilters-content-tab li.active {
		color: #24a8de;
		border-bottom: 2px solid #24a8de;
	}
	.section-item{
		background: #fff;
		display: flex;
		flex-wrap :wrap;
		padding: .2rem .1rem .2rem 0;
		
	}
	.section-item>li{
		width: 2rem;
		height: .96rem;
		border: 1px solid #f52c34;
		border-radius: .05rem;
		margin-left: .24rem;
		text-align: center;
		margin-bottom: .2rem;
		cursor: pointer;
	}
	.section-item>li>span:first-child{
		display: block;
		margin: .1rem;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.section-item>li.no{
		color: #ddd;
		border: 1px solid #ddd;
	}
</style>