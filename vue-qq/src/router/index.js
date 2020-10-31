import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import message from '../components/message/message.vue'
import friends from '../components/friends/friends.vue'
import discover from '../components/discover/discover.vue'
let routes=[
	{path:'/message',name:'message',component:message},
	{path:'/friends',name:'friends',component:friends},
	{path:'/discover',name:'discover',component:discover},
]
export default new Router({
	routes
})