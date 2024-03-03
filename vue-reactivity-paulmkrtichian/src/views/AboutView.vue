<template>
  <h1> CART</h1>
  <div class="cart-container">
        <div v-for="addedcar in CartSelection.cart" :key="addedcar.model" class="cart-object">
     <h2> {{ addedcar.model}}</h2>
      <h2>{{addedcar.startingprice}}</h2>
      <img :src= "addedcar.img">
      <button @click="removeFromCart(addedcar)">Remove from Cart</button>
        </div>   
      </div>
</template>

<script setup>
  import {  CartStore } from '@/stores/store';
  const CartSelection = CartStore()
  const removeFromCart = (addedcar) => {
// Function for the Remove Button
  const index = CartSelection.cart.indexOf(addedcar);
  if (index !== -1) {
    CartSelection.cart.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
h1 {
  color: white;
  text-align: center;
  margin-bottom: 20px;
}
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: 10px;
}
.cart-object {
  width: 500px; 
  margin-top: 30px;
  margin-bottom: 10px; 
  border: 5px solid blue;
}

.cart-object img {
  width: 450px;
    height: 300px;
    margin-top: 10px;
}
</style>