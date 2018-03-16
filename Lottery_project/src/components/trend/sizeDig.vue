<template>
  <div class="cathectic-content">
    <div class="cathectic-alert">
      <div class="cathectic-alert-content"  v-show="isShowTable">
        <table class="zs_table" style="over-flow:hidden" v-for="(items,indexs) in arr_list" v-if="receiveValue == 0 && indexs == 1">

          <tr  v-for="(item,index) in NameList" v-if="lot_id == item.id">
            {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>
          <tr class="cathectic-top2">
            <td class="blue-1">号码</td>
            <td>总共出现</td>
            <td>最大连出</td>
            <td>最大遗漏</td>
            <td>平均遗漏</td>
            <td>当前遗漏</td>
          </tr>

          <tr v-for="(item , index) in items" v-if="item instanceof Array == false">
            <td class="blue"> {{ index }}</td>
            <td>{{ item.total_appear }}</td>
            <td> {{ item.continue_max }}</td>
            <td>{{ item.omit_max }}</td>
            <td > {{ Math.floor(item.omit_mean) }} </td>
            <td>{{ item.omit_current }}</td>
          </tr>
        </table>

        <table class="zs_table" style="over-flow:hidden"  v-for="(items,indexs) in arr_list" v-if=" indexs == receiveValue ">

          <tr  v-for="(item,index) in NameList" v-if="lot_id == item.id">
            {{item.name}}-{{item.bit_units[receiveValue >= 1 ? receiveValue - 1 : receiveValue ]}}
          </tr>
          <tr class="cathectic-top2">
            <td class="blue-1">号码</td>
            <td>总共出现</td>
            <td>最大连出</td>
            <td>最大遗漏</td>
            <td>平均遗漏</td>
            <td>当前遗漏</td>
          </tr>
          <tr v-for="(item , index) in items" v-if="item instanceof Array == false">
            <td class="blue"> {{ index }}</td>
            <td>{{ item.total_appear }}</td>
            <td> {{ item.continue_max }}</td>
            <td>{{ item.omit_max }}</td>
            <td > {{ Math.floor(item.omit_mean) }} </td>
            <td>{{ item.omit_current }}</td>
          </tr>
        </table>
      </div>
      <div class="select_list" v-if="isShowList">
        <dl v-if="isShowNum">
          <dd @click="prop_value(200)">200期</dd>
          <dd @click="prop_value(100)">100期</dd>
          <dd @click="prop_value(60)">60期</dd>
          <dd @click="prop_value(30)">30期</dd>
        </dl>
        <ul>
          <li v-show="isShowBtn"  @click="zoushi_table">
            <img src="../../images/zoushi_icon.png" >
            <h5>走势列表</h5>
          </li>
          <li v-show="isShowBtn" @click="qishu_btn">
            <img src="../../images/qishu_icon.png"  >
            <h5>期数设置</h5>
          </li>
          <li>
            <img src="../../images/sign_out@2x.png" @click="showList">
          </li>
        </ul>
      </div>
      <div class="cathectic-btn" @click='showList' v-show="!isShowList">
        <img src="../../images/see@2x.png">
      </div>
    </div>
    <div class="cathectic">
      <dl>
        <dt @click="isShowPan=false">
            <span v-for="(item,index) in NameList" v-if="lot_id == item.id" :data-name=" item.name" id="my_item_name">
              {{item.name}}
            </span>
          <!-- <span v-for="(item,index) in NameList" v-if=" index >= 11 && lot_id == index + 2">
            {{item.name}}
          </span> -->
        </dt>
        <dd @click="pan_btn">
          <input type="button" value="去投一注">
        </dd>
      </dl>
    </div>
    <div class="cathectic1" v-show="isShowPan">
      <ul>
        <li class="cathectic1-top">
          <div tag="div" class="tab-item" @click="toPlan(1)">
            A盘
          </div>
        </li>
        <li>
          <div tag="div" class="tab-item"  @click="toPlan(2)">
            B盘
          </div>
        </li>
      </ul>
    </div>
    <div class='cathectic_bg'  v-show="isShowList"> </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    Indicator
  } from 'mint-ui';
  import {
    requestOpt,
    dtFormate,
    alertip
  } from 'api/recommend'
  export default {
    components: {},
    data() {
      return {
        arr_list: [],

        isShowList: false,
        isShowBtn: true,
        isShowNum:false,
        isShowTable: false,
        isShowPan:false,

        receiveValue : 0,
        NameList : [],
        result : [],
        PC_dandan : [],
//        lot_id:         window.lot_id || 1, // 彩票类型ID

      }
    },
    props: {
      lot_id: {
        type: String,
        default: '1'
      }
    },
    methods: {
      prop_value(value) {
        this.$emit('numberChange', value);
        this.showList();
      },
      showList() {
        this.isShowList = !this.isShowList;
        if(this.isShowList){
          document.getElementsByTagName("body")[0].style.position = "fixed";
        }else{
          document.getElementsByTagName("body")[0].style.position = "static";
        }
        this.isShowTable = false;
        this.isShowBtn = true;
        this.isShowNum = false;
      },
      qishu_btn(){
        this.isShowBtn = false;
        this.isShowNum = true;
      },
      pan_btn(){

        this.result = window.ALL_all;
        if (document.querySelector('#my_item_name')) {
          let name = document.querySelector('#my_item_name').getAttribute('data-name');
          if (name =='重庆时时彩'
            ||name =='北京PK拾'
            ||name =='三分时时彩'
            ||name =='三分PK拾'
            ||name =='幸运28'
            ||name =='北京28'
            ||name =='新疆时时彩'
            ||name =='天津时时彩'){
            this.isShowPan = !this.isShowPan;
          }else{
            this.to_drop_plan(1);
          }
        }
      },

      toPlan(index){
        this.to_drop_plan(index);
      },
      to_drop_plan(index){
        for(var i = 0; i < this.result.length; i++){
          if(this.lot_id == this.result[i].lot_type_id){
            this.$store.commit('LOTTERY_CODE',this.result[i].code)
            this.$router.push('/gameplay/'+ this.result[i].code +'/'+ this.result[i].lot_type_id +'/'+ index)
          }
        }
      },
      zoushi_table() {
        Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
        var list_id = this.lot_id <= 11 ? this.lot_id  : Number(this.lot_id);
        requestOpt.reqnoGetpara('lottery_trends', {
            params: {
              'lot_type_id': list_id,
              'trend_type_id': 1,
              'list_length': 100
            }
          },
          (res) => {
            this.arr_list = res.data.data.stat;
            this.isShowBtn = false;
            this.isShowTable = true;
            Indicator.close()
          },
          function(err) {
            Indicator.close()
          });

      },
      receiveNumber() {
        this.$root.bus.$on('sendValue', (num) => {
          if(num == 0 || num == 1){
            this.receiveValue = 1;
          }else{
            this.receiveValue = num
          }
        })
      },

      getName (){
        // console.log(this.lot_id);
        requestOpt.reqnoGet('lottery_types/all',
          (res) => {
            this.NameList = res.data.data.list;
          },

          function(err) {

            Indicator.close()
          });
      }

    },
    mounted() {
      this.getName();
    },
    updated(){
      this.receiveNumber();
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '~common/stylus/variable';





  .select_list dl dd {
    width : 0.96rem;
    height: 0.7rem;
    line-height 0.7rem;
    text-align: center;
    background : #fff;
    color: red;
    border-bottom : 1px solid red;
    font-size:12px;
  }

  .select_list dl {
    border-top : 1px solid red;
    border-left : 1px solid red;
    border-right : 1px solid red;
    margin-bottom:10px;
  }



  // 背景

  .cathectic_bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index : 99;
    background : rgba(0,0,0,0.5);
  }
  .cathectic-content {

  }

  // 选择列表

  .select_list {
    display block;
    float : right;
    z-index : 110;
    transform : translateY(0.3rem);
  }

  .select_list  ul li {

    width : 0.96rem;
    height : 1.3rem;

  }

  .select_list  ul li h5 {

    font-size : 10px;
    text-align : center;
    color: #fff;
  }
  .select_list  li  img {

    width : 0.96rem;
    height : 0.96rem;
  }

  // 弹出排列
  .cathectic-alert {
    width: 6.9rem;
    height: auto;
    position: fixed;
    bottom: 2.5rem;
    left: 0.3rem;
    display: block;
    z-index: 110;
  }

  .cathectic-alert-content {
    width: 6.9rem;
    display: block;
    z-index: 110;
    background: #f3f1f2;
    max-height: 5rem;
    overflow: auto;
  }

  .cathectic-alert-content tr {
    width: 6.86rem;
    height: 0.41rem;
    display: block;
    line-height: 0.42rem;
    text-align: center;
    font-size: 0.24rem;
    color: #e97647;
    border-left: 1px solid #e97647;
    border-right: 1px solid #e97647;
    border-bottom: 1px solid #e97647;
  }

  .cathectic-top {
    border-top: 1px solid #e97647;
  }

  .cathectic-alert-content tr td {
    color: #fa3c3c;
    width: 1.13rem;
    border-left: 1px solid #e97647;
    line-height: 0.42rem;
    height: 0.42rem;
  }

  .cathectic-alert-content tr.cathectic-top2 td {
    color: #e97647;
  }

  .cathectic-alert-content tr td.blue {
    color: #61b3e2;
    border-left: 0;
  }

  .cathectic-alert-content tr td.blue-1 {
    border-left: 0;
  }

  .cathectic-btn {
    width: 0.96rem;
    height: 0.96rem;
    display: block;
    float: right;
    margin-top: 0.16rem;
    z-index: 110;
  }

  .cathectic-btn img {
    width: 0.96rem;
    height: 0.96rem;
    display: block;
    float: right;
    z-index: 110;
  }

  // 去投注
  .cathectic {
    display: flex;
    display: -webkit-flex;
    height: 0.88rem;
    font-size: 0.24rem;
    width: 7.5rem;
    background: #ffffff;
    position: fixed;
    bottom: 1.18rem;
    text-align: center;
    z-index: 40;
  }

  .cathectic dl {
    width: 7.5rem;
    height: 0.88rem;
    display: block;
    /*float: left;*/
    line-height: 0.88rem;
  }
  .cathectic dl:after {
    content : '';
    display : table;
    clear : both;
  }

  .cathectic dl dt {
    width: 6rem;
    height: 0.88rem;
    display: block;
    float: left;
    text-align: left;
    border-top: 1px solid #eeeeee;
  }

  .cathectic dl dt span {
    display: block;
    float: left;
    margin-left: 0.3rem;
    text-align: left;
    color: #323232;
    font-size: 0.28rem;
  }

  .cathectic dl dd {
    width: 1.5rem;
    height: 0.88rem;
    display: block;
    float: right;
    background: #fa3c3c;
    border-top: 1px solid #fa3c3c;
  }

  .cathectic dl dd input {
    width: 1.5rem;
    height: 0.88rem;
    display: block;
    float: right;
    font-size: 0.3rem;
    color: #ffffff;
    background: none;
    border: none;
    outline: none;
    line-height: 0.88rem;
  }

  // A.B盘
  .cathectic1 {
    width: 1.5rem;
    height: 1.36rem;
    z-index: 99;
    display: block;
    right: 0;
    position: fixed;
    bottom: 1.18rem;
    background: #ffffff;
  }

  .cathectic1 ul li {
    border-right: 0;
    border-radius: 2px;
    width: 1.5rem;
    height: 0.68rem;
    font-size: 0.3rem;
    color: #000000;
    text-align: center;
    background: #ffffff;
    line-height: 0.69rem;
    border: 1px solid #eeeeee;
  }

  .cathectic1 ul li.cathectic1-top {
    border-bottom: 0;
  }
  .zs_table{
    overflow-Y : scroll;
  }
</style>
