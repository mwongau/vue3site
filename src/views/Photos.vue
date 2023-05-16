<script setup>
import {ref} from 'vue'

const count = ref(0)
const photos = ref([
		{  desc: 'Australian Catholic University, Strathfield Campus, NSW, Australia',
		   image: '/acupy.jpg',
		   alt: 'acu'},
		{  desc: 'University of Technology Sydney, Building 5, Sydney, Australia',
		   image: '/uts-bldg5.jpg',
		   alt: 'uts'},
		{  desc: 'Homebush Public School, Homebush, NSW, Australia',
		   image: '/hps.jpg',
		   alt: 'hps'}])		 

function select() {
   count.value++
   if (count.value > 2) 
      count.value = 0
}
</script>

<template>
<div class="photos">
   <h1>Photos</h1>
   <button @click="select"><b>Click to select next photo</b></button>
   <br />
   <h4>{{photos[count].desc}}</h4>
   <img :src="photos[count].image" :alt="photos[count].alt">
   
</div>
</template>

<style scoped>
img {
   max-width: 100%;
   height: auto;
}
</style>





