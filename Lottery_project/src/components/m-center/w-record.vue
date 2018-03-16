<template>
  <div class="betting-chase-content">
    <back title="方案详情"></back>

    <div class="betting-chase">
      <!--header-->
      <div class="betting-c-tit">
        <div>
          <!--福彩3d-->
          <img v-if="param.sub_orders[0].lot_type=='福彩3D'||param.lot_type=='福彩3D'" src="../../images/icon/3d.png" alt="">
          <!--北京28-->
          <img v-if="param.sub_orders[0].lot_type=='北京28'||param.lot_type=='北京28'" src="../../images/icon/jing_28.png" alt="">
          <!--大乐透-->
          <img v-if="param.sub_orders[0].lot_type=='大乐透'||param.lot_type=='大乐透'" src="../../images/icon/daletou.png" alt="">
          <!--双色球-->
          <img v-if="param.sub_orders[0].lot_type=='双色球'||param.lot_type=='双色球'" src="../../images/icon/shuangseqiu.png" alt="">
          <!--排列3-->
          <img v-if="param.sub_orders[0].lot_type=='排列3'||param.lot_type=='排列3'" src="../../images/icon/pailei3.png" alt="">
          <!--排列5-->
          <img v-if="param.sub_orders[0].lot_type=='排列5'||param.lot_type=='排列5'" src="../../images/icon/pailei5.png" alt="">
          <!--山东11选5-->
          <img v-if="param.sub_orders[0].lot_type=='山东11选5'||param.lot_type=='山东11选5'" src="../../images/icon/shandong.png" alt="">
          <!--江苏快三-->
          <img v-if="param.sub_orders[0].lot_type=='江苏快三'||param.lot_type=='江苏快三'" src="../../images/icon/su_kuaisan.png" alt="">
          <!--三分PK拾-->
          <img v-if="param.sub_orders[0].lot_type=='三分PK拾'||param.lot_type=='三分PK拾'" src="../../images/icon/san_pk.png" alt="">
          <!--安徽快三-->
          <img v-if="param.sub_orders[0].lot_type=='安徽快三'||param.lot_type=='安徽快三'" src="../../images/icon/wan_kuaisan.png" alt="">
          <!--广东11选5-->
          <img v-if="param.sub_orders[0].lot_type=='广东11选5'||param.lot_type=='广东11选5'" src="../../images/icon/guangdong.png" alt="">
          <!--上海11选5-->
          <img v-if="param.sub_orders[0].lot_type=='上海11选5'||param.lot_type=='上海11选5'" src="../../images/icon/shanghai.png" alt="">
          <!--上海时时乐-->
          <img v-if="param.sub_orders[0].lot_type=='上海时时乐'||param.lot_type=='上海时时乐'" src="../../images/icon/shishile.png" alt="">
          <!--三分时时彩-->
          <img v-if="param.sub_orders[0].lot_type=='三分时时彩'||param.lot_type=='三分时时彩'" src="../../images/icon/sanfeishishicai.png" alt="">
          <!--江西11选5-->
          <img v-if="param.sub_orders[0].lot_type=='江西11选5'||param.lot_type=='江西11选5'" src="../../images/icon/jiangxi.png" alt="">
          <!--重庆时时彩-->
          <img v-if="param.sub_orders[0].lot_type=='重庆时时彩'||param.lot_type=='重庆时时彩'" src="../../images/icon/chongqinshishicai.png" alt="">
          <!--北京PK拾-->
          <img v-if="param.sub_orders[0].lot_type=='北京PK拾'||param.lot_type=='北京PK拾'" src="../../images/icon/jing_pk.png" alt="">
          <!--天津时时彩-->
          <img v-if="param.sub_orders[0].lot_type=='天津时时彩'||param.lot_type=='天津时时彩'" src="../../images/icon/tianjinshishicai1.png" alt="">
          <!--PC蛋蛋-->
          <img v-if="param.sub_orders[0].lot_type=='PC蛋蛋'||param.lot_type=='PC蛋蛋'" src="../../images/icon/pc_dandan.png" alt="">
          <!--新疆时时彩-->
          <img v-if="param.sub_orders[0].lot_type=='新疆时时彩'||param.lot_type=='新疆时时彩'" src="../../images/icon/xin_shishicai.png" alt="">
          <!--幸运28-->
          <img v-if="param.sub_orders[0].lot_type=='幸运28'||param.lot_type=='幸运28'" src="../../images/icon/xing_28.png" alt="">
          <!--六合彩-->
          <img v-if="param.sub_orders[0].lot_type=='香港六合彩'||param.lot_type=='香港六合彩'" src="../../images/icon/liuhecai.png" alt="">
          <!--广西快三-->
          <img v-if="param.sub_orders[0].lot_type=='广西快三'||param.lot_type=='广西快三'" src="../../images/icon/gui_kuaisan.png" alt="">

          <span> {{param.sub_orders[0].lot_type||param.lot_type}}</span>
        </div>
        <div>
          第{{param.issue_number}}期
        </div>
      </div>
      <div class="betting-t-info">
        <div class="betting-t-info-item">
          <div>￥{{param.total_money}}</div>
          <div>订单金额</div>
        </div>
        <div class="betting-t-info-item">
          <!--:class="{'b-blue':param.is_winning_all==2,'b-red':param.is_winning_all==1}"-->
          <div><span style="color: #ff3a3b">已派奖</span></div>
          <div>订单状态</div>
        </div>
        <div class="betting-t-info-item">
          <div>{{param.all_winning_money?'￥'+param.all_winning_money.toFixed(2):'--'}}</div>
          <div>中奖金额</div>
        </div>
      </div>
      <!--列表-->
      <div class="betting-c-con">
        <div class="betting-c-con-tit">
          <div v-if="false">开奖号码 &nbsp;<span class="b-red" v-for="(drawing_result,key) in param.drawing_result">{{drawing_result+' '}}</span></div>
          <div>总投注数 &nbsp;<span class="b-red">{{param.total_bet_nums}}注</span></div>
        </div>
        <div class="betting-c-con-list" v-for="(sub_orders,i) in param.sub_orders" :class="{'bg-white':sub_orders.status==1}" v-if="i<11">
          <div class="betting-c-item" >
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
              <div>状态：<span :class="{'b-blue':sub_orders.status==2,'b-red':sub_orders.status==1}" style="color: #ff3a3b">{{sub_orders.status | transWinningStatus}}</span></div>
            </div>

            <div class="b-c-item">
              <div>开奖号码：
                <span v-if="param.sub_orders[0].lot_type=='双色球'" :class="{'blue': i== sub_orders.drawing_result.length-1}" v-for="(item,i) in sub_orders.drawing_result" class="open-lottery-number">{{item}}</span>
                <span v-else-if="param.sub_orders[0].lot_type=='大乐透'" :class="{'blue': i> sub_orders.drawing_result.length-3}"  class="open-lottery-number">{{item}}</span>
                <span v-else-if="param.sub_orders[0].lot_type=='幸运28'||param.sub_orders[0].lot_type=='北京28'"  class="open-lottery-number">{{i==sub_orders.drawing_result.length-1?item:i==sub_orders.drawing_result.length-2?item+ ' =':item+ ' + '}}</span>
                <span v-else-if="param.sub_orders[0].lot_type=='香港六合彩'" :class="{'blue':lhc_color_farmate(item)==1,green:lhc_color_farmate(item)==2}"  class="open-lottery-number">{{item}}</span>

                <span v-else  class="open-lottery-number">{{item}}</span>
              </div>
              <div></div>
            </div>

            <div class="b-c-item" @click="luckyHint(sub_orders.lucky_number_hints,sub_orders.lucky_numbers)"
                 v-if="sub_orders.lucky_number_hints">
              <div>中奖号码：
                <!--
                <span class="b-red" v-for="(item,i) in sub_orders.drawing_result">
                  <span v-for="(v1,j) in sub_orders.lucky_numbers.split(',')" v-if="~~v1===i">
                    {{item}}
                  </span>
                </span>
                <span v-if="sub_orders.drawing_result[sub_orders.lucky_numbers.slice(0,1)]" style="color: #ff3a3b">
                    >>
                </span>-->
                <!--lucky_number_type  为 1 直接显示 lucky_numbers-->
              <span v-if="sub_orders.lucky_number_type==1" class="b-red">
                <span>{{sub_orders.lucky_numbers}}</span>
              </span>
                <!--<!--lucky_number_type  为 0 取下标-->
              <span class="b-red" v-for="(item,i) in sub_orders.drawing_result" v-if="sub_orders.lucky_number_type==0">
                  <span v-for="(v1,j) in sub_orders.lucky_numbers.split(',')" v-if="~~v1===i">
                    {{item}}
                  </span>
              </span>
                <!--sub_orders.lucky_number_hints sub_orders.drawing_result[sub_orders.lucky_numbers.slice(0,1)]-->
                <span v-if="sub_orders.lucky_number_hints" style="color: #ff3a3b">
                    >>
              </span>
              </div>
              <div ></div>
            </div>
            <div class="b-c-item" v-else>
              <div>中奖号码：
                <span class="b-red">{{sub_orders.drawing_result[sub_orders.lucky_numbers]}}</span>
              </div>
              <div ></div>
            </div>

            <div class="b-c-item">
              <div>投注号码：</div>
              <div></div>
            </div>
            <div class="b-c-item">
              <div
                v-if="param.sub_orders[0].lot_type=='山东11选5'
                ||param.sub_orders[0].lot_type=='三分PK拾'
                ||param.sub_orders[0].lot_type=='北京PK拾'">
                <!--{{sub_orders.numbers_display | transArrFormate}}-->
                {{sub_orders.numbers_1}}
              </div>
              <div v-else>{{sub_orders.numbers_1}}</div>

              <div></div>
            </div>
            </div>


          </div>
        </div>
        <hr style="border: 0;height: 1px;border-top: 1px solid transparent;margin: 0 .3rem .1rem" v-if="param.sub_orders.length>10"/>
        <!--查看更多-->
        <div class="b-d-more" v-show="param.sub_orders.length>10" >
          <input type="button" value="查看更多" @click="$router.push('/betting-con')">
        </div>
        <hr style="border: 0;height: 1px;border-top: 1px solid #ccc;margin: .12rem .3rem .1rem" v-if="param.sub_orders.length>10"/>
        <!--中奖详情-->
        <table class="betting-c-tbl">
          <caption>中奖详情</caption>
          <tr>
            <td>税前奖金</td>
            <td>税后奖金</td>
          </tr>
          <tr>
            <td>{{param.all_winning_money?'￥'+param.all_winning_money.toFixed(2):'--'}}</td>
            <td>{{param.all_winning_money_after_tax?'￥'+param.all_winning_money_after_tax.toFixed(2):'--'}}</td>
          </tr>
        </table>
        <!--info-->
        <div class="betting-f-info">
          <div class="b-f-infos">
            <div class="b-f-left">下单时间：</div>
            <div class="b-f-rig">{{param.bet_time}}</div>
          </div>
          <div class="b-f-infos">
            <div class="b-f-left">订单编号：</div>
            <div class="b-f-rig">{{$route.params.ord}}</div>
          </div>
          <div class="b-f-infos">
            <div class="b-f-left b-red">温馨提示：</div>
            <div class="b-f-rig">{{$route.params.info}}</div>
          </div>
        </div>
        <!--继续购彩-->
        <div class="chase-bottom">
          <!--<router-link tag="div" class="tab-item" to="/lottery">-->
          <dl>
            <input type="button" value="立即投注" @click="tolotter">
          </dl>
          <div class="show_pan" v-show="is_Show_pan">
            <div @click="toPlan(1)">{{param.sub_orders[0].lot_type}}A盘</div>
            <div @click="toPlan(2)">{{param.sub_orders[0].lot_type}}B盘</div>
          </div>
          <!--</router-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mapState} from 'vuex'
  import {lotteryTypes} from 'api/config'
  import {mt_loading_open, mt_loading_close,mt_alertip} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        param: [],
        code: '',
        panflag: false,
        is_Show_pan:false,
        plan_index : 1
      }
    },
    created() {
      this.param = this.user.order_list;
    },
    mounted() {
      console.log(this.param)
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },300)

      for (let i=0,len=lotteryTypes.length;i<len;i++) {
        if (lotteryTypes[i].lot_type === this.param.sub_orders[0].lot_type) {
          this.code = lotteryTypes[i].code
          if(lotteryTypes[i].panflag) {
            this.panflag = true
          }
          break
        }
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
      lhc_color_farmate(name) { // lhc号码字体颜色格式化
        if(name==='03' ||name==='04' ||name==='09' ||name==='10' ||name==='14' ||name==='15' ||name==='20' ||name==='25' ||name==='26' ||name==='31' ||name==='36' ||name==='37' ||name==='41' ||name==='42' ||name==='47' ||name==='48') {
          return 1
        } else if (name==='05' ||name==='06' ||name==='11' ||name==='16' ||name==='17' ||name==='21' ||name==='22' ||name==='27' ||name==='28' ||name==='32' ||name==='33' ||name==='38' ||name==='39' ||name==='43' ||name==='44' ||name==='49'){
          return 2
        }
        return 0
      },
      luckyHint(val) {
        mt_alertip(val)
      },
      tolotter() {
        if(this.panflag) {
          this.is_Show_pan = true
        } else {
          this.$store.commit('LOTTERY_CODE',this.code)
          this.$router.push('/gameplay/'+ this.code +'/'+ this.param.sub_orders[0].lot_type_id +'/1')
        }
      },
      toPlan(index) {
        this.$store.commit('LOTTERY_CODE',this.code)
        this.$router.push('/gameplay/'+ this.code +'/'+ this.param.sub_orders[0].lot_type_id +'/'+index)
      }
    },


  }
</script>

<style scoped lang="stylus">
  .betting-chase-content {
    height: 100%;
    font-size .28rem
    color #000
    margin-top .88rem
    margin-bottom 2.9rem
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
  .betting-chase {
    font-size .24rem
    /*head*/
    .betting-c-tit {
      display flex
      justify-content space-between
      align-items center
      display -webkit-flex
      -webkit-justify-content space-between
      -webkit-align-items center
      height .96rem
      padding 0 .3rem
      background #fff
      div {
        &:first-child {
          display flex
          align-items center
          display -webkit-flex
          -webkit-align-items center
        }
      }
      img {
        width .7rem
        height .8rem
        padding .1rem
        padding-left 0
      }
    }
    /*flex*/
    .betting-t-info {
      display flex
      justify-content space-between
      display -webkit-flex
      -webkit-justify-content space-between
      background #fff
      padding .1rem .3rem
      div.betting-t-info-item {
        width 33.3333%
        text-align center
        &:first-child {
          border-right 1px solid #ccc
        }
        &:last-child {
          border-left 1px solid #ccc
        }
        div {
          &:first-child {
            margin-bottom .15rem
          }
        }
      }
    }
    /**/
    .betting-c-con {
      border-top 1px solid #ccc
      .betting-c-con-tit {
        margin 0 .3rem
        div {
          padding .1rem 0
          border-bottom 1px solid #ccc
        }
      }
      .betting-c-con-list {
        &.bg-white {
          background #fff
        }
        &:last-child {
          .betting-c-item {
            border-bottom 0
          }
        }
        .betting-c-item {
          margin 0 .3rem
          padding-top .1rem
          border-bottom 1px solid #ccc
        }
      }
      .b-c-item {
        display flex
        justify-content space-between
        display -webkit-flex
        -webkit-justify-content space-between
        padding .1rem 0
        /*开奖号码*/
        .open-lottery-number {
          margin-right .07rem
          color #ff3a3b
          &.blue{
            color: #35b5fe;
          }
          &.green{
            color: #0cb356;
          }
        }
      }
    }

    .b-d-more {
      margin 0 .3rem
      input {
        width 100%
        padding .2rem 0
        border 1px solid #35b5fe
        background transparent
        color #35b5fe
        border-radius .08rem
      }
    }
    /*table*/
    table.betting-c-tbl {
      width 92%
      margin 0.1rem 0.3rem
      border 1px solid #ccc
      caption {
        text-align left
        padding-bottom .1rem
      }
      td {
        width 50%
        border 1px solid #ccc
        text-align center
        padding .1rem
      }
    }
    /*info*/
    .betting-f-info {
      margin 0.6rem .3rem 1.8rem
      .b-f-infos {
        display flex
        display -webkit-flex
        line-height 1.2
        .b-f-left {
          flex-basis 60px
          -webkit-flex-basis 60px
          white-space nowrap

        }
        .b-f-rig {
          flex-grow 1
          -webkit-flex-grow 1
          text-align left
        }
      }
    }

    /*继续购彩*/
    .chase-bottom{
      width 7.5rem
      height 1.2rem
      display block
      position fixed
      bottom 0
      z-index 999
      /* AB盘 */
      .show_pan{
        position:absolute ;
        bottom:1rem;
        left: 0;
        right: 0;
        margin: auto;
        height: 1.6rem;
        width:6.9rem;

      }
      .show_pan div{
        height:0.8rem;
        border:1px solid #ccc;
        text-align:center;
        line-height: 0.8rem;
        color:#000;
        background:#fff;
        font-size: .3rem;
        &:first-child {
          border-bottom: 0;
        }
      }
    }
    .chase-bottom dl{
      width 6.9rem
      height 0.88rem
      margin auto
      display block
      background #fa3c3c
      border-radius 4px
    }
    .chase-bottom input{
      width 6.9rem
      height 0.88rem
      margin auto
      display block
      background:none;
      outline:none;
      border:0;
      font-size 0.36rem
      color #fefefe
      text-align center
      line-height 0.88rem
    }
  }

</style>
