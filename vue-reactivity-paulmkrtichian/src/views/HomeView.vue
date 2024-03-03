<script setup>
import DestCard from '../components/DestCard.vue'
</script>

<template>
  <h1>Shop Your Favorite BMW Models</h1>
  <div>
    <DestCard/>
  </div>
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

</style>