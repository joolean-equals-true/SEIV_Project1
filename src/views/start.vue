<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <h1 id = "header" class = "center-container">CS Startoff Roadmap</h1>
  <div id = "main-prepare-div" class = "center-container"> 
    <div id = "start-arrow-box1">

    </div>
    <div id = "start-left-text-box">

    </div>
    <div id = "start-middle-box">

    </div>
    <div id = "start-arrow-box2">

    </div>
    <div id = "start-right-text-box">

    </div>
    <div id = "start-arrow-box3">

    </div>
    <div id = "start-image-box">

    </div>
    <div id = "start-arrow-box4">

    </div>
    <div id = "padded-column" class = "flex-column">
      <h2 id = "header2" class = "accent-color-text">Online Content</h2>
      <p id = "prepare-graphic" class = "image-container">
        <img src = "/public/prepare_images/youtube.webp">
      </p>
      <p id = "prepare-p1">
        From the get go, online content will be your best way forward
      </p>
      <div id = "prepare-p2">
        <p>Don't know how to start?</p>
        <div>
          <router-link :to= "{name: 'Home'}"><button id = "prepare-button">Click Me</button></router-link>
        </div>
      </div> 

    </div>
      <div id = "padded-column" class = "flex-column">
        <h2  id = "header2" class = "accent-color-text">Personal Projects</h2>
      <p id = "prepare-graphic" class = "image-container">
        <img src = "/public/prepare_images/keyboard cat.jpg">
      </p>
      <p id = "prepare-p1">
        Most in CS have a passion project that they work with on the side, 
        its a great way to learn and good on resumes 
      </p>
    </div>
    </div>
  <div id = "bottom-button" class = center-continer>
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>

</template>

<style scoped>

</style>