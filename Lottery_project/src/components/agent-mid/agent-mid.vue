<!--代理中心-->
<template>
  <div class="agent-mid-content">
    <back title="代理中心" go-back="true"></back>
    <div class="user-info">
      <dl>
        <dt>
          <!--<img v-if="user.userinfo.avatar" :src="user.userinfo.avatar" alt="">-->
          <img v-if="userinfo.avatar" :src="userinfo.avatar" alt="">
          <img v-else src="../../images/personal1.png" alt="用户头像" />
        </dt>
        <dd>
          <div>
            <span> 用 户 名 ：</span>
            <span>{{userinfo.username}}</span>
          </div>
          <div>
            <span>账户余额：</span>
            <span>{{userinfo.balance?userinfo.balance:'0.00'}}元</span>
          </div>
          <div>
            <span>彩票返点：</span>
            <span>
              {{userinfo.return_ratio}}
            </span>
          </div>
        </dd>
      </dl>
    </div>
    <!--列表-->
    <div class="agent-list">
      <router-link tab="div" class="tab-item" to="/agent-ins">
        <dl>
            <dt>{{!userinfo.is_trail?'代理说明':'成为代理'}}</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <div class="agent-list" v-if="!userinfo.is_trail">
      <router-link tab="div" class="tab-item" to="/lower-account">
        <dl>
            <dt>下级开户</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <div class="agent-list" v-if="!userinfo.is_trail">
      <router-link tab="div" class="tab-item" to="/user-manage">
        <dl>
            <dt>用户管理</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <div class="agent-list" v-if="!userinfo.is_trail">
      <router-link tab="div" class="tab-item" to="/agent-commission">
        <dl>
            <dt>代理佣金</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
    <div class="agent-list"  v-if="!userinfo.is_trail">
      <router-link tab="div" class="tab-item" to="/personal-reports">
        <dl>
            <dt>报表查询</dt>
            <dd><img src="../../images/my_more.png" alt="右箭头"/></dd>
        </dl>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back
    },
    data() {
      return {
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
      /*  username: this.user.userinfo.username,
        balance: this.user.userinfo.balance,
        avate:  this.user.userinfo.avatar,
        return_ratio:this.user.userinfo.return_ratio',
        is_trail: window.userMsg?window.userMsg.userinfo?window.userMsg.userinfo.is_trial?false:true:false:false,*/
      }
    },
    computed: mapState({user: state => state.user}),
    created() {
      /*if (!window.userMsg||!window.userMsg.token) {
        this.$router.push('/login')
      }*/
    },
  }
</script>

<style scoped lang="stylus">
 .agent-mid-content {
   width: 7.5rem;
   height: 100%;
   overflow: hidden;
   background-color: #eee;
   color: #000;
   font-size: .3rem;
 }
 /*用户信息*/
 .user-info {
   display flex
   justify-content center
   align-items center
   display -webkit-flex
   -webkit-justify-content center
   -webkit-align-items center
   position relative
   top .88rem
   padding .5rem 0
   margin-bottom .2rem
   background #eee
   dl {
     display flex
     align-items center
     display -webkit-flex
     -webkit-align-items center
     width 100%
     dt {
       float left
       width 1.06rem
       height 1.06rem
       margin-right .45rem
       margin-left .45rem
       img {
         width 100%
         height 100%
         border-radius 50%
       }
     }
     dd {
       float left
       div {
         padding .2rem 0
         /*margin-bottom .1rem*/
         /*&:last-child {
           margin-bottom 0
         }*/
       }
     }
   }
 }

 /*列表*/
 posloca {
   position relative
   top .88rem
 }
 .agent-list {
   @extend posloca
   background-color #f5f5f5
   padding 0.3rem
   border-bottom 1px solid #eaeaea
   dl {
     display flex
     justify-content space-between
     align-items center
     display -webkit-flex
     -webkit-justify-content space-between
     -webkit-align-items center
     color #000
     dd {
       height .4rem
       img {
         height .32rem
         padding 2px
       }
     }
   }
 }
</style>
