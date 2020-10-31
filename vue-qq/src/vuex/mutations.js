const mutations={
	showDialog:(state)=>{
		if(!state.dialog){
			let message=state.messageList.filter(x>=x._id===state.activeId)[0]
			if(!message){
				let oldMessage=state.messageListFB.filter(x=>x._id===state.activeId)[0]
				state.messageList.splice(oldMessage._id-1,0,oldMessage)
			}
		}
		state.dialog=!state.dialog
	},
	showSidebar:(state,{flag}={})=>{
		state.sidebar.open=!state.sidebar.open
		state.sidebar.docked=!flag
	},
	showPersonindex:(state)=>{
		state.personindex=!state.personindex
	},
	showSearch:(state)=>{
		state.search=!state.search
	},
	getData:(state,data)=>{
		state.data=data
		state.isAjax=true
	},
	changTitle:(state,{title})=>{
		state.headerTitle=title
	},
	getActiveId:(state,{title})=>{
		state.activeId=activeId
	},
	changeList:(state,obj)=>{
		let now=new Date()
		let time='${now.getHours()}:${now.getMinutes()}'
		if(obj.self){
			state.messageList.forEach((item,index,arr)=>{
				if(item._id===obj._id){
					obj._id=0
					item.list.push({...obj,time})
				}
			})
		}else{
			state.messageList.forEach((item,index,arr)=>{
				if(item._id===obj._id){
					item.list.push({...obj,time})
				}
			})
		}
	},
	removeMessage(state,{_id}){
		state.messageList.forEach((item,index,arr)=>{
			if(item._id===_id){
				arr.splice(index,1)
			}
		})
	}
}

export default mutations