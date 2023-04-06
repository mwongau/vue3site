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
  	background-color: AliceBlue;
	padding: 3px;
	color: orange; 
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
