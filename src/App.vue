<template>
  <div class="background">
    <div class="title-wrapper">
      我是title
    </div>
    <div class="body-wrapper">
      <div class="menu-wrapper">
        <div class="menu-button-wrapper" @click="clickbutton1">
          查询商户
        </div>
        <div class="menu-button-wrapper" @click="clickbutton2">
          增加商户
        </div>
      </div>
      <div class="content-wrapper">
        <div v-if="find_shop_choose === true">
          <find_shop></find_shop>
        </div>
        <div v-if="add_shop_choose === true">
          <add_shop></add_shop>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import find_shop from './components/find_shop/find_shop';
import add_shop from './components/add_shop/add_shop';
export default {
  data() {
    return {
      find_shop_choose: false,
      add_shop_choose: false
    }
  },
  methods: {
    clickbutton1() {
      this.find_shop_choose = true;
      this.add_shop_choose = false;
    },
    clickbutton2() {
      this.find_shop_choose = false;
      this.add_shop_choose = true;
    }
  },
  components: {
    find_shop,
    add_shop
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
