<!--下级开户-->
<template>
  <div class="lower-account-content" >
    <!--<back title="" go-back="true"></back>-->
    <div class="lower-account" >
      <!--<div class="lower-container">
        <div class="lower-btns">
          <span :class="{'active': showtab=='user'}" @click="handleTab('user')">下级用户</span><span :class="{'active': showtab=='query'}" @click="handleTab('query')">查看邀请码</span>
        </div>
      </div>-->
      <!--head-->
      <div id="back">
        <div class="back-content">
          <a class="back-btn" @click="$router.go(-1)" >
            <img  class="back-icon" src="../../images/Return-@2x.png" alt="">
          </a>
          <span class="back-title" >
            <button :class="{'active': showtab=='user'}" @click="handleTab('user')">下级用户</button><button :class="{'active': showtab=='query'}" @click="handleTab('query')">查看邀请码</button>
          </span>
        </div>
      </div>
      <!--下级用户-->
      <div v-show="showtab=='user'" class="lower-user">
        <div class="lower-icon">
          <div>
            <dl @click="handleUserTab('agent',1)">
              <dt :class="{'userActive-bg': usershowtab=='agent'}">
                <!--<img src="../../images/personal1.png" alt="用户头像" />-->
                <Icon type="person" size="36" color="#fff"/>
              </dt>
              <dd><span :class="{'userActive': usershowtab=='agent'}"  >代理账号</span></dd>
            </dl>
          </div>
          <div>
            <dl @click="handleUserTab('player',2)">
              <dt :class="{'userActive-bg': usershowtab=='player'}">
                <!--<img src="../../images/personal1.png" alt="用户头像" />-->
                <Icon type="person" size="36" color="#fff"/>
              </dt>
              <dd><span :class="{'userActive': usershowtab=='player'}"  >玩家账号</span></dd>
            </dl>
          </div>
        </div>
      </div>
      <!--开户类型-->
      <div class="account-type" v-show="showtab=='user'">
        <span>开户类型:</span>
        <el-radio class="radio" v-model="radio" label="1">精准开户</el-radio>
        <el-radio class="radio" v-model="radio" label="2">生成邀请码</el-radio>
      </div>
      <!--精准开户-->
      <div class="account-inp-info" v-show="showtab=='user'&&radio==1">
        <dl>
          <dt>用户名：</dt>
          <dd>
            <input placeholder="请输入用户名" v-model="username"/>
          </dd>
        </dl>
        <dl>
          <dt>彩票返点：</dt>
          <dd>
            <!--v-if="usershowtab=='agent'" -->
            <input v-model="rebate" readonly @click="handlerebate"  />
            <!--<input v-model="rebate" readonly v-else="usershowtab!=='agent'"/>-->
            <i class="el-icon-arrow-down"></i>
          </dd>
          <div v-show="rebateflag" class="proxy-rates-container" >
             <div class="proxy-rates-scroll">
               <div class="proxy-rates-item" v-for="items in user.app_info.proxy_return_rates"  v-if="items[0].toFixed(1)<userinfo.return_ratio"  @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'(赔率)',items[0])">
                 {{items[0].toFixed(1)}}-{{items[1]}}(赔率)
               </div>
             </div>
          </div>
          <!--弹层-->
         <!-- <div class="dialog-rebate-bg" v-show="rebateflag" @click="rebateflag=false">
            <div class="dialog-rebate" v-show="rebateflag">-->
              <!--user.app_info-->
              <!--<div class="dialog-rebate-item" v-for="items in list" @click="tebateFn(items.name)">{{items.name}}</div>-->
             <!-- <div class="dialog-rebate-item" v-for="items in user.app_info.proxy_return_rates" v-if="items[0].toFixed(1)<userinfo.return_ratio" @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'%(赔率)',items[0])">{{items[0].toFixed(1)}}-{{items[1]}}%(赔率)</div>
            </div>
          </div>-->
        </dl>
      </div>
      <div class="accout-init-pw" v-show="showtab=='user'&&radio==1">
        <p>初始密码为：{{initPW}}</p>
        <button @click="openAccount">立即开户</button>
      </div>
      <!--生成邀请码-->
      <div class="account-inp-info" v-show="showtab=='user'&&radio==2">
        <dl>
          <dt>邀请码：</dt>
          <dd>
            <input v-model="invitation" readonly />
            <button @click="createRetate">随机选码</button>
          </dd>
        </dl>
        <dl style="position: relative;">
          <dt>彩票返点：</dt>
          <dd>
            <input v-model="rebate" readonly @click="handlerebate" />
            <i class="el-icon-arrow-down"></i>
          </dd>
          <div v-show="rebateflag" class="proxy-rates-container" >
            <div class="proxy-rates-scroll">
              <div class="proxy-rates-item" v-for="items in user.app_info.proxy_return_rates"  v-if="items[0].toFixed(1)<userinfo.return_ratio"  @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'(赔率)',items[0])">
                {{items[0].toFixed(1)}}-{{items[1]}}(赔率)
              </div>
            </div>
          </div>
          <!--弹层-->
          <!---->
          <!--<div class="dialog-rebate-bg" v-show="rebateflag" @click="rebateflag=false">-->
            <!--<div class="dialog-rebate" v-show="rebateflag">-->
              <!--user.app_info-->
              <!--<div class="dialog-rebate-item" v-for="items in list" @click="tebateFn(items.name)">{{items.name}}</div>-->
              <!--整体居住展示-->
              <!--<div class="dialog-rebate-item" v-for="items in user.app_info.proxy_return_rates" v-if="items[0].toFixed(1)<userinfo.return_ratio" @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'%(赔率)',items[0])">{{items[0].toFixed(1)}}-{{items[1]}}%(赔率)</div>-->
              <!--不依赖整体-->
              <!--<div class="dialog-rebate-item" v-for="items in user.app_info.proxy_return_rates" v-if="items[0].toFixed(1)<userinfo.return_ratio" @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'%(赔率)',items[0])">{{items[0].toFixed(1)}}-{{items[1]}}%(赔率)</div>
            </div>
          </div>-->
        </dl>
      </div>
      <div class="accout-init-pw" v-show="showtab=='user'&&radio==2">
        <button @click="saveRetate">生成邀请码</button>
      </div>
      <!--查看邀请码-->
      <div class="query-account"  v-show="showtab=='query'">
        <table>
          <thead>
          <tr>
            <th>邀请码</th>
            <th>类型</th>
            <th>返点</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          </thead>
          <v-scroll :on-refresh.prevent="onRefresh" :on-infinite="onInfinite" :dataList="scrollData" :style="{height: h}" style="top: .6rem">
            <tbody>
            <tr v-for="(queryList,index) in queryList">
              <td>{{queryList.code}}</td>
              <td>{{queryList.proxy_type | transAccountType}}</td>
              <td>{{queryList.return_ratio}}</td>
              <td>{{queryList.status | transInvatationStatus}}</td>
              <td>
                <span @click="updFn(index)">修改</span>
                <span @click="confirmFn(index)">删除</span>
              </td>
            </tr>
            </tbody>
          </v-scroll>
        </table>
        <no-data v-if="queryList.length===0"></no-data>
      </div>
    </div>

    <!--修改-->
    <div class="account-update-bg" v-if="updflag" @click="updflag=false"></div>
    <div class="account-update" v-show="updflag">
      <div class="account-upd-item">
        <h4>邀请码:</h4>
        <span>{{code}}</span>
      </div>
      <div class="account-upd-item">
        <h4>用户类型:</h4>
        <span><el-radio v-model="radioupt" label="1">代理</el-radio> <el-radio v-model="radioupt" label="2">普通用户</el-radio>
        </span>
      </div>
      <div class="account-upd-item">
        <h4>用户状态:</h4>
        <span>
          <el-radio v-model="status" label="1">启用</el-radio> <el-radio v-model="status" label="0">禁用</el-radio>
        </span>
      </div>
      <div class="account-upd-item">
        <h4>彩票返点:</h4>
        <span @click="accoptres">
          <input type="text" readonly v-model="retateupt">
          <i class="el-icon-arrow-down"></i>
        </span>
      </div>
      <div class="account-upd-btn" @click="immediateUpdBtn">
        立即修改
      </div>
    </div>
    <!--update 弹层-->
    <div class="dialog-upt-rebate" v-show="updflag&&rebateflag">
      <!--<div class="dialog-rebate-item" v-for="items in list" @click="acoptrate(items.name)">{{items.name}}</div>-->
      <!--整体居住展示-->
      <!--<div class="dialog-rebate-item" v-for="items in user.app_info.proxy_return_rates" @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'%(赔率)',items[0])" v-if="items[0].toFixed(1)<userinfo.return_ratio">{{items[0].toFixed(1)}}-{{items[1]}}%(赔率)</div>-->
      <!--不依赖整体-->
      <div class="dialog-rebate-item" v-for="items in user.app_info.proxy_return_rates" @click="tebateFn(items[0].toFixed(1)+'-'+items[1]+'(赔率)',items[0])" v-if="items[0].toFixed(1)<userinfo.return_ratio">{{items[0].toFixed(1)}}-{{items[1]}}(赔率)</div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Back from '@/components/back/back'
  import NoData from '@/components/tab/no-data'
  import ElRadioButton from '../../../node_modules/element-ui/packages/radio/src/radio-button.vue'
  import {alertip, requestOpt, mt_loading_open, mt_loading_close,mt_toast} from 'api/recommend'
  import {transData} from 'api/config'
  import {mapState} from 'vuex'
  import VScroll from "@/components/public/pull-refresh"


  export default {
    components: {
      ElRadioButton,
      Back,
      VScroll,
      NoData
    },
    data() {
      return {
        userinfo: JSON.parse(sessionStorage.getItem('userinfo')),
        showtab: 'user', // 头部tab 标识
        usershowtab: 'agent', // 账号选择标识
        return_ratio: '',
        proxy_type: 1, // 1 代理 2普通
        username: '',
        radio: '1', // 开户类型 默认选 精准开户 1
        rebateflag: false, // 返点弹出开关
        rebate: '', // 彩票返点
        invitation: '', // 邀请码
        updflag: false, // 修改标识
        radioupt: '', // 用户类型
        status: '', // 用户状态
        retateupt: '', // 彩票返点
        code: '', // 修改邀请码
        loading: false,
        initPW: '123456',
        id: '',// 邀请码记录ID
        queryList: [],
        noData: '',
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        nodata: false,
        h: '8rem',
        page: 1,
      }
    },
    computed:{
      ...mapState(['user'])
    },
    created() {
      this.h = document.querySelector('body').clientHeight - 75 + 'px';
      console.log(this.user.app_info)
//      bank_charge_type
    },
    mounted() {

    },
    methods: {
      onRefresh(done) {
        this.page = 1;
        this.getRetateList('fresh');
        if(done) {
          done();
        }
      },
      onInfinite(done) {
        this.page += 1;
        if (this.nodata) {
          this.scrollData.noFlag = true
          return ;
        }
        this.getRetateList('load');
        done();
      },
      handleTab(flag) { // head 切换
        this.showtab = flag;
        this.updflag = false;
        if (flag === 'query') {
          this.getRetateList('fresh');
        }
      },
      handleUserTab(flag, proxy_type) { // 账号切换
        this.usershowtab = flag;
//        this.rebate = flag === 'agent' ? '':'0';
        this.proxy_type = proxy_type
      },
      handlerebate() { // 彩票返点 开关
        this.rebateflag = !this.rebateflag;
      },
      tebateFn(val, retio) { // 彩票返点 赋值
        this.rebateflag = false;
//        this.rebate = val;
        this.rebate = retio;
        this.return_ratio = retio;
        this.retateupt = retio
      },
      updFn(index) { // 修改弹层控制按钮
        this.updflag = true;
        this.rebateflag = false
        this.code = this.queryList[index].code;
        this.radioupt = this.queryList[index].proxy_type.toString();
        this.status = this.queryList[index].status.toString();
        this.retateupt = this.queryList[index].return_ratio;
        this.id = this.queryList[index].id;
      },
      accoptres() { // 修改弹层中的彩票返点
        this.rebateflag = !this.rebateflag;
      },
      acoptrate(val) { // 修改弹层中 彩票返点赋值
        this.retateupt = val;
        this.rebateflag = false;
      },
      immediateUpdBtn() { // 立即修改按钮
        // 修改邀请码
        mt_loading_open()
        // sessionStorage.getItem('token')  this.user.token
        requestOpt.reqPut('proxy_downline_invcode/'+this.id, sessionStorage.getItem('token'),{
          code: this.code,
          proxy_type: +this.radioupt,
          return_ratio: +this.retateupt,
          status: +this.status
        }, (res) => {
          mt_loading_close()
          if (res.data.status === 1) {
            this.updflag = false
            mt_toast(res.data.msg);
            setTimeout(() => {
              this.getRetateList('fresh');
            },1000)
          }
          if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
            this.$router.push('/login')
          }
        }, (err) => {
          mt_toast(err.response.statusText);

        });
        setTimeout(() => {
          mt_loading_close()
        }, 2000)
      },
      delRetate(i) {
        mt_loading_open()
//        console.log(this.queryList[i].id,i,)
        requestOpt.reqDelete('proxy_downline_invcode?invcode_id='+this.queryList[i].id, sessionStorage.getItem('token'), res => {
//          console.log(res.data.msg);
          mt_loading_close()
          mt_toast(res.data.msg);
          if (res.data.status === 1) {
            this.queryList.splice(i, 1);
          } ;
          if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
            this.$router.push('/login')
          }
        }, err => {
          console.log(err);
        });
        setTimeout(() => {
          mt_loading_close()
        }, 2000)
      },
      confirmFn(index) {
        this.$confirm('您确定删除'+this.queryList[index].code+'这个邀请码？','提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          customClass: 'restel-comfir'
        }).then(() => {
          this.delRetate(index);
          /*this.$message({
            type: 'success',
            message: '删除成功',
            duration: 1000,
            customClass: 'restel-dialog'
          });*/
//          this.delRetate(index);
//          alertip('删除成功');

        }).catch(() => {
          /*this.$message({
            type: 'info',
            message: '已取消删除',
            duration: 1000,
            customClass: 'restel-dialog'
          })*/
//          alertip('已取消删除');
        })
      },
      createRetate() { // 随机选码
        mt_loading_open()
        requestOpt.reqGet('proxy_downline_invcode?proxy_type='+this.proxy_type,sessionStorage.getItem('token'), (res) => {
          mt_loading_close()
          this.invitation = res.data.data.code;
          if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
            this.$router.push('/login')
          }
          if(res.data.status===0){
            mt_toast(res.data.msg);
          }

        }, (err) => {
          mt_toast(err.response.statusText);
        })
        setTimeout(() => {
          mt_loading_close()
        }, 2000)
      },
      saveRetate() { // 生成邀请码
        mt_loading_open()
        requestOpt.reqPut('proxy_downline_invcode',sessionStorage.getItem('token'),{
          proxy_type:this.proxy_type,
          code:this.invitation,
          return_ratio:this.return_ratio
        } , res => {
          mt_loading_close()
          if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
            window.sessionStorage.removeItem('userinfo')
            window.sessionStorage.removeItem('login')
            window.sessionStorage.removeItem('token')
            this.$router.push('/login')
          } else if(res.data.status === 1) {
            setTimeout(() => {
              this.handleTab('query')
            },500)
          }
          mt_toast(res.data.msg);
        }, err => {
          mt_toast(err);
        })
        setTimeout(() => {
          mt_loading_close()
        }, 2000)
      },
      getRetateList(loadflag) { // 获取邀请码列表
        mt_loading_open();
        requestOpt.reqGet('proxy_downline_invcodes?page='+ this.page,sessionStorage.getItem('token'), (res) => {
          if(res.data.status === 1) {
            mt_loading_close()
            this.scrollData.noFlag = res.data.data.paging_arr.total_pages <= this.page  ? true : false;
            this.nodata = res.data.data.paging_arr.total_pages <= this.page  ? true : false;

            if (loadflag === 'fresh') {
              this.queryList = res.data.data.list;
              console.log(this.queryList)
            } else {
              this.queryList  = this.queryList.concat(res.data.data.list)
            }
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            mt_toast(res.data.msg);
          }
        }, (err) => {
          mt_toast(err);
        })
        setTimeout(() => {
          mt_loading_close()
        }, 2000)
      },
      openAccount() {
        requestOpt.reqPost('proxy_downline', sessionStorage.getItem('token'), {
          username: this.username,
          proxy_type:  this.proxy_type,
          return_ratio: this.proxy_type == 1 ? this.return_ratio : 0
        }, res => {
          if (res.data.status === 1) {
            this.$router.push('/user-manage')
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            mt_toast(res.data.msg);
          }
        }, err => {
          mt_toast(err)
        })
      },

      infinite(done) {
        console.log(this.noData)
        if(this.noData) {
          setTimeout(()=>{
            this.$refs.myscroller.finishInfinite(2);
          })
          return;
        }
        let self = this;
        let start = this.queryList.length;

        setTimeout(() => {
          for(let i = start + 1; i < start + 10; i++) {
            self.queryList.push(i)
          }
          if(start > 30) {
            self.noData = "没有更多数据"
          }
          self.$refs.myscroller.resize();
          done()
        }, 1500)

      },
      refresh() {
        console.log('refresh')
      },
    },
    mounted() {
//      this.createRetate();
    }
  }
</script>

<style scoped lang="stylus">
  #back{
    width :7.5rem;
    height :0.88rem;
    background #ff3a3b;
    display :block;
    position fixed
    top: 0
    z-index 999
  }
  .back-content{
    width 6.9rem
    margin auto
    height :0.88rem;
    display: block;
    line-height: 0.88rem;
  }
  .back-title{
    height :0.66rem;
    float left
    display block
    margin-top .089rem
    text-align center
    font-size 0.32rem
    font-weight normal
    line-height 0.66rem
    z-index 8
    color: #ffffff;
    button {
      padding 0 .3rem
      background transparent
      color #fff
      border-top 1px solid #ffffff
      border-bottom 1px solid #ffffff
      box-sizing border-box
      &:first-child {
        border-left 1px solid #ffffff
        border-right 1px solid #ffffff
        border-top-left-radius .08rem
        border-bottom-left-radius .08rem
      }
      &:last-child {
        border-left 0
        border-right 1px solid #ffffff
        border-top-right-radius .08rem
        border-bottom-right-radius .08rem
      }
    }
    .active {
      /*background #fc823c*/
      background #fff
      color #ff3a3b

    }
  }
  .back-btn{
    width: 1.6rem
    height 0.88rem
    display block
    float left
  }
  .back-btn img{
    width 0.22rem
    height 0.3rem
    display block
    text-align left
    float left
    position relative
    top: 0.29rem
  }
  .back-title-right{
    width 2rem
    height 0.88rem
    display block
    float right
    z-index 3
  }

  .lower-account-content {
  /* width: 7.5rem;
   height: 13.34rem;
   position relative
   overflow: hidden;*/
   background-color: #eee;
   color: #000;
   font-size: .3rem;
 }
 .v-model {
   background transparent
 }
 #app .v-model {
   background transparent
 }

 poscola {
   position relative
   top .88rem
 }

 .lower-account {
   /*btns start*/
   .lower-container {
     display flex
     justify-content center
     align-items center
     display -webkit-flex
     -webkit-justify-content center
     -webkit-align-items center
     position absolute
     top 0
     right 0
     left 0
     width 60%
     height .88rem
     margin auto
     z-index 999
     .lower-btns {
       span {
         color #ffffff
         background transparent
         border-top 1px solid #ffffff
         border-bottom 1px solid #ffffff
         padding .1rem .4rem
         box-sizing border-box
         &:first-child {
           border-left 1px solid #ffffff
           border-right 1px solid #ffffff
           border-top-left-radius .08rem
           border-bottom-left-radius .08rem
         }
         &:last-child {
           border-right 1px solid #ffffff
           border-top-right-radius .08rem
           border-bottom-right-radius .08rem
         }
       }
       .active {
         background #fc823c
       }
     }
   }
   /*btns end*/
   /*下级用户 start*/
   .lower-user {
     @extend poscola
     .lower-icon {
       display flex
       justify-content space-around
       align-items center
       display -webkit-flex
       -webkit-justify-content space-around
       -webkit-align-items center
       padding .3rem 0
       background #fff
       text-align center
       font-size .28rem
       dl {
         dt {
           display flex
           justify-content center
           align-items center
           display -webkit-flex
           -webkit-justify-content center
           -webkit-align-items center
           width 1.06rem
           height 1.06rem
           background #dfdfdf
           margin auto
           border-radius 50%
           img {
             position relative
             z-index 9999
             background #fff
             width 50%
             border-radius 50%
           }
         }
         .userActive-bg {
           background #fc823c
         }
         dd {
           margin-top .2rem
           span {
             padding .08rem .12rem
             border 1px solid transparent
             border-radius .08rem
           }
           .userActive {
             border 1px solid #fc823c
             color #fc823c
           }
         }
       }
     }
   }
   /*图标 end*/
   .account-type {
     @extend poscola
     padding 0 .3rem
     span {
       margin-right .4rem
     }
     .radio {
       padding .3rem 0
     }
   }
   /*input*/
   .account-inp-info {
     @extend poscola
     background #fff
     dl {
       display flex
       align-items center
       display -webkit-flex
       -webkit-align-items center
       position relative
       padding 0 .3rem
       border-bottom 1px solid #ddd
       dd {
         flex-grow 1
         input {
           width 100%
           padding 0.3rem 0
           outline none
           line-height 1.5em
         }
         i {
           position absolute
           right 0.3rem
           top 35%
         }
         button {
           position absolute
           right 0.3rem
           top .2rem
           padding .1rem
           border 1px solid #24b0ff
           background none
           color #24b0ff
           border-radius .08rem
         }
       }

     }
   }
   .query-account {
     @extend poscola
     background #fff
     table {
       width 100%
       th{
         padding .15rem 0
         /*border-bottom 1px solid #ddd*/
         &:first-child {
           width 29%
         }
       }
       tr {
         border-top 1px solid #ccc
       }
       td {
         width 18%
         padding .2rem 0
         text-align center
         &:last-child {
           width 23%
         }
         &:first-child {
           width 28%
         }
         span {
           padding .08rem
           color #fff
           font-size .24rem
           border-radius .08rem
           &:first-child {
             background #24b0ff
           }
           &:last-child {
             background #ff3a3b
           }
         }
       }
     }

   }

   /*返点弹层*/
   .dialog-rebate-bg {
     position fixed
     left 0
     bottom 0
     z-index 1
     width 100%
     height 100%
     overflow hidden
     background transparent
   }
   .dialog-rebate {
     position absolute
     left .3rem
     top 50%
     margin-top -2rem
     z-index 10000
     width 93%
     height 4rem
     overflow scroll
     background #fff
     box-shadow 0 0 1px rgba(0,0,0,.5)
     .dialog-rebate-item {
       padding .15rem
       border-bottom 1px solid #ddd
       text-align center
     }
   }

   .accout-init-pw {
     @extend poscola
     height 7.2rem
     background #fff
     p{
       font-size .3rem
       color #777
       text-align center
       padding .3rem
     }
     button {
       width 92%
       margin .8rem .3rem
       padding .2rem
       border 0
       background #51a9ff
       color: #fff
       font-size .3rem
       border-radius .08rem
       /*box-shadow 0 2px 0 rgba(0,0,0,0.3)*/
     }
   }

 }
 /*修改邀请码*/
 .account-update-bg {
   position absolute
   top 0
   z-index 1
   width 100%
   height 100%
   background transparent
 }
 .account-update {
   position absolute
   bottom 0rem
   z-index 11
   width 100%
   background #fff
   .account-upd-item {
     display flex
     display -webkit-flex
     padding .2rem .3rem
     border-bottom 1px solid #ddd
     h4 {
       flex-basis 2rem
       -webkit-flex-basis 2rem
     }
     span {
       color #666
       flex-grow 1
       -webkit-flex-grow 1
       label {
         width 2rem
       }
       input[type=text] {
         width 90%
       }
     }

     /*.dialog-rebate {
       position absolute
       top 0
       overflow scroll
       height 3rem
       width 100%
       background #fff
       text-align center
       z-index 9999
       .dialog-rebate-item {
         padding .1rem 0
         border-bottom 1px solid #ddd
       }
     }*/
   }
   .account-upd-btn {
     padding .2rem 0
     margin .2rem
     background #24b0ff
     color #fff
     text-align center
     border-radius .08rem
     box-shadow 0 2px 1px rgba(0,0,0,.3)
   }
 }
  .dialog-upt-rebate {
    position absolute
    bottom  0
    overflow scroll
    height 4.3rem
    width 100%
    background #fff
    text-align center
    z-index 9999
    .dialog-rebate-item {
      padding .15rem
      border-bottom 1px solid #ddd
    }
  }

  /*update 20171226*/
  .proxy-rates-container {
    position absolute
    top 1.06rem
    left 0
    width 100%
    height 3.6rem
    overflow hidden
    background #fff
    z-index 2
    .proxy-rates-scroll {

      height 3.6rem
      margin 0 .3rem
      text-align center
      overflow-y scroll
      border 1px solid #eee
      .proxy-rates-item {
        padding .2rem
        border-bottom 1px solid #eee
      }
    }

  }
</style>
