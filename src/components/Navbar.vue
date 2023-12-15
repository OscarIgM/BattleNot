<template>
  <nav class="navbar custom-navbar-bg">
    <div class="container-fluid">
      <RouterLink to="/" class="custom-link">
        <a class="navbar-brand text-white d-flex" style="font-family: 'Poppins', sans-serif;">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Blizzard_Entertainment_Logo_2015.svg/2560px-Blizzard_Entertainment_Logo_2015.svg.png" style="width: 50px;">
        <h3>BATTLENOT</h3>  
        </a>
      </RouterLink>
      <div class="user-icon-container" v-if="!isAuthenticated">
        <ul class="nav-item dropdown ml-auto d-flex m-2">
          <IconProfile></IconProfile>
          <a class="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" style="">
            Cuenta
          </a>
          <ul class="dropdown-menu">
            <li>
              <RouterLink to="/login" class="custom-link">
                <i class="fas fa-user"></i> <div class="dropdown-item">Iniciar sesión</div>
              </RouterLink>
            </li>
            <li><hr class=" dropdown-divider"></li>
            <RouterLink to="/register" class="custom-link">
              <li><div class="dropdown-item">Registro</div></li>
            </RouterLink>
          </ul>
        </ul>
      </div>
      
      <div class="user-options d-flex" v-else>
        <div class="user-icon"> 
                 <RouterLink to="/listarJuego" class="custom-link">
          <i class="fas fa-user"></i> Listar Juegos 
        </RouterLink>

        </div>      
        <div class="user-icon"> 
                 <RouterLink to="/ticket" class="custom-link">
          <i class="fas fa-user"></i> Tickets
        </RouterLink>

        </div>      
      
        <div class="user-option">
          <RouterLink to="/userprofile">
          <i class="fas fa-user-circle"></i>  Perfil
        </RouterLink>
        </div>
        
        <div class="user-option" @click="logout">
          <i class="fas fa-sign-out-alt"></i> Cerrar sesión
        </div>

        
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { RouterLink } from 'vue-router';
import {useStore} from 'vuex';

const store= useStore();

const isAuthenticated = store.getters.isAuthenticated;

const logout = () => {
  store.dispatch('logout');
};

import IconProfile from './icons/IconProfile.vue';
</script>

<style scoped>
  .custom-navbar-bg {
    background-color: #123456; /* Reemplaza el valor con el color deseado */
  }

  .user-icon {
    cursor: pointer;
    color: white;
    margin-right: 20px;
  }

  .user-option {
    cursor: pointer;
    color: white;
    margin-right: 20px;
  }
  .custom-link {
  color: white;
text-decoration: none;}
</style>
