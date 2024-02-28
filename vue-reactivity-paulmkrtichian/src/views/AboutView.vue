<template>
        <div v-for="item in CartSelection.cart" :key="item.model">
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
item.img{
  border: 10px solid red;
    width: 450px;
    height: 300px;
}

</style>