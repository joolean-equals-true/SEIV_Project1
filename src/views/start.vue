<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <h1 id = "header" class = "center-container">CS Startoff Roadmap</h1>
  <div class = "flex-row"> 
    <div class = "start-grid-div">
      <div id = "start-arrow-box1">
        <img src = "/public/prepare_images/Arrow1.PNG">
      </div>
      <div id = "start-left-text-box">
        <h2 class ="accent-color-text">Start from Scratch</h2>
        <h2 class ="accent-color-text">1. Choose a Platform</h2>
        <h3>  Windows, IOS, or Linux</h3>
        <h2 class ="accent-color-text">2. Choose a Language</h2>
        <h3>  C++, Java, or Python</h3>
        <h2 class ="accent-color-text">3. Choose a Project</h2>
        <h3>  Interests</h3>
      </div>
      <div id = "start-middle-top-box">
        <h2 id = "start-p1">Or</h2>
      </div>
      <div id = "start-middle-bottom-box">
        <h2 id = "start-p2">Then</h2>
      </div>
      <div id = "start-arrow-box2">
        <img src = "/public/prepare_images/Arrow2.PNG">
      </div>
      <div id = "start-right-text-box">
        <h2 class ="accent-color-text">Have an interest?</h2>
        <h2 class ="accent-color-text">Use it</h2>
        <h3>Choose a project your intersted in and then find out its requirements to start building</h3>
      </div>
      <div id = "start-right-box">
        <h2 id = "start-p3">Then</h2>
        <h2 class ="accent-color-text">Figure it out</h2>
      </div>
      <div id = "start-arrow-box3">
        <img src = "/public/prepare_images/Arrow3.PNG">
      </div>
      <div id = "start-image-box" class = "image-container">
        <img src = "/public/prepare_images/stackoverflow.png">
      </div>
      <div id = "start-arrow-box4">
        <img src = "/public/prepare_images/Arrow4.PNG">
      </div>
    </div>
  </div>
  <div id = "AN-bottom-button" class = center-continer>
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>

</template>

<style scoped>

</style>