import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import login from '../views/login.vue'
import photo from '../views/photo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'login',
    component:login,
    meta:{
      isAuth:false
    }
  },
  {
    path:'/photo',
    name:'photo',
    component:photo,
    meta:{
      isAuth:false
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  if(to.meta.isAuth){
    if(store.state.token){
      next()
    }else{
      next({
        name:'login'
      })
    }
  }else{
    next()
  }
})

export default router
