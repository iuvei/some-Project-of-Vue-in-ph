<template>
  <div class="promotions">
      <TopNote></TopNote>
      <TopLoginReg></TopLoginReg>
      <TopTab :tabNum="4"></TopTab>
      <div class="promotions_banner"> </div>
      <div class="promotions_banner_wrap">
          <div class="promotions_banner_cont">
             <!-- <ProTab></ProTab> -->
                <sonPromo></sonPromo>
          </div>
      </div>
      <BotCommon></BotCommon>
      <Qiandao></Qiandao>
      <InfoPanel></InfoPanel>
  </div>
</template>

<script>
import TopLoginReg from '../topCommon/topLoginReg'
import TopTab from '../topCommon/topTab'
import TopNote from '../topCommon/topNote'
import ProTab from './proTab'
import sonPromo from './son_promo'
import BotCommon from '../topCommon/botCommon'
import Qiandao from '../home/qiandao'
import InfoPanel from '../topCommon/infoPanel'

export default {
  name: 'Promotions',
  components:{
      TopLoginReg,
      TopTab,
      TopNote,
      ProTab,
      BotCommon,
      Qiandao,
      sonPromo,
      InfoPanel

  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>

    .promotions_banner{
        width: 100%;
        height: 300px;
        background: url('../../image/shiwan_banner_.png') no-repeat center;
    }

    .promotions_banner_wrap{
        width: 100%;
        background: #fff;
        padding: 20px 0;
    }
    .promotions_banner_cont{
        width: 1200px;
        margin: 0 auto;
    }

    div.tablist .el-tabs__item.is-active{
        color: #d50000;
    }

</style>
