<template>
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
</template>
<script>
export default {
  name: 'Titlebar',
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang='scss' scoped>
@import '~@/assets/style/global';
.title-wrapper {
    position: absolute;
    z-index: 3;
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
</style>
