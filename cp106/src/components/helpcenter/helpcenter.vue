<template>
   
   <div class="helpcenter" id="help">
       <TopNote></TopNote>
       <TopLoginReg></TopLoginReg>
       <topTab></topTab>
       <div class="help_center">
           <div class="help_center_cont">
               <h2>帮助中心</h2>
               <tabHelp> </tabHelp>
           </div>
       </div>
        <Qiandao></Qiandao>
       <InfoPanel></InfoPanel>
       <BotCommon></BotCommon>
   </div>
   
</template>


<script>    

    import TopNote from '../topCommon/topNote'
    import TopLoginReg from '../topCommon/topLoginReg'
    import topTab from '../topCommon/topTab.vue'
    import tabHelp from './tabHelp.vue'
    import BotCommon from '../topCommon/botCommon.vue'
    import Qiandao from '../home/qiandao'
    import InfoPanel from '../topCommon/infoPanel'
    export default{
        name : 'Helpcenter',
        components:{
            TopNote,
            TopLoginReg,
            topTab,
            tabHelp,
            BotCommon,
            Qiandao,
            InfoPanel
        }
    }

</script>


<style scoped>

    .help_center{
        width: 100%;
        background: #f2f2f2;
    }

    .help_center_cont{
        width: 1200px;
        margin: 0 auto;
        padding-top: 10px;
    }

    .help_center_cont>h2{
        width: 95%;
        padding: 10px 0px;
        font-size: 20px;
        border-bottom: 1.5px solid #fff;
    }


</style>

