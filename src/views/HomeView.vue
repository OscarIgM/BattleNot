<script setup>
import Card from '../components/Card.vue';
import Navbar from '../components/Navbar.vue';
import Carrusel from '../components/Carrusel.vue';
import { ref } from 'vue';
import axios from 'axios';


const games = ref([]);
(async () => {
  try {
      const response = await axios.get('http://localhost:3003/games');
      games.value = response.data.games;
      console.log(games.value);
    } catch (error) {
      console.error('Error al cargar juegos:', error);
    }
  })();


</script>

<template>
  <div>
    <Navbar></Navbar>
    <div style="background-color: #041e42; font-family: 'Poppins', sans-serif;">
      <div class="row col-10 mx-auto justify-content-center">
        <Carrusel></Carrusel>
      </div>
      <div class="row col-10 mx-auto gy-0" style="background-color: rgba(255, 255, 255, 0);">

        <Card v-for="game in games"
        :key="game.id"
        :game="game" />
      </div>
    </div>
  </div>
</template>



