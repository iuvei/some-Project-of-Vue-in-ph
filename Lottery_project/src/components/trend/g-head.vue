<template>
  <!--走势-->
  <div class="trend-top">
    <transition name="fade">
      <div class="trend-background" v-show="showha">
        <div class="trend-alert">
          <dl>
            <dt>
              <img src="../../images/zoushi-Choice@2x.png" alt="">
              选择彩种
            </dt>
            <dd @click="hideDailog">
            <span class="close" v-show="showha" >
              </span>
            </dd>
          </dl>
          <ul id="selList">
            <li  :class="{'red' : item.lot_type_id == $route.params.id }" v-for="(item,index) in dataList"  :data-id= "item.id" @click="toLinktrend(item.lot_type_id)">{{item.name}}</li>
            <!--
            <router-link tag="div" to="/trend/1" replace>
              <li  :class="{'red' : item.id == $route.params.id }" v-for="(item,index) in dataList" v-if="item.id==1" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/three-d/2">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==2" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/array5/3">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==3" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/lotto/4">
              <li   :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==4" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/b-pick/5">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==5" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/g-election/6">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==6" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/x-colors/7">
              <li   :class="{'red' : item.id == $route.params.id }" v-for="(item,index) in dataList" v-if="item.id==7" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/a-fast/8">
              <li   :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==8" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/j-fast/9">
              <li  :class="{'red' : item.id == $route.params.id }" v-for="(item,index) in dataList" v-if="item.id==9" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/chromosphere/10">
              <li   :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==10" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/array3/11">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==11" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/s-colors/13">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==13" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/s-pick/14">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==14" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/s-election/15">
              <li   :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==15" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/t-colors/16">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==16" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>


            <router-link tag="div" to="/h-election/17">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==17" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>


            <router-link tag="div" to="/j-election/18">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==18" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/sizzler/19">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==19" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/g-fast/20">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==20" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/lucky28/21">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==21" :key="item.id"  :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/beijing28/22">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==22" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>

            <router-link tag="div" to="/kk-six/23">
              <li  :class="{'red' : item.id == $route.params.id }"  v-for="(item,index) in dataList" v-if="item.id==23" :key="item.id" :data-id= "item.id">{{item.name}}</li>
            </router-link>
-->
          </ul>
        </div>
      </div>
    </transition>

    <div class="trend-head">
      <ul>
        <li class="trend-head1">
          <a onclick="history.go(-1)">
            <img src="../../images/Return-@2x.png" alt="">
          </a>
        </li>
        <li class="trend-head2">
          基本走势
        </li>
        <li class="trend-head3" @click='open'>
          <img src="../../images/selection@3x.png" alt=""> 彩种
        </li>
      </ul>
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
  import {lotteryTypes} from 'api/config'
  import {
    requestOpt,
    dtFormate,
    alertip
  } from 'api/recommend'
  export default {
    components: {},
    data() {
      return {
        isShow: false,
        showha: false,
        dataList :window.ALL_all || []
      }
    },
    methods: {
      open() {
        this.showha = !this.showha
      },
      hideDailog() {
        this.showha = !this.showha
      },
      getList() {
          if(this.dataList.length <= 0){
                requestOpt.reqnoGetpara('lottery_types/all', {

                    },

                    (res) => {
                    this.dataList = res.data.data.list;

                    },

                    function(err) {
                        // Indicator.close();
            });
          }
      },
      toLinktrend(id) {
        for (let i=0,len=lotteryTypes.length;i<len;i++){
          if (lotteryTypes[i].lot_type_id == id) {
            this.$router.push('/'+lotteryTypes[i].link+'/'+id)
            break
          }
        }
      }
    },
    created(){
//      this.getList();
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">



  .trend-top{
    width: 7.5rem;
    height: 100%;
    display: block;
    background: #ffffff;
  }
  .trend-head{
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    background :#ff3a3b;
    position: fixed;
    top:0;
    z-index: 9;
  }
  .trend-head ul{
    width: 6.9rem;
    height: 0.88rem;
    display: block;
    margin: auto;
    line-height: 0.88rem;
  }
  .trend-head ul li{
    height: 0.88rem;
    display: block;
  }
  .trend-head1{
    width: 1.5rem
    float left
  }
  .trend-head1 a{
    width: 1.5rem
    height 0.88rem
    display block
  }
  .trend-head1 img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    position relative
    top: 0.29rem
  }

  .trend-head2{
    width :3.9rem;
    font-weight :normal;
    color: #ffffff;
    float :left
    height 0.88rem
    text-align: center;
    font-size : 0.36rem;
    display block
  }

  .trend-head3{
    width: 1.5rem;
    float right
    color: #ffffff;
    height 0.88rem
    text-align: right;
    font-size : 0.32rem;
  }
  .trend-head3 img{
    width: 0.36rem;
    height 0.3rem
    display block
    float left
    margin-top 0.28rem
    margin-left 0.33rem
  }
//弹出框的背景透明色
  .trend-background{
    width 7.5rem
    height 100%
    overflow hidden
    float left
    z-index 299
    position fixed
    top: 0
    background-color: rgba(0,0,0,0.5)!important;
    background-color: #000;
    filter:Alpha(opacity=50);
    display block
  }

//  弹出框
  .trend-alert{
    z-index 999
    width 6.9rem
    /*height 5.35rem*/
    background #f3f3f3
    display block
    float left
    position relative
    top: 2rem
    left 0.3rem
    border-radius 12px
    border none
  }
//  关闭选择
  .trend-alert dl{
    width 6.9rem
    height 0.6rem
    border-bottom 1px solid #cccccc
    display block
  }
  .trend-alert dl dt{
    width 3rem
    height 0.6rem
    display block
    float left
    margin-left 0.26rem
    font-size 0.3rem
    color #323232
    line-height 0.6rem
    text-align left
  }
  .trend-alert dl dt img{
    width 0.3rem
    height 0.3rem
    display block
    float left
    margin-right 0.12rem
    position relative
    top:0.15rem
  }

  .trend-alert dl dd{
    width 1rem
    height 0.52rem
    display block
    float right
    margin-right 0.26rem
  }
  .close{
    display inline-block
    width 0.4rem
    height 0.4rem
    overflow hidden
    background #ccc
    position relative
    float right
    border-radius 45px
    top: 0.09rem
  }
  .close::before,  .close::after{
    position absolute
    content ''
    top 50%
    left 0.1rem
    margin-top -1px
    background #ff3a3b
    width 0.2rem
    height 2px
  }
  .close::before{
    transform:rotate(45deg)
  }
  .close::after{
    transform:rotate(-45deg)
  }
  .trend-alert ul li{
    float left
    overflow auto
    /*height  0.42rem*/
    border 1px solid #ccc
    margin-top 0.1rem
    width 2.035rem
    margin-left 0.19rem
    padding .11rem 0rem
    text-align center
    /*line-height 0.43rem*/
    color #323232
    border-radius 4px
    font-size 0.3rem
  }
  .trend-alert ul li:last-child {
    margin-bottom  0.1rem
  }
  .trend-alert ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }

</style>


