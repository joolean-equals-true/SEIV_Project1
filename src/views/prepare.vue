<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <h1 id = "prepare-header" class = "center-container">How to Prepare for CS</h1>
  <div id = "main-prepare-div" class = "center-container"> 
    <div id = "prepare-padded-column" class = "flex-column">
      <h2 id = "prepare-header2" class = "accent-color-text">Online Content</h2>
      <p id = "prepare-graphic" class = "image-container">
        <img src = "/prepare_images/youtube.webp">
      </p>
      <p id = "prepare-p1">
        From the get go, online content will be your best way forward
      </p>
      <div id = "prepare-p2">
        <p>Don't know how to start?</p>
        <div>
          <router-link :to= "{name: 'Start'}"><button id = "prepare-button">Click Me</button></router-link>
        </div>
      </div> 
      </div>
        <div id = "prepare-padded-column" class = "flex-column">
          <h2  id = "prepare-header2" class = "accent-color-text">Personal Projects</h2>
        <p id = "prepare-graphic" class = "image-container">
          <img src = "/prepare_images/keyboard cat.jpg">
        </p>
        <p id = "prepare-p1">
          Most in CS have a passion project that they work with on the side, 
          its a great way to learn and good on resumes 
        </p>
      </div>
    </div>
  <div id = "AN-bottom-button" class = center-continer>
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>
</template>

<style scoped>

</style>
