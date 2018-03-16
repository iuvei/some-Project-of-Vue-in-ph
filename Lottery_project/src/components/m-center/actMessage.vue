<template>
  <div class="activites-content">
    <div class="activites-head">
      <ul>
        <li class="activites-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="activites-head2 title" @click="hideDailog">
          <span>{{act_name}}</span>
          <i class="triangle-down"></i>
        </li>
        <li class="activites-head3">
        </li>
      </ul>
    </div>
    <!--下拉显示-->
    <transition name="fade">

      <div v-show="isShow" class="header-is-active" @click="hideDailog">

        <div class="header-modal-content">
          <ul>
            <li :class="{red: act_active == items.code}" v-for="(items, key) in act_tabs" @click="act_chk(items.code,items.name)">{{items.name}}</li>
          </ul>
        </div>
      </div>
    </transition>
    <nop-data v-if="messgae.length==0"></nop-data>
    <!--<div  v-loading.body="loading" element-loading-text="加载中..."></div>-->
  </div>

</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import {alertip, requestOpt, mt_toast} from 'api/recommend'
  import {mapState} from 'vuex'
  import NopData from '@/components/tab/nop-data'

  export default {
    components: {
      Back,
      NopData,
    },
    data() {
      return {
        messgae:[],
        isShow: false,
        loading: false,
        page: 1,
        type: 0,
        act_active: 0,
        act_name: '所有消息',
        act_tabs: [
          {name: '全部消息', code: 0},
          {name: '活动消息', code: 1},
          {name: '系统消息', code: 2},
          {name: '投注消息', code: 3},
          {name: '用户消息', code: 4},
          {name: '财务消息', code: 5},
        ]
      }
    },
    props: {
      title: {
        type:String
      }},
    computed: mapState({user: state => state.user}),
    mounted() {
      this.getMessage()
    },
    methods: {
      act_chk(v,n) {
        this.act_active = v;
        this.act_name = n;
      },
      hideDailog(i) {
        this.isShow = !this.isShow;
      },
      getMessage() { // message
        this.loading = true;
        let url = 'msg_list?page='+ this.page+'&msg_type='+this.type;
        requestOpt.reqGet(url, sessionStorage.getItem('token'), (res) => {
          if(res.data.status === 1) {
            console.log(res.data.data.list)
            this.messgae = res.data.data.list;
          } else {
            mt_toast(res.data.msg);
          }
        }, (err) => {
          mt_toast(err)
        });
        setTimeout(() => {
          this.loading = false;
        },3000);
      }
    },
    created() {
//      this.bet_records();
    }

  }


</script>

<style scoped lang="stylus">
  .activites-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
  .activites-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .activites-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .activites-head ul li{
    height: 0.88rem;
    display: block;
  }
  .activites-head1{
    width: 2rem
    float left
  }
  .activites-head1 a{
    width: 2rem
    height 0.88rem
    display block
  }
  .activites-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .activites-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.32rem;
    font-weight :normal;
    color: #ffffff;
    float :left
  }
  .activites-head3{
    width: 2rem;
    float right
  }
  //小三角
  .triangle-down {
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 8px solid #ffffff;
    display inline-block
  }

  //  下拉内容
  .header-is-active{
    width 7.5rem
    height 13.34rem
    position fixed
    z-index 999
    top 0.88rem
  }
  .header-modal-content{
    width 7.5rem
    /*height 2.4rem*/
    background #ffffff
    display block
  }
  .header-modal-content ul:after {
    content ''
    display block
    clear both
  }

  .header-modal-content ul li{
    width 2.3rem
    height 0.6rem
    float left
    display block
    margin-left 0.12rem
    margin-top 0.12rem
    background  #eeeeee
    font-size 0.24rem
    color #222222
    text-align center
    line-height 0.6rem
    border 1px solid #ffffff
    border-radius 0.04rem
    &:last-child {
      margin-bottom .12rem
    }
  }
  .header-modal-content ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }
</style>
