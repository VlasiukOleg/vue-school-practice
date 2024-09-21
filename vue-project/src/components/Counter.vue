<template>
  <div class="row justify-between items-center">
    <main-button
      color="secondary"
      :label="`Зменьшити на ${increaseValue} `"
      @click="increaseCount(increaseValue)"
    />
    <div>Counter: {{ counter }}</div>
    <main-button
      color="secondary"
      :label="`Збільшити на ${increaseValue}`"
      @click="increaseCount(increaseValue)"
    />
  </div>
  <div class="q-mt-md flex justify-center">
    <main-button label="Скинути" @click="resetCount" color="primary" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

import MainButton from './MainButton.vue'

const counter = ref(0)

const increaseCount = (value) => {
  counter.value += value
}

const resetCount = () => {
  counter.value = 0
}

defineProps({
  increaseValue: { type: Number, default: 1 }
})
</script>
<style></style>
