<template>
  <div id="app">
	  <div class="container-top">
		  <div class="drawer" @click="showSidedebar(true)"></div>
		  <top-nav></top-nav>
	  </div>
	  <div class="container-content">
         <div class="patch"></div>
		 <router-view></router-view>
		 <div class="patch"></div>
	  </div>
	  <div class="container-bottom">
		  <bottom-tab class="tab"></bottom-tab>
	  </div>
	  <my-sidebar style="z-index: 20181224;"></my-sidebar>
	  <my-dialog class="my-dialog" v-if="dialog"></my-dialog>
	  <my-personindex class="my-personindex" v-if="personindex"></my-personindex>
	  <my-search v-if="search"></my-search>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import bottomTab from './components/bottomtab/bottom-tab'
import topNav from './components/topnav/top-nav'
import myDialog from './components/dialog/my-dialog'
import mySidebar from './components/sidebar/my-sidebar'
import myPersonindex from './components/personindex/my-personindex'
import mySearch from './components/search/search'

export default {
  name: 'app',
  components: {
    bottomTab,
	topNav,
	myDialog,
	mySidebar,
	myPersonindex,
	mySearch
  },
  computed:mapState(['dialog','personindex','search']),
  methods:{
	  showSidedebar(flag){
		  this.$store.commit('showSidebar',{flag})
	  }
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.sty1'
#app
   .color-b
      color :color-b
	  position :relative
	  min-height :100vh
	  width :100%
	  background :color-g
	.my-dialog
	  position :absolute
	 .my-personindex
	  .mu-icon.material-icos
	    color :color-b
	 .container-top
	  position :fixed
	  z-index :101
	  top:0
	  left :0
	  width :100%
	  height :10%
	 .drawer
	  position :fixed
	  z-index :1
	  top:0
	  left :0
	  width :6vw
	  height :100%
	 .container-bottom
	   position :fixed
	   z-index :1
	   bottom :0
	   left :0
	   width :100%
	   height :10%
	  .container-content
	    width :100%
	    .patch
		  position:relative
		  top :0
		  left :0
		  width :100%
		  height :10.2vh
		 .t-1
		   color :color-b
		 .mu-tab-text.has-icon
		   margin-top :-4px
		 .i-1
		   font-size :2.5em
		   color :#64dd17
		 .i-2
		   font-size :2.5em
		   color :#44336
		 .i-3
		   font-size :2.5em
		   color :#00bfa5
		 .ii-1
		   font-size :2.5em
		   color :#ffd600
		 .ii-2
		   font-size :2.5em
		   color :#ec407a
		 .ii-3
		   font-size :2.5em
		   color :#2962ff
</style>
