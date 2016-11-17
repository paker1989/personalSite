import Vue from 'vue'
import App from './App'
import Repository from './components/Repository'
import Hello from './components/Hello'
import Login from './components/Login'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter({
  linkActiveClass: 'active'
})

router.map({
  '/repository': {component: Repository},
  '/hello': {component:Hello},
  '/login': {component:Login}
})
router.redirect({
  '*': '/login'
})

router.start(App, '#app')

/*
import Vue from 'vue'
import App from './App'
import Hello from './components/Hello'
import Repository from './components/Repository'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);


const router = new VueRouter({
 linkActiveClass:'active'
})

router.map({
	'/repository':{
	 component: Repository
	},
	'/hello':{
	 component:Repository
	},
	'/app':{
	 component:Repository
	}
})

router.redirect({
	'*':'/repository'
})

router.start(App,'#app')
*/
/*
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
*/
