<template>
<div class="progressbar">
  <progress percent="20" show-info activeColor="#e60000"/>
</div>
</template>
<script>
export default {
  name: 'YearProgress'
}
</script>
<style lang="scss" scoped>
.progressbar {
  width: 100%;
  progress {
    margin-bottom: 10px;
  }
}
</style>
