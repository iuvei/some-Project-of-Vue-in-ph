<template>

  <div class="recharge-content">
    <goback title="账户明细"></goback>
    <all></all>
    <div class="recharge">
      <router-link tag="div" class="tab-item" to="/r-detailed">
        <dl>
          <dt>
            <h5>充值余额</h5>
            <p>+500</p>
          </dt>
          <dd>
            <h5>支付宝</h5>
            <span>12：00：00</span><span>2017-04-07</span><span>支付成功</span>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/r-detailed">
        <dl>
          <dt>
            <h5>充值余额</h5>
            <p class="blue-c">500</p>
          </dt>
          <dd>
            <h5>微信</h5>
            <span>12：00：00</span><span>2017-04-07</span><span>支付失败</span>
          </dd>
        </dl>
      </router-link>
      <router-link tag="div" class="tab-item" to="/r-detailed">
        <dl>
          <dt>
            <h5>充值余额</h5>
            <p class="blue-c">500</p>
          </dt>
          <dd>
            <h5>微信</h5>
            <span>12：00：00</span><span>2017-04-07</span><span>支付失败</span>
          </dd>
        </dl>
      </router-link>
    </div>
  </div>

</template>


<script type="text/ecmascript-6">
  import Goback from '@/components/back/goback'
  import NData from '@/components/tab/n-data'
  import All from "@/components/tab/all"
  export default {
    components: {
      Goback,
      NData,
      All
    },
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .recharge-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    background #ffffff
    overflow auto
  }
  .recharge{

    width 7.5rem
    height 13.34rem
    display block
    margin-top 1.58rem
    background #ffffff
  }
  .recharge dl{
    width 7.5rem
    height  0.68rem
    display block
    border-bottom 1px solid #dddddd
  }
  .recharge dl dt{
    width 2.45rem
    height  0.68rem
    display block
    float left
    margin-left 0.3rem
  }
  .recharge dl dt h5{
    width 2.45rem
    height  0.34rem
    display block
    float left
    text-align left
    font-size 0.2rem
    color #000000
    line-height 0.34rem
  }
  .recharge dl dt p{
    float left
    text-align left
    font-size 0.2rem
    color #ff3a3a
    line-height 0.34rem
    margin-right 0.2rem
  }
  .recharge dl dt p.blue-c{
    color #4bbafe
  }

  .recharge dl dd{
    width 4.45rem
    height  0.68rem
    display block
    float right
    margin-right 0.3rem
  }
  .recharge dl dd h5{
    width 4.45rem
    height  0.34rem
    display block
    float right
    text-align right
    font-size 0.2rem
    color #000000
    line-height 0.34rem
  }
  .recharge dl dd span{
    float right
    text-align right
    font-size 0.16rem
    color #676767
    line-height 0.34rem
    margin-left 0.1rem
  }
</style>










































































