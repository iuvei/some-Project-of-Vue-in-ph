<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <!--hearder-->
          <div class="modal-header">
            <slot name="header">
              {{title}}
            </slot>
          </div>
          <!--body-->
          <div class="modal-body">
            <slot name="body">
              {{body}}
            </slot>
          </div>
          <!--footer-->
          <div class="modal-footer" @click="close">
            <slot name="footer">
              <button class="modal-default-button" :style="{color: btnColor}">
                {{btnText}}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>

  export default {
    props: {
      isTitle: {
        type: Boolean,
        default: true
      },
      title: {
        type: String,
        default: '温馨提示'
      },
      body: {
        type: String,
        default: '恭喜您!投注成功'
      },
      isBtn: {
        type: Boolean,
        default: true
      },
      btnText: {
        type: String,
        default: '确认'
      },
      btnColor: {
        type: String,
        default: '#4A90E2'
      },
      toLink: {
        type: String,
        default: 'default'
      }
    },
    methods: {
      close() {
        this.$emit('close')
        if (this.toLink === 'withdraw'){
          this.$router.replace('/withdrawals')
        } else if (this.toLink === 'bankcard'){
          this.$router.replace('/m-center')
        } else {
          this.$router.go(-1)
        }

      }
    }
  }
</script>

<style scoped lang="stylus">

  .modal-mask {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;
  }

  /*垂直居中*/
  .modal-wrapper {
    display: table-cell;
    vertical-align: middle;
  }

  .modal-container {
    position relative
    width: 70%;
    /*min-height 30%*/
    max-height: 100%;
    margin: 0 auto;
    background-color: #fff;
    color #000
    font-size 0.3rem
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    .modal-header {
      padding .5rem .5rem .2rem
      text-align center
      font-size .36rem
    }
    .modal-body {
      display flex
      justify-content center
      align-items center
      display -webkit-flex
      -webkit-justify-content center
      -webkit-align-items center
      padding-bottom .3rem
    }
    .modal-footer {
      display flex
      justify-content center
      align-items center
      display -webkit-flex
      -webkit-justify-content center
      -webkit-align-items center
      width 100%
      min-height 1rem
      border-top 1px solid #ddd
      button {
        background none
        border none
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
