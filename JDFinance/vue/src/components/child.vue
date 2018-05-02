<template>
  <div class="child">
    {{msg}}
    <button @click="up">点击改变</button>
    <button @click="bus">改变兄弟组件</button>
  </div>
</template>
<script>
export default {
  name: 'Child',
  props: {
    msg: {
      type: String,
      default: '没有收到信息'
    }
  },
  methods: {
    up () {
      this.$emit('up', '这是子组件改变父组件后的数据')
    },
    bus () {
      this.$root.Bus.$emit('bus', '这是兄弟的数据')
    }
  }
}
</script>
<style>

</style>
