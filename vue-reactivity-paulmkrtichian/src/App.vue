<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <h1> Shop Your Favorite BMW Models!</h1>
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
@keyframes test{
  0%{

background-color: blue;
  }
  10%{
    
    background-color: red;
  
  }
  20%{
    
    background-color: green;
  }
  30%{
    
    background-color: yellow;
  }
  40%{
    background-color: fuchsia;
  }
}
h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
  animation: test 4s;
  animation-iteration-count: infinite;
}
#bmwlogo {
    width: 450px;
    height: 450px;
    height: auto;
    margin: 0 auto; 
    display: block; 
  }
</style>