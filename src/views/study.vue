<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components

const career_img = "careers.jpg"
const careers_button = "Possible Careers"
const career_link = "Career"
const divisions_img = "divisions_images/divisions-image1.jpg"
const divisions_button = "Divisions"
const divisions_link = "Divisions"
</script>

<template>
<div id = "main-study-div"class = "flex-row"> 


  <div id="study-column1"class = "flex-column">
    <h2 class ="accent-color-text">New understanding</h2>
    <p id = "study-graphic2" class ="image-container">
      <img src="/study_images/study-graphic2.jpg">
    </p>
    <p id ="study-p1">Studying computer science will give you a large level
      of new knowledge about computing concepts that are used everyday in your life!
      A lot of aspects that were once foreign to you will become familiar to you, 
      and you will gain an awakening to an entire new world. 
    </p>
    
     
      <ul id = "study-p2">
        <li>
          Programming Concepts
        </li>
         <li>
          Software Engineering Principles
        </li>
        <li>
          Database Principles
        </li>
        <li>
          Web Development Workflows
        </li>
        <li>
          Machine Learning Concepts
        </li>
          <li>
          Advanced Network Understanding
        </li>
      </ul>
    
  </div>
  <div id = "study-column2" class = "flex-column">
    <h1 class ="center-text margin-20">Study</h1>
    <p id= "study-graphic"class = "image-container margin-20">
      <img src ="/study_images/study-graphic.jpg">
    </p>

     
        <ButtonCard
        :msg="divisions_button"
        :img="divisions_img"
        :link="divisions_link"/>
  </div>

  <div id= "study-column3"class = "flex-column">
    <h2 class = "accent-color-text">Career Opportunities</h2>
    <p id = "study-graphic3" class ="image-container">
      <img src="/study_images/study-graphic3.jpg">
    </p>
    <p id ="study-p1">The career opportunities that are availble for those who have firm understanding
      of computer science is vast... The amount of possible jobs is nearly endless, with so many different
      career paths to choose from that will suit your interests. Click below to check some out!
    </p>
    <ButtonCard
        :msg="careers_button"
        :img="career_img"
        :link="career_link"/>
     
  </div>
  

  </div>
 <div class = flex-row>
  <router-link :to="{name: 'Home'}"><button class = "home-button">Home</button></router-link>
 </div>


</template>

<style scoped>

</style>
