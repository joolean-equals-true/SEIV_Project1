<script setup>
import {onMounted, ref} from 'vue'
import {defineProps} from 'vue'
const props = defineProps({
  msg: String,
  img: String
})

</script>

<template>
  <div class = "flex-column">
  <p class = "button-card-image-container">
      <img :src= img>
    </p>
    <div class = "flex-row bottom-half secondary-color">
        <button>{{ props.msg }}</button>
    </div>
  </div>
 

</template>

<style scoped>

</style>
