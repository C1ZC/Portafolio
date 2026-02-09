<template>
  <div class="cursor-container pointer-events-none fixed inset-0 z-[9999] hidden md:block">
    <!-- Main cursor point -->
    <div 
      ref="cursorDot"
      class="fixed size-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out z-[100]"
      :style="{ left: `${x}px`, top: `${y}px` }"
    ></div>

    <!-- Outer targeting circle -->
    <div 
      ref="cursorOutline"
      class="fixed size-10 border border-primary/40 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out z-[90]"
      :class="{ 'scale-150 border-primary bg-primary/10': isHovering }"
      :style="{ 
        left: `${outlineX}px`, 
        top: `${outlineY}px`,
        boxShadow: isHovering ? '0 0 20px rgba(13, 242, 89, 0.4)' : 'none'
      }"
    >
      <!-- Crosshair lines -->
      <div class="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20" v-if="isHovering"></div>
      <div class="absolute left-1/2 top-0 w-[1px] h-full bg-primary/20" v-if="isHovering"></div>
    </div>

    <!-- Scanning label (optional flair) -->
    <div 
      v-if="isHovering"
      class="fixed ml-8 mt-4 text-[8px] font-mono text-primary uppercase tracking-tighter animate-pulse"
      :style="{ left: `${outlineX}px`, top: `${outlineY}px` }"
    >
      TARGET_LOCKED
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)
const outlineX = ref(0)
const outlineY = ref(0)
const isHovering = ref(false)

const updateMouse = (e: MouseEvent) => {
  x.value = e.clientX
  y.value = e.clientY
  
  // Outer circle follows with slight lag
  requestAnimationFrame(() => {
    outlineX.value = x.value
    outlineY.value = y.value
  })
}

const handleHoverStart = () => { isHovering.value = true }
const handleHoverEnd = () => { isHovering.value = false }

onMounted(() => {
  window.addEventListener('mousemove', updateMouse)
  
  // Add listeners to all interactive elements
  const addListeners = () => {
    const interactives = document.querySelectorAll('button, a, .group, input, textarea')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', handleHoverStart)
      el.addEventListener('mouseleave', handleHoverEnd)
    })
  }

  addListeners()
  
  // Re-run if DOM changes (simplified)
  const observer = new MutationObserver(addListeners)
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse)
})
</script>

<style scoped>
.cursor-container {
  mix-blend-mode: normal;
}
</style>
