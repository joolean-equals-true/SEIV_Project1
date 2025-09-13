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
        
        <div id = "career-left" class = "flex-column-remote">
            <p id = "remote-graphic" class = "image-container">
            <img src = "/office_images/image 36-1.png"> </p>

            <p id = "remote-graphic" class = "image-container">
            <img src = "/office_images/image36-2.png"> </p>
        
        </div>
        
        <div id = "career-middle" class = "flex-column">
            <h1 class ="center-text">Try-Hard</h1>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/public/office_images/image 37.png"> 
            </p>
            
            <p id = "remote-text">
            The try-hard life of a computer science major is often defined by an intense focus on academics, projects, and career preparation. Days are carefully scheduled around classes, coding marathons, and late nights spent refining assignments until every edge case is covered. Many hours are dedicated to mastering algorithms, contributing to open-source projects, or building portfolios packed with side projects to impress recruiters. Networking events, hackathons, and internship applications become part of the weekly grind, with free time often sacrificed for productivity. It helps build a sense of community among peers. In person collaboration helps improve problem solving skills, communication skills, and strengthens the bond of teamwork.
            </p>          
        </div>
            <div id = "career-right" class = "flex-column-remote">
            <p id = "remote-graphic" class = "image-container">
                <img src = "/public/office_images/image 36.png">
            </p>

            <p id = "remote-graphic" class = "image-container">
                <img src = "/public/office_images/image 34.png">
            </p>
        </div>
    </div>
   <div class=flex-row>
    <router-link :to="{ name: 'Cs_Life' }"><button class="home-button">Back</button></router-link>
  </div>

</template>

<style scoped>

</style>
