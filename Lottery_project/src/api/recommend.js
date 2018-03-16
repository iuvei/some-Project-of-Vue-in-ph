import jsonp from 'common/js/jsonp'
import {commonParams, options, def_env, lotteryRanges} from './config'
import axios from 'axios'
import Vue from 'vue'

import {mapState} from 'vuex'
import { Indicator, MessageBox, Toast  } from 'mint-ui';

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

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return jsonp(url, data, options)
}

/**
 *  跟后台交互公共方法 post get put delete
 *  @params [String]  api  接口名
 *  @params [Object]  params 参数
 *  @params [Function] sucfn 成功回调函数
 *  @params [Function] errfn 失败回调函数
 *  http://13.125.5.105:8092   customer
 *  http://120.76.211.1:8093   ower
 *  http://13.125.24.135:8094  test server
 *  https://www.soarg888.com/  product
 * */

export const requestOpt = {
  /*dev*/
//    host:(process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/':'https://www.soarg888.com/',
//    url: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/v1/' : 'https://www.soarg888.com/api/v1/',
//    urlAuth: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/auth/v1/' : 'https://www.soarg888.com/api/auth/v1/',
//    urlAuthUser: (process.env.NODE_ENV==='development') ?'http://13.125.24.135:8094/api/auth/v1/user/' : 'https://www.soarg888.com/api/auth/v1/user/',
//    urlUser: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/v1/user/' : 'https://www.soarg888.com/api/v1/user/',

  /*host:(process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/':'http://13.125.24.135:8094/',
  url: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/v1/' : 'http://13.125.24.135:8094/api/v1/',
  urlAuth: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/auth/v1/' : 'http://13.125.24.135:8094/api/auth/v1/',
  urlAuthUser: (process.env.NODE_ENV==='development') ?'http://13.125.24.135:8094/api/auth/v1/user/' : 'http://13.125.24.135:8094/api/auth/v1/user/',
  urlUser: (process.env.NODE_ENV==='development') ? 'http://13.125.24.135:8094/api/v1/user/' : 'http://13.125.24.135:8094/api/v1/user/',
  */

  host:(process.env.NODE_ENV==='development') ? 'https://www.soarg888.com/':'https://www.soarg888.com/',
  url: (process.env.NODE_ENV==='development') ? 'https://www.soarg888.com/api/v1/' : 'https://www.soarg888.com/api/v1/',
  urlAuth: (process.env.NODE_ENV==='development') ? 'https://www.soarg888.com/api/auth/v1/' : 'https://www.soarg888.com/api/auth/v1/',
  urlAuthUser: (process.env.NODE_ENV==='development') ?'https://www.soarg888.com/api/auth/v1/user/' : 'https://www.soarg888.com/api/auth/v1/user/',
  urlUser: (process.env.NODE_ENV==='development') ? 'https://www.soarg888.com/api/v1/user/' : 'https://www.soarg888.com/api/v1/user/',

  reqGet(api, token, sucfn, errfn) { // get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    return axios.get(url, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqGetuser(api, token, sucfn, errfn) { // get 方式请求 有 auth 较验 user
    let url = this.urlAuthUser+api;
    return axios.get(url, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(sucfn)
      .catch(errfn)
  },
  reqGetparam(api, params, sucfn, errfn) { // get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);
    return axios.get(url, data)
      .then(sucfn)
      .catch(errfn)
  },
  reqGetparam_token(api,token,params, sucfn, errfn) { // ------------gan------------------get 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);
    return axios.get(url, data,{
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },

  reqPost(api,token, params, sucfn, errfn) { // post 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);

    return axios.post(url,data, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPostuser(api, token, params, sucfn, errfn) { // post 方式请求 有 auth 较验 user
    let url = this.urlAuthUser+api;
    const data = Object.assign(params);

    return axios.post(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPostNouser(api, params, sucfn, errfn) { // post 方式请求
    let url = this.url+api;
    const data = Object.assign(params);

    return axios.post(url,data)
      .then(sucfn)
      .catch(errfn)
  },
  reqPutAuthUser(api, token, params, sucfn, errfn) { // put 方式请求 有 auth user较验
    let url = this.urlAuthUser+api;
    const data = Object.assign(params);

    return axios.put(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPut(api,token, params, sucfn, errfn) { // put 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    const data = Object.assign(params);

    return axios.put(url,data, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPutNouser(api,token, sucfn, errfn) { // put 方式请求
    let url = this.url+api;

    return axios.put(url,{}, {
      headers: {
        Authorization: 'Bearer '+ token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPutuser(api,params, sucfn, errfn) { // put 方式请求
    let url = this.urlUser+api;
    let param = Object.assign(params)

    return axios.put(url,param )
      .then(sucfn)
      .catch(errfn)
  },
  reqDelete(api,token, sucfn, errfn) { // delete 方式请求 有 auth 较验
    let url = this.urlAuth+api;
    return axios.delete(url, {
      headers: {Authorization: 'Bearer '+ token}
    }).then(sucfn).catch(errfn)
  },
  /*没有auth 校验*/
  reqnoGet(api, sucfn, errfn) { // get 方式请求 没有 auth 较验
    let url = this.url+api;
    return axios.get(url)
      .then(sucfn)
      .catch(errfn)
  },
  reqnoGetpara(api, params, sucfn, errfn) { // get 方式请求 没有 auth 较验 带参数
    let url = this.url+api;
    const data = Object.assign(params);
    return axios.get(url, data)
      .then(sucfn)
      .catch(errfn)
  },
  req_host(api,sucfn,errfn){
      let host = this.host + api
      return axios.get(host).then(sucfn).catch(errfn);
  }
}

/**
 *  时间格式化
 * */
export const dtFormate = {
  // 日期格式 默认当前日期
  date(dt) {
    let now = dt?(new Date(dt)):dt || new Date();
    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();

    return yy +'-'+  MM +'-'+dd;
  },
  /*
  *  日期时间格式 默认当前日期时间
  *  @params [String] dt 可选
  *  @params [String] type 注意 type 不能含有数字的任意字符
  * */
  datetime(dt,type) {
    let now = dt?(new Date(dt)):'' || new Date();
    type = type || 'hm';
    if (dt&&!/\d/g.test(dt)) {
      now = new Date();
      type = dt;
    };

    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();
    let HH = now.getHours()>9?now.getHours():'0'+now.getHours();
    let mm = now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = now.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();

    let rst = type==='hm'? (yy +'-'+  MM +'-'+dd+ ' '+HH+ ':'+mm) : (yy +'-'+  MM +'-'+dd+ ' '+HH+ ':'+mm+':'+ss)

    return rst;
  },
  // 昨天 1  一周 7  半月 15
  yestaday(n) {
    n = n || 1;
    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() - 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();

    return yy +'-'+  MM +'-'+dd;
  },
  future(n) {
    n = n || 1;
    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() + 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();

    return yy +'-'+  MM +'-'+dd;
  }
}

/*
*  自定义提示框
* */
export function alertip(msg) {
  let tipElCon = document.createElement('div');
  tipElCon.className = 'def-dialog-container';
  let tipEl = document.createElement('div');
  tipEl.className = 'def-dialog';
  let spanEl = document.createElement('span')
  spanEl.innerHTML = msg;
  tipEl.appendChild(spanEl)
  // document.body.appendChild(tipElCon);
  document.body.appendChild(tipEl);
  setTimeout(() => {
    // document.body.removeChild(tipElCon);
    document.body.removeChild(tipEl);
  },2000)
}

export function mt_toast (info) {
  info = info ||  '提示信息'
  Toast(info)
}
export function mt_loading_tip () {
  Indicator.open({
    spinnerType: 'fading-circle'
  })
}
export function mt_loading_open (info) {
  info = info ||  '加载中...'
  Indicator.open({
    text:info,
    spinnerType: 'fading-circle'
  })
}
export function mt_loading_close () {
  Indicator.close()
}
export function mt_confirm (msg, cb, okText) {
  msg = msg || '确定执行此操作？'
  okText = okText || '确定'
  MessageBox.confirm('', {
    title: '',
    message: msg,
    confirmButtonClass: 'mt-del',
    confirmButtonText: okText
  }).then(res => {
    cb&&cb(res)
  }).catch(err => {
    if (err !== 'cancel'){
      mt_toast(err)
    }
  })
}
export function mt_alert (msg, cb) {
  msg = msg || ''
  MessageBox.alert('', {
    title: '',
    message: msg,
    confirmButtonClass: 'mt-del'
  }).then(res => {
    cb&&cb(res)
  })
}

export function mt_alertip (msg, cb) {
  msg = msg || ''
  MessageBox.alert('', {
    title: '提示',
    message: msg,
    confirmButtonClass: 'mt-ok'
  }).then(res => {
    cb&&cb(res)
  })
}

/*
*  复制功能
* */
export function CopyVal(str) {
  window.getSelection().removeAllRanges();
  let save = function(e) {
    e.clipboardData.setData('text/plain', str);
    e.preventDefault();
  };

  document.addEventListener('copy', save);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  document.removeEventListener('copy', save);

  mt_toast('复制成功');
}

/*
*  校验手机号是否合法
* */
export function isPhone(str) {
  if (!str) {
    mt_toast('手机号码不能为空');
    return false;
  };
  if (!/^\d{8,}$/.test(str)) {
    mt_toast('您输入的手机号码不合法')
    return false;
  };
  return true;
}

/**
 *  投注号码中间含空格换行
 * */
export function insertSpace(val) {
  console.log(val)
  console.log(val.replace(/\s(\d+\,+)/g, '<br />$1'))
  return val.replace(/\s(\d+\,+)/g, '<br />$1')
}

/**
 *  获取设备信息
 * */
export function  sysPlatform() {
  let mobile = navigator.userAgent.toLowerCase();
  return (/iphone/g.test(mobile)) ? 'ios' : 'android'
}

export function randomColor(){
  return "#"+(~~(Math.random()*(1<<24))).toString(16)
}
export function genUid(){
  return new Date().getTime()+""+Math.floor(Math.random()*899+100);
}
/*
*  判断数组是否包含指定元素
* */
export function array_contain (arr, name) {
  for (let i=0;i<arr.length;i++) {
    if(arr[i] === name) {
      return true
    }
  }
  return false
}
/*
*  从指定的数组中随机取出 n 个不重复的值
* */
export function getArrayItems(arr, num) {
  let temp_array = [];
  for (let index in arr) {
    temp_array.push(arr[index]);
  }
  let return_array = [];
  for (var i = 0; i<num; i++) {
    if (temp_array.length>0) {
      var arrIndex = Math.floor(Math.random()*temp_array.length);
      return_array[i] = temp_array[arrIndex];
      temp_array.splice(arrIndex, 1);
    } else {
      break;
    }
  }
  return return_array;
}

/*
*  检查2个数组是否有相同元素
* */
export function  checkArr(arr1,arr2){
  let rs=false;
  for (var i=0; i<arr1.length; i++){
    for (var j=0;j<arr2.length;j++){
      if( arr1[i]== arr2[j]){
        rs=true;
        break;
      }
    }
  }
  return rs;
}
/*
* 一个数值完全包含另外一个数组
* */
export function isContained(a, b){
  if(!(a instanceof Array) || !(b instanceof Array)) return false;
  if(a.length < b.length) return false;
  let aStr = a.toString();
  for(let i = 0, len = b.length; i < len; i++){
    if(aStr.indexOf(b[i]) == -1) return false;
  }
  return true;
}
/*
*  从数组中移除指定的元素
*  [0,1,2,3] [0,1]或0
* */
export function getArrays(arr, val) {
  if (!val) return arr;
  let return_array = [];

  if (typeof val !== 'object') {
    for (let i = 0; i<arr.length; i++) {
      if (val != arr[i]) {
        return_array.push(arr[i])
      }
    }
  } else {
    for (let i = 0; i<arr.length; i++) {
      for (let m = 0; m<val.length; m++)
      if (val[m] != arr[i]) {
        return_array.push(arr[i])
      }
    }
  }
  return return_array;
}
/*
* 数组排序 按指定的元素排序
* arr.sort(arrSort('id'))
* */
export function arrSort(property){
  return function(a,b){
    let value1 = a[property];
    let value2 = b[property];
    return value1 - value2;
  }
}

/*
*  图片替换
* */

export function replacePic (code) {
  if (code === 'CQSSC'){
    console.log(chongqinshishicai)
    return chongqinshishicai
  } else if (code === 'FC3D'){
    return sand
  } else if (code === 'DLT'){
    return daletou
  } else if (code === 'PL3'){
    return pailei3
  } else if (code === 'PL5'){
    return pailei5
  } else if (code === 'GD11X5'){
    return guangdong
  } else if (code === 'XGLHC'){
    return liuhecai
  } else if (code === 'SHSSL'){
    return shishile
  } else if (code === 'GXKS'){
    return gui_kuaisan
  } else if (code === 'AHKS'){
    return wan_kuaisan
  } else if (code === 'JSKS'){
    return su_kuaisan
  } else if (code === 'SSQ'){
    return shuangseqiu
  } else if (code === 'SH11X5'){
    return shanghai
  } else if (code === 'XJSSC'){
    return xin_shishicai
  } else if (code === 'BJ28'){
    return jing_28
  } else if (code === 'XY28'){
    return xing_28
  } else if (code === 'JX11X5'){
    return jiangxi
  } else if (code === 'TJSSC'){
    return tianjinshishicai1
  } else if (code === 'SD11X5'){
    return shandong
  } else if (code === 'SFPK10'){
    return san_pk
  } else if (code === 'SFSSC'){
    return sanfeishishicai
  } else if (code === 'BJPK10'){
    return jing_pk
  }
}

export function chaLotteryNumber (firstName, lastName, code) {
  code = code || '';
  // 福彩3d
  if ((firstName==='三星'&&lastName==='直选复式')
    || (firstName==='定位胆'&&lastName==='定位胆')) { // 百位 十位 个位 0-9
   if (code==='SD11X5'
     ||code==='GD11X5'
     ||code==='JX11X5'
     ||code==='SH11X5'
     ||code==='PL5'){ // 11 5  定位胆 第几位
      return 'optionalPos'
   } else if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC') {
     return 'sscPos'
   } else if (code==='BJPK10'||code==='SFPK10'||code==='JSPK10') {
     return 'PK10nopos'
   }
   return 'threeSelectLast'
  } else if (firstName==='三星'&&lastName==='直选和值'
    || (firstName==='三星'&&lastName==='后三直选和值')
    || (firstName==='三星'&&lastName==='前三直选和值')
    || (firstName==='任选三'&&lastName==='前三直选和值')
    || (firstName==='任选三'&&lastName==='后三直选和值')
    || (firstName==='任选三'&&lastName==='五选三直选和值')
    || (firstName==='任选三'&&lastName==='前四直选和值')
    || (firstName==='任选三'&&lastName==='后四直选和值')){ // 0 - 27
    return 'threeStarGroup'
  } else if ((firstName==='三星'&&lastName==='组三复式')
    || (firstName==='三星'&&lastName==='后三组选三')
    || (firstName==='三星'&&lastName==='前三组选三')
    || (firstName==='三星'&&lastName==='后三组选三复式')
    || (firstName==='三星'&&lastName==='前三组选三复式')
    || (firstName==='任选三'&&lastName==='前三组三复式')
    || (firstName==='任选三'&&lastName==='后三组三复式')){ // 组三 0-9
    return 'threeGroup'
  } else if (firstName==='三星'&&lastName==='组六复式'
    || (firstName==='三星'&&lastName==='后三组选六')
    || (firstName==='三星'&&lastName==='前三组选六')
    || (firstName==='任选三'&&lastName==='前三组六复式')
    || (firstName==='任选三'&&lastName==='后三组六复式')){ // 组六 0-9
    return 'sixGroup'
  } else if (firstName==='三星'&&lastName==='组三和值'
    || (firstName==='任选三'&&lastName==='前三组选和值')
    || (firstName==='任选三'&&lastName==='后三组选和值')){ // 1 - 26
    return 'threeGroupSum'
  } else if (firstName==='三星'&&lastName==='组六和值'){ // 3 - 24
    return 'sixGroupSum'
  } else if (firstName==='二星'&&lastName==='前二直选'){
    return 'twoStarFirst'
  } else if ((firstName==='二星'&&lastName==='前二组选')
    || (firstName==='二星'&&lastName==='后二组选')
    || (firstName==='任选二'&&lastName==='前二组选复式')
    || (firstName==='任选二'&&lastName==='后二组选复式')){ // 组选 0-9
    return 'group1'
  } else if (firstName==='二星'&&lastName==='后二直选'){
    return 'twoStarLast'
  } else if (firstName==='大小单双'&&lastName==='前二大小单双'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC') {
      return 'bigsmallFirst2s'
    } else if (code=='PL5'){
      return 'PL5DXDS'
    }
    return 'bigsmallFirst2'
  } else if (firstName==='大小单双'&&lastName==='后二大小单双'){
    if (code=='PL5'){
      return 'PL5DXDS2'
    }
    return 'bigsmallLast2'
  }  else if (firstName==='大小单双'&&lastName==='前三大小单双'){
    if (code=='PL5'){
      return 'PL5DXDS1'
    }
    return 'bigsmallFirst3s'
  }  else if (firstName==='大小单双'&&lastName==='后三大小单双'){
    if (code=='PL5'){
      return 'PL5DXDS22'
    }
    return 'bigsmallLast3'
  } else if (firstName==='不定位'&&lastName==='一码不定位'){
    return 'two1'
  } else if (firstName==='不定位'&&lastName==='二码不定位'){
    return 'two2'
  } else if (firstName==='任选二'&&lastName==='直选复式'
    || (firstName==='任选三'&&lastName==='直选复式')
    || (firstName==='任选四'&&lastName==='直选复式')){ // 5位
    if(code=='PL5'){
      return 'optionalPos'
    } else {
      return 'fiveStars'
    }
  } else if (firstName==='任选二'&&lastName==='前二直选和值'
    || (firstName==='任选二'&&lastName==='后二直选和值')
    || (firstName==='任选二'&&lastName==='五选二直选和值')){ // 0 - 18
    return 'twoFirst'
  } else if (firstName==='任选二'&&lastName==='前二组选和值'
    || (firstName==='任选二'&&lastName==='后二组选和值')){ // 1 - 17
    return 'twogroup'
  } else if (firstName==='任选四'&&lastName==='前四组选24'
    || (firstName==='任选四'&&lastName==='后四组选24')){
    return 'group24'
  } else if (firstName==='任选四'&&lastName==='前四组选12'
    || (firstName==='任选四'&&lastName==='后四组选12')){
    return 'groupfour12'
  } else if (firstName==='任选四'&&lastName==='前四组选6'
    || (firstName==='任选四'&&lastName==='后四组选6')){
    return 'groupfour6'
  } else if (firstName==='任选四'&&lastName==='前四组选4'
    || (firstName==='任选四'&&lastName==='后四组选4')){
    return 'groupfour4'
  }
  // 排列5
  else if (firstName==='五星'&&lastName==='五星直选复式'){ // 排列5 / 3  第几位
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC'){ // 几位
      return 'fiveStars'
    }
    return 'fiveStar'
  } else if (firstName==='四星'&&lastName==='四星直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC'){ // 几位
      return 'fourStars'
    }
    return 'fourStar'
  } else if (firstName==='三星'&&lastName==='后三直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC'){ // 几位
      return 'threeStarLasts'
    }
    return 'threeStarLast'
  } else if (firstName==='三星'&&lastName==='前三直选复式'){
    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'||code==='SFSSC'||code==='FFSSC'){ // 几位
      return 'threeStarFirsts'
    }
    return 'threeStarFirst'
  } else if (firstName==='二星'&&lastName==='前二直选'){
 /*    if (code==='XJSSC'||code==='CQSSC'||code==='TJSSC'){ // 几位
      return 'twoStarFirsts'
    }*/
    return 'twoStarFirst'
  }
  // 11选5
  else if (firstName==='任选复式'&&lastName==='任选一中一'){
    return 'optional1'
  } else if (firstName==='任选复式'&&lastName==='任选二中二'){
    return 'optional22'
  } else if (firstName==='任选复式'&&lastName==='任选三中三'){
    return 'optional33'
  } else if (firstName==='任选复式'&&lastName==='任选四中四'){
    return 'optional44'
  } else if (firstName==='任选复式'&&lastName==='任选五中五'){
    return 'optional55'
  } else if (firstName==='任选复式'&&lastName==='任选六中五'){
    return 'optional65'
  } else if (firstName==='任选复式'&&lastName==='任选七中五'){
    return 'optiona75'
  } else if (firstName==='任选复式'&&lastName==='任选八中五'){
    return 'optional85'
  }
  else if (firstName==='三码'&&lastName==='前三直选复式'){
    return 'optional3m'
  } else if (firstName==='三码'&&lastName==='前三组选复式'){
    return 'optionalGroup'
  } else if (firstName==='三码'&&lastName==='中三直选复式'){
    return 'optional3mid'
  } else if ((firstName==='三码'&&lastName==='前三组选复式')
    || (firstName==='三码'&&lastName==='中三组选复式')
    || (firstName==='三码'&&lastName==='后三组选复式')
    || (firstName==='二码'&&lastName==='前二组选复式')
    || (firstName==='二码'&&lastName==='后二组选复式')){ // 11选5 组选
    return 'optionalGroup'
  } else if (firstName==='三码'&&lastName==='前三组选胆拖'
    || (firstName==='三码'&&lastName==='中三组选胆拖')
    || (firstName==='三码'&&lastName==='后三组选胆拖')
    || (firstName==='二码'&&lastName==='前二组选胆拖')
    || (firstName==='二码'&&lastName==='后二组选胆拖')
    || (firstName==='任选胆拖')){ // 11选5 组选胆拖
    return 'optionalGroupDT'
  } else if (firstName==='三码'&&lastName==='后三直选复式'){
    return 'optional3Last'
  }
  else if (firstName==='二码'&&lastName==='前二直选复式'){
    return 'optional2m'
  } else if (firstName==='二码'&&lastName==='后二直选复式'){
    return 'optional2Last'
  }
  else if (firstName==='不定位'&&lastName==='前三位'){
    return 'optionalNopos3f'
  } else if (firstName==='不定位'&&lastName==='中三位'){
    return 'optionalNopos3m'
  } else if (firstName==='不定位'&&lastName==='后三位'){
    return 'optionalNopos3l'
  }
  // 快三
  else if (firstName==='和值'&&lastName==='和值'){
    return 'quick3Sum'
  } else if (firstName==='三同号'&&lastName==='通选'){
    return 'quick3Samet'
  } else if (firstName==='三同号'&&lastName==='单选'){
    return 'quick3Samed'
  } else if ((firstName==='三不同号'&&lastName==='标准')
    || (firstName==='二不同号'&&lastName==='标准')){ // 1 - 6
    return 'quick3normal'
  } else if ((firstName==='三不同号'&&lastName==='胆拖')
    || (firstName==='二不同号'&&lastName==='胆拖')){ // 1 - 6
    return 'quick3DT'
  } else if (firstName==='三连号'&&lastName==='通选'){
    return 'quick3lh'
  } else if (firstName==='二同号'&&lastName==='复选'){
    return 'quick32th'
  } else if (firstName==='二同号'&&lastName==='单选'){
    return 'quick32bth'
  }
  // PK10
  else if (firstName==='前一'){
    return 'PK10first'
  } else if (firstName==='前二'){
    return 'PK10second'
  } else if (firstName==='前三'){
    return 'PK10third'
  }
  // 大乐透 lhc_zert
  else if (firstName==='普通投注'&&lastName==='普通投注'&&code==='DLT'){
    return 'dlt'
  }
  // 双色球
  else if (firstName==='普通投注'&&lastName==='普通投注'&&code==='SSQ'){
    return 'ssq'
  }
  // 六合彩
  else if ((firstName==='特码B'|| firstName==='特码A') && lastName==='选码'){
    return 'lhc'
  }
  else if (( firstName==='正码') && lastName==='选码'){
    return 'lhc_zm'
  }
  else if (( firstName==='正码') && lastName==='其他'){
    return 'lhc_zm_qt'
  }
  else if (( firstName==='正码特') && lastName==='正一大小'){
    return 'lhc_zyt2'
  }
  else if (( firstName==='正码特') && lastName==='正二大小'){
    return 'lhc_zert2'
  }
  else if (( firstName==='正码特') && lastName==='正三大小'){
    return 'lhc_zsant2'
  }
  else if (( firstName==='正码特') && lastName==='正四大小'){
    return 'lhc_zst2'
  }
  else if (( firstName==='正码特') && lastName==='正五大小'){
    return 'lhc_zwt2'
  }
  else if (( firstName==='正码特') && lastName==='正六大小'){
    return 'lhc_zlt2'
  }
  else if (( firstName==='正码特') && lastName==='正一特'){
    return 'lhc_zyt'
  }
  else if (( firstName==='正码特') && lastName==='正二特'){
    return 'lhc_zert'
  }
  else if (( firstName==='正码特') && lastName==='正三特'){
    return 'lhc_zsant'
  }
  else if (( firstName==='正码特') && lastName==='正四特'){
    return 'lhc_zst'
  }
  else if (( firstName==='正码特') && lastName==='正五特'){
    return 'lhc_zwt'
  }
  else if (( firstName==='正码特') && lastName==='正六特'){
    return 'lhc_zlt'
  }
  else if (( firstName==='正码1-6') && lastName==='正码一'){
    return 'lhc_zm_one'
  }
  else if (( firstName==='正码1-6') && lastName==='正码二'){
    return 'lhc_zm_two'
  }
  else if (( firstName==='正码1-6') && lastName==='正码三'){
    return 'lhc_zm_three'
  }
  else if (( firstName==='正码1-6') && lastName==='正码四'){
    return 'lhc_zm_four'
  }
  else if (( firstName==='正码1-6') && lastName==='正码五'){
    return 'lhc_zm_five'
  }
  else if (( firstName==='正码1-6') && lastName==='正码六'){
    return 'lhc_zm_six'
  }
  else if (firstName==='色波'&&lastName==='色波'){
    return 'lhc_boson'
  }
  else if (firstName==='色波'&&lastName==='半波'){
    return 'lhc_boson2'
  }
  else if (firstName==='色波'&&lastName==='半半波'){
    return 'lhc_boson3'
  }
  else if ((firstName==='特码B'|| firstName==='特码A') && lastName==='两面'){
    return 'lhc_boson4'
  }
  else if (firstName==='连码'&&lastName==='中二'){
    return 'lhc_lm_wing32'
  }
  else if (firstName==='连码'&&lastName==='三全中'){
    return 'lhc_lm_wing3'
  }
  else if (firstName==='连码'&&lastName==='二全中'){
    return 'lhc_lm_wing2'
  }
  else if (firstName==='连码'&&lastName==='中特'){
    return 'lhc_lm_wing2zt'
  }
  else if (firstName==='连码'&&lastName==='特串'){
    return 'lhc_lm_wing2tc'
  }
  else if (firstName==='连码'&&lastName==='四全中'){
    return 'lhc_lm_wing4'
  }
  else if (firstName==='特肖'&&lastName==='特肖'){
    return 'lhc_born'
  }
  else if (firstName==='合肖'&&lastName==='合肖'){
    return 'lhc_born2'
  }
  else if (firstName==='正肖'&&lastName==='生肖'){
    return 'lhc_born_zs'
  }
  else if (firstName==='连肖连尾'&&lastName==='二连肖'){
    return 'lhc_born_two'
  }
  else if (firstName==='连肖连尾'&&lastName==='三连肖'){
    return 'lhc_born_three'
  }
  else if (firstName==='连肖连尾'&&lastName==='四连肖'){
    return 'lhc_born_four'
  }
  else if (firstName==='连肖连尾'&&lastName==='五连肖'){
    return 'lhc_born_five'
  }
  else if (firstName==='头尾数'&&lastName==='头尾数'){
    return 'lhc_born5'
  }
  else if (firstName==='五行'&&lastName==='种类'){
    return 'lhc_wx'
  }
  else if (firstName==='平特一肖尾数'&&lastName==='一肖'){
    return 'lhc_born_pt'
  }
  else if (firstName==='平特一肖尾数'&&lastName==='尾数'){
    return 'lhc_born_ptw'
  }
  else if (firstName==='连肖连尾'&&lastName==='二连尾'){
    return 'lhc_born_wtwo'
  }
  else if (firstName==='连肖连尾'&&lastName==='三连尾'){
    return 'lhc_born_wthree'
  }
  else if (firstName==='连肖连尾'&&lastName==='四连尾'){
    return 'lhc_born_wfour'
  }
  else if (firstName==='连肖连尾'&&lastName==='五连尾'){
    return 'lhc_born_wfive'
  }
  // 两面盘 doubleDiskDrog
  else if (firstName==='两面盘'&&lastName==='两面盘'
    &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doubleDisk'
  }
  else if (firstName==='两面盘'&&lastName==='龙虎和'
    &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doubleDiskDrog'
  }


   //  顺子前三
 else if(firstName === '顺子' && lastName==='前三' &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doubleShunZi_qian3'
}
//  顺子中三
else if(firstName === '顺子' && lastName==='中三' &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doubleShunZi_zhong3'
}
//  顺子前三
else if(firstName === '顺子' && lastName==='后三' &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doubleShunZi_hou3'
}

//  ------------------------------------------------------------------------------------------------------------------------------------------------------
//  斗牛
else if(firstName === '斗牛' && lastName === '牛牛'  &&(code=='CQSSC'|| code=='SFSSC'|| code=='TJSSC'|| code=='XJSSC'||code==='FFSSC' )){
    return 'doublueDouNiu'
}



  // 1-5球
  else if (firstName==='1-5球'&&lastName==='1-5球'){
    return 'one_five'
  }
  // 前中后
  else if (firstName==='前中后'&&lastName==='前中后'){
    return 'firMidLas'
  }
  // 和值B
  else if (firstName==='和值B'&&lastName==='前和值'){
    return 'sumBF'
  }
  else if (firstName==='和值B'&&lastName==='中和值'){
    return 'sumBM'
  }
  else if (firstName==='和值B'&&lastName==='后和值'){
    return 'sumBL'
  }
  // 28 A
  else if (firstName==='混合'&&lastName==='混合'){
    return 'mixed'
  }
  else if (firstName==='特码'&&lastName==='特码'){
    return 'code28'
  }
  else if (firstName==='特码'&&lastName==='特码包三'){
    return 'code28_3'
  }
  else if (firstName==='波色'&&lastName==='波色'){
    return 'boson'
  }
  else if (firstName==='豹子'&&lastName==='豹子'){
    return 'leopard'
  }
  else if (firstName==='7色波'&&lastName==='种类'){
    return 'lhc_boson_server'
  }
  else if (firstName==='总肖'&&lastName==='种类'){
    return 'lhc_boson_zong'
  }
  else if (firstName==='自选不中'&&lastName==='自选不中'){
    return 'lhc_boson_nowing'
  }
  // 28 B
  else if (firstName==='两面盘'&&lastName==='两面盘'&&(code==='XY28' || code==='BJ28' )){
    return 'doubleDisk28'
  }
  else if (firstName==='两面盘'&&lastName==='两面盘'&&(code==='BJPK10'||code==='SFPK10'||code==='JSPK10')){
    return 'PK10thirdB'
  }
  else if (firstName==='1-10名'&&lastName==='1-10名'){
    return 'PK10Boneten'
  }
  else if (firstName==='冠亚军和'&&lastName==='冠亚军和'){
    return 'PK10Bsum'
  }
  else { //PK10Bsum
    return []
  }

}


