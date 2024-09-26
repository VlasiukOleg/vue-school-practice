<template>
  <div v-if="isModalOpen" class="modal">
    <p>Modal</p>
    <q-btn color="primary" icon="close" label="close" @click="$emit('close-modal')" />
  </div>
</template>
<script setup>
defineProps({
  isModalOpen: {
    type: Boolean
  }
})

defineEmits(['close-modal'])
</script>
<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;

  background-color: bisque;
  border: 1px solid black;
  border-radius: 5px;
  padding: 30px;
  text-align: center;
}
</style>
