<!--module-->
<template>
  <div class="p-bindphone-content">
    <back title="绑定的银行卡号"></back>
    <div class="p-bindphone">
      <div class="p-bindphone-item">
        <div>
          绑定的银行卡号 &nbsp;&nbsp;
          <!--($store.state.user.of_card||$store.state.user.userinfo.bankcard)-->
          <span>
            <!--{{$store.state.user.userinfo.bankcard | transPhoneFormate}}-->
            {{bankcard | transPhoneFormate}}
          </span>
        </div>
        <input type="button" value="修改" @click="$router.push('b-card')">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt} from 'api/recommend'

  export default {
    components: {
      Back
    },
    data() {
      return {
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        bankcard: '',
      }
    },
    mounted() {
      this.refreshToken()
//      console.log(this.$store.state.user.of_card,this.$store.state.user.userinfo.bankcard)
    },
    methods: {
      offBind() {
        alertip('敬请期待')
      },
      refreshToken() { // 刷新客户信息
        requestOpt.reqGet('userinfo?push_id=',sessionStorage.getItem('token') , res => {
          if (res.data.status===1) {
            this.bankcard = res.data.data.bankcard
            sessionStorage.setItem('userinfo',JSON.stringify(res.data.data))
          } else {
//            mt_toast(res.data.msg)
          }
        }, err => {
          mt_toast(err)
        })
      },
    }
  }
</script>

<style scoped lang="stylus">
  .p-bindphone-content {
    color: #000;
    font-size: .3rem;
    .p-bindphone {
      margin-top .88rem
      .p-bindphone-item {
        display flex
        justify-content space-between
        align-items center
        display -webkit-flex
        -webkit-justify-content space-between
        -webkit-align-items center
        margin  .98rem .2rem
        padding .2rem .1rem
        background #fff
        span {
          color #999
        }
        input[type=button] {
          padding .15rem .2rem
          border 0
          background #24b0ff
          color #fff
          font-size .32rem
          border-radius .08rem
        }
      }
    }
  }
</style>
