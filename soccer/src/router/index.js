import Vue from 'vue'
import Router from 'vue-router'
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1);
}
import Home from '@/components/home/home'
import SysMessage from '@/components/home/sysMessage'
import Help from '@/components/home/help'
import Casino from '@/components/home/casino'
import Service from '@/components/home/service'

import Score from '@/components/score/score'
import ScoreBall from '@/components/score/scoreBall'
import ScoreContent from '@/components/score/scoreContent'
import ScoreBallContent from '@/components/score/scoreBallContent'

//猜球
import GuessBall from '@/components/guessBall/guessBall'
import Bodan from '@/components/guessBall/bodan'
import Duying from '@/components/guessBall/duying'
import Guanjun from '@/components/guessBall/guanjun'
import Shaiguo from '@/components/guessBall/shaiguo'
import Zonghe from '@/components/guessBall/zonghe'
import Zongruqiu from '@/components/guessBall/zongruqiu'
import Quanbanchang from '@/components/guessBall/quanbanchang'

import BasketDuying from '@/components/guessBall/duying-basket'
import BasketDuyingMt from '@/components/guessBall/duying-basketMt'
import BasketDuyingMtzh from '@/components/guessBall/duying-basketMtzh'

import FootDetails from '@/components/guessBall/footDetails'
import BasketDetails from '@/components/guessBall/basketDetails'



import Discount from '@/components/discount/discount'
import DiscountActive from '@/components/discount/discountActive'

//个人中心
import MyCenter from '@/components/myCenter/myCenter' 
import MyInfo from '@/components/myCenter/myInfo' 
import Recharge from '@/components/myCenter/recharge'
import RechargeInfo from '@/components/myCenter/rechargeInfo'
import RechargeSuccess from '@/components/myCenter/rechargeSuccess'
import RechargeConfrim from '@/components/myCenter/rechargeConfrim'
import TakeMoney from '@/components/myCenter/takeMoney'
import BindCard from '@/components/myCenter/bindCard'
import Setting from '@/components/myCenter/setting' 
import ModifyPassword from '@/components/myCenter/modifyPassword'
import ModifyTransactionPassword from '@/components/myCenter/modifyTransactionPassword'
import NoteRecord from '@/components/myCenter/noteRecord' 
import NoteRecordBall from '@/components/myCenter/noteRecordBall'
import PresentRecord from '@/components/myCenter/presentRecord'
import InvitingFriend from '@/components/myCenter/invitingFriend'
import InvitingAwards from '@/components/myCenter/invitingAwards'
import Feedback from '@/components/myCenter/feedback'

//设置其他
import Disclaimer from '@/components/myCenter/more/disclaimer'
import AboutApp from '@/components/myCenter/more/aboutApp'

//设置个人信息
import MyData from '@/components/myCenter/setInfo/myData'
//import SetName from '@/components/myCenter/setInfo/setName'
import SetAutograph from '@/components/myCenter/setInfo/setAutograph'
import SetImg from '@/components/myCenter/setInfo/setImg'
import Level from '@/components/myCenter/setInfo/level'

//登陆注册
import Login from '@/components/login/login'
//import Forget from '@/components/login/forget'
import Register from '@/components/login/register'
import Register1 from '@/components/login/register1'
//import RegisterPhone from '@/components/login/registerPhone'
import PlayRegister from '@/components/login/playRegister'
import Agreement from '@/components/login/agreement'




// ------------------------------------ gan jia 的路由-----------------------------------------------------------------------
import Agency from '@/components/myCenter/agency/agency'
import AgencyCode from '@/components/myCenter/agency/agencyCode'
import AgencyAdmin from '@/components/myCenter/agency/agencyAdmin'
import AgencyMoney from '@/components/myCenter/agency/agencyMoney'
import AgencySeach from '@/components/myCenter/agency/agencySeach'
import AgentInstruction from  '@/components/myCenter/agency/agentInstruction'
import FreeMoney from '@/components/myCenter/freeMoney/FreeMoney'
import BindAccount from '@/components/myCenter/freeMoney/bindAccount'
import BindPhone from '@/components/myCenter/freeMoney/Bindphone'
import RechargeRecord from '@/components/myCenter/rechargeRecord'
import MoneyDetailed from '@/components/myCenter/moneyDetailed'



Vue.use(Router)

export default new Router({
  routes: [
   	{path: '/',redirect: '/home'},
   	
   	/**
		 * ------------------------------------------------------------------
		 * 首页
		 * ------------------------------------------------------------------
		 */
    {path: '/home',component: Home, meta: {keepAlive: true}},//首页   
    {path: '/sysMessage',component: SysMessage}, //最新中奖榜  
    {path: '/help',component: Help}, //新手帮助
    {path: '/casino',component: Casino}, //娱乐场
    {path: '/service',component: Service},//在线客服
    	
		 
    /**
		 * ------------------------------------------------------------------
		 * 比分
		 * ------------------------------------------------------------------
		 */
		
    {path: '/score',component: Score,meta: {keepAlive: true}},
    {path: '/scoreBallContent',component: ScoreBallContent,},
    {path: '/scoreContent',component: ScoreContent},
    {path: '/scoreBall',component: ScoreBall,meta:{keepAlive: true}},


    /**
		 * ------------------------------------------------------------------
		 * 猜球
		 * ------------------------------------------------------------------
		 */    
    
    {
      path: '/guessball',
      component: GuessBall,
       children: [
        { path: 'roll-football-shaiguo', component: Shaiguo},
        { path: 'roll-football-duying', component: Duying},
        { path: 'roll-football-bodan', component: Bodan},
        { path: 'roll-football-zongruqiu', component: Zongruqiu},
        { path: 'roll-football-quanbanchang', component: Quanbanchang},      
        { path: 'roll-basketball-duying', component: BasketDuying},
        
        { path: 'today-football-shaiguo', component: Shaiguo},
        { path: 'today-football-duying', component: Duying},
        { path: 'today-football-bodan', component: Bodan},
        { path: 'today-football-zongruqiu', component: Zongruqiu},
        { path: 'today-football-quanbanchang', component: Quanbanchang},
        { path: 'today-football-zonghe', component: Zonghe},
        { path: 'today-football-guanjun', component: Guanjun},
        { path: 'today-basketball-duying', component: BasketDuyingMt},
        { path: 'today-basketball-zonghe', component: BasketDuyingMtzh},
        { path: 'today-basketball-guanjun', component: Guanjun},
        
        { path: 'morning-football-shaiguo', component: Shaiguo},
        { path: 'morning-football-duying', component: Duying},
        { path: 'morning-football-bodan', component: Bodan},
        { path: 'morning-football-zongruqiu', component: Zongruqiu},
        { path: 'morning-football-quanbanchang', component: Quanbanchang},
        { path: 'morning-football-zonghe', component: Zonghe},
        { path: 'morning-football-guanjun', component: Guanjun},
        { path: 'morning-basketball-duying', component: BasketDuyingMt},
        { path: 'morning-basketball-zonghe', component: BasketDuyingMtzh},
        { path: 'morning-basketball-guanjun', component: Guanjun},
       ]
    },
    {path: '/basketDetails',component: BasketDetails},
    {path: '/footDetails',component: FootDetails},



    /**
		 * ------------------------------------------------------------------
		 * 专享活动
		 * ------------------------------------------------------------------
		 */    
    {path: '/discount',component: Discount,meta: {keepAlive: true}},
    {path: '/discountActive',component: DiscountActive},
    


 		/**
		 * ------------------------------------------------------------------
		 * 个人中心
		 * ------------------------------------------------------------------
		 */ 
    {path: '/myCenter',component: MyCenter},//个人中心主页
   	{path: '/freeMoney',component: FreeMoney},//免费领币
    {path: '/bindPhone',component: BindPhone},//绑定手机号
    {path: '/bindAccount',component: BindAccount},//账户绑定  
    {path: '/rechargeRecord',component: RechargeRecord,}, //充值记录
    {path: '/moneyDetailed',component: MoneyDetailed}, // 账户明细   
    {path: '/myInfo',component: MyInfo},//我的消息
    
    //-----------------------充值-----------------------
    {path: '/recharge',component: Recharge,meta: {keepAlive: true}},
    {path: '/rechargeInfo',component: RechargeInfo},
    {path: '/rechargeSuccess',component: RechargeSuccess},
    {path: '/rechargeConfrim',component: RechargeConfrim},
    
    
     //-----------------------成为代理-----------------------
    {path: '/agency',component: Agency,},
    {path: '/agencyCode',component: AgencyCode},
    {path: '/agencyAdmin',component: AgencyAdmin},
    {path: '/agencyMoney',component: AgencyMoney},
    {path: '/agencySeach',component: AgencySeach},
		{path: '/agentInstruction',component: AgentInstruction},
		
		
		
    {path: '/noteRecord',component: NoteRecord},//投注记录足球
    {path: '/noteRecordBall',component: NoteRecordBall},//投注记录篮球
    {path: '/presentRecord',component: PresentRecord},//提现记录
    
    {path: '/takeMoney',component: TakeMoney,},//提现
    {path: '/bindCard',component: BindCard},//绑定银行卡
    
    
    //-----------------------更多设置-----------------------
    {path: '/setting',component: Setting},
    {path: '/modifyPassword',component: ModifyPassword},//修改登陆密码
    {path: '/modifyTransactionPassword',component: ModifyTransactionPassword},//修改交易密码
    {path: '/disclaimer',component: Disclaimer},//免责声明
    {path: '/aboutApp',component: AboutApp},//关于APP
    
    
    //-----------------------登陆注册-----------------------
    {path: '/login',component: Login},
    {path: '/register',component: Register},
    {path: '/register1',component: Register1},
//  {path: '/registerPhone',component: RegisterPhone},
//  {path: '/forget',component: Forget},
    {path: '/playRegister',component: PlayRegister},//游客登陆
    {path: '/agreement',component: Agreement},//注册协议
    
    
     //-----------------------个人资料-----------------------
    {path: '/myData',component: MyData},
//  {path: '/setName',component: SetName},//修改名字
    {path: '/setAutograph',component: SetAutograph},//修改签名
    {path: '/setImg',component: SetImg},//修改头像
    {path: '/level',component: Level},//用户等级
    {path: '/invitingFriend',component: InvitingFriend},//邀请好友
    {path: '/invitingAwards',component: InvitingAwards},//邀请领钱
    {path: '/feedback',component: Feedback},//意见反馈
   
  ]
})
