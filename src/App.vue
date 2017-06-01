<template>
  <div class="background">
    <div class="title-wrapper">
      我是title
    </div>
    <div class="body-wrapper">
      <div class="menu-wrapper">
        <div class="menu-button-wrapper" @click="clickbutton1">
          1
        </div>
        <div class="menu-button-wrapper" @click="clickbutton2">
          2
        </div>
      </div>
      <div class="content-wrapper">
        <div v-if="button1 === true">
          <router-link to="/button1">{{button1}}</router-link>
        </div>
        <div v-if="button2 === true">
          <router-link to="/button2"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      button1: false,
      button2: false
    }
  },
  methods: {
    clickbutton1() {
      this.button1 = !this.button1;
    },
    clickbutton2() {
      this.button2 = !this.button2;
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.background
  position: absolute
  height: 100%
  width: 100%
  display: flex
  flex-direction: column
  background: #fff
  .title-wrapper
    position: relative
    flex: 0 0 100px
    background: #f3f5f7
  .body-wrapper
    flex: 1
    display: flex
    .menu-wrapper
      flex: 0 0 200px
    .content-wrapper
      flex: 1
</style>
