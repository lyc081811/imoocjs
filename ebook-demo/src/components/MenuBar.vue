<template>
<div class="menu-bar">
  <transition name="slide-up">
    <div class="menu-wrapper" v-show="isShow" :class="{'hide-box-shadow':isSettingShow || !isShow}">
      <div class="icon-wrapper" @click="showSetting(3)">
        <span class="icon icon-menu"></span>
      </div>
      <div class="icon-wrapper" @click="showSetting(2)">
        <span class="icon icon-progress"></span>
      </div>
      <div class="icon-wrapper"  @click="showSetting(1)">
        <span class="icon icon-bright"></span>
      </div>
      <div class="icon-wrapper" @click="showSetting(0)">
        <span class="icon icon-a">A</span>
      </div>
    </div>
  </transition>
  <transition name="slide-up">
    <div class="setting-wrapper" v-show="isSettingShow">
      <div class="setting-font-size" v-if="showTag === 0">
        <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
        <div class="select">
          <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index" @click="setFontSize(item.fontSize)">
            <div class="line"></div>
            <div class="point-wrapper">
              <div class="point" v-show="defaultFontSize == item.fontSize">
                <div class="small-point"></div>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
        <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
      </div>
      <div class="setting-theme" v-if="showTag === 1">
        <div class="setting-theme-item" v-for="(item, index) in themeList" :key="index">
          <div class="preview" @click="selectTheme(index)" :class="{'no-border': item.name !== 'default'}" :style="{background: item.style.body.background}"></div>
          <div class="text" :class="{'select': item.name === defaultTheme}">{{item.name}}</div>
        </div>
      </div>
      <div class="setting-progress" v-if="showTag === 2">
        <div class="progress-wrapper">
          <input :value="progress" :disabled="!bookAvailbale" ref="progress" type="range" class="progress" max="100" min="0" step="1" @change="onProgressChange($event.target.value)" @input="onProgressInput($event.target.value)">
        </div>
        <div class="text-wrapper">
          <span>{{bookAvailbale ? progress + '%' : '加载中...'}}</span>
        </div>
      </div>
    </div>
  </transition>
    <content-view v-show="isShowContent" :navigation="navigation" @jumpTo="jumpTo"></content-view>
  <transition name="fade">
    <div class="content-mask" v-show="isShowContent" @click="hideContent" ref="content"></div>
  </transition>
</div>
</template>
<script>
import contentView from '@/components/Content'
export default {
  name: 'Menubar',
  components: {
    contentView
  },
  data () {
    return {
      isSettingShow: false,
      showTag: 0,
      progress: 0,
      isShowContent: false
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    fontSizeList: {
      type: Array
    },
    defaultFontSize: {
      type: Number,
      default: 16
    },
    defaultTheme: String,
    themeList: Array,
    bookAvailbale: Boolean,
    navigation: Array
  },
  methods: {
    hideContent () {
      this.isShowContent = false
    },
    showSetting (num) {
      if (num === 3) {
        this.isShowContent = true
      } else {
        this.showTag = num
        this.isSettingShow = true
      }
    },
    hideSetting () {
      this.isSettingShow = false
    },
    setFontSize (size) {
      this.$emit('setFontSize', size)
    },
    selectTheme (index) {
      this.$emit('selectTheme', index)
    },
    onProgressChange (progress) {
      this.$emit('onProgressChange', progress)
    },
    onProgressInput (progress) {
      this.progress = progress
      this.$refs.progress.style.backgroundSize = `${this.progress}% 100%`
    },
    jumpTo (href) {
      this.$emit('jumpTo', href)
      this.hideContent()
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/global';
.menu-bar {
    .setting-wrapper {
        position: absolute;
        z-index: 2;
        bottom: px2rem(48);
        left: 0;
        width: 100%;
        height: px2rem(60);
        background: #fff;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        .setting-font-size {
            display: flex;
            height: 100%;
            align-items: center;
            .preview{
                flex: 0 0 px2rem(40);
                line-height: px2rem(80);
                text-align: center;
            }
            .select {
                display: flex;
                flex: 1;
              .select-wrapper{
                    flex: 1;
                    display: flex;
                    &:first-child {
                        .line{
                            &:first-child {
                                border-top: none;
                            }
                        }
                    }
                    &:last-child {
                        .line{
                            &:last-child {
                                border-top: none;
                            }
                        }
                    }
                    .line{
                        flex: 1;
                        height: 0;
                        border-top: px2rem(1) solid #ccc;
                    }
                    .point-wrapper{
                        position: relative;
                        flex: 0 0 0;
                        width: 0;
                        height: px2rem(7);
                        border-left: px2rem(1) solid #ccc;
                        .point{
                            position: absolute;
                            top: px2rem(-10);
                            left: px2rem(-10);
                            width: px2rem(20);
                            height: px2rem(20);
                            border-radius: 50%;
                            background: #fff;
                            border: px2rem(1) solid #ccc;
                            box-shadow: 0 px2rem(4) px2rem(4) rgba(0,0,0,0.15);
                            display: flex;
                            .small-point {
                                margin: auto;
                                width: px2rem(5);
                                height: px2rem(5);
                                border-radius: 50%;
                                background: #000;
                            }
                        }
                    }
                }
            }
        }
        .setting-theme {
            height: 100%;
            display: flex;
            .setting-theme-item{
                flex: 1;
                display: flex;
                flex-direction: column;
                padding: px2rem(5);
                box-sizing: border-box;
                .preview{
                    flex: 1;
                    border: px2rem(1) solid #ccc;
                    &.no-border {
                        border: none;
                    }
                }
                .text{
                    text-align: center;
                    flex: 0 0 px2rem(30);
                    font-size: px2rem(16);
                    color: #333;
                    &.select {
                        font-weight: bold;
                        color: #e60000;
                    }
                }
            }
        }
        .setting-progress {
          position: relative;
          width: 100%;
          height: 100%;
          .progress-wrapper {
            padding: 0 px2rem(30);
            box-sizing: border-box;
            .progress {
              width: 100%;
              height: px2rem(2);
              -webkit-appearance: none;
              background: -webkit-linear-gradient(#999, #999) no-repeat #ddd;
              background-size: 0 100%;
              &:focus {
                outline: none;
              }
              &::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: px2rem(20);
                width: px2rem(20);
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 4px 4px 0 rgba(0,0, 0 ,.15);
                border: px2rem(1) solid #ddd;
              }
            }
          }
          .text-wrapper {
            font-size: px2rem(14);
            text-align: center;
            line-height: px2rem(30);
          }
        }
    }
    .content-mask {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 4;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(51,51,51,.8);
    }
    .menu-wrapper {
        position: absolute;
        z-index: 3;
        display: flex;
        bottom: 0;
        left: 0;
        width: 100%;
        height: px2rem(48);
        line-height: px2rem(48);
        background: #fff;
        box-shadow: 0 px2rem(-8) px2rem(8) rgba(0, 0, 0, .15);
        &.hide-box-shadow {
            box-shadow: none;
        }
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
