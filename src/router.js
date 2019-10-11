import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home,
      redirect:"/home/shouye",
      children:[
          {
            path:"/home/shouye",
            component:()=>import("./views/Shouye.vue")
          },
          {
            path:"/home/my",
            component:()=>import("./views/My.vue")
          }
      ]
    },
    {
      path:"*",
      redirect:"/home"
    }
  ]
})
