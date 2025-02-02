<script setup>
/* import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue' */
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue';
</script>

<template>
  <header>
    <Header></Header>
  </header>

  <main>
    <HeroSection></HeroSection>
  </main>
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
