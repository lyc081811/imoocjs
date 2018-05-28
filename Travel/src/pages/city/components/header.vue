<template>
	<div class="header">
		城市选择
	</div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header {
		height: 0.86rem;
		line-height: 0.86rem;
		text-align: center;
		color: #fff;
		background $bgcolor
		font-size .32rem
	}
</style>