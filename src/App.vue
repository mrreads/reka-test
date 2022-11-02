<script setup>
import Sticky from './components/Sticky.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { provide, ref } from 'vue'

const header = ref(null)
const updateHeader = (e) => header.value = e;
provide('header', { header, updateHeader });

</script>

<template>
  <Sticky />
  <Header />
  <Footer />
</template>