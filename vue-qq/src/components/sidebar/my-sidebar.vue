<template>
	<mu-drawer :open="sidebar.open" :docked="sidebar.docked" @close="showSidebar()">
		<div class="content">
			<div class="top">
				<mu-avatar :src="self.avatar" :size="96" @click="showPersonindex_x"/>
				<span class="name">{{self.name}}</span>
			</div>
			<div class="buttom">
				<span>{{self.explain}}</span>
			</div>
		</div>
		<mu-list-item title="影集">
			<mu-icon slot="left" value="inbox" color="#2e2c6b"/>
		</mu-list-item>
		<mu-list-item title="收藏夹">
			<mu-icon slot="left" value="grade" color="#2e2c6b"/>
		</mu-list-item>
		<mu-list-item title="钱包">
			<mu-icon slot="left" value="send" color="#2e2c6b"/>
		</mu-list-item>
		<mu-list-item title="文件">
			<mu-icon slot="left" value="drafts" color="#2e2c6b"/>
		</mu-list-item>
		<mu-list-item title="关闭" @click.native="showSidebar">
			<mu-icon slot="left" value="close" color="#2e2c6b"/>
		</mu-list-item>
	</mu-drawer>
</template>

<script>
import {mapState,mapMutation} from 'vuex'
export default{
	name:'sidebar',
	computed:mapState({
		sidebar:'sidebar',
		self:state=>state.data.self
	}),
	methods:{
		...mapMutations(['showSidebar','showPersonindex']),
		showPersonindex_x(){
			this.showSidebar()
			this.showPersonindex()
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.sty1'
.mu-drawer
 color :color-b
 .content
  position :relative
  height :30vh
  padding-top :1px
  margin-bottom :50px
  .top
   padding :20px
   .name
    position :20px
	display :inline-block
	top:5vh
	left :56%
	font-size :1.8em
   .bottom
     padding :20px
	 padding-left :40px
</style>
