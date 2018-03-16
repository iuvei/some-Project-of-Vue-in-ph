<template>
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container" :style="{width:width, top:top, left:left}">
          <!--body-->
          <div class="modal-body">
            <slot name="body">

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
      width: {
        type: String,
        default: '80%'
      },
      top: {
        type: String,
        default: '0'
      },
      left: {
        type: String,
        default: '0'
      },
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
    background-color: rgba(0, 0, 0, 0);
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
    width: 80%;
    max-height: 7rem;
    overflow hidden
    margin: 0 auto;
    background-color: #fff;
    color #000
    font-size 0.3rem
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    .modal-header {
      padding .3rem
      border-bottom 1px solid #ddd
      text-align center
      font-size .36rem
    }

    .modal-footer {
      /*position absolute
      bottom 0*/
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
