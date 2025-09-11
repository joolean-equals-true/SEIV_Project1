<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();

import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components
const career_img = "/career_images/career_button.png"
const career_button ="More Careers"
</script>

<template>
  
    <div id = "career-row"class=flex-row>
        
        <div id = "career-left" class = "flex-column">
            <h2 class ="accent-color-text">UI/UX Designer</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/career_images/career_UI.png"> </p>
            <p id ="study-p1">Focuses on creating intuitive, visually appealing, and user-friendly interfaces by blending design principles with user research. They ensure that applications are both functional and enjoyable to use.
            </p>
            <h2 class ="accent-color-text">Fullstack Development</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/career_images/career_fullstack.png"> 
            </p>
             <p id ="study-p1">Builds and maintains both the front-end (user-facing) and back-end (server/database) parts of applications. They handle the complete development process, from design to deployment 
            </p>
        </div>
        
        <div id = "career-next-middle" class = "flex-column-career-middle">
            <h1 class ="center-text-career">More Careers</h1>
              <p id = "career-graphic-middle" class = "image-container">
            <img src = "/public/career_images/career_top.png"> 
            </p>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/public/career_images/career_middle2.png"> 
            </p>
              <p id = "career-graphic-middle" class = "image-container">
            <img src = "/public/career_images/career_bottom.png"> 
            </p>
          
          
        </div>
                <div id = "career-right" class = "flex-column-career">
            <h2 class ="accent-color-text">Network Admin</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/career_images/career_network.png"> </p>
            <p id ="study-p1">Manages and secures computer networks within an organization, ensuring smooth connectivity and performance. They troubleshoot issues and maintain hardware, software, and security protocols.
            </p>
            <h2 class ="accent-color-text">Systems Engineer</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/career_images/career_systems.png"> 
            </p>
             <p id ="study-p1">Designs, integrates, and manages complex computer systems to meet an organization`s needs. They ensure reliability, scalability, and efficiency across hardware and software. 
            </p>
        </div>
    </div>
   <div class=flex-row>
    <router-link :to="{ name: 'Career' }"><button class="home-button">Back</button></router-link>
  </div>

</template>

<style scoped>

</style>
