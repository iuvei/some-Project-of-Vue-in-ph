<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import { requestOpt } from './api/recommend'
import { getAppInfo, getPubplays, GetData } from './api/publicInterface'
import { messageBox } from 'element-ui';
export default {
  name: 'app',
  components:{
  },
  data(){
      return{
          All:[]
      }
  },
  methods:{

  },
  mounted(){
    getAppInfo(res => {
      if (res.data.status === 1) {
        let config = res.data.data.config
        window.proxy_default_rate = res.data.data.config.proxy_default_rate
        window.sessionStorage.setItem('app_config', JSON.stringify(config))
//        console.log(config)
      }
    });
    getPubplays(res => {
      if (res.data.status === 1) {
        let list = res.data.data.list
        window.sessionStorage.setItem('play_list',JSON.stringify(list))
      }
    });
    GetData.getlotteryList(res => {
      if (res.data.status === 1) {
        let list = res.data.data.list
        window.sessionStorage.setItem('lot_list', JSON.stringify(list))
      }
    })
  }
}
</script>

<style scoped>

#app{
  background: url('./image/body_bg.png') repeat 0 0;
}

</style>
