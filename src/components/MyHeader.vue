<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1>{{msg}}</h1>
    <h3> My personal site </h3>
  </div>
</template>

<style scoped>
.greetings {
  color: purple;
  background-color : AliceBlue;
  padding : 3px;  
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: left;
}
</style>
