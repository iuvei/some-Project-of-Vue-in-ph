
<template>
  <!--其数-->
  <div class="playing-fixed">
    <div class="playing-fixed1">
      <dl class="fixed-q">
        <dt>{{rstObj.issue_number?rstObj.issue_number:0}}期</dt>

        <dd v-if="rstObj.curr_count_down">距{{rstObj.curr_issue_number}}期截止</dd>
        <dd v-else>距离开盘还有</dd>
      </dl>
      <dl class="fixed-t">
        <dt>
          <!--v-if="rstObj.code=='SSQ'"-->
        <div v-if="rstObj.code=='BJ28'||rstObj.code=='XY28'">
          <div class="lot-res-num" v-if="rstObj.number1">
            <span  v-if="rstObj.number1">{{rstObj.number1}} +</span>
            <span  v-if="rstObj.number2">{{rstObj.number2}} +</span>
            <span  v-if="rstObj.number3">{{rstObj.number3}} =</span>
            <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
          </div>
          <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
        </div>
        <div v-else-if="rstObj.code=='XGLHC'">
          <div class="lot-res-num" v-if="rstObj.number1">
            <span  v-if="rstObj.number1" :class="{blue:lhc_color_farmate(rstObj.number1)==1,green:lhc_color_farmate(rstObj.number1)==2}">{{rstObj.number1}}</span>
            <span  v-if="rstObj.number2" :class="{blue:lhc_color_farmate(rstObj.number2)==1,green:lhc_color_farmate(rstObj.number2)==2}">{{rstObj.number2}}</span>
            <span  v-if="rstObj.number3" :class="{blue:lhc_color_farmate(rstObj.number3)==1,green:lhc_color_farmate(rstObj.number3)==2}">{{rstObj.number3}}</span>
            <span  v-if="rstObj.number4" :class="{blue:lhc_color_farmate(rstObj.number4)==1,green:lhc_color_farmate(rstObj.number4)==2}">{{rstObj.number4}}</span>
            <span  v-if="rstObj.number5" :class="{blue:lhc_color_farmate(rstObj.number5)==1,green:lhc_color_farmate(rstObj.number5)==2}">{{rstObj.number5}}</span>
            <span  v-if="rstObj.number6" :class="{blue:lhc_color_farmate(rstObj.number6)==1,green:lhc_color_farmate(rstObj.number6)==2}">{{rstObj.number6}}</span>
            <span  v-if="rstObj.number7" :class="{blue:lhc_color_farmate(rstObj.number7)==1,green:lhc_color_farmate(rstObj.number7)==2}">{{rstObj.number7}}</span>
          </div>
          <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
        </div>
        <div v-else>
          <div class="lot-res-num" v-if="rstObj.number1">
            <span  v-if="rstObj.number1">{{rstObj.number1}}</span>
            <span  v-if="rstObj.number2">{{rstObj.number2}}</span>
            <span  v-if="rstObj.number3">{{rstObj.number3}}</span>
            <span  v-if="rstObj.number4">{{rstObj.number4}}</span>
            <span  v-if="rstObj.number5">{{rstObj.number5}}</span>
            <span  v-if="rstObj.number6" :class="{'b-blue':rstObj.code=='DLT'}">{{rstObj.number6}}</span>
            <span  v-if="rstObj.number7" :class="{'b-blue':rstObj.code=='SSQ'||rstObj.code=='DLT'}">{{rstObj.number7}}</span>
            <span  v-if="rstObj.number8">{{rstObj.number8}}</span>
            <span  v-if="rstObj.number9">{{rstObj.number9}}</span>
            <span  v-if="rstObj.number10">{{rstObj.number10}}</span>
            <span  v-if="rstObj.number11">{{rstObj.number11}}</span>
          </div>
          <div v-else style="color: #fc823c;">{{lottery_wining}}</div>
        </div>
        </dt>
        <dd>{{rstObj.curr_count_down | transCountTime}}</dd>
      </dl>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {lottery_wining} from 'api/config'

  export default {
    data() {
      return {
        timer: null,
        rstObj: {},
        lottery_wining: lottery_wining,
      }
    },
    /*activated() {
      console.log(111)
      this.timer = setInterval(() => {
        let list = /28/g.test(this.$store.state.user.lottery_code)?window.PC_dandan:window.All
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$store.state.user.lottery_code===list[i].code) {
            this.rstObj = list[i];
            this.$store.commit('BET_OBJ',this.rstObj)
          }
        }
      },1000)
    },*/
    mounted() {
      console.log(222)
      this.timer = setInterval(() => {
        let list = /28/g.test(this.$store.state.user.lottery_code)?window.PC_dandan:window.All
        for (let i=0,len=list.length; i<len;i++) {
          if (this.$store.state.user.lottery_code===list[i].code) {
            this.rstObj = list[i];
//            this.$store.commit('BET_OBJ',this.rstObj)
          }
        }
      },1000)
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
    }
  }
</script>

<style scoped lang="stylus">
  //头部其数
  .playing-fixed1{
    margin-top .99rem
  }
  .playing-fixed1 dl{
    display flex
    justify-content space-between
    align-items center
    margin .15rem
  }

  .playing-fixed1 dl.fixed-q dt{
    font-size 0.3rem
    color #000000
  }
  .playing-fixed1 dl.fixed-q dd{
    font-size 0.3rem
    color #000000
  }
  .playing-fixed1 dl.fixed-t dt{
    font-size 0.3rem
    color #fa3c3c
  }
  .playing-fixed1 dl.fixed-t  .lot-res-num {
    display flex
    align-items center
  }
  .playing-fixed1 dl.fixed-t dt span{
    font-size 0.36rem
    color #fa3c3c
    margin-right 0.1rem
  }
  .playing-fixed1 dl.fixed-t dd{
    font-size 0.36rem
    color #fa3c3c
  }
  .playing-fixed1 dl.fixed-t dt span.b-blue{
    color #35b5fe
  }
  .playing-fixed1 dl.fixed-t dt span.blue{
    color #35b5fe
  }
  .playing-fixed1 dl.fixed-t dt span.green{
    color #0cb356
  }
</style>
