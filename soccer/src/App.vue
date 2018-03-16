<template>
  <div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
	  </keep-alive>
	  <router-view v-if="!$route.meta.keepAlive"></router-view>
	  <mt-popup
  	v-model="popupVisible">
   	<div class="notice-warp" v-if="content">
   		<p>公告</p>
   		{{content}}
   		<i @click="popupVisible = false">x</i>
   	</div>
	</mt-popup>
  </div>
</template>

<script>
	import axios from 'axios'
	import { Indicator ,Toast} from "mint-ui";
	import { requestOpt ,setUserInfo} from 'api/recommend'
export default {
	data() {
			return {
				popupVisible:false,
				content:''
			}
		},
  mounted(){
  	axios.interceptors.response.use( response => {
			if(response.data.code == 403){
				Indicator.close();
				this.$router.push('/myCenter'); 
				setUserInfo(null);	
				Toast("登陆信息失效，请重新登陆")
			}
			   return response;
			}, function (error) { 
			    return Promise.reject(error);
			});
			requestOpt.reqGet('notice', res => {
	     if(res.data.status && res.data.data && res.data.data.content){
	     		this.content = res.data.data.content
	     	 this.popupVisible = true;
	     }
	    }, err => {
	      Toast('网络链接失败，请稍后再试')
	    })	
  	},
  	watch:{
    	'$route':function(to,from){
　　　　　document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0; 
           }
       }
  	
}
</script>

<style >

#app {
	background-color: #efeff4;
	font-size: .24rem;
}
.notice-warp{
	padding:.2rem 0;
	width: 6.6rem;
	font-size: .28rem;
	color: #8D8D8D;
	border-radius: .06rem;
	text-align: center;
	position: relative;
}
.notice-warp p{
	font-size: .3rem;
	color: #000;
}
.notice-warp i{
	position: absolute;
	bottom: -.8rem;
	left: 3.1rem;
	width: .4rem;
	height: .4rem;
	line-height: .36rem;
	border-radius: 50%;
	border: 1px solid #fff;
	color: #fff;
	font-size: .4rem;
}
</style>
