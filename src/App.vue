<script setup>
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <router-link to="/prodotti"><Header></Header></router-link>
  </header>

  <main>
    <HeroSection></HeroSection>
  </main>

  <footer>
    <Footer></Footer>
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
