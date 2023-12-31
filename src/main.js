import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'
import store from './store';

// setup Shippert API
const CONFIG = require("@/config.json");
const API = `${CONFIG.host ? CONFIG.host + '/': ''}${CONFIG.group ? CONFIG.group + '/' : ''}api/`;

// Simulate identifier that is included in watch
import { saveToStorage, loadFromStorage } from "@/assets/js/data-connector/local-storage-abstractor";
saveToStorage('userId', "T-1");

const USER_ID = loadFromStorage('userId');
const TOKEN = USER_ID;

// Create and setup app
const app = createApp(App);
app.use(store);
app.mount("#app");

export { API, TOKEN, USER_ID };
