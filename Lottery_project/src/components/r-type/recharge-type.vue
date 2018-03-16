<template>
  <div class="recharge-type-content">
    <back title="充值" go-back="true" ></back>
    <div class="recharge-type" v-show="isShowContnt">
      <div class="recharge-balance">
        <span>充值余额:</span>
        <input placeholder="请输入充值金额至少10元" v-model="rNum" />
        <span class="fr">元</span>
      </div>
      <!--快捷按钮-->
      <div class="recharge-balance-btns">
        <span :class="{'balance-item': rNum==items}" @click="handleBalance(items)" v-for="items in charge_numbers.charge_numbers">{{items}}</span>
   
      </div>
      <!--请选择支付方式-->

      <div class="recharge-type-sel">
        <h4>请选择支付方式</h4>
        <ul>
          <li :class="currTab==names.name?'active': ''" @click="clType(names.name, names.id)" v-for="names in names ">{{names.name}}</li>
       
        </ul>
      </div>
      <div class="rechage-u-bg">
        <div class="rechare-link-item" v-if="currTab=='微信支付'" v-for="(pay_info, key) in pay_info" @click="toComfire(encodeURIComponent(pay_info.bank_address), pay_info.id, pay_info.addr_type, pay_info.title, pay_info.credential,pay_info.card_number,pay_info.name,pay_info.owner)">
          <div class="rechage-u" >
            <img :src="pay_info.logo" :alt="pay_info.title" />
            <div class="rechage-u-msg">
              <h4>{{pay_info.title}}</h4>
              <p v-if="pay_info.hint" style="font-size: .24rem">{{pay_info.hint}}</p>
              <p v-else>{{pay_info.mfrom}} <span v-if="pay_info.mto&&pay_info.mfrom">-</span> {{pay_info.mto}}</p>
            </div>
          </div>
        </div>
    
        <div class="rechare-link-item" v-if="currTab=='支付宝支付'" v-for="(pay_info, key) in pay_info" @click="toComfire(encodeURIComponent(pay_info.bank_address), pay_info.id, pay_info.addr_type, pay_info.title, pay_info.credential,pay_info.card_number,pay_info.name,pay_info.owner)">


       <div class="rechage-u">
            <img :src="pay_info.logo" :alt="pay_info.title" />
            <div class="rechage-u-msg">
              <h4>{{pay_info.title}}</h4>
              <p>{{pay_info.mfrom}} <span v-if="pay_info.mto&&pay_info.mfrom">-</span> {{pay_info.mto}}</p>
            </div>
          </div>
        </div>
      
        <router-link v-if="currTab=='银行转账'" tab="div" :key="key" :to="'/trans-bank/'+rNum+'/'+pay_info.bank_address+'/'+pay_info.id+'/'+pay_info.addr_type+'/'+list['3'].id+'/'+pay_info.credential+'/'+pay_info.name+'/'+pay_info.card_number+'/'+pay_info.owner" v-for="(pay_info,key) in pay_info">
          <div class="trans-bank">
            <dl>
              <dt>
                <img :src="pay_info.logo" :alt="pay_info.name" />
              </dt>
              <dd>
                <div class="payee">
                  <span>收款银行</span>
                  <span>{{pay_info.name}}</span>
                </div>
                <div class="payee">
                  <span>收款账号</span>
                  <span>{{pay_info.card_number}}</span>
                </div>
                <div class="payee">
                  <span>收款人</span>
                  <span>{{pay_info.owner}}</span>
                </div>
                <div class="payee">
                  <span>收款支行</span>
                  <span>{{pay_info.bank_address}}</span>
                </div>
              </dd>
            </dl>
          </div>
        </router-link>
        <!--</div>-->
        <div v-if="currTab=='在线支付'" class="rechage-u-bg">
            <div class="rechare-link-item" v-if="currTab=='在线支付'" v-for="(pay_info, key) in pay_info" @click="toComfire(encodeURIComponent(pay_info.bank_address), pay_info.id, pay_info.addr_type, pay_info.title, pay_info.credential,pay_info.card_number,pay_info.name,pay_info.owner)">
                <div class="rechage-u" >
                    <img :src="pay_info.logo" :alt="pay_info.title" />
                    <div class="rechage-u-msg">
                    <h4>{{pay_info.title}}</h4>
                    <p v-if="pay_info.hint" style="font-size: .24rem">{{pay_info.hint}}</p>
                    <p v-else>{{pay_info.mfrom}} <span v-if="pay_info.mto&&pay_info.mfrom">-</span> {{pay_info.mto}}</p>
                    </div>
                </div>
           </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {requestOpt, dtFormate, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState, mapActions} from 'vuex'
  import {OF_CASH, TAB_STATUS, PAY_LIST,PAY_LIST_ID} from '../../store/user'

  export default {
    components: {
      Back
    },
    data() {
      return {
        currTab: '微信支付',
        rNum: '100',
        charge_numbers: [],
        names: [],
        pay_info: [],
        id: '1',
        firstIn: true,
        isShowContnt:false
	    }
	  },
    created() {
      mt_loading_open();
       setTimeout(() => {
         mt_loading_close()
       },3000);
      this.OF_CASH(this.rNum)
      this.TAB_STATUS(this.currTab)
      this.PAY_LIST_ID(this.id)
    },
    computed: {
      ...mapState(['user']),
    },
    beforeRouteLeave(to, from, next) {
      from.meta.keepAlive = true;
      next()
    },
   activated() {
     if (!this.firstIn) {
       this.rNum = this.user.cash;
       this.currTab = this.user.tab_status;
       this.id = this.user.pay_list_id
       this.clType(this.currTab,this.id )

     } else {
       this.firstIn = false
     }
   },
    methods: {
      ...mapActions(['OF_CASH','TAB_STATUS','PAY_LIST','PAY_LIST_ID']),
      clType(flag, id) {
        this.currTab = flag;
        this.TAB_STATUS(this.currTab)
        var id = ''+ id;
        this.charge_numbers = this.list[id];
        this.pay_info = this.list[id].pay_info
        // console.log(this.pay_info);
        this.PAY_LIST(this.pay_info)
        this.PAY_LIST_ID(id)
      },
      handleBalance(numStr) {
        this.rNum = numStr;
        this.OF_CASH(this.rNum)
      },
      getChargeTypes() { // 获取充值类型
        requestOpt.reqGet('charge_types', sessionStorage.getItem('token'), res => {
          if (res.data.status === 1) {
            // console.log(res);
            this.list = res.data.data.list;
            this.charge_numbers = this.list['1']; // 快捷数字按钮
            this.names = this.list;
            this.pay_info = this.list['1'].pay_info;
            this.isShowContnt  = true;
            // console.log(this.names);
            mt_loading_close()
            // this.$nextTick(() => {
            //   console.log(this.names)
            // })
            // sessionStorage.setItem('pay_infos', JSON.stringify(this.list));
            // console.log(sessionStorage.getItem('pay_infos'));
          } else {
            mt_loading_close()
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')

            }
//            alertip(res.data.msg);
          }
        }, err => {
//          alertip(err)
        })
      },
      toRComfir(name, phone, msg) {
//        this.$router.push({name: 'r-confirm', query: {userName: name, phone: phone, cash: this.rNum, msg:msg}})
      },
      toComfire(bank_address, id, addr_type, title, credential,card_number,name,owner) { //pay_info.bank_address, pay_info.id, pay_info.addr_type, pay_info.title, pay_info.credential
        if (addr_type==6) {
          requestOpt.reqGet('juhe_pay?amount=' + this.rNum +'&bank_address=' + bank_address + '&credential=' + credential + "&addr_type=6"   , sessionStorage.getItem('token'),
            (res)=>{
              if(res.data.status == 1){
                location.href = res.data.data.list.qrcode;
              }
            },(err)=>{
              console.log(err);

            })
        } else if( title== 'QQ钱包---扫码支付') {
          requestOpt.reqGet('juhe_pay?amount=' + this.rNum +'&bank_address=' + bank_address + '&credential=' + credential + "&addr_type=" + addr_type   , sessionStorage.getItem('token'),
            (res)=>{
              if(res.data.status == 1){
                location.href = res.data.data.list.qrcode;
              }

            },(err)=>{
              console.log(err);
            })
        } else if( title== '微信wap扫码支付') {
          requestOpt.reqGet('juhe_pay?amount=' + this.rNum +'&bank_address=' + bank_address + '&credential=' + credential + "&addr_type=" + addr_type   , sessionStorage.getItem('token'),
            (res)=>{
              if(res.data.status == 1){
                location.href = res.data.data.list.qrcode;
              }

            },(err)=>{
              console.log(err);
            })
        } else if(addr_type == 1) {
          this.$router.push('/trans-bank/'+this.rNum+'/'+bank_address+'/'+id+'/'+addr_type+'/'+this.list['2'].id+'/'+credential+'/'+name+'/'+card_number+'/'+owner)
        }
        else {
          window.addTyp = {
            card_number: card_number,
            userName: '',
          }
          this.$router.push('/r-confirm/'+this.rNum+'/'+bank_address+'/'+id+'/'+addr_type+'/'+id+'/'+title+'/'+credential)
        }

      },
    },
    mounted() {
      this.getChargeTypes();
    }
  }
</script>

<style scroped lang="stylus" rel="stylesheet/stylus">
  .recharge-type-content {
    width: 7.5rem;
    min-height: 13.34rem;
    overflow: auto;
    background: #eee;
  }

  .recharge-type {
    position: relative;
    top: .88rem;
    margin-top: .3rem
  }
  .recharge-type .recharge-balance {
    padding: 0 .2rem 0 .1rem;
    margin: 0 .3rem;
    background: #fff;
    font-size: .3rem;
    color: #333;
  }
  .recharge-type .recharge-balance span:first-child {
    position: relative;
    /*top: -0.05rem;*/
  }
  .recharge-type .recharge-balance span:last-child {
    position: relative;
    top: 0.05rem;
  }
  .recharge-type input {
    outline: none;
    width: 4.5rem;
    padding: .3rem 0;
    font-size: .32rem;
    color: #fc823c
  }
  .recharge-type input::placeholder {
    color: #bfbfbf
  }
  .recharge-type .fr {
    float: right;
    margin-top: .3rem;
    margin-right: 0.01rem;
    color: #ff3a3b;
  }

  .recharge-balance-btns {
    width: auto;
    /*height: 1.6rem*/
    margin: 0.3rem 0.3rem 0.1rem;
    color: #333;
    font-size: .4rem;
    &:after {
      content ''
      display block
      clear both
    }
  }
  .recharge-balance-btns span {
    display: block;
    float: left;
    width: 1.66rem;
    height: .8rem
    margin-right: 0.06rem;
    margin-bottom: 0.06rem;
    padding: 0.15rem 0;
    background: #fff;
    border: 1px solid #fc823c;
    color: #fc823c;
    text-align: center;
    box-sizing: border-box;
    border-radius: 0.1rem;
    &:last-child {
      margin-bottom .3rem
    }
  }
  .recharge-balance-btns span.balance-item {
    background: #fc823c;
    color: #fff;
  }

  .recharge-type-sel h4 {
    color #333
    font-size: 0.3rem
    margin: 0 0 .3rem .3rem
  }
  .recharge-type-sel ul {

  }
  .recharge-type-sel ul li {
    float left
    width 25%
    padding .25rem 0
    background #fff
    border-bottom 1px solid #ddd
    color #333
    font-size  .3rem
    text-align center
  }
  .recharge-type-sel ul::after {
    content: '';
    display: table;
    clear: both
  }
  .recharge-type-sel ul li.active {
    color #fc823c;
    border-bottom 2px solid #fc823c
  }

  .rechage-u-bg {
    margin-top: 0.22rem;
    /*background: #fff;*/
    color: #000;
  }
  .rechare-link-item {
    background #fff
  }
  .rechare-link-item .rechage-u {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem ;
    margin-bottom .2rem
    /*border-bottom: 1px solid #ddd;*/
    font-size: .2rem
  }
  /*.rechare-link-item:last-child {
    padding-bottom: .32rem;
  }*/
  .rechage-u img {
    width: .8rem;
    height: .8rem;
  }
  /*
  .rechage-u .yibao {
    width: 1.2rem;
    height: .7rem;
  }
  .rechage-u .yibao img {
    width: 0.7rem;
    height: .7rem;
    margin-left: .12rem
  }
  .rechage-u img[alt=yibao] {
    width: .7rem;
    height: .7rem;
  }
  */
  .rechage-u .rechage-u-msg {
    flex: 1;
    margin-left: .22rem;
  }
  .rechage-u .rechage-u-msg h4 {
    color: #000;
    font-size: .25rem;
    margin-bottom: .22rem;
  }
  .rechage-u .rechage-u-msg p {
    font-size: .28rem;
    color: #999;
  }
  .rechage-u input[type=checkbox] {
    width: .3rem
    height .3rem
  }

  .recharge-notice {
    padding 0 .3rem
    color: #000;
  }
  .recharge-notice h4 {
    margin: .44rem 0 .1rem 0;
    font-size: .28rem;
    color: #444;
  }
  .recharge-notice p {
    margin: .1rem 0;
    font-size: 0.16rem;
    color: #676767;
    line-height: .32rem
  }
  .recharge-notice p strong {
    color: #fb9561;
  }

  .trans-bank {
    padding: .3rem 0.3rem;
    font-size: .25rem;
  }
  .trans-bank dl {
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0,0,0,.3);
  }
  .trans-bank dl dt {
    flex-basis: 1.8rem;
    padding-left .2rem
    img {
      width 100%
    }
  }
  .trans-bank dl dd {
    margin-left .2rem
    flex-grow: 1;
  }
  .trans-bank dl dd .payee {
    margin-bottom: .2rem;
  }
  .trans-bank dl dd .payee:first-child {
    margin-top: .2rem;
  }
  .trans-bank dl dd .payee span {
    display: inline-block;
  }
  .trans-bank dl dd .payee span:first-child {
    width: 1.2rem;
    color: #000;
  }
  .trans-bank dl dd .payee span:last-child {
    color: #999;
  }



  /* 复选框*/
  .chk_3  {
    display: none
  }
  .chk_3 + label {
    border: 1px solid #ddd;
    width 0.45rem
    height 0.45rem
    display: inline-block;
    position: relative;
    outline:none
    float left
    text-align center
    /*margin 0.28rem 0.24rem*/
    /*-webkit-appearance: none;*/
    vertical-align: middle;
    box-sizing: border-box;
    (-prefix-)user-select none;
    -webkit-appearance:none;
    appearance:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    text-indent: 0;
    background: transparent;
    resize:none;
    line-height: normal;
  }

  .chk_3:checked + label {
    border: 1px solid #ddd;
  }

  .chk_3:checked + label:after {
    content: '\2714'; //勾选符号
    position: relative;
    top: -0.02rem;
    color: #29DE29;
    width: 100%;
    height 100%
    text-align: center;
    font-size: 0.34rem;
    vertical-align: text-top;
  }

  .onlinePay {
    font-size .3rem
    color #ff3a3b
    text-align center
    height 5rem
    line-height 5rem
  }
</style>
