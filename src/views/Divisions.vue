<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components
import Card from '../components/Card.vue';

const artificial_intelligence = "public/divisions_images/artificial-intelligence.jpg"
const artificial_intelligence_p = "In this division, you will learn about the tools behind AI, how it works, and the principles behind its functionality. This division will equip you with the tools you need to be a expert on the training, development, and deployment of AI models."
const cybersecurity = "public/divisions_images/cybersecurity.jpg"
const cybersecurity_p = "In the Cybersecurity division, you will focus on learning about how to defend our systems effectively. Courses such as Network and Cloud security will help prepare you to be at the forfront of an organization's defenses."

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
  <div class="flex-column"></div>

  <div class="flex-column"></div>
  </div>
 <div class = flex-row>
  <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
 </div>


</template>

<style scoped>

</style>
