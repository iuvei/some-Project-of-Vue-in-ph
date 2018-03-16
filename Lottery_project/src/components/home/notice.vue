<!--公告-->
<template>
  <div class="notice-container">
    <back title="公告信息"></back>
    <div class="notice-content">
      <div class="notice-seplate"></div>
      <mt-loadmore :top-method="getNotice"  :auto-fill="true" ref="loadmore" style="height: 100%;">
        <div class="notice-list" v-for="(item, i) in noticeList">
          <div class="notice-item-l">
            <img src="../../images/ggao.png" alt="">
            <img src="../../images/leftdown.png" alt="">
          </div>
          <div class="notice-item-r">
            <p class="notice-item-con">
              {{item.content}}
            </p>
            <p class="notice-end-time">{{item.end_time}}</p>
          </div>
        </div>
      </mt-loadmore>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import { requestOpt, mt_toast} from 'api/recommend'
  import VScroll from '@/components/public/pull-refresh'

  export default {
    components: {
      Back,
      VScroll
    },
    data() {
      return {
        noticeList: [],
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
      }
    },
    mounted() {
      this.getNotice()
    },
    methods: {
      onRefresh(done) {
        this.getNotice();
        if(done) {
          done();
        }
      },
      getNotice() { // 广告
        requestOpt.reqnoGet('notice', res => {
          this.noticeList = res.data.data.list
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
          }, 1000);
        }, err => {
          mt_toast(err)
        })
      },
    }
  }
</script>

<style scoped lang="stylus">
  .notice-container {
    font-size: .28rem;
    height 100%
    .notice-content {
      padding-top .88rem
      height 100%
      .notice-seplate {
        position fixed
        left .4rem
        height 100%;
        width 1px
        border-left 1px solid #bababa
      }
      .notice-list {
        position relative
        margin .2rem 0.25rem .2rem 1rem
        border 1px solid #ddd
        background #fff
        border-radius .08rem
        .notice-item-l {
          position absolute
          left -.88rem
          top .1rem
          width 1rem
          img {
            width .5rem
            height .5rem
            &:last-child {
              position absolute
              top 0.1rem
              right .1rem
              width .3rem
              height .3rem
            }
          }
        }
        .notice-item-r {
          .notice-item-con {
            padding .35rem .2rem
            line-height 1.2
            word-spacing 8px
            letter-spacing 1px
          }
          .notice-end-time {
            padding .25rem .2rem
            border-top 1px solid #ddd
            color #999
            font-size: .26rem;
          }
        }
      }
    }
  }
</style>
