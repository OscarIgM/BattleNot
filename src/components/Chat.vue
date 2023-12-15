<template>
    <div class="col-9 mt-5 ms-5">
      <div class="container chat-container">
        <div class="d-flex flex-column justify-content-between p-2" style="height: 100%;">
          <div class="d-flex flex-column m-5">
            <div v-if="chat && chat.messages" v-for="message in chat.messages" :key="message.timestamp" class="d-flex flex-row mb-5">
              <p v-if="message.senderName" class="text-primary" style="font-weight: bold;">{{ message.senderName }}</p>
              <p class="mx-5">{{ message.content }}</p>
            </div>
          </div>
          <div class="d-flex flex-row justify-content-center my-5">
            <textarea class="form-control border border-secondary" rows="1" v-model="newMessage" placeholder="Escribe tu mensaje"></textarea>
            <button class="btn btn-primary ms-2 rounded-5" @click="sendMessage"><i class="bi bi-send"></i></button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import axios from "axios";
  import { defineProps, ref, watch, onMounted } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const userId = store.getters.id;
  const newMessage = ref(''); 
  const { chat } = defineProps(['chat']);
  
  // Utilizamos ref para hacer chat.messages reactivo
  const messages = ref(chat.messages);
  
  watch(() => chat.messages, (newMessages) => {
    // Actualizamos la referencia messages con los nuevos mensajes
    messages.value = newMessages;
    // Luego obtenemos los nombres de los remitentes para los nuevos mensajes
    getSenderNamesForMessages();
  });
  
  onMounted(async () => {
    // Cuando el componente se monta, obtenemos el nombre del remitente para cada mensaje
    await getSenderNamesForMessages();
  });
  
  async function getSenderNamesForMessages() {
    // Utilizamos Promise.all para realizar las solicitudes en paralelo para mejorar la eficiencia
    const promises = messages.value.map(async (message) => {
      try {
        const response = await axios.get(`http://localhost:8080/users/${message.senderId}`);
        const sender = response.data;
        message.senderName = sender.username; // Agregamos el nombre del remitente al mensaje
      } catch (error) {
        console.error('Error al cargar información del remitente', error);
        message.senderName = 'Desconocido';
      }
    });
  
    await Promise.all(promises);
  }
  
  async function sendMessage() {
    try {
      const response = await axios.post('http://localhost:8080/chat/sendMessage', null, {
        params: {
          roomId: chat.id,
          senderId: userId.toString(),
          content: newMessage.value,
        },
      });
  
      // Assuming the server responds with the updated chat
      const updatedChat = response.data; // Assuming the response is the updated chat object
  
      // Chat.messages ya está siendo observado por el watcher, no es necesario actualizarlo aquí
  
      // Obtener los nombres de los remitentes para los nuevos mensajes
      await getSenderNamesForMessages();
  
      // Clear the input field
      newMessage.value = '';
    } catch (error) {
      console.error('Error al enviar el mensaje', error);
    }
  }
  </script>
  
  <style scoped>
  .chat-container {
    overflow-y: auto;
    max-height: 600px; /* Ajusta según sea necesario */
  }
  </style>