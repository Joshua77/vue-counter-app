import { createApp } from 'vue'
import App from './App.vue'
import "./App.css";
import router from './routes';
import counterStore from './Composables/counterStore';
createApp(App).use(router).use(counterStore).mount('#app')
