import axios from 'axios'

import { Indicator, MessageBox, Toast  } from 'mint-ui';





export const requestOpt = {
		url :'http://13.124.189.54:8092/zc-intf/rest/v1.0/',	
//	url :'http://10.10.31.75:8080/rest/v1.0/',
	//url : 'http://www.ddzlink.com/zc-intf/rest/v1.0/',
//	url : 'http://10.10.31.71:8080/zc-intf/rest/v1.0/',



  reqGet(api, sucfn, errfn) { 
    let url = this.url+api;
    return axios.get(url)
    	.then(sucfn)
      .catch(errfn)    
  },
  reqTokenGet(api, token, sucfn, errfn) { 
    let url = this.url+api;
    return axios.get(url, {
      headers: {
        auth_token: token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
  reqPost(api, params, sucfn, errfn) {
    let url = this.url+api;
    const data = Object.assign(params);

    return axios.post(url,data)
      .then(sucfn)
      .catch(errfn)
  },
   reqTokenPost(api, token, params, sucfn, errfn) { 
    let url = this.url+api;
    const data = Object.assign(params);
    return axios.post(url, data ,{
      headers: {
        auth_token: token
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
   reqTokenPostImg(api, token, params, sucfn, errfn) { 
    let url = this.url+api;
    const data = Object.assign(params);
    return axios.post(url, data ,{
      headers: {
        auth_token: token,
        'Content-Type':'multipart/form-data',
      }
    })
      .then(sucfn)
      .catch(errfn)
  },
}


//获取用户信息
export const getUserInfo = function(){		
	return JSON.parse(window.sessionStorage.getItem('userInfo'));
};


//设置用户信息
export const setUserInfo = function(data){	
	if (typeof data !== 'string') {
	    data = JSON.stringify(data);
	  }
	window.sessionStorage.setItem('userInfo',data);
};

export function getToday(dt) {

   	let now = dt?(new Date(dt)):dt || new Date();
    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();
	let HH = now.getHours()>9?now.getHours():'0'+now.getHours();
    let m = now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = now.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();
    return yy + MM.toString() + dd + HH + ':' + m + ':' + ss;
}
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
  datetime(dt) {
    let now = dt?(new Date(dt)):'' || new Date();
    if (dt&&!/\d/g.test(dt)) {
      now = new Date();
    };

    let yy = now.getFullYear();
    let MM = now.getMonth()+1>9?now.getMonth() + 1:'0'+(now.getMonth()+1);
    let dd = now.getDate()>9?now.getDate():'0'+now.getDate();
    let HH = now.getHours()>9?now.getHours():'0'+now.getHours();
    let mm = now.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = now.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();

    let rst = yy +'-'+  MM +'-'+dd+ ' '+HH+ ':'+mm+':'+ss

    return rst;
  },
  // 昨天 1  一周 7  半月 15
  yestaday(n=1,f) {

    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() - 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();
    let HH = yes.getHours()>9?now.getHours():'0'+now.getHours();
    let m = yes.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = yes.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();
	if(f){
		 return yy +'-'+ MM.toString() +'-' + dd ;
	}else{
		 return yy + MM.toString() + dd + HH + ':' + m + ':' + ss;
	}
   
  },
  future(n=1,f) {
  	
    let now =  new Date();
    let yes = new Date(now.setTime(now.getTime() + 1000*60*60*24*n));

    let yy = yes.getFullYear();
    let MM = yes.getMonth()+1>9?yes.getMonth() + 1:'0'+(yes.getMonth()+1);
    let dd = yes.getDate()>9?yes.getDate():'0'+yes.getDate();
	let HH = yes.getHours()>9?now.getHours():'0'+now.getHours();
    let m = yes.getMinutes()>9?now.getMinutes():'0'+now.getMinutes();
    let ss = yes.getSeconds()>9?now.getSeconds():'0'+now.getSeconds();
    
   if(f){
		 return yy +'-' + MM.toString() +'-' + dd ;
	}else{
		 return yy + MM.toString() + dd + HH + ':' + m + ':' + ss;
	}
  }
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
  if (!/^1\d{10}$/.test(str)) {
    mt_toast('您输入的手机号码不合法')
    return false;
  };
  return true;
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


