<script setup>
import { ref } from 'vue'

const acu = ref("/acupy.jpg")
const uts = ref("/uts-bldg5.jpg")
</script>

<template>
<div class="photos">
   <h1>Photos</h1>
   <h4>Australian Catholic University, Strathfield Campus</h4>
   <img :src="acu" alt="acu">
   <br />

   <h4>University of Technology Sydney, Building 5</h4>
   <img :src="uts" alt="uts">
</div>
</template>



