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
            <h1 class ="center-text-career">Casual</h1>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/public/remote_images/remote_middle.png"> 
            </p>
            
            <p id = "remote-text">
            The casual life of a computer science major often blends long stretches of coding with laid-back routines of everyday student life. Much of the day may be spent in front of a laptop, whether debugging a stubborn program, collaborating on a group project, or exploring personal coding side projects for fun. Outside of coursework, downtime is usually filled with hanging out with friends, grabbing quick meals, gaming, or watching shows as a way to decompress after hours of problem-solving. Many CS majors also enjoy casual tech discussions—sharing memes about coding struggles or geeking out about the latest gadgets—so the line between work and hobbies can blur. Overall, it’s a mix of focused productivity and relaxed social time, with a rhythm shaped by projects, deadlines, and plenty of caffeine.
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
    <router-link :to="{ name: 'Cs_Life' }"><button class="home-button">Back</button></router-link>
  </div>

</template>

<style scoped>

</style>
