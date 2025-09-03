<script setup>
import {onMounted, ref} from 'vue'//reactive values
import { useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components

//Props to pass to each component
const study_img = "/public/why-study.png"
const study_button = "Why you should study"
const study_link = "Study"
const career_img = "/public/careers.jpg"
const careers_button = "Possible Careers"
const career_link = "Career"
const cs_life_img = "cs_major.jpg"
const cs_life_button = "Life of a CS major"
const cs_life_link = "Cs_Life"
const learn_more_img ="learn_more.jpg"
const learn_more_button ="How to explore and learn more"
const learn_more_link = "Learn"
const prepare_img ="prepare.jpg"
const prepare_button ="How to prepare"
const prepare_link = "Prepare"
const cool_facts_img = "cool_facts.jpg"
const cool_facts_button ="Cool CS facts"
const cool_facts_link = "Cool_Fact"
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
  :img="career_img"
  :link="career_link"/>
  
  <ButtonCard
  :msg="cs_life_button"
  :img="cs_life_img"
  :link="cs_life_link"/>
 
  <ButtonCard
  :msg="learn_more_button"
  :img="learn_more_img"
  :link="learn_more_link"/>
  
  <ButtonCard
  :msg="prepare_button"
  :img="prepare_img"
  :link="prepare_link"/>
  
  <ButtonCard
  :msg="cool_facts_button"
  :img="cool_facts_img"
  :link="cool_facts_link"/>
  
  </div>

</template>

<style scoped>
</style>
