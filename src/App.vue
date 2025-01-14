<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>    
   <Header msg="M Wong" />
   <div class="nav">
   <RouterLink to="/">Home</RouterLink> |
   <RouterLink to="/cv">CV</RouterLink> |
   <RouterLink to="/photos">Photos</RouterLink> |
   <RouterLink to="/privacy">Privacy</RouterLink>        
   </div>  

  <RouterView />
</template>

<style scoped>
.nav {
  background-color: FloralWhite;
  padding: 10px;
  text-align: left;
}
.nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}
.nav a.router-link-exact-active {
  color: blue;
} 
.nav a:hover {
  color: green;
}
</style>
