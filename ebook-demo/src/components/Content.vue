<template>
<transition name="slide">
<div class="list-wrapper">
  <ul>
    <li v-for="list in navigation" :key="list.id">
      <a @click="jumpTo(list.href)">{{list.label}}</a>
    </li>
  </ul>
</div>
</transition>
</template>
<script>
export default {
  name: 'Content',
  props: {
    navigation: Array
  },
  methods: {
    jumpTo (href) {
      this.$emit('jumpTo', href)
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/global';
.list-wrapper {
  position: absolute;
  z-index: 5;
  top: 0;
  height: 100%;
  left: 0;
  display: flex;
  background: #fff;
  color: #333;
  flex: 0 0 px2rem(300);
  font-size: px2rem(18);
  overflow: auto;
  a {
    line-height: px2rem(30);
    color: inherit;
  }
}
</style>
