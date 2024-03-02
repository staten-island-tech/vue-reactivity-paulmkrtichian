<template>
  <div class="cart-container">
        <div v-for="item in CartSelection.cart" :key="item.model" class="cart-item">
     <h2> {{ item.model}}</h2>
      <h2>{{item.startingprice}}</h2>
      <img :src= "item.img">
        </div>   
      </div>
</template>

<script setup>
  import {  CartStore } from '@/stores/store';
  const CartSelection = CartStore()
  
</script>

<style lang="scss" scoped>

.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.cart-item {
  width: 500px; 
  margin-top: 30px;
  margin-bottom: 10px; 
  border: 5px solid blue;
}

.cart-item img {
  width: 450px;
    height: 300px;
    margin-top: 10px;
}
</style>