import { createRouter, createWebHistory } from 'vue-router'
import MainContent from "@/components/content/MainContent/MainContent";
import ArtList from "@/components/content/ArtList/ArtList";

const routes = [
  {
   path: '/',
   name: 'Top',
   component: MainContent,
   children:[{
       path:'/',
       name:'plate',
       component:ArtList
   },{
       path:'article',
       name:'article',
       component: ()=>import('@/components/common/ArtPage/ArtPage')
   }]
  },
 /*{
   path: '/',
   name: 'Home',
   component: Home
 },
 {
   path: '/about',
   name: 'About',
   // route level code-splitting
   // this generates a separate chunk (about.[hash].js) for this route
   // which is lazy-loaded when the route is visited.
   component: () => import(/!* webpackChunkName: "about" *!/ '../views/About.vue')
 }*/
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  //链接激活类
  linkActiveClass:'lAct'
})

export default router
