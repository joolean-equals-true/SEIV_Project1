<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
import LargeCard from '../components/LargeCard.vue';
const router = useRouter();
const remote_msg = "Working remote really unrealistic stupid tech bootcamp ads can burn in hell you'll never get a job stay in tutorial hell"
const remote_img = "/public/cs_life_images/remote.png"
const in_office_msg = "Working in office more realistic you'll make a $100,000 per hour you should learn to code on boot.dev"
const in_office_img = "/public/cs_life_images/in_office.png"
</script>

<template>
  
    <h1 id = "main-cs-life-header" class = "center-text">Life of a CS major</h1>
    <div id ="main-cs-life-div"class = "flex-row">
      <div id ="cs-life-div1" class = "flex-column">
        <h2 id = "h2-cs-life" class = "accent-color-text">Remote</h2>
      <LargeCard
      :msg="remote_msg"
      :img="remote_img"
      />
      <router-link :to="{name: 'Remote'}"><button id ="cs-life-button">Learn More</button></router-link>
      </div>
      <div id ="cs-life-div1" class = "flex-column">
        <h2 id = "h2-cs-life" class = "accent-color-text">In-Office</h2>
        <LargeCard
      :msg="in_office_msg"
      :img="in_office_img"
      />
      <router-link :to="{name: 'Remote'}"><button id ="cs-life-button">Learn More</button></router-link>
      </div>

    </div>


  <div class = "flex-row">
    <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
  </div>
  
 

</template>

<style scoped>

</style>
