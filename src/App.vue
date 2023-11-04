<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
#app {
  background-color: #041e42;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: 'Poppins', sans-serif;
color: white;
}
</style>