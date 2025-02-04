<script setup>
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
import { useRoute } from 'vue-router';
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue';
import Footer from './components/Footer.vue';

const route=useRoute()
</script>

<template>
  <header>
    <Header v-if="route.path === '/'"></Header>
  </header>

  <main>
    <HeroSection v-if="route.path === '/'"></HeroSection>
    <router-view></router-view>
  </main>

  <footer>
    <Footer v-if="route.path === '/'"></Footer>
  </footer>
</template>

<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Sriracha", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
}
</style>
