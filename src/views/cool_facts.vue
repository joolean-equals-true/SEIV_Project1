  <!--
  Developer: Samuel Harris
  Date: 09/3/2025
  Description: Cool CS Facts page!
  Version: 1.0
  -->

<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components

const bug_img = "/public/CS-Facts/bug.jpg"
const msg = "This is not a bug"
const feature_page= "Feature"

const router = useRouter();
</script>

<template>
  <div class="cool-facts-header">
    <h1>Cool CS Facts</h1>
  </div>

  <div class="center-container">
    <div class="main-div">
      <div class="text-color-text flex-column flex-row">
        <ul>
          <li>The first email was sent in 1971 by Ray Tomlinson</li>
          <li>The first computer, ENIAC (1940s), weighed 30 tons and took up an entire room.</li>
          <li>The first computer network was developed in the 1960s. It was called ARPNET (Advanced Research Projects
            Agency Network)</li>
          <li>The term “computer bug” came from a moth that was stuck in a relay of the Harvard Mark II computer in
            1947.</li>
        </ul>
      </div>
        
      <div class="image-container center-container">
          <ButtonCard
            :msg="msg"
            :img="bug_img"
            :link="feature_page"/>
      </div>

      <div class="text-color-text">
        <p>Source: <a href="https://www.idtech.com/blog/computer-science-facts-collection-of-interesting-statistics"
            target="_blank">idtech.com</a></p>
        <p>Source: <a href="https://www.dbvis.com/thetable/why-are-they-called-bugs/" target="_blank">dbvis.com</a></p>
      </div>
    </div>
  </div>


  <!--COMMENT-->
  <div class=flex-row>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Home</button></router-link>
  </div>

</template>

<style scoped></style>
