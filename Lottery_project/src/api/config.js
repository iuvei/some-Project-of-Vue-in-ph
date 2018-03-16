export const commonParams = {
  g_tk: 1928093487,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

export const options = {
  param: 'jsonpCallback'
}

export const ERR_OK = 0

//  开发 development       生产 production
export const def_env =  'development'

export const api_ver = '0.9.0' // api 版本号

// 彩票提示信息
export const lottery_wining = '正在开奖'

// 首页轮播图 图片地址配置 imgUrls:
export const imgConfig = [{
    id:1,name: '',href: '',pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814205880772.png'
  }, {
    id:2,name: '',href: '',pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814234362608.png'
  }]

// 彩票类型
export const lotteryTypes = [{
    lot_type: '重庆时时彩',code: 'CQSSC', lot_type_id: 1,panflag: true, link:'trend'
    },{
    lot_type: '福彩3D',code: 'FC3D', lot_type_id: 2,panflag: false, link:'three-d'
    },{
    lot_type: '大乐透',code: 'DLT', lot_type_id: 4,panflag: false, link:'lotto'
    },{
    lot_type: '北京PK拾',code: 'BJPK10', lot_type_id: 5,panflag: true, link:'b-pick'
    },{
    lot_type: '广东11选5',code: 'GD11X5', lot_type_id: 6,panflag: false, link:'g-election'
    },{
    lot_type: '新疆时时彩',code: 'XJSSC', lot_type_id: 7,panflag: true, link:'x-colors'
    },{
    lot_type: '安徽快三',code: 'AHKS', lot_type_id: 8,panflag: false, link:'a-fast'
    },{
    lot_type: '江苏快三',code: 'JSKS', lot_type_id: 9,panflag: false, link:'j-fast'
    },{
    lot_type: '双色球',code: 'SSQ', lot_type_id: 10,panflag: false, link:'chromosphere'
    },{
    lot_type: '排列3',code: 'PL3', lot_type_id: 11,panflag: false, link:'array3'
    },{
    lot_type: '三分时时彩',code: 'SFSSC', lot_type_id: 13,panflag: true, link:'s-colors'
    },{
    lot_type: '三分PK10',code: 'SFPK10', lot_type_id: 14,panflag: true, link:'s-pick'
    },{
    lot_type: '山东11选5',code: 'SD11X5', lot_type_id: 15,panflag: false, link:'s-election'
    },{
    lot_type: '天津时时彩',code: 'TJSSC', lot_type_id: 16,panflag: true, link:'t-colors'
    },{
    lot_type: '上海11选5',code: 'SH11X5', lot_type_id: 17,panflag: false, link:'h-election'
    },{
    lot_type: '江西11选5',code: 'JX11X5', lot_type_id: 18,panflag: false, link:'j-election'
    },{
    lot_type: '上海时时乐',code: 'SHSSL', lot_type_id: 19,panflag: false, link:'sizzler'
    },{
    lot_type: '广西快三',code: 'GXKS', lot_type_id: 20,panflag: false, link:'g-fast'
    },{
    lot_type: '香港六合彩',code: 'XGLHC', lot_type_id: 23,panflag: false, link:'kk-six'
    },{
    lot_type: '幸运28',code: 'XY28', lot_type_id: 21,panflag: true, link:'lucky28'
    },{
    lot_type: '北京28',code: 'BJ28', lot_type_id: 22,panflag: true, link:'beijing28'
    },{
    lot_type: '极速六合彩',code: 'JSLHC', lot_type_id: 24,panflag: false, link:'kkj-six'
    },{
    lot_type: '分分时时彩',code: 'FFSSC', lot_type_id: 25,panflag: true, link:'f-colors'
    },{
    lot_type: '极速PK拾',code: 'JSPK10', lot_type_id: 26,panflag: true, link:'js-pick'
    }
]

// 首页轮播图跳转url
export const slideJump = {
  '1': { // 首页
    link: '/home'
  },
  '2': { // 购彩列表
    link: '/lottery1',
    '1': { // 重庆时时彩
      link: 'gameplay/CQSSC/1/1'
    },
    '13': { // 三分时时彩
      link: 'gameplay/SFSSC/13/1'
    },
    '5': { // 北京PK拾
      link: 'gameplay/BJPK10/5/1'
    },
    '14': { // 三分PK拾
      link: 'gameplay/SFPK10/14/1'
    },
    '22': { // 北京28
      link: 'gameplay/BJ28/22/1'
    },
    '21': { // 幸运28
      link: 'gameplay/XY28/21/1'
    },
    '23': { // 香港六合彩
      link: 'gameplay/XGLHC/23/1'
    },
    '2': { // 福彩3D
      link: 'gameplay/FC3D/2/1'
    },
    '7': { // 新疆时时彩
      link: 'gameplay/XJSSC/7/1'
    },
    '16': { // 天津时时彩
      link: 'gameplay/TJSSC/16/1'
    },
    '19': { // 上海时时乐
      link: 'gameplay/SHSSL/19/1'
    },
    '6': { // 广东11选5
      link: 'gameplay/GD11X5/6/1'
    },
    '15': { // 山东11选5
      link: 'gameplay/SD11X5/15/1'
    },
    '17': { // 上海11选5
      link: 'gameplay/SH11X5/17/1'
    },
    '18': { // 江西11选5
      link: 'gameplay/JX11X5/18/1'
    },
    '8': { // 安徽快三
      link: 'gameplay/AHKS/8/1'
    },
    '9': { // 江苏快三
      link: 'gameplay/JSKS/9/1'
    },
    '20': { // 广西快三
      link: 'gameplay/GXKS/20/1'
    },
    '11': { // 排列3
      link: 'gameplay/PL3/11/1'
    },
    '10': { // 双色球
      link: 'gameplay/SSQ/10/1'
    },
    '4': { // 大乐透
      link: 'gameplay/DLT/4/1'
    },
    '12': { // 排列5
      link: 'gameplay/PL5/12/1'
    },
  },
  '3': { // 开奖大厅
    link: '/s-lottery',
    '1': { // 重庆时时彩
      link: '/record/1'
    },
    '13': { // 三分时时彩
      link: '/record/13'
    },
    '5': { // 北京PK拾
      link: '/record/5'
    },
    '14': { // 三分PK拾
      link: '/record/14'
    },
    '22': { // 北京28
      link: '/record/22'
    },
    '21': { // 幸运28
      link: '/record/21'
    },
    '23': { // 香港六合彩
      link: '/record/23'
    },
    '2': { // 福彩3D
      link: '/record/2'
    },
    '7': { // 新疆时时彩
      link: '/record/7'
    },
    '16': { // 天津时时彩
      link: '/record/16'
    },
    '19': { // 上海时时乐
      link: '/record/19'
    },
    '6': { // 广东11选5
      link: '/record/6'
    },
    '15': { // 山东11选5
      link: 'record/15'
    },
    '17': { // 上海11选5
      link: '/record/17'
    },
    '18': { // 江西11选5
      link: '/record/18'
    },
    '8': { // 安徽快三
      link: '/record/8'
    },
    '9': { // 江苏快三
      link: '/record/9'
    },
    '20': { // 广西快三
      link: '/record/20'
    },
    '11': { // 排列3
      link: '/record/11'
    },
    '10': { // 双色球
      link: '/record/10'
    },
    '4': { // 大乐透
      link: '/record/4'
    },
    '12': { // 排列5
      link: '/record/12'
    },
  },
  '4': { // 走势
    link: '/trend/1',
    '1': { // 重庆时时彩
      link: '/trend/1'
    },
    '13': { // 三分时时彩
      link: '/s-colors/13'
    },
    '5': { // 北京PK拾
      link: '/b-pick/5'
    },
    '14': { // 三分PK拾
      link: '/s-pick/14'
    },
    '22': { // 北京28
      link: '/beijing28/22'
    },
    '21': { // 幸运28
      link: '/lucky28/21'
    },
    '23': { // 香港六合彩
      link: '/kk-six/23'
    },
    '2': { // 福彩3D
      link: '/three-d/2'
    },
    '7': { // 新疆时时彩
      link: '/x-colors/7'
    },
    '16': { // 天津时时彩
      link: '/t-colors/16'
    },
    '19': { // 上海时时乐
      link: '/sizzler/19'
    },
    '6': { // 广东11选5
      link: '/g-election/6'
    },
    '15': { // 山东11选5
      link: '/s-election/15'
    },
    '17': { // 上海11选5
      link: '/h-election/17'
    },
    '18': { // 江西11选5
      link: '/j-election/18'
    },
    '8': { // 安徽快三
      link: '/a-fast/8'
    },
    '9': { // 江苏快三
      link: '/j-fast/9'
    },
    '20': { // 广西快三
      link: '/g-fast/20'
    },
    '11': { // 排列3
      link: '/array3/11'
    },
    '10': { // 双色球
      link: '/chromosphere/10'
    },
    '4': { // 大乐透
      link: '/lotto/4'
    },
  },
  '5': { // 我的
    link: '/m-center'
  },
  '6': { // 活动
    link: '/activities'
    // 活动详情页 活动id 未知 无法配置
  },
  /*以下需要用户登录后才能跳转*/
  '7': { // 投注记录
    link: '/betting/0'
    // 投注记录没有详情接口 ，无法配置
  },
  '8': { // 中奖记录
    link: '/winning'
    // 中奖记录没有详情接口 ，无法配置
    /* 投注记录 和 中奖记录 是同一接口， 只是类型不同*/
  },
  '9': { // 账户明细
    link: '/a-account'
  },
  '10': { // 充值记录
    link: '/recharge'
  },
  '11': { // 提款记录
    link: '/withdrawals'
  },
  '12': { // 个人信息
    link: '/personals',
    '2': { // 绑定手机
      link: '/p-bindphone'
    },
    '3': { // 绑定银行卡
      link: '/b-card'
    },
    '4': { // 修改密码
      link: '/t-password'
    }
  },
  '13': { // 设置
    link: '/home'
  },
  '14': { // 充值
    link: '/recharge-type'
  },
  '15': { // 提现
    link: '/b-withdraw'
  },



}

// 彩票范围
export const lotteryRanges =  {
  ssq: [{ // 双色球
    type: '红球',
    className: 'b-red',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    }]
  }, {
    type: '蓝球',
    className: 'b-blue',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    }]
  }],
  dlt: [{ // 大乐透
    type: '红球',
    className: 'b-red',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    },{
      name: '34', val: 34, active: false
    },{
      name: '35', val: 35, active: false
    }]
  }, {
    type: '蓝球',
    className: 'b-blue',
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    }]
  }],
  lhc: [{
    type: '特码',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    },{
      name: '28', val: 28, active: false
    },{
      name: '29', val: 29, active: false
    },{
      name: '30', val: 30, active: false
    },{
      name: '31', val: 31, active: false
    },{
      name: '32', val: 32, active: false
    },{
      name: '33', val: 33, active: false
    },{
      name: '34', val: 34, active: false
    },{
      name: '35', val: 35, active: false
    },{
      name: '36', val: 36, active: false
    },{
      name: '37', val: 37, active: false
    },{
      name: '38', val: 38, active: false
    },{
      name: '39', val: 39, active: false
    },{
      name: '40', val: 40, active: false
    },{
      name: '41', val: 41, active: false
    },{
      name: '42', val: 42, active: false
    },{
      name: '43', val: 43, active: false
    },{
      name: '44', val: 44, active: false
    },{
      name: '45', val: 45, active: false
    },{
      name: '46', val: 46, active: false
    },{
      name: '47', val: 47, active: false
    },{
      name: '48', val: 48, active: false
    },{
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zm: [{
    type: '正码',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zyt: [{
    type: '正一特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zert: [{
    type: '正二特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zsant: [{
    type: '正三特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zst: [{
    type: '正四特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_boson_nowing: [{
    type: '自选不中',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zwt: [{
    type: '正五特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zlt: [{
    type: '正六特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing32: [{
    type: '三中二',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing3: [{
    type: '三全中',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing2: [{
    type: '二全中',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing2zt: [{
    type: '二中特',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing2tc: [{
    type: '特串',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_lm_wing4: [{
    type: '四全中',
    prams: [{
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }, {
      name: '11', val: 11, active: false
    }, {
      name: '12', val: 12, active: false
    }, {
      name: '13', val: 13, active: false
    }, {
      name: '14', val: 14, active: false
    }, {
      name: '15', val: 15, active: false
    }, {
      name: '16', val: 16, active: false
    }, {
      name: '17', val: 17, active: false
    }, {
      name: '18', val: 18, active: false
    }, {
      name: '19', val: 19, active: false
    }, {
      name: '20', val: 20, active: false
    }, {
      name: '21', val: 21, active: false
    }, {
      name: '22', val: 22, active: false
    }, {
      name: '23', val: 23, active: false
    }, {
      name: '24', val: 24, active: false
    }, {
      name: '25', val: 25, active: false
    }, {
      name: '26', val: 26, active: false
    }, {
      name: '27', val: 27, active: false
    }, {
      name: '28', val: 28, active: false
    }, {
      name: '29', val: 29, active: false
    }, {
      name: '30', val: 30, active: false
    }, {
      name: '31', val: 31, active: false
    }, {
      name: '32', val: 32, active: false
    }, {
      name: '33', val: 33, active: false
    }, {
      name: '34', val: 34, active: false
    }, {
      name: '35', val: 35, active: false
    }, {
      name: '36', val: 36, active: false
    }, {
      name: '37', val: 37, active: false
    }, {
      name: '38', val: 38, active: false
    }, {
      name: '39', val: 39, active: false
    }, {
      name: '40', val: 40, active: false
    }, {
      name: '41', val: 41, active: false
    }, {
      name: '42', val: 42, active: false
    }, {
      name: '43', val: 43, active: false
    }, {
      name: '44', val: 44, active: false
    }, {
      name: '45', val: 45, active: false
    }, {
      name: '46', val: 46, active: false
    }, {
      name: '47', val: 47, active: false
    }, {
      name: '48', val: 48, active: false
    }, {
      name: '49', val: 49, active: false
    }]
  }],
  lhc_zm_qt: [{
    type: '正码',
    prams: [{
      name: '总大', val: 1, active: false
    }, {
      name: '总小', val: 2, active: false
    }, {
      name: '总单', val: 3, active: false
    }, {
      name: '总双', val: 4, active: false
    }]
  }],
  lhc_zyt2: [{
    type: '正一特',
    prams: [{
      name: '正一大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正一小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正一单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正一双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正一合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正一合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正一红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正一蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正一绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zert2: [{
    type: '正二特',
    prams: [{
      name: '正二大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正二小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正二单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正二双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正二合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正二合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正二红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正二蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正二绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zsant2: [{
    type: '正三特',
    prams: [{
      name: '正三大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正三小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正三单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正三双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正三合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正三合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正三红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正三蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正三绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zst2: [{
    type: '正四特',
    prams: [{
      name: '正四大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正四小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正四单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正四双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正四合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正四合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正四红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正四蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正四绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zwt2: [{
    type: '正五特',
    prams: [{
      name: '正五大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正五小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正五单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正五双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正五合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正五合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正五红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正五蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正五绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zlt2: [{
    type: '正六特',
    prams: [{
      name: '正六大', val: 1, active: false,className: 'b-red'
    }, {
      name: '正六小', val: 2, active: false,className: 'b-red'
    }, {
      name: '正六单', val: 3, active: false,className: 'b-red'
    }, {
      name: '正六双', val: 4, active: false,className: 'b-red'
    }, {
      name: '正六合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '正六合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '正六红', val: 7, active: false,className: 'b-red'
    }, {
      name: '正六蓝', val: 8, active: false,className: 'b-blue'
    }, {
      name: '正六绿', val: 9, active: false,className: 'b-green'
    }]
  }],
  lhc_zm_one: [{
    type: '正码一',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  lhc_zm_two: [{
    type: '正码二',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  lhc_zm_three: [{
    type: '正码三',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  lhc_zm_four: [{
    type: '正码四',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  lhc_zm_five: [{
    type: '正码五',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  lhc_zm_six: [{
    type: '正码六',
    prams: [{
      name: '单码', val: 1, active: false,className: 'b-red'
    }, {
      name: '双码', val: 2, active: false,className: 'b-red'
    }, {
      name: '大码', val: 3, active: false,className: 'b-red'
    }, {
      name: '小码', val: 4, active: false,className: 'b-red'
    }, {
      name: '合单', val: 5, active: false,className: 'b-red'
    }, {
      name: '合双', val: 6, active: false,className: 'b-red'
    }, {
      name: '合大', val: 7, active: false,className: 'b-red'
    }, {
      name: '合小', val: 8, active: false,className: 'b-red'
    }, {
      name: '红波', val: 9, active: false,className: 'b-red'
    }, {
      name: '蓝波', val: 10, active: false,className: 'b-blue'
    }, {
      name: '绿波', val: 11, active: false,className: 'b-green'
    }, {
      name: '尾大', val: 12, active: false,className: 'b-red'
    }, {
      name: '尾小', val: 13, active: false,className: 'b-red'
    }]
  }],
  twoFirst:[{ // 前二直选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  twogroup:[{ // 二组选和值
    type: '和值',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    }]
  }],
  threeGroupSum:[{ // 组三和值
    type: '和值',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    }]
  }],
  sixGroupSum:[{ // 组六和值
    type: '和值',
    prams:[{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    }]
  }],
  threeStarGroup:[{ // 三组选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  directSelect:[{ // 直选和值
    type: '和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  fiveSelect: [{ // 五星
    type: '万位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fiveStar: [{ // 五星
    type: '第一位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第五位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fiveStars: [{ // 五星
    type: '万位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourStar: [{ // 四星
    type: '第一位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourStars: [{ // 四星
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarLast: [{ // 后三星
    type: '第三位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第四位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第五位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarLasts: [{ // 后三星
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarFirst: [{ // 前三星
    type: '第一位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第二位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '第三位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeStarFirsts: [{ // 前三星
    type: '万位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  fourSelect:[{ // 四星
      type: '千位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
      }]
    },{
      type: '百位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
      }]
    },{
      type: '十位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
    },{
      type: '个位',
      prams:[{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
  }],
  threeSelectLast: [{ // 后三直选复式
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeSelectFirst: [{ // 前三直选复式
    type: '万位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  twoStarFirst: [{ // 二星直选
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  twoStarLast: [{ // 二星后选
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  threeGroup: [{ // 组三
    type: '组三',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  sixGroup: [{ // 组六
    type: '组六',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  group24: [{ // 组选24
    type: '组选24',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  group1: [{ // 组选
    type: '组选',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  two1: [{ // 一码
    type: '一码',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  two2: [{ // 二码
    type: '二码',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  groupfour6: [{ // 前4组选6
    type: '二重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  groupfour12: [{ // 4组选12
    type: '二重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
      type: '单号',
      prams: [{
        name: '0', val: 0, active: false
      },{
        name: '1', val: 1, active: false
      },{
        name: '2', val: 2, active: false
      },{
        name: '3', val: 3, active: false
      },{
        name: '4', val: 4, active: false
      },{
        name: '5', val: 5, active: false
      },{
        name: '6', val: 6, active: false
      },{
        name: '7', val: 7, active: false
      },{
        name: '8', val: 8, active: false
      },{
        name: '9', val: 9, active: false
    }]
  }],
  groupfour4: [{ // 4组选4
    type: '三重号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '单号',
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  bigsmallFirst: [{ // 前二大小单双
    type: '万位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '千位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallLast: [{ // 后二大小单双
    type: '十位',
    code: 4,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    code: 5,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallFirst3s: [{ // 前三大小单双
    type: '百位',
    code: 3,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '十位',
    code: 4,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    code: 5,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallLast3: [// 后三大小单双
    {type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
    type: '十位',
    code: 4,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{type: '个位',
    code: 5,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  bigsmallFirst3s: [{ // 前三大小单双
    type: '万位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '千位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  },{
      type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst2: [// 前二大小单双
    {type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '十位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst2s: [// 前二大小单双
    {type: '万位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '千位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallFirst3: [// 前二大小单双
    {type: '万位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '千位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '百位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  bigsmallLast2: [// 后二大小单双
    {type: '十位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    },{
      type: '个位',
      prams: [{
        name: '大', val: 1, active: false
      }, {
        name: '小', val: 2, active: false
      }, {
        name: '单', val: 3, active: false
      }, {
        name: '双', val: 4, active: false
      }]
    }],
  optional1: [{ // 任选一中一
    type: '一中一',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional1: [{ // 任选一中一
    type: '一中一',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional22: [{ // 任选2中2
    type: '二中二',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional33: [{ // 任选3中3
    type: '三中三',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional44: [{ // 任选4中4
    type: '四中四',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional55: [{ // 任选5中5
    type: '五中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional65: [{ // 任选6中5
    type: '六中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optiona75: [{ // 任选7中5
    type: '七中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional85: [{ // 任选8中5
    type: '八中五',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3m: [{ // 11 5 3码
    type: '第一位',
    code: 1,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第二位',
    code: 2,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第三位',
    code: 3,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalGroup: [{ // 11 5 组选
    type: '组选',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalGroupDT: [{ // 11 5 胆拖
    type: '胆码',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '拖码',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3mid: [{ // 11 5 中三直选复式
    type: '第二位',
    code: 2,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第三位',
    code: 3,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第四位',
    code: 4,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional3Last: [{ // 11 5 后三直选复式
    type: '第三位',
    code: 3,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第四位',
    code: 4,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第五位',
    code: 5,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional2m: [{ // 11 5 二码
    type: '第一位',
    code: 1,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第二位',
    code: 2,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optional2Last: [{ // 11 5 二码
    type: '第四位',
    code: 4,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第五位',
    code: 5,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3f: [{ // 11 5 不定位 前3位
    type: '前三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3m: [{ // 11 5 不定位 中3位
    type: '中三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalNopos3l: [{ // 11 5 不定位 后3位
    type: '后三位',
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  optionalPos: [{// 11 5 定位胆
    type: '第一位',
    code: 1,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
    }, {
    type: '第二位',
    code: 2,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }, {
    type: '第三位',
    code: 3,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第四位',
    code: 4,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  },{
    type: '第五位',
    code: 5,
    prams: [{
      name: '01', val: '01', active: false
    },{
      name: '02', val: '02', active: false
    },{
      name: '03', val: '03', active: false
    },{
      name: '04', val: '04', active: false
    },{
      name: '05', val: '05', active: false
    },{
      name: '06', val: '06', active: false
    },{
      name: '07', val: '07', active: false
    },{
      name: '08', val: '08', active: false
    },{
      name: '09', val: '09', active: false
    },{
      name: '10', val: '10', active: false
    },{
      name: '11', val: '11', active: false
    }]
  }],
  sscPos: [{// 时时彩 定位胆
    type: '万位',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '千位',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }, {
    type: '百位',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '十位',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  },{
    type: '个位',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    }]
  }],
  quick3Sum:[{ // 快三  和值
    type: '和值',
    prams:[{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    }]
  }],
  quick3Samet:[{ // 快三
    type: '号码',
    prams:[{
      name: '三同号通选', val: 1, className: 'sqrt', active: false
    }]
  }],
  quick3lh:[{ // 快三
    type: '号码',
    prams:[{
      name: '三连号通选', val: 1, className: 'sqrt', active: false
    }]
  }],
  quick3Samed:[{ // 快三
    type: '号码',
    prams:[{
      name: '111', val: '111', active: false
    },{
      name: '222', val: '222', active: false
    },{
      name: '333', val: '333', active: false
    },{
      name: '444', val: '444', active: false
    },{
      name: '555', val: '555', active: false
    },{
      name: '666', val: '666', active: false
    }]
  }],
  quick32th:[{ // 快三
    type: '号码',
    prams:[{
      name: '11', val: '11', active: false
    },{
      name: '22', val: '22', active: false
    },{
      name: '33', val: '33', active: false
    },{
      name: '44', val: '44', active: false
    },{
      name: '55', val: '55', active: false
    },{
      name: '66', val: '66', active: false
    }]
  }],
  quick32bth:[{ // 快三
    type: '同号',
    prams:[{
      name: '11', val: '11', active: false
    },{
      name: '22', val: '22', active: false
    },{
      name: '33', val: '33', active: false
    },{
      name: '44', val: '44', active: false
    },{
      name: '55', val: '55', active: false
    },{
      name: '66', val: '66', active: false
    }]
  },{
    type: '不同号',
    prams:[{
      name: '1', val: '1', active: false
    },{
      name: '2', val: '2', active: false
    },{
      name: '3', val: '3', active: false
    },{
      name: '4', val: '4', active: false
    },{
      name: '5', val: '5', active: false
    },{
      name: '6', val: '6', active: false
    }]
  }],
  quick3normal:[{ // 快三
    type: '标准',
    prams:[{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    }]
  }],
  quick3DT:[{ // 快三
    type: '胆码',
    prams:[{
      name: '1', val: '1', active: false
    },{
      name: '2', val: '2', active: false
    },{
      name: '3', val: '3', active: false
    },{
      name: '4', val: '4', active: false
    },{
      name: '5', val: '5', active: false
    },{
      name: '6', val: '6', active: false
    }]
  }, {
    type: '拖码',
    prams:[{
      name: '1', val: '1', active: false
    },{
      name: '2', val: '2', active: false
    },{
      name: '3', val: '3', active: false
    },{
      name: '4', val: '4', active: false
    },{
      name: '5', val: '5', active: false
    },{
      name: '6', val: '6', active: false
    }]
  }],
  PK10nopos: [{
    type: '冠军',
    code: 1,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    code: 2,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '季军',
    code: 3,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第四名',
    code: 4,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第五名',
    code: 5,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第六名',
    code: 6,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第七名',
    code: 7,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第八名',
    code: 8,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第九名',
    code: 9,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第十名',
    code: 10,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10first: [{
    type: '冠军',
    code: 1,
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10second: [{
    type: '冠军',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    prams: [{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10third: [{
    type: '冠军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  },{
    type: '季军',
    prams: [{
      name: '01', val: 1, active: false
    }, {
      name: '02', val: 2, active: false
    }, {
      name: '03', val: 3, active: false
    }, {
      name: '04', val: 4, active: false
    }, {
      name: '05', val: 5, active: false
    }, {
      name: '06', val: 6, active: false
    }, {
      name: '07', val: 7, active: false
    }, {
      name: '08', val: 8, active: false
    }, {
      name: '09', val: 9, active: false
    }, {
      name: '10', val: 10, active: false
    }]
  }],
  PL5DXDS:[{ // 大小单双
    type: '第一位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第二位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  PL5DXDS2:[{ // 大小单双
    type: '第四位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第五位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  PL5DXDS1:[{ // 大小单双
    type: '第一位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第二位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第三位',
    code: 3,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  PL5DXDS22:[{ // 大小单双
    type: '第三位',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第四位',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第五位',
    code: 3,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  doubleDisk: [{ // 两面盘
    type: '总和龙虎',
    code: 0,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }, {
      name: '和', val: 7, active: false
    }]
  }, {
    type: '第一球',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第二球',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第三球',
    code: 3,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第四球',
    code: 4,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第五球',
    code: 5,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  doubleDiskDrog:[{ 
    // 两面盘 - 龙虎
    type: '选位',
    prams: [{
      name: '万', val: 1, active: false
    }, {
      name: '千', val: 2, active: false
    }, {
      name: '百', val: 3, active: false
    }, {
      name: '十', val: 4, active: false
    }, {
      name: '个', val: 5, active: false
    }]
  }, {
  type: '龙虎和',
    prams: [{
      name: '龙', val: 1, active: false
    }, {
      name: '虎', val: 2, active: false
    }, {
      name: '和', val: 3, active: false
    }]
  }],

    // 顺子
  doubleShunZi_qian3:[
        {
            type: '前三',
            code: 1,
            prams: [
                {
                    name: '豹子',
                    val: 1,
                    active: false
                }, {
                    name: '顺子',
                    val: 2,
                    active: false
                }, {
                    name: '对子',
                    val: 3,
                    active: false
                }, {
                    name: '半顺',
                    val: 4,
                    active: false
                }, {
                    name: '杂六',
                    val: 5,
                    active: false
                }
            ]
        }
  ],
  doubleShunZi_zhong3:[
        {
            type: '中三',
            code: 2,
            prams: [
                {
                    name: '豹子',
                    val: 1,
                    active: false
                }, {
                    name: '顺子',
                    val: 2,
                    active: false
                }, {
                    name: '对子',
                    val: 3,
                    active: false
                }, {
                    name: '半顺',
                    val: 4,
                    active: false
                }, {
                    name: '杂六',
                    val: 5,
                    active: false
                }
            ]
        }
  ],
  doubleShunZi_hou3:[
        {
            type: '后三',
            code : 3,
            prams: [
                {
                    name: '豹子',
                    val: 1,
                    active: false
                }, {
                    name: '顺子',
                    val: 2,
                    active: false
                }, {
                    name: '对子',
                    val: 3,
                    active: false
                }, {
                    name: '半顺',
                    val: 4,
                    active: false
                }, {
                    name: '杂六',
                    val: 5,
                    active: false
                }
            ]
        }
  ],
    // 斗牛
  doublueDouNiu:[
        {
            type: '牛牛',
            prams: [
                {
                    name: '无牛',
                    val: 10,
                    active: false
                }, {
                    name: '牛一',
                    val: 1,
                    active: false
                }, {
                    name: '牛三',
                    val: 3,
                    active: false
                }, {
                    name: '牛四',
                    val: 4,
                    active: false
                },
                {
                    name: '牛五',
                    val: 5,
                    active: false
                },
                {
                    name: '牛六',
                    val: 6,
                    active: false
                },
                {
                    name: '牛七',
                    val: 7,
                    active: false
                },
                {
                    name: '牛八',
                    val: 8,
                    active: false
                },
                {
                    name: '牛九',
                    val: 9,
                    active: false
                },
                {
                    name: '牛牛',
                    val: 0,
                    active: false
                },

            ]
        }
  ],
   

  PK10thirdB:[{ // 两面盘
    type: '冠军',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }]
  }, {
    type: '亚军',
    code: 2,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }]
  }, {
    type: '季军',
    code: 3,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }]
  }, {
    type: '第四名',
    code: 4,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }]
  }, {
    type: '第五名',
    code: 5,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '龙', val: 5, active: false
    }, {
      name: '虎', val: 6, active: false
    }]
  }, {
    type: '第六名',
    code: 6,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第七名',
    code: 7,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第八名',
    code: 8,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第九名',
    code: 9,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }, {
    type: '第十名',
    code: 10,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }]
  }],
  PK10Boneten:[{
    type: '冠军',
    code: 1,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '亚军',
    code: 2,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第三名',
    code: 3,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第四名',
    code: 4,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第五名',
    code: 5,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第六名',
    code: 6,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第七名',
    code: 7,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第八名',
    code: 8,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第九名',
    code: 9,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  },{
    type: '第十名',
    code: 10,
    prams:[{
      name: '01', val: 1, active: false
    },{
      name: '02', val: 2, active: false
    },{
      name: '03', val: 3, active: false
    },{
      name: '04', val: 4, active: false
    },{
      name: '05', val: 5, active: false
    },{
      name: '06', val: 6, active: false
    },{
      name: '07', val: 7, active: false
    },{
      name: '08', val: 8, active: false
    },{
      name: '09', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    }]
  }],
  PK10Bsum:[{
    type: '冠亚军和',
    prams:[{
      name: '大', val: 1, active: false,code: 1
    },{
      name: '小', val: 2, active: false,code: 1
    },{
      name: '单', val: 3, active: false,code: 1
    },{
      name: '双', val: 4, active: false,code: 1
    },{
      name: '3', val: 3, active: false,code: 2
    },{
      name: '4', val: 4, active: false,code: 2
    },{
      name: '5', val: 5, active: false,code: 2
    },{
      name: '6', val: 6, active: false,code: 2
    },{
      name: '7', val: 7, active: false,code: 2
    },{
      name: '8', val: 8, active: false,code: 2
    },{
      name: '9', val: 9, active: false,code: 2
    },{
      name: '10', val: 10, active: false,code: 2
    },{
      name: '11', val: 11, active: false,code: 2
    },{
      name: '12', val: 12, active: false,code: 2
    },{
      name: '13', val: 13, active: false,code: 2
    },{
      name: '14', val: 14, active: false,code: 2
    },{
      name: '15', val: 15, active: false,code: 2
    },{
      name: '16', val: 16, active: false,code: 2
    },{
      name: '17', val: 17, active: false,code: 2
    },{
      name: '18', val: 18, active: false,code: 2
    },{
      name: '19', val: 19, active: false,code: 2
    }]
  }],
  one_five: [{ // 1-5球
    type: '第一球',
    code: 1,
    prams: [{
      name: '0', val: 0, active: false
    }, {
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }]
  }, {
    type: '第二球',
    code: 2,
    prams: [{
      name: '0', val: 0, active: false
    }, {
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }]
  }, {
    type: '第三球',
    code: 3,
    prams: [{
      name: '0', val: 0, active: false
    }, {
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }]
  }, {
    type: '第四球',
    code: 4,
    prams: [{
      name: '0', val: 0, active: false
    }, {
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }]
  }, {
    type: '第五球',
    code: 5,
    prams: [{
      name: '0', val: 0, active: false
    }, {
      name: '1', val: 1, active: false
    }, {
      name: '2', val: 2, active: false
    }, {
      name: '3', val: 3, active: false
    }, {
      name: '4', val: 4, active: false
    }, {
      name: '5', val: 5, active: false
    }, {
      name: '6', val: 6, active: false
    }, {
      name: '7', val: 7, active: false
    }, {
      name: '8', val: 8, active: false
    }, {
      name: '9', val: 9, active: false
    }]
  }],
  firMidLas: [{ // 前中后
    type: '前三',
    code: 1,
    prams: [{
      name: '豹子', val: 1, active: false
    }, {
      name: '顺子', val: 2, active: false
    }, {
      name: '对子', val: 3, active: false
    }, {
      name: '半顺', val: 4, active: false
    }, {
      name: '杂六', val: 5, active: false
    }]
  },{
    type: '中三',
    code: 2,
    prams: [{
      name: '豹子', val: 1, active: false
    }, {
      name: '顺子', val: 2, active: false
    }, {
      name: '对子', val: 3, active: false
    }, {
      name: '半顺', val: 4, active: false
    }, {
      name: '杂六', val: 5, active: false
    }]
  },{
    type: '后三',
    code: 3,
    prams: [{
      name: '豹子', val: 1, active: false
    }, {
      name: '顺子', val: 2, active: false
    }, {
      name: '对子', val: 3, active: false
    }, {
      name: '半顺', val: 4, active: false
    }, {
      name: '杂六', val: 5, active: false
    }]
  }],
  sumBF:[{ // 前 中 后和值
    type: '前和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  sumBM:[{ // 前 中 后和值
    type: '中和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  sumBL:[{ // 前 中 后和值
    type: '后和值',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  mixed: [{ // 28
    type: '混合',
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '大单', val: 5, active: false
    }, {
      name: '小单', val: 6, active: false
    }, {
      name: '大双', val: 7, active: false
    }, {
      name: '小双', val: 8, active: false
    }, {
      name: '极大', val: 9, active: false
    }, {
      name: '极小', val: 10, active: false
    }]
  }],
  code28:[{ // 28
    type: '特码',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  code28_3:[{ // 28
    type: '特码包三',
    prams:[{
      name: '0', val: 0, active: false
    },{
      name: '1', val: 1, active: false
    },{
      name: '2', val: 2, active: false
    },{
      name: '3', val: 3, active: false
    },{
      name: '4', val: 4, active: false
    },{
      name: '5', val: 5, active: false
    },{
      name: '6', val: 6, active: false
    },{
      name: '7', val: 7, active: false
    },{
      name: '8', val: 8, active: false
    },{
      name: '9', val: 9, active: false
    },{
      name: '10', val: 10, active: false
    },{
      name: '11', val: 11, active: false
    },{
      name: '12', val: 12, active: false
    },{
      name: '13', val: 13, active: false
    },{
      name: '14', val: 14, active: false
    },{
      name: '15', val: 15, active: false
    },{
      name: '16', val: 16, active: false
    },{
      name: '17', val: 17, active: false
    },{
      name: '18', val: 18, active: false
    },{
      name: '19', val: 19, active: false
    },{
      name: '20', val: 20, active: false
    },{
      name: '21', val: 21, active: false
    },{
      name: '22', val: 22, active: false
    },{
      name: '23', val: 23, active: false
    },{
      name: '24', val: 24, active: false
    },{
      name: '25', val: 25, active: false
    },{
      name: '26', val: 26, active: false
    },{
      name: '27', val: 27, active: false
    }]
  }],
  boson:[{ // 28
    type: '波色',
    prams: [{
      name: '红波', val: 1, active: false,className: 'b-red'
    },{
      name: '绿波', val: 2, active: false,className: 'b-green'
    },{
      name: '蓝波', val: 3, active: false,className: 'b-blue'
    }]
  }],
  leopard:[{ // 28
    type: '豹子',
    prams: [{
      name: '豹子', val: 1, active: false
    }]
  }],
  doubleDisk28:[{ // 28
    type: '双面',
    code: 1,
    prams: [{
      name: '大', val: 1, active: false
    }, {
      name: '小', val: 2, active: false
    }, {
      name: '单', val: 3, active: false
    }, {
      name: '双', val: 4, active: false
    }, {
      name: '大单', val: 5, active: false
    }, {
      name: '小单', val: 6, active: false
    }, {
      name: '大双', val: 7, active: false
    }, {
      name: '小双', val: 8, active: false
    }, {
      name: '极大', val: 9, active: false
    }, {
      name: '极小', val: 10, active: false
    }]
  },{
    type: '波色豹子',
    code:2,
    prams: [{
      name: '红波', val: 1, active: false,className: 'b-red'
    },{
      name: '蓝波', val: 2, active: false,className: 'b-blue'
    },{
      name: '绿波', val: 3, active: false,className: 'b-green'
    },{
      name: '豹子', val: 3, active: false,className: 'b-red'
    }]
  }],
  lhc_boson_server:[{
    type: '七色波',
    prams: [{
      name: '红波', val: 1, active: false,className: 'b-red'
    },{
      name: '绿波', val: 2, active: false,className: 'b-green'
    },{
      name: '蓝波', val: 3, active: false,className: 'b-blue'
    },{
      name: '和局', val: 4, active: false,className: 'b-red'
    }]
  }],
  lhc_boson_zong:[{
    type: '总肖',
    prams: [{
      name: '2肖', val: 1, active: false,className: 'b-red'
    },{
      name: '3肖', val: 2, active: false,className: 'b-red'
    },{
      name: '4肖', val: 3, active: false,className: 'b-red'
    },{
      name: '5肖', val: 4, active: false,className: 'b-red'
    },{
      name: '6肖', val: 5, active: false,className: 'b-red'
    },{
      name: '7肖', val: 6, active: false,className: 'b-red'
    },{
      name: '总肖单', val: 7, active: false,className: 'b-red'
    },{
      name: '总肖双', val: 8, active: false,className: 'b-red'
    }]
  }],
  lhc_boson:[{
    type: '色波',
    prams: [{
      name: '红波',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '02', val: '02'
      },{
        name: '07', val: '07'
      },{
        name: '08', val: '08'
      },{
        name: '12', val: '12'
      },{
        name: '13', val: '13'
      },{
        name: '18', val: '18'
      },{
        name: '19', val: '19'
      },{
        name: '23', val: '23'
      },{
        name: '24', val: '24'
      },{
        name: '29', val: '29'
      },{
        name: '30', val: '30'
      },{
        name: '34', val: '34'
      },{
        name: '35', val: '35'
      },{
        name: '40', val: '40'
      },{
        name: '45', val: '45'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '蓝波',
      val: 2,
      active: false,
      className: 'bd-blue',
      para: [{
        name: '03', val: '03'
      },{
        name: '04', val: '04'
      },{
        name: '09', val: '09'
      },{
        name: '10', val: '10'
      },{
        name: '14', val: '14'
      },{
        name: '15', val: '15'
      },{
        name: '20', val: '20'
      },{
        name: '25', val: '25'
      },{
        name: '26', val: '26'
      },{
        name: '31', val: '31'
      },{
        name: '36', val: '36'
      },{
        name: '37', val: '37'
      },{
        name: '41', val: '41'
      },{
        name: '42', val: '42'
      },{
        name: '47', val: '47'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '绿波',
      val: 3,
      active: false,
      className: 'bd-green',
      para: [{
        name: '05', val: '05'
      },{
        name: '06', val: '06'
      },{
        name: '11', val: '11'
      },{
        name: '16', val: '16'
      },{
        name: '17', val: '17'
      },{
        name: '21', val: '21'
      },{
        name: '22', val: '22'
      },{
        name: '27', val: '27'
      },{
        name: '28', val: '28'
      },{
        name: '32', val: '32'
      },{
        name: '33', val: '33'
      },{
        name: '38', val: '38'
      },{
        name: '39', val: '39'
      },{
        name: '43', val: '43'
      },{
        name: '44', val: '44'
      },{
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_boson2: [{
    type: '色波',
    prams: [{
      name: '红单', val: 1, active: false,className: 'b-red'
    },{
      name: '红双', val: 2, active: false,className: 'b-red'
    },{
      name: '红大', val: 3, active: false,className: 'b-red'
    },{
      name: '红小', val: 4, active: false,className: 'b-red'
    },{
      name: '蓝单', val: 5, active: false,className: 'b-blue'
    },{
      name: '蓝双', val: 6, active: false,className: 'b-blue'
    },{
      name: '蓝大', val: 7, active: false,className: 'b-blue'
    },{
      name: '蓝小', val: 8, active: false,className: 'b-blue'
    },{
      name: '绿单', val: 9, active: false,className: 'b-green'
    },{
      name: '绿双', val: 10, active: false,className: 'b-green'
    },{
      name: '绿大', val: 11, active: false,className: 'b-green'
    },{
      name: '绿小', val: 12, active: false,className: 'b-green'
    }]
  }],
  lhc_boson3: [{
    type: '色波',
      prams: [{
      name: '红大单', val: 1, active: false,className: 'b-red'
    },{
      name: '红大双', val: 2, active: false,className: 'b-red'
    },{
      name: '红小单', val: 3, active: false,className: 'b-red'
    },{
      name: '红小双', val: 4, active: false,className: 'b-red'
    },{
      name: '蓝大单', val: 5, active: false,className: 'b-blue'
    },{
      name: '蓝大双', val: 6, active: false,className: 'b-blue'
    },{
      name: '蓝小单', val: 7, active: false,className: 'b-blue'
    },{
      name: '蓝小双', val: 8, active: false,className: 'b-blue'
    },{
      name: '绿大单', val: 9, active: false,className: 'b-green'
    },{
      name: '绿大双', val: 10, active: false,className: 'b-green'
    },{
      name: '绿小单', val: 11, active: false,className: 'b-green'
    },{
      name: '绿小双', val: 12, active: false,className: 'b-green'
    }]
  }],
  lhc_boson4: [{
    type: '特码',
    prams: [{
      name: '特大', val: 1, active: false
    },{
      name: '特小', val: 2, active: false
    },{
      name: '特尾大', val: 3, active: false
    },{
      name: '特尾小', val: 4, active: false
    },{
      name: '特单', val: 5, active: false
    },{
      name: '特双', val: 6, active: false
    },{
      name: '特大单', val: 7, active: false
    },{
      name: '特大双', val: 8, active: false
    },{
      name: '特合大', val: 9, active: false
    },{
      name: '特合小', val: 10, active: false
    },{
      name: '特小单', val: 11, active: false
    },{
      name: '特小双', val: 12, active: false
    },{
      name: '特合单', val: 13, active: false
    },{
      name: '特合双', val: 14, active: false
    },{
      name: '特天肖', val: 15, active: false
    },{
      name: '特地肖', val: 16, active: false
    },{
      name: '特前肖', val: 17, active: false
    },{
      name: '特后肖', val: 18, active: false
    },{
      name: '特家肖', val: 19, active: false
    },{
      name: '特野肖', val: 20, active: false
    }]
  }],
  lhc_born:[{
    type: '特肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born2:[{
    type: '合肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_zs:[{
    type: '正肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_two:[{
    type: '二连肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_three:[{
    type: '三连肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_four:[{
    type: '四连肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_five:[{
    type: '五连肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born_pt:[{
    type: '平特一肖',
    prams: [{
      name: '鼠',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      },{
        name: '22', val: '22'
      },{
        name: '34', val: '34'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '牛',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      },{
        name: '21', val: '21'
      },{
        name: '33', val: '33'
      },{
        name: '45', val: '45'
      }]
    },{
      name: '虎',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      },{
        name: '20', val: '20'
      },{
        name: '32', val: '32'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '兔',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '19', val: '19'
      },{
        name: '31', val: '31'
      },{
        name: '43', val: '43'
      }]
    },{
      name: '龙',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      },{
        name: '18', val: '18'
      },{
        name: '30', val: '30'
      },{
        name: '42', val: '42'
      }]
    },{
      name: '蛇',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '17', val: '17'
      },{
        name: '29', val: '29'
      },{
        name: '41', val: '41'
      }]
    },{
      name: '马',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      },{
        name: '16', val: '16'
      },{
        name: '28', val: '28'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '羊',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '15', val: '15'
      },{
        name: '27', val: '27'
      },{
        name: '39', val: '39'
      }]
    },{
      name: '猴',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      },{
        name: '14', val: '14'
      },{
        name: '26', val: '26'
      },{
        name: '38', val: '38'
      }]
    },{
      name: '鸡',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '13', val: '13'
      },{
        name: '25', val: '25'
      },{
        name: '37', val: '37'
      },{
        name: '49', val: '49'
      }]
    },{
      name: '狗',
      val: 11,
      active: false,
      className: 'bd-red',
      para: [{
        name: '12', val: '12'
      },{
        name: '24', val: '24'
      },{
        name: '36', val: '36'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '猪',
      val: 12,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '23', val: '23'
      },{
        name: '35', val: '35'
      },{
        name: '47', val: '47'
      }]
    }]
  }],
  lhc_born5: [{
    type: '头尾数',
    prams: [{
      name: '0头', val: 1, active: false,className: 'b-red'
    },{
      name: '1头', val: 2, active: false,className: 'b-red'
    },{
      name: '2头', val: 3, active: false,className: 'b-red'
    },{
      name: '3头', val: 4, active: false,className: 'b-red'
    },{
      name: '4头', val: 5, active: false,className: 'b-red'
    },{
      name: '1尾', val: 6, active: false,className: 'b-red'
    },{
      name: '2尾', val: 7, active: false,className: 'b-red'
    },{
      name: '3尾', val: 8, active: false,className: 'b-red'
    },{
      name: '4尾', val:9, active: false,className: 'b-red'
    },{
      name: '5尾', val: 10, active: false,className: 'b-red'
    },{
      name: '6尾', val: 11, active: false,className: 'b-red'
    },{
      name: '7尾', val: 12, active: false,className: 'b-red'
    },{
      name: '8尾', val: 13, active: false,className: 'b-red'
    },{
      name: '9尾', val: 14, active: false,className: 'b-red'
    },{
      name: '0尾', val: 15, active: false,className: 'b-red'
    }]
  }],
  lhc_wx:[{
    type: '五行',
    prams: [{
      name: '金',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      },{
        name: '04', val: '04'
      },{
        name: '17', val: '17'
      },{
        name: '18', val: '18'
      },{
        name: '25', val: '25'
      },{
        name: '26', val: '26'
      },{
        name: '33', val: '33'
      },{
        name: '34', val: '34'
      },{
        name: '47', val: '47'
      },{
        name: '48', val: '48'
      }]
    },{
      name: '木',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      },{
        name: '08', val: '08'
      },{
        name: '15', val: '15'
      },{
        name: '16', val: '16'
      },{
        name: '29', val: '29'
      },{
        name: '30', val: '30'
      },{
        name: '37', val: '37'
      },{
        name: '38', val: '38'
      },{
        name: '45', val: '45'
      },{
        name: '46', val: '46'
      }]
    },{
      name: '水',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      },{
        name: '06', val: '06'
      },{
        name: '13', val: '11'
      },{
        name: '14', val: '16'
      },{
        name: '21', val: '21'
      },{
        name: '22', val: '22'
      },{
        name: '35', val: '32'
      },{
        name: '36', val: '33'
      },{
        name: '43', val: '43'
      },{
        name: '44', val: '44'
      }]
    },{
      name: '火',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      },{
        name: '02', val: '02'
      },{
        name: '09', val: '09'
      },{
        name: '10', val: '10'
      },{
        name: '23', val: '23'
      },{
        name: '24', val: '24'
      },{
        name: '31', val: '31'
      },{
        name: '32', val: '32'
      },{
        name: '39', val: '39'
      },{
        name: '40', val: '40'
      }]
    },{
      name: '土',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '11', val: '11'
      },{
        name: '12', val: '12'
      },{
        name: '19', val: '19'
      },{
        name: '20', val: '20'
      },{
        name: '27', val: '27'
      },{
        name: '28', val: '28'
      },{
        name: '41', val: '41'
      },{
        name: '42', val: '42'
      },{
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_born_ptw:[{
    type: '平特尾数',
    prams: [{
      name: '0尾',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      }, {
        name: '20', val: '20'
      }, {
        name: '30', val: '30'
      }, {
        name: '40', val: '40'
      }]
    }, {
      name: '1尾',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      }, {
        name: '11', val: '11'
      }, {
        name: '21', val: '21'
      }, {
        name: '31', val: '31'
      }, {
        name: '41', val: '41'
      }]
    }, {
      name: '2尾',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      }, {
        name: '12', val: '12'
      }, {
        name: '22', val: '22'
      }, {
        name: '32', val: '32'
      }, {
        name: '42', val: '42'
      }]
    }, {
      name: '3尾',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      }, {
        name: '13', val: '13'
      }, {
        name: '23', val: '23'
      }, {
        name: '33', val: '33'
      }, {
        name: '43', val: '43'
      }]
    }, {
      name: '4尾',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      }, {
        name: '14', val: '14'
      }, {
        name: '24', val: '24'
      }, {
        name: '34', val: '34'
      }, {
        name: '44', val: '44'
      }]
    }, {
      name: '5尾',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      }, {
        name: '15', val: '15'
      }, {
        name: '25', val: '25'
      }, {
        name: '35', val: '35'
      }, {
        name: '45', val: '45'
      }]
    }, {
      name: '6尾',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      }, {
        name: '16', val: '16'
      }, {
        name: '26', val: '26'
      }, {
        name: '36', val: '36'
      }, {
        name: '46', val: '46'
      }]
    }, {
      name: '7尾',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      }, {
        name: '17', val: '17'
      }, {
        name: '27', val: '27'
      }, {
        name: '37', val: '37'
      }, {
        name: '47', val: '47'
      }]
    }, {
      name: '8尾',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      }, {
        name: '18', val: '18'
      }, {
        name: '28', val: '28'
      }, {
        name: '38', val: '38'
      }, {
        name: '48', val: '48'
      }]
    }, {
      name: '9尾',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      }, {
        name: '19', val: '19'
      }, {
        name: '29', val: '29'
      }, {
        name: '39', val: '39'
      }, {
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_born_wtwo:[{
    type: '二连尾',
    prams: [{
      name: '0尾',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      }, {
        name: '20', val: '20'
      }, {
        name: '30', val: '30'
      }, {
        name: '40', val: '40'
      }]
    }, {
      name: '1尾',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      }, {
        name: '11', val: '11'
      }, {
        name: '21', val: '21'
      }, {
        name: '31', val: '31'
      }, {
        name: '41', val: '41'
      }]
    }, {
      name: '2尾',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      }, {
        name: '12', val: '12'
      }, {
        name: '22', val: '22'
      }, {
        name: '32', val: '32'
      }, {
        name: '42', val: '42'
      }]
    }, {
      name: '3尾',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      }, {
        name: '13', val: '13'
      }, {
        name: '23', val: '23'
      }, {
        name: '33', val: '33'
      }, {
        name: '43', val: '43'
      }]
    }, {
      name: '4尾',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      }, {
        name: '14', val: '14'
      }, {
        name: '24', val: '24'
      }, {
        name: '34', val: '34'
      }, {
        name: '44', val: '44'
      }]
    }, {
      name: '5尾',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      }, {
        name: '15', val: '15'
      }, {
        name: '25', val: '25'
      }, {
        name: '35', val: '35'
      }, {
        name: '45', val: '45'
      }]
    }, {
      name: '6尾',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      }, {
        name: '16', val: '16'
      }, {
        name: '26', val: '26'
      }, {
        name: '36', val: '36'
      }, {
        name: '46', val: '46'
      }]
    }, {
      name: '7尾',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      }, {
        name: '17', val: '17'
      }, {
        name: '27', val: '27'
      }, {
        name: '37', val: '37'
      }, {
        name: '47', val: '47'
      }]
    }, {
      name: '8尾',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      }, {
        name: '18', val: '18'
      }, {
        name: '28', val: '28'
      }, {
        name: '38', val: '38'
      }, {
        name: '48', val: '48'
      }]
    }, {
      name: '9尾',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      }, {
        name: '19', val: '19'
      }, {
        name: '29', val: '29'
      }, {
        name: '39', val: '39'
      }, {
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_born_wthree:[{
    type: '三连尾',
    prams: [{
      name: '0尾',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      }, {
        name: '20', val: '20'
      }, {
        name: '30', val: '30'
      }, {
        name: '40', val: '40'
      }]
    }, {
      name: '1尾',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      }, {
        name: '11', val: '11'
      }, {
        name: '21', val: '21'
      }, {
        name: '31', val: '31'
      }, {
        name: '41', val: '41'
      }]
    }, {
      name: '2尾',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      }, {
        name: '12', val: '12'
      }, {
        name: '22', val: '22'
      }, {
        name: '32', val: '32'
      }, {
        name: '42', val: '42'
      }]
    }, {
      name: '3尾',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      }, {
        name: '13', val: '13'
      }, {
        name: '23', val: '23'
      }, {
        name: '33', val: '33'
      }, {
        name: '43', val: '43'
      }]
    }, {
      name: '4尾',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      }, {
        name: '14', val: '14'
      }, {
        name: '24', val: '24'
      }, {
        name: '34', val: '34'
      }, {
        name: '44', val: '44'
      }]
    }, {
      name: '5尾',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      }, {
        name: '15', val: '15'
      }, {
        name: '25', val: '25'
      }, {
        name: '35', val: '35'
      }, {
        name: '45', val: '45'
      }]
    }, {
      name: '6尾',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      }, {
        name: '16', val: '16'
      }, {
        name: '26', val: '26'
      }, {
        name: '36', val: '36'
      }, {
        name: '46', val: '46'
      }]
    }, {
      name: '7尾',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      }, {
        name: '17', val: '17'
      }, {
        name: '27', val: '27'
      }, {
        name: '37', val: '37'
      }, {
        name: '47', val: '47'
      }]
    }, {
      name: '8尾',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      }, {
        name: '18', val: '18'
      }, {
        name: '28', val: '28'
      }, {
        name: '38', val: '38'
      }, {
        name: '48', val: '48'
      }]
    }, {
      name: '9尾',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      }, {
        name: '19', val: '19'
      }, {
        name: '29', val: '29'
      }, {
        name: '39', val: '39'
      }, {
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_born_wfour:[{
    type: '四连尾',
    prams: [{
      name: '0尾',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      }, {
        name: '20', val: '20'
      }, {
        name: '30', val: '30'
      }, {
        name: '40', val: '40'
      }]
    }, {
      name: '1尾',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      }, {
        name: '11', val: '11'
      }, {
        name: '21', val: '21'
      }, {
        name: '31', val: '31'
      }, {
        name: '41', val: '41'
      }]
    }, {
      name: '2尾',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      }, {
        name: '12', val: '12'
      }, {
        name: '22', val: '22'
      }, {
        name: '32', val: '32'
      }, {
        name: '42', val: '42'
      }]
    }, {
      name: '3尾',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      }, {
        name: '13', val: '13'
      }, {
        name: '23', val: '23'
      }, {
        name: '33', val: '33'
      }, {
        name: '43', val: '43'
      }]
    }, {
      name: '4尾',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      }, {
        name: '14', val: '14'
      }, {
        name: '24', val: '24'
      }, {
        name: '34', val: '34'
      }, {
        name: '44', val: '44'
      }]
    }, {
      name: '5尾',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      }, {
        name: '15', val: '15'
      }, {
        name: '25', val: '25'
      }, {
        name: '35', val: '35'
      }, {
        name: '45', val: '45'
      }]
    }, {
      name: '6尾',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      }, {
        name: '16', val: '16'
      }, {
        name: '26', val: '26'
      }, {
        name: '36', val: '36'
      }, {
        name: '46', val: '46'
      }]
    }, {
      name: '7尾',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      }, {
        name: '17', val: '17'
      }, {
        name: '27', val: '27'
      }, {
        name: '37', val: '37'
      }, {
        name: '47', val: '47'
      }]
    }, {
      name: '8尾',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      }, {
        name: '18', val: '18'
      }, {
        name: '28', val: '28'
      }, {
        name: '38', val: '38'
      }, {
        name: '48', val: '48'
      }]
    }, {
      name: '9尾',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      }, {
        name: '19', val: '19'
      }, {
        name: '29', val: '29'
      }, {
        name: '39', val: '39'
      }, {
        name: '49', val: '49'
      }]
    }]
  }],
  lhc_born_wfive:[{
    type: '五连尾',
    prams: [{
      name: '0尾',
      val: 1,
      active: false,
      className: 'bd-red',
      para: [{
        name: '10', val: '10'
      }, {
        name: '20', val: '20'
      }, {
        name: '30', val: '30'
      }, {
        name: '40', val: '40'
      }]
    }, {
      name: '1尾',
      val: 2,
      active: false,
      className: 'bd-red',
      para: [{
        name: '01', val: '01'
      }, {
        name: '11', val: '11'
      }, {
        name: '21', val: '21'
      }, {
        name: '31', val: '31'
      }, {
        name: '41', val: '41'
      }]
    }, {
      name: '2尾',
      val: 3,
      active: false,
      className: 'bd-red',
      para: [{
        name: '02', val: '02'
      }, {
        name: '12', val: '12'
      }, {
        name: '22', val: '22'
      }, {
        name: '32', val: '32'
      }, {
        name: '42', val: '42'
      }]
    }, {
      name: '3尾',
      val: 4,
      active: false,
      className: 'bd-red',
      para: [{
        name: '03', val: '03'
      }, {
        name: '13', val: '13'
      }, {
        name: '23', val: '23'
      }, {
        name: '33', val: '33'
      }, {
        name: '43', val: '43'
      }]
    }, {
      name: '4尾',
      val: 5,
      active: false,
      className: 'bd-red',
      para: [{
        name: '04', val: '04'
      }, {
        name: '14', val: '14'
      }, {
        name: '24', val: '24'
      }, {
        name: '34', val: '34'
      }, {
        name: '44', val: '44'
      }]
    }, {
      name: '5尾',
      val: 6,
      active: false,
      className: 'bd-red',
      para: [{
        name: '05', val: '05'
      }, {
        name: '15', val: '15'
      }, {
        name: '25', val: '25'
      }, {
        name: '35', val: '35'
      }, {
        name: '45', val: '45'
      }]
    }, {
      name: '6尾',
      val: 7,
      active: false,
      className: 'bd-red',
      para: [{
        name: '06', val: '06'
      }, {
        name: '16', val: '16'
      }, {
        name: '26', val: '26'
      }, {
        name: '36', val: '36'
      }, {
        name: '46', val: '46'
      }]
    }, {
      name: '7尾',
      val: 8,
      active: false,
      className: 'bd-red',
      para: [{
        name: '07', val: '07'
      }, {
        name: '17', val: '17'
      }, {
        name: '27', val: '27'
      }, {
        name: '37', val: '37'
      }, {
        name: '47', val: '47'
      }]
    }, {
      name: '8尾',
      val: 9,
      active: false,
      className: 'bd-red',
      para: [{
        name: '08', val: '08'
      }, {
        name: '18', val: '18'
      }, {
        name: '28', val: '28'
      }, {
        name: '38', val: '38'
      }, {
        name: '48', val: '48'
      }]
    }, {
      name: '9尾',
      val: 10,
      active: false,
      className: 'bd-red',
      para: [{
        name: '09', val: '09'
      }, {
        name: '19', val: '19'
      }, {
        name: '29', val: '29'
      }, {
        name: '39', val: '39'
      }, {
        name: '49', val: '49'
      }]
    }]
  }]
}

export const lhc_lot_data_formate = [
    {
        text: '鼠',
        val: '11',
        color: 'green'
    }, {
        text: '鼠',
        val: '23',
        color: 'red'
    }, {
        text: '鼠',
        val: '35',
        color: 'red'
    }, {
        text: '鼠',
        val: '47',
        color: 'blue'
    }, {
        text: '牛',
        val: '10',
        color: 'blue'
    }, {
        text: '牛',
        val: '22',
        color: 'green'
    }, {
        text: '牛',
        val: '34',
        color: 'red'
    }, {
        text: '牛',
        val: '46',
        color: 'red'
    }, {
        text: '虎',
        val: '09',
        color: 'blue'
    }, {
        text: '虎',
        val: '21',
        color: 'green'
    }, {
        text: '虎',
        val: '33',
        color: 'green'
    }, {
        text: '虎',
        val: '45',
        color: 'red'
    }, {
        text: '兔',
        val: '08',
        color: 'red'
    }, {
        text: '兔',
        val: '20',
        color: 'blue'
    }, {
        text: '兔',
        val: '32',
        color: 'green'
    }, {
        text: '兔',
        val: '44',
        color: 'green'
    }, {
        text: '龙',
        val: '07',
        color: 'red'
    }, {
        text: '龙',
        val: '19',
        color: 'red'
    }, {
        text: '龙',
        val: '31',
        color: 'blue'
    }, {
        text: '龙',
        val: '43',
        color: 'green'
    }, {
        text: '蛇',
        val: '06',
        color: 'green'
    }, {
        text: '蛇',
        val: '18',
        color: 'red'
    }, {
        text: '蛇',
        val: '30',
        color: 'red'
    }, {
        text: '蛇',
        val: '42',
        color: 'blue'
    }, {
        text: '马',
        val: '05',
        color: 'green'
    }, {
        text: '马',
        val: '17',
        color: 'green'
    }, {
        text: '马',
        val: '29',
        color: 'red'
    }, {
        text: '马',
        val: '41',
        color: 'blue'
    }, {
        text: '羊',
        val: '04',
        color: 'blue'
    }, {
        text: '羊',
        val: '16',
        color: 'green'
    }, {
        text: '羊',
        val: '28',
        color: 'green'
    }, {
        text: '羊',
        val: '40',
        color: 'red'
    }, {
        text: '猴',
        val: '03',
        color: 'blue'
    }, {
        text: '猴',
        val: '15',
        color: 'blue'
    }, {
        text: '猴',
        val: '27',
        color: 'green'
    }, {
        text: '猴',
        val: '39',
        color: 'green'
    }, {
        text: '鸡',
        val:  '02',
        color: 'red'
    }, {
        text: '鸡',
        val: '14',
        color: 'blue'
    }, {
        text: '鸡',
        val: '26',
        color: 'blue'
    }, {
        text: '鸡',
        val: '38',
        color: 'green'
    }, {
        text: '狗',
        val: '01',
        color: 'red'
    }, {
        text: '狗',
        val: '13',
        color: 'red'
    }, {
        text: '狗',
        val: '25',
        color: 'blue'
    }, {
        text: '狗',
        val: '37',
        color: 'blue'
    }, {
        text: '狗',
        val: '49',
        color: 'green'
    }, {
        text: '猪',
        val: '11',
        color: 'red'
    }, {
        text: '猪',
        val: '23',
        color: 'red'
    }, {
        text: '猪',
        val: '35',
        color: 'blue'
    }, {
        text: '猪',
        val: '47',
        color: 'blue'
    }
]



