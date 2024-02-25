<template>
  <div class="about">
    <h1> SHOPPING CART</h1>
    <ul>
      <li v-for="model in selectedModels" :key="model.model">
        {{ model.model }} , {{ model.startingprice }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import state from "@/stores/store";

const selectedModels = state.selectedModels;
</script>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>