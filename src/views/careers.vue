<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();

import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components
const career_img = "/career_images/career_button.png"
const career_button ="More Careers"
const career_next_link = "Career_Next"
</script>

<template>
  
    <div id = "career-row"class=flex-row>
        
        <div id = "career-left" class = "flex-column">
            <h2 class ="accent-color-text">Web Development</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/career_images/career_web.png"> </p>
            <p id ="study-p1">Specializes in building websites and web applications, working on either the front end, back end, or both. They use programming languages and frameworks to bring web designs to life. 
            </p>
            <h2 class ="accent-color-text">Cloud</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/career_images/career_cloud.png"> 
            </p>
             <p id ="study-p1">Develops and manages cloud-based infrastructure and services. They optimize storage, networking, and security for scalable and cost-effective cloud solutions. 
            </p>
        </div>
        
        <div id = "career-middle" class = "flex-column">
            <h1 class ="center-text">Career</h1>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/career_images/career_middle.png"> 
            </p>
              <p id = "career-middle-button" class = "image-container">
                 <ButtonCard
            :msg="career_button"
            :img="career_img"
            :link="career_next_link"/>
            </p>
          
        </div>
                <div id = "career-right" class = "flex-column-career">
            <h2 class ="accent-color-text">Pen Testing</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/career_images/career_pen.png"> </p>
            <p id ="study-p1">Simulates cyberattacks on systems and networks to identify vulnerabilities. Their goal is to strengthen security before malicious hackers can exploit weaknesses. 
            </p>
            <h2 class ="accent-color-text">Game Development</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/career_images/career_game.png"> 
            </p>
             <p id ="study-p1">Designs, programs, and tests video games across platforms. They combine creativity, storytelling, and technical skills to create immersive and interactive experiences. 
            </p>
        </div>
    </div>
   <div class=flex-row>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Home</button></router-link>
  </div>

</template>

<style scoped>

</style>
