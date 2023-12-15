<template>
    <div>
        <NavBar></NavBar>
      <div class="container">
        <div class="row" style="height: 100vh;">
          <div class="col d-inline-block my-5 ms-5 p-5">
            <img v-if="game.imageUrl" :src="game.imageUrl" class="img-fluid mx-auto d-block" :alt="game.title" />
          </div>
          <div class="col d-inline-block my-5 me-5 p-5">
            <h3 style="font-weight: bold;">{{ game.title }}</h3>
        
            <h3 style="font-weight: bold;">$ {{ game.price }}</h3>
            <p>{{ game.description }}</p>
           
          
            <div class="d-flex flex-row mx-1">
              <button @click="comprar" type="button" class="flex-grow-1 me-5 mt-4 btn btn-primary rounded-0" style="font-weight: bold;">
COMPRAR INSTANTENEAMENTE
              </button>
          
            </div>
            <div class="d-flex justify-content-center mt-4">
          
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import NavBar from '../components/NavBar.vue';
  import { useRoute } from 'vue-router';
  import axios from 'axios';
  import {useStore} from 'vuex';
  import { jwtDecode } from "jwt-decode";
  const store=useStore();
  const route = useRoute();
  const game = ref({});
  
  const comprar = async () => {
  try {
    const userId = jwtDecode( store.state.token).userId;
    const gameId = route.params.id;
console.log(userId, gameId);

    const response = await axios.post('http://localhost:3003/sale', {
      userId: userId,
      gameId: gameId,
    });

    console.log('Respuesta de la compra:', response.data);
  } catch (error) {
    console.error('Error al realizar la compra:', error);
  }
};


  onMounted(async () => {
  const gameId = route.params.id;

  try {
    const response = await axios.get(`http://localhost:3003/games/${gameId}`);
    game.value = response.data.game;
    console.log(game.value);
  } catch (error) {
    console.error('Error al cargar detalles del producto:', error);
  }
});

  
  </script>
  
  