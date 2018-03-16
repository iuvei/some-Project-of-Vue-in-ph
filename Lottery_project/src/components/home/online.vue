<!--代理说明-->
<template>
  <div style="height: 100%">
    <back title="在线客户" go-back="true"></back>
    <!--<div style="width: 100%;height: 100%;display: block">-->
    <!--<img src="http://120.76.211.1:8093/proxy_instruction" alt="" style="width: 100%;height: 100%;display: block">-->
    <!--</div>-->
    <!-- v-html="proxy_ins"-->
    <div style="width: 100%;height: 100%" >
      <iframe :src="proxy_ins"  frameborder="0" style="width: 100%;height: 100%;margin-top: .9rem;"></iframe>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'
  import qs from 'qs'

  export default {
    components: {
      Back
    },
    data() {
      return {
        proxy_ins: '',
      }
    },
    created() {
//      this.getProxyInstruction();
     /* mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },3000)*/
    },
    mounted() {
      // window.location.protocol
      this.proxy_ins = 'https:'+this.$store.state.user.app_info.client_service_url.substr(this.$store.state.user.app_info.client_service_url.indexOf('://')+1)
      console.log(this.proxy_ins)
    },
    computed: mapState({user: state => state.user}),
    methods: {
      getProxyInstruction() {

/*
          var url = this.$store.state.user.app_info.client_service_url;
          $.ajax({
            url: url,
            type: 'GET',
            dataType: 'jsonp',
            crossDomain: true,
            success: function(data) {
              console.log(data)
            }
          });*/

        /*axios.get(this.$store.state.user.app_info.client_service_url)
          .then(response => {
            console.log(response);
          })
          .catch(err => {
            console.log(err);
          });*/
        // this.$store.state.user.app_info.client_service_url
        /*axios.get('/api').then(
          res => {
            if (res) {
              this.proxy_ins = res.data
              console.log(this.proxy_ins)
            } else {
              alertip(res.data.msg)
            }
            mt_loading_close()
          }).catch(
          err => {
          }
        )*/

        /*this.$http.get('/apis').then(res => {
          console.log(1)
        }, err => {
          console.log(2)
        })*/
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
