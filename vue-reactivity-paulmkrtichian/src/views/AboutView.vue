<template>
        <div v-for="item in CartSelection.cart" :key="item.model" class="cart-item">
     <h2> {{ item.model}}</h2>
      <h2>{{item.startingprice}}</h2>
      <img :src= "item.img">
        </div>   
</template>

<script setup>
  import {  CartStore } from '@/stores/store';
  const CartSelection = CartStore()
</script>

<style lang="scss" scoped>
.cart-item {
  border: 1px solid #ddd; /* Add border for visual separation */
  padding: 10px; /* Add padding for better spacing */
  margin-top: 30px;
  margin-bottom: 10px; /* Add margin between cart items */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-item img {
  max-width: 50%; /* Make sure the image doesn't exceed its container */
  margin-top: 10px; /* Add some space between the image and text */
}
</style>