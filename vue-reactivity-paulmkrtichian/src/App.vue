<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" id="bmwlogo">
    <div class="wrapper">
      <nav>

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Cart</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

#bmwlogo {
    width: 450px;
    height: 450px;
    height: auto;
    margin: 0 auto; 
    display: block; 
  }
</style>