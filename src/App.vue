<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MyHeader from './components/MyHeader.vue'
</script>

<template>
  <header>   
    <div class="wrapper">
      <MyHeader msg="M Wong" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/cv">CV</RouterLink>
        <RouterLink to="/photos">Photos</RouterLink>
        <RouterLink to="/privacy">Privacy</RouterLink>       
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: blue;
} 

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
}
</style>
