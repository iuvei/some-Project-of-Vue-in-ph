import Vue from 'vue'
import { dtFormate } from 'api/recommend'
// 过滤器
Vue.filter('formData', function(value) { 
	let len = value.length;
  return value.substring(5,len-3)
})
Vue.filter('discountData', function(value) { 
	let len = value.length;
  return value.substring(0,10)
})
Vue.filter('scoreTime', function(value) { 
	let len = value.length;
  return value.substring(11,len-3)
})
Vue.filter('matchNameH', function(value) { 
	if(value.indexOf('|') != -1){
		 return value.split('|')[0]
	}
})
Vue.filter('agencyStatus', function(value) { 
	if(value == 1){
		return '启用'
	}else{
		return '禁用'
	}
})
Vue.filter('matchNameA', function(value) { 
	if(value.indexOf('|') != -1){
		 return value.split('|')[1]
	}
})
Vue.filter('isOver', function(value) { 
	let x;
	switch (value){
	case 1:
	  x="完场";
	  break;
	case 2:
	  x="中断";
	  break;
	 case 3:
	  x="半场";
	  break;
	}
  return x
})
Vue.filter('guessTime', function(value) { 
	let str = ''
	if(dtFormate.future(0).substring(0,8) == value.substring(0,8)){
		str = '今天';
	}else if("1970010100:00:00" == value){
		str = '所有日期';
	}else{
		str = value.substring(4,6) + '月' + value.substring(6,8) + '日'
	}
  return str
})
Vue.filter('formWeek', function(value) { 
	let weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	let week = weekArray[new Date(value).getDay()];
  return week
})
Vue.filter('formWinType', function(value) { 
	let typeArray = new Array("","未完结","赢","输","平","输一半","赢一半");
  return typeArray[value]
})
Vue.filter('formMatchType', function(value) { 
	let typeArray = new Array("冠军","全场赛果","当前让球","全场大小","半场赛果","半场让球","半场大小","进球数区间","全场比分主胜","全场比分平","全场比分主负","全场比分其他","半全场赛果","全场单双","半场单双");
  return typeArray[value]
})
Vue.filter('orderName', function(value) { 
	let x;
	switch (value){
	case 2:
	  x="今日赛事";
	  break;
	case 6:
	  x="滚球";
	  break;
	 case 1:
	  x="早盘";
	  break;
	}
  return x
})
Vue.filter('dateAdd', function(value) { 
	value = value + "";
	String.prototype.splice = function(idx, rem, str) {
	    return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
	};
	let val = value.splice(4,0,'-').splice(7,0,'-').substring(0,10)
  return val
})
Vue.filter('scoreHome', function(value) { 
	if(value === undefined){
		return '';
	}
	if(value.indexOf('/')!== -1){
		let arr = value.split('/');
		if(arr[1]<0){
			value = arr[0]+'/'+(-arr[1]);
		}else{
			value = ''
		}
	}else{
		if(value<0){
			value = -value;
		}else if(value === 0){
			value.length === 1 ? value = '': ''
		}else{
			value = ''
		}
	}	
  return value;
})
Vue.filter('scoreAway', function(value) { 
	
	if(value === undefined){
		return '';
	}
	if(value.indexOf('/')!== -1){
		let arr = value.split('/');
		if(arr[1]<0){
			value = '';
		}else{
			value = arr[0]+'/'+arr[1];
		}
	}else{
		if(value<0){
			value = ''
		}else if(value === 0){
			value.length === 1 ? '': value = ''
		}
	}	
  return value
})
