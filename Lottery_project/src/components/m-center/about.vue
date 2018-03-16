<!--module-->
<template>
  <div class="about-bg">
    <back title="关于我们"></back>
    <div class="about-con">
      <img src="../../images/zzcp.jpg" alt="">
      <div class="about-info">
        <h1>至尊彩票</h1>
        <p>{{ver}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import { requestOpt} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        ver: 'V.1.0.0'
      }
    },
    methods: {
      getver() {
        requestOpt.reqnoGet('latest_ver?type=1&ver=0.9.0',res => {
          this.ver = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="stylus">
  .about-bg {
    height 100%
    overflow hidden
  }
  .about-con {
    position relative
    background #fff
    height 100%
    img {
      position absolute
      top 30%
      left 50%
      width 1.5rem
      height 1.5rem
      transform translateX(-.75rem)
    }
    .about-info {
      position absolute
      top 43.5%
      left 50%
      transform translateX(-.9rem)
      h1 {
        font-size .5rem
        color #ff3a3b
      }
      p {
        margin-top .3rem
        text-align center
        font-size .36rem
        color #999
      }
    }
  }
</style>
