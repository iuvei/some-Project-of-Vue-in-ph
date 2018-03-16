import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
// import vConsole from 'vconsole'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(ElementUI, { locale })
Vue.use(VueAwesomeSwiper)
import VueResource from 'vue-resource'
Vue.use(VueResource);
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUi)
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView)
import vuet from './vuet'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
/*import $ from 'jquery'
Vue.use($)*/
// import Shake from 'shake'
// Vue.use(Shake)

import 'common/stylus/index.styl'
import filter from './api/filters'

// import {GetData} from './api/publicInterface'
// Vue.prototype.GETDATA = GetData

import store from './store'

// import signalr from './signalr'
/*自定义插件*/
import VueLoading from './plugin/loading'
Vue.use(VueLoading, {
  container: '#app'
})

import axios from 'axios'

// npm uninstall --save 'vue-loading'
/*import vueLoad from  'vue-loading'
Vue.use(vueLoad)*/
// console.log(VueLoading)
/*{meta, path},*/
router.beforeEach((to, from, next) => {
  /*if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
    next({ path: '/mobile' })
  }*/

/*if (!to.meta.divice) {
  next({ path: '/mobile' })
}*/
//tar.gz
  /*let { auth = true } = meta
  let timer;
  let startTimer = function(){
    clearTimeout(timer);
    timer = setTimeout(function(){
      auth = false;
    },600000);
  }
  document.addEventListener('touchend', startTimer, false);

  let isLogin = Boolean(store.state.user.token)*/

  /*if (auth && !isLogin ) {//&& path !== '/login'
    next({ path: '/login' })
   }*/
  /*路由拦截 登录权限控制*/
  // console.log(to)
  // console.log(from)
  /*
  if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
    // console.log(to.meta.requireAuth)
    if(store.state.user.token) { // 通过vuex state获取当前的token是否存在
      next()
    }
    else {
      next({
        path: '/login',
        // query: {redirect : to.fullPath} // 将跳转的路由Path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next()
  }
*/
  /*拦截器 统一处理http请求和响应*/

  // http request 拦截器
  /*axios.interceptors.request.use(
    config => {
      if (store.state.user.token){ // 判断是否存在token,如果存在的话，则每个http header 都加上token
        config.headers.Authorization = `token ${store.state.user.token}`;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    })

  // http response 拦截器
  axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        switch (error.response.status) {
          case 401:
            // 返回 401 清除token信息并跳转到登录页面
            // store.commit(types.LOGOUT);
            store.state.user.token=''
            tore.state.user.userinfo={}
            store.commit('ISLOGIN', false)
            router.replace({
              path: 'login',
              // query: {redirect: router.currentRoute.fullPath}
            })
        }
      }
      return Promise.reject(error.response.data)   // 返回接口返回的错误信息
    });
*/
  //定义一个可以记录路由路径变化的数组，这里用在vuex，其实也可以用sessionStorage,或者在window.routeChain等变量
  //不一定要用到vuex
  // console.log(store.state.user.routeChain)
  /*let routeLength = store.state.user.routeChain.length;
  if (routeLength === 0) {
    store.commit('setPageDirection', 'fade');
    if (to.path === from.path && to.path === '/') {
      //当直接打开根路由的时候
      store.commit('addRouteChain', to);
    } else {
      //直接打开非根路由的时候其实生成了两个路径，from其实就是根路由
      store.commit('addRouteChain', from);
      store.commit('addRouteChain', to);
    }
  } else if (routeLength === 1) {
    store.commit('setPageDirection', 'slide-left');
    store.commit('addRouteChain', to);
  } else {
    console.log(store.state.user.routeChain[routeLength-2].path,to.path)
    // return
    // setTimeout(() => {
    if (store.state.routeChain) {
      let lastBeforeRoute = store.state.routeChain[routeLength-1];
      // console.log(store.state.user.routeChain)
      if (lastBeforeRoute.path === to.path) {
        store.commit('popRouteChain');
        store.commit('setPageDirection', 'slide-right');
      } else {
        store.commit('addRouteChain', to);
        store.commit('setPageDirection', 'slide-left');
      }
    }
*/
    // },1000)

  // }
   next()
})

fastclick.attach(document.body)
/* eslint-disable no-new */
window.evBus = new Vue()
// Vue.config.devtools = process.env.NODE_ENV !== 'production'
new Vue({
  el: '#app',
  vuet,
  router,
  store,
  // global_,
  render: h => h(App),
  data :{
    bus : new Vue()
  },
  created() {
   /* if (!isDevice) {
      router.push('/mobile')
    }*/

    /*document.addEventListener('touchend', e => {
      let state = this.$store.state;
      const target = e.target;
      if(target.nodeName === 'A'
        && target.getAttribute('href').substring(0,2)==='#/'){
        state.pageDirection = 'slide-left';
      }
    })*/
  },
  watch :{
    $route(to, from) {
      /*if (!isDevice) {
        router.push('/mobile')
      }*/
    }
  }
})
/*

document.oncontextmenu = function () {
  return false
}
document.addEventListener('keydown', KeyDown, false)
function KeyDown () {
  let o ;
  if (window.event) {
    o = window.event.keyCode
  } else if(event.which) {
    o = event.which
  } else {
    o = arguments[0]
  }
  if (o == 123 || o == 116) {
    event.returnValue=false
    return false
  }
}
*/
/*

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = ["Android", "iPhone",
    "SymbianOS", "Windows Phone",
    "iPad", "iPod"];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
}
*/
/*
if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
  location.href = '/mobile.html'
}*/

/*if (!isDevice) {
  router.push('/mobile')
}*/
