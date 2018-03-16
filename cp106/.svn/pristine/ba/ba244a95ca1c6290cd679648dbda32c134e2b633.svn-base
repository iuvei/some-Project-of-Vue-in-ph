<template>

    <div class="instructions">
        <TopNote></TopNote>
        <TopLoginReg></TopLoginReg>
        <TopTab></TopTab>
        <div class="inst_wrap">
            <div class="inst_cont">
                <h3>首页 > 玩法说明</h3>
                <InstTab :code="code" :pan="pan"></InstTab>
                <!--<div class="return_top">
                  <a href="#return-top" id="return_top_btn" style="color:#d50000"> 回到顶部 </a>
               </div>-->
            </div>
        </div>
        <!--<BotCommon></BotCommon>-->
    </div>

</template>

<script>

    import TopNote from '../topCommon/topNote'
    import TopLoginReg from '../topCommon/topLoginReg'
    import TopTab from '../topCommon/topTab.vue'
    import InstTab from './inst_tab.vue'
    import BotCommon from '../topCommon/botCommon.vue'
    export default{
        name: 'Instructions',
        components :{
            TopNote,
            TopLoginReg,
            TopTab,
            InstTab,
            BotCommon
        },
      data() {
        return {
          code: this.$route.params.code || 'CQSSC',
          pan: this.$route.params.pan || 1
        }
      },
        methods:{

        },
        mounted(){
        }

    }

</script>

<style scoped>

.inst_wrap{
    background: #f2f2f2;
}
.inst_cont{
    width: 1200px;
    margin: 0 auto;
}

.inst_cont>h3{
    font-size: 12.5px;
    color: #000;
    padding:  12px 0px;
    border-bottom: 2px solid #ddd;
}


    .return_top{
        padding: 15px;
        position: fixed;
        bottom: 50px;
        right: 150px;
        cursor: pointer;
        z-index: 20;
    }

    .return_top::before{
        content: "" ;
        display: inline-block;
        width: 30px;
        height: 30px;
        background: url('../../image/return_top.png') no-repeat center / cover;
        vertical-align: middle;
    }

</style>

