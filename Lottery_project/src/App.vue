<template>
  <div id="app">
    <!--<transition>-->
      <!--<keep-alive>-->
        <!--<router-view></router-view>-->
      <!--</keep-alive>-->
    <!--</transition>-->
<!--name="slide-in" mode="out-in"-->
    <!--transitionName-->
    <transition name="fade" >
    <!--<transition :name="pageDirection" @after-enter="afterEnter">-->
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </keep-alive>
    </transition>
    <transition name="fade" >
    <!--<transition :name="pageDirection" @after-enter="afterEnter">-->
      <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
    </transition>

    <!--<sign v-if="signflag" @close="signflag = false"></sign>-->
  </div>
</template>


<script type="text/ecmascript-6">
  document.documentElement.style.fontSize = document.documentElement.clientWidth / 750*100 + 'px'

  import {getAppInfo,GetData} from 'api/publicInterface'
  import {mapActions, mapState, mapMutations} from 'vuex'
  import {APP_INFO} from './store/user'
  import {requestOpt, arrSort,replacePic} from 'api/recommend'
  import sign from '@/components/home/sign'

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

  import loginbg from '@/images/bg@2x.png'
  import pc_dandan from '@/images/icon/pc_dandan.png'
  import jslhc from '@/images/icon/jslhc.png'
  import minuteslot from '@/images/icon/minuteslot.png'
  import jspk10 from '@/images/icon/jspk10.png'

  export default {
    components:{
      sign
    },
    data() {
      return {
        dataList:  this.$store.state.user.lotterys_list || [],
        timer: null,
        timer10: null,
        interval: null,
        flag: false,
        playflag:false,
        timerplay:null,
        transitionName: 'slide-left',
        signflag: this.$store.state.user.islogin,
      }
    },
    computed: {
      /*...mapState([
        'pageDirection'
      ])*/
    },
    created() {
      /*if (!isDevice) {
        this.$router.push('/mobile')
      }*/
//      this.$router.push('/')
    },
    mounted() {
      // 缓存背景图片
      window.sessionStorage.setItem('loginBG', loginbg)
      window.sessionStorage.setItem('pc_dandan', pc_dandan)

      window.sessionStorage.setItem('chongqinshishicai', chongqinshishicai)
      window.sessionStorage.setItem('sand', sand)
      window.sessionStorage.setItem('daletou', daletou)
      window.sessionStorage.setItem('guangdong', guangdong)
      window.sessionStorage.setItem('gui_kuaisan', gui_kuaisan)
      window.sessionStorage.setItem('jiangxi', jiangxi)
      window.sessionStorage.setItem('jing_28', jing_28)
      window.sessionStorage.setItem('jing_pk', jing_pk)
      window.sessionStorage.setItem('liuhecai', liuhecai)
      window.sessionStorage.setItem('pailei3', pailei3)
      window.sessionStorage.setItem('pailei5', pailei5)
      window.sessionStorage.setItem('san_pk', san_pk)
      window.sessionStorage.setItem('sanfeishishicai', sanfeishishicai)
      window.sessionStorage.setItem('shandong', shandong)
      window.sessionStorage.setItem('shanghai', shanghai)
      window.sessionStorage.setItem('shishile', shishile)
      window.sessionStorage.setItem('shuangseqiu', shuangseqiu)
      window.sessionStorage.setItem('su_kuaisan', su_kuaisan)
      window.sessionStorage.setItem('tianjinshishicai1', tianjinshishicai1)
      window.sessionStorage.setItem('wan_kuaisan', wan_kuaisan)
      window.sessionStorage.setItem('xing_28', xing_28)
      window.sessionStorage.setItem('xin_shishicai', xin_shishicai)
      window.sessionStorage.setItem('jslhc', jslhc)
      window.sessionStorage.setItem('minuteslot', minuteslot)
      window.sessionStorage.setItem('jspk10', jspk10)

      getAppInfo(res => {
        window.proxy_default_rate = res.data.data.config.proxy_default_rate
        window.bank_charge_type = res.data.data.config.bank_charge_type
        window.lhc_shengxiao = res.data.data.config.lhc_shengxiao
//        console.log(window.lhc_shengxiao)
        this.APP_INFO(res.data.data.config)
//        console.log(res.data.data.config.proxy_default_rate)
      })
//      this.dataList.sort(arrSort('lot_type_id'))
//      console.log(this.dataList)
      this.getData()
      this.getLotteryPlay()
      this.getWinningList()
      this.getSlide()
      this.timer = setInterval(() => {
        /*if (this.flag) {
          this.getData();
        }*/
//        let arr = this.dataList.sort(arrSort('lot_type_id'))
        let arr = this.dataList
        let req =false

        for(let i=0,len=arr.length;i<len;i++) {
          /*counttime*/
          arr[i].curr_count_down = arr[i].curr_count_down
          arr[i].curr_count_down--
//          if (arr[i].curr_count_down) {

            if(arr[i].curr_count_down<=0) {
              arr[i].curr_count_down=0
              req = true
                this.getData()
            }
            else {
              req =false
            }

//          }
        }

        /*if (req) {
          req =false
          this.getData()
        }*/


      },1000)

      this.timer10 = setInterval(() => {
        this.getData()
      },60000)

      let hotRes = [];// 热门
      let hignReq = [];// 高频
      let lowReq = [];// 低频
      let All = []; // 全部
      let ALL_XY = []; // 全部 包括幸运28
      let ALL_all = [];
      let PC_dandan = []; // PC蛋蛋
      for(let i=0,len=this.dataList.length;i<len;i++) {

        if (this.dataList[i].is_hot === 1 ||this.dataList[i].code === 'BJ28') {
          hotRes.push(this.dataList[i])
        }
        if (this.dataList[i].frequency === 0&&this.dataList[i].code !== 'XY28') {
          hignReq.push(this.dataList[i])
        }
        if (this.dataList[i].frequency === 1&&this.dataList[i].code !== 'XY28') {
          lowReq.push(this.dataList[i])
        }
        if (this.dataList[i].code === 'XY28'||this.dataList[i].code === 'BJ28') {
          PC_dandan.push(this.dataList[i])
        }

        if (this.dataList[i].code !== 'BJ28'&&this.dataList[i].code !== 'XY28'){
          All.push(this.dataList[i])
        }

        if (this.dataList[i].code !== 'XY28'){
          ALL_XY.push(this.dataList[i])
        }

      };


      window.hotRes = hotRes
      window.hignReq = hignReq
      window.lowReq = lowReq
      window.PC_dandan = PC_dandan
      window.All = All
      window.ALL_XY = ALL_XY
      window.ALL_all = ALL_all


    },
    methods: {
      ...mapActions(['APP_INFO']),
     /* ...mapMutations([
        'afterEnter'
      ]),*/
      getData() {// 所有彩票列表集合
        requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=-1',res => {
          this.flag = true;
          setTimeout(() => {
            this.flag = false;
          },1000)
          this.dataList = res.data.data.list
//          this.dataList.sort(arrSort('lot_type_id'))
          let hotRes = [];// 热门
          let hignReq = [];// 高频
          let lowReq = [];// 低频
          let All = []; // 全部
          let ALL_XY = [];
          let ALL_all = [];
          let PC_dandan = []; // PC蛋蛋
          for(let i=0,len=this.dataList.length;i<len;i++) {
            if (this.dataList[i].code === 'CQSSC'){
              this.dataList[i].pic = chongqinshishicai
            } else if (this.dataList[i].code === 'FC3D'){
              this.dataList[i].pic = sand
            } else if (this.dataList[i].code === 'DLT'){
              this.dataList[i].pic = daletou
            } else if (this.dataList[i].code === 'PL3'){
              this.dataList[i].pic = pailei3
            } else if (this.dataList[i].code === 'PL5'){
              this.dataList[i].pic = pailei5
            } else if (this.dataList[i].code === 'GD11X5'){
              this.dataList[i].pic = guangdong
            } else if (this.dataList[i].code === 'XGLHC'){
              this.dataList[i].pic = liuhecai
            } else if (this.dataList[i].code === 'SHSSL'){
              this.dataList[i].pic = shishile
            } else if (this.dataList[i].code === 'GXKS'){
              this.dataList[i].pic = gui_kuaisan
            } else if (this.dataList[i].code === 'AHKS'){
              this.dataList[i].pic = wan_kuaisan
            } else if (this.dataList[i].code === 'JSKS'){
              this.dataList[i].pic = su_kuaisan
            } else if (this.dataList[i].code === 'SSQ'){
              this.dataList[i].pic = shuangseqiu
            } else if (this.dataList[i].code === 'SH11X5'){
              this.dataList[i].pic = shanghai
            } else if (this.dataList[i].code === 'XJSSC'){
              this.dataList[i].pic = xin_shishicai
            } else if (this.dataList[i].code === 'BJ28'){
              this.dataList[i].pic = jing_28
            } else if (this.dataList[i].code === 'XY28'){
              this.dataList[i].pic = xing_28
            } else if (this.dataList[i].code === 'JX11X5'){
              this.dataList[i].pic = jiangxi
            } else if (this.dataList[i].code === 'TJSSC'){
              this.dataList[i].pic = tianjinshishicai1
            } else if (this.dataList[i].code === 'SD11X5'){
              this.dataList[i].pic = shandong
            } else if (this.dataList[i].code === 'SFPK10'){
              this.dataList[i].pic = san_pk
            } else if (this.dataList[i].code === 'SFSSC'){
              this.dataList[i].pic = sanfeishishicai
            } else if (this.dataList[i].code === 'BJPK10'){
              this.dataList[i].pic = jing_pk
            }
            ALL_all.push(this.dataList[i])
            if (this.dataList[i].is_hot === 1||this.dataList[i].code === 'BJ28') {
              hotRes.push(this.dataList[i])
            }
            if (this.dataList[i].frequency === 0&&this.dataList[i].code !== 'XY28') {
              hignReq.push(this.dataList[i])
            }
            if (this.dataList[i].frequency === 1&&this.dataList[i].code !== 'XY28') {
              lowReq.push(this.dataList[i])
            }
            if (this.dataList[i].code === 'XY28'||this.dataList[i].code === 'BJ28') {
              PC_dandan.push(this.dataList[i])
            }

            if (this.dataList[i].code !== 'BJ28'&&this.dataList[i].code !== 'XY28'){
              All.push(this.dataList[i])
            }
            if (this.dataList[i].code !== 'XY28'){
              ALL_XY.push(this.dataList[i])
            }

          };


          window.hotRes = hotRes
          window.hignReq = hignReq
          window.lowReq = lowReq
          window.PC_dandan = PC_dandan
          window.All = All
          window.ALL_XY = ALL_XY
          window.ALL_all = ALL_all
//          console.log(this.dataList )
        })
      },
      //  分类  热门彩票
      getHotLot() {
        let arr = this.getData()
        let res = []
        for(let i=0,len=arr.length;i<len;i++) {
          if (arr[i].is_hot === 1) {
            res.push(arr[i].is_hot)
          }
        };
        return res
      },
      getLotteryPlay() { // 获取彩票玩法
        requestOpt.reqnoGet('play_types', (res) => {
          if (res.data.status === 1) {
            this.playflag = true;
            setTimeout(() => {
              this.playflag = false;
            },1000)
            let list = res.data.data.list
            window.sessionStorage.setItem('lottery_play_list',JSON.stringify(list))
            this.$store.commit('LOTTERYPLAYLIST',list)
          }
        },(err,status,statusText) => {
//          console.log(err,status,statusText)
        })
      },
      getWinningList() { //      获取中奖信息
        requestOpt.reqnoGet('latest_luckys', (res) => {
          let list = res.data.data.list;
          this.$store.commit('WINNINGLIST',list)
        }, (err) => {
//          alertip(err)
        });
      },
      regainToken() { // 刷新token
        requestOpt.reqPutNouser('token', this.$store.state.user.token, res => {
          if (res.data.token) {
            this.$store.state.user.token = res.data.token;
            this.$store.commit('TOKEN',res.data.token)
          } else {
            /*alertip(res.data.msg)
            setTimeout(() => {
              this.$router.push('/login')
            }, 300)*/
          }

        }, err => {
//          alertip(err)
        })
      },
      getSlide() { //  获取轮播图
        requestOpt.reqnoGet('slidings', res => {
//          this.imgPic = res.data.data.list
//          window.sessionStorage.setItem('imgPic', JSON.stringify(res.data.data.list))
          this.$store.commit('updateImg',res.data.data.list)
        }, err => {
//          alertip(err)
        })
      },
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right':'slide-left'
      }
    }

  }
</script>

<style>

  .slide-out-enter-active,
  .slide-out-leave-active,
  .slide-in-enter-active,
  .slide-in-leave-active {
    will-change: transform;
    transition: all 0ms;
    position: absolute;
  }
  .slide-out-enter {
    opacity: 1;
    transform: translateX(100%);

  }
  .slide-out-leave-active {
    opacity: 1;
    transform: translateX(100%);

  }
  .slide-in-enter {
    opacity: 1;
    transform: translateX(100%);

  }
  .slide-in-leave-active {
    opacity: 1;
    transform: translateX(0);
  }

  /*update 2017/11/30*/
  /*.fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .child-view {
    position: absolute;
    transition: all 1s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 1;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 1;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }*/

  #app {
    height: 100%;
    /*overflow: auto;*/
  }
</style>
