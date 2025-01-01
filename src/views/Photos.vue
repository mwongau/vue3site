<script setup>
import {ref} from 'vue'

const count = ref(0)
const desc = ["Australian Catholic University, Strathfield Campus, NSW, Australia", 
              "University of Technology Sydney, Building 5, Sydney, Australia",
			  "Homebush Public School, Homebush, NSW, Australia"]		  

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
   <h4 v-if="count==0">{{desc[count]}}</h4>
   <img v-if="count==0" src="/acupy.jpg" alt="photo">
   <h4 v-if="count==1">	{{desc[count]}}</h4>
   <img v-if="count==1" src="/uts-bldg5.jpg" :alt="photo" >
   <h4 v-if="count==2">{{desc[count]}}</h4>
   <img v-if="count==2" src="/hps.jpg" :alt="photo">   
</div>
</template>





