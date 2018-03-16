<template>
  <div class="notice">
    <div class="notice-container">
      <div class="notice-left">
        <span>全部彩种</span>
      </div>
      <div class="notice-right">
        <div class="notice-right-l">
          <i class="fa fa-volume-up"></i>
          <p @click="$router.push('/topNoteDetail')">
            <marquee scrollamount="2">
              <span v-for="item in notice">{{item.content}}</span>
              <!--<span >{{notice}}</span>-->
            </marquee>
          </p>
        </div>
        <div class="notice-right-r">
          <button @click="toInstruction">玩法说明</button>
          <button @click="onLine">在线客服</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Notice',
    components:{

    },
    props: ['code','pan'],
    data () {
      return {
        notice: sessionStorage.getItem('topNotice')&&JSON.parse(sessionStorage.getItem('topNotice')),
        app_config: sessionStorage.getItem('app_config')&&JSON.parse(sessionStorage.getItem('app_config'))
      }
    },
    methods: {
      onLine() {
//        location.href = this.app_config.client_service_url
        window.open(this.app_config.client_service_url)
      },
      toInstruction() {
          console.log(this.code,this.pan)
        this.$router.push('/instructions/'+this.code+'/'+this.pan)
      }
    }
  }
</script>

<style scoped lang="stylus">
.notice {
  width 100%
  height 44px
  color #fff
  background #0047aa
  .notice-container {
    display flex
    align-items center
    height inherit
    .notice-left {
      flex-basis  220px
      text-align left
      text-indent 20px
    }
    .notice-right {
      flex-grow 1
      display flex
      align-items center
      font-size 12px
      .notice-right-l  {
        display flex
        flex 9
        padding 0 20px
        i {
          flex 1
          font-size 1.2rem
        }
        p {
          flex 11
        }
      }
      .notice-right-r  {
        flex-grow 1
        display flex
        justify-content flex-end
        flex 3
        button {
          -webkit-appearance none
          height 15px
          background transparent
          border none
          border-left 1px solid #fff
          color #fff
          line-height 15px
          font-size 12px
        }
      }
    }
  }
}
</style>
