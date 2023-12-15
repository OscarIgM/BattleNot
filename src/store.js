import { createStore } from 'vuex';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import router from "./router/index.js";

const store = createStore({
  state: {
    isAuthenticated:false,
    email: null,
    token: null,
  },
  mutations: {
    setAuthentication(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
      console.log(isAuthenticated);
    },
    setEmail(state, email) {
      state.email = email;
    },
    setToken(state, payload) {
      state.token = payload.token;
      // Almacena el token en localStorage
      localStorage.setItem('token', payload.token);
    },
    clearAuthData(state) {
      state.isAuthenticated = false;
      state.email = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  actions: {
    async login({ commit }, userData) {
      try {
        const response = await axios.post('http://localhost:3003/auth/login', userData);
        if (response.status === 200) {
          commit('setAuthentication', true);
          commit('setToken', { token: response.data.token });
          commit('setEmail', {token: response.data.token});
          console.log("Token recibido:", response.data.token);
          router.push({ name: 'home' });
        } else {
          throw new Error('Hubo un problema durante el inicio de sesión');
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        throw error;
      }
    },

    logout({ commit }) {
      try{
        commit('clearAuthData');
        console.log("Cierre sesión exitoso");
        router.push({ name: 'home' });
      } catch (error) {
        console.log("Error al cerrar sesión", error);
      }
    },

    checkAuth({ commit }) {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        commit('setEmail', decodedToken.sub);
        commit('setAuthentication', true);
        commit('setToken', { token });
      }
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    email: (state) => state.email,
    token: (state) => state.token,
    id: (state) => {
      const decodedToken = jwtDecode(state.token);
      return decodedToken.id;
    },
    role: (state) => {
      const decodedToken = jwtDecode(state.token);
      return decodedToken.role;
    }
  },
  // Verificación de autenticación al crear la tienda
  // Esto se ejecuta una vez al cargar la aplicación
  async created() {
    await this.dispatch('checkAuth');
  },
});
store.dispatch('checkAuth');
export default store;