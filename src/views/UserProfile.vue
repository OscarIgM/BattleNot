<template>
    <div>
      <Navbar></Navbar>
      <div class="container">
        <div class="d-flex justify-content-center" style="height: 100vh;">
          <div class="col-3 mt-5">
            <div class="container">
              <div class="d-flex justify-content-center mt-5">
                <div class="mt-5">
                  <h5 style="font-weight: bold;">{{ user.email }}</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-9 mt-5 ms-5">
            <div class="container">
              <div class="d-flex mt-5">
                <div class="col">
                  <form @submit.prevent="changePassword">
                    <div class="mb-3">
                      <label for="password" class="form-label">Nueva Contraseña</label>
                      <input type="password" class="form-control" id="password" v-model="password" required>
                    </div>
                    <div class="mb-3">
                      <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
                      <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Cambiar Contraseña</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Navbar from '../components/Navbar.vue';
  import { useStore } from 'vuex';
  import { jwtDecode } from 'jwt-decode';
  import axios from 'axios';
  
  const store = useStore();
  const user = jwtDecode(store.getters.token).userId;
  
  let password = '';
  let confirmPassword = '';
  
  const changePassword = async () => {
    try {
      const response = await axios.put(`http://localhost:3003/users/${user}`, {
        password,
      });
  
      console.log('que dice servidor:', response.data);
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  };
  </script>
  