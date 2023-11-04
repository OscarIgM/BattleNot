<template>
  <div class="col-md-3 d-flex mb-4">
    <div class="card" style="height: 23rem; width: 18rem;background-color: rgba(255, 255, 255, 0);">
      <router-link :to="`/product/${producto.id}`">

      <img :src="producto.imagen" class="card-img-top row mx-auto" style="width: 250px; height: 250px; border-radius: 0%;" alt="...">
    </router-link>
   <div class="card-body" style="position: relative; ">
          <h5 class="card-title text-white d-flex justify-content-center" style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
            {{ producto.nombre }}
          </h5>
        <p class="card-text text-white" style="max-height: 200px">{{ producto.descripcion }}</p>
      </div>
    </div>
  </div>
</template>

  <script setup>
  import { defineProps } from 'vue';
  import { RouterLink } from 'vue-router';
  const { producto } = defineProps(['producto']);
  </script>
  
 