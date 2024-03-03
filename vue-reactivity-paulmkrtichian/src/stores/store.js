import { ref } from 'vue'
import { defineStore } from 'pinia'

export const CartStore = defineStore('cart', () => {
  const cart = ref([])

  function addtocart(addedcar) {
    cart.value.push(addedcar)
  }
  return { cart, addtocart }
})