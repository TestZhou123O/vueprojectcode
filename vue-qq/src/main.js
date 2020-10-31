import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import MuseUi from './muse-ui.config'
Vue.use(MuseUi)
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload,{
	preLoad:1.3,
	error:'static/images/lazy.jpg',
	loading:'static/images/lazy.jpg',
	attemp:1,
	listenEvents:['scroll']
})
Vue.prototype.$http=axios
router.replace('message')
Vue.config.productionTip=false

new Vue({
  el:'#app',
  template:'<app/>',
  router,
  store,
  comments:{App},
  beforeCreate(){
	  this.$store.dispatch('getAllData',this)
  }
})
