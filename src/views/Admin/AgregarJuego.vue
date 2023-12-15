
<template>
    <Navbar></Navbar>
     <div class="col d-flex justify-content-center m-5">
      <ul>
        <h1>Publicar nuevo juego para la blizzard</h1>
        
          <form @submit.prevent="submitPublish">
            <div class="mb-3">
              <label for="nombreProducto" class="form-label">Nombre del producto</label>
              <input v-model="gameDataToSend.title" type="text" class="form-control" id="name" required/>
            </div>
            <div class="mb-3">
              <label for="descripcion" class="form-label">Descripción</label>
              <input v-model="gameDataToSend.description" type="text" class="form-control" id="description" required/>
            </div>

            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input v-model="gameDataToSend.price" type="number" class="form-control" id="price" required/>
            </div>
            <div class="mb-3">
            <label for="imagen" class="form-label">Imagen</label>
            <input @change="handleFileUpload" type="file" class="form-control" id="imagen" />
            <button type="button" @click="uploadImage">Subir Imagen</button>
          </div>
           
            <div class="d-grid gap-2">
              <button
                    type="submit"
                    class="btn btn-primary rounded-pill"
                    style="font-weight: bold">
                    Publicar
                  </button>           
                 </div>
          </form>
      </ul>
    </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Navbar from '../../components/Navbar.vue';

const store = useStore();
const router = useRouter();
const gameDataToSend=ref({
title:'',
description:'',
price:'',
imageId:'',
});

const submitPublish = async () => {
  try {

    const gameDataToSend = { 
      title: gameDataToSend.value.name,
      description: gameDataToSend.value.description,
      price: gameDataToSend.value.price,
      imageId: gameDataToSend.imageId, 
    };
console.log('producto publicado', gameDataToSendToSend);
    const response = await axios.post('http://localhost:3003/games', gameDataToSendToSend);

    if (response.data) {
      console.log('Registro exitoso', response.data);
      router.push('home');
    } else {
      console.error('La respuesta del servidor no contiene datos:', response);
    }


  } catch (error) {
    console.log("error: ", error);
  }
};
</script>