<template>
<div class="service">
	<back title="在线客服"></back>
	<iframe :src="src" ref="iframe"></iframe>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { requestOpt} from 'api/recommend';
import { Indicator } from "mint-ui";
	export default {
		components: {
			Back
		},
		data() {
			return {
				src:""
			}
		},
		mounted() {
			Indicator.open();
			requestOpt.reqGet('param/service', res => {
	         if(res.data.status){
				this.src = res.data.data;
				this.$refs.iframe.onload = function(){
					Indicator.close();
				}
	         }
	       }, err => {
	       	  Indicator.close();
	          Toast('网络链接失败，请稍后再试')
	       })				
		},
		destroyed(){
			Indicator.close();
		}
	}
</script>

<style scoped>
	.service{
		padding-top:.88rem;
		background: #fff;
	}
	.service iframe{
		width: 100%;
		min-height: 13rem;
		border: none;
	}
</style>