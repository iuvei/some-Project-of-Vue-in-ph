<template>
<div class="level">
	<back title="用户等级"></back>
	<iframe src="http://13.124.189.54:8092/zc-intf/rest/v1.0/level" ref="iframe"></iframe>
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
	}
</script>

<style scoped>
	.level{
		padding-top:.88rem;
	}
	.level iframe{
		width: 100%;
		height: 13rem;
		border: none;
	}
</style>