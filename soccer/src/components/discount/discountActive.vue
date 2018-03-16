<template>
<div class="discountActive">
	<back :title="title"></back>
	<iframe :src="src" ref="iframe"></iframe>
 </div>
</template>

<script type="text/ecmascript-6">
import Back from '@/components/back/back'
import { Indicator } from "mint-ui";
	export default {
		components: {
			Back
		},
		data() {
			return {
				src:this.$route.query.src,
				title:this.$route.query.title
			}
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
	.discountActive{
		padding-top:.88rem;
		background: #fff;
	}
	.discountActive iframe{
		width: 100%;
		min-height: 12.4rem;
		border: none;
	}
</style>