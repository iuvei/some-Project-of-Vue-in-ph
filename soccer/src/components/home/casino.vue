<template>
	<div class="casino">
		<back title="娱乐场"></back>
		<div class="casino-warp">
			<a :href="item.url" v-for="item in data" target="_blank">
				<img :src="item.imageUrl"/>
			</a>
		</div>
	</div>
</template>

<script>
	import Back from '@/components/back/back'
	import { requestOpt} from 'api/recommend';
	import { Indicator } from "mint-ui";
	export default {
		components: {
			Back
		},
		data() {
			return {
				data:""
			}
		},
		computed: {

		},
		mounted() { 
					
			this.getData();
		},
		methods: {
			getData(){
				Indicator.open();
				requestOpt.reqGet('disport/list', res => {
					Indicator.close();
		         if(res.data.status){
					this.data = res.data.data;	         
		         }
		        }, err => {
		        	Indicator.close();
		          Toast('网络链接失败，请稍后再试')
		        })	
			}
		}
	}
</script>

<style scoped>
.casino{
	padding-top: .88rem;
}
.casino-warp{
	padding: .2rem;
	display: flex;
	flex-wrap: wrap;
}
.casino-warp a:nth-child(odd){
	margin-right: .2rem;
}
.casino-warp a{
	width: 3.45rem;
	height: 3.45rem;
}
.casino-warp a img{
	width: 100%;
	height: 100%;
}
</style>