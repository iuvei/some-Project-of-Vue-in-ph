<template>
  <div class="betting-con-content">
    <back title="投注内容"></back>
    <!--列表-->
    <div class="betting-con" v-for="(sub_orders,i) in param.sub_orders">
      <div class="b-c-item">
        <div>期数：{{sub_orders.issue_number}}期</div>
        <div>单注金额：<span class="b-red">{{sub_orders.unit_price || param.unit_price}}元</span></div>
      </div>
      <div class="b-c-item">
        <div>玩法：{{sub_orders.parent_play_type || param.parent_play_type}}-{{sub_orders.play_type || param.play_type}}</div>
        <div><span class="b-red">{{sub_orders.bet_nums || param.bet_nums}}</span>注</div>
      </div>
      <div class="b-c-item">
        <div>赔率：{{sub_orders.play_rate || param.play_rate}}</div>
        <div><span class="b-red">{{sub_orders.bet_count || param.bet_count}}</span>倍</div>
      </div>
      <div class="b-c-item">
        <div>返点：{{sub_orders.return_ratio}}</div>
        <div>状态：<span :class="{'b-blue':sub_orders.status==2,'b-red':sub_orders.status==1}">{{sub_orders.status | transWinningStatus}}</span></div>
      </div>
      <div class="b-c-item-bt" style="padding-bottom: 0.1rem;" v-if="sub_orders.status==1">
        <div>中奖号码：
          <span class="b-red" v-if="sub_orders.lucky_number_type">{{sub_orders.drawing_result[sub_orders.lucky_numbers]}}</span>
          <span class="b-red" v-else>{{sub_orders.drawing_result[sub_orders.lucky_numbers]}}</span>
        </div>
        <div ></div>
      </div>
      <div class="b-c-item-bt">
        <div>投注号码：</div>
        <div></div>
      </div>
      <div class="b-c-item">
        <div
          v-if="param.sub_orders[0].lot_type=='山东11选5'
              ||param.sub_orders[0].lot_type=='三分PK拾'
              ||param.sub_orders[0].lot_type=='北京PK拾'
              ||param.sub_orders[0].lot_type=='极速PK拾'" style="width: 80%;word-wrap: break-word;">
          {{sub_orders.numbers_display | transArrFormate}}
        </div>
        <div v-else style="width: 80%;word-wrap: break-word;">{{sub_orders.numbers_display}}</div>

        <div></div>
      </div>
      <!--撤销-->
      <div v-if="sub_orders.status==0 || sub_orders.status==3" class="cancelord" @click="cancelOrdsub(sub_orders.id, sub_orders.order_sub_id, sub_orders.status)">撤单</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mapState} from 'vuex'
  import {lotteryTypes} from 'api/config'
  import {mt_loading_open, mt_loading_close,requestOpt,mt_toast} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        param: '',
        orderparater: window.orderparater
      }
    },
    computed: {
      ...mapState(['user'])
    },
    beforeRouteLeave(to, from, next) {
      from.meta.keepAlive = false
      next()
    },
    mounted() {
      this.getlist()
      console.log(this.orderparater)
    },
    methods: {
      getlist() { // 订单详情
        requestOpt.reqGet('bet_order?bet_order_id='+this.orderparater,sessionStorage.getItem('token') , res => {
          if (res.data.status===1) {
            this.orderID = Object.keys(res.data.data.list)[0]
            this.param = res.data.data.list[this.orderID]
            this.isLoading = true;
            for (let i=0,len=lotteryTypes.length;i<len;i++) {
              if (lotteryTypes[i].lot_type === (this.param.lot_type?this.param.lot_type:this.param.sub_orders[0].lot_type)) {
                this.code = lotteryTypes[i].code
                if(lotteryTypes[i].panflag) {
                  this.panflag = true
                }
                break
              }
            }
//            console.log(Object.keys(res.data.data.list)[0],this.param)
          } else {
//            mt_toast(res.data.msg)
          }
          mt_loading_close()
        }, err => {
          mt_toast(err)
          mt_loading_close()
        })
      },
      cancelOrdsub(id,ord,status) { // ?bet_order_id='+ord+'&act_type=1'
        requestOpt.reqPut('bet_record_status',sessionStorage.getItem('token') , {
          bet_record_id: id,
          act_type: 1
        },res => {
          if (res.data.status===1) {
            mt_toast(res.data.msg)
            this.getlist()
//            status = 4
//            console.log(status)
          } else {
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err)
        })
      },
    },
    created() {
      mt_loading_open()
      /*this.param = this.user.order_list;
      console.log(this.param)
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)*/
    }
  }
</script>

<style scoped lang="stylus">
  .betting-con-content {
    height: 100%;
    font-size .28rem
    color #000
    margin-top .88rem
  }
  .b-red {
    color #ff3a3b
  }
  .b-blue{
    color #35b5fe
  }
  .b-red.b-blue {
    color #35b5fe
  }
  .betting-con {
    position relative
    margin 0 .3rem
    border-top 1px solid #ccc
    font-size .24rem
    .b-c-item {
      display flex
      justify-content space-between
      display -webkit-flex
      -webkit-justify-content space-between
      padding .1rem 0
    }
    .cancelord {
        position absolute
        bottom .18rem
        right .3rem
        padding .1rem .2rem
        background #ff3a3b
        color #fff
        border-radius .05rem
      }
  }
</style>
