<script setup>
import {onMounted, ref} from 'vue'
import {defineProps} from 'vue'
import { useRouter } from "vue-router";//router
const router = useRouter();
const props = defineProps({
  msg: String,
  img: String,
})

</script>

<template>
 
  <div class = "flex-column">
  <p class = "card-image-container">
      <img :src= img>
    </p>
    <div class = "flex-row bottom-half secondary-color card-paragraph-container">
        <p>{{ props.msg }}</p>
    </div>
  </div>

</template>

<style scoped>

</style>
