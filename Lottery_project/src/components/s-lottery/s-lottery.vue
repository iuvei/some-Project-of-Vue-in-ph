<template>
  <div class="s-lottery">
    <div class="s-lottery-head">
      <ul>
        <li class="s-lottery-head1"></li>
        <li class="s-lottery-head2">开奖大厅</li>
        <li class="s-lottery-head3"></li>
      </ul>
    </div>
    <div class="s-content">
      <dl class="s-content-list" v-for="(items, indexs) in results" @click="toLotDetail(items.lot_type_id)">
        <dt class="s-lottery-left">
          <dl class="left-content">
            <dt>
              <span class="s-lottery-t">{{items.name}}</span>
              <span class="s-lottery-q">第{{items.issue_number}}期</span>
              <span class="s-lottery-s">{{items.draw_time}}</span>
            </dt>
            <dd :class="{'lhc_dd_data' : items.lot_type_id == 23 || items.lot_type_id == 24}">
              <p v-if="items.lot_type_id==8 || items.lot_type_id == 9 || items.lot_type_id == 20">
                <img v-if="items.number1" :src="items.number1 | transImg" />
                <img v-if="items.number2" :src="items.number2 | transImg" />
                <img v-if="items.number3" :src="items.number3 | transImg" />
              </p>
              <p v-else-if="items.lot_type_id == 21 || items.lot_type_id == 22" >
                <span v-if="items.number1">{{items.number1}}</span>
                <span v-if="items.number1" style="background: none;border: none;color: #ff3a3b"> + </span>
                <span v-if="items.number1">{{items.number2}}</span>
                <span v-if="items.number1" style="background: none;border: none;color: #ff3a3b">  + </span>
                <span v-if="items.number1">{{items.number3}}</span>
                <span v-if="items.number1" style="background: none;border: none;color: #ff3a3b;"> = </span>
                <span v-if="items.number4">{{items.number4}}</span>
              </p>

              <p v-else-if="( items.lot_type_id == 23 || items.lot_type_id == 24 ) && items.number1">
                <strong v-if="items.number1">
                    <span :class="{blue:lhc_color_farmate(items.number1)==1,green:lhc_color_farmate(items.number1)==2}" v-if="items.number1">{{items.number1}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number2)==1,green:lhc_color_farmate(items.number2)==2}" v-if="items.number2">{{items.number2}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number3)==1,green:lhc_color_farmate(items.number3)==2}" v-if="items.number3">{{items.number3}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number4)==1,green:lhc_color_farmate(items.number4)==2}" v-if="items.number4">{{items.number4}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number5)==1,green:lhc_color_farmate(items.number5)==2}" v-if="items.number5">{{items.number5}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number6)==1,green:lhc_color_farmate(items.number6)==2}" v-if="items.number6">{{items.number6}}</span>
                    <span :class="{blue:lhc_color_farmate(items.number7)==1,green:lhc_color_farmate(items.number7)==2}" v-if="items.number7">{{items.number7}}</span>
                </strong>
                <strong v-if="items.number1">
                    <i  v-if="items.number1" >{{ lhc_color_formate(items.number1).text }}</i>
                    <i  v-if="items.number2" >{{ lhc_color_formate(items.number2).text }}</i>
                    <i  v-if="items.number3" >{{ lhc_color_formate(items.number3).text }}</i>
                    <i  v-if="items.number4" >{{ lhc_color_formate(items.number4).text }}</i>
                    <i  v-if="items.number5" >{{ lhc_color_formate(items.number5).text }}</i>
                    <i  v-if="items.number6" >{{ lhc_color_formate(items.number6).text }}</i>
                    <i  v-if="items.number7" >{{ lhc_color_formate(items.number7).text }}</i>
                </strong>
              </p>

              <p v-else>
                <span v-if="items.number1">{{items.number1}}</span>
                <span v-if="items.number2">{{items.number2}}</span>
                <span v-if="items.number3">{{items.number3}}</span>
                <span v-if="items.number4">{{items.number4}}</span>
                <span v-if="items.number5">{{items.number5}}</span>
                <span v-if="items.number6">{{items.number6}}</span>
                <span v-if="items.number7">{{items.number7}}</span>
                <span v-if="items.number8">{{items.number8}}</span>
                <span  v-if="items.number9">{{items.number9}}</span>
                <span class="spanspace" v-if="items.number10">{{items.number10}}</span>
              </p>
              <h4 v-if="!items.number1">{{lottery_wining}}</h4>
            </dd>
          </dl>
        </dt>
        <dd class="center-list2"><img src="../../images/my_more.png" alt="右箭头"></dd>
      </dl>

    </div>
    <tab></tab>
  </div>
</template>


<script type="text/ecmascript-6">
import { Indicator } from "mint-ui";
import MHeader from "@/components/m-header/m-header";
import Tab from "@/components/tab/tab";
import { getRecommend, getDiscList, requestOpt, alertip } from "api/recommend";
import {lottery_wining, lhc_lot_data_formate} from 'api/config'
import {mapActions} from 'vuex'
import {APP_INFO} from '../../store/user'

export default {
  data() {
    return {
      results: window.ALL_all||[],
      PC_dandan:window.PC_dandan||[],
      timer: null,
      lottery_wining: lottery_wining,
      app_config : ''
    };
  },
  components: {
    MHeader,
    Tab
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('HOME_TAB','')
    clearInterval(this.timer)
    next()
  },
  mounted() {
//    console.log(this.results)
    this.timer = setInterval(() => {
      this.results=window.ALL_all;
      this.PC_dandan = window.PC_dandan
    },1000)
  },
  methods: {
    toLotDetail(id) {
      this.$router.push('/record/'+id)
    },
    lhc_color_farmate(name) { // lhc号码字体颜色格式化
      if(name==='03' ||name==='04' ||name==='09' ||name==='10' ||name==='14' ||name==='15' ||name==='20' ||name==='25' ||name==='26' ||name==='31' ||name==='36' ||name==='37' ||name==='41' ||name==='42' ||name==='47' ||name==='48') {
        return 1
      } else if (name==='05' ||name==='06' ||name==='11' ||name==='16' ||name==='17' ||name==='21' ||name==='22' ||name==='27' ||name==='28' ||name==='32' ||name==='33' ||name==='38' ||name==='39' ||name==='43' ||name==='44' ||name==='49'){
        return 2
      }
      return 0
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
  },
  created(){
      this.getConfig_data();
  },
  // updated(){

  //   this.startFn();
  // }
};
</script>

<style scoped lang="stylus">
.s-lottery {
  /*width: 7.5rem;
  height: 13.34rem;
  display: block;
  background: #ffffff;*/
}


.s-lottery-head {
  width: 7.5rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  background: #ff3a3b;
  position: fixed;
  top: 0;
  z-index: 999;
}

.s-lottery-head ul {
  width: 6.9rem;
  height: 0.88rem;
  display: block;
  margin: auto;
  line-height: 0.88rem;
}

.s-lottery-head ul li {
  float: left;
  height: 0.88rem;
  display: block;
}

.s-lottery-head1 {
  width: 1.5rem;
}

.s-lottery-head2 {
  width: 3.8rem;
  text-align: center;
  font-size: 0.36rem;
  font-weight: normal;
  color: #ffffff;
}

.s-lottery-head3 {
  width: 1.5rem;
  text-align: right;
}

/*采种列表*/

.s-content {
  width: 7.5rem;
  height: auto;
  display: block;
  background: #ffffff;
  margin-top: 0.88rem;
  /*margin-bottom: 1.18rem;*/
  padding-bottom: 1.18rem;
}

.s-content dl.s-content-list {
  position relative
  width: 7.5rem;
  min-height: 75px;
  border-bottom: 1px solid #eeeeee;
  background: #ffffff;
  &:after {
    content ''
    display table
    clear both
  }
}

.s-content dl dt.s-lottery-left {
  width: 6.72rem;
  min-height: 75px;
  float: left;
  margin-left: 0.3rem;
}

.s-content dl dt.s-lottery-left dl.left-content {
  width: 6.72rem;
  min-height: 75px;
  display: block;
  .spanspace {
    margin .15rem 0
  }
}

.s-content dl dt.s-lottery-left dl.left-content dt {
  width: 6.72rem;
  height: 35px;
  display: block;
  line-height: 35px;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-t {
  font-size: 0.3rem;
  color: #fe3d3d;
  display: inline-block;
  height: 35px;
  float: left;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-q {
  font-size: 0.26rem;
  color: #000000;
  display: inline-block;
  height: 35px;
  float: left;
  margin-left: 0.2rem;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-d {
  font-size: 0.24rem;
  color: #676767;
  display: inline-block;
  height: 35px;
  float: left;
  margin-left: 0.08rem;
}

.s-content dl dt.s-lottery-left dl.left-content dt span.s-lottery-s {
  font-size: 0.24rem;
  color: #323232;
  display: inline-block;
  height: 35px;
  float: left;
  margin-left: 0.2rem;
}

.s-content dl dt.s-lottery-left dl.left-content dd {
  width: 6.72rem;
  height: 35px;
  display: block;
  line-height: 35px;
  font-size: 0.3rem;
  color: #fc823c;
  text-align: left;
}

.s-content dl dt.s-lottery-left dl.left-content dd span {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  line-height: 0.6rem;
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

.s-content dl dt.s-lottery-left dl.left-content dd img {
  width: 0.6rem;
  height: 0.6rem;
  display: block;
  line-height: 0.6rem;
  text-align: center;
  float: left;
  margin-right: 0.1rem;
  border: none;
}

.s-content dl dd.center-list2 {
  width: 0.18rem;
  height: 0.3rem;
  float: right;
  display: inline-block;
  margin-right: 0.3rem;
}

.s-content dl dd.center-list2 img {
  position absolute
  top 0
  bottom 0
  right .3rem
  margin auto
  width: 0.18rem;
  height: 0.3rem;
}
// -------新增显示生肖的样式

.s-content dl dt.s-lottery-left dl.left-content dd.lhc_dd_data{
    min-height : 70px;
}
.s-content dl dt.s-lottery-left dl.left-content dd.lhc_dd_data p{
    // height : 35px;
}
.s-content dl dt.s-lottery-left dl.left-content dd.lhc_dd_data p strong{
    display:block;
    height:35px;
}
.s-content dl dt.s-lottery-left dl.left-content dd.lhc_dd_data p strong i{
    display:inline-block;
    width:0.6rem;
    height:0.6rem;
    margin-right: 0.01rem;
    font-size: 0.32rem;
    font-weight: 650;
    font-style:normal;
    text-align:center;
    color:#4c4c4c;
}
</style>


