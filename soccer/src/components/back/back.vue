
<template>
  <div class="back">
	  <a class="back-btn"  @click="$router.goBack()" ></a>
	  <span class="back-title" v-text="title"></span>
	  <div class="back-title-right"  @click="backRight">{{btn}}</div>
  </div>
</template>

<script>
  export default {
    props: [
      'title', 'btn'
    ],
    methods: {
     backRight(){
     	this.$emit('backRight');
     }
    }
  }
</script>

<style scoped >
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
		background: url(../../images/return.png) no-repeat center;
		background-size: contain;
	}
.back-title-right{
	font-size: .32rem;
}

</style>
