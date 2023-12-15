<template>
  <div>
    <Navbar></Navbar>
    <div class="d-flex">
      <div class="col-3">
        <h2>Biblioteca</h2>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="juego in games"
            :key="juego.title"
            @click="selectJuego(juego)"
          >
            <img :src="juego.imageUrl" alt="Icono del juego" style="width: 24px; height: 24px;">
            {{ juego.title }}
          </li>
        </ul>
      </div>
      <div class="col-3 m-5 " style="position: relative;">
        <img :src="selectedJuego.imageUrl" alt="Imagen del juego seleccionado" style="width: 25rem; height: 35rem;">
        <button
          class="btn btn-primary"
          style="position: absolute; bottom: 0rem; right: 0rem; width: 8rem; height: 3rem;"
        >
          Lanzar
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useStore } from 'vuex';

const games = ref([]);
const selectedJuego = ref(0);
const store = useStore();

const selectJuego = (juego) => {
  selectedJuego.value = juego;
};
const fetchData = async () => {
  try {
    const userId = jwtDecode(store.getters.token).userId;
    const response = await axios.get('http://localhost:3003/sale', { params: { userId } });
    games.value = response.data.inventory;
    console.log(games.value);
  } catch (error) {
    console.error('Error al cargar juegos:', error);
  }
};



onMounted(fetchData);
</script>

