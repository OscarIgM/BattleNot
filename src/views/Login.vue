<template>
    <div class="text-white" style="background-color: #123456;">
    <div class="d-flex justify-content-center py-5">
          <img src="https://bnetcmsus-a.akamaihd.net/cms/blog_header/ji/JIJBTTH17N8E1623121182386.png" style="width:20rem;">
        </div>
    <div class="container d-flex justify-content-center py-5">
      <form @submit.prevent="authenticateAndRedirect">
        <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Correo Electronico</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check text-white">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Recuerdame</label>
  </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
</div>
  </template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const isLoggedIn = ref(false);
    const router = useRouter();

    const authenticateAndRedirect = () => {
      isLoggedIn.value = true;
      localStorage.setItem('isLoggedIn', isLoggedIn.value);
      router.push('/');
    };

    return {
      authenticateAndRedirect,
    };
  },
};
</script>
<style scoped>
.texto{
    color: white;
}
</style>
 