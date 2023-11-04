<template>
    <div>
      <Navbar></Navbar>
      <div class="d-flex">
        <div class="col-3">
          <h2>Biblioteca</h2>
          <ul class="list-group list-group-flush">
            <li
              class="list-group-item"
              v-for="juego in juegos"
              :key="juego.nombre"
              @click="selectJuego(juego)"
            >
              <img :src="juego.Icono" alt="Icono del juego" style="width: 24px; height: 24px;">
              {{ juego.nombre }}
            </li>
          </ul>
        </div>
        <div class="col-3 m-5 " style="position: relative;">
        <img :src="selectedJuego.imagenUrl" alt="Imagen del juego seleccionado" style="width: 25rem; height: 35rem;">
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
  import axios from '../axios-mock.js'; 
  import { ref } from 'vue';
  
  const juegos = [
    {
      nombre: "World Of Warcraft",
      Icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr7YNm00q4hTbmYKZsRi5-eP52cImF3SWeFRmR5gg&s",
      imagenUrl:"https://www.latercera.com/resizer/GUH5NGxq-4-M9I-uK9aGGNqAUuE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/U35WGFI7HBCEZPWJXCOTXK5GFQ.jpg"
    },
    {
      nombre: "Diablo 4",
      Icono: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZzOUZSM9Y7h6UVd8GiPdxGY6d9MOI9hm94Vayxc1gQ&s",
      imagenUrl:"https://image.api.playstation.com/vulcan/ap/rnd/202212/0522/Dzry5RAwU9HsJGXZ3PUSYgCa.jpg"
    }
  ];
  
  const selectedJuego = ref(juegos[0]);
  
  const productos = ref([]);
  
  const selectJuego = (juego) => {
    selectedJuego.value = juego;
  };
  
  (async () => {
    try {
      const response = await axios.get('/api/productos');
      productos.value = response.data;
      console.log(productos.value);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    }
  })();
  </script>
  