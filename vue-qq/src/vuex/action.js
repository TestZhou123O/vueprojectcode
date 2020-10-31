const actions={
	getAllData:async({commit},that)=>{
		let self={}
		let friends={}
		await that.$http.get('/api/self')
		.then(({data})=>{
			self=data.data
		})
		await that.$http.get('/api/friends')
		.then(({data})=>{
			friends=data.data
		})
		commit('getData',{
			self,friends
		})
	},
	sendValue:async({commit},{_id,message,that})=>{
		let robotData=''
		commit('changeList',{self:true,_id,message})
		await that.$http.get('/api/robotapi',{
			params:{
				message,
				id:_id
			}
		}).then(res=>{
			robotData=JSON.parse(res.data.data)
		})
		if(robotData.code===100000){
			commit('changeList',{_id,message:robotData.text})
		}else if(robotData.code===200000){
			let data=robotData.text+robotData.url
			commit('changeList',{_id,message:data})
		}else if(robotData.code===302000){
			commit('changeList',{_id,message:'暂不支持此类对话'})
		}else{
			commit('changeList',{_id,message:'暂不支持此类对话'})
		}
	}
}
export default actions