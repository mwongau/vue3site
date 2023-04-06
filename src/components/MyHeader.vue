<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="titles">
    <h1>{{msg}}</h1>
    <h3> My personal site </h3>
  </div>
</template>

<style scoped>
.titles {
  	background: url("./images/sky1.jpg");
	background-repeat: no-repeat;  
	background-size: cover;	
	padding: 3px;
	color: purple; 
}

h1 {
  font-size: 2.6rem;
  font-weight: bold;
}

h3 {
  font-size: 1.2rem;
}

.titles h1,
.titles h3 {
  text-align: left;
}
</style>
