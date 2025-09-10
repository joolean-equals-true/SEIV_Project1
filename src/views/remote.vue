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
            <video class="video-container" controls>
            <source src="/videos/remote_video_left.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <p id = "remote-graphic" class = "image-container">
            <img src = "/public/remote_images/remote_left.png"> </p>
        
        </div>
        
        <div id = "career-middle" class = "flex-column">
            <h1 class ="center-text">Remote</h1>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/public/remote_images/remote_middle.png"> 
            </p>
            
            <p id = "remote-text">
             Working a remote or work-from-home job in computer science often means flexibility and independence, but also responsibility for managing your own time. A typical day might include focused coding sessions, team stand-up meetings, and asynchronous collaboration with colleagues across different time zones. While remote work eliminates commuting and allows for a personalized workspace, it also requires discipline to avoid distractions and maintain work-life balance. Many professionals find that remote computer science jobs offer both autonomy and opportunities to contribute to global teams.
            </p>
          
        </div>
                <div id = "career-right" class = "flex-column-remote">
      <video class="video-container" controls>
            <source src="/videos/remote_video_right.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
            <p id = "remote-graphic" class = "image-container">
            <img src = "/public/remote_images/remote_right.png"> </p>
        
        </div>
    </div>
   <div class=flex-row>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Back</button></router-link>
  </div>

</template>

<style scoped>

</style>
