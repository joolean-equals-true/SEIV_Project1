<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();

import ButtonCard from '../components/ButtonCard.vue';//ButtonCard components
const cool_facts_img = "cool_facts.jpg"
const cool_facts_button ="Cool CS facts"
</script>

<template>
  
    <div id = "career-row"class=flex-row>
        
        <div id = "career-left" class = "flex-column">
            <h2 class ="accent-color-text">Web Development</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/cool_facts.jpg"> </p>
            <p id ="study-p1">Text is a placeholder for other reasons, until the alignment
            for the text is done. More text will be here to show how the result
            will look before actually changing the text to something readable. Feel
            free to use this as a defined example. 
            </p>
            <h2 class ="accent-color-text">Cloud</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/cool_facts.jpg"> 
            </p>
             <p id ="study-p1">Text is a placeholder for other reasons, until the alignment
            for the text is done. More text will be here to show how the result
            will look before actually changing the text to something readable. Feel
            free to use this as a defined example. 
            </p>
        </div>
        
        <div id = "career-middle" class = "flex-column">
            <h1 class ="center-text">Career</h1>
            <p id = "career-middle-image" class = "image-container">
            <img src = "/public/cool_facts.jpg"> 
            </p>
              <p id = "career-middle-button" class = "image-container">
                 <ButtonCard
            :msg="cool_facts_button"
            :img="cool_facts_img"/>
            </p>
          
        </div>
                <div id = "career-right" class = "flex-column-career">
            <h2 class ="accent-color-text">Pen Testing</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/cool_facts.jpg"> </p>
            <p id ="study-p1">Text is a placeholder for other reasons, until the alignment
            for the text is done. More text will be here to show how the result
            will look before actually changing the text to something readable. Feel
            free to use this as a defined example. 
            </p>
            <h2 class ="accent-color-text">Game Development</h2>
            <p id = "career-graphic" class = "image-container">
            <img src = "/public/cool_facts.jpg"> 
            </p>
             <p id ="study-p1">Text is a placeholder for other reasons, until the alignment
            for the text is done. More text will be here to show how the result
            will look before actually changing the text to something readable. Feel
            free to use this as a defined example. 
            </p>
        </div>
    </div>
   <div class=flex-row>
    <router-link :to="{ name: 'Home' }"><button class="home-button">Home</button></router-link>
  </div>

</template>

<style scoped>

</style>
