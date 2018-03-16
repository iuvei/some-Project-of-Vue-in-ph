<template>
  <div class="trans-bank-con">
    <back title="转账资料"></back>

    <div class="trans-bank" >
      <h3>收款账号信息</h3>
      <div class="trans-bank-info">
        <div class="t-name">收款银行</div>
        <div class="t-val">{{params.name}}</div>
        <div class="copy-btn" v-clipboard="params.name" @success="handleSuccess" @error="handleError">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款账号</div>
        <div class="t-val">{{params.cardNumber}}</div>
        <div class="copy-btn" v-clipboard="params.cardNumber" @success="handleSuccess" @error="handleError">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款人</div>
        <div class="t-val">{{params.owner}}</div>
        <div class="copy-btn" v-clipboard="params.owner" @success="handleSuccess" @error="handleError">复制</div>
      </div>
      <div class="trans-bank-info">
        <div class="t-name">收款支行</div>
        <div class="t-val">{{params.bankAddress}}</div>
        <div class="copy-btn" v-clipboard="params.bankAddress" @success="handleSuccess" @error="handleError">复制</div>
      </div>
    </div>
    <!--输入存款信息-->
    <div class="depositial">
      <div class="deposit-item">
        <span>存入时间</span>
        <input v-model="incomeDt"  placeholder="请选择时间"  @click="pickerOpen" readonly/>
        <mt-datetime-picker
          ref="picker"
          type="datetime"
          v-model="pickerValue"
          @confirm="handleConfirm"
          >
        </mt-datetime-picker>
      </div>
      <div class="deposit-item">
        <span>存入金额</span>
        <input placeholder="请输入存入金额" v-model="cash" type="number" readonly="readonly"/>
      </div>
      <div class="deposit-item">
        <span>存款人姓名</span>
        <input placeholder="请输入存款人姓名" v-model="username"/>
      </div>
    </div>
    <div class="trans-type-radio">
      <mt-radio
        v-model="radiovalue"
        :options="options"
        class="mt-dt-picker"></mt-radio>
    </div>
    <div class="recharged-btn" >
      <button @click="$router.goBack()">上一步</button>
      <button @click="okRecharge">我已转账</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
	import Vue from 'vue'
  import Back from '@/components/back/back'
  import {requestOpt, dtFormate ,getUserInfo} from 'api/recommend'
  import { Indicator ,Toast} from "mint-ui";
  import VueClipboards from 'vue-clipboards';
  export default {
    components: {
      Back
    },
    data() {
      return {
        params:JSON.parse(this.$route.query.data),
        incomeDt: dtFormate.datetime(new Date()),
        cash: this.$route.query.cash,
        pickerValue: new Date(),
        radiolabel: '网银转账',
        radiovalue: '0',
        username: '',
        options: [
          {
            label: '网银转账',
            value: '0'
          },
          {
            label: 'ATM自动柜员机',
            value: '1'
          },
          {
            label: 'ATM现金入款',
            value: '2'
          },
          {
            label: '银行柜台转账',
            value: '3'
          },
          {
            label: '手机银行转账',
            value: '4'
          },
          {
            label: '其他',
            value: '5'
          }
        ]
      }
    },
    mounted() {
		Vue.use(VueClipboards);
    },
    methods: {
		handleSuccess(){				
			Toast('复制成功,发送给好友吧')				
		},
		handleError(){
			Toast('复制失败,请长按页面复制')		
		},
      pickerOpen() {
        this.$refs.picker.open();
      },
      handleConfirm() {
        this.incomeDt = dtFormate.datetime(this.pickerValue)
      },
      okRecharge() { 
      	if(this.username == ''){
      			Toast('请输入姓名')	
      			return false;
      	}
      	Indicator.open();
      	requestOpt.reqTokenPost('charge/save', getUserInfo().authToken,{
      		amount:parseInt(this.cash),
      		id:parseInt(this.$route.query.id),
      		time:this.incomeDt,
      		name:this.username,
      		typeID:parseInt(this.radiovalue)
      	}, res => {
					Indicator.close();
					if (res.data.status) {
						this.$router.push({ path: '/rechargeSuccess', query: {money:this.$route.query.cash} })
					}else{
						Toast(res.data.msg)
					}					
				}, err => {
					Indicator.close();
					Toast('连接服务器失败')
				})
      }
    }
  }
</script>

<style scoped >

 .trans-bank-con {
   background: #eee;
 }
 .trans-bank {
   position: relative;
   top: .88rem;
   padding: .2rem 0 ;
   color: #000;
   font-size: .28rem;
  
 }
  .trans-bank h3 {
     padding-left: .15rem;
     padding-top: .15rem;
     font-size: .28rem;
     background: #fff;
   }
    .trans-bank>div:last-child{
    	padding-bottom: .15rem;
    }
 /*收款信息*/

 .trans-bank-info {
   display: flex;
   align-items: center;
   padding: .15rem 0rem 0rem .2rem;
   background: #fff;
 }
  .trans-bank-info .t-name {
     flex-basis: 1.3rem;
   }
   .trans-bank-info .copy-btn {
     flex-basis: 1rem;
     padding: .1rem 0;
     margin-right: .3rem;
     border: 1px solid #06a6f5;
     color: #06a6f5;
     font-size: .3rem;
     text-align: center;
     line-height: 1.1;
     border-radius: .1rem;
   }
  .trans-bank-info .t-val {
    flex-grow: 1;
    color: #999;
   }
 /*输入存款信息*/
 .depositial {
   position: relative;
   top: .88rem;
   padding: .2rem;
   background: #fff;
   color: #000;
   font-size: .28rem;
 }
 .deposit-item {
     display: flex;
     align-items: center;
     margin-bottom: 0.2rem;
    
   }
   .deposit-item span {
       flex-basis: 1.8rem;
       margin-right: .2rem;
     }
    .deposit-item input {
       -webkit-appearance: none;
       flex-grow: 1;
       min-height: .6rem;
       border: 1px solid #ddd;
       zoom: 0.5;
       box-shadow: 0 0 1px rgba(0,0,0,.5);
       padding: .08rem;
       line-height: 1.5em;
       font-size: .6rem;
     }
 /*转账类型*/
 .trans-type-radio {
   position: relative;
   top: .88rem;
   background: #fff;
   font-size: .28rem;
   color: #000;
   
 }
  .trans-type-radio ul:after{
     content: '';
       display: table;
       clear: both;
   }
  .trans-type-radio ul li {
     position: relative;
     float: left;
     width: 50%;
     padding: .15rem 0;
   }
   .trans-type-radio ul li label {
       width: 100%;
     }
 /*我已充值*/
 .recharged-btn {
 	background: #fff;
   position: relative;
   top:.88rem;
   padding: .56rem 0;
   color: #ffffff;
   text-align: center;
   font-size: .3rem;
   border-radius: .07rem;
 }
 .recharged-btn button{
     width: 1.5rem;
     padding: .2rem 0;
     margin: 0 .2rem;
     border: 0;
     background: #06a6f5;
     color: #fff;
     border-radius: .08rem;
   }
 /*信息说明*/
 .input-msg {
   position: relative;
   top: .88rem;
   margin: .3rem .2rem;
   font-size: .24rem;
   color: #666;
   line-height: .35rem;
 }

/*单选自定义*/
.chk_2 {
  display: none;
}
.chk_2 + label {
  display:block;
  width: 3.4rem;
  text-indent: .5rem;
}
.chk_2 + label:before {
  content: '\2714';
  display: inline-block;
  position: absolute;
  left: 0;
  top: 0.1rem;
  vertical-align: .2em;
  width: .35rem;
  height: .35rem;
  margin-right: .4em;
  background: rgba(0,0,0,.5);
  color: #fff;
  text-indent: .25em;
  line-height: 1.25;
  border-radius : 50%;
}

.chk_2:checked + label:before {
  color: #fff;
  background: green;
}

</style>
