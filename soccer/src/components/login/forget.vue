<template>
  <div class="register">
		<back title="找回密码"></back>
		<div class="register-input">
			<login-input bgType="1" placeholder="请输入手机号" type="text" @inputVal="getPhone"></login-input>	
		</div>
		<div style="padding: 0 .2rem">
		<a :class="{disabled : disabled}" @click="register" class="register-btn">获取验证码</a>
		</div>
	</div>

</template>	


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import { requestOpt} from 'api/recommend'
  import loginInput from '@/components/login/loginInput'
  import { Indicator,Toast } from "mint-ui";

  export default {
    components: {
      Back,
      loginInput
    },
    data() {
      return {
        number: '',
        disabled:true
      }
    },
    mounted() {
			
		},
    methods: {
    	register(){
    		if(this.disabled){
				return false;
			}
    		Indicator.open();
    		requestOpt.reqPost('authCode/forget', {
	          mobile: this.number
        }, res => {
        	Indicator.close();
          if (res.data.status) {          	
          		this.$router.push('/');
          } else {
            Toast(res.data.msg)
          }
        }, err => {
          Toast(err.msg)
        })
    	},
      	getDisabled(){
			if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.number)){
				this.disabled = false;
			}else{
				this.disabled = true;					
			}
		},
	      getPhone(number){
	      	this.number = number;
	      	this.getDisabled();
	      },
    }
  }

</script>

<style scoped >
  .register{
    padding: 1.8rem .2rem 0 .2rem;
	width: 7.1rem;
  }
  .register-input div{
  	margin-bottom: 1px;
  }
	.register-btn {
		height: .8rem;
		display: block;
		background-color: #24a8de;
		font-size: .3rem;
		line-height: .8rem;
		text-align: center;
		color: #fff;
		border-radius: .05rem;
		margin-bottom: .6rem;
		margin-top: .6rem;
	}
	
	.register-btn.disabled {
		background-color: #ccc;
	}

</style>
