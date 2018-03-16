<!--module-->
<template>
  <transition name="fade">
    <div class="sign-content-bg" >
      <div @click.prevent.stop="$emit('close')" class="sign-bg"></div>
      <div class="sign-content" v-if="flag">
        <!--header-->
        <div class="sign-header">
          <h2>签到有礼</h2>
          <p>天天签到有惊喜</p>
          <i></i>
          <i></i>
          <!--<div class="sign-close" @click="$emit('close')">
            <span></span><Icon type="close" color="#fff" size="8"  />
          </div>-->
        </div>
        <!--content-->
        <div class="sign-body">
          <div class="sign-body-container">
            <ul>
              <!--<li v-for="(item,i) in signInfos"><i></i><span>{{item.textName}}</span> <strong>+{{item.textNum}}元</strong></li>-->
              <li v-if="signInfos.rewards" v-for="(item,i) in signInfos.rewards">
                <!--active: signInfos.is_sign == 0,okActive:signInfos.total_day-1>=i-->
                <!--:class="{active: signInfos.is_sign == 1&&signInfos.total_day-1==i}"-->
                <i :class="{active: signInfos.total_day-1>=i}"></i>
                <span :class="{active: signInfos.total_day-1>=i}">
                {{i==0? '第一天':i==1?'第二天':i==2?'第三天':i==3?'第四天':i==4?'第五天':i==5?'第六天':'第七天'}}
              </span>
                <strong :class="{active: signInfos.total_day-1>=i}">+{{item}}元</strong></li>
            </ul>
          </div>
        </div>
        <!--footer-->
        <div class="sign-footer">
          <!--:value="signInfos.is_sign?'已签到':'签到领取'"  :disabled="signInfos.is_sign==1"-->
          <input type="button" value="签到领取" @click="signOK" >
        </div>
      </div>

      <!--签到成功弹层-->
      <div class="sign-success" v-else>
        <div class="success-bg">
          <img src="../../images/sign_bg@2x.png" alt="">
        </div>
        <div class="success-body">
          <img src="../../images/caidai@2x.png" alt="">
          <p>恭喜获得+{{caijin}}元</p>
        </div>
        <div class="success-close" @click="$emit('close')">
          <img src="../../images/cancel@2x.png" alt="">
        </div>
      </div>

    </div>
  </transition>

</template>

<script type="text/ecmascript-6">
  import { requestOpt,mt_toast} from 'api/recommend'
  export default {
    data() {
      return {
        /*signInfos: [{
          textName: '第一天',textNum: '10', id: 1
        },{
          textName: '第二天',textNum: '20', id: 2
        },{
          textName: '第三天',textNum: '30', id: 3
        },{
          textName: '第四天',textNum: '40', id: 4
        },{
          textName: '第五天',textNum: '50', id: 5
        },{
          textName: '第六天',textNum: '60', id: 6
        },{
          textName: '第七天',textNum: '70', id: 7
        }]*/
//        signInfos: this.$store.state.user.signinfo,
        signInfos: this.$store.state.user.signinfo || JSON.parse(sessionStorage.getItem('signinfo')),
        flag: true,
        caijin: 0,
      }
    },
//    props: [''],
    mounted() {
//      this.getSingInfo()
    },
    methods: {
      signOK() { // this.$store.state.user.token
        requestOpt.reqGet('sign_up',sessionStorage.getItem('token'), res => {
          if (res.data.status === 1) {
//            mt_toast('签到成功')
            this.flag = false

            this.$store.state.user.signinfo.total_day = res.data.data.total_day
            this.$store.state.user.signinfo.is_sign = 1
            this.$store.state.user.userinfo.is_sign = 1
            this.$store.state.user.userinfo.total_day = res.data.data.total_day
            this.caijin = this.signInfos.rewards[res.data.data.total_day-1]
            window.sessionStorage.setItem('is_sign',true)
            setTimeout(() => {
              this.$emit('close')
            },3000)
          } else {
            if (res.data.code == -1 || res.data.code == -2 || res.data.code == -3 ) {
              window.sessionStorage.removeItem('userinfo')
              window.sessionStorage.removeItem('login')
              window.sessionStorage.removeItem('token')
              this.$router.push('/login')
            }
            window.sessionStorage.setItem('is_sign',false)
            mt_toast(res.data.msg)
//            this.$emit('close')
          }
        }, err => {
//          this.$emit('close')
//          mt_toast(err.response.statusText)
        })
      },
    }
  }
</script>

<style scoped lang="stylus">
  .sign-content-bg {
    overflow: hidden;
    position fixed
    width 100%
    height 100%
    top 0
    z-index 100
    background rgba(0,0,0,0)
    color: #000;
    font-size: .3rem;
    .sign-bg {
      overflow: hidden;
      position absolute
      width 100%
      height 100%
      top 0
      background rgba(0,0,0,.5)
    }
    .sign-success {
      position absolute
      width 100%
      height 7.5rem
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      .success-bg {
        width 100%
        /*height 2rem*/
        img {
          width 100%
        }
      }
      .success-body {
        width 70%
        margin  auto
        img {
          position relative
          bottom 1.2rem
          width 100%
        }
        p {
          position relative
          bottom 2rem
          text-align center
          color #d23b49
          font-size .32rem
        }
      }
      .success-close {
        position relative
        width 100%
        margin  auto
        height 1rem
        img {
          position absolute
          left 0
          right 0
          margin auto
          width .8rem
        }
      }
    }
    .sign-content {
      position absolute
      width 70%
      height 467px
      top 0
      bottom 0
      left 0
      right 0
      margin auto
      background #fff
      border-radius .08rem
      .sign-header{
        width 100%
        height 1.54rem
        background url("../../images/signbg.png") center
        background-size cover
        color #fff
        text-align center
        line-height 1.4
        h2{
          padding-top .1rem
          font-size .55rem
        }
        i{
          position absolute
          top 10px
          left 10px
          width .3rem
          height .3rem
          background #000000
          border-radius 50%
          &:last-child {
            right 10px
            left auto
          }

        }
      }
      .sign-body {
        padding .5rem 0rem .5rem 1rem
        .sign-body-container {
          ul {
            li {
              position relative
              height .9rem
              line-height 1.7
              padding 0 0rem .3rem .6rem
              border-left 8px solid #fff17d
              text-indent .1rem
              &:last-child {
                border-left-color #fff
              }
              i {
                position absolute
                left  -.35rem
                width .5rem
                height .5rem
                background  #fff17d
                border-radius 50%
                &.active {
                  background  #d23b49
                  /*&.okActive {
                    background #0cb356
                  }*/
                }
              }
              span {
                display inline-block
                width 1.4rem
                color #adadad
                &.active {
                  color #333
                  font-size .36rem
                 /* &.okActive {
                    background #0cb356
                  }*/
                }
              }
              strong {
                color #e9afb3
                &.active {
                  color #d23b49
                  font-size .36rem
                }
              }
            }
          }
        }
      }
      .sign-footer {
        position absolute
        bottom 0rem
        width 100%
        height 1rem
        text-align center
        input {
          height .7rem
          padding 0 .3rem
          background #fff17d
          color #d23b49
          border-radius .08rem
          &[disabled] {
            background #ccc
            color #777
          }
        }
      }
    }
    .sign-close {
      width 22%
      height 40px
      position absolute
      top 15px
      right -20%
      i {
        padding 5px 7px
        border 1px solid #fff
        border-radius 50%
      }
      span {
        position relative
        top -2px
        display inline-block
        width 25px
        border-bottom 1px solid #fff
      }
    }
  }
</style>
