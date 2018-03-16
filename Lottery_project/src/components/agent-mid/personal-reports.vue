<!--个人报表-->
<template>
  <div class="personal-reports-content">
    <!--head-->
    <div id="back">
      <div class="back-content">
        <a class="back-btn" @click="$router.go(-1)" >
          <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
        </a>
        <span class="back-title" >
          <button :class="{'active': showtab=='person'}" @click="handleTab('person', 1)">个人报表</button><button :class="{'active': showtab=='team'}" @click="handleTab('team', 2)">团队报表</button>
        </span>
      </div>
    </div>
    <!--content-->
    <div class="personal-reports">
      <div class="agent-commis-dt">
        <!--<input type="text" value="2017年09月12日">-->
        <input v-model="startDt"  placeholder="请选择时间"  @click="pickerOpen" readonly/>
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue"
          @confirm="handleConfirm"
        >
        </mt-datetime-picker>
        至
        <!--<input type="text" value="2017年09月11日">-->
        <input v-model="endDt"  placeholder="请选择时间"  @click="pickerOpen2" readonly/>
        <mt-datetime-picker
          ref="picker2"
          type="date"
          v-model="pickerValue2"
          @confirm="handleConfirm2"
        >
        </mt-datetime-picker>
        <span class="agent-dt-btn" @click="diaflg=!diaflg">
          <span>{{dtText}}</span>
          <i class="el-icon-arrow-down" :class="diaflg?'rotate':''"></i>
        </span>
      </div>
      <div class="personal-report-con">
        <div class="personal-report-item" v-if="showtab=='team'">
          <h4>团队人数</h4>
          <span >{{statistic.count?statistic.count:0}}</span>
        </div>
        <div class="personal-report-item"  v-if="showtab=='team'">
          <h4>注册人数</h4>
          <span >{{statistic.register_count?statistic.register_count:0}}</span>
        </div>
		<div class="personal-report-item" v-if="showtab=='team'">
          <h4>投注人数</h4>
          <span >{{statistic.bet_user_count?statistic.bet_user_count:0}}</span>
        </div>
        <div class="personal-report-item"  v-if="showtab=='team'">
          <h4>首充人数</h4>
          <span >{{statistic.first_charge_count?statistic.first_charge_count:0}}</span>
        </div>
		<div class="personal-report-item" v-if="showtab=='team'">
          <h4>首充金额</h4>
          <span >{{statistic.first_charge_sum?statistic.first_charge_sum:0}}</span>
        </div>
        <div class="personal-report-item">
          <h4>盈亏总数</h4>
          <span class="special">{{statistic.difference}}元</span>
        </div>
        <div class="personal-report-item">
          <h4>投注总额</h4>
          <span >{{statistic.bet_amount}}元</span>
        </div>
        <div class="personal-report-item">
          <h4>派彩总额</h4>
          <span >{{statistic.winning_amount}}元</span>
        </div>
        <div class="personal-report-item">
          <h4>佣金总额</h4>
          <span >{{statistic.commission}}元</span>
        </div>
        <div class="personal-report-item">
          <h4>充值总额</h4>
          <span >{{statistic.charge_amount}}元</span>
        </div>
        <div class="personal-report-item">
          <h4>提现总额</h4>
          <span >{{statistic.withdraw_amount}}元</span>
        </div>
      </div>
    </div>
    <!--日期文本-->
    <div class="def-dialog-bg" v-if="diaflg" @click="diaflg=false"></div>
    <div class="def-dialog-con-r" v-if="diaflg">
      <span v-for="(texts, $index) in dtTextList" @click="dtTextSel(texts.name,texts.start)">{{texts.name}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt, dtFormate, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        showtab: 'person',
        type: 1,
        startDt: dtFormate.date(),
        pickerValue: new Date(dtFormate.date()),
        endDt: dtFormate.date(),
        pickerValue2: new Date(dtFormate.date()),
        diaflg: false,
        dtText: '今天',
        dtTextList: [{
          name: '今天', val: 1, start:  dtFormate.date()
        }, {
          name: '昨天', val: 2, start:  dtFormate.yestaday(1)
        }, {
          name: '一周', val: 3, start:  dtFormate.yestaday(7)
        }, {
          name: '半月', val: 4, start:  dtFormate.yestaday(15)
        }],
        statistic: {}
      }
    },
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      this.getList()
    },
    methods: {
      handleTab(flag, n) {
        this.showtab = flag;
        this.type = n
        this.getList()
      },
      pickerOpen() {
        this.$refs.picker.open()
      },
      handleConfirm() {
        this.startDt = dtFormate.date(this.pickerValue)
      },
      pickerOpen2() {
        this.$refs.picker2.open()
      },
      handleConfirm2() {
        this.endDt = dtFormate.date(this.pickerValue2)
      },
      dtTextSel(name, dt) {
        this.dtText = name
        this.diaflg = false
        this.startDt = dt
        this.getList()
      },
      getList() {
        mt_loading_open();
        // sessionStorage.getItem('token')  this.user.token
        requestOpt.reqGet('proxy_stat?type='+this.type+'&date_from='+this.startDt+'&date_to='+this.endDt,sessionStorage.getItem('token'), res => {
          mt_loading_close()
          if(res.data.status === 1) {
            this.statistic = res.data.data.statistic
            console.log(this.statistic)
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            mt_toast(res.data.msg)
          }
        }, err => {
          mt_loading_close()
          if(err.response.status===500) {
            mt_toast('服务器异常或者请检查网络，再重试')
          } else {
            mt_toast(err)
          }
//          console.log(err.response.status)
//          mt_toast(err)
        })
        setTimeout(() => {
          mt_loading_close()
        },5000)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .personal-reports-content {
    width: 7.5rem;
    height: 100%;
    overflow: hidden;
    background-color: #eee;
    color: #000;
    font-size: .3rem;
  }
  poscola {
    position relative
    top .88rem
  }
  .personal-reports{
    @extend  poscola
    .agent-commis-dt {
      padding .2rem .3rem
      margin-bottom .3rem
      background  #fff
      font-size .3rem
      input {
        width 2rem
        text-align center
        font-size .28rem
      }
      .agent-dt-btn {
        float right
        padding .2rem .08rem
        font-size .3rem
        position relative
        top -.15rem
        i.rotate {
          transform rotate(180deg)
          transition all 0.5s
        }
      }
    }
    .personal-report-con {
      background #fff
      .personal-report-item {
        display flex
        justify-content space-between
        align-items center
        display -webkit-flex
        -webkit-justify-content space-between
        -webkit-align-items center
        padding .2rem 0.3rem
        border-bottom 1px solid #ddd
        h4 {
          color #777
          font-size .28rem
        }
        .special {
          color #ff3a3b
        }
      }
    }

  }

  #back{
    width :7.5rem;
    height :0.88rem;
    background #ff3a3b;
    display :block;
    position fixed
    top: 0
    z-index 999
  }
  .back-content{
    width 6.9rem
    margin auto
    height :0.88rem;
    display: block;
    line-height: 0.88rem;
  }
  .back-title{
    height :0.66rem;
    float left
    display block
    margin-top .089rem
    text-align center
    font-size 0.32rem
    font-weight normal
    line-height 0.66rem
    z-index 8
    color: #ffffff;
    button {
      padding 0 .3rem
      background transparent
      color #fff
      border-top 1px solid #ffffff
      border-bottom 1px solid #ffffff
      box-sizing border-box
      &:first-child {
        border-left 1px solid #ffffff
        border-right 1px solid #ffffff
        border-top-left-radius .08rem
        border-bottom-left-radius .08rem
      }
      &:last-child {
        border-left 0
        border-right 1px solid #ffffff
        border-top-right-radius .08rem
        border-bottom-right-radius .08rem
      }
    }
    .active {
      background #fff
      color #ff3a3b
    }
  }
  .back-btn{
    width: 1.8rem
    height 0.88rem
    display block
    float left
  }
  .back-btn img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    float left
    position relative
    top: 0.29rem
  }
  .back-title-right{
    width 2rem
    height 0.88rem
    display block
    float right
    z-index 3
  }

  /*define dialog*/
  .def-dialog-bg {
    position absolute
    top 0
    z-index 999
    width 100%
    height 100%
    background transparent
  }
  .def-dialog-con-r {
    position absolute
    top 1.55rem
    right 0
    z-index 1000
    width 1.5rem
    background #fff
    border 1px solid #666
    border-radius .08rem
    text-align center
    font-size .3rem
    span {
      display block
      padding .2rem 0
      border-bottom 1px solid #ccc
      &:last-child {
        border 0
      }
    }
  }
</style>
