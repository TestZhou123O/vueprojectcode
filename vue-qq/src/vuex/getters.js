const gettes={
	friend:(state)=>{
		return state.data.friends.filter(x=>x._id===state.activeId)[0]
	},
	nowMessageList:(state)=>{
		let list=state.nowMessageList
		list.forEach(x=>{
			let friend=state.data.friends.filter(i=>i._id===x._id)[0]
			x.friend=friend
		})
		return list
	}
}

export default getters