<template>
	<mu-list v-if="isAjax&&nowMessageList">
		<div v-for="(item,index) of nowMessageList" :class="[{swipeleft:isSwipe[index]},'wrap']"
		 @click="getActiveId_x(item._id)" ref="child" :key="index">
			<mu-list-item :title="item.friend.name" :describeLine="1" :disableRipple="true" class="list-item">
			 <mu-avatar :src="item.friend.avatar" slot="leftAvatar"/>
				 <span slot="describe">
					 <span style="color:rgba(0,0,0,.5)">{{item.list[item.list.length-1].message}}</span>
				 </span>
				 <div class="item-right" slot="right">
					 <span class="time">{{item.list[item.list.length-1].time}}</span>
					 <mu-badge :content="'${item.list.length-1}'" />
				 </div>
			</mu-list-item>
			<div class="delete" @click.stop="removeM(item._id)">删除</div>
		</div>
	</mu-list>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex'
export default{
	name:'message',
	data(){
		return{
			isSwipe:[false,false,false]
		}
	},
	computed:{
		...mapGetters(['nowMessageList']),
		...mapState(['isAjax'])
	},
	methods:{
		...mapMutations(['showDialog','getActiveId','zeroRemove','removeMessage']),
		getActiveId_x(id){
			this.getActiveId({getActiveId:id})
			this.showDialog()
		},
		removeM(_id){
			this.removeMessage({_id})
		}
	},
	created(){
		setTimeout(()=>{
			if(this.$refs.child){
				this.$refs.child.forEach((element,index)=>{
					let x,y,X,Y,swipeX,swipeY
					element.addEventListener('touchstart',e=>{
						x=e.changedTouches[0].pageX
						y=e.changedTouches[0].pageY
						swipeX=true
						swipeY=true
						this.isSwipe=[false,false,false]
					})
					element.addEventListener('touchmove',e=>{
						x=e.changedTouches[0].pageX
						y=e.changedTouches[0].pageY
						if(swipeX && Math.abs(X-x)-Math.abs(Y-y)>0){
							e.stopPropagation()
							if(X-x>10){
								e.preventDefault()
								this.isSwipe.splice(index,1,false)
							}
							if(x-X>10){
								e.preventDefault()
								this.isSwipe.splice(index,1,true)
							}
							swipeY=false
						}
						if(swipeY && Math.abs(X-x)-Math.abs(Y-y)<0){
							swipeX=false
						}
					})
				})
			}
		},1000)
	}
}
</script>

<style lang="stylus">
@import '../../common/stylus/mixin.sty1'
.mu-list
 overflow :hidden
 background color-g
.swipeleft
 transform :translateX(-20%)
.wrap
 width :125%
 overflow :hidden
 transition :all 0.3s linear
 border-b-1px(rgba(0,0,0,.1))
 .list-item
  float :left
  width :80%
  height :10vh
  background :color-w
  transition :all 0.3s linear
 .delete
  float :right
  display :block
  height :10vh
  line-height :10vh
  width :20%
  text-align :center
  font-size :1.2em
  font-weight :500
  color :color-w
  background :#ff1744
 .item-right
  position :relative
  .time
   display :inline-block
   position :absolute
   top:-10px
   left :-16px
  .mu-badge
   display :inline-block
   position :absolute
   top:0
   left :-10px
   border-radius :5px
</style>
