<template>
  <div class="ebook">
    <title-bar :isShow="isShow"></title-bar>
    <div class="read-wrapper">
      <div id="read"></div>
      <div class="mask">
        <div class="left" @click="prevPage"></div>
        <div class="center" @click="centerShow"></div>
        <div class="right" @click="nextPage"></div>
      </div>
    </div>
    <menu-bar
        @setFontSize="setFontSize"
        @selectTheme="selectTheme"
        @onProgressChange="onProgressChange"
        @jumpTo="jumpTo"
        :navigation="navigation"
        :themeList="themeList"
        :defaultTheme="defaultTheme"
        :fontSizeList="fontSizeList"
        :defaultFontSize="defaultFontSize"
        :bookAvailbale="bookAvailbale"
        :isShow="isShow" ref="menuBar"
    ></menu-bar>
  </div>
</template>
<script>
import TitleBar from '@/components/TitleBar'
import MenuBar from '@/components/MenuBar'
import Epub from 'epubjs'
const DOWN_URL = '/static/2.epub'
export default {
  name: 'Ebook',
  data () {
    return {
      isShow: false,
      fontSizeList: [
        {fontSize: 16},
        {fontSize: 18},
        {fontSize: 20},
        {fontSize: 22},
        {fontSize: 24},
        {fontSize: 26},
        {fontSize: 28}
      ],
      defaultFontSize: 22,
      themeList: [
        {
          name: 'default',
          style: {
            body: {
              'color': '#000',
              'background': '#fff'
            }
          }
        },
        {
          name: 'eye',
          style: {
            body: {
              'color': '#000',
              'background': '#ceeaba'
            }
          }
        },
        {
          name: 'night',
          style: {
            body: {
              'color': '#fff',
              'background': '#000'
            }
          }
        },
        {
          name: 'gold',
          style: {
            body: {
              'color': '#000',
              'background': 'rgb(241,236,226)'
            }
          }
        }
      ],
      defaultTheme: 'default',
      bookAvailbale: false,
      navigation: []
    }
  },
  components: {
    TitleBar,
    MenuBar
  },
  methods: {
    // 电子书的渲染
    showEpub () {
      // 生成book
      this.book = new Epub(DOWN_URL)
      // 生成rednition
      this.rendition = this.book.renderTo('read', {
        width: window.innerWidth,
        height: window.innerHeight
      })
      // 通过rendtion.display渲染电子书
      this.rendition.display()

      // 获取theme对象
      this.themes = this.rendition.themes
      // 设置默认字体
      this.themes.fontSize(this.defaultFontSize + 'px')
      // 设置主题
      this.registerTheme()
      this.themes.select(this.defaultTheme)
      // 获取locations 默认是不生成的
      // console.log(this.book.locations)
      // 可以通过epubjs的钩子函数
      this.book.ready.then(() => {
        this.navigation = this.book.navigation.toc
        return this.book.locations.generate()
      }).then(res => {
        this.locations = this.book.locations
        this.bookAvailbale = true
      })
    },
    prevPage () {
      // 生成rednition.prev
      if (this.rendition) {
        this.rendition.prev()
        this.isShow = false
      }
    },
    nextPage () {
      // 生成rednition.next
      if (this.rendition) {
        this.rendition.next()
        this.isShow = false
      }
    },
    centerShow () {
      this.isShow = !this.isShow
      if (!this.isShow) {
        this.$refs.menuBar.hideSetting()
      }
    },
    setFontSize (size) {
      this.defaultFontSize = size
      if (this.themes) {
        this.themes.fontSize(size + 'px')
      }
    },
    // 注册主题
    registerTheme () {
      this.themeList.forEach(x => {
        this.themes.register(x.name, x.style)
      })
    },
    // 选择主题
    selectTheme (index) {
      this.defaultTheme = this.themeList[index].name
      if (this.themes) {
        this.themes.select(this.defaultTheme)
      }
    },
    // 进度条
    onProgressChange (progress) { // 参数为0-100
      const percentage = progress / 100
      const location = percentage > 0 ? this.locations.cfiFromPercentage(percentage) : 0
      console.log(location, 3)
      this.rendition.display(location)
    },
    // 根据链接跳转指定位置
    jumpTo (href) {
      this.rendition.display(href)
      this.hideTitAndMenu()
    },
    hideTitAndMenu () {
      this.isShow = false
      this.$refs.menuBar.hideSetting()
    }
  },
  mounted () {
    this.showEpub()
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/global';
.ebook {
  position: relative;
  .read-wrapper {
    .mask{
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      display: flex;
      .left{
        flex: 0 0 px2rem(120)
      }
      .center{
        flex: 1;
      }
      .right{
        flex: 0 0 px2rem(120)
      }
    }
  }
}
</style>
