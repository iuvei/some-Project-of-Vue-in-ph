<template>
  <transition name="fade">
    <div class="lottery-content">
      <div class="lottery-head">
        <ul>
          <li class="lottery-head1" @click="goback">
            <img class="back-icon" src="../../images/Return-@2x.png" alt="关闭" >
          </li>
          <li class="lottery-head2">购彩大厅</li>
          <li class="lottery-head3" @click="tabFe=!tabFe">
            <img v-if="tabFe" class="" src="../../images/vertical.png">
            <img v-else class="" src="../../images/transverse.png">
          </li>
        </ul>
      </div>
      <!--彩种list-->
      <div class="lottery" v-if="tabFe" style="margin-top: .88rem;">
        <div  v-for="(lottyList, i) in results" >
          <dl class="lottery-list" @click.prevent="toPlan(i,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">
            <dt class="lottery-images"><img :src="repaceImg(lottyList.code)" alt=""></dt>
            <dd class="lottery-show">
              <dl>
                <dt class="lottery-top">
                  <span class="l"> {{lottyList.name}}</span>
                  <span class="r">第{{lottyList.issue_number}}期</span>
                </dt>
                <dd class="lottery-middle">
                  <div  class="bj28">
                    <div class="wait-open" v-if="lottyList.number1===''">{{lottery_wining}}</div>
                    <p v-else>
                      <span v-if="lottyList.number1">{{lottyList.number1}}</span>
                      <span style="background: none;border: none;color: #ff3a3b">+</span>
                      <span v-if="lottyList.number2">{{lottyList.number2}}</span>
                      <span style="background: none;border: none;color: #ff3a3b">+</span>
                      <span v-if="lottyList.number3">{{lottyList.number3}}</span>
                      <span style="background: none;border: none;color: #ff3a3b">=</span>
                      <span v-if="lottyList.number4">{{lottyList.number4}}</span>
                    </p>
                  </div>
                </dd>
                <dd class="lottery-bottom">
                  <span class="l">距离第{{lottyList.curr_issue_number}}期截止还有</span>
                  <span class="r">{{lottyList.curr_count_down | transCountTime}}</span>
                </dd>
              </dl>
            </dd>
            <dd class="lottery-images2"><img src="../../images/my_more.png" alt="右箭头"></dd>
          </dl>

          <div class="new-add-func" v-if="!(lottyList.code=='BJ28'&&pcDandan === 'lottery')">
            <span @click="go_trends(lottyList)"><i></i>走势</span>
            <span @click="go_play_rule(lottyList)"><i></i>玩法</span>
            <span @click="collection(lottyList, collectionLData[lottyList.code])"  :class="{'active' : collectionLData[lottyList.code] == 1}"><i ></i>收藏</span>
          </div>
          <!--A B-->
          <div class="lottery-plans" v-if="listActive===i">
            <div @click="toPlanA(i,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">{{lottyList.name}}A盘</div>
            <div @click="toPlanB(i,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">{{lottyList.name}}B盘</div>
          </div>
        </div>
      </div>

      <!--quick-->
      <div v-else class="vertical" style="margin-top: .88rem;">
        <div >
          <dl class="vertical-list" v-for="(lottyList,index) in results"
              @click.prevent="toPlan(index,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">
            <dt class="vertical-images">
              <img :src="repaceImg(lottyList.code)">
            </dt>
            <dd class="vertical-title">
              {{lottyList.name}}
            </dd>
            <dd class="vertical-hours">
              {{lottyList.curr_count_down | transCountTime}}
            </dd>
            <div class="vertical-plan-con" v-if="currLottery==index">
              <div class="vertical-plan-t" @click="closeQick">
                <Icon type="close" color="#fff" size="8"  />
              </div>
              <div class="vertical-plan-b">
                <div @click="toPlanA(index,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">{{lottyList.name}}A盘</div>
                <div @click="toPlanB(index,lottyList.name,lottyList.code,lottyList.lot_type_id,repaceImg(lottyList.code))">{{lottyList.name}}B盘</div>
              </div>
            </div>
          </dl>
        </div>
      </div>

      <tab></tab>
    </div>
  </transition>

</template>


<script type="text/ecmascript-6">
  import Transverse from '@/components/lottery/transverse'
  import Vertical from '@/components/lottery/vertical'
  import Tab from '@/components/tab/tab'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_loading_open,mt_loading_close,mt_toast} from 'api/recommend'
  import {lottery_wining} from 'api/config'
  import {formatDate} from '../../api/mdata'
  import VScroll from "@/components/public/pull-refresh"

  import pc_dandan from '@/images/icon/pc_dandan.png'

  import ks1 from '@/images/ks@1.png'
  import ks2 from '@/images/ks@2.png'
  import ks3 from '@/images/ks@3.png'
  import ks4 from '@/images/ks@4.png'
  import ks5 from '@/images/ks@5.png'
  import ks6 from '@/images/ks@6.png'

  import chongqinshishicai from '@/images/icon/chongqinshishicai.png'
  import sand from '@/images/icon/3d.png'
  import daletou from '@/images/icon/daletou.png'
  import guangdong from '@/images/icon/guangdong.png'
  import gui_kuaisan from '@/images/icon/gui_kuaisan.png'
  import jiangxi from '@/images/icon/jiangxi.png'
  import jing_28 from '@/images/icon/jing_28.png'
  import jing_pk from '@/images/icon/jing_pk.png'
  import liuhecai from '@/images/icon/liuhecai.png'
  import pailei3 from '@/images/icon/pailei3.png'
  import pailei5 from '@/images/icon/pailei5.png'

  import san_pk from '@/images/icon/san_pk.png'
  import sanfeishishicai from '@/images/icon/sanfeishishicai.png'
  import shandong from '@/images/icon/shandong.png'
  import shanghai from '@/images/icon/shanghai.png'
  import shishile from '@/images/icon/shishile.png'
  import shuangseqiu from '@/images/icon/shuangseqiu.png'
  import su_kuaisan from '@/images/icon/su_kuaisan.png'
  import tianjinshishicai1 from '@/images/icon/tianjinshishicai1.png'
  import wan_kuaisan from '@/images/icon/wan_kuaisan.png'
  import xing_28 from '@/images/icon/xing_28.png'
  import xin_shishicai from '@/images/icon/xin_shishicai.png'

  export default {
    components: {
      Transverse,
      Vertical,
      Tab,
      VScroll
    },
    data() {
      return {
        results: window.PC_dandan,
        timer: null,
        tabFe: true, // 彩票图标快捷切换
        currLottery: -1,
        listActive: -1,
        frequency: -1,
        lottery_wining: lottery_wining,
        collectionList : [],
        collectionLData:{},
        pcDandan: this.$store.state.user.pcdandan || 'lottery',
      }
    },
    beforeRouteLeave(to, from, next) {
      this.$store.commit('LOTPLAYS',{keyFirst:'', keyLast: '' })
      clearInterval(this.timer)
      next()
    },
    activated(){
      this.$store.commit('LOTPLAYS',{keyFirst:'', keyLast: '' })
      this.currLottery = -1
      this.results=window.PC_dandan,
      this.timer = setInterval(() => {
        this.results = window.PC_dandan;
      },1000)
    },
    deactivated(){
      clearInterval(this.timer)
    },
    computed: {
    },
  
    methods: {
      goback() {
        if (this.$store.state.user.pcdandan === 'home') {
          this.$router.push('/home')
        } else {
          this.$router.push('/lottery1')
        }
      },
      repaceImg(code) {
        if (code === 'BJ28'){
          return sessionStorage.getItem('jing_28')
        } else if (code === 'XY28'){
          return sessionStorage.getItem('xing_28')
        }
      },

      toPlan(i) {
        if (this.listActive == i){
          this.listActive = -1
        } else {
          this.listActive = i
        }
        if (this.currLottery == i){
          this.currLottery = -1
        } else {
          this.currLottery = i
        }
      },
      closeQick() {
        event.stopPropagation();
        event.preventDefault()
        this.currLottery = -1;
      },
      toPlanA(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/1')
        this.$store.commit('OF_AVATE',pic)
        this.$store.commit('BET_OBJ',this.results[i])
        this.$store.commit('LOTTERY_CODE',code)
        this.$store.commit('HOME_TAB','pcdandan')
      },
      toPlanB(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/2')
        this.$store.commit('LOTTERY_CODE',code)
        this.$store.commit('OF_AVATE',pic)
        this.$store.commit('BET_OBJ',this.results[i])
        this.$store.commit('HOME_TAB','pcdandan')
      },
      go_trends(obj){
          if(obj.name === "分分时时彩"){
              this.$router.push('/f-colors/' + obj.lot_type_id) 
          }
          else if(obj.name === "极速PK拾"){
              this.$router.push('/js-pick/' + obj.lot_type_id) 
          }
          else if(obj.name === "重庆时时彩"){
              this.$router.push('/trend/' + obj.lot_type_id) 
          }
          else if(obj.name === "三分时时彩"){
              this.$router.push('/s-colors/' + obj.lot_type_id) 
          }
          else if(obj.name === "北京PK拾"){
              this.$router.push('/b-pick/' + obj.lot_type_id) 
          }
          else if(obj.name === "三分PK拾"){
              this.$router.push('/s-pick/' + obj.lot_type_id) 
          }
          else if(obj.name === "极速六合彩"){
             this.$router.push('/kkj-six/' + obj.lot_type_id) 
          }
          else if(obj.name === "香港六合彩"){
              this.$router.push('/kk-six/' + obj.lot_type_id) 
          }
          else if(obj.name === "福彩3D"){
              this.$router.push('/three-d/' + obj.lot_type_id) 
          }
          else if(obj.name === "新疆时时彩"){
              this.$router.push('/x-colors/' + obj.lot_type_id) 
          }
          else if(obj.name === "天津时时彩"){
              this.$router.push('/t-colors/' + obj.lot_type_id) 
          }
          else if(obj.name === "上海时时乐"){
              this.$router.push('/sizzler/' + obj.lot_type_id) 
          }
          else if(obj.name === "广东11选5"){
              this.$router.push('/g-election/' + obj.lot_type_id) 
          }
          else if(obj.name === "山东11选5"){
              this.$router.push('/s-election/' + obj.lot_type_id) 
          }
          else if(obj.name === "上海11选5"){
              this.$router.push('/h-election/' + obj.lot_type_id) 
          }
          else if(obj.name === "江西11选5"){
              this.$router.push('/j-election/' + obj.lot_type_id) 
          }
          else if(obj.name === "安徽快三"){
              this.$router.push('/a-fast/' + obj.lot_type_id) 
          }
          else if(obj.name === "江苏快三"){
              this.$router.push('/j-fast/' + obj.lot_type_id) 
          }
          else if(obj.name === "广西快三"){
              this.$router.push('/g-fast/' + obj.lot_type_id) 
          }
          else if(obj.name === "排列3"){
              this.$router.push('/array3/' + obj.lot_type_id) 
          }
          else if(obj.name === "北京28"){
              this.$router.push('/beijing28/' + obj.lot_type_id) 
          }
          else if(obj.name === "幸运28"){
              this.$router.push('/lucky28/' + obj.lot_type_id) 
          }

      },

      go_play_rule(){
          this.$router.push('/newplayrule')
      },
      collection(obj,state){
        let token =  sessionStorage.getItem('token');
        if(!token){
            this.$router.push('/login')
            return;
        }
        mt_loading_open();
        state = state == 1 ? 0 : 1;
        let lot_code = obj.code;
       
        
        requestOpt.reqPost('userlotcollection?lot_code=' + lot_code + '&state=' + state, token,{},
           (res)=>{
            //    console.log(res)
               if(res.data.status == 1){
                   mt_loading_close();
                   alertip(res.data.msg)
                   this.collectionLData[lot_code] = this.collectionLData[lot_code] == 1 ?  0 : 1; 
                   this.getCollectionList();
               }else if(res.data.status == 0){
                    mt_loading_close();
                    alertip(res.data.msg)
                    this.getCollectionList();
               }else if(res.data.status == 2){
                    alertip(res.data.msg)
                    this.getCollectionList();
               }
           },
            (err)=>{
                mt_loading_close();
                alertip('网络连接失败')
                console.log(err);
            })

      },
        //   获取收藏列表
        getCollectionList(){
            let token =  sessionStorage.getItem('token');
            if(!token){ return };
            requestOpt.reqGet('userlotcollection', token, (res)=>{
                if(res.data.status == 1){
                    this.collectionList = res.data.data.list;
                    //  console.log(this.collectionList);
                    this.reorganize(this.collectionList);
                }
            },(err)=>{
                if(err){
                    //  alertip(err.data.msg)
                }
                // alertip('网络连接失败')
            })            

        },
        //   登录后初始化收藏列表
        reorganize(list){
            list.forEach((item,index)=>{
                // if(this.collectionLData[item.LotCode]){
                this.collectionLData[item.LotCode] = item.state;
                // }
            })
            //   console.log(this.collectionLData);
        }         
    },

    mounted() {
        this.getCollectionList();
    },

  }
</script>

<style scoped lang="stylus">
  .lottery-content{
    overflow hidden
    width: 7.5rem;
    display: block;
    background: #f5f4f9;
  }
  .lottery-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 99;
  }
  .lottery-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .lottery-head ul li{
    float: left;
    height: 0.88rem;
    display: block;
  }
  .lottery-head1{
    width: 2rem
    img{
      width 0.22rem
      height 0.3rem
      /*margin-bottom .22rem*/
    }
  }
  .lottery-head2{
    width :2.9rem;
    text-align: center;
    font-size : 0.36rem;
    font-weight :normal;
    color: #ffffff;
  }
  .lottery-head3{
    width: 2rem;
    text-align: right;
  }
  .lottery-head3 img{
    display: inline-block;
    width: 0.46rem;
    height: 0.39rem;
    position: relative;
    float: right;
    top: 0.245rem;
  }
  /*采种分类*/
  .lottery-all{
    width: 7.5rem;
    height: 0.68rem;
    background: #222222;
    display: block;
    position: fixed;
    top:0.88rem;
    z-index: 99;
    color #fff
  }
  .lottery-all ul{
    width: 6.9rem;
    display: block;
    margin: auto;
    line-height: 0.68rem;
    height: 0.68rem;
  }
  .lottery-all ul li{
    float: left;
    width: 33.33%;
    font-size: 0.34rem;
    text-align: center;
  }
  .lottery-all ul li.active {
    color: #ff3a3b;
  }
  li.all{
    width: 2rem;
    color: #ff3a3b;
  }
  li.high{
    width: 2.9rem;
    color: #ffffff;
  }
  li.low{
    width: 2rem;
    color: #ffffff;
  }

  /*l彩票种类详情*/
  .lottery{
    width: 7.5rem;
    height: auto;
    background: #eeeeee;
    display: block;
    /* margin-top: 1.56rem;*/
    margin-bottom: 1.18rem;
  }
  .lottery dl.lottery-list{
    width: 7.5rem;
    min-height: 100px;
    background: #ffffff;
    display: block;
    position relative
    border-bottom: 1px solid #eeeeee;
    &:after {
      content ''
      display table
      clear both
    }
  }

  /*彩票图片*/
  .lottery dl.lottery-list dt.lottery-images{
    width: 0.76rem;
    height: 0.76rem;
    background: #ffffff;
    display: block;
    float: left;
    margin-top: 30px;
    position absolute
    top 0
    left .25rem
    bottom 0
    margin auto
  }
  .lottery-images img{
    width: 0.76rem;
    height: 0.76rem;
    display: block;
    float: left;
    border: none;
    border-radius: 45px;
  }

  /*中间数据*/
  .lottery dl.lottery-list dd.lottery-show{
    width: 5.68rem;
    /*height: 1.24rem;*/
    float:left;
    display: block;
    margin-left: 1.2rem;
    margin-right: 0.08rem;
  }
  .lottery-show dl{
    width: 5.68rem;
    /*height: 1.24rem;*/
    display: block;
  }
  .lottery-show dt.lottery-top{
    width: 5.68rem;
    height: 30px;
    display: block;
    line-height: 30px;
  }
  .lottery-show dd.lottery-middle{
    width: 5.68rem;
    min-height: 40px;
    display flex
    display -webkit-flex
    align-items center
    -webkit-align-items center
    background: #ffffff;
    div {
      height 100%
      &.wait-open {
        font-size .32rem
      }
      p {
        display flex
        display -webkit-flex
        align-items center
        -webkit-align-items center
        flex-wrap wrap
        height 100%
        span {
          &.spanspace {
            margin-top: 0.1rem;
          }
        }
      }
    }
  }
  .lottery-show dd.lottery-middle .ssq p span:last-child{
    background: #35b5fe;
  }
  .lottery-show dd.lottery-middle .dalt p span.spacial{
    background: #35b5fe;
  }
  .lottery-show dd.lottery-middle .lhc p span.blue{
    background: #35b5fe;
  }
  .lottery-show dd.lottery-middle .lhc p span.green{
    background: #0cb356;
  }

  .lottery-show dd.lottery-bottom{
    width: 5.68rem;
    height: 0.46rem;
    display: block;
    line-height: 0.55rem;
  }
  /*种类其数*/
  .lottery-show dt.lottery-top span.l{
    font-size: 0.3rem;
    display: block;
    float: left;
    color: #323232;
    /*font-weight: bold;*/
  }
  .lottery-show dt.lottery-top span.r{
    font-size: 0.3rem;
    display: block;
    float: right;
    color: #ff3a3b;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-b{
    font-size: 0.3rem;
    display: block;
    text-align: left;
    color: #35b5fe;
    font-weight: normal;
  }
  .lottery-show dd.lottery-middle p.color-h{
    font-size: 0.3rem;
    display: block;
    text-align: left;
    color: #ff3a3b;
    font-weight: normal;
  }

  /*中奖中奖的彩票的号码*/

  .lottery-show dd.lottery-middle{
    font-size: 0.3rem;
    float: left;
    color: #fc823c;
  }
  .lottery-show dd.lottery-middle span{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    font-size: 0.34rem;
    color: #ffffff;
    text-align: center;
    background: #fc3d3d;
    margin-right: 0.1rem;
    border-radius: 45px;
    border: none;
  }
  .lottery-show dd.lottery-middle img{
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    text-align: center;
    float: left;
    margin-right: 0.1rem;
    border: none;
  }

  /*距离开奖时间*/
  .lottery-show dd.lottery-bottom span.l{
    font-size: 0.28rem;
    display: block;
    float: left;
    color: #323232;
    font-weight: normal;
  }
  .lottery-show dd.lottery-bottom span.r{
    font-size: 0.28rem;
    display: block;
    float: right;
    color: #323232;
    font-weight: normal;
  }

  /*箭头*/
  .lottery dl.lottery-list dd.lottery-images2{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-right: 0.3rem;
  }
  .lottery dl.lottery-list dd.lottery-images2 img{
    width: 0.18rem;
    height: 0.3rem;
    float: right;
    display: inline-block;
    margin-top: 40px;
  }

  /*quick*/
  .vertical{
    overflow: auto;
    /*margin-top: 1.56rem;*/
    margin-bottom: 1.18rem;
  }
  .vertical dl.vertical-list{
    display: block;
    float: left;
    position: relative;
    width: 2.48rem;
    /*height: 2.76rem;*/
    height: 2.48rem;
    margin: .01rem;
    overflow: hidden;
    background: #ffffff;
  }
  .vertical dl.vertical-list dt.vertical-images{
    width: 2.48rem;
    height: 1.6rem;
    display: block;
  }
  .vertical-images img{
    width: 1.25rem;
    height: 1.25rem;
    display: block;
    margin: auto;
    position: relative;
    top:0.175rem;
    border: none;
    border-radius: 45px;
  }
  .vertical dl.vertical-list dd.vertical-title{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.32rem;
    color: #222222;
    /*font-weight: bold;*/
  }
  .vertical dl.vertical-list dd.vertical-hours{
    width: 2.48rem;
    height: 0.48rem;
    display: block;
    line-height: 0.48rem;
    text-align: center;
    font-size: 0.32rem;
    color: #ff3a3b;
    /*font-weight: bold;*/
  }

  .vertical-plan-con {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5)
    font-size: .32rem;
    transition: top 1s;
    animation: topBottom 1s;
    &.entey {
      top 0
      transition: top 1.5s;
      animation: topBottom 1.5s;
    }
    &.leave {
      top -2.48rem
      transition: top 1.5s;
      animation: topBottomLeave 1.5s;
    }
    .vertical-plan-t {
      position absolute
      top 0
      right 0
      z-index 2
      width 35%
      &:after {
        content ''
        clear both
        display block
      }
      i {
        float right
        padding 5px 7px
        margin .1rem
        border 1px solid #fff
        border-radius 50%
      }
    }
    .vertical-plan-b {
      position absolute
      bottom 0
      width 100%
      text-align center
      div {
        padding .15rem
        background #ff3a3b
        color #fff
        &:last-child {
          border-top 1px solid #fff
        }
      }
    }
  }
  .vertical-plan-con.entey {
    top 0
    transition: top 1.5s;
    animation: topBottom 1.5s;
  }
  .vertical-plan-con.leave {
    top -2.48rem
    transition: top 1.5s;
    animation: topBottomLeave 1.5s;
  }

  @keyframes topBottom {
    0% {
      top: -2.48rem;
    }
    100% {
      top: 0;
    }
  }

  @keyframes topBottomLeave {
    0% {
      top: 0;
    }
    100% {
      top: -2.48rem;
    }
  }

  .lottery-plans {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: transparent;
    color: #000;
    font-size: .32rem;
    div {
      width: 45%;
      margin: 2% 2.5%;
      padding: .15rem;
      background: #ff3a3b;
      text-align: center;
      color: #fff;
      border-radius: .08rem;
    }

  }


//   走势-玩法-收藏

  .new-add-func {
      display : flex;
      justify-content : space-between;
      padding: .2rem .35rem
      background:#fff;
      margin-bottom:0.2rem;

  }

  .new-add-func span{
      flex: 1;
      text-align:center;
      font-size:0.28rem;

  }
  .new-add-func span+span{
      border-left:1px solid #ddd;
  }

  .new-add-func span i{
      display:inline-block;
      width : .4rem;
      height: .4rem;
      vertical-align: middle;
      margin-right:.2rem;
      margin-top:-.1rem;
  }

  .new-add-func span:nth-child(1) i{
      background : url(../../images/newtrend.png) no-repeat center / cover;
  }
  .new-add-func span:nth-child(2) i{
      background : url(../../images/playintroduct.png) no-repeat center / cover;
  }
  .new-add-func span:nth-child(3) i{
      background : url(../../images/enshrine.png) no-repeat center / cover;
  }
  .new-add-func span:nth-child(3).active i{
      background : url(../../images/alreadycollected.png) no-repeat center / cover;
  }

  .lottery>div{
      margin-bottom:.2rem;
    //   border-bottom:1px solid #ddd;
  }
</style>


