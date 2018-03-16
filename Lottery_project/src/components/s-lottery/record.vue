<template>
  <div class="record_content"  :style="{'-webkit-overflow-scrolling': scrollMode}">
    <back :title="cp_title"></back>
    <!-- -----------------上部固定------------------- -->
    <mt-loadmore v-show="isShowBG" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
      <!-- <div class="my_infinite" v-infinite-scroll="loadBottom" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false"> lhc_color_farmate-->
      <div>
        <div class="record" v-if=" ($route.params.id != 4 && $route.params.id != 8 && $route.params.id != 9 && $route.params.id != 10 && $route.params.id != 20 && $route.params.id != 21 && $route.params.id != 22 && $route.params.id != 23&& $route.params.id != 24)">
          <dl v-for="items in results">
            <dt>
              <span class="record-q">第{{items.issue_number}}期</span>
              <span class="record-d">{{items.issue_date}}</span>
            </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res"> {{ item }} </span>
            </dd>
          </dl>
        </div>

        <div class="record" v-if=" ($route.params.id == 23 || $route.params.id == 24) ">
          <dl v-for="items in results">
            <dt>
              <span class="record-q">第{{items.issue_number}}期</span>
              <span class="record-d">{{items.issue_date}}</span>
            </dt>
            <dd class="record-number lhc_dd_data">
              <p>
                <span v-for="(item,index) in items.res" :class="{blue:lhc_color_farmate(item)==1,green:lhc_color_farmate(item)==2}"> {{ item }} </span>
              </p>
              <p>
                <i v-for="(item,index) in items.res" v-if="item" :key="index"> {{ lhc_color_formate(item).text }} </i>
              </p>
            </dd>
          </dl>
        </div>

        <div class="record" v-if=" ($route.params.id == 4) ">
          <dl v-for="items in results">
            <dt>
                                      <span class="record-q">第{{items.issue_number}}期</span>
                                      <span class="record-d">{{items.issue_date}}</span>
                                    </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index <= 4 )"> {{ item }} </span>
              <span v-for="(item,index) in items.res" v-if="( index > 4 )" style="background:#35b5fe"> {{ item }} </span>
            </dd>
          </dl>
        </div>

        <div class="record" v-if=" ($route.params.id == 8 || $route.params.id == 9  || $route.params.id == 20 ) ">
          <dl v-for="items in results">
            <dt>
                                            <span class="record-q">第{{items.issue_number}}期</span>
                                            <span class="record-d">{{items.issue_date}}</span>
                                          </dt>
            <dd class="record-number">
              <img style="width:0.42rem; height:0.42rem;vertical-align:top;margin-right:5px;" v-for="(item,index) in items.res" :src="item | transImg" />

            </dd>
          </dl>
        </div>

        <div class="record" v-if=" ($route.params.id == 10) ">
          <dl v-for="items in results">
            <dt>
                                            <span class="record-q">第{{items.issue_number}}期</span>
                                            <span class="record-d">{{items.issue_date}}</span>
                                          </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index <= 5 )"> {{ item }} </span>
              <span v-for="(item,index) in items.res" v-if="( index > 5 )" style="background:#35b5fe"> {{ item }} </span>
            </dd>
          </dl>
        </div>

        <div class="record" v-if=" ($route.params.id == 21 ||  $route.params.id == 22) ">
          <dl v-for="items in results">
            <dt>
                                <span class="record-q">第{{items.issue_number}}期</span>
                                <span class="record-d">{{items.issue_date}}</span>
                            </dt>
            <dd class="record-number">
              <span v-for="(item,index) in items.res" v-if=" (index == 0 )"> {{ item }}  </span>
              <span style="background: none;border: none;color: #ff3a3b"> + </span>
              <span v-for="(item,index) in items.res" v-if=" (index == 1 )"> {{ item }}  </span>
              <span style="background: none;border: none;color: #ff3a3b"> + </span>
              <span v-for="(item,index) in items.res" v-if=" (index == 2 )"> {{ item }}  </span>
              <span style="background: none;border: none;color: #ff3a3b"> = </span>
              <span v-for="(item,index) in items.res" v-if="( index == 3 )">  {{ item }} </span>
            </dd>
          </dl>
        </div>
      </div>
    </mt-loadmore>

    <!-- ----------------下部固定 ------------------ -->
    <!-- <div class="record-btn">
      <router-link tag="div" class="tab-item" to="/playing">
        <dl>
          <input type="button" value="立即投注">
        </dl>
      </router-link>
    </div> -->
    <recordBtn v-if="cp_title" :recordTitle="cp_title"></recordBtn>
  </div>
</template>


<script type="text/ecmascript-6">
  import {
    InfiniteScroll
  } from "mint-ui";
  import {
    Toast
  } from "mint-ui";
  import {
    Indicator
  } from "mint-ui";
  import Back from "@/components/back/back";
  import Scroll from "@/components/home/scroll";
  import recordBtn from "./record-btn"

/*  import BScroll from "@/components/home/Bscroll";*/
  import {
    getRecommend,
    getDiscList,
    requestOpt,
    alertip
  } from "api/recommend";
  import { lhc_lot_data_formate } from "api/config"
  export default {
    components: {
      Back,
      recordBtn
    },
    data() {
      return {
        pageVal: 1,
        results: [],
        cp_list: [],
        cp_title: "",
        isShowBG: false,
        // pulldown: true,
        // pullup:true,
        allLoaded: false,
        scrollMode: "auto",
        app_config : ''
      };
    },
    mounted() {
      this.startFn();
    },
    methods: {
        lhc_color_farmate(name) { // lhc号码字体颜色格式化
            if(name==='03' ||name==='04' ||name==='09' ||name==='10' ||name==='14' ||name==='15' ||name==='20' ||name==='25' ||name==='26' ||name==='31' ||name==='36' ||name==='37' ||name==='41' ||name==='42' ||name==='47' ||name==='48') {
            return 1
            } else if (name==='05' ||name==='06' ||name==='11' ||name==='16' ||name==='17' ||name==='21' ||name==='22' ||name==='27' ||name==='28' ||name==='32' ||name==='33' ||name==='38' ||name==='39' ||name==='43' ||name==='44' ||name==='49'){
            return 2
            }
            return 0
        },
        startFn() {

            document.querySelector(".mint-loadmore-top").style.color = "#666";
            document.querySelector(".mint-loadmore-bottom").style.color = "#666";
            document.querySelector(".mint-loadmore-bottom").style.marginBottom = "0";

            Indicator.open({
            text: "加载中...",
            spinnerType: "fading-circle"
            });
            setTimeout(() => {
            Indicator.close();
            },3000)

            requestOpt.reqnoGetpara(
            "lottery_results/" + this.$route.params.id, {
                params: {
                page: this.pageVal
                }
            },

            res => {
                Indicator.close();
                this.results = res.data.data.list;
                this.isShowBG = true;
                this.$nextTick(function() {
                // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
                // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
                // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
                this.scrollMode = "touch";

                });

                var that = this;
                setTimeout(function() {
                that.$refs.loadmore.onTopLoaded();
                }, 800);
            },

            function(err) {
                Indicator.close();
            }
            );
        },
        getTitle() {
            requestOpt.reqnoGetpara(
            "lottery_types/all", {
                params: {}
            },

            res => {
                Indicator.close();
                this.cp_list = res.data.data.list;
                // console.log(this.cp_list);
                // console.log(res);
                for (var i = 0; i < this.cp_list.length; i++) {
                if (this.cp_list[i].id == this.$route.params.id) {
                    this.cp_title = this.cp_list[i].name;
                }
                }
            },

            function(err) {
                Indicator.close();
            }
            );
        },

        // 下拉刷新
        loadTop() {
            // console.log(11111);
            this.scrollMode = "auto";
            this.startFn();
        },
        // 无限加载
        loadBottom() {
            // this.loading = true;

            var that  = this;
            if(this.page >= this.total_pages){

            this.allLoaded = true;
            setTimeout(function() {
                that.$refs.loadmore.onBottomLoaded();
                that.isNoData = true;
            }, 800);
            return;
            }
            this.pageVal++;
            console.log(this.pageVal);
            requestOpt.reqnoGetpara(
            "lottery_results/" + this.$route.params.id, {
                params: {
                page: this.pageVal
                }
            },
            res => {
                // this.loading = true;
                Indicator.close();
                if (res.data.data.list.length <= 1) {
                Toast({
                    message: '没有更多数据了',
                    duration: 2000
                });
                this.allLoaded = true;
                // return;
                }
                // console.log(this.allLoaded);
                this.results = this.results.concat(res.data.data.list);
                // this.$nextTick(function() {
                // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
                // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
                // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
                // this.scrollMode = "touch";
                // });

                setTimeout(function() {
                that.$refs.loadmore.onBottomLoaded();
                }, 500);

            },
            function(err) {
                Indicator.close();
                setTimeout(function() {
                that.$refs.loadmore.onBottomLoaded();
                }, 500);

            }
            );
        },

            // 区别开奖结果的波色
        define_lhc_sx(){
            let config_arr = JSON.parse(sessionStorage.getItem('app_config'));
            let old_sx = config_arr.lhc_shengxiao;
            let arr_all = [];
            for(let k in old_sx){
                let arr_key = old_sx[k].split(',');
                for(let i = 0; i < arr_key.length; i++){
                    arr_all.push({
                        text : k,
                        val : arr_key[i]
                    })
                }
            }
            let  red = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
            let blue =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
            let green = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
            for(let i = 0; i < red.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == red[i]){
                        arr_all[j].color = 'red'
                    }
                }
            }
            for(let i = 0; i < blue.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == blue[i]){
                        arr_all[j].color = 'blue'
                    }
                }
            }
            for(let i = 0; i < green.length; i++){
                for(let j = 0; j < arr_all.length; j++){
                    if(arr_all[j].val == green[i]){
                        arr_all[j].color = 'green'
                    }
                }
            }

            for(let i = 0; i < arr_all.length; i ++){
                lhc_lot_data_formate[i] = arr_all[i];
            }
            // console.log(lhc_lot_data_formate);
            return lhc_lot_data_formate;

        },
        define_bo_se(className){
            let  hong_bo = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
            let lan_bo =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
            let lv_bo = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
            let $span_s = $(className);

            if($span_s.length > 0){
                for(let i =0; i< $span_s.length; i++){
                    $span_s[i].classList.remove('hong_bo');
                    $span_s[i].classList.remove('lan_bo');
                    $span_s[i].classList.remove('lv_bo');
                }
            }
            
        
            for(let i = 0; i < $span_s.length; i++){
                
                let text = $span_s[i].innerText.trim();
                text = text.substr(0,2);
                for(let x = 0; x < hong_bo.length; x++){
                    if(text == hong_bo[x]){
                        // console.log('-----111111----------')
                        $span_s[i].classList.add('hong_bo');
                    }
                }
                for(let x = 0; x < lan_bo.length; x++){
                    if(text == lan_bo[x]){
                        // console.log('-----22222----------')
                        $span_s[i].classList.add('lan_bo');
                    }
                }
                for(let x = 0; x < lv_bo.length; x++){
                    if(text == lv_bo[x]){
                        // console.log('-----3333333----------')
                        $span_s[i].classList.add('lv_bo');
                    }
                }
            }
        },

        lhc_color_formate(name) {
            for(let i=0;i < lhc_lot_data_formate.length;i++) {
                if (name === lhc_lot_data_formate[i].val) {
                return lhc_lot_data_formate[i]
                }
            }
        },
        getConfig_data(){
            this.app_config = JSON.parse(sessionStorage.getItem('app_config'));
            if(!this.app_config){
                requestOpt.reqnoGet('config',
                (res)=>{
                    if(res.data.status == 1 || res.status == 200){
                        this.app_config = res.data.data.config;
                        sessionStorage.setItem('app_config',JSON.stringify(res.data.data.config));
                        this.define_lhc_sx();
                    }else if(res.data.status == 0 && res.data.code == -2){
                        el_tip(res.data.msg + ' 请重新登录');
                        sessionStorage.removeItem('user')
                    
                    }
                    else{
                            el_tip(res.data.msg)
                    }
                },
                (err)=>{
                    el_tip(err.data.msg)
                })
            }
            this.define_lhc_sx();
        }
    },
    created() {
      this.getTitle();
      this.getConfig_data();
    },
    destroyed() {
      Indicator.close();
    },
    filters: {
      transImg: function(val) {
        var imgUrl1 = require("../../images/ks@1.png");
        var imgUrl2 = require("../../images/ks@2.png");
        var imgUrl3 = require("../../images/ks@3.png");
        var imgUrl4 = require("../../images/ks@4.png");
        var imgUrl5 = require("../../images/ks@5.png");
        var imgUrl6 = require("../../images/ks@6.png");
        if (val == 1) {
          val = imgUrl1;
        } else if (val == 2) {
          val = imgUrl2;
        } else if (val == 3) {
          val = imgUrl3;
        } else if (val == 4) {
          val = imgUrl4;
        } else if (val == 5) {
          val = imgUrl5;
        } else if (val == 6) {
          val = imgUrl6;
        }
        return val;
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

#back{
    z-index:1;
}

ul, li {
  font-size: 20px;
  color: #000;
  line-height: 30px;
  text-align: center;
}

.record_content {
  width: 7.5rem;
//   height: 13.34rem;
  min-height:12rem;
  display: block;
  background: #eeeeee;
  // background rgba(7, 17, 27, 0.6);
  margin-top: 0.88rem;
  background  rgb(250,250,250) url('../../images/no_data.png') no-repeat center / 25% 20%;
}

.mint-loadmore-top .mint-loadmore-text {
  font-size: 14px;
}

// 中间投注记录
.record {
  width: 7.5rem;
  height: auto;
  display: block;
  background: #eeeeee;
  // background rgba(7,17,27,0.6)
}

.record dl {
  width: 7.5rem;
  min-height: 1.24rem;
  border-bottom: 1px solid #eeeeee;
  display: block;
  background: #ffffff;
}

.record dl dt {
  width: 6.9rem;
  height: 0.62rem;
  display: block;
  line-height: 0.62rem;
  margin: auto;
}

.record-q {
  font-size: 0.28rem;
  color: #000000;
  float: left;
}

.record-d {
  font-size: 0.28rem;
  color: #222222;
  float: right;
  margin-right: 0.1rem;
}

.record-h {
  font-size: 0.16rem;
  color: #222222;
  float: right;
}

.record dl dd {
  width: 6.9rem;
  height: 0.62rem;
  display: block;
  margin: auto;
}

.record dl dd.record-number span {
  width: 0.46rem;
  height: 0.46rem;
  display: block;
  line-height: 0.46rem;
  font-size: 0.32rem;
  color: #ffffff;
  text-align: center;
  background: #fc3d3d;
  float: left;
  margin-right: 0.1rem;
  border-radius: 45px;
  border: none;
  &.blue{
    background: #35b5fe;
  }
  &.green{
    background: #0cb356;
  }
}

// // 立即投注按钮
.wrapper {
  height: 100%;
}

// ----新增显示生肖样式

.record dl dd.lhc_dd_data{
    min-height:1.2rem;
}
.record dl dd.lhc_dd_data p{
    width:100%;
    height:0.6rem;
    line-height:0.6rem;
}
.record dl dd.lhc_dd_data p i{
    display:inline-block;
    width:0.46rem;
    height:0.46rem;
    margin-right: 0.1rem;
    font-size: 0.32rem;
    font-weight: 650;
    font-style:normal;
    text-align:center;
    color:#4c4c4c;
}
</style>










































































