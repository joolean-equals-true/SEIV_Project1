<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <h1 id = "prepare-header" class = "center-container">Exploratory Resources</h1>
  <div id = "main-prepare-div" class = "center-container"> 
    <div id = "prepare-padded-column" class = "flex-column">
      <h2 id = "prepare-header2" class = "accent-color-text">Learn to Code</h2>
      <p id = "prepare-graphic" class = "image-container">
        <img src = "/public/codewall.jpg">
      </p>
      <p id = "prepare-p1">
        Web Apps
          https://www.codecademy.com/
          https://code.org/
          https://www.codewars.com/
          https://www.w3schools.com/
        Development Apps
          https://code.visualstudio.com/
          https://vscode.dev/
          https://eclipseide.org/
      </p>
      </div>
        <div id = "prepare-padded-column" class = "flex-column">
          <h2  id = "prepare-header2" class = "accent-color-text">What can be Accomplished</h2>
        <p id = "prepare-graphic" class = "image-container">
          <img src = "/public/dashboard.jpg">
        </p>
        <p id = "prepare-p1">
          https://store.steampowered.com/
          https://www.nasa.gov/humans-in-space/spaceships-and-rockets/
          https://en.wikipedia.org/wiki/Internet_of_things
          https://theuselessweb.com/ 
        </p>
      </div>
    </div>
  <div id = "AN-bottom-button" class = center-continer>
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>
</template>

<style scoped>

</style>
