import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../layout/nav.config.json'

Vue.use(Router)
let routes = []

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})
let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (route.type === 'pages') {
        route.component = r => require.ensure([], () =>
          r(require(`../components/${route.name}.vue`)))
      }
      // require.ensure 是异步加载组件,第一个参数是第二个参数加载所以依赖的模块，[]
      route.component = r => require.ensure([], () => r(require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)

export default new Router({
  routes: routes
})
