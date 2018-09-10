<template>
  <div>
    <div class="md-modal modal-msg md-modal-transition" :class="{'md-show': mdShow}">
        <div class="md-modal-inner">
          <div class="md-top">
            <div class="md-title">提示：  </div>
            <button class="md-close" @click="closeModal">close</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="mdShow"></div>
  </div>
</template>
<script>
export default {
  name: 'Modal',
  props: ['md-show'],
  methods: {
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>
<style scoped>

</style>
