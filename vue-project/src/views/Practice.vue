<template>
  <div class="wrap">
    <q-input v-model="text" type="number" label="Введіть значення для лічильника" outlined="" />
    <p>Текст інпуту: {{ text }}</p>
    <counter :increase-value="Number(text)" />
    <p>Позиція мишки: {{ x }}, {{ y }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Counter from '../components/Counter.vue'

import { useMouse } from '../composables/useMousePosition.js'

const text = ref('')

const { x, y } = useMouse()
</script>
<style>
.wrap {
  max-width: 480px;
}
</style>
