import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import MinuUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
Vue.use(vueTap)
Vue.use(VueRouter)
Vue.use(MinuUi)

//配置路由
const router=new VueRouter({
	//路由模式
	mode:'hash',
	base:__dirname,
	routes:[
		{path:'/'},
		{path:'/songs/:word',component:require('./views/Songs')},
		{path:'/song/:id',component:require('./views/Song')},
		{path:'*',redirect:'/'}
	]
})

var vm=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
