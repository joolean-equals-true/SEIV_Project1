<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <div>
    <div class="cool-facts-header">
      <h1>It's a feature!</h1>
      <p id = "center-text-feature" class = "image-container">
            <img src = "/public/CS-Facts/monkey.jpg"> </img>
      </p>
    </div>

  </div>
  
   <!--COMMENT-->
  <div class=flex-row>
    <router-link :to="{ name: 'Cool_Fact' }"><button class="home-button">Back</button></router-link>
  </div>

</template>

<style scoped>

</style>
