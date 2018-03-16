import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home/home'
import Notice from '@/components/notice/notice'
import Mobilesite from '@/components/mobilesite/mobilesite'
import Promotions from '@/components/promotions/promotions'
import Betcenter from '@/components/betcenter/betcenter'
import Trendpage from '@/components/trendpage/trendpage'
import Lottery from '@/components/lottery/lottery'
import Helpcenter from '@/components/helpcenter/helpcenter'
import Instructions from '@/components/instructions/instructions'
import SonLottery  from '@/components/lottery/SonLottery'
import RegContract from '@/components/topCommon/regContract'
// 导入走势图
import CQSSC  from '@/components/trendpage/CQSSC'
import FC3D  from '@/components/trendpage/FC3D'
import DLT  from '@/components/trendpage/DLT'
import BJPK10  from '@/components/trendpage/BJPK10'
import GD11X5  from '@/components/trendpage/GD11X5'
import XJSSC  from '@/components/trendpage/XJSSC'
import AHKS  from '@/components/trendpage/AHKS'
import JSKS  from '@/components/trendpage/JSKS'
import SSQ  from '@/components/trendpage/SSQ'
import PL3  from '@/components/trendpage/PL3'
import SFSSC  from '@/components/trendpage/SFSSC'
import SFPK10  from '@/components/trendpage/SFPK10'
import SD11X5  from '@/components/trendpage/SD11X5'
import TJSSC  from '@/components/trendpage/TJSSC'
import SH11X5  from '@/components/trendpage/SH11X5'
import JX11X5  from '@/components/trendpage/JX11X5'
import SHSSL  from '@/components/trendpage/SHSSL'
import GXKS  from '@/components/trendpage/GXKS'
import XY28  from '@/components/trendpage/XY28'
import BJ28  from '@/components/trendpage/BJ28'
import XGLHC  from '@/components/trendpage/XGLHC'
import JSLHC  from '@/components/trendpage/JSLHC'
import FFSSC  from '@/components/trendpage/FFSSC'
import JSPK10  from '@/components/trendpage/JSPK10'

// 导入活动页面
import DropPromo from '@/components/promotions/dropPromo.vue'
// 导入公告详情
import TopNoteDetail from '@/components/topCommon/topNoteDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'Home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
        path: '/notice',
        name: 'Notice',
        component: Notice
      },
      {
        path: '/mobilesite',
        name: 'Mobilesite',
        component: Mobilesite
      },
      {
        path: '/promotions',
        name: 'promotions',
        component: Promotions
      },
      {
        path: '/betcenter',
        name: 'Betcenter',
        component: Betcenter
      },
      {
        path: '/trendpage',
        name: 'Trendpage',
        component: Trendpage
      },

    //  走势图

      {
        path: '/CQSSC/:lot_type_id',
        name: 'CQSSC',
        component: CQSSC
      },
      {
        path: '/FC3D/:lot_type_id',
        name: 'FC3D',
        component: FC3D
      },
      {
        path: '/DLT/:lot_type_id',
        name: 'DLT',
        component: DLT
      },
      {
        path: '/BJPK10/:lot_type_id',
        name: 'BJPK10',
        component: BJPK10
      },
      {
        path: '/GD11X5/:lot_type_id',
        name: 'GD11X5',
        component: GD11X5
      },
      {
        path: '/XJSSC/:lot_type_id',
        name: 'XJSSC',
        component: XJSSC
      },
      {
        path: '/AHKS/:lot_type_id',
        name: 'AHKS',
        component: AHKS
      },
      {
        path: '/JSKS/:lot_type_id',
        name: 'JSKS',
        component: JSKS
      },
      {
        path: '/SSQ/:lot_type_id',
        name: 'SSQ',
        component: SSQ
      },
      {
        path: '/PL3/:lot_type_id',
        name: 'PL3',
        component: PL3
      },
      {
        path: '/SFSSC/:lot_type_id',
        name: 'SFSSC',
        component: SFSSC
      },
      {
        path: '/SFPK10/:lot_type_id',
        name: 'SFPK10',
        component: SFPK10
      },
      {
        path: '/SD11X5/:lot_type_id',
        name: 'SD11X5',
        component: SD11X5
      },
      {
        path: '/TJSSC/:lot_type_id',
        name: 'TJSSC',
        component: TJSSC
      },
      {
        path: '/SH11X5/:lot_type_id',
        name: 'SH11X5',
        component: SH11X5
      },
      {
        path: '/JX11X5/:lot_type_id',
        name: 'JX11X5',
        component: JX11X5
      },
      {
        path: '/SHSSL/:lot_type_id',
        name: 'SHSSL',
        component: SHSSL
      },
      {
        path: '/GXKS/:lot_type_id',
        name: 'GXKS',
        component: GXKS
      },
      {
        path: '/XY28/:lot_type_id',
        name: 'XY28',
        component: XY28
      },
      {
        path: '/BJ28/:lot_type_id',
        name: 'BJ28',
        component: BJ28
      },
      {
        path: '/XGLHC/:lot_type_id',
        name: 'XGLHC',
        component: XGLHC
      },
      {
        path: '/JSLHC/:lot_type_id',
        name: 'JSLHC',
        component: JSLHC
      },
      {
        path: '/FFSSC/:lot_type_id',
        name: 'FFSSC',
        component: FFSSC
      },
      {
        path: '/JSPK10/:lot_type_id',
        name: 'JSPK10',
        component: JSPK10
      },
// -----------------------------------
      {
        path: '/lottery',
        name: 'Lottery',
        component: Lottery
      },
      {
        path: '/helpcenter',
        name: 'Helpcenter',
        component: Helpcenter
      },
      {
        path: '/instructions/:code/:pan',
        name: 'Instructions',
        component: Instructions
      },
      {
        path: '/lottery/:lot_type_id/:code',
        name: 'SonLottery',
        component: SonLottery
      },

    //   注册协议
      {
        path: '/regContract',
        name: 'RegContract',
        component: RegContract
      },


    //   活动页面详情
      {
        path: '/detail_poromo/:id',
        name: 'DropPromo',
        component: DropPromo
      },

    //   公告页面详情
      {
        path: '/topNoteDetail/',
        name: 'TopNoteDetail',
        component: TopNoteDetail
      },


    
  ]
})
