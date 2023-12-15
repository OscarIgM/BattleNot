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


router.beforeEach((to, from, next) => {
  const store = useStore();
  const isAuthenticated = store.getters.isAuthenticated;
  const userRole = isAuthenticated ? store.getters.role : null;

  if (!to.meta.requiresAuth) {
    next();
  } else {
    if (!isAuthenticated) {
      // Rutas protegidas que requieren autenticación, redirige al login si no está autenticado
      next({ name: 'login' });
    } else {
      if ( (!to.meta.isAdmin && !to.meta.isUser)) {
        // El usuario no tiene un rol válido o la ruta no tiene configurados roles
        next(false);
      } else {
        if ( to.meta.isAdmin) {
          // Usuario administrador accede a ruta de administrador
          next();
        } else if (to.meta.isUser) {
          next();
        } else {
          next({ name: userRole === "ADMIN" ? 'HomeAdmin' : 'HomepageLogged' });
        }
      }
    }
  }
});

export default router
