<template>

  <div class="recharge-content">
    <goback title="提现记录" go-back="true"></goback>
    <div class="recharge">
      <div class="account-tabs">
        <span
          :class="showTab==accouters.val?'active':''"
          v-for="(accouters, i) in accouters" @click="selTab(accouters.name, accouters.val)">{{accouters.name}}</span>
      </div>
      <!--padding: 0 .3rem;-->
      <scroll v-if="financials.length>0" class="wrapper"
              :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData"
              style="top: 1.62rem;overflow-x: hidden;">
        <div class="account-list" v-for="(financials, i) in financials">
          <div class="account-item">
            <div>提款金额 &nbsp;&nbsp;<span class="b-gray">{{financials.order_id}}</span></div>
            <div>{{financials.withdraw_type}}</div>
          </div>
          <div class="account-item">
            <div>
              <span class="b-blue"><span >-</span>{{financials.amount}}</span>
            </div>
            <div>
              <span class="b-gray">{{financials.status | transWithdrawalsStatus}}</span>
              <span class="b-gray">{{financials.create_time}}</span>
            </div>
          </div>
        </div>
      </scroll>
      <div v-if="financials.length==0" style="position: relative;top: 1.62rem;height: 90%">
        <nop-data v-if="financials.length==0"></nop-data>
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Goback from '@/components/back/goback'
  import NopData from '@/components/tab/nop-data'
  import All from "@/components/tab/all"
  import Scroll from  "@/components/public/pull-refresh"
  import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from  'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Goback,
      NopData,
      All,
      Scroll
    },
    data() {
      return {
        financials: [],
        page: 1,
        type: 3,
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        accouters: [{
          name: '全部', val: 3
        }, {
          name: '提现成功', val: 1
        }, {
          name: '失败', val: 2
        }, {
          name: '待审核', val: 0
        }],
        showTab: 3,
        showText:'全部',
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      this.financial_record('fresh');
    },
    mounted() {
//      this.financial_record('fresh');
    },
    methods: {
      financial_record(flag) { // 全部充值记录 this.user.token
        mt_loading_open();
        let url = 'withdraw_record?page='+ this.page + '&type='+ this.type;
        requestOpt.reqGetuser(url, sessionStorage.getItem('token'), (res) => {
          if(res.data.status === 1) {
            this.scrollData.noFlag = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            this.nodata = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            console.log(res.data.data.list)
            if (flag === 'fresh') {
              this.financials = Object.values(res.data.data.list);
            } else {
              this.financials = this.financials.concat(res.data.data.list)
            }
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            mt_toast(res.data.msg);
            /*if (res.data.code === -2 || res.data.code === -3) {
              mt_toast(res.data.msg);
              this.$router.replace('/login')
            } else {
              mt_toast(res.data.msg);
            }*/
          }
          mt_loading_close()
        }, (err) => {
          mt_loading_close()
          mt_toast(err)
        });
        setTimeout(() => {
          mt_loading_close()
        },50000);
      },
      onRefresh(done) {
        this.page = 1;
        this.financial_record('fresh');
        if(done) {
          done();
        }
      },
      onInfinite(done) {
        this.page += 1;
        if (this.nodata) {
          this.scrollData.noFlag = true
          return ;
        }
        this.financial_record('load');
        done();
      },
      selTab(name, val) {
        this.financials = []
        this.showText = name;
        this.showTab = val;
        this.page = 1
        this.type = val;
        this.financial_record('fresh');
      }


    },

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recharge-content{
    height 100%
    overflow hidden
  }

  .recharge{
    height 100%
    margin-top .9rem
    /*padding 0 .3rem*/
    color #000
    font-size .28rem
  }
  .b-red {
    color #ff3a3b
  }
  .b-blue{
    color #35b5fe
  }
  .b-gray{
    color #999
  }
  /*tabs*/
  .account-tabs {
    position fixed
    top .88rem
    display flex
    background #fff
    justify-content space-between
    align-items center
    display -webkit-flex
    -webkit-justify-content space-between
    -webkit-align-items center
    width 100%
    padding  0 8%
    /*margin 0 .2rem*/
    span {
      display inline-block
      /*width 25%*/
      padding .2rem 0rem
      border-bottom 2px solid #fff
      text-align center
      font-size .3rem
    }
    .active {
      color #fc823c
      border-bottom 2px solid #fc823c
    }
  }
  /*list*/
  .account-list {
    width 100%
    /*padding 0 .2rem*/
    border-bottom 1px solid #eaeaea
    background #fff
    .account-item {
      display flex
      justify-content space-between
      align-items center
      display -webkit-flex
      -webkit-justify-content space-between
      -webkit-align-items center
      padding .12rem
      font-size .26rem
    }
  }
</style>










































































