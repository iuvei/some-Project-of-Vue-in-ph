<!--trend module-->
<template>
  <div >
    <!--切换 彩种  开始-->
    <div class="trend-top">
      <transition name="fade">
        <div class="trend-background" v-if="showha">
          <div class="trend-alert">
            <dl>
              <dt>
                <img src="../../images/zoushi-Choice@2x.png" alt="">
                选择彩种
              </dt>
              <dd @click="showha = false">
                <span class="close" v-if="showha" >
              </span>
              </dd>
            </dl>
            <ul id="selList">
                <li  :class="{'red' : item.lot_type_id == lot_id }" v-for="(item,index) in lot_all" @click="chkLotTab(item.lot_type_id)">{{item.name}}</li>
            </ul>
          </div>
        </div>
      </transition>

      <div class="trend-head">
        <ul>
          <li class="trend-head1">
            <a @click="$route.go(-1)" v-if="trendReturnFlag">
              <img src="../../images/Return-@2x.png" alt="">
            </a>
          </li>
          <li class="trend-head2">
            基本走势
          </li>
          <li class="trend-head3" @click='showha = !showha'>
            <img src="../../images/selection@3x.png" alt=""> 彩种
          </li>
        </ul>
      </div>
    </div>
    <!--切换 彩种  结束-->

    <!--位数-->
    <div class="digit">
      <ul class="wei_ul">
        <li  v-bind:class="{'red-bg':digit_active == index}" @click="open_btn(index)" v-for="(data,index) in digit_data">{{ data }} </li>
      </ul>
    </div>


    <mt-loadmore :top-method="loadTop"  v-show="isShowSelect_wei"  :auto-fill="false" ref="loadmore" style="margin-top: 2.34rem;">
      <div class="start" >
        <!--其数-->
        <div class="start-contents" v-show="digit_active==0">
          <div class="start-title" v-if="start_list_box[0]">
            <table>
              <tr class="start-contents1-title">
                <td class="title-width" >{{start_list_box[0].titles[0]}}</td>
                <td class="title-width" >{{start_list_box[0].titles[1]}}</td>
                <td v-for="(item, i) in start_list_box[0].titles[2]" >
                  {{ item }}
                </td>
                <td > {{start_list_box[0].titles[3]}} </td>
                <td > {{start_list_box[0].titles[4]}} </td>

              </tr>
            </table>
          </div>

          <div class="start-body">
            <table>
              <tr v-for="(items,indexs) in start_list_box" v-if="(indexs!= 30 && indexs != 60 && indexs != 100 && indexs != 200)">
                <td class="title-width">{{items.issue_number | slic}}</td>
                <td class="title-colors-red title-width">
                  <span v-for="(item,index) in items.res">{{item}}</span>
                </td>

                <td> {{ items.bit_modes[0]}} </td>
                <td> {{ items.bit_modes[1]}} </td>
                <td> {{ items.bit_modes[2]}} </td>
                <td> {{ items.bit_modes[3]}} </td>
                <td> {{ items.bit_modes[4]}} </td>

                <td> {{items.prev3_form}} </td>
                <td> {{items.post3_form}} </td>
              </tr>
            </table>
          </div>
        </div>

        <div id="wanwei"  v-show="digit_active==1 || digit_active==2 || digit_active==3 || digit_active==4 || digit_active==5" class="wanwei">
          <div class="periods">
            <div class="wan_table">
              <ul style="display:flex;display: -webkit-flex;">
                <li class="periods1" style="flex : 2;-webkit-flex: 2;">期数</li>
                <li v-for="(items,indexs) in trendList[0]" style="flex : 1;-webkit-flex: 1;">{{ indexs  }}</li>
              </ul>
            </div>

            <div class="wan_list">
              <div class="wan_table_2">
                <table  @click="isShow_Wan_list_data = !isShow_Wan_list_data"  >
                  <tr v-for=" item in arr_list.list"> <td> {{item.IssueNumber | slic }} </td></tr>
                </table>
              </div>

              <div class="wan_table_3" style="position:relative;">
                <table>
                  <tbody>
                  <tr v-for="(items, indexs) in trendList">
                    <td v-for="(item,index) in items">
                                    <span v-if=" item == 0" style="background:red;color:#fff;z-index:4" >
                                        {{item == 0 ? index : item }}
                                    </span>
                      <span v-else v-show="isShow_Wan_list_data">  {{item}} </span>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <div style="position:absolute;width:100%;height:100%;left:0;top:0;" id="canvas_wan">
                </div>
              </div>
            </div>

            <div class="bottom_list" style="margin-bottom: 1.09rem;">
              <ol>
                <li>总共出现</li>
                <li>最大连出</li>
                <li>最大遗漏</li>
                <li>平均遗漏</li>
                <li>当前遗漏</li>
              </ol>

              <ol v-for="(items,indexs) in this.bottom_list" v-if="indexs < 10">
                <li>{{items.total_appear}}</li>
                <li>{{items.continue_max}}</li>
                <li>{{items.omit_max}}</li>
                <li>{{ Math.floor(items.omit_mean)}}</li>
                <li>{{items.omit_current}}</li>
              </ol>
            </div>

          </div>

        </div>
      </div>
    </mt-loadmore>
    <cathectic v-on:numberChange="receiveNumber" :lot_id="lot_id+''"></cathectic>
    <Tab></Tab>
  </div>
</template>


<script type="text/ecmascript-6">
  import { Indicator } from "mint-ui";
  import { requestOpt, dtFormate, alertip, mt_loading_open, mt_loading_close } from "api/recommend";
  import Cathectic from "@/components/trend/sizeDig";
  import Tab from "@/components/tab/tab";
  export default {
    components: {
      Cathectic,
      Tab
    },
    data() {
      return {
        trendReturnFlag: this.$store.state.user.trendReturnFlag || false, // 返回按钮是否显示
        showha:          false, // 切换彩种是否显示
        arr_list:        [], // 基本走势图集合
        start_list_box: [], // 开奖结果
        trendList:       [], //  all dial list
        bottom_list:     [], // 底部集合

        my_num:         100, //  默认显示 100 条记录 参数
        lot_id:         window.lot_id || 1, // 彩票类型ID
        lot_all:        window.ALL_all, // 所有的彩票
        len:             0,   //  后台请求的长度
        isShow_Wan_list_data: true, // 默认显示数字
        isShowSelect_wei: false, // 是否加载数据

        digit_data:['开奖结果','万位','千位','百位','十位','个位'], // tab
        digit_active:0, // tab => 下标索引
      };
    },
    methods: {
      chkLotTab(id) {
        this.showha = false
        this.lot_id = id
//        window.lot_id = id
        this.my_num = 100;
        this.startFn();
        this.getLotResultFroms();
      },
      open_btn(val) { // 点击tab 切换 数据
        this.digit_active = val
        this.$root.bus.$emit("sendValue", val);
        this.$root.bus.$emit('stat', this.arr_list.stat)
        this.trendFn(val, this.len)
      },
      trendFn(index, len) {
        if (index == 0) return false;
        this.trendList = this.translate_arr( this.arr_list.stat[index].omits, len); // 走势图
        this.bottom_list = this.arr_list.stat[index]; // 底部的 list
        $('#canvas_wan').html('').css('heigth', 0);
        setTimeout(() => {
          this.draw_cvs(this.len, ".wan_table_3", "#canvas_wan", this.trendList); // 画 canvas
        }, 50)
      },
      startFn() { // 获取走势图数据
        mt_loading_open()
        requestOpt.reqnoGet("lottery_trends?trend_type_id=1&lot_type_id="+this.lot_id+'&list_length='+this.my_num, res => {
            /*
             list 彩票开奖列表   =>     期数   开奖号码
             stat 彩票开奖统计
             */
            if (res.data.status === 1) {
              this.arr_list = res.data.data;
              this.isShowSelect_wei = true;
              this.len = res.data.data.list.length;
              this.trendFn(this.digit_active, this.len)
              setTimeout(() => {
                if (this.$refs.loadmore) {
                  this.$refs.loadmore.onTopLoaded();
                }
              }, 500);
            }
            mt_loading_close()
          }, err => {
            mt_loading_close()
            console.log(err)
          });
      },
      getLotResultFroms() { // 获取开奖记录 带形态
        requestOpt.reqnoGet("lottery_results_and_forms/" + this.lot_id + '?list_length='+this.my_num, res => {
            if (res.data.status === 1) {
              this.start_list_box = res.data.data.list;
            }
          }, err => {
            console.log(err)
          }
        );
      },

      // 期数
      receiveNumber(num) {
        this.my_num = num;
        this.startFn();
        this.getLotResultFroms();
      },

      loadTop() {
        this.startFn();
        this.getLotResultFroms();
      },

      draw_cvs(num, className, id_box, data) {
        let myCanvas = document.createElement("canvas");
        // num 显示多少条数据 className  对应容器class  id_box 容器id_box 放canvas  data  数据记录
        myCanvas.width = $(className).width();
        myCanvas.height = $(className).height();
        myCanvas.style.position = "absolute";
        myCanvas.style.top = 0;
        myCanvas.style.left = 0;
        $(id_box).html(myCanvas);
        let width = $(className).width();
        let height = $(className).height();
        let x_f = width / 10; // x 横坐标  单元
        let y_f = height / num; // y 纵坐标 单元
        let cxt_wan = myCanvas.getContext("2d");
        cxt_wan.strokeStyle = "red";
        cxt_wan.lineWidth = 1;
        for (var i = 0; i < data.length; i++) {
          for (var j = 0; j < data[i].length; j++) {
            if (data[i][j] == 0) {
              if (i == 0) {
                cxt_wan.moveTo(x_f * (j + 1) - x_f / 2, y_f * 0 + y_f / 2);
              }
              cxt_wan.lineTo(x_f * (j + 1) - x_f / 2, y_f * i + y_f / 2);
            }
          }
        }
        cxt_wan.stroke();
      },

      /* 把纵向数组变成横向数组
       * wei_arr 二维数组 len 为10位 每一位 100 位
       * return  二维数组 len 为100位 每一位 显示 10位
       * */
      translate_arr(wei_arr, num) { // 100条原数组
        let arr_all_1 = [];
        for (let j = 0; j < num; j++) { // num 100   0 - 100
          let arr = [];
          for (let i = 0; i < wei_arr.length; i++) { // 0 - 10
            arr.push(wei_arr[i][j]); // arr.lenth = 10
          }
          arr_all_1.push(arr); // arr_all_1.length = 100
        }
        return arr_all_1;
      },

    },
    mounted() {
//      console.log(this.lot_all)
      this.startFn();
      this.getLotResultFroms();
    },

    updated() {},
    // 判读大单 小单之类的过滤器
    filters: {
      calc: function(value) {
        if (!value) return "";
        if (value > 3 && value % 2 != 0) {
          value = "大单";
        }
        if (value < 5 && value % 2 != 0) {
          value = "小单";
        }

        if (value > 4 && value % 2 == 0) {
          value = "大双";
        }
        if (value <= 4 && value % 2 == 0) {
          value = "小双";
        }
        return value;
      },
      slic: function(value) {
        if (!value) return "";
        return value.substr(4);
      }
    }
  };
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
    height 5.35rem
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
  .trend-alert ul li.red{
    background  #ffffff;
    color #ff3a3b;
    border 1px solid #ff3a3b;
  }

  .periods{
    padding-bottom:0.98rem;
  }
  .start {
    width: 7.5rem;
    height: auto;
    display: block;
    background: #ffffff;
    overflow: auto;
  }

  // 走势内容
  .start-contents {
    width: 7.5rem;
    height: auto;
    overflow: auto;
    background: #eeeeee;
    display: block;
    padding-top: 0.56rem;
    position: relative;
    margin-bottom: 1.09rem;
  }

  .start-contents .start-title {
    width: 7.5rem;
    height: 0.42rem;
    background: #f8f8f8;
    position: fixed;
    top: 1.045rem;
    z-index: 44;
    display: block;
  }

  .start-contents .start-body {
    width: 7.5rem;
    height: auto;
    overflow: auto;
    display: block;
  // margin-top: 0.41rem;
    padding-bottom:1.18rem;
  }

  .start-contents table tr {
    width: 7.5rem;
    height: 0.5rem;
    display: block;
    line-height: 0.5rem;
  }

  .start-contents table tr td {
    font-size: 0.20rem;
    color: #000000;
    width: 0.66rem;
    text-align: center;
    margin: 0;
    padding: 0;
    border: none;
    display: block;
    float: left;
  }

  .start-contents table tr td.title-width {
    width: 1.38rem;
  }

  .start-contents table tr td.title-colors-red {
    color: #fa3c3c;
    letter-spacing: 1px;
  }

  .start-contents table tr:nth-child(odd) {
    background: #f3fbfe;
  }

  .start-contents table tr:nth-child(even) {
    background: #f3f2f2;
  }

  // 位数

  // 位数
  .digit {
    width: 7.5rem;
    height: 1.46rem;
    display: block;
    position: fixed;
    z-index: 40;
    background: #fff;
    overflow: hidden;
    top: 0.88rem;
  }

  .digit ul {
    margin: auto;
    width: 6.9rem;
    height: auto;
    display: block;
  }

  .digit ul li {
    float: left;
    width: 1.18rem;
    height: 0.42rem;
    display: block;
    border: 1px solid #fa3c3c;
    line-height: 0.42rem;
    font-size: 0.28rem;
    color: #fa3c3c;
    margin-top: 0.175rem;
    border-radius: 4px;
    margin-right: 0.185rem;
    text-align: center;
  }

  .digit ul li:nth-child(1) {
    width: 2.63rem;
  }

  .digit ul li:nth-child(4) {
    margin-right: 0;
  }

  .digit ul li.red-bg {
    border: 1px solid #fa3c3c;
    color: #ffffff;
    background: #fa3c3c;
  }

  .digit .wei_ul {
    height: 100%;
    position: relative;
    z-index: 40;
  }

  // 期数
  table tr {
    height: 35px;
    line-height: 35px;
  }

  table tr td {
    color: #000;
  }

  .wan_table {
    width: 100%;
  }

  .wan_table ul {
    display: flex;
    display: -webkit-flex;
    background: #f3f2f2;
  }

  .wan_table ul li {
    flex: 1;
    -webkit-flex  : 1;
    text-align: center;
    border-right: 0.01rem solid #ddd;
    color: #666;
    height: 35px;
    line-height: 35px;
  }

  .wan_table ul li:nth-child(1) {
    flex: 2;
    -webkit-flex  : 2;
  }

  .wan_list table tr:nth-child(odd) {
    background: #f3fbfe;
  }

  .wan_list table tr:nth-child(even) {
    background: #f3f2f2;
  }

  // 中间数据
  .wan_list {
    display: flex;
    display: -webkit-flex;
  }

  .wan_list .wan_table_2 {
    flex: 2;
    -webkit-flex  : 2;
  }

  .wan_list .wan_table_3 {
    flex: 10;
    -webkit-flex  : 10;
    position: relative;
  }

  .wan_table_2>table, .wan_table_3>table {
    width: 100%;
  }

  .wan_table_2 table tr, .wan_table_3 table tr {
    display: flex;
    display: -webkit-flex;
    width: 100%;
  }

  .wan_table_2 table tr td, .wan_table_3 table tr td {
    flex: 1;
    -webkit-flex  : 1;
    text-align: center;
    border-right: 0.01rem solid #ddd;
  }

  .wan_table_3 table tr td {
    position: relative;
  }

  .wan_table_3 table tr td span {
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -0.2rem;
    margin-left: -0.2rem;
  // transform: translate(-50%,-50%);
    line-height: 0.4rem;
  }

  .wan_table_3 table tr td span canvas {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 3;
  }

  // 最下方列表 最大遗漏等
  .bottom_list {
    display: flex;
    display: -webkit-flex;
  }

  .bottom_list ol li {
    width: 100%;
    height: 0.68rem;
    text-align: center;
    color: #323232;
    line-height: 0.68rem;
    font-size: 11px;
    border-left: 1px solid #ddd;
  }

  .bottom_list ol {
    flex: 1;
    -webkit-flex  : 1;
  }

  .bottom_list ol:nth-child(1) {
    flex: 1.95;
    -webkit-flex  : 1.95;
  }

  .bottom_list ol:nth-child(1) li {
    border-left: none;
  }

  .bottom_list ol li:nth-child(odd) {
    background: #76fafe;
  }

  .bottom_list ol li:nth-child(even) {
    background: #f3fbfe;
  }

</style>

