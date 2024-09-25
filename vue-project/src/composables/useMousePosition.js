import { ref, onMounted, onUnmounted } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const updatePositionMouse = (event) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => {
    document.addEventListener('mousemove', updatePositionMouse)
  }),
    onUnmounted(() => {
      document.removeEventListener('mousemove', updatePositionMouse)
    })

  return { x, y }
}
