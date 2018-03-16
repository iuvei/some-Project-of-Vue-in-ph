import Vue from 'vue'
import Router from 'vue-router'


Vue.prototype.$goback = function () {
  this.$router.go(-1)
}
/*Vue.prototype.$goRoute = function (index) {
  this.$router.push(index)
}*/

const Home = (resolve) => {
  import('components/home/home').then((module) => {
    resolve(module)
  })
}
const Pcdandan = (resolve) => {
  import('components/lottery/pcdandan').then((module) => {
    resolve(module)
  })
}
const Lottery1 = (resolve) => {
  import('components/lottery/lottery1').then((module) => {
    resolve(module)
  })
}
const SLottery = (resolve) => {
  import('components/s-lottery/s-lottery').then((module) => {
    resolve(module)
  })
}
const Trend = (resolve) => {
  import('components/trend/trend').then((module) => {
    resolve(module)
  })
}
const Playing = (resolve) => {
  import('components/trend/playing').then((module) => {
    resolve(module)
  })
}
const Gameplay = (resolve) => {
  import('components/lottery/gameplay').then((module) => {
    resolve(module)
  })
}
const GameCache1 = (resolve) => {
  import('components/lottery/gameCache1').then((module) => {
    resolve(module)
  })
}

const betsDetail = (resolve) => {
  import('components/lottery/betsDetail').then((module) => {
    resolve(module)
  })
}
const Four = (resolve) => {
  import('components/trend/four').then((module) => {
    resolve(module)
  })
}
/*const Three = (resolve) => {
  import('components/trend/three').then((module) => {
    resolve(module)
  })
}*/
const Position = (resolve) => {
  import('components/trend/position').then((module) => {
    resolve(module)
  })
}
const Size = (resolve) => {
  import('components/trend/size').then((module) => {
    resolve(module)
  })
}
const Optional2 = (resolve) => {
  import('components/trend/optional-two').then((module) => {
    resolve(module)
  })
}
const Optional3 = (resolve) => {
  import('components/trend/optional-three').then((module) => {
    resolve(module)
  })
}
const Optional4 = (resolve) => {
  import('components/trend/optional-four').then((module) => {
    resolve(module)
  })
}
const Explain = (resolve) => {
  import('components/trend/explain').then((module) => {
    resolve(module)
  })
}
const TD = (resolve) => {
  import('components/trend/3d').then((module) => {
    resolve(module)
  })
}
const Array5 = (resolve) => {
  import('components/trend/array5').then((module) => {
    resolve(module)
  })
}
const Lotto = (resolve) => {
  import('components/trend/lotto').then((module) => {
    resolve(module)
  })
}
const BPick = (resolve) => {
  import('components/trend/b-pick').then((module) => {
    resolve(module)
  })
}
const GElection = (resolve) => {
  import('components/trend/g-election').then((module) => {
    resolve(module)
  })
}
const XColors = (resolve) => {
  import('components/trend/x-colors').then((module) => {
    resolve(module)
  })
}
const AFast = (resolve) => {
  import('components/trend/a-fast').then((module) => {
    resolve(module)
  })
}
const JFast = (resolve) => {
  import('components/trend/j-fast').then((module) => {
    resolve(module)
  })
}
const Chromosphere = (resolve) => {
  import('components/trend/chromosphere').then((module) => {
    resolve(module)
  })
}
const Array3 = (resolve) => {
  import('components/trend/array3').then((module) => {
    resolve(module)
  })
}
const SColors = (resolve) => {
  import('components/trend/s-colors').then((module) => {
    resolve(module)
  })
}
const SElection = (resolve) => {
  import('components/trend/s-election').then((module) => {
    resolve(module)
  })
}
const TColors = (resolve) => {
  import('components/trend/t-colors').then((module) => {
    resolve(module)
  })
}
const JElection = (resolve) => {
  import('components/trend/j-election').then((module) => {
    resolve(module)
  })
}
const Sizzler = (resolve) => {
  import('components/trend/sizzler').then((module) => {
    resolve(module)
  })
}
const GFast = (resolve) => {
  import('components/trend/g-fast').then((module) => {
    resolve(module)
  })
}
const HElection = (resolve) => {
  import('components/trend/h-election').then((module) => {
    resolve(module)
  })
}
const SPick = (resolve) => {
  import('components/trend/s-pick').then((module) => {
    resolve(module)
  })
}
const Lucky28 = (resolve) => {
  import('components/trend/lucky28').then((module) => {
    resolve(module)
  })
}
const Beijing28 = (resolve) => {
  import('components/trend/beijing28').then((module) => {
    resolve(module)
  })
}

const KKSix = (resolve) => {
  import('components/trend/kk-six').then((module) => {
    resolve(module)
  })
}
const MCenter = (resolve) => {
  import('components/m-center/m-center').then((module) => {
    resolve(module)
  })
}
const Login = (resolve) => {
  import('components/login/login').then((module) => {
    resolve(module)
  })
}
const Register = (resolve) => {
  import('components/login/register').then((module) => {
    resolve(module)
  })
}
const Forget = (resolve) => {
  import('components/login/forget').then((module) => {
    resolve(module)
  })
}
const Trial = (resolve) => {
  import('components/login/trial').then((module) => {
    resolve(module)
  })
}
const Agreement = (resolve) => {
  import('components/login/agreement').then((module) => {
    resolve(module)
  })
}
const List = (resolve) => {
  import('components/home/list').then((module) => {
    resolve(module)
  })
}
const Activities = (resolve) => {
  import('components/home/activities').then((module) => {
    resolve(module)
  })
}
const Personals = (resolve) => {
  import('components/m-center/personals').then((module) => {
    resolve(module)
  })
}
const Verification = (resolve) => {
  import('components/m-center/verification').then((module) => {
    resolve(module)
  })
}
const BCard = (resolve) => {
  import('components/m-center/b-card').then((module) => {
    resolve(module)
  })
}
const TPassword = (resolve) => {
  import('components/m-center/t-password').then((module) => {
    resolve(module)
  })
}
const RPassword = (resolve) => {
  import('components/m-center/r-password').then((module) => {
    resolve(module)
  })
}
const Winning = (resolve) => {
  import('components/m-center/winning').then((module) => {
    resolve(module)
  })
}
const Recharge = (resolve) => {
  import('components/m-center/recharge').then((module) => {
    resolve(module)
  })
}
const Account = (resolve) => {
  import('components/m-center/account').then((module) => {
    resolve(module)
  })
}
const Withdrawals = (resolve) => {
  import('components/m-center/withdrawals').then((module) => {
    resolve(module)
  })
}
const Betting = (resolve) => {
  import('components/b-record/betting').then((module) => {
    resolve(module)
  })
}
const BettingDetail = (resolve) => {
  import('components/b-record/betting-detail').then((module) => {
    resolve(module)
  })
}
const BettingChase = (resolve) => {
  import('components/b-record/betting-chase').then((module) => {
    resolve(module)
  })
}
const BettingCon = (resolve) => {
  import('components/b-record/betting-con').then((module) => {
    resolve(module)
  })
}
const Tolottery = (resolve) => {
  import('components/b-record/tolottery').then((module) => {
    resolve(module)
  })
}
const Haswinning = (resolve) => {
  import('components/b-record/haswinning').then((module) => {
    resolve(module)
  })
}
const Chasenumber = (resolve) => {
  import('components/b-record/chasenumber').then((module) => {
    resolve(module)
  })
}
const Cancelorder = (resolve) => {
  import('components/b-record/cancelorder').then((module) => {
    resolve(module)
  })
}
const Notwinning = (resolve) => {
  import('components/b-record/notwinning').then((module) => {
    resolve(module)
  })
}
const Tovoid = (resolve) => {
  import('components/b-record/tovoid').then((module) => {
    resolve(module)
  })
}
const Payment = (resolve) => {
  import('components/b-record/payment').then((module) => {
    resolve(module)
  })
}
const Cancel = (resolve) => {
  import('components/b-record/cancel').then((module) => {
    resolve(module)
  })
}
const Complete = (resolve) => {
  import('components/b-record/complete').then((module) => {
    resolve(module)
  })
}
const Void = (resolve) => {
  import('components/b-record/void').then((module) => {
    resolve(module)
  })
}
const Chase = (resolve) => {
  import('components/b-record/chase').then((module) => {
    resolve(module)
  })
}
const Programme = (resolve) => {
  import('components/b-record/programme').then((module) => {
    resolve(module)
  })
}
const More = (resolve) => {
  import('components/m-center/more').then((module) => {
    resolve(module)
  })
}
const WRecord = (resolve) => {
  import('components/m-center/w-record').then((module) => {
    resolve(module)
  })
}
const WDetailed = (resolve) => {
  import('components/m-center/w-detailed').then((module) => {
    resolve(module)
  })
}
const  RDetailed = (resolve) => {
  import('components/m-center/r-detailed').then((module) => {
    resolve(module)
  })
}
const  Record = (resolve) => {
  import('components/s-lottery/record').then((module) => {
    resolve(module)
  })
}
const  AAccount = (resolve) => {
  import('components/alltitle/a-account').then((module) => {
    resolve(module)
  })
}
const  ACharge = (resolve) => {
  import('components/alltitle/a-charge').then((module) => {
    resolve(module)
  })
}
const  AWithdrawals = (resolve) => {
  import('components/alltitle/a-withdrawals').then((module) => {
    resolve(module)
  })
}
const  ABetting = (resolve) => {
  import('components/alltitle/a-betting').then((module) => {
    resolve(module)
  })
}
const  AWinning = (resolve) => {
  import('components/alltitle/a-winning').then((module) => {
    resolve(module)
  })
}
const  Commission = (resolve) => {
  import('components/alltitle/commission').then((module) => {
    resolve(module)
  })
}
const  AOthers = (resolve) => {
  import('components/alltitle/a-others').then((module) => {
    resolve(module)
  })
}
/*充值子页面*/
const RechargeType = (resolve) => {
  import('components/r-type/recharge-type').then((module) => {
    resolve(module)
  })
}
const TransB = (resolve) => {
  import('components/r-type/trans-bank').then((module) => {
    resolve(module)
  })
}
const RConfirm = (resolve) => {
  import('components/r-type/r-confirm').then((module) => {
    resolve(module)
  })
}
// 代理中心
const AgentMid = (resolve) => {
  import('components/agent-mid/agent-mid').then((module) => {
    resolve(module)
  })
}
const AgentIns = (resolve) => {
  import('components/agent-mid/agent-ins').then((module) => {
    resolve(module)
  })
}
const LowerAcc = (resolve) => {
  import('components/agent-mid/lower-account').then((module) => {
    resolve(module)
  })
}
const userManage = (resolve) => {
  import('components/agent-mid/user-manage').then((module) => {
    resolve(module)
  })
}
const agentCommis = (resolve) => {
  import('components/agent-mid/agent-commission').then((module) => {
    resolve(module)
  })
}
const personalReports = (resolve) => {
  import('components/agent-mid/personal-reports').then((module) => {
    resolve(module)
  })
}
const BWithdraw = (resolve) => {
  import('components/r-type/b-withdraw').then((module) => {
    resolve(module)
  })
}
const ActMessage = (resolve) => {
  import('components/m-center/actMessage').then((module) => {
    resolve(module)
  })
}
//活动详情
const Activity = (resolve) => {
  import('components/home/activity').then((module) => {
    resolve(module)
  })
}
const PBPone = (resolve) => {
  import('components/m-center/p-bindphone').then((module) => {
    resolve(module)
  })
}
const PBBank = (resolve) => {
  import('components/m-center/p-bindbank').then((module) => {
    resolve(module)
  })
}
const WPlan = (resolve) => {
  import('components/m-center/w-plan').then((module) => {
    resolve(module)
  })
}
const RSuccess = (resolve) => {
  import('components/r-type/r-success').then((module) => {
    resolve(module)
  })
}
const Online = (resolve) => {
  import('components/home/online').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)

const router =  new Router({
  /*mode: 'history',*/
  base: '/',
  // saveScrollPosition: true,
  /*scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return {selector: to.hash}
      }
    }
  },*/
  routes: [
    {
      path: '/',
      // component:resolve => require(['@/components/home/home'],resolve),
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component:resolve => require(['@/components/home/home'],resolve),
      // component: Home,
      meta:{
        keepAlive: false,
      }
    },
    {
      path: '/pcdandan',
      component: Pcdandan,
      // component:resolve => require(['@/components/lottery/pcdandan'],resolve),
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/lottery1',
      name: 'lottery1',
      // component: Lottery1,
      component:resolve => require(['@/components/lottery/lottery1'],resolve),
      meta: {
        keepAlive: true
      }
    },
    //活动详情
    {
      path: '/activity/:id/:title',
      name: 'activity',
      component:resolve => require(['@/components/home/activity'],resolve),
      // component: Activity
    },
    {
      path: '/activities',
      name: 'activities',
      component:resolve => require(['@/components/home/activities'],resolve),
      // component: Activities
    },
    {
      path: '/s-lottery',
      // component:resolve => require(['@/components/s-lottery/s-lottery'],resolve),
      component: SLottery
    },
    {
      path: '/record/:id',
      // component:resolve => require(['@/components/s-lottery/record'],resolve),
      component: Record
    },
    {
      path: '/trend/:id',
      // component:resolve => require(['@/components/trend/trend'],resolve),
      component: Trend
    },
    {
      path: '/m-center',
      // component:resolve => require(['@/components/m-center/m-center'],resolve),
      component: MCenter
    },
    {
      path: '/login',
      name: 'login',
      component:resolve => require(['@/components/login/login'],resolve),
      // component: Login,
      meta:{
        auth: false // 这里设置，当前路由需要校验
      }
    },
    {
      path: '/register',
      // component:resolve => require(['@/components/login/register'],resolve),
      component: Register
    },
    {
      path: '/forget',
      // component:resolve => require(['@/components/login/forget'],resolve),
      component: Forget
    },
    {
      path: '/trial',
      name: 'trial',
      component:resolve => require(['@/components/login/trial'],resolve),
      // component: Trial
    },
    {
      path: '/agreement',
      // component:resolve => require(['@/components/login/agreement'],resolve),
      component: Agreement
    },
    {
      path: '/list',
      // component:resolve => require(['@/components/home/list'],resolve),
      component: List
    },
    {
      path: '/personals',
      // component:resolve => require(['@/components/m-center/personals'],resolve),
      component: Personals
    },
    {
      path: '/verification',
      // component:resolve => require(['@/components/m-center/verification'],resolve),
      component: Verification
    },
    {
      path: '/b-card',
      // component:resolve => require(['@/components/m-center/b-card'],resolve),
      component: BCard
    },
    {
      path: '/t-password',
      // component:resolve => require(['@/components/m-center/t-password'],resolve),
      component: TPassword
    },
    {
      path: '/r-password',
      // component:resolve => require(['@/components/m-center/r-password'],resolve),
      component: RPassword
    },
    {
      path: '/winning',
      // component:resolve => require(['@/components/m-center/winning'],resolve),
      component: Winning
    },
    {
      path: '/recharge',
      // component:resolve => require(['@/components/m-center/recharge'],resolve),
      component: Recharge
    },
    {
      path: '/account',
      // component:resolve => require(['@/components/m-center/account'],resolve),
      component: Account
    },
    {
      path: '/withdrawals',
      // component:resolve => require(['@/components/m-center/withdrawals'],resolve),
      component: Withdrawals
    },
    {
      path: '/more',
      // component:resolve => require(['@/components/m-center/more'],resolve),
      component: More
    },


    {
      path: '/betting/:orderID',
      name: 'betting',
      component:resolve => require(['@/components/b-record/betting'],resolve),
      // component: Betting,
      meta: {
        keepAlive: false,
       // requireAuth: true, //  添加该字段，表示进入这个路由是需要登录的
      }
    },
    { // 充值子页面 开始
      path: '/recharge-type',
      name: 'recharge-type',
      // component: RechargeType,
      component:resolve => require(['@/components/r-type/recharge-type'],resolve),
      meta: {
        keepAlive: true,
       // requireAuth: true
      }
    },
    {
      path: '/chase/:ord/:info',
      component:  Chase
    },
    /*{
      path: '/programme',
      component:  Programme
    },*/
    {
      path: '/w-record/:ord/:info',
      component:  WRecord
    },
    /*{
      path: '/playing',
      component:  Playing
    },
    {
      path: '/four',
      component:  Four
    },*/
    {
      path: '/gameplay/:code/:typeid/:pan',
      component:  Gameplay,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/gameCache1',
      component:  GameCache1,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/betsDetail/:code/:typeid/:pan',
      component:  betsDetail,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/size',
      component:  Size
    },
    /*{
      path: '/three',
      component:  Three
    },
    {
      path: '/position',
      component:  Position
    },
    {
      path: '/size',
      component:  Size
    },
    {
      path: '/optional2',
      component:  Optional2
    },
    {
      path: '/optional3',
      component:  Optional3
    },
    {
      path: '/optional4',
      component:  Optional4
    },*/
    {
      path: '/explain/:code/:pan/:name',
      component:  Explain
    },
    {
      path: '/online',
      component:  Online
    },
    {
      path: '/three-d/:id',
      component:  TD
    },
    {
      path: '/array5/:id',
      component:  Array5
    },
    {
      path: '/lotto/:id',
      component:  Lotto
    },
    {
      path: '/b-pick/:id',
      component:  BPick
    },
    {
      path: '/g-election/:id',
      component:  GElection
    },
    {
      path: '/x-colors/:id',
      component:  XColors
    },
    {
      path: '/a-fast/:id',
      component:  AFast
    },
    {
      path: '/j-fast/:id',
      component:  JFast
    },
    {
      path: '/chromosphere/:id',
      component:  Chromosphere
    },
    {
      path: '/array3/:id',
      component:  Array3
    },
    {
      path: '/s-colors/:id',
      component:  SColors
    },
    {
      path: '/s-election/:id',
      component:  SElection
    },
    {
      path: '/t-colors/:id',
      component:  TColors
    },
    {
      path: '/j-election/:id',
      component:  JElection
    },
    {
      path: '/sizzler/:id',
      component:  Sizzler
    },
    {
      path: '/g-fast/:id',
      component:  GFast
    },
    {
      path: '/h-election/:id',
      component:  HElection
    },
    {
      path: '/s-pick/:id',
      component:  SPick
    },
    {
      path: '/lucky28/:id',
      component:  Lucky28
    },
    {
      path: '/beijing28/:id',
      component:  Beijing28
    },
    {
      path: '/kk-six/:id',
      component:  KKSix
    },
    {
      path: '/r-detailed',
      component: RDetailed
    },
    {
      path: '/w-detailed',
      component:  WDetailed
    },
    {
      path: '/a-account',
      component: AAccount
    },
    {
      path: '/a-charge/:num',
      component: ACharge
    },
    {
      path: '/a-withdrawals/:num',
      component: AWithdrawals
    },
    {
      path: '/a-betting/:num',
      component: ABetting
    },
    {
      path: '/a-winning/:num',
      component: AWinning
    },
    {
      path: '/commission/:num',
      component: Commission
    },
    {
      path: '/a-others/:num',
      component:  AOthers
    },
    { // 充值子页面 开始
      path: '/recharge-type',
      component: RechargeType,
      meta: {
        keepAlive: true
      }
    },
    {
      // path: '/trans-bank/:bankNm/:bankAc/:person/:addr/:cash/:pay_id/:bank_id',
      path: '/trans-bank/:cash/:addr/:id/:addrid/:pay_id/:credential/:bankNm/:bankAc/:person',
      component: TransB
    },
    {
      // path: '/r-confirm/:userName/:phone/:cash/:msg/:addr/:remark/:id/:addrid/:pay_id/:bank_id',
      // path: '/r-confirm/:userName/:phone/:cash/:id/:addrid/:pay_id/:bank_id/',
      // '/r-confirm/:userName/:phone/:cash/:msg/:addr/:remark/:id/:addrid/:pay_id/:bank_id/:title/:credential',
      path: '/r-confirm/:cash/:addr/:id/:addrid/:pay_id/:title/:credential',
      component: RConfirm,
      meta: {
        keepAlive: false
      }
    },
    {// 代理中心子页面
      path: '/agent-mid',
      component: AgentMid
    },
    {
      path: '/agent-ins',
      component: AgentIns
    },
    {
      path: '/lower-account',
      component: LowerAcc
    },
    {
      path: '/user-manage',
      component: userManage
    },
    {
      path: '/agent-commission',
      component: agentCommis
    },
    {
      path: '/personal-reports',
      component: personalReports
    },
    {
      path: '/b-withdraw',
      component: BWithdraw
    },
    {
      path: '/actMessage',
      component: ActMessage,
      meta: {
       // requireAuth: true,
      }
    },
    {
      /*path: '/betting-detail/:obj/:qs',*/
      path: '/betting-detail/:qs',
      component: BettingDetail
    },
    {
      path: '/betting-chase/:ord/:info',
      component: BettingChase
    },
    {
      path: '/betting-con',
      component: BettingCon
    },
    {
      path: '/p-bindphone',
      component: PBPone
    },
    {
      path: '/p-bindbank',
      component: PBBank
    },
    {
      path: '/w-plan/:ord/:info',
      component: WPlan
    },
    {
      path: '/r-success/:cash',
      component: RSuccess
    },
    {
      path: '/mobile',
      component:resolve => require(['@/components/pc/mobile'],resolve),
    },
    {
      path: '/helpCenter',
      component:resolve => require(['@/components/m-center/helpCenter'],resolve),
    },
    {
      path: '/about',
      component:resolve => require(['@/components/m-center/about'],resolve),
    },
    {
      path: '/invcode',
      component:resolve => require(['@/components/login/registerVicode'],resolve),
    },
    {
      path: '/kkj-six/:id',
      component:resolve => require(['@/components/trend/kkj-six'],resolve),
    },
    {
      path: '/notice',
      component:resolve => require(['@/components/home/notice'],resolve),
    },
    {
      path: '/f-colors/:id',
      component:resolve => require(['@/components/trend/f-colors'],resolve),
    },
    {
      path: '/js-pick/:id',
      component:resolve => require(['@/components/trend/js-pick'],resolve),
    },
    {
      path: '/newplayrule',
      component:resolve => require(['@/components/lottery/newplayrule'],resolve),
    },
    {
      path: '/suggest',
      component:resolve => require(['@/components/m-center/suggest'],resolve),
    },
    {
      path: '/inviteAwards',
      component:resolve => require(['@/components/m-center/inviteAwards'],resolve),
    },
    {
      path: '/shareFriends',
      component:resolve => require(['@/components/m-center/shareFriends'],resolve),
    },
  ]
})

export default router
