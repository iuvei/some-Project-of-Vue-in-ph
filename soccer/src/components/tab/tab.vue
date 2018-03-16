<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/home">
      <i class="icon-home"></i>
      <span class="tab-link" >首页</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/score" :class="{active : score }">
      <i class="icon-score" ></i>
      <span class="tab-link" >比分</span>
    </router-link>

    <router-link tag="div" class="tab-item" to="/guessball/roll-football-duying" :class="{active : ball }">
      <i class="icon-guess-ball" ></i>
      <span class="tab-link" >猜球</span>
      </router-link>

    <router-link tag="div" class="tab-item"  to="/discount">
      <i class="icon-discount" ></i>
      <span class="tab-link" >优惠</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/myCenter">
      <i class="icon-my-center" ></i>
      <span class="tab-link" >我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  	props:['ball','score'],
    data() {
      return{
      
      }
    },
    mounted(){

    },
    methods: {

    }
  }

</script>

<style scoped>
  .tab{
    display: flex;
    height: .88rem;
    width: 7.5rem;
    position: fixed;
    bottom: 0;
    text-align: center;
    z-index: 99;
    border-top:1px solid #d8d8d8;
    background-color: #f5f5f5;
    padding-top: .12rem;
  }
	.tab-item{
	  flex: 1;
	}
	 .tab i{
		display: block;
		margin-left: .55rem;
		margin-bottom: .1rem;
    height: .4rem;
    width: .4rem;
  }
  .tab span{
  	display: block;
    color: #cccccc;
    text-align:center;
    height: .4rem;
    font-size: .24rem;
  }
  .tab-item.router-link-active ,.tab-item.active span{
		color: #009bdb;
	}
  .icon-home{
  	background: url(../../images/shouye.png) no-repeat center;
  	background-size: contain;
  }
  .icon-score{
  	background: url(../../images/bifen.png) no-repeat center;
  	background-size: contain;
  }
  .icon-guess-ball{
  	background: url(../../images/caiqiu.png) no-repeat center;
  	background-size: contain;
  }
  .icon-discount{
  	background: url(../../images/tuijian.png) no-repeat center;
  	background-size: contain;
  }
  .icon-my-center{
  	background: url(../../images/wo.png) no-repeat center;
  	background-size: contain;
  }
	.router-link-active .icon-home{
		background: url(../../images/shouye_highlight.png) no-repeat center;
  	background-size: contain;
	}
  .router-link-active .icon-score,.tab-item.active .icon-score{
		background: url(../../images/bifen_highlight.png) no-repeat center;
  	background-size: contain;
	} 
  .router-link-active .icon-guess-ball,.tab-item.active .icon-guess-ball{
		background: url(../../images/caiqiu_highlight.png) no-repeat center;
  	background-size: contain;
	}
	.router-link-active .icon-discount{
		background: url(../../images/tuijian_hightlight.png) no-repeat center;
  	background-size: contain;
	}
	.router-link-active .icon-my-center{
		background: url(../../images/wo_hightlight.png) no-repeat center;
  	background-size: contain;
	}    
 
</style>
