<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="titles">
    <h1>{{props.msg}}</h1>
    <h3> My personal site </h3>
  </div>
</template>

<style scoped>
.titles {
  	background-color: AliceBlue;
	padding: 3px;
	color: purple; 
}

h1 {
  font-weight: bold;
}

.titles h1,
.titles h3 {
  text-align: left;
}
</style>
