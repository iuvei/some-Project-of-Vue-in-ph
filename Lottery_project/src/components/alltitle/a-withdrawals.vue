<template>
  <div class="withdrawals-content">
    <back title="账户明细"></back>
    <all></all>
    <div class="withdrawals">
      <router-link tag="div" class="tab-item" to="/w-detailed">
        <dl>
          <dt>
            <h5>提款金额 <span>20170405DZLLL223L</span></h5>
            <p>+500</p>
          </dt>
          <dd>
            <h5>提款到银行卡</h5>
            <span>12：00：00</span><span>2017-04-07</span><span>正在处理</span>
          </dd>
        </dl>
      </router-link>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NData from '@/components/tab/n-data'
  import All from "@/components/tab/all"
  export default {
    components: {
      Back,
      NData,
      All
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .withdrawals-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #ffffff
  }
  .withdrawals{
    width 7.5rem
    height 13.34rem
    display block
    margin-top 1.58rem
    background #ffffff
  }
  .withdrawals dl{
    width 7.5rem
    height  0.68rem
    display block
    border-bottom 1px solid #dddddd
  }
  .withdrawals dl dt{
    width 3.45rem
    height  0.68rem
    display block
    float left
    margin-left 0.3rem
  }
  .withdrawals dl dt h5{
    width 3.45rem
    height  0.34rem
    display block
    float left
    text-align left
    font-size 0.2rem
    color #000000
    line-height 0.34rem
  }
  .withdrawals dl dt h5 span{
    text-align left
    margin-left 0.1rem
    font-size 0.16rem
    color #676767
    line-height 0.34rem
  }
  .withdrawals dl dt p{
    float left
    text-align left
    font-size 0.2rem
    color #4bbafe
    line-height 0.34rem
    margin-right 0.1rem
  }

  .withdrawals dl dd{
    width 3.45rem
    height  0.68rem
    display block
    float right
    margin-right 0.3rem
  }
  .withdrawals dl dd h5{
    width 4.45rem
    height  0.34rem
    display block
    float right
    text-align right
    font-size 0.2rem
    color #000000
    line-height 0.34rem
  }
  .withdrawals dl dd span{
    float right
    text-align right
    font-size 0.16rem
    color #676767
    line-height 0.34rem
    margin-left 0.1rem
  }

</style>










































































