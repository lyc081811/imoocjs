<template>
  <div class="parent">
    <child :msg="msg" @up="change"></child>
  </div>
</template>
<script>
import Child from './child'
export default {
  name: 'parent',
  components: {
    Child
  },
  data () {
    return {
      msg: '这是父组件默认数据'
    }
  },
  methods: {
    change (msg) {
      this.msg = msg
    }
  }
}
</script>
<style>

</style>
