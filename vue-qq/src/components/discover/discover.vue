<template>
	<div class="friend">
		<div class="gap"></div>
		<div class="tab">
			<mu-tabs>
				<mu-tab value="tab1"
				icon="star"
				 title="空间"
				 iconClass="ii-1"
				 titleClass="t-1"
				 disabled/>
				 <mu-tab value="tab2"
				 icon="location_on"
				  title="附近"
				  iconClass="ii-2"
				  titleClass="t-1"
				  disabled/>
				  <mu-tab value="tab3"
				  icon="terrain"
				   title="兴趣"
				   iconClass="ii-3"
				   titleClass="t-1"
				   disabled/>
			</mu-tabs>
		</div>
		<div class="gap-1"></div>
		<mu-list>
			<div class="item">
				<mu-list-item title="生活">
					<mu-icon slot="left" value="videocam" color="#64dd17" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
				<mu-divider inset />
				<mu-list-item title="视频">
					<mu-icon slot="left" value="video_library" color="#d84315" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
				<mu-divider inset />
				<mu-list-item title="音乐">
					<mu-icon slot="left" value="headset" color="#1976d2" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
			</div>
		</mu-list>
		<mu-list>
			<div class="item">
				<mu-list-item title="图书">
					<mu-icon slot="left" value="book" color="#1e88e5" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
				<mu-divider inset />
				<mu-list-item title="新闻">
					<mu-icon slot="left" value="whatshot" color="#ef6c00" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
				<mu-divider inset />
				<mu-list-item title="游戏">
					<mu-icon slot="left" value="videogame_asset" color="#00e5ff" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
			</div>
		</mu-list>
		<mu-list>
			<div class="item">
				<mu-list-item title="购物">
					<mu-icon slot="left" value="shopping_cart" color="#1e88e5" />
					<mu-icon slot="right" value="keyboard_arrow_right" />
				</mu-list-item>
			</div>
		</mu-list>
	</div>
</template>

<script>
	export default({
		name:'discover'
	})
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.sty1'
.friend
 .item
  background: color-w
 .gap
  position :relative
  height:2vh
 .gap-1
  height:1vh
 .tab
  height:12vh
  overflow:hidden
  background:color-w
  .mu-tabs
   background:color-w
   color:color-b
</style>
