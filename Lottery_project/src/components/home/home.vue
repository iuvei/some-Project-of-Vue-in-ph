<script src="../../../../myReact/App.js"></script>
<template>
     <transition name="fade">
        <div class="home">
            <m-header :status="!status"></m-header>

            <div class="home-content">

                <!--轮播图-->
                <div class="recommend">
                    <div class="swiper-box" >
                    <!--
                    <swiper :options="swiperOption">
                        <swiper-slide v-for='(item , i ) in imgPic.imgUrls' :key='i'>
                        <a :href="item.href">
                            <img :src="item.pic" class="banner-item" :alt="item.name">
                        </a>
                        </swiper-slide>
                        <div v-if='imgPic' class="swiper-pagination" slot="pagination"></div>
                    </swiper>-->
                    <!--</swiper>-->
                    <mt-swipe :auto="4000">
                        <mt-swipe-item v-for='(item , i ) in imgPic' :key='i' >
                        <!--<a :href="item.url">-->
                            <img :src="item.pic" class="banner-item" :alt="item.name" @click="toUrl(item.url)">
                        <!--</a>-->
                        </mt-swipe-item>
                    </mt-swipe>
                    </div>
                </div>
                <!--通知-->
                <div class="announcement-content">
                    <div class="announcement">
                    <div class="im">
                        <img src="../../images/notice@2x.png" alt="">
                    </div>
                    <div class="marquee" @click="$router.push('/notice')"><marquee scrollamount="2">
                        <!--彩票125平台正式投入运营，新用户注册可领500元彩金大礼包！-->
                        <span v-for="item in notice">{{item.content}}</span>
                    </marquee>
                    </div>
                    </div>
                </div>
                <!--分类，快速进入-->
                <div class="classification-content">
                    <div class="classification">
                    <dl>
                        <router-link tag="div"  to="/m-center">
                        <dt>
                            <img src="../../images/Save_home@2x.png" alt="存/取款">
                        </dt>
                        <dd>存/取款</dd>
                        </router-link>
                    </dl>
                    <dl @click="toTrial">
                        <!--<router-link tag="div"  to="/trial">-->
                        <dt>
                            <img src="../../images/free.png" alt="免费试玩">
                        </dt>
                        <dd>免费试玩</dd>
                        <!--</router-link>-->
                    </dl>
                    <dl @click="toBetRecord">
                        <!--<router-link tag="dl"  to="/betting/0">-->
                        <dt>
                            <img src="../../images/Record_home@2x.png" alt="投注记录">
                        </dt>
                        <dd>投注记录</dd>
                        <!--</router-link>-->
                    </dl>
                    <dl>
                        <router-link tag="div"  to="/activities">
                        <dt>
                            <img src="../../images/Discount_home@2x.png" alt="优惠活动">
                        </dt>
                        <dd>优惠活动</dd>
                        </router-link>
                    </dl>
                    <dl>
                        <!--<router-link tag="div"  to="/trial">-->
                        <!---->
                        <!--</router-link>-->
                        <dt>
                        <img src="../../images/service_home@2x.png" alt="在线客服" @click="tolining">
                        </dt>
                        <dd>在线客服</dd>
                    </dl>
                    </div>
                </div>
                <!--热门彩种-->
                <div class="hot-colors-content">
                    <div class="hot-colors-title">
                    <dl>
                        <dt><span></span></dt>
                        <dd>热门彩种</dd>
                    </dl>
                    </div>
                    <div class="hot-colors-classification">
                    <!--<router-link tag="div" to="/playing">-->
                    <!--<dd class="djs">{{lotterys.memo | transTimeMinute}}</dd>-->
                    <div class="hot-lattery-con">

                    </div>
                    <div class="hot-lattery-container">
                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==0||key==1">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==0||key==1)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>
                        </div>

                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==2||key==3">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==2||key==3)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>
                        </div>

                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==4||key==5">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==4||key==5)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>
                        </div>

                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==6||key==7">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==6||key==7)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>
                        </div>

                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==8||key==9">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==8||key==9)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>

                        </div>
                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==10||key==11">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==8||key==9)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>

                        </div>
                        <div>
                        <dl v-for="(lotterys, key) in lotteryAll" @click="toLatteryPlan(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)" v-if="key==12||key==13">
                            <dt><img :src="repaceImg(lotterys.code)" :alt="lotterys.name"></dt>
                            <dd>{{lotterys.code==='BJ28'?'PC蛋蛋':lotterys.name}}</dd>
                            <dd class="djs">{{lotterys.memo}}</dd>
                        </dl>
                        <div v-for="(lotterys, key) in lotteryAll" class="lottery-plans" v-if="planshow==key&&(key==8||key==9)&&hotFlag">
                            <div @click="toPlanA(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}A盘</div>
                            <div @click="toPlanB(key,lotterys.name,lotterys.code,lotterys.lot_type_id,lotterys.pic)">{{lotteryAll[key].name}}B盘</div>
                        </div>

                        </div>
                    </div>

                    <router-link tag="div" to="/lottery1" >
                        <dl >
                        <dt><img src="../../images/icon/more.png" alt="更多"></dt>
                        <dd>更多玩法</dd>
                        <dd class="djs" >
                            <span >更多好玩游戏</span>
                        </dd>
                        </dl>
                    </router-link>


                    </div>
                </div>
                <!--最新中奖榜单-->
                <div class="winners-list-content">
                    <div class="winners-list-title">
                    <dl>
                        <dt><span></span></dt>
                        <dd>最新中奖榜</dd>
                    </dl>
                    </div>

                    <div class="winners-list-message" id="winners-list-message">
                    <div class="winners1" id="winners1" @touchend.prevent="$router.push('/list')">
                        <!--<dl v-for="article in articles" class="wing_list">
                        <dt class="user-id">{{article.phone}}</dt>
                        <dd class="user-prize">喜中{{article.winning_money}}元</dd>
                        <dd class="prize-classification">购买{{article.lot_name}}</dd>
                        </dl>-->
                        <div v-for="article in articles" class="wing_list">
                        <div class="wing_list-l">
                            <div class="wing_list-l-img">
                            <img src="../../images/medal@2X.png" alt="">
                            </div>
                            <div class="wing_list-l-con">
                            <div class="wing_list-l-con-t">{{article.phone}}</div>
                            <div class="wing_list-l-con-b">购买{{article.lot_name}}</div>
                            </div>
                        </div>
                        <div class="wing_list-r">喜中{{article.winning_money}}元</div>
                        </div>
                        <!--@click="getWinningList" -->
                        <div v-if="articles.length===0" style="height: 1.8rem;text-align: center;line-height: 1.8rem;color: #999;" >
                        <vue-loading v-if="!isShowContent" type="spiningDubbles" color="#999" :size="{ width: '50px', height: '50px' }"></vue-loading>
                        <span v-else>无数据</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div style="height: 1.8rem"></div>

            </div>
            <tab></tab>
            <!--签到-->
            <sign v-if="signflag" @close="closesign"></sign>
            <div class="home-guide" v-if="sure_show_guide">
                <div>
                    <div class="home-guide-header"  v-if="show_guide_index==0">
                         登录  注册
                     </div>
                     <div class="home-guide-header-1" v-if="show_guide_index==1">
                         开奖
                     </div>
                     <div class="home-guide-active" v-if="show_guide_index==2">
                         <div>
                            <img src="../../images/Discount_home@2x.png" alt="">
                            <span>优惠活动</span>
                         </div>
                     </div>
                     <div class="home-guide-online" v-if="show_guide_index==3">
                         <div>
                            <img src="../../images/service_home.png" alt="">
                            <span>在线客服</span>
                         </div>
                     </div>
                     <div class="home-guide-final" v-if="show_guide_index==4">
                         <div>
                            <img src="../../images/icon/minuteslot.png" alt="">
                            <div>
                                <h2>{{lotteryAll[0].name}}</h2>
                                <p>{{lotteryAll[0].memo}}</p>
                            </div>
                         </div>
                         <div>
                             <img src="../../images/icon/jspk10.png" alt="">
                             <div>
                                 <h2>{{lotteryAll[0].name}}</h2>
                                 <p>{{lotteryAll[1].memo}}</p>
                             </div>
                         </div>
                     </div>
                </div>
                
                <div class="first-step" @click="show_guide(0)" v-if="show_guide_index==0"></div>
                <div class="second-step" @click="show_guide(1)" v-if="show_guide_index==1"></div>
                <div class="third-step" @click="show_guide(2)" v-if="show_guide_index==2"></div>
                <div class="fourth-step" @click="show_guide(3)" v-if="show_guide_index==3"></div>
                <div class="fifth-step" @click="show_guide(4)" v-if="show_guide_index==4"></div>
            </div>
            <publicNotice></publicNotice>
        </div>
        
     </transition>
</template>


<script type="text/ecmascript-6">
  import MHeader from '@/components/m-header/m-header'
  import Scroll from '@/components/home/scroll'
  import sign from '@/components/home/sign'
  import Tab from '@/components/tab/tab'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import { Swipe, SwipeItem } from 'mint-ui'
  import {getRecommend, getDiscList, requestOpt, alertip, mt_confirm, replacePic,mt_toast} from 'api/recommend'
  import {imgConfig, slideJump} from 'api/config'
  import VueLoading from 'vue-loading-template'
  import publicNotice from './publicNotice'


  export default {
    components: {
      MHeader,
      Scroll,
      Tab,
      sign,
      VueLoading,
      publicNotice
    },
    data() {
      return {
       
        status: sessionStorage.getItem('login'),
        phone : 'string',
        winning_money : "decimal",
        user_id : "int",
        create_time : "string",
        lot_name : "string",

        articles: this.$store.state.user.winning_list||[],

        planshow: -1,
        flagArr: [false,false,false,false,false,false,false],
        planTextA: '',

        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 4000,
          autoplayDisableOnInteraction: false,
          loop: true
        },
        imgPic: this.$store.state.user.imgPic || imgConfig,
        hotmsgs: {},
        dialog: false,
        lotterys: [],
        lotteryAll: window.hotRes || [],//hot
        LotPC: window.PC_dandan,
        timer: null,
        interval: null,
        speed: 100,
        notice: JSON.parse(sessionStorage.getItem('notice')) || [],
        hotFlag: false,
        signflag: false,
        imgFlag: false, // 请求一次成功
        signTimer: null,
        isShowContent: false,
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        app_config : '',
        show_guide_index: 0,
        sure_show_guide : false,            
        
      }
    },
    computed: {

    },
    watch: {
      lotteryAll: {
        handler(val,old) {
        },
        deep: true
      }
    },
    beforeRouteLeave(to, from, next) {
      clearInterval(this.timer)
      clearInterval(this.interval)
      clearInterval(this.signTimer)
      next()
    },
    beforeRouteEnter(to, from, next) {
      next(vm => {
        vm.$store.commit('PCDANDAN','lottery')
      })

    },
    activated(){
      this.imgPic = this.$store.state.user.imgPic
    },
    deactivated(){
      clearInterval(this.timer)
      clearInterval(this.interval)
    },
    mounted(){
      this.$store.commit('LOTPLAYS',{keyFirst:'', keyLast: '' })
      this.getSingInfo(sessionStorage.getItem('token'))
      if(this.$store.state.user.signinfo) {
        this.signflag = this.$store.state.user.signinfo.is_sign==0?true:false
        this.signTimer = setInterval(() => {
          if(this.signflag) {
            clearInterval(this.signTimer)
          }
          this.signflag = this.$store.state.user.signinfo.is_sign==0?true:false
        },1000)

      }

      this.status = sessionStorage.getItem('login')  //this.$store.state.user.islogin
      setTimeout(() => {
        this.imgPic = this.$store.state.user.imgPic
      },1000)

      this.getNotice();

      setTimeout(() => {
        this.articles = this.$store.state.user.winning_list
      },2000)
      if (this.$store.state.user.winning_list.length==0) {
        this.getWinningList()
      }
    
      this.timer = setInterval(() => {
        this.lotteryAll=window.hotRes;
        this.LotPC = window.PC_dandan
      },1000)
      
      // 设置竖向滚动
      if (this.$el.querySelector) {
        let father = this.$el.querySelector('#winners1')
        function myScroll() {
          father.scrollTop++;
          if(father.scrollTop >= father.scrollHeight-father.clientHeight-1) {
            father.scrollTop = 0;
          }
        }
        this.interval = setInterval(myScroll, this.speed)
      }
      this.if_show_guide();
    //   console.log(this.lotteryAll);
    //   this.begin_home_guide();

    },
    methods: {
      closesign() {
        this.signflag = false
      },
      toUrl(type) {
        if(type.length===1) {
          if (type === '7' || type === '8'|| type === '9'|| type === '10'|| type === '11'|| type === '12'|| type === '14'|| type === '15' ) {
            if (sessionStorage.getItem('login')) {
              this.$router.push(slideJump[type].link)
            } else {
              this.$router.push('/login')
            }
          } else {
            this.$router.push(slideJump[type].link)
          }
        } else {
          let arr = type.split(':')
          if(arr[0] === '6') {
            this.$router.push('/activity/'+arr[1]+'/活动详情')
          } else {
            if (arr[0] === '7' || arr[0] === '8'|| arr[0] === '12' ) {
              if (sessionStorage.getItem('login')) {
                this.$router.push(slideJump[arr[0]][arr[1]].link)
              } else {
                this.$router.push('/login')
              }
            } else {
              this.$router.push(slideJump[arr[0]][arr[1]].link)
            }
          }
        }
      },
      getSingInfo(token) {
        requestOpt.reqGet('sign',token, res => {
          if (res.data.status === 1) {
            let list = res.data.data
            this.$store.commit('SINGINFO',list)
          } else {
          }
        }, err => {
        })
      },
      repaceImg(code) {
          if (code === 'CQSSC'){
            return sessionStorage.getItem('chongqinshishicai')
          } else if (code === 'FC3D'){
            return sessionStorage.getItem('sand')
          } else if (code === 'DLT'){
            return sessionStorage.getItem('daletou')
          } else if (code === 'PL3'){
            return sessionStorage.getItem('pailei3')
          } else if (code === 'PL5'){
            return sessionStorage.getItem('pailei5')
          } else if (code === 'GD11X5'){
            return sessionStorage.getItem('guangdong')
          } else if (code === 'XGLHC'){
            return sessionStorage.getItem('liuhecai')
          } else if (code === 'SHSSL'){
            return sessionStorage.getItem('shishile')
          } else if (code === 'GXKS'){
            return sessionStorage.getItem('gui_kuaisan')
          } else if (code === 'AHKS'){
            return sessionStorage.getItem('wan_kuaisan')
          } else if (code === 'JSKS'){
            return sessionStorage.getItem('su_kuaisan')
          } else if (code === 'SSQ'){
            return sessionStorage.getItem('shuangseqiu')
          } else if (code === 'SH11X5'){
            return sessionStorage.getItem('shanghai')
          } else if (code === 'XJSSC'){
            return sessionStorage.getItem('xin_shishicai')
          } else if (code === 'BJ28'){
            return sessionStorage.getItem('pc_dandan')
          } else if (code === 'XY28'){
            return sessionStorage.getItem('xing_28')
          } else if (code === 'JX11X5'){
            return sessionStorage.getItem('jiangxi')
          } else if (code === 'TJSSC'){
            return sessionStorage.getItem('tianjinshishicai1')
          } else if (code === 'SD11X5'){
            return sessionStorage.getItem('shandong')
          } else if (code === 'SFPK10'){
            return sessionStorage.getItem('san_pk')
          } else if (code === 'SFSSC'){
            return sessionStorage.getItem('sanfeishishicai')
          } else if (code === 'BJPK10'){
            return sessionStorage.getItem('jing_pk')
          } else if (code === 'JSLHC'){
            return sessionStorage.getItem('jslhc')
          } else if (code === 'FFSSC'){
            return sessionStorage.getItem('minuteslot')
          } else if (code === 'JSPK10'){
            return sessionStorage.getItem('jspk10')
          }
      },
      getLotteryPlay() { // 获取彩票玩法
        requestOpt.reqnoGet('play_types', (res) => {
          if (res.data.status === 1) {
            let list = res.data.data.list
            this.$store.commit('LOTTERYPLAYLIST',list)
          }
        },err => {
          console.log(err)
        })
      },
      tolining() {
        location.href = this.$store.state.user.app_info.client_service_url
      },
      toPcdandan(){
        this.$router.push('/pcdandan')
        this.$store.commit('PCDANDAN','home')
      },
      toPlanA(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/1')
        this.$store.commit('OF_AVATE',pic)
        this.$store.commit('BET_OBJ',this.lotteryAll[i])
        this.$store.commit('HOME_TAB','home')
        this.$store.commit('LOTTERY_CODE',code)
      },
      toPlanB(i,name,code,id,pic) {
        this.$router.push('/gameplay/'+code+'/'+id+'/2')
        this.$store.commit('OF_AVATE',pic)
        this.$store.commit('BET_OBJ',this.lotteryAll[i])
        this.$store.commit('HOME_TAB','home')
        this.$store.commit('LOTTERY_CODE',code)
      },
      toTrial() {
        if(sessionStorage.getItem('login')) {
          if(this.userinfo.is_trial){
            mt_toast('当前为试玩账号')
          } else {
            mt_confirm('是否退出当前账号？', res => {
              if (res) {
                this.$router.push('trial')
                this.$store.state.user.token=''
                this.$store.state.user.userinfo={}
                this.$store.commit('ISLOGIN', false)
                this.$store.commit('LOGINFLAG', 'home')

                window.sessionStorage.removeItem('userinfo')
                window.sessionStorage.removeItem('login')
                window.sessionStorage.removeItem('token')

                /*window.sessionStorage.setItem('userinfo',JSON.stringify({}))
                window.sessionStorage.setItem('login',false)
                window.sessionStorage.setItem('token','')*/
              }
            }, '退出')
          }
        } else {
          this.$router.push('trial')
        }
      },
      toBetRecord() {
        if(!sessionStorage.getItem('login')) {
          this.$router.push('login')
        } else {
          this.$router.push('betting/0')
        }
      },
      getlotteryList() { 
        //  获取彩种 lottery_types/all
        requestOpt.reqnoGet('betting_list_v1?page=1&frequency=-1&is_hot=1', res => {
          this.lotteryAll= res.data.data.list
        }, err => {
          alertip(err)
        })
      },
      getSlide() { 
        //  获取轮播图
        requestOpt.reqnoGet('slidings', res => {
          this.imgPic = res.data.data.list
          window.sessionStorage.setItem('imgPic', JSON.stringify(res.data.data.list))
        }, err => {
        })
      },
      toLatteryPlan(i,name,code,id,pic) {
        if (code==='SD11X5'
          ||code==='GD11X5'
          ||code==='JX11X5'
          ||code==='FC3D'
          ||code==='DLT'
          ||code=='SSQ'
          ||code=='PL3'
          ||code=='PL5'
          ||code==='SHSSL'
          ||code==='XGLHC'
          ||code==='JSLHC'
          ||code==='AHKS'
          ||code==='JSKS'
          ||code==='GXKS') {
          this.planshow = -1;
          this.hotFlag = false
          this.$router.push('/gameplay/'+code+'/'+id+'/1')
          this.$store.commit('OF_AVATE',pic)
          this.$store.commit('BET_OBJ',this.lotteryAll[i])
          this.$store.commit('HOME_TAB','home')
          this.$store.commit('LOTTERY_CODE',code)

        } else {
          if (code==='BJ28') {
            this.toPcdandan();
          } else {
            this.hotFlag = true
            if(this.planshow == i) {
              this.planshow = -1
            } else {
              this.planshow = i
            }
          }
        }
      },
      getNotice() { // 广告
        requestOpt.reqnoGet('notice', res => {
          this.notice = res.data.data.list
          window.sessionStorage.setItem('notice', JSON.stringify(res.data.data.list))
        }, err => {
        })
      },
      getWinningList() { //      获取中奖信息
        this.isShowContent = false
        requestOpt.reqnoGet('latest_luckys', (res) => {
          if(res.data.status === 1) {
            this.isShowContent = true
          }
          let list = res.data.data.list;
          this.articles = list
          window.sessionStorage.setItem('articles', JSON.stringify(res.data.data.list))
          this.$store.commit('WINNINGLIST',list)
        }, (err) => {
          console.log(err)
        });
      },
      
      getConfig_data(){
          this.app_config = JSON.parse(sessionStorage.getItem('app_config'));
          if(!this.app_config){
                requestOpt.reqnoGet('config',
                (res)=>{
                    if(res.data.status == 1 || res.status == 200){
                        this.app_config = res.data.data.config;
                        sessionStorage.setItem('app_config',JSON.stringify(res.data.data.config));
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
       
      },

      begin_home_guide(){
          
      },
      show_guide(index){
            this.show_guide_index = index;
            this.show_guide_index++;
            if(index == 3){
                window.scrollTo(0,250);
            }
            if(index >= 4){
                // window.scrollTo(0,300);
                document.body.style.overflow = 'auto';
                this.sure_show_guide = false;
                this.$root.bus.$emit('showPublicNotice',true);
            }
      },
           // 只给用户显示一次引导
      if_show_guide(){
        
        document.body.style.overflow = 'hidden'
        let that = this;
        $(document).on('touchmove',function (e){
            if(that.sure_show_guide ){
                e.preventDefault();
            }
        });

        let flag = localStorage.getItem('show_guide_flag')
          if(!flag){
            localStorage.setItem('show_guide_flag',true)
            this.sure_show_guide = true;
          }
          if(flag){
             document.body.style.overflow = 'auto'
             sessionStorage.setItem('guide_difine_notice', true);
          }
      },
   
    },
    created(){
        this.getConfig_data()
    }

  }


</script>



<style scoped lang="stylus">
  .home{
   /* width: 7.5rem;
    height: 100%;*/
    /*display: block;
    overflow-y: scroll;*/
  }
  .home-content{
    /*width: 7.5rem;*/
    /*height: 16.9rem;*/
    min-height: 15rem;
    /*display: block;*/
    position: relative;
    top:0.88rem;
    background: #eeeeee;
    border: none;
    /*overflow: auto;
    overflow-y: scroll;*/
  }
  /*轮播图*/
  .recommend{
    width: 7.5rem;
    height: 3rem;
    display: block;
  }
  .recommend .swiper-box{
    height: 3rem;
  }
  .recommend .swiper-box img{
    width: 7.5rem;
    height: 3rem;
    display: block;
  }

  /*通知*/
  .announcement-content{
    width: 7.5rem;
    height: 0.44rem;
    display: block;
    background: #ffffff;
  }
  .announcement {
    width: 6.9rem;
    height: 0.44rem;
    display: block;
    margin: auto;
  }
  .announcement .im{
    width: 0.4rem;
    height: 0.44rem;
    float: left;
    display: block;
  }
  .announcement .im img{
    width: 0.24rem;
    height: 0.2rem;
    float: left;
    display: block;
    margin-top: 0.12rem;
  }
  .announcement .marquee{
    width: 6.5rem;
    height: 0.44rem;
    float: left;
    display: block;
  }
  .announcement .marquee marquee{
    width: 6.5rem;
    height: 0.44rem;
    float: left;
    display: block;
    font-size: 0.3rem;
    color: #222222;
    line-height: 0.44rem;
    font-weight: normal;
  }
  /*分类，快速进入*/
  .classification-content{
    width: 7.5rem;
    height: 1.5rem;
    display: block;
    background: #ffffff;
  }
  .classification{
    height: 1.5rem;
    display: flex;
    margin: auto;
  }
  .classification dl{
    flex: 1;
  }
  .classification dl dt{
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    margin-left: 0.285rem;
    margin-top: 0.2rem;

  }
  .classification dl dd{
    width: 1.37rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.3rem;
    color: #222222;
    font-weight: normal;
    text-align: center;
  }

  .classification dl dt img{
    width: 0.8rem;
    height: 0.8rem;
    text-align: center;
    display: inline-block;
    line-height: 0.8rem;
    float: left;
  }

  /*热门采种*/
  .hot-colors-content{
    width: 7.5rem;
    /*height: 7.96rem;*/
    display: block;
    margin-top: 0.2rem;
  }

  .hot-colors-title{
    width: 7.5rem;
    height: 0.6rem;
    display: block;
    background: #ffffff;
    /*overflow: hidden;*/
  }
  .hot-colors-title dl{
    width: 6.9rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    /*overflow: hidden;*/
    margin: auto;
  }
  .hot-colors-title dl dt{
    width: 0.32rem;
    height: 0.6rem;
    display: block;
    float: left;
    text-align: left;
  }
  .hot-colors-title dl dt span{
    width: 2px;
    height: 0.3rem;
    display: block;
    background: #ffdf36;
    margin-top: 0.15rem;
  }
  .hot-colors-title dd{
    width: 6rem;
    height: 0.4rem;
    display: block;
    float: left;
    font-size: 0.28rem;
    color: #323232;
    /*font-weight: bold;*/
  }

  .hot-lattery-container{
    position: relative;
    dl{
      &.top2{
        top: .2rem;
      }
    }
  }

  .lottery-plans {
    position: relative;
    width: 100%;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    background: transparent;
    color: #000;
    font-size: .32rem;
    div {
      width: 45%;
      margin: 1% 2.5%;
      padding: .1rem;
      background: #ff3a3b;
      text-align: center;
      color: #fff;
      border-radius: .08rem;
    }
    &.top0 {
      top: 1.9rem;
    }
    &.top1 {
      top: 1.9rem;
    }
    &.top2 {
      top: 3.72rem;
    }
    &.top3 {
      top: 3.72rem;
    }
    &.top4 {
      top: 5.55rem;
    }
    &.top5 {
      top: 5.55rem;
    }

  }

  /*热门彩分类*/
  .hot-colors-classification{
    width: 7.5rem;
    /*height: 9rem;*/
    display: block;
    overflow: auto;
  }
  .hot-colors-classification dl{
    position: relative;
    width: 49.6%;
    height: 1.8rem;
    float: left;
    margin: 0.2%;
    border: none;
    background: #ffffff;
  }
  dl.classification-right{
    /*float: right;*/
  }
  /*采种分类图片*/
  .hot-colors-classification dl dt{
    width: 1.06rem;
    height: 1.06rem;
    float: left;
    display: block;
    margin: 0.36rem 0.2rem 0 0.3rem;
  }
  .hot-colors-classification dl dt img{
    width: 1.06rem;
    height: 1.06rem;
    float: left;
    display: block;
    border-radius: 50%;

  }


  .hot-colors-classification dl dd{
    width: 2rem;
    height: 0.36rem;
    float: left;
    border: none;
    display: block;
    font-size: 0.3rem;
    color: #323232;
    text-align: left;
    line-height: 0.36rem;
    margin-top: 0.36rem;
    &.djs {
      font-size: .26rem;
      color: #555;
    }
  }

  .hot-colors-classification dl dd.classification-more{
    width: 2rem;
    height: 1.8rem;
    float: left;
    border: none;
    display: block;
    font-size: 0.3rem;
    color: #323232;
    text-align: left;
    line-height: 1.8rem;
    margin-top: 0;
  }
  /*最新中奖榜单*/
  .winners-list-content{
    width: 7.5rem;
    height: 2.4rem;
    display: block;
    margin-top: 0.2rem;
    margin-bottom: 0.98rem;
  }

  .winners-list-title{
    width: 7.5rem;
    height: 0.6rem;
    display: block;
    margin: auto;
    background: #ffffff;
  }
  .winners-list-title dl{
    width: 6.9rem;
    height: 0.6rem;
    display: block;
    line-height: 0.6rem;
    margin: auto;
  }
  .winners-list-title dl dt{
    width: 0.32rem;
    height: 0.6rem;
    display: block;
    float: left;
    text-align: left;
  }
  .winners-list-title dl dt span{
    width: 2px;
    height: 0.3rem;
    display: block;
    background: #ffdf36;
    margin-top: 0.15rem;
  }
  .winners-list-title dd{
    width: 6rem;
    height: 0.4rem;
    display: block;
    float: left;
    font-size: 0.28rem;
    color: #323232;
    /*font-weight: bold;*/
  }
  /*.winners-list-message{
    width: 7.5rem;
    height: 1.8rem;
    background: #ffffff;
    display: block;
    margin: auto;
    overflow: hidden;
  }*/
  .winners1{
    width: 7.5rem;
    height: 3.5rem;
    background: #ffffff;
    display: block;
    margin: auto;
    overflow: hidden;
  }
  .winners-list-message dl{
    width: 6.9rem;
    height: 0.4rem;
    display: block;
    line-height: 0.4rem;
    margin-left: 0.3rem;
    transition: top 0.5s;
  }
  .wing_list{
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    align-items: center;
    -webkit-align-items: center;
    height: 1.1rem
    padding: 0 .3rem;
    border-bottom: 1px solid #ededed;
    font-size: .24rem;
  }
  .wing_list-l {
    display: flex;
    display: -webkit-flex;
    .wing_list-l-img {
      display: flex;
      display: -webkit-flex;
      align-items: center;
      -webkit-align-items: center;
      img{
        width .5rem
        height .56rem
        margin-right .2rem
      }
    }
    .wing_list-l-con {
      .wing_list-l-con-t {
        padding-bottom: .1rem;
        color #323232
      }
      .wing_list-l-con-b {
        padding-top: .1rem;
        color #989898
      }
    }
  }
  .wing_list-r {
    color: #ef100f;
  }
  .user-id{
    width: 2.1rem;
    height: 0.36rem;
    display: block;
    text-align: left;
    float: left;
    /*font-size: 0.12rem;*/
    color: #222222;
    font-weight: normal;
  }
  .user-prize{
    width: 2.6rem;
    height: 0.36rem;
    display: block;
    text-align: left;
    float: left;
    /*font-size: 0.12rem;*/
    color: #d93f30;
    font-weight: normal;
  }

  .prize-classification{
    width:2.1rem;
    height: 0.36rem;
    display: block;
    text-align: right;
    float: right;
    /*font-size: 0.12rem;*/
    color: #222222;
    font-weight: normal;
  }

    // 主页分布引导

  .home .home-guide{
      position: fixed;
      top:0;
      right:0;
      left: 0;
      bottom: 0;
      background: rgba(0,0,0, .7);
      z-index: 100;
      overflow:hidden;
      
  }

//   html,body{
//       height:100%;
//       overflow:hidden;
//   }
    // 注册登录
 .home-guide .first-step{
     width:100%;
     min-height: 5rem;
     background: url('../../images/home_guide/login_reg_guide.png') no-repeat center / 80% ;
     margin-top:0.5rem;
  }
 .home-guide .second-step{
     width:100%;
     min-height: 5rem;
     background: url('../../images/home_guide/lottoly_guide.png') no-repeat center / 80% ;
     margin-top:0.5rem;
  }

 .home-guide-header{
     height:0.88rem;
     width: 2.2rem;
     position: fixed;
     top: 0;
     left:0;
      border: 1.5px dashed #fff;
      border-radius 20px;
      z-index 999;
      line-height: 0.88rem;
      text-align: center;
      font-size: 0.36rem;
      color: #fff;
      background: #ff3a3b;
 }
    // 开奖
 .home-guide-header-1{

     height:0.88rem;
     width: 1rem;
     background: #ff3a3b;
     position: fixed;
     top:0;
     right:1rem;
     border: 1.5px dashed #fff;
     z-index: 999;
     font-size: 0.36rem;
     text-align: center;
     line-height: 0.88rem;
     border-radius: 20px;
     color: #fff;
 }

    // 优惠活动


 .home-guide-active{
    width:20%;
    height: 1.5rem;
    position: fixed;
    padding-top:0.1rem;
    box-sizing:border-box;
    top:40%;
    right:21%;
    border-radius: 20px;
    border: 1.5px dashed #bbb;
 }

 .home-guide-active > div , .home-guide-online >div{
     width:100%;
     height:100%;
     background: #fff;
     border-radius: 20px;
     margin-top: -0.05rem;
 }

 .home-guide-active img{
     display: block;
     width: 0.8rem;
     height: 0.8rem;
     margin: 0 auto;
 }

 .home-guide-active span, .home-guide-online span{
     display: inline-block;
     width:100%;
     height:0.5rem;
     line-height:0.5rem;
     font-size: 0.3rem;
     text-align: center;
     color: #222;
 }
 .third-step{
     width:80%;
     min-height: 5rem;
     background: url('../../images/home_guide/active_guide.png') no-repeat center / 100% ;
     margin-top:5.5rem;
 }
    // 在线客服
 .home-guide-online{
        width:20%;
        height: 1.5rem;
        position: fixed;
        padding-top:0.1rem;
        box-sizing:border-box;
        top:40%;
        right:1%;
        border-radius: 20px;
        border: 1.5px dashed #bbb;
 }

  .home-guide-online img{
     display: block;
     width: 0.8rem;
     height: 0.8rem;
     margin: 0 auto;
 }

//  在线客服

 .fourth-step{
     margin-left:20%;
     width:80%;
     min-height: 5rem;
     background: url('../../images/home_guide/online_guide.png') no-repeat center / 100% ;
     margin-top:5.5rem;
 }

//  热门彩种

.home-guide-final {
    display:flex;
    width:100%;
    // position:absolute;
    position:fixed;
    top: 1.5rem;
    // margin-top:1.5rem;
}
.home-guide-final > div{
    flex: 1;
    display:flex;
    background: #fff;
    height: 1.8rem;
    align-items: center;
}
.home-guide-final > div:nth-child(1){
    border-right:1px solid #ddd;
} 

.home-guide-final > div img{
    display:block;
    width:1.06rem;
    height:1.06rem;
    border-radius: 50%;
    margin: 0.25rem;
}

.home-guide-final > div h2 {
    font-weight: 0;
    font-size:0.3rem;
    color: #323232;
}
.home-guide-final > div p {
    font-weight: 0;
    font-size:0.26rem;
    color: #555;
    height:0.36rem;
    line-height:0.36rem;
    margin-top: 0.4rem;
}

.fifth-step {
     width:100%;
     min-height: 5rem;
     background: url('../../images/home_guide/a_lot_guide.png') no-repeat center / 80% ;
     margin-top:3rem;
}

body,html{
    height:100%;
    overflow:hidden;
}
</style>


