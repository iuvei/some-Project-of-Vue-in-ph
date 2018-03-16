<template>
  <transition name="modal">
    <div class="modal-mask" >
      <div class="modal-bg" @click="$emit('close')"></div>
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2>{{title}} <i title="关闭" class="el-icon-close" @click="$emit('close')"></i></h2>
          </div>
          <!--body-->
          <div class="modal-body">
            <div class="modal-list" v-for="(item, i) in hotColdList">
              <div class="modal-item-left">{{item.type}}</div>
              <div class="modal-item-right">已连开{{item.count}}期</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {requestOpt, el_toask_error,alertip} from  '../../api/recommend'

  export default {
    data() {
      return {
        hotColdList: []
      }
    },
    props: {
      title: {
        type: String,
        default: undefined,
        required: true
      },
      type: {
        type: String,
        default: undefined,
        required: true
      },
      id: {
        type: String,
        default: undefined,
        required: true
      },
    },
    mounted() {
      this.getColdHotPanking()
//      document.body.style.overflow = 'hidden'
    },
    methods: {
      getColdHotPanking() { // 冷热排行
        requestOpt.reqnoGet('lottery_results_form_rank?type='+this.type+'&lot_type_id='+this.id, (res) => {
          if (res.data.status===1) {
            this.hotColdList = res.data.data.list;
            console.log(this.hotColdList)
          } else {
            el_toask_error(res.data.msg)
          }
        }, (err) => {
          el_toask_error(err)
        });
      },
    }
  }
</script>

<style scoped lang="stylus">

  .modal-mask {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
    transition: opacity .3s ease;
  }
  .modal-bg {
    position absolute
    width 100%
    height 100%
  }

  /*垂直居中*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
    width 100%
    height 100%
  }

  .modal-container {
    position relative
    width: 350px;
    max-height 80%
    overflow hidden
    margin: 0 auto;
    background #eaeaea
    color #000
    font-size 1rem
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    .modal-header {
      padding .8rem
      border-bottom 1px solid #ddd
      text-align center
      font-size 1.36rem
      text-align center
      color #ff0021
      i {
        position absolute
        right 1rem
        top 1.15rem
        cursor pointer
        &:hover {
          color #ff0021
        }
      }
    }

    .modal-body {
      overflow auto
      max-height 500px
      min-height 350px
    }

    .modal-list {
      display flex
      justify-content space-between
      align-items center
      padding .8rem .5rem
      &:nth-child(odd) {
        background #fff
      }
      .modal-item-right {
        color #ff0021
      }
    }


  }

  .modal-enter {
    opacity: 0;
  }

  .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal-container,
  .modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>
