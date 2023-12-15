<template>
  <Navbar></Navbar>

    <div>
      <div class="d-flex justify-content-center">
        <img src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/ji/JIJBTTH17N8E1623121182386.png" style="width:20rem;">
      </div>
  
      <div class="container">
        <div class="row">
          <div class="col-4 image-left">
            <img src="https://wow.zamimg.com/uploads/screenshots/normal/626259-thrall-in-worgol.jpg" alt="Imagen Izquierda" style="width: 100%;">
          </div>
  
          <div class="col-4">
            <div class="d-flex justify-content-center py-5">
              <form @submit.prevent="submitSignup">
                <div class="mb-3">
                  <label for= "exampleInputEmail1" class="form-label">Correo Electrónico</label>
                  <input v-model="userData.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                  <input v-model="userData.password" type="password" class="form-control" id="exampleInputPassword1">
                </div>
        
                <button type="submit" class="btn btn-primary">Registrarse</button>
              </form>
            </div>
          </div>
  
          <div class="col-4 image-right">
            <img src="https://wow.zamimg.com/uploads/screenshots/normal/626259-thrall-in-worgol.jpg" style="width: 100%;">
          </div>
        </div>
      </div>
    </div>
  </template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import Navbar from '../components/Navbar.vue';


const router = useRouter();

const userData = ref({
  email: '',
  password: ''
});
const submitSignup = async () => {
  try {
    const user = { 
      email: userData.value.email,
      password: userData.value.password
    };

    const response = await axios.post('http://localhost:3003/auth/register', user);
console.log("la data es ",response.data);
    if (response.data) {
      console.log('Registro exitoso', response.data);
      router.push('login');      
    } else {
      console.error('La respuesta del servidor no contiene datos:', response);
    }


  } catch (error) {
    if (error.response) {
      console.error('Error de respuesta del servidor:', error.response.data);
      console.log('Respuesta completa del servidor:', error.response);
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor');
    } else {
      console.error('Error durante el registro:', error.message);
    }
  }
};

</script>
<style scoped>
.texto{
    color: white;
}

.image-left {
  flex: 1;
  max-height: 100%;
  overflow: hidden;
}

.image-right img {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

.text-white {
  color: white;
}
</style>
 