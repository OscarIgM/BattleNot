<template>
  <Navbar></Navbar>
  <div>
    <div class="text-white">
      <div class="d-flex justify-content-center py-3">
        <img src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/ji/JIJBTTH17N8E1623121182386.png" style="width:20rem;">
      </div>
      <div class="container d-flex justify-content-center py-5">
        <form @submit.prevent="submitLogin">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
            <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1">
          </div>
          <div class="mb-3 form-check text-white">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
          </div>
          <button type="submit" class="btn btn-primary">Iniciar Sesion</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from 'vue';
import { useStore } from 'vuex';
import Navbar from "../components/Navbar.vue";

const user = ref({
  email: '',
  password: ''
});

const store = useStore(); // Mueve la inicialización de store aquí

const submitLogin = async () => {
  console.log("el usuari enviado es", user);
  await store.dispatch('login', user.value);
};
</script>



<style scoped>
.texto{
    color: white;
}
</style>
 