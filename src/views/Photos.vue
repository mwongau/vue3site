<script setup>
import {ref} from 'vue'

const count = ref(0)
const desc = ["Australian Catholic University, Strathfield Campus, NSW, Australia", 
              "University of Technology Sydney, Building 5, Sydney, Australia",
			  "Homebush Public School, Homebush, NSW, Australia"]	
const images = ref(["/vue3site/acupy.jpg", "/vue3site/uts-bldg5.jpg", "/vue3site/hps.jpg"])			  

function select() {
   count.value++
   if (count.value >= desc.length) 
      count.value = 0
}
</script>

<template>
<div class="photos">
   <h1>Photos</h1>
   <button @click="select"><b>Select next photo</b></button>
   <br />
   <h4>{{desc[count]}}</h4>
   <img :src="images[count]" alt="image" />
</div>
</template>




