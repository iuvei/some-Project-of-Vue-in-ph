<template>
  <div class="forget_content" >
    <back title="忘记密码"></back>
    <div class="forget">
      <form action="#">
        <dl>
          <dt>用户名</dt>
          <dd>
            <input type="text" placeholder="请输入用户名" v-model="rest.username" autofocus required>
          </dd>
        </dl>
        <dl>
          <dt>设置密码</dt>
          <dd>
            <input type="password" placeholder="请输入新的密码" minlength="6" v-model="rest.password">
          </dd>
        </dl>
        <dl>
          <dt>确认密码</dt>
          <dd>
            <input type="password" placeholder="请再次输入新的密码" minlength="6"  v-model="rest.password_confirm">
          </dd>
        </dl>
        <dl>
          <dt>手机号码</dt>
          <dd>
            <!--pattern="[0-9]{11}"-->
            <input type="text" placeholder="请输入绑定的手机号"  v-model="rest.phone">
          </dd>
        </dl>
        <dl>
          <dt>验证码</dt>
          <dd style="width: 2.5rem">
            <input style="width: 100%" type="text" placeholder="请输入验证码" minlength="6"  v-model="rest.code">
          </dd>
          <dd class="get-code" :class="isCl?'no':'ok'">
            <input type="button" value="获取验证码"   @click="sendCode" :disabled="isClFn"/>
          </dd>
        </dl>
        <dl class="forget_succeed">
          <input type="button" class="succeed" id="succeed" value="完成"  @click="OK">
        </dl>
      </form>
    </div>

  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt,mt_loading_open,mt_loading_close} from 'api/recommend'
  export default {
    components: {
      Back
    },
    data() {
      return {
        rest: {
          username: '',
          code: '',
          password: '',
          password_confirm: '',
          phone: '',
        },
        isCl: true
      }
    },
    computed: {
      isClFn() {
        if(this.rest.username.length>0&&this.rest.phone.length===11&&/\d/g.test(this.rest.phone)) {
          this.isCl = false
          return false
        }else {
          this.isCl = true
          return true
        }
      }
    },
    filter: {

    },
    watch: {

    },
    methods: {
      sendCode() {
        requestOpt.reqPostNouser('password_code', {
          username: this.rest.username,
          phone: this.rest.phone,
        }, res => {
          if (res.data.status === 1) {
            this.rest.code = res.data.data
          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      },
      OK() {
        requestOpt.reqPutuser('password', {
          code: this.rest.code,
          password: this.rest.password,
          password_confirm: this.rest.password_confirm,
          phone: this.rest.phone,
        }, res => {
          if (res.data.status === 1) {

          } else {
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .forget_content{
    width :7.5rem;
    display block
    overflow hidden
    background #eeeeee
  }
  .forget{
    width 6.9rem
    height 8rem
    display block
    margin auto
    background #eeeeee
    margin-top 1rem
  }
  .forget dl{
    width 6.9rem
    height 0.68rem
    margin-top 0.12rem
    background #ffffff
    line-height 0.68rem
  }
  .forget dl dt{
    float left
    margin-left 0.1rem
    width 1.5rem
    font-size 0.3rem
    color #000000
  }
  .forget dl dd{
    font-size 0.3rem
    color #000000
    float left
    margin-left 0.12rem
  }
  .forget dl dd input{
    fborder:none
    outline:none
    /*width 4rem*/
    height 0.68rem
  }
  .forget dl dd.get-code{
    float right
    display block
    border-radius 4px
    width 1.72rem
    height 0.5rem
    text-align center
    margin-top 0.13rem
    margin-right 0.1rem
    &.ok{
      background #35b5fe
    }
    &.no{
      background #999
    }
  }
  .forget dl dd.get-code input{
    color #ffffff
    background none
    display block
    border:none
    outline:none
    width 1.72rem
    height 0.5rem
    font-size 0.3rem
    line-height 0.5rem

    float right
  }
  .succeed{
    display block
    width 6.9rem
    text-align center
    font-size 0.32rem
    color #ffffff
    background none
    border:none
    outline:none
    margin-top 0.11rem
    height: 0.8rem;
    line-height: 0.8rem;
    font-weight: normal;

  }
  dl.forget_succeed{
    display block
    width 6.9rem
    text-align center
    font-size 0.32rem
    color #ffffff
    background #ff3a3a
    border:none
    outline:none
    margin-top 0.11rem
    height: 0.8rem;
    line-height: 0.8rem;
    font-weight: normal;
    border-radius: 4px;
  }
  .forget dl dd input {
    caret-color:red;
  }
</style>










































































