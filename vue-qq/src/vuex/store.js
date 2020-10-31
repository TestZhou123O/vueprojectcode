import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './action'

Vue.use(Vuex)
let state={
	dialog:false,
	sidebar:{
		open:false,
		docked:true
	},
	personindex:false,
	search:false,
	headerTitle:'message',
	data:{self:{},friends:[]},
	isAjax:false,
	activeId:0,
	messageList:[
		{
			_id:1,
			list:[{_id:1,message:'兄弟，Vue.js会吗',time:'9:28'}]
		},{
			_id:2,
			list:[{_id:2,message:'今天下午开会',time:'9:50'}]
		},{
			_id:3,
			list:[{_id:3,message:'晚饭去哪里吃',time:'3:12'}]
		}
	],
	messageListFB:[
		{
			_id:1,
			list:[{_id:1,message:'兄弟，Vue.js会吗',time:'9:28'}]
		},{
			_id:2,
			list:[{_id:2,message:'今天下午开会',time:'9:50'}]
		},{
			_id:3,
			list:[{_id:3,message:'请问你要来点兔子吗',time:'3:12'}]
		}
	]
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})