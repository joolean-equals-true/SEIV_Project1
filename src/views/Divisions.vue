<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components
import Card from '../components/Card.vue';

const artificial_intelligence = "divisions_images/artificial-intelligence.jpg"
const artificial_intelligence_p = "In this division, you will learn about the tools behind AI, how it works, and the principles behind its functionality. This division will equip you with the tools you need to be a expert on the training, development, and deployment of AI models."
const cybersecurity = "divisions_images/cybersecurity.jpg"
const cybersecurity_p = "In the Cybersecurity division, you will focus on learning about how to defend our systems effectively. Courses such as Network and Cloud security will help prepare you to be at the forfront of an organization's defenses."
const middle_img = "divisions_images/middle_img.png"
const gaming_img = "divisions_images/gaming_img.png"
const gaming_p = "In the gaming division, you will gain crucial concepts that are vital to game development: 3d modeling, world building, as well as training in the tools used to develop games, such as Unity, blender, and programming in C#."
const business_img = "divisions_images/business_img.png"
const business_p = "In the Business division, you will learn about business principles to better understand the mindset of an organization while you learn CS and Software development principles, so that you can better market yourself to corporation."
</script>

<template>
<div id = "main-study-div"class = "flex-row"> 
  <div id = "divisions-div1" class="flex-column">
    <h2 class="accent-color-text">
      Artificial Intelligence
    </h2>
    <card
      :msg="artificial_intelligence_p"
      :img="artificial_intelligence"
      />

      <h2 class="accent-color-text">
      Cybersecurity
    </h2>
    <card
      :msg="cybersecurity_p"
      :img="cybersecurity"
      />
  </div>
  <div class="flex-column">
    <h1 class = "center-text">Divisions</h1>
    <p class = "image-container">
      <img :src = "middle_img">
    </p>
  </div>

  <div id = "divisions-div1"class="flex-column">
      <h2 class="accent-color-text">
      Gaming
    </h2>
    <card
      :msg="gaming_p"
      :img="gaming_img"
      />

      <h2 class="accent-color-text">
      Business
    </h2>
    <card
      :msg="business_p"
      :img="business_img"
      />
  </div>
  </div>
 <div class = flex-row>
  <router-link :to="{name: 'Study'}"><button class = "home-button">Back</button></router-link>
 </div>


</template>

<style scoped>

</style>
