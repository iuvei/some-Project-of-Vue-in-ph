<template>
<div class="level">
	<back title="新手帮助"></back>
	<iframe src="http://13.124.189.54:8092/zc-intf/help/qa.html " ref="iframe"></iframe>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { Indicator } from "mint-ui";
	export default {
		components: {
			Back
		},
		mounted() {
			Indicator.open();
			this.$refs.iframe.onload = function(){
				Indicator.close();
			}
		},
		destroyed(){
			Indicator.close();
		}
	}
</script>

<style scoped>
	.level{
		padding-top:.88rem;
		background: #fff;
	}
	.level iframe{
		width: 100%;
		min-height: 13rem;
		border: none;
	}
</style>