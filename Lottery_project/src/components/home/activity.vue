<template>
  <div class="activity-content">
    <!--头部-->
    <div class="activity-head">
      <ul>
        <li class="activity-head1">
          <a  onclick="history.go(-1)" >
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="activity-head2">
          {{$route.params.title}}
        </li>
        <li class="activity-head3" @click="getData">
          <Icon type="refresh" color="#fff" size="20"/>
          <!--<img src="../../images/shuaxin.png" alt="" @click="getData">-->
        </li>
      </ul>
    </div>
    <!--渲染列表-->
    <div class="activity" v-if="data.length===0">
      <p style="text-align: center;color: #999">
        无数据
      </p>
    </div>
    <!--v-html='data'-->
    <div class="activity" v-else v-html='data'>
      <!--<iframe :src="'https://www.soarg888.com/api/v1/activity?act_id='+$route.params.id" frameborder="0" style="width: 100%;height: 100%;margin-top: .98rem;"></iframe>-->
    </div>

  </div>
</template>


<script type="text/ecmascript-6">
  import {getRecommend, getDiscList, requestOpt, alertip} from 'api/recommend'

  export default {
    components: {

    },
    //data
    data() {
      return {
        data : []
      }
    },
//    调取后台数据
    mounted(){
      this.getData()
//      window.open('https://www.soarg888.com/api/v1/activity?act_id='+this.$route.params.id)
    },
    methods: {
      getData() {
        requestOpt.reqnoGetpara('activity?act_id='+this.$route.params.id, {}, (res) => {
          this.data = res.data;
        }, (err) => {
//          alertip(err)
        });
      }
    }
    //
  }

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .activity-content{
    width :7.5rem;
    height: 13.34rem;
    display block
    overflow auto
    background #eeeeee
  }
//    头部样式

  .activity-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 9;
  }
  .activity-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .activity-head ul li{
    height: 0.88rem;
    display: block;
  }
  .activity-head1{
    width: 1.5rem
    float left
  }
  .activity-head1 a{
    width: 1.5rem
    height 0.88rem
    display block
  }
  .activity-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .activity-head2{
    width :3.9rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    height 0.88rem
    text-align: center;
    font-size : 0.32rem;
    display block
  }

  .activity-head3{
    width: 1.5rem;
    float right
    color: #ffffff;
    height 0.88rem
    text-align: right;
    font-size : 0.32rem;
  }
  .activity-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float right
    margin-top 0.3rem
  }

//内容详情
  .activity{
    margin-top 0.88rem
    color #000000
    font-size 0.36rem
    line-height 0.8rem
    margin-left 0.1rem
  }


</style>










































































