<template>
<div class="discount">
	<div class="discount-title">专享活动</div>
	<mt-loadmore :top-method="loadTop" ref="loadmore">
		<div class="discount-content">
			<div v-for="item in data" class="discount-item" @click="linkTo(item.content,item.title)">
				<div class="img-warp">
					<img :src="item.imageUrl"/>
				</div>
				<div class="text-warp">
					<p>{{item.title}}</p>
					<p class="discount-time">活动时间:{{item.startDate | discountData}}至{{item.endDate | discountData}}</p>
				</div>
			</div>
		</div>
	</mt-loadmore>		
	<tab></tab>
 </div>
</template>

<script type="text/ecmascript-6">
import Tab from '@/components/tab/tab'
import Back from '@/components/back/back'
import { Indicator } from "mint-ui";
import { requestOpt, getUserInfo ,getToday } from 'api/recommend'
	export default {
		components: {
			Tab
		},
		data() {
			return {
				data:[],
			}
		},
		computed: {

		},
		mounted() {
			Indicator.open();
			this.getData();
		},
		methods: {
			linkTo(content,title){
				this.$router.push({ path:'/discountActive' , query: { title : title , src : content} });
			},
			loadTop(){
				this.getData();
			},
			getData(){				
				requestOpt.reqGet('activity', res => {
					Indicator.close();
		         if(res.data.status){
		         	let data = res.data.data;
			        this.data = data;
			        this.$refs.loadmore.onTopLoaded();
		         }
		        }, err => {
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>

.discount-warp{
	padding: 1.08rem .2rem .2rem .2rem;
}
.mint-popup-3{
	width: 100%;
    height: 100%;
    background-color: #fff;
    overflow: auto;
}
.discount{
	padding-top: .88rem;

}
.discount-title{
	position: fixed;
    top: 0;
    left: 0;
    height: .88rem;
    line-height: .88rem;
    text-align: center;
    width: 6.9rem;
    padding: 0 .3rem;
    font-size: .36rem;
    background-color: #24a8de;
    color: #fff;
}
.discount-content{
	min-height: 5rem;
	padding-bottom: 1rem;
}
.discount-item{
	background: #fff;
	height: 3.4rem;
	margin-bottom: .2rem;
}
.discount-item .img-warp{
	height: 2.58rem;
}
.discount-item .text-warp{
	padding-left: .42rem;
	background: url(../../images/arrow_right.png) no-repeat right .3rem center;
	background-size: .2rem .3rem;
}
.discount-item .text-warp p:first-child{
	color: #323232;
	font-size: .26rem;
	margin-top: .1rem;
}
.discount-item img{
	width: 100%;
	height: 100%;
}
.discount-time{
	font-size: .24rem;
	color: #999999;
}
.discount 	iframe{
		width: 100%;
		border: none;
	}
</style>