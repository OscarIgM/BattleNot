import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useStore } from 'vuex';
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
{
  path:'/gamedetail/:id',
  name:'gamedetail',
  component:()=>import('../views/Gamedetails.vue')
},
      {path:'/ticket', 
      name:'ticket',
       component:()=>import('../views/TicketsView.vue'),
       meta:{requiresAuth:true, isUser:true} 
      },

       {
        path:'/listarJuego',
        name:'listarJuego',
        component:()=>import('../views/GameList.vue'),
        meta:{requiresAuth:true, isUser:true} 
       },
       {
        path:'/agregarJuego',
        name:'agregarJuego',
        component:()=>import('../views/Admin/AgregarJuego.vue'),
        meta:{requiresAuth:true, isAdmin:true} 
       },
       {
        path:'/userprofile',
        name:'userprofile',
        component:()=>import('../views/UserProfile.vue'),
        meta:{requiresAuth:true, isUser:true}
       }
    
 
  ]
})



export default router
