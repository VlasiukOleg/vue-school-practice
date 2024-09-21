<template>
  <div class="wrap">
    <q-input v-model="text" type="number" label="Введіть значення для лічильника" outlined="" />
    <p>Текст інпуту: {{ text }}</p>
    <counter :increase-value="Number(text)" />
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Counter from '../components/Counter.vue'

const text = ref('')
</script>
<style>
.wrap {
  max-width: 480px;
}
</style>
