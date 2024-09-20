<template>
  <div class="wrap">
    <q-input v-model="text" type="text" label="Label" outlined="" />
    <p>Текст інпуту: {{ text }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>
<style>
.wrap {
  max-width: 400px;
}
</style>
