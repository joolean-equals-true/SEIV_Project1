<script setup>
import {onMounted, ref} from 'vue'
import { RouterLink, useRouter } from "vue-router";//router
const router = useRouter();
</script>

<template>
  <div>
    <h2>Sample Text</h2>

    <router-link :to="{name: 'Home'}"><button>Home</button></router-link>
  </div>
  
 

</template>

<style scoped>

</style>
