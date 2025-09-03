<script setup>
import {onMounted, ref} from 'vue'//reactive values
import { useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components

//Props to pass to each component
const study_img = "/public/why-study.png"
const study_button = "Why you should study"
const study_link="Study"
const career_img = "/public/careers.jpg"
const careers_button = "Possible Careers"

const cs_life_img = "cs_major.jpg"
const cs_life_button = "Life of a CS major"

const learn_more_img ="learn_more.jpg"
const learn_more_button ="Learn and Explore CS"

const prepare_img ="prepare.jpg"
const prepare_button ="How to prepare"

const cool_facts_img = "cool_facts.jpg"
const cool_facts_button ="Cool CS facts"

</script>

<template>
  <h1 id= "home-screen-header"class = "center-text">The World of Computer Science</h1>
  <div class = "grid">
  <ButtonCard
  :msg="study_button"
  :img="study_img"
  :link="study_link"/>
  
  <ButtonCard
  :msg="careers_button"
  :img="career_img"/>
  
  <ButtonCard
  :msg="cs_life_button"
  :img="cs_life_img"/>
 
  <ButtonCard
  :msg="learn_more_button"
  :img="learn_more_img"/>
  
  <ButtonCard
  :msg="prepare_button"
  :img="prepare_img"/>
  
  <ButtonCard
  :msg="cool_facts_button"
  :img="cool_facts_img"/>
  
  </div>

</template>

<style scoped>
</style>
