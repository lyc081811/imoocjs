<template>
  <div>
aaaa
  </div>
</template>
<script>
import Epub from 'epubjs'
const DOWN_URL = '/static/1.epub'
export default {
  methods: {
    // 电子书的渲染
    showEpub () {
      // 生成book
      this.book = new Epub(DOWN_URL)
      console.log(this.book)
      // 生成rednition
      // 通过rendtion.display渲染电子书
    }
  },
  mounted () {
    this.showEpub()
  }
}

</script>
<style lang='scss' scoped>
@import '~@/assets/style/global'
</style>
