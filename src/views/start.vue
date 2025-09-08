<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <h1 id = "header" class = "center-container">CS Startoff Roadmap</h1>
  <div id = "main-prepare-div" class = "center-container"> 
    <div id = "start-arrow-box1" class = "image-container">
      <img src = "/public/prepare_images/Arrow1.PNG">
    </div>
    <div id = "start-left-text-box" class = "flex-column">
      <h3 class ="accent-color-text">Start from Scratch</h3>
      <h3 class ="accent-color-text">1. Choose a Platform</h3>
      <p>  Windows, IOS, or Linux</p>
      <h3 class ="accent-color-text">2. Choose a Language</h3>
      <p>  C++, Java, or Python</p>
      <h3 class ="accent-color-text">3. Choose a Project</h3>
      <p>  Interests</p>
    </div>
    <div id = "start-middle-box" class = "flex-column">
      <p id = "start-p1">Or</p>
      <p id = "start-p2">Then</p>
    </div>
    <div>
      <div id = "start-arrow-box2" class = "image-container">
        <img src = "/public/prepare_images/Arrow2.PNG">
      </div>
      <div id = "start-right-text-box">
        <h3 class ="accent-color-text">Have an interest?</h3>
        <h3 class ="accent-color-text">Use it</h3>
        <p>Choose a project your intersted in and then find out its requirements to start building</p>
      </div>
      <div>
        <p id = "start-p3">Or</p>
      </div>
    </div>
    <div id = "start-arrow-box3" class = "image-container">
      <img src = "/public/prepare_images/Arrow3.PNG">
    </div>
    <div id = "start-image-box">

    </div>
    <div id = "start-arrow-box4" class = "image-container">
      <img src = "/public/prepare_images/Arrow4.PNG">
    </div>
  </div>
  <div id = "bottom-button" class = center-continer>
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>

</template>

<style scoped>

</style>