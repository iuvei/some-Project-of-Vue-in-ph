<template>
  <div class="betting-content">
    <goback title="账户明细"></goback>
    <all></all>
    <n-data></n-data>
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
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .betting-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }







</style>










































































