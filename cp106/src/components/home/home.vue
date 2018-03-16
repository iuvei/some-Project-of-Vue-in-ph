<template>
  <div class="home">
       <NopNote></NopNote>
       <TopLoginReg></TopLoginReg>
       <TopTab :tabNum="1"></TopTab>
       <!-- <Swiper> </Swiper> -->
       <div class="home-cont">
           <ContLeft></ContLeft>
            <ContRight></ContRight>
       </div>
        <BottomHelp></BottomHelp>
        <BottomCommon></BottomCommon>
        <Fixmid></Fixmid>
        <Qiandao></Qiandao>
        <InfoPanel></InfoPanel>
        <PublicNotice></PublicNotice>
  </div>
</template>

<script>

import { requestOpt, el_tip } from '../../api/recommend'
import NopNote from '../topCommon/topNote'
import TopLoginReg from '../topCommon/topLoginReg'
import TopTab from '../topCommon/topTab'
import ContLeft from '../home/contLeft'
import ContRight from '../home/contRight'
import BottomHelp from './bottomHelp'
import BottomCommon  from '../topCommon/botCommon'
import Fixmid from '../common/fixmid'
import InfoPanel from '../topCommon/infoPanel'
import Qiandao from './qiandao'
import PublicNotice from './publicNotice'
export default {
  name: 'Home',
  components:{
     
      NopNote,
      TopLoginReg,
      TopTab,
      ContLeft,
      ContRight,
      BottomHelp,
      BottomCommon,
      Fixmid,
      InfoPanel,
      Qiandao,
      PublicNotice
    //   Dialogtry
  },
  data () {
    return {
        switch_num:1,
        app_config:[]
    }
  },
  methods:{

      getConfig_data(){
          this.app_config = JSON.parse(sessionStorage.getItem('app_config'));
          if(!this.app_config){
                requestOpt.reqnoGet('config',
                (res)=>{
                    if(res.data.status == 1 || res.status == 200){
                        this.app_config = res.data.data.config;
                        sessionStorage.setItem('app_config',JSON.stringify(res.data.data.config));
                    }else if(res.data.status == 0 && res.data.code == -2){
                        el_tip(res.data.msg + ' 请重新登录');
                        sessionStorage.removeItem('user')
                        setTimeout(()=>{
                            window.location.reload();
                            this.$root.bus.$emit("sendData",true);
                        },1000)
                    }
                    else{
                         el_tip(res.data.msg)
                    }
                },
                (err)=>{
                          el_tip(err.data.msg)
                })
          }
       
      }
  },
  mounted(){
      this.getConfig_data();
  }

}
</script>

<style scoped>

.home-cont{
    width: 1200px;
    margin: 0 auto;
    height: auto;
}

.home-cont::after{
    display: block;
    content: "";
    height: 0;
    line-height: 0;
    visibility: hidden;
    clear: both;
}

</style>
