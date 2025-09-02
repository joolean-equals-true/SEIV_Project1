<script setup>
import {onMounted, ref} from 'vue'
import {defineProps} from 'vue'
import { useRouter } from "vue-router";//router
const router = useRouter();
const props = defineProps({
  msg: String,
  img: String,
  link: String,
})

</script>

<template>
 
  <div class = "flex-column">
  <p class = "button-card-image-container">
      <img :src= img>
    </p>
    <div class = "flex-row bottom-half secondary-color">
       <router-link :to="{name: link}"><button> {{ props.msg }}</button></router-link>
    </div>
  </div>

</template>

<style scoped>

</style>
