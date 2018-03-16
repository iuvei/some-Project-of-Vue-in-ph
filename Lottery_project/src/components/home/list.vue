<template>
  <div class="list-content">
    <back title="最新中奖榜"></back>
    <div class="list-layout">

      <div class="list-title">
        <dl>
          <dt>用户名</dt>
          <dd class="list-title1">中奖金额（元）</dd>
          <dd class="list-title2">彩种</dd>
        </dl>
      </div>
      <!--<div class="wrapper" :data="articles" :pulldown="true" @pulldown="loadData">-->
      <div class="wrapper" :style="v_height" style="overflow-y:scroll;position: relative;top: .8rem;">
        <!--<v-scroll :on-refresh="onRefresh" :enable-infinite="false" :dataList="scrollData" style="top:1.58rem;">-->
        <mt-loadmore :top-method="loadData"  :auto-fill="true" ref="loadmore">
          <div class="list">
            <dl v-for="articles in articles">
              <dt class="list1" >{{articles.phone | transPhoneFormate}}</dt>
              <dd class="list2">{{articles.winning_money}}</dd>
              <dt class="list3">{{articles.lot_name}}</dt>
            </dl>
          </div>
        </mt-loadmore>
        <!--</v-scroll>-->
      </div>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_loading_open, mt_loading_close} from 'api/recommend'
  import Scroll from '@/components/home/scroll'
  import VScroll from '@/components/public/pull-refresh'

  export default {
    components: {
      Back,
      Scroll,
      VScroll,
    },
    data () {
      return {
        articles:this.$store.state.user.winning_list||[],
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        v_height:{height:0},

      }
    },
    /*created: function() {
      this.loadData();
    },*/
    mounted() {
      let b_h = document.body.clientHeight
      let h_h = this.$el.querySelector('#back').clientHeight
      let t_h = this.$el.querySelector('.list-title').clientHeight
      let h = b_h-h_h-t_h
      this.v_height.height=h+'px'
    },
    methods: {
      onRefresh(done) {
        this.loadData();
        if(done) {
          done();
        }
      },
      loadData() {
        mt_loading_open()
        setTimeout(() => {
          mt_loading_close()
        },3000)
        requestOpt.reqnoGet('latest_luckys', (res) => {
          this.articles = res.data.data.list;
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
          }, 1000);
          mt_loading_close()
        }, (err) => {
          mt_loading_close()
//          alertip(err)
        });
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .list-content{
    width :7.5rem;
    /*height: 13.34rem;
    display block*/
    /*overflow hidden*/
    background #eeeeee
    margin-top 0.88rem
  }
  .list-layout{
    width 7.5rem
    height auto
    display block
    color #000
  }
  .list-title{
    width 7.5rem
    height 0.8rem
    background #eeeeee
    display block
    position fixed
    top: 0.87rem
    z-index 99
  }
  .list-title dl{
    width 7.5rem
    height 0.8rem
    background #eeeeee
    display block
    line-height 0.8rem
  }
  .list-title dl dt{
    width 2.5rem
    height 0.8rem
    display block
    float left
    text-align center
    font-size 0.34rem
    color #222222
    overflow hidden
  }
  .list-title dl dd.list-title1{
    width 2.5rem
    height 0.8rem
    display block
    float left
    text-align center
    font-size 0.34rem
    color #222222
  }
  .list-title dl dd.list-title2{
    width 2.5rem
    height 0.8rem
    display block
    float right
    text-align center
    font-size 0.34rem
    color #222222
  }
 /* .list-layout .yo-scroll .inner{
    top: -0.7rem
  }*/
  .list{
    /*width 7.5rem
    height 100%
    display block
    position relative
    margin-top 0.7rem*/
  }
  .list dl{
    width 7.5rem
    height 0.9rem
    display block
    background #ffffff
    border-bottom 0.01rem solid #cccccc
    line-height 0.9rem
  }
  .list dl dt{
    width 2.5rem
    height 0.9rem
    display block
    float left
    text-align center
    font-size 0.3rem
    color #222222
    overflow hidden
  }
  .list dl dd.list2{
    width 2.5rem
    height 0.9rem
    display block
    float left
    text-align center
    font-size 0.3rem
    color #d93f30
    overflow hidden
  }
  .list dl.list3{
    width 2.5rem
    height 0.9rem
    display block
    float left
    text-align center
    font-size 0.3rem
    color #222222
  }
</style>










































































