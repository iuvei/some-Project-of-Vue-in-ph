<!--彩票投注明细-->
<template>
  <div class="bets-container">
    <back :title="betTitle" @click="$store.commit('BET', null)"></back>
    <div class="bets-content">
      <div class="bets-lottery-info">
        <div>
          <i v-if="bet_info_obj.curr_count_down">
            {{bet_info_obj.curr_issue_number}}期
          </i>
          <i v-else >
            距离开盘还有
          </i>

          <span>
            {{bet_info_obj.curr_count_down | transCountTime}}
          </span>
        </div>
        <div>余额：
          <!--<span v-if="$store.state.user.userinfo">{{$store.state.user.userinfo.balance}}</span>-->
          <span v-if="userinfo">{{userinfo.balance}}</span>
          元</div>
      </div>
    </div>
    <!--按钮-->
    <div class="opt-btns">
      <div @click="manual">
        <Icon type="plus" color="#333"/>
        <span>手动添加</span>
      </div>
      <div @click="automatic">
        <Icon type="plus" color="#333"/>
        <span>机选一注</span>
      </div>
      <div @click="delALL">
        <Icon type="trash-a" color="#333"/>
        <span>全部清空</span>
      </div>

    </div>
    <!--选号列表-->
    <div class="bets-list">
      <div class="bets-items" v-for="(bets,i) in bets" v-if="$route.params.pan==1">
        <div class="bets-item">
          <!--<span class="b-red bets_number" v-for="(item,k) in bets.bets_number">{{item}}</span>-->
          <span class="b-red bets_number" v-if="/胆拖/g.test(bets.bet_type2)" >{{bets_numberfn1(bets.bet_numbers1,bets.bet_numbers2)}}</span>
          <span class="b-red bets_number" v-else-if="bets.bet_type2 == '通选'" >{{bets.lotteryPosText[0]}}</span>
          <span class="b-red bets_number" v-else-if="bets.bet_type2 == '单选'" >
            <span v-for="(item1,i) in bets.bet_numbers1">{{bets.bet_numbers1.length-1===i?item1:item1+' '}}</span>
            <i v-if="bets.bet_numbers2&&bets.bet_numbers2.length>0" style="font-style: normal"> | </i>
            <span v-for="(item1,i) in bets.bet_numbers2">{{bets.bet_numbers2.length-1===i?item1:item1+' '}}</span>
          </span>
          <!--<span class="b-red bets_number" v-else v-for="(item,k) in bets_numberfn(bets.bet_numbers1)">{{item}}</span>-->
          <!--<span class="b-red bets_number" v-else v-for="(item,k) in bets.bet_numbers1Text">{{item}}</span>-->
          <!--<span class="b-red bets_number" v-else v-for="(item,k) in bets_numberfnTex(bets.bet_numbers1Text)">{{item}}</span>-->
          <span class="b-red bets_number"  v-else v-for="(item,k) in bets_numberfnTex(bets.bet_numbers1Text)">{{bets.bet_numbers1Text.length==1||(item&&bets.bet_numbers1Text.length-1==k)?item:item+' |&nbsp; '}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">赔率：{{bets.bet_rate}} 返利：{{(~~bets.retrun_li/100).toFixed(2)}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">追{{bets.future_issues}}期 {{bets.bet_count}}倍</span>
        </div>
        <div class="bets-item">
          <span >{{bets.bet_type1}}-{{bets.bet_type2}} {{bets.lotteryNum}}注 {{parseFloat(bets.bet_amount.toFixed(3))}}元</span>
        </div>
        <div class="bets-del" @click="del(i)">
          <Icon type="ios-close-outline" color="#ff3a3b"></Icon>
        </div>
      </div>
      <div class="bets-items" v-else >
        <div class="bets-item">
          <span class="b-red bets_number">{{bets.lotteryPosText[0]}}_{{bets.bet_name[0]}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">赔率：{{bets.bet_rate}} 返利：{{(~~bets.retrun_li/100).toFixed(2)}}</span>
        </div>
        <div class="bets-item">
          <span class="b-gray">追{{bets.future_issues}}期 {{bets.bet_count}}倍</span>
        </div>
        <div class="bets-item">
          <span >{{bets.bet_type1}}-{{bets.bet_type2}} {{bets.lotteryNum}}注 {{bets.bet_amount}}元</span>
        </div>
        <div class="bets-del" @click="del(i)">
          <Icon type="ios-close-outline" color="#ff3a3b"></Icon>
        </div>
      </div>
      <nop-data v-if="bets&&bets.length===0"></nop-data>
    </div>
    <!--footer-->
    <div class="bets-footer">
      <div>
        <span class="b-orange">{{lotteryNum1}}</span>注
        <span class="b-orange">{{parseFloat(lotteryCash1.toFixed(3))}}</span>元
      </div>
      <div>
        <input type="button" value="立即投注" @click="instantBets">
      </div>
    </div>
    <!--发起投注申请-->
    <div class="bets-apply" v-if="applyShow">
      <div class="bets-apply-con">
        <h4>您将发起 <span class="b-red">{{bet_info_obj.name}}</span>方案</h4>
        <p class="bets-applay-con">
          投注期号: <span class="b-blue">{{bet_info_obj.curr_issue_number}}</span>期
        </p>
        <p class="bets-applay-con">
          总金额: <span class="b-red">{{parseFloat(lotteryCash1.toFixed(3))}}</span>元
        </p>
        <p class="bets-applay-warning">
          <!--<span class="b-red">彩票有风险，购买需谨慎</span>-->
        </p>
        <div class="bets-applay-btns">
          <input type="button" value="取消" @click="betsCancel">
          <input type="button" value="确定" @click="betsOK">
        </div>
      </div>
    </div>
    <!--define modal-->
    <modal v-if="showModule" @close="showModule = false" ></modal>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NopData from '@/components/tab/nop-data'
  import modal from '@/components/public/modal_comfire'
  import { requestOpt, alertip,array_contain, chaLotteryNumber,mt_confirm,getArrayItems,mt_loading_open,mt_loading_close,mt_toast} from 'api/recommend'

  export default {
    components: {
      Back,
      NopData,
      modal
    },
    data() {
      return {
        islogin: sessionStorage.getItem('login'),
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        showModule: false,
        lotteryNum: 0, //总投注数
        lotteryCash: 0, // 总金额
        bet_info_obj: {},
        timer: null,
        bets:[],
        applyShow: false,
        betTitle: '投注',//bet_info_obj.name+'投注'
        lotteryRanges: this.$store.state.user.bet_number||[],
        bet_count: this.$store.state.user.bet_count||1,
        rates: this.$store.state.user.bet_rates ||[],
        activeArr: [],
        bet_numbers1Text: [],
        lotteryPosText: [],
        lotteryPosCode: [],
        cashFlag: '元' , // window.cashFlag ||
      }
    },
    computed: {
      lotteryNum1: function () {
        let res = 0
        for (let i=0,len=this.bets.length; i<len;i++) {
          res += ~~this.bets[i].lotteryNum
        }
        return res
      },
      lotteryCash1: function () {
        let res = 0
        for (let i=0,len=this.bets.length; i<len;i++) {
          res += this.bets[i].bet_amount
        }
        return res
      },
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      this.$store.commit('BET',{})
      next()
    },
    mounted() {
      if(this.$route.params.code==='DLT'|| this.$route.params.code==='SSQ') {
        this.userinfo.return_ratio_rate = 1
      }
      console.log(this.$store.state.user)
      /*if(!this.$store.state.user.bet_obj.name) {
        this.$router.replace('/login')
        return
      }*/
//      this.betTitle = this.$store.state.user.bet_obj.name+'投注'
      this.betTitle = this.$store.state.user.bet_obj.name?this.$store.state.user.bet_obj.name:JSON.parse(sessionStorage.getItem('bet_obj')).name+'投注'

      this.bets = this.$store.state.user.bets
      /*if (this.$store.state.user.bet.bet_type1) {
       let arr = []
       arr.unshift(this.$store.state.user.bet)
       this.bets = arr.concat(this.bets)
       } else {
       this.bets = this.$store.state.user.bet.concat(this.bets)
       }*/

      if (this.$store.state.user.bet&&this.$store.state.user.bet.bet_type1) {
//        if(this.$route.params.pan==1) {
//        console.log(1)
        let arr = []
        arr.unshift(this.$store.state.user.bet)
        this.bets = arr.concat(this.bets)
        /* } else if (this.$route.params.pan==2) {
         console.log(1)

         }*/
      } else  if (this.$store.state.user.bet&&JSON.stringify(this.$store.state.user.bet) !== '{}') {
//        console.log(2)
        this.bets = this.$store.state.user.bet.concat(this.bets)
      }
//      console.log(this.bets)
      this.$store.commit('BETS',this.bets)

      this.getBets()

      this.timer = setInterval(() => {
        this.getBets()
      },1000)


    },
    methods: {
      refreshCusInfo() {
        requestOpt.reqGet('userinfo?push_id=',sessionStorage.getItem('token') , res => {
          if (res.data.status===1) {
            this.userinfo.avatar = res.data.data.avatar
            this.userinfo.balance = res.data.data.balance
            sessionStorage.setItem('userinfo',JSON.stringify(res.data.data))
          } else {
          }

        }, err => {
//          mt_toast(err)
        })
      },
      getBets() {
        let list = /28/g.test(this.$route.params.code)?window.PC_dandan:window.All
        if (this.$store.state.user.bet_obj) {
          for (let i=0,len=list.length; i<len;i++) {
            if (this.$store.state.user.bet_obj.code===list[i].code  || this.$route.params.code===list[i].code) {
              this.bet_info_obj  = list[i];
            }
          }
        }

        /*let list = this.$store.state.user.bet_list
         for (let i=0,len=list.length; i<len;i++) {
         if (this.$store.state.user.bet_obj.code===list[i].code) {
         this.bet_info_obj  = list[i];
         }
         }*/
      },
      bets_numberfn: function (arr) {
        if(!arr) return []
        let res=[];
        for (let i=0; i<arr.length; i++) {
          if (typeof(arr[i]) === 'object') {
            res.push(arr[i].join(','))
          } else {
            res.push(arr[i])
          }
        }
        return res
      },
      bets_numberfnTex: function (arr) {
        if(!arr) return []
        let res=[];
//        console.log(arr)
        if (typeof(arr[0]) !== 'object') {
          res = arr.join(' ')
        } else {
          for (let i=0; i<arr.length; i++) {
            if (typeof(arr[i]) === 'object') {
              res.push(arr[i].join(' '))
            } else {
              res.push(arr[i])
            }
          }
        }
//        console.log(res)
        return res
      },
      bets_numberfn1(arr1,arr2) {
        let res1='',res2='';
        for (let i=0; i<arr1.length; i++) {
          if (i===arr1.length-1) {
            res1 += arr1[i]
          } else {
            res1 += arr1[i]+' '
          }
        }

        for (let k=0; k<arr2.length; k++) {
          if (k===arr2.length-1) {
            res2 += arr2[k]
          } else {
            res2 += arr2[k]+' '
          }
        }

        return res1 + ' |  ' +res2
      },
      del(i) { // 单个删除
        this.bets.splice(i,1)
//        this.$store.commit('BETS',this.bets)
        console.log(this.bets)
      },
      delALL() {
        this.bets = []
        this.$store.commit('BETS',this.bets)
      },
      delNumber() {// 清空选号
        if (!this.lotteryRanges) return
        for(let i=0,len=this.lotteryRanges.length;i<len;i++) {
          if(this.lotteryRanges[i].prams) {
            for(let k=0,len= this.lotteryRanges[i].prams.length;k<len;k++) {
              this.lotteryRanges[i].prams[k].active = false
            }
          }
        }
      },
      automatic() { // 自动投注
        this.delNumber();
        let obj = this.bets.length>0?this.bets.slice(0,1)[0]:this.$store.state.user.bet instanceof Array ? this.$store.state.user.bet[0] : this.$store.state.user.bet;
        /*if(obj && obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎') {
          this.bet_count = 2
        }*/
        console.log(obj)
        console.log(this.$store.state.user.bet)
        if(JSON.stringify(obj) !== '{}') {
          switch (this.bet_count) {
          case 1:
            // 时时彩
            if (obj.bet_type2 === '定位胆' || obj.bet_type2 === '1-5球' || obj.bet_type2 === '前中后') {
              this.lotteryRanges[Math.floor(Math.random()* ( this.lotteryRanges.length))].prams[Math.floor(Math.random()* ( this.lotteryRanges[0].prams.length))].active = true
            } else if (obj.bet_type2 === '两面盘') {
              if (this.$route.params.code == 'BJPK10' || this.$route.params.code == 'SFPK10'||this.$route.params.code=='JSPK10'){
                let len = Math.floor(Math.random()* ( this.lotteryRanges.length))
                this.lotteryRanges[len].prams[Math.floor(Math.random()* ( 4))].active = true
              }
              else{ // 时时彩
                let len = Math.floor(Math.random()*(this.lotteryRanges.length))
                if (len===0) {
                  this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
                } else {
                  this.lotteryRanges[len].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
                }
              }

            } else if (obj.bet_type1=='1-10名'&&obj.bet_type2 ==='1-10名') {
              let len = Math.floor(Math.random()*(this.lotteryRanges.length))
              this.lotteryRanges[len].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active =true
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            }
            break
          case 2:
            // 时时彩
            if (obj.bet_type1 =='任选二'&&obj.bet_type2 ==='直选复式') {
              let newArr = getArrayItems(this.lotteryRanges,2)
              for (let a=0; a< this.lotteryRanges.length; a++) {
                if (
                  this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1]) {
                  this.lotteryRanges[a].prams[Math.floor(Math.random()*9)].active = true
                }
              }
//              this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length))].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
//              this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length-1))].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
            } else if(obj.bet_type1 =='任选二'&&(obj.bet_type2 === '前二组选复式'||obj.bet_type2 === '后二组选复式')){
              for (let i=0,len=2; i < len; i++) {
                this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
              }
            } else if(obj.bet_type1== '任选二'&& obj.bet_type2 === '五选二直选和值') {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else if(( obj.bet_type1 =='任选三'&&(obj.bet_type2 === '前三组三复式'||obj.bet_type2 ==='后三组三复式'))
              || (obj.bet_type1== '二码'&&(obj.bet_type2 === '前二组选复式'|| obj.bet_type2 ==='后二组选复式'))
              || (obj.bet_type1== '任选复式'&&obj.bet_type2 ==='任选二中二')
              || (obj.bet_type1== '三星'&&(obj.bet_type2 ==='组三复式'))
              || (obj.bet_type1 == '二星' &&(obj.bet_type2 ==='前二组选' || obj.bet_type2 === '后二组选'))
              || (obj.bet_type1 == '不定位' && (obj.bet_type2 === '二码不定位' || obj.bet_type2 === '一码不定位'))
              || (obj.bet_type1 == '二不同号' && (obj.bet_type2 === '标准'))
              || (obj.bet_type1 == '合肖' && (obj.bet_type2 === '合肖'))
              || (obj.bet_type1 == '连码' && (obj.bet_type2 === '二全中' || obj.bet_type2 === '中特' || obj.bet_type2 === '特串'))
              || (obj.bet_type1 == '连肖连尾' && (obj.bet_type2 === '二连肖' || obj.bet_type2 === '二连尾'))) { // 1 选 2

              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if ((obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选二中二')
              || (obj.bet_type1 == '二码' && (obj.bet_type2 === '前二组选胆拖' || obj.bet_type2 === '后二组选胆拖') )
              || (obj.bet_type1 == '二码' && (obj.bet_type2 === '前二直选复式' || obj.bet_type2 === '后二直选复式'))
              || (obj.bet_type1 =='前二'&&(obj.bet_type2 ==='直选复式'))) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 1)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if ((obj.bet_type1 == '二同号' && obj.bet_type2 === '单选')
              || (obj.bet_type1 == '二不同号' && obj.bet_type2 === '胆拖')) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 1)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val.substr(0, 1)) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val.substr(0, 1)) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            }
            else if (obj.bet_type1 == '任选四' && (obj.bet_type2 === '前四组选6' || obj.bet_type2 === '后四组选6')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            }

            break

          case 3:
            if (obj.bet_type2 === '前三组选六'
              || obj.bet_type2 === '后三组选六'
              || obj.bet_type2 === '前三组选复式'
              || obj.bet_type2 === '中三组选复式'
              || obj.bet_type2 === '后三组选复式'
              || (obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选三中三')
              || (obj.bet_type1 == '三星' && (obj.bet_type2 === '组六复式'))
              || (obj.bet_type1 == '任选三' && (obj.bet_type2 === '前三组六复式' || obj.bet_type2 === '后三组六复式'))
              || (obj.bet_type1 == '三星' && (obj.bet_type2 === '后三组选六' || obj.bet_type2 === '前三组选六' ))
              || (obj.bet_type1 == '三不同号' && (obj.bet_type2 === '标准' ))
              || (obj.bet_type1 == '特码' && (obj.bet_type2 === '特码包三' ))
              || (obj.bet_type1 == '连码' && (obj.bet_type2 === '中二' || obj.bet_type2 === '三全中'))
              || (obj.bet_type1 == '连肖连尾' && (obj.bet_type2 === '三连肖' || obj.bet_type2 === '三连尾'))) { // 组三 组选 组六 1 选 3

              let newArr = getArrayItems(this.lotteryRanges[0].prams, 3)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1] || this.lotteryRanges[0].prams[a] == newArr[2]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }

            } else if (obj.bet_type2 === '前三组选三复式'
              || obj.bet_type2 === '后三组选三复式'
              || (obj.bet_type1 == '三星' && (obj.bet_type2 === '后三组选三' || obj.bet_type2 === '前三组选三' ))) { // 组三 1 选 2
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0] || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选三' && obj.bet_type2 === '直选复式') {
              if (this.$route.params.code === 'CQSSC'
                || this.$route.params.code === 'TJSSC'
                || this.$route.params.code === 'SFSSC'
                || this.$route.params.code === 'XJSSC'
                || this.$route.params.code === 'PL5') {
                /*for (let i=0,len=3;i<len;i++) {
                 this.lotteryRanges[Math.floor(Math.random()*(this.lotteryRanges.length))].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
                 }*/

                let

                  newArr = getArrayItems(this.lotteryRanges,3)
                for (let a=0; a< this.lotteryRanges.length; a++) {
                  if (
                    this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1]|| this.lotteryRanges[a] == newArr[2]) {
                    this.lotteryRanges[a].prams[Math.floor(Math.random()*9)].active = true
                  }
                }
              } else {
                this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
                this.lotteryRanges[1].prams[Math.floor(Math.random()*(this.lotteryRanges[1].prams.length))].active = true
                this.lotteryRanges[2].prams[Math.floor(Math.random()*(this.lotteryRanges[2].prams.length))].active = true
                this.lotteryRanges[3].prams[Math.floor(Math.random()*(this.lotteryRanges[3].prams.length))].active = true
                this.lotteryRanges[4].prams[Math.floor(Math.random()*(this.lotteryRanges[4].prams.length))].active = true
              }

            }
            else if (obj.bet_type1 == '任选三'&&obj.bet_type2 ==='五选三直选和值'
              || (obj.bet_type1 == '任选三'&&(obj.bet_type2 === '前四直选和值'||obj.bet_type2 ==='后四直选和值'))) {
              this.lotteryRanges[0].prams[Math.floor(Math.random()*(this.lotteryRanges[0].prams.length))].active = true
            } else if((obj.bet_type1== '任选胆拖' &&obj.bet_type2 ==='任选三中三') ||(obj.bet_type1=='三码'
              &&(obj.bet_type2 ==='前三组选胆拖'
              || obj.bet_type2 === '中三组选胆拖'
              || obj.bet_type2 === '后三组选胆拖'))
              || (obj.bet_type1 == '三不同号' && obj.bet_type2 === '胆拖')
              || (obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和')) {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 2)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if (obj.bet_type1 == '三码'
              && (obj.bet_type2 === '前三直选复式' || obj.bet_type2 === '中三直选复式' || obj.bet_type2 === '后三直选复式')) {
              let r1 = Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))
              let a1 = this.lotteryRanges[0].prams[r1].val
              this.lotteryRanges[0].prams[r1].active = true

              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== a1) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }
              /*number3与number1,2不能重合*/
              let res3 = []
              for (let a = 0; a < this.lotteryRanges[2].prams.length; a++) {
                if (this.lotteryRanges[2].prams[a].val !== a1 && this.lotteryRanges[2].prams[a].val !== res2[rom].val) {
                  res3.push(this.lotteryRanges[2].prams[a])
                }
              }
              let rom1 = Math.floor(Math.random() * (res3.length))
              for (let a = 0; a < this.lotteryRanges[2].prams.length; a++) {
                if (this.lotteryRanges[2].prams[a].val == res3[rom1].val) {
                  this.lotteryRanges[2].prams[a].active = true
                }
              }

            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            }
            break
          case 4:
            if ((obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选四中四')
              || (obj.bet_type1 == '连码' && (obj.bet_type2 === '四全中'))
              || (obj.bet_type1 == '连肖连尾' && (obj.bet_type2 === '四连肖' || obj.bet_type2 === '四连尾'))
              || (obj.bet_type1 === '任选四' && (obj.bet_type2 === '前四组选24' || obj.bet_type2 === '后四组选24'))) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 4)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选四' && obj.bet_type2 === '直选复式') {
              let newArr = getArrayItems(this.lotteryRanges, 4)
              for (let a = 0; a < this.lotteryRanges.length; a++) {
                if (this.lotteryRanges[a] == newArr[0] || this.lotteryRanges[a] == newArr[1] || this.lotteryRanges[a] == newArr[2] || this.lotteryRanges[a] == newArr[3]) {
                  this.lotteryRanges[a].prams[Math.floor(Math.random() * 9)].active = true
                }
              }
            } else if (obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选四中四') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 3)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if (obj.bet_type1 === '任选四' && (obj.bet_type2 === '前四组选12' || obj.bet_type2 === '后四组选12')) {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              let newArr = getArrayItems(this.lotteryRanges[1].prams, 2)
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a] == newArr[0]
                  || this.lotteryRanges[1].prams[a] == newArr[1]) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }
            }
            else if (obj.bet_type1 === '任选四' && (obj.bet_type2 === '前四组选4' || obj.bet_type2 === '后四组选4')) {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            }

            break
          case 5:
            if ((obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选五中五')
              || (obj.bet_type1 == '连肖连尾' && (obj.bet_type2 === '五连肖' || obj.bet_type2 === '五连尾'))) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选五中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 4)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            }

            break
          case 6:
            if ((obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选六中五')
              || obj.bet_type2 === '自选不中') {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选六中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            }

            break
          case 7:
            if ((obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选七中五')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 7)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选七中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[5].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else if (obj.bet_type2 === '普通投注') {
              if (this.$route.params.code == 'SSQ') {
                let newArr = getArrayItems(this.lotteryRanges[0].prams, 6)
                for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                  if (this.lotteryRanges[0].prams[a] == newArr[0]
                    || this.lotteryRanges[0].prams[a] == newArr[1]
                    || this.lotteryRanges[0].prams[a] == newArr[2]
                    || this.lotteryRanges[0].prams[a] == newArr[3]
                    || this.lotteryRanges[0].prams[a] == newArr[4]
                    || this.lotteryRanges[0].prams[a] == newArr[5]) {
                    this.lotteryRanges[0].prams[a].active = true
                  }
                }
                this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              }
              else if (this.$route.params.code == 'DLT') {
                let newArr = getArrayItems(this.lotteryRanges[0].prams, 5)
                for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                  if (this.lotteryRanges[0].prams[a] == newArr[0]
                    || this.lotteryRanges[0].prams[a] == newArr[1]
                    || this.lotteryRanges[0].prams[a] == newArr[2]
                    || this.lotteryRanges[0].prams[a] == newArr[3]
                    || this.lotteryRanges[0].prams[a] == newArr[4]) {
                    this.lotteryRanges[0].prams[a].active = true
                  }
                }

                let newArr1 = getArrayItems(this.lotteryRanges[1].prams, 2)
                for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                  if (this.lotteryRanges[1].prams[a] == newArr1[0]
                    || this.lotteryRanges[1].prams[a] == newArr1[1]) {
                    this.lotteryRanges[1].prams[a].active = true
                  }
                }
              }

            }
            else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
              this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            }

            break
          case 8:
            if ((obj.bet_type1 == '任选复式' && obj.bet_type2 === '任选八中五')) {
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 8)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]
                  || this.lotteryRanges[0].prams[a] == newArr[7]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
            } else if (obj.bet_type1 == '任选胆拖' && obj.bet_type2 === '任选八中五') {
              /*number1*/
              let newArr = getArrayItems(this.lotteryRanges[0].prams, 7)
              for (let a = 0; a < this.lotteryRanges[0].prams.length; a++) {
                if (this.lotteryRanges[0].prams[a] == newArr[0]
                  || this.lotteryRanges[0].prams[a] == newArr[1]
                  || this.lotteryRanges[0].prams[a] == newArr[2]
                  || this.lotteryRanges[0].prams[a] == newArr[3]
                  || this.lotteryRanges[0].prams[a] == newArr[4]
                  || this.lotteryRanges[0].prams[a] == newArr[5]
                  || this.lotteryRanges[0].prams[a] == newArr[6]) {
                  this.lotteryRanges[0].prams[a].active = true
                }
              }
              /*number2与number1不能重合*/
              let res2 = []
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val !== newArr[0].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[1].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[2].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[3].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[4].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[5].val
                  && this.lotteryRanges[1].prams[a].val !== newArr[6].val) {
                  res2.push(this.lotteryRanges[1].prams[a])
                }
              }
              let rom = Math.floor(Math.random() * (res2.length))
              for (let a = 0; a < this.lotteryRanges[1].prams.length; a++) {
                if (this.lotteryRanges[1].prams[a].val == res2[rom].val) {
                  this.lotteryRanges[1].prams[a].active = true
                }
              }

            } else {
              this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
              this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
              this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
              this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
              this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
              this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
              this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
              this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            }

            break
          case 9:
            this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random() * (this.lotteryRanges[8].prams.length))].active = true
            break
          default:
            this.lotteryRanges[0].prams[Math.floor(Math.random() * (this.lotteryRanges[0].prams.length))].active = true
            this.lotteryRanges[1].prams[Math.floor(Math.random() * (this.lotteryRanges[1].prams.length))].active = true
            this.lotteryRanges[2].prams[Math.floor(Math.random() * (this.lotteryRanges[2].prams.length))].active = true
            this.lotteryRanges[3].prams[Math.floor(Math.random() * (this.lotteryRanges[3].prams.length))].active = true
            this.lotteryRanges[4].prams[Math.floor(Math.random() * (this.lotteryRanges[4].prams.length))].active = true
            this.lotteryRanges[5].prams[Math.floor(Math.random() * (this.lotteryRanges[5].prams.length))].active = true
            this.lotteryRanges[6].prams[Math.floor(Math.random() * (this.lotteryRanges[6].prams.length))].active = true
            this.lotteryRanges[7].prams[Math.floor(Math.random() * (this.lotteryRanges[7].prams.length))].active = true
            this.lotteryRanges[8].prams[Math.floor(Math.random() * (this.lotteryRanges[8].prams.length))].active = true
            this.lotteryRanges[9].prams[Math.floor(Math.random() * (this.lotteryRanges[9].prams.length))].active = true
            break
        }
        }
      },
      manual() { // 手动投注
        this.$store.commit('BET', null)
        this.delNumber()
//        this.$router.go(-1)
        this.$store.commit('SHOP', true)
        this.$router.replace('/gameplay/'+this.$route.params.code+'/'+this.$route.params.typeid+'/'+this.$route.params.pan)
      },
      instantBets() { // 立即投注
        if(this.bets.length===0) {
          mt_toast('请先投注')
        } else {
          if(this.bet_info_obj.curr_count_down <= window.stop_sale_span) {
            mt_toast('本期已封盘，请等待下期');
            return
          } else {
            this.applyShow=true
          }
        }
      },
      betsOK() {
        mt_loading_open('投注中...')
        setTimeout(function () {
          mt_loading_close()
        },10000)
        let param = {
          issue_number: this.bet_info_obj.curr_issue_number,
//          screen_shot: this.$store.state.user.of_avate,  this.userinfo.avatar
          screen_shot: '1',
          bet_amounts: parseFloat(this.lotteryCash1.toFixed(3)),
          bets: this.bets
        }
        console.log(param)
        //// sessionStorage.getItem('token')  this.user.token
        requestOpt.reqPost('lottery_record', sessionStorage.getItem('token') ,param, res => {
          mt_loading_close()
          if (res.data.status===1) {
            this.bets = []
//            mt_toast('恭喜您，投注成功')
            this.showModule = true
            if (this.showModule) {
//              this.$router.replace('/gameplay/'+this.$route.params.code+'/'+this.$route.params.typeid+'/'+this.$route.params.pan)
            }
            this.refreshCusInfo()
            this.delNumber()
            this.$store.commit('BETS',[])
            this.$store.commit('BET',null)
            this.$store.commit('SHOP',false)
            this.applyShow=false

          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
              mt_toast(res.data.msg);
            } else {
//              this.$router.replace('/login')
//              mt_toast(res.data.msg);
              if (res.data.code === 10001) {
                this.applyShow=false
                let info=''
                if(this.$store.state.user.userinfo.is_trial){
                  info = '余额不足！试玩账号不能充值哦！'
                  mt_confirm(info, res => {
                  })
                } else {
                  info = '余额不足！是否去充值？'
                  mt_confirm(info, res => {
                    if (res==='confirm') {
                      this.$router.push('/recharge-type')
                    }
                  })
                }
              } else {
                mt_toast(res.data.msg);
              }
            }
          }
        }, (err) => {
          mt_loading_close()
          mt_toast(err)
        });
      },
      betsCancel() {
        this.applyShow=false
      }

    },
    watch: {
      bet_info_obj: {
        handler: function (val,old) {
//          console.log(val.curr_count_down, window.stop_sale_span)
//          if (val.curr_count_down==''||val.curr_count_down==0) {
          if (val.curr_count_down <= window.stop_sale_span) {
            if(this.applyShow) {
              this.applyShow=false
              mt_toast('本期已封盘，请等待下期')
            }
          }
        },
        deep: true
      },
      lotteryRanges:{
        handler:function(val,oldval){
          // 检验集合是否存在，防止越权
          if (!val) return
          let obj = this.bets.length>0 ?this.bets.slice(0,1)[0]:this.$store.state.user.bet instanceof Array ? this.$store.state.user.bet[0] : this.$store.state.user.bet;
          if(!obj) return;

          if (this.$route.params.pan==1) { // A 盘
            let arr=[]  // val
            let arrNumText = [] // name

            let tem_obj = {}
            let tem_arr = []

            // 判断有几位
            switch (this.bet_count) {
              case 1:
                if (obj.bet_type2 ==='定位胆'|| obj.bet_type2 ==='1-5球') { // 时时彩
                  if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]
                    arr[3]=[]
                    arr[4]=[]
                    arr[5]=[]
                    arr[6]=[]
                    arr[7]=[]
                    arr[8]=[]
                    arr[9]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                    arrNumText[3]=[]
                    arrNumText[4]=[]
                    arrNumText[5]=[]
                    arrNumText[6]=[]
                    arrNumText[7]=[]
                    arrNumText[8]=[]
                    arrNumText[9]=[]
                  }
                  else if (this.$route.params.code==='SHSSL'
                    ||this.$route.params.code==='FC3D'
                    ||this.$route.params.code==='PL3') {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                  }
                  else {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]
                    arr[3]=[]
                    arr[4]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                    arrNumText[3]=[]
                    arrNumText[4]=[]
                  }

                } else if (obj.bet_type2 ==='前中后') {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                } else if (obj.bet_type2 ==='两面盘') {
                  if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]
                    arr[3]=[]
                    arr[4]=[]
                    arr[5]=[]
                    arr[6]=[]
                    arr[7]=[]
                    arr[8]=[]
                    arr[9]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                    arrNumText[3]=[]
                    arrNumText[4]=[]
                    arrNumText[5]=[]
                    arrNumText[6]=[]
                    arrNumText[7]=[]
                    arrNumText[8]=[]
                    arrNumText[9]=[]
                  } else {
                    arr[0]=[]
                    arr[1]=[]
                    arr[2]=[]
                    arr[3]=[]
                    arr[4]=[]
                    arr[5]=[]

                    arrNumText[0]=[]
                    arrNumText[1]=[]
                    arrNumText[2]=[]
                    arrNumText[3]=[]
                    arrNumText[4]=[]
                    arrNumText[5]=[]
                  }

                } else {
                  arr[0]=[]

                  arrNumText[0]=[]
                }
                break
              case 2:
                // 时时彩
                if (obj.bet_type1=='任选二'&&obj.bet_type2 ==='直选复式') {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                } else if((obj.bet_type1=='任选二'
                  &&(obj.bet_type2 ==='前二组选复式'||obj.bet_type2 ==='后二组选复式'||obj.bet_type2 ==='五选二直选和值'))
                  || (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前三组三复式'||obj.bet_type2 ==='后三组三复式'))
                  || (obj.bet_type1=='二码'&&(obj.bet_type2 ==='前二组选复式'||obj.bet_type2 ==='后二组选复式'))
                  || (obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选二中二')
                  ||(obj.bet_type1=='三星'&&(obj.bet_type2 ==='组三复式'|| obj.bet_type2 ==='组六复式'))
                  ||(obj.bet_type1=='二星'&&(obj.bet_type2 ==='前二组选'|| obj.bet_type2 ==='后二组选'))
                  || (obj.bet_type1=='不定位'&&(obj.bet_type2 ==='二码不定位'|| obj.bet_type2 ==='一码不定位'))
                  || (obj.bet_type1=='二不同号'&&(obj.bet_type2 ==='标准'))
                  || (obj.bet_type1=='合肖'&&(obj.bet_type2 ==='合肖'))
                  || (obj.bet_type1=='连码')
                  || (obj.bet_type1=='连肖连尾')
                  || (obj.bet_type1=='任选四'&&(obj.bet_type2 ==='前四组选6' || obj.bet_type2 ==='后四组选6'))){
                  arr[0]=[]

                  arrNumText[0]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                }

                break
              case 3:
                if(obj.bet_type2==='前三组选三复式'
                  || obj.bet_type2==='后三组选三复式'
                  || obj.bet_type2==='前三组选六'
                  || obj.bet_type2==='后三组选六'
                  || obj.bet_type2 ==='前三组选复式'
                  || obj.bet_type2 ==='中三组选复式'
                  || obj.bet_type2 ==='后三组选复式'
                  || (obj.bet_type1=='三星'&&(obj.bet_type2 ==='组六复式'))
                  || (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='五选三直选和值' ))
                  || (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前三组六复式'||obj.bet_type2 ==='后三组六复式'))
                  || (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前四直选和值'||obj.bet_type2 ==='后四直选和值'))
                  || (obj.bet_type1=='三星'&&(obj.bet_type2 ==='后三组选三'|| obj.bet_type2 ==='前三组选三' ))
                  || (obj.bet_type1=='三星'&&(obj.bet_type2 ==='后三组选六'|| obj.bet_type2 ==='前三组选六' ))
                  || (obj.bet_type1=='三不同号'&&(obj.bet_type2 ==='标准' ))
                  || (obj.bet_type1=='特码'&&(obj.bet_type2 ==='特码包三' ))
                  || (obj.bet_type1=='连码')
                  || (obj.bet_type1=='连肖连尾')
                  ||(obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选三中三')) { // 组三
                  arr[0]=[]

                  arrNumText[0]=[]
                } else if (obj.bet_type1=='任选三'&&obj.bet_type2 ==='直选复式') {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                } else if ((obj.bet_type1=='三码'&&(obj.bet_type2 ==='前三组选胆拖'
                  ||obj.bet_type2 ==='中三组选胆拖'
                  ||obj.bet_type2 ==='后三组选胆拖'))
                  ||(obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选三中三')
                  ||(obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和')) { // 胆拖
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                }
                else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                }

                break
              case 4:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选四中四')
                  || (obj.bet_type1=='连码')
                  || (obj.bet_type1=='连肖连尾')
                  || (obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选24'||obj.bet_type2==='后四组选24'))) {
                  arr[0]=[]
//
                  arrNumText[0]=[]
                } else if (obj.bet_type1=='任选四'&&obj.bet_type2 ==='直选复式') {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                } else if ((obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选四中四')
                  ||(obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选12'||obj.bet_type2==='后四组选12'))
                  ||(obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选4'||obj.bet_type2==='后四组选4'))) {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                }

                break
              case 5:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选五中五')
                  || (obj.bet_type1=='连肖连尾')) {
                  arr[0]=[]

                  arrNumText[0]=[]
                } else if ((obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选五中五')) {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                }

                break
              case 6:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选六中五')
                  || obj.bet_type2 ==='自选不中') {
                  arr[0]=[]

                  arrNumText[0]=[]
                } else if ((obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选六中五')) {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]
                  arr[5]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                  arrNumText[5]=[]
                }

                break
              case 7:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选七中五')) {
                  arr[0]=[]

                  arrNumText[0]=[]
                } else if ((obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选七中五')) {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                } else if (obj.bet_type2 ==='普通投注') {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                }
                else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]
                  arr[5]=[]
                  arr[6]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                  arrNumText[5]=[]
                  arrNumText[6]=[]
                }

                break
              case 8:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选八中五')) {
                  arr[0]=[]

                  arrNumText[0]=[]
                } else if ((obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选八中五')) {
                  arr[0]=[]
                  arr[1]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                } else {
                  arr[0]=[]
                  arr[1]=[]
                  arr[2]=[]
                  arr[3]=[]
                  arr[4]=[]
                  arr[5]=[]
                  arr[6]=[]
                  arr[7]=[]

                  arrNumText[0]=[]
                  arrNumText[1]=[]
                  arrNumText[2]=[]
                  arrNumText[3]=[]
                  arrNumText[4]=[]
                  arrNumText[5]=[]
                  arrNumText[6]=[]
                  arrNumText[7]=[]

                }

                break
              case 9:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                arr[7]=[]
                arr[8]=[]

                arrNumText[0]=[]
                arrNumText[1]=[]
                arrNumText[2]=[]
                arrNumText[3]=[]
                arrNumText[4]=[]
                arrNumText[5]=[]
                arrNumText[6]=[]
                arrNumText[7]=[]
                arrNumText[8]=[]

                break
              case 10:
                arr[0]=[]
                arr[1]=[]
                arr[2]=[]
                arr[3]=[]
                arr[4]=[]
                arr[5]=[]
                arr[6]=[]
                arr[7]=[]
                arr[8]=[]
                arr[9]=[]

                arrNumText[0]=[]
                arrNumText[1]=[]
                arrNumText[2]=[]
                arrNumText[3]=[]
                arrNumText[4]=[]
                arrNumText[5]=[]
                arrNumText[6]=[]
                arrNumText[7]=[]
                arrNumText[8]=[]
                arrNumText[9]=[]
                break
            }
            this.lotteryPosText=[];// 类型文本
            this.lotteryPosCode=[];// 类型代码
            this.Bretate = []
            for (let m=0,len=val.length; m<len;m++) {
              if (val[m].prams) {
                for (let n=0,l=val[m].prams.length;n<l;n++) {
                  if (val[m].prams[n].active) { // 去重
                    if (!array_contain(this.lotteryPosText,val[m].type)) {
                      this.lotteryPosText.push(val[m].type)
                    }
                    if (obj.bet_type2 === '中二' || obj.bet_type2 === '中特') {
                      this.Bretate = parseFloat((this.rates[1]*this.userinfo.return_ratio_rate).toFixed(3))
                    } else  if (obj.bet_type2 === '三全中' || obj.bet_type2 === '二全中' || obj.bet_type2 === '特串' || obj.bet_type2 === '四全中' || obj.bet_type1=='合肖' || obj.bet_type1=='自选不中') {
                      this.Bretate = parseFloat((this.rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                    }
                    else {
                      if(this.rates.length>0) {
                        this.Bretate = parseFloat((this.rates[n]*this.userinfo.return_ratio_rate).toFixed(3))
                      } else {
                        this.Bretate = obj.bet_rate
                      }
                    }

                    if (val[m].code) {
//                        this.lotteryPosCode=[]
                      if (!array_contain(this.lotteryPosCode,val[m].code)) {
                        this.lotteryPosCode.push(val[m].code)
                      }
                    }
                    switch (m) {
                      case 0:
                        arr[0].push(val[m].prams[n].val);

                        arrNumText[0].push(val[m].prams[n].name);
                        break
                      case 1:
                        arr[1].push(val[m].prams[n].val);

                        arrNumText[1].push(val[m].prams[n].name);
                        break
                      case 2:
                        arr[2].push(val[m].prams[n].val);

                        arrNumText[2].push(val[m].prams[n].name);
                        break
                      case 3:
                        arr[3].push(val[m].prams[n].val);

                        arrNumText[3].push(val[m].prams[n].name);
                        break
                      case 4:
                        arr[4].push(val[m].prams[n].val);

                        arrNumText[4].push(val[m].prams[n].name);
                        break
                      case 5:
                        arr[5].push(val[m].prams[n].val);

                        arrNumText[5].push(val[m].prams[n].name);
                        break
                      case 6:
                        arr[6].push(val[m].prams[n].val);

                        arrNumText[6].push(val[m].prams[n].name);
                        break
                      case 7:
                        arr[7].push(val[m].prams[n].val);

                        arrNumText[7].push(val[m].prams[n].name);
                        break
                      case 8:
                        arr[8].push(val[m].prams[n].val);

                        arrNumText[8].push(val[m].prams[n].name);
                        break
                      case 9:
                        arr[9].push(val[m].prams[n].val);

                        arrNumText[9].push(val[m].prams[n].name);
                        break
                      default:
                        arr[10].push(val[m].prams[n].val);

                        arrNumText[10].push(val[m].prams[n].name);
                        break
                    }
                  }
                }
              }
            }
            switch (this.bet_count) {
              case 1:
                // 时时彩
                if (obj.bet_type2 ==='定位胆'|| obj.bet_type2 ==='1-5球' ) {
                  if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                    this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)+(arr[6].length)+(arr[7].length)+(arr[8].length)+(arr[9].length)
                  }
                  else if (this.$route.params.code==='SHSSL'
                    ||this.$route.params.code==='FC3D'
                    ||this.$route.params.code==='PL3') {
                    this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)
                  }
                  else {
                    this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)
                  }

                } else if (obj.bet_type2 ==='前中后') {
                  this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)
                } else if (obj.bet_type2 ==='两面盘') {
                  if(this.$route.params.code==='BJPK10'||this.$route.params.code=='SFPK10'||this.$route.params.code=='JSPK10') {
                    this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)+(arr[6].length)+(arr[7].length)+(arr[8].length)+(arr[9].length)
                  }else {
                    this.lotteryNum = (arr[0].length)+(arr[1].length)+(arr[2].length)+(arr[3].length)+(arr[4].length)+(arr[5].length)
                  }
                } else if (obj.bet_type2 ==='前三直选和值' || obj.bet_type2 ==='后三直选和值'
                  ||(obj.bet_type1=='三星'&& obj.bet_type2 ==='直选和值')) { // 3 和值
                  let sum = 0;
                  for (let i=0;i<arr[0].length;i++) {
                    for (let m=0;m<10;m++) {
                      for (let n=0;n<10;n++) {
                        let k = arr[0][i]-m-n
                        if (k>=0&&k<=9) {
                          sum++
                        }
                      }
                    }
                  }

                  this.lotteryNum =sum
                }else if (obj.bet_type1 ==='三星' && obj.bet_type2=='组三和值') { // 3 和值 与顺序无关
                  let sum = 0
                  for (let i=0;i<arr[0].length;i++) {
                    if (arr[0][i]==1 || arr[0][i]==3 || arr[0][i]==24 || arr[0][i]==26) {
                      sum +=  1
                    } else if (arr[0][i]==2 || arr[0][i]==25) {
                      sum +=  2
                    } else if (arr[0][i]==4 || arr[0][i]==5 || arr[0][i]==6 || arr[0][i]==21 || arr[0][i]==22 || arr[0][i]==23) {
                      sum +=  3
                    } else if (arr[0][i]==7 || arr[0][i]==9 || arr[0][i]==12 || arr[0][i]==15 || arr[0][i]==18 || arr[0][i]==20) {
                      sum +=  4
                    } else if (arr[0][i]==8 || arr[0][i]==10 || arr[0][i]==11 || arr[0][i]==13 || arr[0][i]==14 || arr[0][i]==16 || arr[0][i]==17 || arr[0][i]==19) {
                      sum +=  5
                    }
                  }
                  this.lotteryNum =sum
                }else if (obj.bet_type1 ==='三星' && obj.bet_type2=='组六和值') { // 3 和值 与顺序无关
                  let sum = 0
                  for (let i=0;i<arr[0].length;i++) {
                    if (arr[0][i]==3 || arr[0][i]==4 || arr[0][i]==23 || arr[0][i]==24) {
                      sum +=  1
                    } else if (arr[0][i]==5 || arr[0][i]==22) {
                      sum +=  2
                    } else if (arr[0][i]==6 || arr[0][i]==21) {
                      sum +=  3
                    } else if (arr[0][i]==7 || arr[0][i]==20) {
                      sum +=  4
                    } else if (arr[0][i]==8  || arr[0][i]==19) {
                      sum +=  5
                    } else if (arr[0][i]==9 || arr[0][i]==18) {
                      sum +=  7
                    } else if (arr[0][i]==10 || arr[0][i]==17) {
                      sum +=  8
                    } else if (arr[0][i]==11 || arr[0][i]==16) {
                      sum +=  9
                    } else if (arr[0][i]==12 || arr[0][i]==13 || arr[0][i]==14 || arr[0][i]==15) {
                      sum +=  10
                    }
                  }
                  this.lotteryNum =sum
                }
                else if (obj.bet_type1=='任选二'&&
                  (obj.bet_type2 ==='前二直选和值'||obj.bet_type2 ==='后二直选和值')){
                  this.lotteryNum = 0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum += arr[0][i]+1
                    } else {
                      this.lotteryNum += 20-arr[0][i]-1
                    }
                  }
                } else if (obj.bet_type1=='任选二'&&
                  (obj.bet_type2 ==='前二组选和值'||obj.bet_type2 ==='后二组选和值')){
                  this.lotteryNum = 0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum += Math.floor((arr[0][i]+1)/2)
                    } else {
                      this.lotteryNum += Math.floor((20-arr[0][i]-1)/2)
                    }
                  }
                } else if (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前三组选和值'||obj.bet_type2 ==='后三组选和值')) {
                  let sum = 0
                  for (let i=0;i<arr[0].length;i++){
                    if(arr[0][i]===1||arr[0][i]===26) {
                      sum += 1
                    } else if (arr[0][i]===2||arr[0][i]===3||arr[0][i]===24||arr[0][i]===25){
                      sum += 2
                    } else if (arr[0][i]===4||arr[0][i]===23){
                      sum += 4
                    } else if (arr[0][i]===5||arr[0][i]===22){
                      sum += 5
                    } else if (arr[0][i]===6||arr[0][i]===21){
                      sum += 6
                    } else if (arr[0][i]===7||arr[0][i]===20){
                      sum += 8
                    } else if (arr[0][i]===8||arr[0][i]===19){
                      sum += 10
                    } else if (arr[0][i]===9||arr[0][i]===18){
                      sum += 11
                    } else if (arr[0][i]===10||arr[0][i]===17){
                      sum += 13
                    } else if (arr[0][i]===11||arr[0][i]===12||arr[0][i]===15||arr[0][i]===16){
                      sum += 14
                    } else if (arr[0][i]===13||arr[0][i]===14){
                      sum += 15
                    }
                  }
                  this.lotteryNum = sum
                } else if(obj.bet_type1 === '和值'&&obj.bet_type2 ==='和值') {
                  let sum = 0
                  let tem = [0, 0, 0, 1, 3, 6, 10, 15, 21, 25, 27 ]

                  for (let i=0;i<arr[0].length;i++) {
                    if (arr[0][i] <= 10) {
                      sum += tem[arr[0][i]]
                    } else if (arr[0][i] > 10) {
                      sum += tem[20 - arr[0][i] + 1]
                    }
                  }
                  this.lotteryNum = sum
                }
                else {
                  this.lotteryNum = (arr[0].length)
                }
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 2:
                //  时时彩
                if (obj.bet_type1=='任选二'&&obj.bet_type2 ==='直选复式') {
                  this.lotteryNum = (arr[0].length)*(arr[1].length+arr[2].length+arr[3].length+arr[4].length)
                    + (arr[1].length)*(arr[2].length+arr[3].length+arr[4].length)
                    + (arr[2].length)*(length+arr[3].length+arr[4].length)
                    + (arr[3].length)*(arr[4].length)
                } else if((obj.bet_type1=='任选二'&&(obj.bet_type2 ==='前二组选复式'||obj.bet_type2 ==='后二组选复式') )
                  || (obj.bet_type1=='二星'&&(obj.bet_type2 ==='前二组选'||obj.bet_type2 ==='后二组选'))
                  || (obj.bet_type1=='不定位'&&(obj.bet_type2 ==='二码不定位'|| obj.bet_type2 ==='一码不定位'))
                  || (obj.bet_type1=='二不同号'&&(obj.bet_type2 ==='标准'))
                  || (obj.bet_type1=='连码'&&(obj.bet_type2 ==='二全中'||obj.bet_type2 ==='中特'||obj.bet_type2 ==='特串'))
                  || (obj.bet_type1=='连肖连尾'&&(obj.bet_type2 ==='二连肖'||obj.bet_type2 ==='二连尾'))){ // 1 选 2
                  this.lotteryNum = (arr[0].length)*(arr[0].length-1)/2
                }  else if((obj.bet_type1=='三星'&&obj.bet_type2 ==='组三复式') ){ // 组三
                  this.lotteryNum = (arr[0].length)*(arr[0].length-1)/(1*2)*2
                }
                else if(obj.bet_type1=='任选二'&&(obj.bet_type2 ==='五选二直选和值')){
                  this.lotteryNum=0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    if (arr[0][i]<10) {
                      this.lotteryNum += (~~arr[0][i]+1)*10
                    } else {
                      this.lotteryNum += (20-arr[0][i]-1)*10
                    }
                  }
                } else if((obj.bet_type1=='二码'&&(obj.bet_type2 ==='前二组选复式'|| obj.bet_type2 ==='后二组选复式'))
                  || (obj.bet_type1=='任选四'&&(obj.bet_type2 ==='前四组选6' || obj.bet_type2 ==='后四组选6'))) {
//                      this.lotteryNum = (arr[0].length-1)>=0?(arr[0].length-1):0
                  this.lotteryNum = (arr[0].length*(arr[0].length-1))/2
                } else if( obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前三组三复式'||obj.bet_type2 ==='后三组三复式') ) { // 组三
                  this.lotteryNum = (arr[0].length*(arr[0].length-1))/2*2
                }
                else if(obj.bet_type1=='二码'&&(obj.bet_type2 ==='前二组选胆拖' || obj.bet_type2 ==='后二组选胆拖') ) {
                  this.lotteryNum = arr[0].length*arr[1].length
                }
                else if (obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选二中二') {
                  this.lotteryNum = (arr[0].length*(arr[0].length-1))/2
                } else if(obj.bet_type1=='合肖'&&(obj.bet_type2 ==='合肖')) {
                  this.lotteryNum = 1
                  if(arr[0].length<2) {
                    this.lhc_rate = '----'
                    this.lotteryNum = 0
                  } else if (arr[0].length===2) {
                    this.lhc_rate = 5.8
                  } else if (arr[0].length===3) {
                    this.lhc_rate = 3.8
                  } else if (arr[0].length===4) {
                    this.lhc_rate = 2.8
                  } else if (arr[0].length===5) {
                    this.lhc_rate = 2.3
                  } else if (arr[0].length===6) {
                    this.lhc_rate = 1.95
                  } else if (arr[0].length===7) {
                    this.lhc_rate = 1.65
                  } else if (arr[0].length===8) {
                    this.lhc_rate = 1.45
                  } else if (arr[0].length===9) {
                    this.lhc_rate = 1.25
                  } else if (arr[0].length===10) {
                    this.lhc_rate = 1.15
                  } else if (arr[0].length===11) {
                    this.lhc_rate = 1.05
                  }
                } else if((obj.bet_type1=='二码'&&(obj.bet_type2 ==='前二直选复式'|| obj.bet_type2 ==='后二直选复式'))
                  ||(obj.bet_type1=='前二'&&(obj.bet_type2 ==='直选复式'))) {
                  let sum=0
                  for(let m=0;m<arr[0].length;m++){
                    for(let n=0;n<arr[1].length;n++) {
                      if (arr[0][m]===arr[1][n]){
                        sum--
                      }
                    }
                  }
                  this.lotteryNum = (arr[0].length)*(arr[1].length)+sum
                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)
                }
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 3:
                if(obj.bet_type2==='前三组选六'
                  || obj.bet_type2==='后三组选六'
                  || (obj.bet_type1=='三星'&&obj.bet_type2 ==='组六复式')
                  || (obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前三组六复式'||obj.bet_type2 ==='后三组六复式'))
                  || (obj.bet_type1=='三星'&&(obj.bet_type2 ==='后三组选六'|| obj.bet_type2 ==='前三组选六' ))
                  || (obj.bet_type1=='连码'&&(obj.bet_type2 ==='中二'||obj.bet_type2 ==='三全中'))
                  || (obj.bet_type1=='连肖连尾'&&(obj.bet_type2 ==='三连肖'||obj.bet_type2 ==='三连尾'))) { // 组六
                  this.lotteryNum = ((arr[0].length)*(arr[0].length-1)*(arr[0].length-2))/(1*2*3)
                } else if (obj.bet_type2==='前三组选三复式'
                  || obj.bet_type2==='后三组选三复式'
                  || (obj.bet_type1=='三星'&&(obj.bet_type2 ==='后三组选三'|| obj.bet_type2 ==='前三组选三' ))) {
                  this.lotteryNum = ((arr[0].length)*(arr[0].length-1))/(1*2)*2
                } else if (obj.bet_type1=='三不同号'&&(obj.bet_type2 ==='标准' )) {// 快三
                  this.lotteryNum = ((arr[0].length)*(arr[0].length-1)*(arr[0].length-2))/(1*2*3)
                }
                else if (obj.bet_type1=='任选三'&&obj.bet_type2 ==='直选复式') {
                  if (this.$route.params.code==='CQSSC'
                    ||this.$route.params.code==='TJSSC'
                    ||this.$route.params.code==='SFSSC'
                    ||this.$route.params.code==='XJSSC'
                    ||this.$route.params.code==='PL5') {
                    this.lotteryNum =(arr[0].length)*(arr[1].length)*((arr[2].length)+(arr[3].length)+(arr[4].length)) +
                      (arr[0].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                      (arr[0].length)*(arr[3].length)*((arr[4].length)) +
                      (arr[1].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                      (arr[1].length)*(arr[3].length)*((arr[4].length)) +
                      (arr[2].length)*(arr[3].length)*((arr[4].length))
                  }else {
                    this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)
                  }

                }  else if ((obj.bet_type1=='任选三'&&(obj.bet_type2 ==='前四直选和值'||obj.bet_type2 ==='后四直选和值'))) {
                  let sum = 0;
                  for (let i=0;i<arr[0].length;i++) {
                    for (let m=0;m<10;m++) {
                      for (let n=0;n<10;n++) {
                        let k = arr[0][i]-m-n
                        if (k>=0&&k<=9) {
                          sum++
                        }
                      }
                    }
                  }
                  this.lotteryNum =sum*4
                }  else if (obj.bet_type1=='特码'&&(obj.bet_type2 ==='特码包三' )) {
                  this.lotteryNum =1
                }
                else if ((obj.bet_type1=='三码'
                  &&(obj.bet_type2 ==='前三组选复式'|| obj.bet_type2 ==='中三组选复式'
                  || obj.bet_type2 ==='后三组选复式'))|| (obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选三中三')){ // 组选
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)/1/2/3
                } else if ((obj.bet_type1=='三码'&&(obj.bet_type2 ==='前三组选胆拖'
                  ||obj.bet_type2 ==='中三组选胆拖'
                  ||obj.bet_type2 ==='后三组选胆拖'))
                  ||(obj.bet_type1=='三不同号'&&obj.bet_type2 ==='胆拖')
                  ||(obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选三中三')) { // 胆拖
                  if(arr[0].length===1) {
                    this.lotteryNum = (arr[1].length*(arr[1].length-1))/2
                  } else if (arr[0].length===2) {
                    this.lotteryNum = arr[1].length
                  } else {
                    if(arr[0].length===0) {
                      this.lotteryNum = 0
                    } else {
                      mt_toast('胆码最多选两个号码')
                    }
                  }
                } else if (obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选三中三'){
                  this.lotteryNum = arr[1].length*(arr[1].length-1)/2
                }
                else if (obj.bet_type1=='三码'
                  &&(obj.bet_type2 ==='前三直选复式' ||obj.bet_type2 ==='中三直选复式' ||obj.bet_type2 ==='后三直选复式')){
//                    this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)
                  let sum=0
                  for (let i=0,len=arr[0].length;i<len;i++) {
                    for (let m=0,len=arr[1].length;m<len;m++) {
                      for (let n=0,len=arr[2].length;n<len;n++) {
                        if(arr[0][i]!=arr[1][m]&&arr[0][i]!=arr[2][n]&&arr[1][m]!=arr[2][n]) {
                          sum++
                        }
                      }
                    }
                  }
                  this.lotteryNum = sum
                } else if (obj.bet_type1=='任选三'&&obj.bet_type2 ==='五选三直选和值') {
                  let sum=0
                  let sum2=0
                  for (let n=0,len=arr[0].length;n<len;n++) {
                    if (arr[0][n]<10) {
                      for (let m=0,len=arr[0][n];m<=len+1;m++) {
                        sum = sum+m
                      }
                    } else {
                      if (arr[0][n]==10||arr[0][n]==17) {
                        sum2 += 630
                      } else if (arr[0][n]==11||arr[0][n]==16){
                        sum2 += 690
                      } else if (arr[0][n]==12||arr[0][n]==15){
                        sum2 += 730
                      } else if (arr[0][n]==13||arr[0][n]==14){
                        sum2 += 750
                      } else if (arr[0][n]==18){
                        sum2 += 550
                      } else if (arr[0][n]==19){
                        sum2 += 450
                      } else if (arr[0][n]==20){
                        sum2 += 360
                      } else if (arr[0][n]==21){
                        sum2 += 280
                      } else if (arr[0][n]==22){
                        sum2 += 210
                      } else if (arr[0][n]==23){
                        sum2 += 150
                      } else if (arr[0][n]==24){
                        sum2 += 100
                      } else if (arr[0][n]==25){
                        sum2 += 60
                      } else if (arr[0][n]==26){
                        sum2 += 30
                      } else if (arr[0][n]==27){
                        sum2 += 10
                      }
                    }
                  }
                  this.lotteryNum =  5*4/(2*1)*(sum)+sum2
                }
                else if (obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和') {
                  this.lotteryNum = arr[1].length
                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 4:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选四中四')
                  || (obj.bet_type1=='连码'&&(obj.bet_type2 ==='四全中'))
                  || (obj.bet_type1=='连肖连尾'&&(obj.bet_type2 ==='四连肖'||obj.bet_type2 ==='四连尾'))
                  || (obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选24'||obj.bet_type2==='后四组选24'))) {
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)/1/2/3/4
                } else if(obj.bet_type1=='任选四'&&obj.bet_type2 ==='直选复式'){
                  this.lotteryNum =(arr[0].length)*(arr[1].length)*(arr[2].length)*((arr[3].length)+(arr[4].length)) +
                    (arr[0].length)*(arr[1].length)*(arr[3].length)*(arr[4].length) +
                    (arr[0].length)*(arr[2].length)*(arr[3].length)*(arr[4].length) +
                    (arr[1].length)*(arr[2].length)*((arr[3].length)*(arr[4].length))
                } else if(obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选四中四'){
                  if ((arr[0].length===1)){
                    this.lotteryNum = arr[1].length<3?0:arr[1].length===3?1:arr[1].length
                  } else if(arr[0].length===3){
                    this.lotteryNum = arr[1].length
                  } else if(arr[0].length===2){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                  } else {
                    this.lotteryNum = 0
                  }

                } else if (obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选12'||obj.bet_type2==='后四组选12')){

                  let sum=0
                  for(let m=0;m<arr[0].length;m++){
                    if (array_contain(arr[1],arr[0][m])){
                      sum += (arr[1].length-1)*(arr[1].length-2)/2
                    }else {
                      sum += (arr[1].length-1)*(arr[1].length)/2
                    }
                  }
                  this.lotteryNum = sum
                }
                else if (obj.bet_type1==='任选四'&&(obj.bet_type2==='前四组选4'||obj.bet_type2==='后四组选4')){
                  let sum=0
                  for(let m=0;m<arr[0].length;m++){
                    if (array_contain(arr[1],arr[0][m])){
                      sum++
                    }
                  }
                  this.lotteryNum = (arr[0].length)*(arr[1].length)-sum
                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 5:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选五中五')
                  || (obj.bet_type1=='连肖连尾'&&(obj.bet_type2 ==='五连肖'||obj.bet_type2 ==='五连尾'))) {
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)/1/2/3/4/5
                } else if (obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选五中五'){
                  if ((arr[0].length===1)){
                    this.lotteryNum = arr[1].length<4?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                  } else if(arr[0].length===4){
                    this.lotteryNum = arr[1].length
                  } else if(arr[0].length===3){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                  } else if(arr[0].length===2){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                  } else {
                    this.lotteryNum = 0
                  }
                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 6:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选六中五')) {
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)/1/2/3/4/5/6
                } else if (obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选六中五'){
                  if ((arr[0].length===1)){
                    this.lotteryNum = arr[1].length<5?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                  } else if(arr[0].length===5){
                    this.lotteryNum = arr[1].length
                  } else if(arr[0].length===2){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                  } else if(arr[0].length===3){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                  } else if(arr[0].length===4){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)/2
                  } else {
                    this.lotteryNum = 0
                  }
                } else if(obj.bet_type2 ==='自选不中') {
                  this.lotteryNum = 1
                  if(arr[0].length<6) {
                    this.lhc_rate = '----'
                    this.lotteryNum = 0
                  } else if (arr[0].length===6) {
                    this.lhc_rate = this.rates[0]
                  } else if (arr[0].length===7) {
                    this.lhc_rate = this.rates[1]
                  } else if (arr[0].length===8) {
                    this.lhc_rate = this.rates[2]
                  } else if (arr[0].length===9) {
                    this.lhc_rate = this.rates[3]
                  } else if (arr[0].length===10) {
                    this.lhc_rate = this.rates[4]
                  } else if (arr[0].length===11) {
                    this.lhc_rate = this.rates[5]
                  }
                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 7:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选七中五')) {
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)*(arr[0].length-6)/1/2/3/4/5/6/7
                } else if (obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选七中五'){
                  if ((arr[0].length===1)){
                    this.lotteryNum = arr[1].length<6?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)/(6*5*4*3*2*1)
                  } else if(arr[0].length===6){
                    this.lotteryNum = arr[1].length
                  } else if(arr[0].length===2){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                  } else if(arr[0].length===3){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                  } else if(arr[0].length===4){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                  } else if(arr[0].length===5){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)/(2*1)
                  } else {
                    this.lotteryNum = 0
                  }
                } else if (obj.bet_type2 ==='普通投注') {
                  if(this.$route.params.code == 'SSQ') {
                    this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)/(1*2*3*4*5*6)*(arr[1].length)
                  } else if(this.$route.params.code == 'DLT') {
                    this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)/(1*2*3*4*5)*(arr[1].length)*(arr[1].length-1)/(1*2)
                  }

                }
                else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 8:
                if ((obj.bet_type1=='任选复式'&&obj.bet_type2 ==='任选八中五')) {
                  this.lotteryNum = arr[0].length*(arr[0].length-1)*(arr[0].length-2)*(arr[0].length-3)*(arr[0].length-4)*(arr[0].length-5)*(arr[0].length-6)*(arr[0].length-7)/1/2/3/4/5/6/7/8
                } else if (obj.bet_type1=='任选胆拖'&&obj.bet_type2 ==='任选八中五'){
                  if ((arr[0].length===1)){
                    this.lotteryNum = arr[1].length<7?0:(arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)*(arr[1].length-6)/(7*6*5*4*3*2*1)
                  } else if(arr[0].length===7){
                    this.lotteryNum = arr[1].length
                  } else if(arr[0].length===2){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)*(arr[1].length-5)/(6*5*4*3*2*1)
                  } else if(arr[0].length===3){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)*(arr[1].length-4)/(5*4*3*2*1)
                  } else if(arr[0].length===4){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)*(arr[1].length-3)/(4*3*2*1)
                  } else if(arr[0].length===5){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)*(arr[1].length-2)/(3*2*1)
                  } else if(arr[0].length===6){
                    this.lotteryNum = (arr[1].length)*(arr[1].length-1)/(2*1)
                  } else {
                    this.lotteryNum = 0
                  }
                } else {
                  this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)
                }

                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              case 9:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
              default:
                this.lotteryNum = (arr[0].length)*(arr[1].length)*(arr[2].length)*(arr[3].length)*(arr[4].length)*(arr[5].length)*(arr[6].length)*(arr[7].length)*(arr[8].length)*(arr[9].length)
                this.lotteryCash = (this.lotteryNum) * (this.unitPirace)
                break
            }

            /*
             * 清空空数组
             * */
            if (arr.length>0) {
              this.activeArr=[]
//              console.log(this.activeArr.length)
              for (let m=0;m<arr.length;m++) {
                if (arr[m].length!==0) {
//                  this.activeArr.splice(m,1)
                  if(this.lotteryRanges.length==1) {
                    for (let n=0;n<arr[m].length;n++){
                      this.activeArr.push(arr[m][n])
                    }
                  } else {
                    this.activeArr.push(arr[m])
                  }
                }
              }
            }

            this.bet_numbers1Text = arrNumText;

            if(this.activeArr.length>0) {
            if (obj.bet_type1 === '连肖连尾') {
                if(this.bet_numbers1Text[0].indexOf('鸡') > 0  && /连肖/g.test(obj.bet_type2)) {
                  this.Bretate = parseFloat((this.rates[9]*this.userinfo.return_ratio_rate).toFixed(3))
                } else {
                  this.Bretate = parseFloat((this.rates[0]*this.userinfo.return_ratio_rate).toFixed(3))
                }
              }
              this.bets.unshift({
                bet_amount: (this.cashFlag === '元'? obj.unit_price : this.cashFlag === '角'? obj.unit_price* 0.1 : obj.unit_price * 0.01)*(obj.bet_count*(obj.future_issues+1))*this.lotteryNum,
                bet_count: obj.bet_count,
               /* bet_amount: 2,
                bet_count: 1,*/
                bet_numbers1: /胆拖/g.test(obj.bet_type2)||/胆拖/g.test(obj.bet_type1)||(obj.bet_type1=='任选四'&&(obj.bet_type2=='前四组选12'||obj.bet_type2=='前四组选4'))||(obj.bet_type1=='普通投注'&&(obj.bet_type2=='普通投注'))||(obj.bet_type1=='二同号'&&(obj.bet_type2=='单选'))?this.activeArr[0]:(obj.bet_type1=='前一'&&(obj.bet_type2=='直选复式'))?[this.activeArr]:this.activeArr,
                bet_numbers1Text: this.bet_numbers1Text,
                bet_numbers2: /胆拖/g.test(obj.bet_type2)||/胆拖/g.test(obj.bet_type1)||(obj.bet_type1=='任选四'&&(obj.bet_type2=='前四组选12'||obj.bet_type2=='前四组选4'))||(obj.bet_type1=='普通投注'&&(obj.bet_type2=='普通投注'))||(obj.bet_type1=='二同号'&&(obj.bet_type2=='单选'))?this.activeArr[1]:this.lotteryPosCode,
//                bet_rate: this.$route.params.code=='XGLHC'&&obj.bet_type1!='合肖'&&obj.bet_type1!='自选不中'?this.Bretate:(obj.bet_type1=='合肖')?'5.8':(obj.bet_type1=='自选不中')?'2.5':obj.bet_rate,
                bet_rate: this.Bretate,
                bet_type1: obj.bet_type1,
                bet_type2: obj.bet_type2,
                future_issues: obj.future_issues,
//                future_issues: 0,
                lot_type_id: obj.lot_type_id,
                lotteryNum: this.lotteryNum,
                lotteryPosText: obj.lotteryPosText,
                play_type_id: obj.play_type_id,
                retrun_li: obj.retrun_li,
//                retrun_li: 0.00,
                unit_price: this.cashFlag === '元'? obj.unit_price : this.cashFlag === '角'? obj.unit_price* 0.1 : obj.unit_price * 0.01,
              })
            }

            console.log(this.activeArr)
            console.log(this.bet_numbers1Text)
            console.log(this.bets)

          } else if (this.$route.params.pan==2) { // B盘
//            let obj = this.bets.length>0 ?this.bets[0]:this.$store.state.user.bet;
//            if(!obj) return;
            this.specialDial = []
            this.specialDialTxt = []; // update 20180115
            let sum=0 // 总投注数
            let tem_obj = {}
            let tem_arr = []
            let num2 = []
            let arrVal = [];// 选号
            let arrName = [];// 选号对应的文本
            this.lotteryPosText=[];// 类型文本
            for (let m=0,len=val.length; m<len;m++) { // 二维数组最外层 m
              if (val[m].prams) {
                for (let n=0,l=val[m].prams.length;n<l;n++) {
                  if (val[m].prams[n].active) {
//                    console.log(n)
                    /*this.Bretate = obj.bet_type2=='两面盘'? (this.rates[n+10]*this.$store.state.user.userinfo.return_ratio_rate).toFixed(3)
                      :obj.bet_type2=='1-5球'?(this.rates[m]*this.$store.state.user.userinfo.return_ratio_rate).toFixed(3)
                        :(this.rates[n]*this.$store.state.user.userinfo.return_ratio_rate).toFixed(3)*/
//                    this.Bretate = this.rates[n]
                    this.Bretate = obj.bet_type2=='1-5球'? parseFloat((this.rates[m]*this.userinfo.return_ratio_rate).toFixed(3)) : parseFloat((this.rates[n] * this.userinfo.return_ratio_rate).toFixed(3))
                    this.Bbets = [];
                    this.lotteryPosText =[val[m].type]
                    if(obj.bet_type2=='前中后') {
                      arrVal = [val[m].prams[n].val];
                    } else {
                      arrVal = val[m].prams[n].name=='豹子'?[]:[val[m].prams[n].val];
                    }
                    arrName= [val[m].prams[n].name];
//                    let num2 = [] // bet_numbers2
                    if (val[m].code!== undefined&&val[m].code!== null&&val[m].code!== '') {
                      if(obj.bet_type2=='前中后') {
                        num2 = [val[m].code];
                      } else {
                        num2 = val[m].prams[n].name=='豹子'?[3]:[val[m].code]
                      }

                    }
                    if(val[m].prams[n].code) {
                      num2 = [val[m].prams[n].code]
                    }
                    sum++
                    if(obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和') {  // update 20180115
                      sum = 1
                    }
                    if(obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和') {  // update 20180115
                      this.specialDialTxt.push(val[0].prams[n].name)
                      this.specialDial.push(val[0].prams[n].val)
                    }
                  }
                }
              }
            }
            /*
             *  计算总投注数
             * */
            this.lotteryNum = sum

//            if(this.Bbets.length>0) {
            this.bets.unshift({
              bet_amount: (this.cashFlag === '元'? obj.unit_price : this.cashFlag === '角'? obj.unit_price* 0.1 : obj.unit_price * 0.01)*(obj.bet_count*(obj.future_issues+1))*this.lotteryNum,
              bet_count: obj.bet_count,
              bet_numbers1: arrVal,
              bet_numbers1Text: this.bet_numbers1Text,
              bet_numbers2: (obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和') ? this.specialDial.slice(0,2) : num2,
              bet_rate: this.Bretate,
              bet_type1: obj.bet_type1,
              bet_type2: obj.bet_type2,
              future_issues: obj.future_issues,
              lot_type_id: obj.lot_type_id,
              lotteryNum: 1,
              lotteryPosText: (obj.bet_type1 == '两面盘' && obj.bet_type2 === '龙虎和') ? [this.specialDialTxt.slice(0,2).join('')] : this.lotteryPosText,
              bet_name: arrName,
              play_type_id: obj.play_type_id,
              retrun_li: obj.retrun_li,
              unit_price: this.cashFlag === '元'? obj.unit_price : this.cashFlag === '角'? obj.unit_price* 0.1 : obj.unit_price * 0.01,
            })
          }

        },
        deep:true
      },
    }
  }
</script>

<style scoped lang="stylus">
  .bets-container {
    overflow: hidden;
    color: #000;
    font-size: .32rem;
  }
  .bets-content {
    margin-top .88rem
    font-size .32rem
    .bets-lottery-info {
      display flex
      justify-content space-between
      display -webkit-flex
      -webkit-justify-content space-between
      padding .1rem .2rem
      span {
        color #ff3a3b
      }
      i {
        font-style normal
      }
    }
  }

  .opt-btns {
    display flex
    justify-content space-between
    display -webkit-flex
    -webkit-justify-content space-between
    padding .2rem
    font-size .34rem
    div {
      padding .1rem 0.2rem
      border 1px solid #ccc
      border-radius .08rem
    }
  }

  .bets-list {
    padding 0 .2rem
    height 10.5rem
    overflow scroll
    .bets-items {
      position relative
      min-height 2.72rem
      margin-bottom .3rem
      padding-bottom .45rem
      background url(../../images/caipiao-bg.png) no-repeat
      background-size 100% 100%
      color #000000
      font-size .32rem
      .bets-item {
        padding .25rem .6rem 0
        .bets_number {
          display: inline-block;
          max-width 100%
          /*width: 100%;*/
          word-wrap break-word
          /*overflow: hidden;
          text-overflow: ellipsis;*/
          margin-right 0
          &.marginRights{
            margin-right .1rem
          }
        }
      }
      .bets-del {
        position absolute
        top 0
        bottom 0
        right 0.3rem
        margin auto
        width .25rem
        height .25rem
        padding .3rem
        font-size .56rem
        i {
          &:before {
            position absolute
            top 0rem
            left 0.15rem
          }
        }
      }
    }
  }

  .b-red {
    color #ff3a3b
  }
  .b-gray {
    color #999
  }
  .b-orange {
    color #fc823c
  }
  .b-blue {
    color #35b5fe;
  }

  /*footer*/
  .bets-footer {
    display flex
    justify-content space-between
    align-items center
    display -webkit-flex
    -webkit-justify-content space-between
    -webkit-align-items center
    position fixed
    bottom 0
    height .76rem
    background #fff
    width 100%
    padding-left 0.2rem
    input {
      padding .23rem .3rem
      background #ff3a3b
      color #fff
    }
  }

  /*bets apply*/
  .bets-apply {
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    width 100%
    height 100%
    margin auto
    background rgba(0,0,0,.5)
    .bets-apply-con {
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      width 80%
      height 3rem
      margin auto
      background #fff
      border-radius .08rem
      text-align center
      h4 {
        padding .2rem
        font-size .36rem
      }
      .bets-applay-con {
        /*width 3.5rem*/
        padding .1rem
        margin auto
        font-size .3rem
        text-align left
        text-indent 1.1rem
      }
      .bets-applay-warning {
        padding .2rem
      }
      .bets-applay-btns {
        position absolute
        bottom 0
        width 100%
        border-top 1px solid #ccc
        display flex
        display -webkit-flex
        height .76rem
        input[type=button] {
          width 50%
          height .76rem
          border 0
          &:last-child {
            background #ff3a3b
            color #fff
          }
          &:first-child {
            background #fff
          }
        }
      }
    }
  }
</style>
