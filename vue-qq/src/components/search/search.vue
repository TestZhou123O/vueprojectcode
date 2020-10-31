<template>
	<div class="search">
		<mu-appbar :zDepth="0">
			<mu-icon-button icon="arrow_back" slot="left" @click="showSearch"/>
			<mu-text-field class="appbar-search-field" slot="default" hintText="好友姓名....." v-model="value" @input="input"/>
		    <mu-icon-button icon="search" slot="right"/>
		</mu-appbar>
		<mu-list>
			<mu-sub-header>在输入框中，输入好友的名字</mu-sub-header>
			<div v-for="item of friend">
				<mu-list-item :title="item.name" @click="showPersonindex_x(item._id)">
					<mu-avatar :src="item.avatar" slot="leftAvatar"/>
					<mu-icon value="chat_bubble" slot="right"/>
				</mu-list-item>
			</div>
		</mu-list>
	</div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default{
	name:'search',
	data(){
		return{
			value:'',
			friend:[]
		}
	},
	computed:{
		...mapState({
			friends:state=>state.data.friends
		})
	},
	methods:{
		...mapMutations(['showSearch','showPersonindex','getActiveId']),
		showPersonindex_x(id){
			this.showSearch()
			this.getActiveId({activeId:id})
			this.showPersonindex()
		},
		input(val){
			if(val===''){
				this.friend=[]
			}else if(isNaN(val)){
				this.friend=this.friends.filter(x=>{
					if(x.phone.indexOf(val)!==-1){
						return true
					}else{
						return false
					}
				})
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.sty1'
.search
 position :absolute
 z-index :102
 top:0
 left :0
 width :100%
 height :100vh
 background :color-g
 .mu-appbar
  height :10vh
  color :#000
  background :color-w
</style>
