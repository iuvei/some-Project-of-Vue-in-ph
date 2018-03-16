<template>
  <div class="t-password-content">
    <back title="修改密码" go-back="true"></back>
    <div class="t-password">
      <dl>
        <dt>原始密码</dt>
        <dd class="verification1">
          <input type="password" placeholder="请输入旧的密码" maxlength="24" v-model="old">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd class="verification1">
          <input type="password" placeholder="请输入要修改的新密码" maxlength="24" v-model="new_pw">
        </dd>
      </dl>
      <dl>
        <dt>新密码</dt>
        <dd class="verification1">
          <input type="password" placeholder="请确认新的密码" maxlength="24" v-model="new_">
        </dd>
      </dl>
      <dl  class="verification3">
        <input type="button" value="确认" @click="updatePW">
      </dl>
    </div>
    <modal v-if="showModule" @close="showModule = false" :body="modalBody"></modal>
  </div>

</template>


<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import modal from '@/components/public/modal_comfire'
  import {alertip, requestOpt,mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back,
      modal,
    },
    data() {
      return {
        showModule: false,
        modalBody: '登录密码修改成功',
        old: '',
        new_pw: '',
        new_: ''
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!this.user.token) {
        this.$router.push('/login')
      }*/
    },
    methods: {
      updatePW() {
        //  sessionStorage.getItem('token')  this.user.token
        requestOpt.reqPutAuthUser('password', sessionStorage.getItem('token'), {
          old_pass: this.old,
          new_pass: this.new_pw,
          new_pass_confirm: this.new_
        }, res => {
          if (res.data.status===1) {
            this.showModule = true
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            mt_toast(res.data.msg);
            /*if (res.data.code === -2 || res.data.code === -3) {
              this.$router.replace('/login')
            } else {
              mt_toast(res.data.msg);
            }*/
          }
        //   t-password
//         this.$router.push('/personals')
        }, err => {
          mt_toast(err)
        })
      }
    }
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .t-password-content{
    width :7.5rem;
    // height: 13.34rem;
    height: 100%;
    display block
    overflow auto
    background #eeeeee
  }
  .t-password{
    width 7.1rem
    height 8rem
    display block
    margin auto
    margin-top 0.98rem
  }
  .t-password dl{
    width 7.1rem
    height 0.88rem
    display block
    background #ffffff
    line-height 0.88rem
    margin-top 0.1rem
  }
  .t-password dl  dt{
    width 1.5rem
    height 0.88rem
    display inline-block
    color #000000
    font-size 0.34rem
    margin-left 0.1rem
    float left
    margin-right 0.2rem;
  }
  .t-password dl  dd.verification1{
    width 5rem
    height 0.86rem
    display inline-block
    color #000000
    font-size 0.34rem
    float left
  }
  .verification1 input[type=password]{
    position relative
    top -1px
    width 5rem
    height 0.68rem
    line-height 0.68rem
    color #000000
    font-size 0.34rem
    border none
    outline none
  }
  .t-password dl.verification3{
    margin-top 0.4rem
  }
  .t-password dl.verification3 input{
    width 7.1rem
    height 0.88rem
    color #ffffff
    background #ff3a3a
    display block
    border:none
    outline:none
    border-radius 0.04rem
    font-size 0.36rem
  }
</style>










































































