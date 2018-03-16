<template>
	<div class="login-input">
		<input :type="type" ref="inputDom"
			:placeholder="placeholder" 
			v-bind:class="{ username: bgType==='1', password: bgType==='2',invitation:bgType==='3',yanzheng:bgType==='4'}"
			v-model="inputText"
			v-on:focus="inputEven(true)"
			v-on:blur="inputEven(false)"
			v-on:input="inputChange"
			maxlength="20" 
			:readonly="read"
		/>
		<div class="cord-warp" v-if="bgType ==='4'" style="background: #92A1AC;">
			<img v-lazy="codeSrc" @click="changeCode" alt="点击获取验证码"/>
		</div>
		<div class="eye-warp" v-if="needEye" @click="toggle">
			<img src="../../images/reg_eyes_select.png" v-if="isEye"/>
			<img src="../../images/reg_eyes.png" v-else />			
		</div>
		<div class="close-warp" @click="clearInput" v-if="isClose&&!noClose&&bgType!=='4'">
			<img src="../../images/bet_close.png"/>
		</div>
	</div>
</template>

<script type="text/ecmascript-6">
  import { requestOpt } from 'api/recommend'
	export default {
		
		props:['placeholder','bgType','needEye','type','read','noClose'],
		data() {
			return {
				isEye:false,
				inputText:"",
				isClose:false,
				codeSrc:'',
				str:""
			}
		},
		computed: {

		},
		mounted() {
			if(this.bgType==='4'){
				requestOpt.reqGet('getSessionId', res => {
		          if (res.status == 200) {         	
		          	this.str = res.data.substring(12,res.data.length -1	);
		          	this.$emit('sessionId',this.str);
		          	this.codeSrc = requestOpt.url+'identifyCode?JSESSIONID='+ this.str;		          	
		          } 
		        }, err => {
		         	
		        })
			}
		},	
		methods: {
			setModel(num){
				this.inputText = num;
			},
			changeCode(){
				this.codeSrc = requestOpt.url+'identifyCode?JSESSIONID='+ this.str +'&date=' + (new Date()).valueOf();
			},
			toggle(){
				this.isEye = !this.isEye;
				if(this.isEye){
					this.$refs.inputDom.type = 'type';
				}else{
					this.$refs.inputDom.type = 'password';
				}
			},
			clearInput(){
				this.inputText = "";
				this.$emit('inputVal',this.inputText);
			},
			inputEven(is){
				if(is&&this.inputText !== ""){
					this.isClose = true;
				}else{
					this.isClose = false;
				}
			},
			inputChange(){
				if(this.inputText !== ""){
					this.isClose = true;
				}else{
					this.isClose = false;
				}
				this.$emit('inputVal',this.inputText);
			}
		}
	}
</script>

<style scoped>
	input:-ms-input-placeholder{
    	color: #c1c1c7;
    	font-size: .28rem;
	}
	
	input::-webkit-input-placeholder{
	    color: #c1c1c7;
	    font-size: .28rem;
	}
 .login-input{
 	position: relative;
 	overflow: hidden;
 }
 .login-input .eye-warp{
 	position: absolute;
 	top: 0;
 	right: 1.1rem;
 	width: .3rem;
 	height: .6rem;
 	height: 100%;
 }
  .login-input .cord-warp{
 	position: absolute;
 	top: .1rem;
 	right: .2rem;
 	width: 2rem;
 	height: .8rem;
 }
 .login-input .cord-warp img{
 	width: 100%;
 	height: 100%;
 }
  .login-input .eye-warp img{
  	margin-top: .4rem;
  	width: 100%;
  }
 .login-input input{
 	font-size: .26rem;
	border: 0;
	width: 100%;
	height: 1rem;
	text-indent: .88rem;
 }
 .login-input .username{
 	background: url(../../images/reg_phone.png) no-repeat left .24rem center #fff;
 	background-size: .33rem .48rem;
 }
 .login-input .password{
 	background: url(../../images/reg_lock.png) no-repeat left .2rem center #fff;
 	background-size: .4rem .44rem;
 }
  .login-input .invitation{
 	background: url(../../images/reg_invitation.png) no-repeat left .2rem center #fff;
 	background-size: .44rem .44rem;
 }
  .login-input .yanzheng{
 	background: url(../../images/reg_yanzhengma.png) no-repeat left .2rem center #fff;
 	background-size: .4rem .44rem;
 }
 .close-warp{
 	position: absolute;
 	top: 0;
 	right: .12rem;
 	width: .3rem;
 	height: 100%;
 }
 .close-warp img{
 	margin-top: .32rem;
  	width: 100%;
 }
</style>