<!--代理佣金-->
<template>
  <div class="agent-commission-content" >
    <back title="代理佣金" go-back="true"></back>
    <div class="agent-commission" >
      <div class="agent-commis-dt">
        <!--<input type="text" v-model="prevdt">-->
        <!--<el-date-picker v-model="prevdt" type="date" placeholder="选择日期" ></el-date-picker>-->
        <input v-model="startDt"  placeholder="请选择时间"  @click="pickerOpen" readonly/>
        <mt-datetime-picker
          ref="picker"
          type="date"
          v-model="pickerValue"
          @confirm="handleConfirm"
        ></mt-datetime-picker>
         至
        <!--<input type="text" v-model="nextdt">-->
        <!--<el-date-picker v-model="nextdt" type="date" placeholder="选择日期" ></el-date-picker>-->
        <input v-model="endDt"  placeholder="请选择时间"  @click="pickerOpen2" readonly/>
        <mt-datetime-picker
          ref="picker2"
          type="date"
          v-model="pickerValue2"
          @confirm="handleConfirm2"
        >
        </mt-datetime-picker>
        <span class="agent-dt-btn"  @click="diaflg=!diaflg">
          <span>{{dtText}}</span>
          <i class="el-icon-arrow-down" :class="diaflg?'rotate':''"></i>
        </span>
      </div>
      <div class="agent-now-count">
        <h4>今日统计</h4>
        <div class="agent-now-items">
          <div class="agent-now-item">
            <img class="money" src="../../images/money_b.png" alt="佣金">
            <div class="commission-count">
              <h5>佣金(元)</h5>
              <span >{{total_commissions?total_commissions.toFixed(2):'0.00'}}</span>
            </div>
          </div>
          <div class="agent-now-item">
            <img class="glog" src="../../images/glod.png" alt="投注金额">
            <div class="commission-count">
              <h5>投注金额(元)</h5>
              <span>{{total_bet_amount?total_bet_amount.toFixed(2):'0.00'}}</span>
            </div>
          </div>
        </div>
      </div>
      <!--list-->
      <table>
        <thead>
        <tr>
          <th>用户名</th>
          <th>代理类型</th>
          <th>等级名称</th>
          <th>投注总额</th>
          <th>佣金</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(items, $index) in proxy_commissions_list">
          <td>{{items.username}}</td>
          <td>{{items.username}}</td>
          <td>{{items.proxy_level_name}}</td>
          <td>{{items.bet_amount}}</td>
          <td>{{items.commissions}}</td>
        </tr>
        </tbody>
      </table>
      <no-data v-if="proxy_commissions_list.length===0"></no-data>
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
  import NoData from '@/components/tab/no-data'
  import {requestOpt, dtFormate, alertip, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back,
      NoData
    },
    data() {
      return {
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        loading: false,
        proxy_type: 0, // 代理类型
        total_commissions: '',
        total_bet_amount: '',
        proxy_commissions_list: [],
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
        }]
      }
    },
    computed: {
      ...mapState(['user'])
    },
    methods: {
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
        requestOpt.reqGet('proxy_commissions?proxy_type='+this.proxy_type+'&date_from='+this.startDt+'&date_to='+this.endDt,sessionStorage.getItem('token'), res => {
          if(res.data.status === 1) {
            mt_loading_close()
            this.total_bet_amount = res.data.data.list.total_bet_amount
            this.total_commissions = res.data.data.list.total_commissions
            this.proxy_commissions_list = res.data.data.list.downline_list
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
          mt_toast(err)
        })
        setTimeout(() => {
          mt_loading_close()
        },5000)
      },
    },
    mounted() {
      this.getList();
    }
  }
</script>

<style scoped lang="stylus">
  .agent-commission-content {
    width: 7.5rem;
    height: 13.34rem;
    overflow: hidden;
    background-color: #eee;
    color: #000;
    font-size: .3rem;
  }
  poscola {
    position relative
    top .88rem
  }
  .agent-commission {
    @extend poscola

    .agent-commis-dt {
      padding .2rem .3rem
      margin-bottom .3rem
      background  #fff
      font-size .3rem
      input {
        width 2rem
        text-align center
      }
      .agent-dt-btn {
        position relative
        top -0.15rem
        right -0.15rem
        padding 0.15rem
        float right
        .agent-dt-sels {
          position absolute
          right -0.3rem
          top .3rem
          width 1.5rem
          box-shadow 0 0 1px rgba(0,0,0,.5)
          span {
            display inline-block
            width 100%
            padding .12rem 0
            border-bottom 1px solid #ddd
            background #fff
            text-align center
            &:last-child {
              border-bottom 0
            }
          }
        }
        i.rotate {
          transform rotate(180deg)
          transition all 0.5s
        }
      }
    }
    .agent-now-count {
      font-size .28rem
      padding .3rem
      background #fff
      h4 {
        margin-bottom  .3rem
      }
      h5 {
        margin-bottom  .1rem
      }
      .agent-now-items {
        display  flex
        flex-direction row
        .agent-now-item {
          display flex
          align-items  center
          display -webkit-flex
          -webkit-align-items center
          width 50%
          color #666
          img {
            /*float left*/
            margin-right .2rem
            width .68rem
            height .88rem
          }
          img.glog {
            height .68rem
          }
          .commission-count {
            /*float left*/
            /*height .88rem*/
          }
          &:after {
            content ''
            display block
            clear both
          }
        }

      }
    }
    table {
      width 100%
      margin-top .3rem
      background #fff
      th {
        padding .2rem
        border-bottom  1px solid #ddd
        text-align center
      }
    }
  }
  .def-dialog-con-r {
    position absolute
    top 1.50rem
    right 0
    z-index 1000
    width 1.45rem
    background #fff
    border 1px solid #666
    border-radius .08rem
    text-align center
    font-size .3rem
    span {
      display block
      padding .18rem 0
      border-bottom 1px solid #ccc
      &:last-child {
        border 0
      }
    }
  }

</style>
