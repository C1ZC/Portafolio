import { ref, onMounted, onUnmounted } from 'vue'

export const useTilt = (targetRef: any, options = { max: 15, perspective: 1000 }) => {
  const tiltStyle = ref('')

  const handleMouseMove = (e: MouseEvent) => {
    if (!targetRef.value) return

    const el = targetRef.value
    const rect = el.getBoundingClientRect()
    
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateX = ((y - centerY) / centerY) * -options.max
    const rotateY = ((x - centerX) / centerX) * options.max
    
    tiltStyle.value = `perspective(${options.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
  }

  const handleMouseLeave = () => {
    tiltStyle.value = `perspective(${options.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
  }

  onMounted(() => {
    if (targetRef.value) {
      targetRef.value.addEventListener('mousemove', handleMouseMove)
      targetRef.value.addEventListener('mouseleave', handleMouseLeave)
      targetRef.value.style.transition = 'transform 0.1s ease-out'
    }
  })

  onUnmounted(() => {
    if (targetRef.value) {
      targetRef.value.removeEventListener('mousemove', handleMouseMove)
      targetRef.value.removeEventListener('mouseleave', handleMouseLeave)
    }
  })

  return { tiltStyle }
}
