<template>
  <Navbar></Navbar>
  
<div style="background-color: #041e42; font-family: 'Poppins', sans-serif;">   <div class="row col-10 mx-auto justify-content-center">
  <Carrusel></Carrusel>
</div>


     <div class="row col-10 mx-auto gy-0 " style="background-color: rgba(255, 255, 255, 0);">
    <Card
      v-for="producto in productos"
      :key="producto.id"
      :producto="producto"
    />
  </div>
</div> 
</template>



<script setup>
import Card from '../components/card.vue';
import Navbar from '../components/Navbar.vue';
import Carrusel from '../components/Carrusel.vue';
import { ref } from 'vue';
import axios from '../axios-mock.js'; 

const productos = ref([]);

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

