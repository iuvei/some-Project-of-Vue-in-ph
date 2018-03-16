<template>
  <div class="app">
    <div class="gun" @click="launch($event)"></div>
    <div class="shells-wrapper">
      <transition v-for="(shell, index) in shells" name="launch-shell" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
        <div class="shell" v-show="shell.show">
          <div class="inner"></div>
        </div>
      </transition>
    </div>
    <div class="goal"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        shells: [
          {
            show: false
          },
          {
            show: false
          },
          {
            show: false
          }
        ]
      };
    },
    methods: {
      launch (event) {
        for (let i = 0; i < this.shells.length; i++) {
          let shell = this.shells[i];
          if (!shell.show) {
            shell.show = true;
            shell.target = event.target;
            return;
          }
        }
      },
      beforeEnter (el) {
        let count = this.shells.length;
        while (count--) {
          let shell = this.shells[count];
          if (shell.show) {
            let rect = shell.target.getBoundingClientRect();
            let left = rect.left - 32;
            let top = -(window.innerHeight - rect.top - 15);
            el.style.display = '';
            el.style.webkitTransform = `translate3d(0,${top}px,0)`;
            el.style.transform = `translate3d(0,${top}px,0)`;
            let inner = el.getElementsByClassName('inner')[0];
            inner.style.webkitTransform = `translate3d(${left}px,0,0)`;
            inner.style.transform = `translate3d(${left}px,0,0)`;
          }
        }
      },
      enter (el, done) {
        /* eslint-disable no-unused-vars */
        let refresh = el.offsetHeight;
        this.$nextTick(() => {
//          console.log(11)
          el.style.webkitTransform = 'translate3d(0,0,0)';
          el.style.transform = 'translate3d(0,0,0)';
          let inner = el.getElementsByClassName('inner')[0];
          inner.style.webkitTransform = 'translate3d(0,0,0)';
          inner.style.transform = 'translate3d(0,0,0)';
        });
        done();
      },
      afterEnter (el) {
        let ball = this.shells[0];
        ball.show = false;
        el.style.display = 'none';
      }
    }
  };
</script>

<style scoped lang="stylus"></style>
