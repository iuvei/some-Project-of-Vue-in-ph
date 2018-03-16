<template>
  <div class="rechargeSuccess">
    <back title="充值成功"></back>
	<div class="rechargeSuccess-content">
		<p class="title">充值成功，您得充值申请已经提交成功</br>充值金额{{money}}元</p>
		<div>
			<p>充值到账</p>
			<p class="sm">充值成功后，您的余额将在30分钟内更新，请稍后查看</p>
		</div>
	</div>
	<router-link to="/myCenter" class="success-btn">完成</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  export default {
    components: {
      Back
    },
    data() {
      return {
       	money:this.$route.query.money
      }
    },
    mounted() {
		
    },
    methods: {
		
    }
  }
</script>

<style scoped >
.rechargeSuccess{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #fff;
	padding: 1.58rem .3rem 0 .3rem;
}
.rechargeSuccess>a{
	display: block;
	background: #ff8000;
	height: .78rem;
	line-height: .78rem;
	text-align: center;
	color: #fff;
	border-radius: .06rem;
	margin-top: .6rem;
}
.rechargeSuccess-content{
	padding-left: 1rem;
	height: 3.52rem;
	background: url(../../images/ssss.png) no-repeat left top;
	background-size: .8rem 3.2rem;
	font-size: .28rem;
}
.rechargeSuccess-content .title{
	
	margin-bottom: 1.54rem;
}
.rechargeSuccess-content .sm{
	font-size: .26rem;
	color: #ababab;
}
</style>
