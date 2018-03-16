<template>
<div class="myInfo">
	<div class="back">
	  <a class="back-btn"  @click="$router.goBack()" ></a>
	  <span class="back-title">我的消息</span>
	  <div class="back-title-right"  @click="delAll"></div>
  	</div>
	<div class="nodate" v-if="!items || items.length == 0">
		<img src="../../images/no_data.png"/>
	</div>
	<mt-loadmore :top-method="loadTop" ref="loadmore" >
		<div class="myInfo-content" infinite-scroll-distance="100" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check='false'>
			<div v-for="(item,index) in items" @touchstart="touchstart" @touchmove="touchmove" class="myInfo-list">
				<div class="myInfo-text" @click="toText(item.content)">{{item.title}}</div>
				<div class="myInfo-btnwarp">
					<a @click="cancel($event)">取消</a>
					<a @click="del(item.id,index)">删除</a>
				</div>
			</div>
		</div>    
		<div class="sys-loading" v-if="isShow">
			<mt-spinner type="triple-bounce"></mt-spinner>
		</div>
		<p class="nomore" v-if="nomore&&items">已经全部加载完毕</p>
	</mt-loadmore>	
	<mt-popup
		  v-model="popupVisible"
		  position="right">
		  <slot>		  	
		  	<div class="text-warp">
		  		<div class="back">
					<a class="back-btn"  @click="back" ></a>
					<span class="back-title">消息详情</span>
					<a></a>
				</div>
		  		<p>{{text}}</p>
		  	</div>
		  </slot>
		</mt-popup>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { Indicator ,Toast} from "mint-ui";
import { getUserInfo ,requestOpt } from 'api/recommend';
import { MessageBox } from 'mint-ui';
	export default {
		components: {
			Back
		},
		data() {
			return {
				page:1,
				loading: false,
				items:null,
				nomore:false,
				isShow:false,
				pageX:0,
				text:'',
				popupVisible:false
			}
		},
		mounted() {
			this.getData();
		},
		methods: {
			back(){
				this.popupVisible = false;
			},
			toText(text){
				this.popupVisible = true;
				this.text = text;
			},
			touchstart(e){
  				this.pageX = e.touches[0].pageX; 	
			},
			touchmove(e){				
				let w = e.touches[0].pageX - this.pageX; 					
      			if(w>30){
      				e.target.parentNode.classList.remove('active');
      			}else if(w<-30){
      				e.target.parentNode.classList.add('active');
      			}
			},
			cancel(e){
				e.target.parentNode.parentNode.classList.remove('active');
			},
			delAll(){
				if(!this.items || this.items.length == 0 ){
					Toast('暂无消息');
					return false;
				}
				MessageBox.confirm('确定删除全部消息吗?').then(action => {
				  requestOpt.reqTokenGet('msg/clear',getUserInfo().authToken, res => {
					Indicator.close();
						if(res.data.status) {
							Toast('删除成功');
							this.items = null;
						}
					}, err => {
						Toast('网络链接失败，请稍后再试')
						Indicator.close();
					})
				},() => {
					
				});
			},
			del(id,index){
				Indicator.open();
				let url = `msg/del/id/${id}`;
				requestOpt.reqTokenGet(url,getUserInfo().authToken, res => {
					Indicator.close();
					if(res.data.status) {
						Toast('删除成功');
						this.items.splice(index,1);
						document.getElementsByClassName('myInfo-list')[0].classList.remove('active');
					}
				}, err => {
					Toast('网络链接失败，请稍后再试')
					Indicator.close();
				})
			},
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
				Indicator.open();
				let url = `msg/list/page/${this.page}/count/20`
				requestOpt.reqTokenGet(url,getUserInfo().authToken,res => {
					Indicator.close();
					this.isShow = false;
					 if(res.data.status&&res.data.data.items){
		         	
		         	 let data = res.data.data;
			         if(!flag){
			         	this.items = data.items;
			         	 this.$refs.loadmore.onTopLoaded();
			         }else{
			         	this.items.push.apply(this.items, data.items);
			         }
			         if(this.page == data.totalCount){
			         	this.loading = true;
			         	this.nomore = true;
			         }else{
			         	this.loading = false;
			         	this.nomore = false;
			         }
		         }
		        }, err => {
		        	this.isShow = false;
		        	Indicator.close();
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>
	.nodate{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.nodate img{
		width: 4rem;
		height: 3rem;
	}
	.mint-popup-right{
		width: 100%;
		height: 100%;
	}
	.text-warp .back{
		z-index: 9999;
	}
	.text-warp{
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 999999;
		background: #fff;
		padding: 1rem .2rem 0 .2rem;
	}
	.myInfo{
		padding-top: .88rem;
		
	}
	.mint-loadmore{
		min-height:7rem;
	}
	.myInfo-list{
		display: flex;
		width: 10.5rem;
		transition: all .8s;
	}
	.myInfo-list.active{
		transform: translate3d(-3rem, 0px, 0px);
	}
	.myInfo .myInfo-text{
		height: 1rem;
		line-height: 1rem;
		width: 7.3rem;
		padding-left: .2rem;
		border-bottom: 1px solid #D0D0D0;
		background: url(../../images/arrow_right.png) no-repeat right .2rem center #fff;
		background-size: .2rem;    
	}
	.myInfo .myInfo-btnwarp{
		width: 3rem;
		display: flex;
	}
	.myInfo .myInfo-btnwarp a{
		width: 50%;
		line-height: 1rem;
		text-align: center;
		color: #fff;
		background: #C0C0C0;
	}.myInfo .myInfo-btnwarp a:last-child{
		background: red;
	}
	.nomore{
		margin-top: .1rem;
		text-align: center;
		color: #7E8C8D;
	}
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
		z-index: 999;
	}
	.back-btn{
		height: .34rem;
	    width: .34rem;
		background: url(../../images/return.png) no-repeat center;
		background-size: contain;
	}
	.myInfo .back-title-right{
		width: .4rem;
		height: .4rem;
		background: url(../../images/laji.png) no-repeat ;
		background-size: .4rem;
	}
</style>