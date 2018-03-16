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
export const def_env = 'development'

export const api_ver = '0.9.0' // api 版本号

// 彩票提示信息
export const lottery_wining = '正在开奖'

// 首页轮播图 图片地址配置 imgUrls:
export const imgConfig = [
    {
        id: 1,
        name: '',
        href: '',
        pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814205880772.pn' +
                'g'
    }, {
        id: 2,
        name: '',
        href: '',
        pic: 'http:\\/\\/120.76.211.1:8092\\/uploads\\/2017\\/04\\/18\\/2017041814234362608.pn' +
                'g'
    }
]

export const homeLotCfg = {
    CQSSC: {
        from: 0,
        to: 9,
        code: 'CQSSC',
        name: '重庆时时彩',
        lotId: 1,
        p_id: 37,
        p_game: '五星',
        c_game: '五星直选复式',
        c_id: 38,
        sel_number: 5,
        lotteryPosCode: [
            1, 2, 3, 4, 5
        ],
        lotteryPosText: [
            '万位', '千位', '百位', '十位', '个位'
        ],
        updown: 2
    },
    SFSSC: {
        from: 0,
        to: 9,
        code: 'SFSSC',
        name: '三分时时彩',
        lotId: 13,
        p_id: 37,
        p_game: '五星',
        c_game: '五星直选复式',
        c_id: 228,
        sel_number: 5,
        lotteryPosCode: [
            1, 2, 3, 4, 5
        ],
        lotteryPosText: [
            '万位', '千位', '百位', '十位', '个位'
        ],
        updown: 2
    },
    XJSSC: {
        from: 0,
        to: 9,
        code: 'XJSSC',
        name: '新疆时时彩',
        lotId: 7,
        p_id: 37,
        p_game: '五星',
        c_game: '五星直选复式',
        c_id: 693,
        sel_number: 5,
        lotteryPosCode: [
            1, 2, 3, 4, 5
        ],
        lotteryPosText: [
            '万位', '千位', '百位', '十位', '个位'
        ],
        updown: 2
    },
    TJSSC: {
        from: 0,
        to: 9,
        code: 'TJSSC',
        name: '天津时时彩',
        lotId: 13,
        p_id: 37,
        p_game: '五星',
        c_game: '五星直选复式',
        c_id: 370,
        sel_number: 5,
        lotteryPosCode: [
            1, 2, 3, 4, 5
        ],
        lotteryPosText: [
            '万位', '千位', '百位', '十位', '个位'
        ],
        updown: 2
    },
    BJPK10: {
        from: 1,
        to: 10,
        code: 'BJPK10',
        name: '北京PK拾',
        lotId: 5,
        p_id: 75,
        p_game: '前三',
        c_game: '直选复式',
        c_id: 76,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '冠军', '亚军', '季军'
        ],
        updown: 1
    },
    JSPK10: {
        from: 1,
        to: 10,
        code: 'JSPK10',
        name: '极速PK拾',
        lotId: 26,
        p_id: 75,
        p_game: '前三',
        c_game: '直选复式',
        c_id: 1092,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '冠军', '亚军', '季军'
        ],
        updown: 1
    },
    SFPK10: {
        from: 1,
        to: 10,
        code: 'SFPK10',
        name: '三分PK拾',
        lotId: 14,
        p_id: 75,
        p_game: '前三',
        c_game: '直选复式',
        c_id: 305,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '冠军', '亚军', '季军'
        ],
        updown: 1
    },
    BJ28: {
        from: 0,
        to: 27,
        code: 'BJ28',
        name: '北京28',
        lotId: 22,
        p_id: 292,
        p_game: '特码',
        c_game: '特码',
        c_id: 792,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: ['特码'],
        updown: 2
    },
    XY28: {
        from: 0,
        to: 27,
        code: 'XY28',
        name: '幸运28',
        lotId: 21,
        p_id: 292,
        p_game: '特码',
        c_game: '特码',
        c_id: 293,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: ['特码'],
        updown: 2
    },
    XGLHC: {
        from: 1,
        to: 49,
        code: 'XGLHC',
        name: '香港六合彩',
        lotId: 23,
        p_id: 814,
        p_game: '特码A',
        c_game: '选码',
        c_id: 815,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: ['特码'],
        updown: 1
    },
    JSLHC: {
        from: 1,
        to: 49,
        code: 'JSLHC',
        name: '极速六合彩',
        lotId: 24,
        p_id: 814,
        p_game: '特码A',
        c_game: '选码',
        c_id: 989,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: ['特码'],
        updown: 1
    },
    SHSSL: {
        from: 0,
        to: 9,
        code: 'SHSSL',
        name: '上海时时乐',
        lotId: 19,
        p_id: 41,
        p_game: '三星',
        c_game: '直选复式',
        c_id: 558,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '百位', '十位', '个位'
        ],
        updown: 2
    },
    FC3D: {
        from: 0,
        to: 9,
        code: 'FC3D',
        name: '福彩3D',
        lotId: 2,
        p_id: 41,
        p_game: '三星',
        c_game: '直选复式',
        c_id: 151,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '百位', '十位', '个位'
        ],
        updown: 2
    },
    PL3: {
        from: 0,
        to: 9,
        code: 'PL3',
        name: '排列3',
        lotId: 11,
        p_id: 41,
        p_game: '三星',
        c_game: '直选复式',
        c_id: 134,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '百位', '十位', '个位'
        ],
        updown: 2
    },
    GD11X5: {
        from: 1,
        to: 11,
        code: 'GD11X5',
        name: '广东11选5',
        lotId: 6,
        p_id: 77,
        p_game: '三码',
        c_game: '前三直选复式',
        c_id: 78,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '第一位', '第二位', '第三位'
        ],
        updown: 1
    },
    SD11X5: {
        from: 1,
        to: 11,
        code: 'SD11X5',
        name: '山东11选5',
        lotId: 15,
        p_id: 77,
        p_game: '三码',
        c_game: '前三直选复式',
        c_id: 307,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '第一位', '第二位', '第三位'
        ],
        updown: 1
    },
    SH11X5: {
        from: 1,
        to: 11,
        code: 'SH11X5',
        name: '上海11选5',
        lotId: 17,
        p_id: 77,
        p_game: '三码',
        c_game: '前三直选复式',
        c_id: 433,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '第一位', '第二位', '第三位'
        ],
        updown: 1
    },
    JX11X5: {
        from: 1,
        to: 11,
        code: 'JX11X5',
        name: '江西11选5',
        lotId: 18,
        p_id: 77,
        p_game: '三码',
        c_game: '前三直选复式',
        c_id: 496,
        sel_number: 3,
        lotteryPosCode: [
            1, 2, 3
        ],
        lotteryPosText: [
            '第一位', '第二位', '第三位'
        ],
        updown: 1
    },
    AHKS: {
        from: 3,
        to: 18,
        code: 'AHKS',
        name: '安徽快三',
        lotId: 8,
        p_id: 118,
        p_game: '和值',
        c_game: '和值',
        c_id: 119,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: [],
        updown: 3
    },
    JSKS: {
        from: 3,
        to: 18,
        code: 'JSKS',
        name: '江苏快三',
        lotId: 9,
        p_id: 118,
        p_game: '和值',
        c_game: '和值',
        c_id: 206,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: [],
        updown: 3
    },
    GXKS: {
        from: 3,
        to: 18,
        code: 'GXKS',
        name: '广西快三',
        lotId: 8,
        p_id: 118,
        p_game: '和值',
        c_game: '和值',
        c_id: 589,
        sel_number: 1,
        lotteryPosCode: [],
        lotteryPosText: [],
        updown: 3
    },
    FFSSC: {
        from: 0,
        to: 9,
        code: 'FFSSC',
        name: '分分时时彩',
        lotId: 25,
        p_id: 37,
        p_game: '五星',
        c_game: '五星直选复式',
        c_id: 1038,
        sel_number: 5,
        lotteryPosCode: [
            1, 2, 3, 4, 5
        ],
        lotteryPosText: [
            '万位', '千位', '百位', '十位', '个位'
        ],
        updown: 2
    }
}

export const homeTrendCfg = {
    1: {
        link: '/CQSSC/1'
    },
    2: {
        link: '/FC3D/2'
    },
    5: {
        link: '/BJPK10/5'
    },
    6: {
        link: '/GD11X5/6'
    },
    7: {
        link: '/XJSSC/7'
    },
    8: {
        link: '/AHKS/8'
    },
    9: {
        link: '/JSKS/9'
    },
    11: {
        link: '/PL3/11'
    },
    13: {
        link: '/SFSSC/13'
    },
    14: {
        link: '/SFPK10/14'
    },
    15: {
        link: '/SD11X5/15'
    },
    16: {
        link: '/TJSSC/16'
    },
    17: {
        link: '/SH11X5/17'
    },
    18: {
        link: '/JX11X5/18'
    },
    19: {
        link: '/SHSSL/19'
    },
    20: {
        link: '/GXKS/20'
    },
    21: {
        link: '/XY28/21'
    },
    22: {
        link: '/BJ28/22'
    },
    23: {
        link: '/XGLHC/23'
    },
    3: {
        link: '/PL5/3'
    },
    4: {
        link: '/DLT/4'
    },
    10: {
        link: '/SSQ/10'
    },
    24: {
        link: '/JSLHC/24'
    },
    25: {
        link: '/FFSSC/25'
    }
}

// 彩票范围
export const lotteryRanges = {
    // 双色球
    ssq: [
        {
            type: '红球',
            className: 'b-red',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }
            ]
        }, {
            type: '蓝球',
            className: 'b-blue',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }
            ]
        }
    ],
    // 大乐透
    dlt: [
        {
            type: '红球',
            className: 'b-red',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }
            ]
        }, {
            type: '蓝球',
            className: 'b-blue',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }
            ]
        }
    ],
    lhc: [
        {
            type: '特码',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zm: [
        {
            type: '正码',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zyt: [
        {
            type: '正一特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zert: [
        {
            type: '正二特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zsant: [
        {
            type: '正三特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zst: [
        {
            type: '正四特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_boson_nowing: [
        {
            type: '自选不中',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zwt: [
        {
            type: '正五特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zlt: [
        {
            type: '正六特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing32: [
        {
            type: '三中二',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing3: [
        {
            type: '三全中',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing2: [
        {
            type: '二全中',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing2zt: [
        {
            type: '二中特',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing2tc: [
        {
            type: '特串',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_lm_wing4: [
        {
            type: '四全中',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }, {
                    name: '28',
                    val: 28,
                    active: false
                }, {
                    name: '29',
                    val: 29,
                    active: false
                }, {
                    name: '30',
                    val: 30,
                    active: false
                }, {
                    name: '31',
                    val: 31,
                    active: false
                }, {
                    name: '32',
                    val: 32,
                    active: false
                }, {
                    name: '33',
                    val: 33,
                    active: false
                }, {
                    name: '34',
                    val: 34,
                    active: false
                }, {
                    name: '35',
                    val: 35,
                    active: false
                }, {
                    name: '36',
                    val: 36,
                    active: false
                }, {
                    name: '37',
                    val: 37,
                    active: false
                }, {
                    name: '38',
                    val: 38,
                    active: false
                }, {
                    name: '39',
                    val: 39,
                    active: false
                }, {
                    name: '40',
                    val: 40,
                    active: false
                }, {
                    name: '41',
                    val: 41,
                    active: false
                }, {
                    name: '42',
                    val: 42,
                    active: false
                }, {
                    name: '43',
                    val: 43,
                    active: false
                }, {
                    name: '44',
                    val: 44,
                    active: false
                }, {
                    name: '45',
                    val: 45,
                    active: false
                }, {
                    name: '46',
                    val: 46,
                    active: false
                }, {
                    name: '47',
                    val: 47,
                    active: false
                }, {
                    name: '48',
                    val: 48,
                    active: false
                }, {
                    name: '49',
                    val: 49,
                    active: false
                }
            ]
        }
    ],
    lhc_zm_qt: [
        {
            type: '正码',
            prams: [
                {
                    name: '总大',
                    val: 1,
                    active: false
                }, {
                    name: '总小',
                    val: 2,
                    active: false
                }, {
                    name: '总单',
                    val: 3,
                    active: false
                }, {
                    name: '总双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    lhc_zyt2: [
        {
            type: '正一特',
            prams: [
                {
                    name: '正一大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正一蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正一绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zert2: [
        {
            type: '正二特',
            prams: [
                {
                    name: '正二大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正二蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正二绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zsant2: [
        {
            type: '正三特',
            prams: [
                {
                    name: '正三大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正三蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正三绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zst2: [
        {
            type: '正四特',
            prams: [
                {
                    name: '正四大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正四蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正四绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zwt2: [
        {
            type: '正五特',
            prams: [
                {
                    name: '正五大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正五蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正五绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zlt2: [
        {
            type: '正六特',
            prams: [
                {
                    name: '正六大',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六小',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六红',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '正六蓝',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '正六绿',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_zm_one: [
        {
            type: '正码一',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_zm_two: [
        {
            type: '正码二',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_zm_three: [
        {
            type: '正码三',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_zm_four: [
        {
            type: '正码四',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_zm_five: [
        {
            type: '正码五',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_zm_six: [
        {
            type: '正码六',
            prams: [
                {
                    name: '单码',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '双码',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '大码',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '小码',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合单',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合双',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合大',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '合小',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红波',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 10,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '尾大',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '尾小',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    // 前二直选和值
    twoFirst: [
        {
            type: '和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }
            ]
        }
    ],
    // 前二组选和值
    twogroup: [
        {
            type: '和值',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }
            ]
        }
    ],
    // 组三和值
    threeGroupSum: [
        {
            type: '和值',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }
            ]
        }
    ],
    // 组六和值
    sixGroupSum: [
        {
            type: '和值',
            prams: [
                {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }
            ]
        }
    ],
    // 三组选和值
    threeStarGroup: [
        {
            type: '和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 直选和值
    directSelect: [
        {
            type: '和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }
            ]
        }
    ],
    // 五星
    fiveSelect: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, 
        {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, 
        {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, 
        {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, 
        {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 五星
    fiveStar: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 五星
    fiveStars: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 四星
    fourStar: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 四星
    fourStars: [
        {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 后三星
    threeStarLast: [
        {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 后三星
    threeStarLasts: [
        {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前三星
    threeStarFirst: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前三星
    threeStarFirsts: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 四星
    fourSelect: [
        {
            type: '千位',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 后三直选复式
    threeSelectLast: [
        {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前三直选复式
    threeSelectFirst: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 上海时时乐二星直选
    twoStarFirst: [
        {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 上海时时乐二星后选
    twoStarLast: [
        {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 组三
    threeGroup: [
        {
            type: '组三',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 组六
    sixGroup: [
        {
            type: '组六',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 组选24
    group24: [
        {
            type: '组选24',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 组选
    group1: [
        {
            type: '组选',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 一码
    two1: [
        {
            type: '一码',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 二码
    two2: [
        {
            type: '二码',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前4组选6
    groupfour6: [
        {
            type: '二重号',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前4组选12
    groupfour12: [
        {
            type: '二重号',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '单号',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前4组选4
    groupfour4: [
        {
            type: '三重号',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '单号',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前二大小单双
    bigsmallFirst: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 后二大小单双
    bigsmallLast: [
        {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 前三大小单双
    bigsmallFirst3s: [
        {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 后三大小单双
    bigsmallLast3: [
        {
            type: '百位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 前三大小单双
    bigsmallFirst3s: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '百位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 上海时时乐前二大小单双
    bigsmallFirst2: [
        {
            type: '百位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '十位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 前二大小单双
    bigsmallFirst2s: [
        {
            type: '万位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '千位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 前二大小单双
    bigsmallFirst3: [
        {
            type: '万位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '千位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '百位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 后二大小单双
    bigsmallLast2: [
        {
            type: '十位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '个位',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 11选5任选复式
    // 任选一中一
    optional1: [
        {
            type: '一中一',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选一中一
    optional1: [
        {
            type: '一中一',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选2中2
    optional22: [
        {
            type: '二中二',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选3中3
    optional33: [
        {
            type: '三中三',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选4中4
    optional44: [
        {
            type: '四中四',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选5中5
    optional55: [
        {
            type: '五中五',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选6中5
    optional65: [
        {
            type: '六中五',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选7中5
    optiona75: [
        {
            type: '七中五',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 任选8中5
    optional85: [
        {
            type: '八中五',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 3码
    optional3m: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 组选复式
    optionalGroup: [
        {
            type: '组选',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 胆拖
    optionalGroupDT: [
        {
            type: '胆码',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '拖码',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 中三直选复式
    optional3mid: [
        {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 后三直选复式
    optional3Last: [
        {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 5,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 二码
    optional2m: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 二码
    optional2Last: [
        {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 5,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 不定位 前3位
    optionalNopos3f: [
        {
            type: '前三位',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 不定位 中3位
    optionalNopos3m: [
        {
            type: '中三位',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 不定位 后3位
    optionalNopos3l: [
        {
            type: '后三位',
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 11 5 定位胆
    optionalPos: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 5,
            prams: [
                {
                    name: '01',
                    val: '01',
                    active: false
                }, {
                    name: '02',
                    val: '02',
                    active: false
                }, {
                    name: '03',
                    val: '03',
                    active: false
                }, {
                    name: '04',
                    val: '04',
                    active: false
                }, {
                    name: '05',
                    val: '05',
                    active: false
                }, {
                    name: '06',
                    val: '06',
                    active: false
                }, {
                    name: '07',
                    val: '07',
                    active: false
                }, {
                    name: '08',
                    val: '08',
                    active: false
                }, {
                    name: '09',
                    val: '09',
                    active: false
                }, {
                    name: '10',
                    val: '10',
                    active: false
                }, {
                    name: '11',
                    val: '11',
                    active: false
                }
            ]
        }
    ],
    // 时时彩 定位胆
    sscPos: [
        {
            type: '万位',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '千位',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '百位',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '十位',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '个位',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 快三  和值
    quick3Sum: [
        {
            type: '和值',
            prams: [
                {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }
            ]
        }
    ],
    // 快三
    quick3Samet: [
        {
            type: '号码',
            prams: [
                {
                    name: '三同号通选',
                    val: 1,
                    className: 'sqrt',
                    active: false
                }
            ]
        }
    ],
    // 快三
    quick3lh: [
        {
            type: '号码',
            prams: [
                {
                    name: '三连号通选',
                    val: 1,
                    className: 'sqrt',
                    active: false
                }
            ]
        }
    ],
    // 快三
    quick3Samed: [
        {
            type: '号码',
            prams: [
                {
                    name: '111',
                    val: '111',
                    active: false
                }, {
                    name: '222',
                    val: '222',
                    active: false
                }, {
                    name: '333',
                    val: '333',
                    active: false
                }, {
                    name: '444',
                    val: '444',
                    active: false
                }, {
                    name: '555',
                    val: '555',
                    active: false
                }, {
                    name: '666',
                    val: '666',
                    active: false
                }
            ]
        }
    ],
    // 快三
    quick32th: [
        {
            type: '号码',
            prams: [
                {
                    name: '11',
                    val: '11',
                    active: false
                }, {
                    name: '22',
                    val: '22',
                    active: false
                }, {
                    name: '33',
                    val: '33',
                    active: false
                }, {
                    name: '44',
                    val: '44',
                    active: false
                }, {
                    name: '55',
                    val: '55',
                    active: false
                }, {
                    name: '66',
                    val: '66',
                    active: false
                }
            ]
        }
    ],
    // 快三
    quick32bth: [
        {
            type: '同号',
            prams: [
                {
                    name: '11',
                    val: '11',
                    active: false
                }, {
                    name: '22',
                    val: '22',
                    active: false
                }, {
                    name: '33',
                    val: '33',
                    active: false
                }, {
                    name: '44',
                    val: '44',
                    active: false
                }, {
                    name: '55',
                    val: '55',
                    active: false
                }, {
                    name: '66',
                    val: '66',
                    active: false
                }
            ]
        }, {
            type: '不同号',
            prams: [
                {
                    name: '1',
                    val: '1',
                    active: false
                }, {
                    name: '2',
                    val: '2',
                    active: false
                }, {
                    name: '3',
                    val: '3',
                    active: false
                }, {
                    name: '4',
                    val: '4',
                    active: false
                }, {
                    name: '5',
                    val: '5',
                    active: false
                }, {
                    name: '6',
                    val: '6',
                    active: false
                }
            ]
        }
    ],
    // 快三标准
    quick3normal: [
        {
            type: '标准',
            prams: [
                {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }
            ]
        }
    ],
    // 快三胆拖
    quick3DT: [
        {
            type: '胆码',
            prams: [
                {
                    name: '1',
                    val: '1',
                    active: false
                }, {
                    name: '2',
                    val: '2',
                    active: false
                }, {
                    name: '3',
                    val: '3',
                    active: false
                }, {
                    name: '4',
                    val: '4',
                    active: false
                }, {
                    name: '5',
                    val: '5',
                    active: false
                }, {
                    name: '6',
                    val: '6',
                    active: false
                }
            ]
        }, {
            type: '拖码',
            prams: [
                {
                    name: '1',
                    val: '1',
                    active: false
                }, {
                    name: '2',
                    val: '2',
                    active: false
                }, {
                    name: '3',
                    val: '3',
                    active: false
                }, {
                    name: '4',
                    val: '4',
                    active: false
                }, {
                    name: '5',
                    val: '5',
                    active: false
                }, {
                    name: '6',
                    val: '6',
                    active: false
                }
            ]
        }
    ],

    PK10nopos: [
        {
            type: '冠军',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '亚军',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '季军',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第四名',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第五名',
            code: 5,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第六名',
            code: 6,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第七名',
            code: 7,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第八名',
            code: 8,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第九名',
            code: 9,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第十名',
            code: 10,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    PK10first: [
        {
            type: '冠军',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    PK10second: [
        {
            type: '冠军',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '亚军',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    PK10third: [
        {
            type: '冠军',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '亚军',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '季军',
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    // 大小单双
    PL5DXDS: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 大小单双
    PL5DXDS2: [
        {
            type: '第四位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 大小单双
    PL5DXDS1: [
        {
            type: '第一位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第二位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第三位',
            code: 3,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 大小单双
    PL5DXDS22: [
        {
            type: '第三位',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第四位',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第五位',
            code: 3,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 两面盘 - 龙虎
    doubleDiskDrog: [
        {
            type: '选位',
            prams: [
                {
                    name: '万',
                    val: 1,
                    active: false
                }, {
                    name: '千',
                    val: 2,
                    active: false
                }, {
                    name: '百',
                    val: 3,
                    active: false
                }, {
                    name: '十',
                    val: 4,
                    active: false
                }, {
                    name: '个',
                    val: 5,
                    active: false
                }
            ]
        }, {
            type: '龙虎和',
            prams: [
                {
                    name: '龙',
                    val: 1,
                    active: false
                }, {
                    name: '虎',
                    val: 2,
                    active: false
                }, {
                    name: '和',
                    val: 3,
                    active: false
                }
            ]
        }
    ],

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
   
    // 两面盘
    doubleDisk: [
        {
            type: '总和龙虎',
            code: 0,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }, {
                    name: '和',
                    val: 7,
                    active: false
                }
            ]
        }, {
            type: '第一球',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第二球',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第三球',
            code: 3,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第四球',
            code: 4,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第五球',
            code: 5,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    // 两面盘
    PK10thirdB: [
        {
            type: '冠军',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }
            ]
        }, {
            type: '亚军',
            code: 2,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }
            ]
        }, {
            type: '季军',
            code: 3,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }
            ]
        }, {
            type: '第四名',
            code: 4,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }
            ]
        }, {
            type: '第五名',
            code: 5,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '龙',
                    val: 5,
                    active: false
                }, {
                    name: '虎',
                    val: 6,
                    active: false
                }
            ]
        }, {
            type: '第六名',
            code: 6,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第七名',
            code: 7,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第八名',
            code: 8,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第九名',
            code: 9,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }, {
            type: '第十名',
            code: 10,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }
            ]
        }
    ],
    PK10Boneten: [
        {
            type: '冠军',
            code: 1,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '亚军',
            code: 2,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第三名',
            code: 3,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第四名',
            code: 4,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第五名',
            code: 5,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第六名',
            code: 6,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第七名',
            code: 7,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第八名',
            code: 8,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第九名',
            code: 9,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '第十名',
            code: 10,
            prams: [
                {
                    name: '01',
                    val: 1,
                    active: false
                }, {
                    name: '02',
                    val: 2,
                    active: false
                }, {
                    name: '03',
                    val: 3,
                    active: false
                }, {
                    name: '04',
                    val: 4,
                    active: false
                }, {
                    name: '05',
                    val: 5,
                    active: false
                }, {
                    name: '06',
                    val: 6,
                    active: false
                }, {
                    name: '07',
                    val: 7,
                    active: false
                }, {
                    name: '08',
                    val: 8,
                    active: false
                }, {
                    name: '09',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    PK10Bsum: [
        {
            type: '冠亚军和',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false,
                    code: 1
                }, {
                    name: '小',
                    val: 2,
                    active: false,
                    code: 1
                }, {
                    name: '单',
                    val: 3,
                    active: false,
                    code: 1
                }, {
                    name: '双',
                    val: 4,
                    active: false,
                    code: 1
                }, {
                    name: '3',
                    val: 3,
                    active: false,
                    code: 2
                }, {
                    name: '4',
                    val: 4,
                    active: false,
                    code: 2
                }, {
                    name: '5',
                    val: 5,
                    active: false,
                    code: 2
                }, {
                    name: '6',
                    val: 6,
                    active: false,
                    code: 2
                }, {
                    name: '7',
                    val: 7,
                    active: false,
                    code: 2
                }, {
                    name: '8',
                    val: 8,
                    active: false,
                    code: 2
                }, {
                    name: '9',
                    val: 9,
                    active: false,
                    code: 2
                }, {
                    name: '10',
                    val: 10,
                    active: false,
                    code: 2
                }, {
                    name: '11',
                    val: 11,
                    active: false,
                    code: 2
                }, {
                    name: '12',
                    val: 12,
                    active: false,
                    code: 2
                }, {
                    name: '13',
                    val: 13,
                    active: false,
                    code: 2
                }, {
                    name: '14',
                    val: 14,
                    active: false,
                    code: 2
                }, {
                    name: '15',
                    val: 15,
                    active: false,
                    code: 2
                }, {
                    name: '16',
                    val: 16,
                    active: false,
                    code: 2
                }, {
                    name: '17',
                    val: 17,
                    active: false,
                    code: 2
                }, {
                    name: '18',
                    val: 18,
                    active: false,
                    code: 2
                }, {
                    name: '19',
                    val: 19,
                    active: false,
                    code: 2
                }
            ]
        }
    ],
    // 1-5球
    one_five: [
        {
            type: '第一球',
            code: 1,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第二球',
            code: 2,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第三球',
            code: 3,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第四球',
            code: 4,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }, {
            type: '第五球',
            code: 5,
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }
            ]
        }
    ],
    // 前中后
    firMidLas: [
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
        }, {
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
        }, {
            type: '后三',
            code: 3,
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
    // 前 中 后和值
    sumBF: [
        {
            type: '前和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 前 中 后和值
    sumBM: [
        {
            type: '中和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 前 中 后和值
    sumBL: [
        {
            type: '后和值',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 28
    mixed: [
        {
            type: '混合',
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '大单',
                    val: 5,
                    active: false
                }, {
                    name: '小单',
                    val: 6,
                    active: false
                }, {
                    name: '大双',
                    val: 7,
                    active: false
                }, {
                    name: '小双',
                    val: 8,
                    active: false
                }, {
                    name: '极大',
                    val: 9,
                    active: false
                }, {
                    name: '极小',
                    val: 10,
                    active: false
                }
            ]
        }
    ],
    // 28
    code28: [
        {
            type: '特码',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 28
    code28_3: [
        {
            type: '特码包三',
            prams: [
                {
                    name: '0',
                    val: 0,
                    active: false
                }, {
                    name: '1',
                    val: 1,
                    active: false
                }, {
                    name: '2',
                    val: 2,
                    active: false
                }, {
                    name: '3',
                    val: 3,
                    active: false
                }, {
                    name: '4',
                    val: 4,
                    active: false
                }, {
                    name: '5',
                    val: 5,
                    active: false
                }, {
                    name: '6',
                    val: 6,
                    active: false
                }, {
                    name: '7',
                    val: 7,
                    active: false
                }, {
                    name: '8',
                    val: 8,
                    active: false
                }, {
                    name: '9',
                    val: 9,
                    active: false
                }, {
                    name: '10',
                    val: 10,
                    active: false
                }, {
                    name: '11',
                    val: 11,
                    active: false
                }, {
                    name: '12',
                    val: 12,
                    active: false
                }, {
                    name: '13',
                    val: 13,
                    active: false
                }, {
                    name: '14',
                    val: 14,
                    active: false
                }, {
                    name: '15',
                    val: 15,
                    active: false
                }, {
                    name: '16',
                    val: 16,
                    active: false
                }, {
                    name: '17',
                    val: 17,
                    active: false
                }, {
                    name: '18',
                    val: 18,
                    active: false
                }, {
                    name: '19',
                    val: 19,
                    active: false
                }, {
                    name: '20',
                    val: 20,
                    active: false
                }, {
                    name: '21',
                    val: 21,
                    active: false
                }, {
                    name: '22',
                    val: 22,
                    active: false
                }, {
                    name: '23',
                    val: 23,
                    active: false
                }, {
                    name: '24',
                    val: 24,
                    active: false
                }, {
                    name: '25',
                    val: 25,
                    active: false
                }, {
                    name: '26',
                    val: 26,
                    active: false
                }, {
                    name: '27',
                    val: 27,
                    active: false
                }
            ]
        }
    ],
    // 28
    boson: [
        {
            type: '波色',
            prams: [
                {
                    name: '红波',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '绿波',
                    val: 2,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '蓝波',
                    val: 3,
                    active: false,
                    className: 'b-blue'
                }
            ]
        }
    ],
    // 28
    leopard: [
        {
            type: '豹子',
            prams: [
                {
                    name: '豹子',
                    val: 1,
                    active: false
                }
            ]
        }
    ],
    // 28
    doubleDisk28: [
        {
            type: '双面',
            code: 1,
            prams: [
                {
                    name: '大',
                    val: 1,
                    active: false
                }, {
                    name: '小',
                    val: 2,
                    active: false
                }, {
                    name: '单',
                    val: 3,
                    active: false
                }, {
                    name: '双',
                    val: 4,
                    active: false
                }, {
                    name: '大单',
                    val: 5,
                    active: false
                }, {
                    name: '小单',
                    val: 6,
                    active: false
                }, {
                    name: '大双',
                    val: 7,
                    active: false
                }, {
                    name: '小双',
                    val: 8,
                    active: false
                }, {
                    name: '极大',
                    val: 9,
                    active: false
                }, {
                    name: '极小',
                    val: 10,
                    active: false
                }
            ]
        }, {
            type: '波色豹子',
            code: 2,
            prams: [
                {
                    name: '红波',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝波',
                    val: 2,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿波',
                    val: 3,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '豹子',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_boson_server: [
        {
            type: '七色波',
            prams: [
                {
                    name: '红波',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '绿波',
                    val: 2,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '蓝波',
                    val: 3,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '和局',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_boson_zong: [
        {
            type: '总肖',
            prams: [
                {
                    name: '2肖',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '3肖',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '4肖',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '5肖',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '6肖',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '7肖',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '总肖单',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '总肖双',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_boson: [
        {
            type: '色波',
            prams: [
                {
                    name: '红波',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '02',
                            val: '02'
                        }, {
                            name: '07',
                            val: '07'
                        }, {
                            name: '08',
                            val: '08'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '40',
                            val: '40'
                        }, {
                            name: '45',
                            val: '45'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '蓝波',
                    val: 2,
                    active: false,
                    className: 'bd-blue',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '04',
                            val: '04'
                        }, {
                            name: '09',
                            val: '09'
                        }, {
                            name: '10',
                            val: '10'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '41',
                            val: '41'
                        }, {
                            name: '42',
                            val: '42'
                        }, {
                            name: '47',
                            val: '47'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '绿波',
                    val: 3,
                    active: false,
                    className: 'bd-green',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '06',
                            val: '06'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '43',
                            val: '43'
                        }, {
                            name: '44',
                            val: '44'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_boson2: [
        {
            type: '色波',
            prams: [
                {
                    name: '红单',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红双',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红大',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红小',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝单',
                    val: 5,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝双',
                    val: 6,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝大',
                    val: 7,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝小',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿单',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿双',
                    val: 10,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿大',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿小',
                    val: 12,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_boson3: [
        {
            type: '色波',
            prams: [
                {
                    name: '红大单',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红大双',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红小单',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '红小双',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '蓝大单',
                    val: 5,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝大双',
                    val: 6,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝小单',
                    val: 7,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '蓝小双',
                    val: 8,
                    active: false,
                    className: 'b-blue'
                }, {
                    name: '绿大单',
                    val: 9,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿大双',
                    val: 10,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿小单',
                    val: 11,
                    active: false,
                    className: 'b-green'
                }, {
                    name: '绿小双',
                    val: 12,
                    active: false,
                    className: 'b-green'
                }
            ]
        }
    ],
    lhc_boson4: [
        {
            type: '特码',
            prams: [
                {
                    name: '特大',
                    val: 1,
                    active: false
                }, {
                    name: '特小',
                    val: 2,
                    active: false
                }, {
                    name: '特尾大',
                    val: 3,
                    active: false
                }, {
                    name: '特尾小',
                    val: 4,
                    active: false
                }, {
                    name: '特单',
                    val: 5,
                    active: false
                }, {
                    name: '特双',
                    val: 6,
                    active: false
                }, {
                    name: '特大单',
                    val: 7,
                    active: false
                }, {
                    name: '特大双',
                    val: 8,
                    active: false
                }, {
                    name: '特合大',
                    val: 9,
                    active: false
                }, {
                    name: '特合小',
                    val: 10,
                    active: false
                }, {
                    name: '特小单',
                    val: 11,
                    active: false
                }, {
                    name: '特小双',
                    val: 12,
                    active: false
                }, {
                    name: '特合单',
                    val: 13,
                    active: false
                }, {
                    name: '特合双',
                    val: 14,
                    active: false
                }, {
                    name: '特天肖',
                    val: 15,
                    active: false
                }, {
                    name: '特地肖',
                    val: 16,
                    active: false
                }, {
                    name: '特前肖',
                    val: 17,
                    active: false
                }, {
                    name: '特后肖',
                    val: 18,
                    active: false
                }, {
                    name: '特家肖',
                    val: 19,
                    active: false
                }, {
                    name: '特野肖',
                    val: 20,
                    active: false
                }
            ]
        }
    ],
    lhc_born: [
        {
            type: '特肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born2: [
        {
            type: '合肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_zs: [
        {
            type: '正肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_two: [
        {
            type: '二连肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_three: [
        {
            type: '三连肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_four: [
        {
            type: '四连肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_five: [
        {
            type: '五连肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_pt: [
        {
            type: '平特一肖',
            prams: [
                {
                    name: '鼠',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '牛',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '虎',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '兔',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '龙',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '蛇',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '马',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '羊',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '39',
                            val: '39'
                        }
                    ]
                }, {
                    name: '猴',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '38',
                            val: '38'
                        }
                    ]
                }, {
                    name: '鸡',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }, {
                    name: '狗',
                    val: 11,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '12',
                            val: '12'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '猪',
                    val: 12,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born5: [
        {
            type: '头尾数',
            prams: [
                {
                    name: '0头',
                    val: 1,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '1头',
                    val: 2,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '2头',
                    val: 3,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '3头',
                    val: 4,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '4头',
                    val: 5,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '1尾',
                    val: 6,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '2尾',
                    val: 7,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '3尾',
                    val: 8,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '4尾',
                    val: 9,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '5尾',
                    val: 10,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '6尾',
                    val: 11,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '7尾',
                    val: 12,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '8尾',
                    val: 13,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '9尾',
                    val: 14,
                    active: false,
                    className: 'b-red'
                }, {
                    name: '0尾',
                    val: 15,
                    active: false,
                    className: 'b-red'
                }
            ]
        }
    ],
    lhc_wx: [
        {
            type: '五行',
            prams: [
                {
                    name: '金',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '04',
                            val: '04'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '47',
                            val: '47'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '木',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '08',
                            val: '08'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '45',
                            val: '45'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '水',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '06',
                            val: '06'
                        }, {
                            name: '13',
                            val: '11'
                        }, {
                            name: '14',
                            val: '16'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '35',
                            val: '32'
                        }, {
                            name: '36',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '火',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '02',
                            val: '02'
                        }, {
                            name: '09',
                            val: '09'
                        }, {
                            name: '10',
                            val: '10'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '土',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '11',
                            val: '11'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '41',
                            val: '41'
                        }, {
                            name: '42',
                            val: '42'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_ptw: [
        {
            type: '平特尾数',
            prams: [
                {
                    name: '0尾',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '1尾',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '2尾',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '3尾',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '4尾',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '5尾',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '6尾',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '7尾',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }, {
                    name: '8尾',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '9尾',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_wtwo: [
        {
            type: '二连尾',
            prams: [
                {
                    name: '0尾',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '1尾',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '2尾',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '3尾',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '4尾',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '5尾',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '6尾',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '7尾',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }, {
                    name: '8尾',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '9尾',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_wthree: [
        {
            type: '三连尾',
            prams: [
                {
                    name: '0尾',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '1尾',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '2尾',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '3尾',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '4尾',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '5尾',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '6尾',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '7尾',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }, {
                    name: '8尾',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '9尾',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_wfour: [
        {
            type: '四连尾',
            prams: [
                {
                    name: '0尾',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '1尾',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '2尾',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '3尾',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '4尾',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '5尾',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '6尾',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '7尾',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }, {
                    name: '8尾',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '9尾',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ],
    lhc_born_wfive: [
        {
            type: '五连尾',
            prams: [
                {
                    name: '0尾',
                    val: 1,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '10',
                            val: '10'
                        }, {
                            name: '20',
                            val: '20'
                        }, {
                            name: '30',
                            val: '30'
                        }, {
                            name: '40',
                            val: '40'
                        }
                    ]
                }, {
                    name: '1尾',
                    val: 2,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '01',
                            val: '01'
                        }, {
                            name: '11',
                            val: '11'
                        }, {
                            name: '21',
                            val: '21'
                        }, {
                            name: '31',
                            val: '31'
                        }, {
                            name: '41',
                            val: '41'
                        }
                    ]
                }, {
                    name: '2尾',
                    val: 3,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '02',
                            val: '02'
                        }, {
                            name: '12',
                            val: '12'
                        }, {
                            name: '22',
                            val: '22'
                        }, {
                            name: '32',
                            val: '32'
                        }, {
                            name: '42',
                            val: '42'
                        }
                    ]
                }, {
                    name: '3尾',
                    val: 4,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '03',
                            val: '03'
                        }, {
                            name: '13',
                            val: '13'
                        }, {
                            name: '23',
                            val: '23'
                        }, {
                            name: '33',
                            val: '33'
                        }, {
                            name: '43',
                            val: '43'
                        }
                    ]
                }, {
                    name: '4尾',
                    val: 5,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '04',
                            val: '04'
                        }, {
                            name: '14',
                            val: '14'
                        }, {
                            name: '24',
                            val: '24'
                        }, {
                            name: '34',
                            val: '34'
                        }, {
                            name: '44',
                            val: '44'
                        }
                    ]
                }, {
                    name: '5尾',
                    val: 6,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '05',
                            val: '05'
                        }, {
                            name: '15',
                            val: '15'
                        }, {
                            name: '25',
                            val: '25'
                        }, {
                            name: '35',
                            val: '35'
                        }, {
                            name: '45',
                            val: '45'
                        }
                    ]
                }, {
                    name: '6尾',
                    val: 7,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '06',
                            val: '06'
                        }, {
                            name: '16',
                            val: '16'
                        }, {
                            name: '26',
                            val: '26'
                        }, {
                            name: '36',
                            val: '36'
                        }, {
                            name: '46',
                            val: '46'
                        }
                    ]
                }, {
                    name: '7尾',
                    val: 8,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '07',
                            val: '07'
                        }, {
                            name: '17',
                            val: '17'
                        }, {
                            name: '27',
                            val: '27'
                        }, {
                            name: '37',
                            val: '37'
                        }, {
                            name: '47',
                            val: '47'
                        }
                    ]
                }, {
                    name: '8尾',
                    val: 9,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '08',
                            val: '08'
                        }, {
                            name: '18',
                            val: '18'
                        }, {
                            name: '28',
                            val: '28'
                        }, {
                            name: '38',
                            val: '38'
                        }, {
                            name: '48',
                            val: '48'
                        }
                    ]
                }, {
                    name: '9尾',
                    val: 10,
                    active: false,
                    className: 'bd-red',
                    para: [
                        {
                            name: '09',
                            val: '09'
                        }, {
                            name: '19',
                            val: '19'
                        }, {
                            name: '29',
                            val: '29'
                        }, {
                            name: '39',
                            val: '39'
                        }, {
                            name: '49',
                            val: '49'
                        }
                    ]
                }
            ]
        }
    ]
}

// 六合彩 波色 生肖
// let  hong_bo = ['01', '02','07','08','12', '13' , '18' , '19' , '23' , '24' , '29' , '30' , '34' , '35' , '40' , '45' ,  '46'];
// let lan_bo =  ['03' ,'04' ,'09' ,'10' ,'14' ,'15' ,'20' ,'25' ,'26' ,'31' ,'36' ,'37' ,'41' ,'42' ,'47' ,'48' ];
// let lv_bo = ['05' ,  '06' ,  '11' ,  '16' ,  '17' ,  '21' ,  '22' ,  '27' ,  '28' ,  '32' ,  '33' ,  '38'  ,  '39' ,  '43' ,  '44' ,  '49']
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