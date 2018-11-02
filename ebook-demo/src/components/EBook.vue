<template>
    <div class="ebook">
        <transition name="slide-down">
            <div class="title-wrapper" v-show="isShow">
                <div class="left">
                    <span class="icon icon-back"></span>
                </div>
                <div class="right">
                    <div class="icon-wrapper">
                        <span class="icon icon-cart"></span>
                    </div>
                    <div class="icon-wrapper">
                        <span class="icon icon-person"></span>
                    </div>
                    <div class="icon-wrapper">
                        <span class="icon icon-more"></span>
                    </div>
                </div>
            </div>
        </transition>

        <div class="read-wrapper">
            <div id="read"></div>
            <div class="mask">
                <div class="left" @click="prevPage"></div>
                <div class="center" @click="centerShow"></div>
                <div class="right" @click="nextPage"></div>
            </div>
        </div>
        <transition name="slide-up">
            <div class="menu-wrapper" v-show="isShow">
                <div class="icon-wrapper">
                    <span class="icon icon-menu"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon icon-progress"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon icon-bright"></span>
                </div>
                <div class="icon-wrapper">
                    <span class="icon icon-a">A</span>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
import Epub from 'epubjs'
const DOWN_URL = '/static/1.epub'
export default {
  data () {
    return {
      isShow: false
    }
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
      this.rendition.display()
      // 通过rendtion.display渲染电子书
    },
    prevPage () {
      // 生成rednition.prev
      if (this.rendition) {
        this.rendition.prev()
      }
    },
    nextPage () {
      // 生成rednition.next
      if (this.rendition) {
        this.rendition.next()
      }
    },
    centerShow () {
      this.isShow = !this.isShow
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
    .title-wrapper {
        position: absolute;
        z-index: 2;
        display: flex;
        top: 0;
        left: 0;
        width: 100%;
        height: px2rem(48);
        line-height: px2rem(48);
        background: #fff;
        box-shadow: 0 px2rem(8) px2rem(8) rgba(0, 0, 0, .15);
        .left {
            flex: 0 0 px2rem(60);
            @include center;
        }
        .right{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .icon-wrapper{
                flex: 0 0 px2rem(40);
                @include center;
                .icon-cart {
                    font-size: px2rem(22);
                }
            }
        }
    }
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
    .menu-wrapper {
        position: absolute;
        z-index: 2;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        height: px2rem(48);
        line-height: px2rem(48);
        background: #fff;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        .icon-wrapper {
            flex: 1;
            @include center;
        }
        .icon-progress {
            font-size: px2rem(26)
        }
    }
}
</style>
