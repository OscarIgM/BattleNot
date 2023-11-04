import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/Login.vue')},
      {
        path:'/register',
        name:'register',
        component:()=>import('../views/Register.vue')
      },
      {path:'/ticket', 
      name:'ticket',
       component:()=>import('../views/TicketsView.vue')},
       {
        path:'/listarJuego',
        name:'listarJuego',
        component:()=>import('../views/GameList.vue')
       },
       {
        path:'/agregarJuego',
        name:'agregarJuego',
        component:()=>import('../views/AgregarJuego.vue')
       }
    
 
  ]
})

export default router
