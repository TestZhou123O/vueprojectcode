<template>
	<mu-bottom-nav :value="bottomNav" @change="handleChange" class="bottom-tab">
		<mu-bottom-nav-item value="message" title="消息" icon="chat_bubble_outline"
		 :iconClass="[isActive[0]&&'color-b']" :titleClass="[isActive[0]&&'color-b']"/>
		 <mu-bottom-nav-item value="friends" title="朋友" icon="people"
		  :iconClass="[isActive[1]&&'color-b']" :titleClass="[isActive[1]&&'color-b']"/>
		  <mu-bottom-nav-item value="discover" title="动态" icon="explore"
		   :iconClass="[isActive[2]&&'color-b']" :titleClass="[isActive[2]&&'color-b']"/>
	</mu-bottom-nav>
</template>

<script>
export default{
	name:'bottomTab',
	data(){
	  return{
		  bottomNav:'message'
	  }
	},
	computed:{
	 isActive(){
		 let arr=['message','friends','discover']
		 let x=[]
		 x[arr.indexof(this.bottomNav)]=true
		 return x
	 }
	},
	methods:{
		handleChange(val){
			this.bottomNav=val
			this.$router.push(val)
			this.$store.commit('changTitle',{title:val})
		}
	}
}
</script>

<style lang="stylus" scoped>
.bottom-tab
 position :absolute
 top :0
 left :0
 width :100%
 height :100%
</style>
