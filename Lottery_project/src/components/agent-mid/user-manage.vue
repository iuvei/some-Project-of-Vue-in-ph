<!--用户管理-->
<template>
  <div class="user-manage-content">
    <div id="back">
      <div class="back-content">
        <a class="back-btn" @click="$router.go(-1)" >
          <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
        </a>
        <span class="back-title" >用户管理</span>
        <router-link to="/lower-account" tag="div">
        <div class="back-title-right">
            <i class="el-icon-plus"></i>
            <span>添加用户</span>
        </div>
        </router-link>
      </div>
    </div>
    <div class="user-manage">
      <!--搜索-->
      <div class="user-serch">
        <input type="text" placeholder="请输入用户名" v-model="username">
        <i class="el-icon-search" @click="getList"></i>
      </div>
      <!--user-->
      <div class="user-curr-list">
        <div class="user-curr-grade">
          <h4>当前用户层级</h4>
          <div class="user-curr-item">
            <span>
              <!--{{user.userinfo.username}}-->
              <!--{{user.userinfo.proxy_level | transProxylevel}}-->
              {{userinfo.proxy_level | transProxylevel}}
            </span>
          </div>
        </div>
      </div>
      <table>
        <thead>
        <tr>
          <th>用户名</th>
          <th>用户投注</th>
          <th>充值金额</th>
          <th>提现金额</th>
          <th>账号余额</th>
          <th>下级人数</th>
          <th>下线投注</th>
          <th>下线佣金</th>
          <th>类型</th>
          <th>返点</th>
          <th>代理等级</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(items, $index) in datas">
          <td>{{items.username}}</td>
          <td>{{items.self_bet_amount}}</td>
          <td>{{items.charge_amount}}</td>
          <td>{{items.withdraw_amount}}</td>
          <td>{{items.balance}}</td>
          <td>{{items.downline_count}}</td>
          <td>{{items.downline_bet_amount}}</td>
          <td>{{items.downline_commission}}</td>
          <td>{{items.proxy_type | transAccountType}}</td>
          <td>{{items.return_ratio}}</td>
          <td>{{items.proxy_level}}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <no-data v-if="datas.length===0"></no-data>

  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NoData from '@/components/tab/no-data'
  import {requestOpt, dtFormate, alertip, mt_loading_open, mt_loading_close} from 'api/recommend'
  import {mapState} from 'vuex'

  export default {
    components: {
      Back,
      NoData
    },
    data() {
      return {
        type: 0,
        page: '',
        username: '',
        datas: [],
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
      }
    },
    computed: {
      ...mapState(['user'])
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        mt_loading_open();
        // sessionStorage.getItem('token')  this.user.token
        requestOpt.reqGet('proxy_downlines?proxy_type='+this.type+'&page='+this.page+'&username='+this.username,sessionStorage.getItem('token'), res => {
          if(res.data.status === 1) {
            mt_loading_close()
            this.datas = res.data.data.list
            console.log(res.data.data)
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            alertip(res.data.msg)
          }
        }, err => {
          alertip(err)
        })
        setTimeout(() => {
          mt_loading_close()
        },5000)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .user-manage-content {
    width: 7.5rem;
    height 100%
    /*height: 13.34rem;*/
    /*overflow: hidden;*/
    background-color: #eee;
    color: #000;
    font-size: .3rem;
  }
  poscola {
    position relative
    top .88rem
  }
  #back{
    width :7.5rem;
    height :0.88rem;
    background #ff3a3b;
    display :block;
    position fixed
    top: 0
    z-index 999
  }
  .back-content{
    width 6.9rem
    margin auto
    height :0.88rem;
    display: block;
    line-height: 0.88rem;
  }
  .back-title{
    height :0.88rem;
    float left
    display block
    text-align center
    font-size 0.32rem
    font-weight normal
    line-height 0.88rem
    z-index 8
    width :2.9rem;
    color: #ffffff;
  }
  .back-btn{
    width: 2rem
    height 0.88rem
    display block
    float left
  }
  .back-btn img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    float left
    position relative
    top: 0.29rem
  }
  .back-title-right{
    width 2rem
    height 0.88rem
    display block
    float right
    z-index 3
    text-align right
    color #fff
  }

  .user-manage {
    @extend poscola
    .user-serch {
      position relative
      padding .3rem
      background #fff
      input {
        width 80%
        height 0.7rem
        border 1px solid #ddd
        border-radius .08rem
        background none
        box-shadow none
        resize none
        box-sizing border-box
        -webkit-appearance none
        line-height .7rem
      }
      i {
        position absolute
        top 0.15rem
        right .3rem
        padding .3rem
        color #24b0ff
        font-size .36rem
      }
    }
    .user-curr-list {
      margin .3rem
      width auto
      font-size .26rem
      h4 {
        padding-bottom .2rem
      }
      span {
        display inline-block
        min-width 1rem
        padding 0.08rem .1rem
        text-align center
        border 1px solid #999
        font-size .3rem
        border-radius .08rem
      }
    }
    table {
      display block
      overflow scroll
      border 1px solid #ddd
      background #fff
      th {
        width 20rem
        padding .15rem .35rem
        white-space nowrap
      }
      td {
        width 20rem
        padding .15rem .05rem
        border-top 1px solid #ccc
        text-align center
      }
    }



  }

</style>
