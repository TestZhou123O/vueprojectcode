<template>
	<div>
		<div class="dialogue" v-for="item of messageList_x">
			<mu-list-item :disableRipple="true">
				<mu-avatar :src="item._id===0?userData.self.avatar:userData.friend.avatar"
				 :slot="item._id===0?'rightAvatar':'leftAvatar'"/>
				 <span :slot="item._id===0?'after':'title'">
					 <span class="content" style="color: rgba(0,0,0,.9)">{{item.message}}</span>
				 </span>
			</mu-list-item>
		</div>
	</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default{
	name:'dialogue',
	props:['userData'],
	computed:{
		...mapGetters(['nowMessageList']),
		messageList_x(){
			let message=this.nowMessageList.filter(x=>x._id===this.userData.friend._id)[0]
			return message.list
		}
	},
	updated(){
		this.$emit('scrollC')
	}
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.sty1'
.dialogue
 margin-top :10px
 font-size :16px
 background :color-g
 .content
  display :inline-block
  padding :1.5vh
  background :#fff
</style>
