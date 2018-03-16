<template>
  <div class="all-tab">
    <router-link tag="div" class="tab-item" to="/a-account">
      <span class="tab-link">全部</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-charge">
      <span class="tab-link">充值</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-withdrawals">
      <span class="tab-link">提款</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-betting">
      <span class="tab-link">购彩</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-winning">
      <span class="tab-link">中奖</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/commission">
      <span class="tab-link">佣金提成</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/a-others">
      <span class="tab-link">其他</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .all-tab{
    display: flex
    display -webkit-flex
    height: 0.68rem
    line-height: 1.4rem
    width 7.5rem
    background #ffffff
    position fixed
    top 0.88rem
    text-align center
    z-index 99
  }
  .all-tab span{
    color #000000;
    text-align center
    float left
    position relative
    line-height 0.68rem
    width 1.071rem
    font-size 0.2rem
    height 0.68rem
  }
  &.router-link-active
    .tab-link
      color: #fc823c
      border-bottom 2px solid #fc823c

</style>
