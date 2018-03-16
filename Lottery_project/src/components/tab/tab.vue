<template>
  <transition name="fade">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/home">
        <i class="icon-index"></i>
        <span class="tab-link" >首页</span>
      </router-link>

      <router-link tag="div" class="tab-item" to="/lottery1">
        <i class="icon-lottery" ></i>
        <span class="tab-link" >购彩</span>
      </router-link>

      <router-link tag="div" class="tab-item" to="/s-lottery">
        <i class="icon-s-lottery" ></i>
        <span class="tab-link" >开奖</span>
      </router-link>

      <router-link tag="div" class="tab-item"  :class="{'router-link-active' : sonClass }" to="/trend/1">
        <i class="icon-trend" ></i>
        <span class="tab-link" >走势</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/m-center">
        <i class="icon-m-center" ></i>
        <span class="tab-link" >我的</span>
      </router-link>

      <!--
          <div class="tab-item" :class="{active:flag=='home'}"  @click="toLink('home')">
            <i class="icon-index" :class="{active:flag=='home'}"></i>
            <span class="tab-link" :class="{active:flag=='home'}">首页</span>
          </div>

          <div class="tab-item" :class="{active:flag=='lottery1'}"  @click="toLink('lottery1')">
            <i class="icon-lottery" :class="{active:flag=='lottery1'}"></i>
            <span class="tab-link" :class="{active:flag=='lottery1'}">购彩</span>
          </div>

          <div class="tab-item"  :class="{active:flag=='s-lottery'}" @click="toLink('s-lottery')">
            <i class="icon-s-lottery" :class="{active:flag=='s-lottery'}"></i>
            <span class="tab-link" :class="{active:flag=='s-lottery'}">开奖</span>
          </div>

          <div class="tab-item" :class="{active:flag=='trend'}" @click="toLink('trend')">
            <i class="icon-trend" :class="{active:flag=='trend'}"></i>
            <span class="tab-link" :class="{active:flag=='trend'}">走势</span>
          </div>
          <div class="tab-item" :class="{active:flag=='m-center'}" @click="toLink('m-center')">
            <i class="icon-m-center" :class="{active:flag=='m-center'}"></i>
            <span class="tab-link" :class="{active:flag=='m-center'}">我的</span>
          </div>
          -->
    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return{
        flag: this.$store.state.user.home_tab
      }
    },
    props:['sonClass'],
    mounted(){

    },
    methods: {
      toLink(flag) {
        this.$router.push('/'+flag)
        this.$store.commit('HOME_TAB',flag)
      },
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab{
    display: flex
    display -webkit-flex
    height: 1.18rem
    line-height: 1.89rem
    font-size 0.3rem
    width 7.5rem
    background #ffffff
    position fixed
    bottom 0
    text-align center
    z-index 99
  }
    .tab-item{
      flex: 1;
      -webkit-flex : 1;
      text-align: center
    }

  .tab span{
    color #cccccc;
    text-align center
    clear both
    position relative
    left -0.29rem
    top -0.05rem
  }
  .tab i{
    float left
    display block
    position relative
    /*top  -0.4rem*/
    line-height:1rem;
    left 0.45rem
  }
  .tab-link.active {
    color: red;
  }
  &.router-link-active
    .tab-link
      color: red
  @media only screen and (max-width: 480px) {
    .router-link-active .icon-index:before{
      content url("../../images/home_Press.png")
      clear both
    }
    .router-link-active .icon-lottery:before{
      content url("../../images/buy_Press.png")
      clear both
    }
    .router-link-active .icon-s-lottery:before{
      content url("../../images/lottery_Press.png")
      clear both
    }
    .router-link-active .icon-trend:before{
      content url("../../images/trend_Press.png")
      clear both
    }
    .router-link-active .icon-m-center:before{
      content url("../../images/my_Press.png")
      clear both
    }

    .active .icon-index:before{
      content url("../../images/home_Press.png")
      clear both
    }
    .active .icon-lottery:before{
      content url("../../images/buy_Press.png")
      clear both
    }
    .active-active .icon-s-lottery:before{
      content url("../../images/lottery_Press.png")
      clear both
    }
    .active .icon-trend:before{
      content url("../../images/trend_Press.png")
      clear both
    }
    .active .icon-m-center:before{
      content url("../../images/my_Press.png")
      clear both
    }

    .icon-index::before{
      content url("../../images/home.png")
      clear both
    }
    .icon-lottery::before{
        content url("../../images/buy.png")
        clear both
      }
    .icon-s-lottery::before{
      content url("../../images/lottery.png")
      clear both
    }
    .icon-trend::before{
      content url("../../images/trend.png")
      clear both
    }
    .icon-m-center::before{
      content url("../../images/my.png")
      clear both
    }
  }


  /* medium screens (excludes iPad & iPhone) */
  /*
   * -----------------------------------------
   * 481 ~ 767  宽大于480且小于767的iPad和iPhone
   * -----------------------------------------
   */
  @media only screen and (min-device-width: 480px) and (max-device-width: 1024px) {
  /*@media only screen and (max-width: 480px) {*/
    .router-link-active .icon-index:before{
      content url("../../images/home_Press@2x.png")
      clear both
    }
    .router-link-active .icon-lottery:before{
      content url("../../images/buy_Press@2x.png")
      clear both
    }
    .router-link-active .icon-s-lottery:before{
      content url("../../images/lottery_Press@2x.png")
      clear both
    }
    .router-link-active .icon-trend:before{
      content url("../../images/trend_Press@2x.png")
      clear both
    }
    .router-link-active .icon-m-center:before{
      content url("../../images/my_Press@2x.png")
      clear both
    }

    .active .icon-index:before{
      content url("../../images/home_Press@2x.png")
      clear both
    }
    .active .icon-lottery:before{
      content url("../../images/buy_Press@2x.png")
      clear both
    }
    .active .icon-s-lottery:before{
      content url("../../images/lottery_Press@2x.png")
      clear both
    }
    .active .icon-trend:before{
      content url("../../images/trend_Press@2x.png")
      clear both
    }
    .active .icon-m-center:before{
      content url("../../images/my_Press@2x.png")
      clear both
    }

    .icon-index::before{
      content url("../../images/home@2x.png")
      clear both
    }
    .icon-lottery::before{
      content url("../../images/buy@2x.png")
      clear both
    }
    .icon-s-lottery::before{
      content url("../../images/lottery@2x.png")
      clear both
    }
    .icon-trend::before{
      content url("../../images/trend@2x.png")
      clear both
    }
    .icon-m-center::before{
      content url("../../images/my@2x.png")
      clear both
    }
  }

  /* ipads (landscape) */
  /*
   * -----------------------------------------
   * 768 ~ 1024  宽大于480且小于1024的iPad和iPhone
   * -----------------------------------------
   */
  @media only screen and (min-device-width: 1024px)  and (orientation: landscape) {
    .router-link-active .icon-index:before{
      content url("../../images/home_Press@3x.png")
      clear both
    }
    .router-link-active .icon-lottery:before{
      content url("../../images/buy_Press@3x.png")
      clear both
    }
    .router-link-active .icon-s-lottery:before{
      content url("../../images/lottery_Press@3x.png")
      clear both
    }
    .router-link-active .icon-trend:before{
      content url("../../images/trend_Press@3x.png")
      clear both
    }
    .router-link-active .icon-m-center:before{
      content url("../../images/my_Press@3x.png")
      clear both
    }

    .active .icon-index:before{
      content url("../../images/home_Press@3x.png")
      clear both
    }
    .active .icon-lottery:before{
      content url("../../images/buy_Press@3x.png")
      clear both
    }
    .active .icon-s-lottery:before{
      content url("../../images/lottery_Press@3x.png")
      clear both
    }
    .active .icon-trend:before{
      content url("../../images/trend_Press@3x.png")
      clear both
    }
    .active .icon-m-center:before{
      content url("../../images/my_Press@3x.png")
      clear both
    }

    .icon-index::before{
      content url("../../images/home@3x.png")
      clear both
    }
    .icon-lottery::before{
      content url("../../images/buy@3x.png")
      clear both
    }
    .icon-s-lottery::before{
      content url("../../images/lottery@3x.png")
      clear both
    }
    .icon-trend::before{
      content url("../../images/trend@3x.png")
      clear both
    }
    .icon-m-center::before{
      content url("../../images/my@3x.png")
      clear both
    }
  }
</style>
