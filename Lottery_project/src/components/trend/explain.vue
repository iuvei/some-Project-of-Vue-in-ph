<!--代理说明-->
<template>
  <div class="agent-ins-content">
    <back :title="$route.params.name" go-back="true"></back>
    <!--<div style="width: 100%;height: 100%;display: block">-->
    <!--<img src="http://120.76.211.1:8093/proxy_instruction" alt="" style="width: 100%;height: 100%;display: block">-->
    <!--</div>-->
    <div v-html="proxy_ins" style="margin-top: .88rem">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from 'axios'
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'

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
      this.getProxyInstruction();
      mt_loading_open()
      setTimeout(() => {
        mt_loading_close()
      },5000)
    },
    mounted() {
//      this.proxy_ins  = this.$store.state.user.app_info.play_instruction_url+this.$route.params.typeid
    },
    computed: mapState({user: state => state.user}),
    methods: {
      getProxyInstruction() {
//        requestOpt.host+
        axios.get(this.$store.state.user.app_info.play_instruction_url+this.$route.params.code+'&pan='+this.$route.params.pan).then(
          res => {
            if (res) {
              this.proxy_ins = res.data
            } else {
              alertip(res.data.msg)
            }
            mt_loading_close()
          }).catch(
          err => {
            alertip(err)
          }
        )
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
