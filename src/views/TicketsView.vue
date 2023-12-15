<template>
<NavBar></NavBar>
    <div class="container">
      <div class="d-flex" style="height: 100vh;">
        <div class="col-3 mt-5 border-end border-secondary">
          <div class="container">
            <h4 class="mb-5" style="font-weight: bold;">Historial Mensajes</h4>
            <div class="border-bottom border-secondary mt-3 ps-3">
              <p style="font-weight: bold;"><i class="bi bi-chat" style="color: rgb(0, 110, 255);"></i> LISTADO DE CHATS</p>
            </div>
            <div v-for="chat in chats" :key="chat.id" @click="selectChat(chat.id)" class="border-bottom border-secondary mt-3 ps-3">
              <p style="cursor: pointer;">{{ store.getters.name }}</p>
            </div>
          </div>
        </div>
        <Chat :chat="selectedChat" v-if="selectedChat"></Chat>
      </div>
    </div>
  </template>
  
  <script setup>
  import NavBar from '../components/Navbar.vue';
  import Chat from '../components/Chat.vue';
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const chats = ref([]);
  const selectedChat = ref(null);
  const userId = store.getters.id;
  
  
  async function getUserChatRooms() {
    try {
      const response = await axios.get(`http://localhost:8080/chat/getAllRoomsForUser?userId=${userId}`);
      chats.value = response.data;
    } catch (error) {
      console.error('Error al cargar chats', error);
    }
  }
  
  function selectChat(chatId) {
    // Buscar la sala de chat seleccionada por su ID
    selectedChat.value = chats.value.find(chat => chat.id === chatId);
  
    // Obtener la información del vendedor al seleccionar la sala de chat
    if (selectedChat.value) {
      getSeller(selectedChat.value);
    }
  }
  
  onMounted(() => {
    getUserChatRooms();
  });
  </script>