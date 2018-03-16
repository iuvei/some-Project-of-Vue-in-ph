<template>
  <div id="m-header">
    <ul>
      <li class="user-n">
        <!--<router-link  class="header-item1" to="/login" v-if="status">-->
          <div class="header-item1"  >
            <span class="tab-link" v-if="status">
              <span @click="$router.push('/login')">登录</span>&nbsp;&nbsp;<span @click="$router.push('/register')">注册</span>
            </span>
            <span class="tab-link username" @click="toLink" v-else>
              <span v-if="userinfo">{{userinfo.username}}</span>
            </span>
          </div>
    
      </li>
      <li class="title">
        <span class="header-item2">至尊彩票</span>
      </li>
      <li class="register">
   
          <span class="tab-link" @click="toOpen">开奖</span>
      
          <span class="tab-link" @click="toRecharge">充值</span>
      </li>
    </ul>

    <!--签到-->
    <sign v-if="signflag" @close="signflag = false"></sign>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import {USER_SIGNIN} from '../../store/user'
  import sign from '@/components/home/sign'
  import {mt_toast} from 'api/recommend'
  export default {
    components:{
      sign
    },
    props:{
      status: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        signflag: false,
        userinfo: JSON.parse(sessionStorage.getItem('userinfo'))
      }
    },
  
    mounted() {

    },
    methods: {
      openSign() {
        if(sessionStorage.getItem('login')) {
          this.signflag = true
        } else {
          this.$router.push('/login');
        }
      },
      toOpen() {
        if(sessionStorage.getItem('login')) {
          this.$router.push('/betting/1')
        } else {
          this.$router.push('/login');
        }
      },
      toLink() {
        if(this.status) {
          this.$router.push('/login');
          this.$store.commit('LOGINFLAG','home')
        } else {
          this.$router.push('/personals');
        }
      },
      toRecharge() {
        if (!sessionStorage.getItem('login')) {
          this.$router.push('/login')
        } else {
          if (!sessionStorage.getItem('userinfo').is_trial) {
            this.$router.push('/recharge-type')
          } else {
            mt_toast('试玩账号不能进行充值操作！')
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  #m-header{
    width :7.5rem;
    height :0.88rem;
    background : #ff3a3b;
    font-size :0.36rem;
    display :block;
    position fixed
    z-index 1
  }
  #m-header ul {
    display flex
    justify-content space-between
  }
  #m-header ul li{
    float left;
    height 0.88rem;
    text-align center
    line-height :0.88rem;
  }

  #m-header{
      z-index 100;
  }
  .user-n{
    max-width 3rem
    position relative
    left 0.1rem
    padding 0 0.2rem;
   
    .username {
      display inline-block
      max-width 2.8rem
      overflow hidden
      text-overflow hidden
      white-space nowrap
    }
  }
  .title{
    /*width 3.9rem*/
  }
  .register{
    /*width 1.5rem*/
    position relative
    right  0.1rem
  }
  .register span{
    display block
    width 0.95rem
    padding-right .1rem
    height 0.88rem
    float left
  }

  .icon-user{
    display block
    width  .65rem
    height 0.32rem
    background  gold
    float left
  }
  #m-header ul li span{
    display inline-block
    height .88rem
    color #ffffff;
    font-size 0.36rem
  }
  #m-header ul li.title span{
    color #ffffff;
    font-size 0.36rem
  }


</style>
