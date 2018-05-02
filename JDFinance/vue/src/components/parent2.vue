<template>
  <div class="parent2">
    <input v-model="msg"/>
    <button>点击</button>
  </div>
</template>
<script>
export default {
  name: 'Parent2',
  data () {
    return {
      msg: '这是默认数据'
    }
  },
  created () {
    this.$root.Bus.$on('bus', a => {
      this.msg = a
      this.msg = a
    })
  }
}
</script>
<style>

</style>
