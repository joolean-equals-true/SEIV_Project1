<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
<div id = "main-study-div"class = "flex-row"> 


  <div id="study-column1"class = "flex-column">
    <h2 class ="accent-color-text">New understanding</h2>
    <p id = "study-graphic2" class ="image-container">
      <img src="/public/study_images/study-graphic2.jpg">
    </p>
    <p id ="study-p1">Text is a placeholder for other reasons, until the alignment
      for the text is done. More text will be here to show how the result
      will look before actually changing the text to something readable. Feel
      free to use this as a defined example. 
    </p>
    <p id = "study-p2">
      Bullet points will go here describe stuff
    </p>

  </div>
  <div>
    <h1 class ="center-text">Study</h1>
    <p id= "study-graphic"class = "image-container">
      <img src ="/public/study_images/study-graphic.jpg">
    </p>
  </div>

  <div>
    <h2 class = "accent-color-text">Place Holder</h2>
  </div>
  

  </div>
 <div class = flex-row>
  <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
 </div>


</template>

<style scoped>

</style>
