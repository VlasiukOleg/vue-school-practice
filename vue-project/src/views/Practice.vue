<template>
  <div class="wrap">
    <q-input v-model="text" type="number" label="Введіть значення для лічильника" outlined="" />
    <p>Текст інпуту: {{ text }}</p>
    <counter :increase-value="Number(text)" />
    <p>Позиція мишки: {{ x }}, {{ y }}</p>
    <div class="text-center">
      <main-button label="Show transition" color="primary" @click="show = !show" />
    </div>
    <Transition><div v-if="show">Opacity</div></Transition>
    <div class="text-center q-pa-lg">
      <main-button label="OpenModal" color="primary" @click="isModalOpen = !isModalOpen" />
    </div>
    <Teleport to="body"
      ><modal :is-modal-open="isModalOpen" @close-modal="isModalOpen = !isModalOpen"
    /></Teleport>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import Counter from '../components/Counter.vue'
import MainButton from '../components/MainButton.vue'
import Modal from '../components/Modal.vue'

import { useMouse } from '../composables/useMousePosition.js'

const text = ref('')
const show = ref(false)
const isModalOpen = ref(false)

const { x, y } = useMouse()
</script>
<style>
.wrap {
  max-width: 480px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  transform: translateX(-500px);
  transform: scale(1.5);
}
</style>
