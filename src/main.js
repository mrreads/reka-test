import { createApp } from 'vue';
import '@/style.scss';

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import VueDragscroll from "vue-dragscroll";

import App from './App.vue';
const app = createApp(App);
app.component('VueSlider', VueSlider);
app.use(VueDragscroll);
app.mount('#app');