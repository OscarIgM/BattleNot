<template>
  <div class="col-md-3 d-flex mb-4" v-if="game">
    <div class="card" style="height: 23rem; width: 18rem;background-color: rgba(255, 255, 255, 0);">


      <RouterLink :to=" `/gamedetail/${game.game._id}`">
      <img :src="game.game.imageUrl" class="card-img-top row mx-auto"
       style="width: 250px; height: 250px; border-radius: 0%;" alt="...">
     
    </RouterLink>
     <div class="card-body" style="position: relative;">
        <h5 class="card-title text-white d-flex justify-content-center" style="font-size: 1rem; overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
          {{ game.game.title }}
        </h5>
        <p class="card-text text-white" style="max-height: 200px">{{ game.game.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const game = defineProps(['game']);
console.log("el dato es ", game.game._id);
</script>

 