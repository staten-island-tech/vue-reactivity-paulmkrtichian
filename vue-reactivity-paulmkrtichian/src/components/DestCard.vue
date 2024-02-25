<template>
  <div>
    <h1>{{ props.Destination.model }}</h1>
    <h1>{{ props.Destination.description }}</h1>
    <h1>{{ props.Destination.startingprice }}</h1>
    <img :src="props.Destination.img" alt="" />
    <h2>{{ clicked }}</h2>
    <button @click="addToCart"> Add to Cart</button>

  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const props = defineProps(["Destination"]);
const emits = defineEmits();

const clicked = ref(0);

function addToCart() {
  clicked.value++;
  emits("addToCart", props.Destination);
}
</script>

<style scoped>
img {
  width: 450px;
  height: 300px;
  object-fit: cover;
}
</style>
