<script setup>
import {onMounted, ref} from 'vue'//reactive values
import { useRouter } from "vue-router";//router
const router = useRouter();
import ButtonCard from './components/ButtonCard.vue';//ButtonCard components

</script>

<template>
  <router-view/>
</template>

<style scoped>
</style>
