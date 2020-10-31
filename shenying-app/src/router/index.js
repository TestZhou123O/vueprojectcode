import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = [];
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
	// 如果是根目录的 index.js、 不做任何处理
	if (route.startsWith('./index')) {
		return
	}
	const routerModule = routerContext(route)
	// 兼容 import export 和 require module.export 两种规范 Es modules commonjs
	routes = [...routes, ...(routerModule.default || routerModule)]
})
export default new Router({
	routes: routes,
	mode: 'history',
	base: process.env.BASE_URL
});
