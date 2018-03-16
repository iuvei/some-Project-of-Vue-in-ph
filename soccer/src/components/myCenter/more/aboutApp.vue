<template>
	<div class="aboutApp">
		<back title="关于皇冠现金网"></back>
		<div class="aboutApp-text">
			<img src="../../../images/yaoqing.jpg" />
			<p>V2.1.0</p>
			<div>Copyright 本APP所有</div>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
	import Back from '@/components/back/back'
	export default {
		components: {
			Back
		},

	}
</script>

<style scoped>
	.aboutApp {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
		display: flex;
		justify-content: center;
		padding-top: 3.4rem;
	}
	.aboutApp-text>p{
		color: #B3B3B3;
		text-align: center;
		font-size: .3rem;
	}
	.aboutApp-text>div{
		position: fixed;
		left: 0;
		right: 0;
		bottom:.5rem;
		color: #B3B3B3;
		text-align: center;
		font-size: .24rem;
	}
	.aboutApp-text{
		line-height: .5rem;
	}
</style>