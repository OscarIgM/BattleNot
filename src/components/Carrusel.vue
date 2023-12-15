<template>
      <div class="carousel-container col-8 d-flex mb-0 mt-3">

<div id="carouselExampleIndicators" class="carousel slide" style="height: 30rem; width:50rem; ">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div v-for="imagen in imagen">
    <div class="carousel-item active">
      <img :src= "imagen.imagenUrl" style="width: 100%;">
    </div>
  </div>
</div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
</template>
<style scoped>

</style>
<script setup>
import { ref } from 'vue';
import axios from 'axios'; 
 const imagen=ref([
{
  "imagenUrl":"https://bnetcmsus-a.akamaihd.net/cms/page_media/yo/YOHXG9OXPLXR1697594461718.png",
},
{
  "imagenUrl":"https://bnetcmsus-a.akamaihd.net/cms/blog_thumbnail/z6/Z69HID4AX12Z1565217144858.jpg"
},
{
  "imagenUrl":"https://blz-contentstack-images.akamaized.net/v3/assets/blt77f4425de611b362/blt6d7b0fd8453e72b9/646e720a71d9db111a265e8c/d4-open-graph_001.jpg"
}

 ]);

</script>