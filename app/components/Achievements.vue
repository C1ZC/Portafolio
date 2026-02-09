<template>
  <section class="w-full px-4 md:px-10 py-16 mx-auto relative overflow-hidden" id="achievements">
    <!-- Victory beams -->
    <div class="beam-light left-[10%] opacity-10"></div>
    <div class="beam-light left-[30%] opacity-5 animation-delay-1000"></div>
    <div class="beam-light left-[60%] opacity-10 animation-delay-2000"></div>
    <div class="beam-light left-[90%] opacity-5 animation-delay-500"></div>
    
    <div class="max-w-[960px] mx-auto">
      <h2 class="text-white text-2xl font-bold mb-8 flex items-center gap-3">
        <span class="material-symbols-outlined text-yellow-400 text-3xl">emoji_events</span>
        ACHIEVEMENTS UNLOCKED
      </h2>
      
      <div class="grid gap-4">
        <div v-for="(item, index) in paginatedAchievements" :key="item.title">
          <!-- Achievement Card -->
          <div 
            class="flex items-center gap-4 bg-background-dark p-4 rounded-xl border border-border-green relative overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(13,242,89,0.1)] cursor-pointer"
            :class="{ 'border-primary': expandedIndex === (currentPage * itemsPerPage + index) }"
            @click="toggleCertificate(currentPage * itemsPerPage + index)"
          >
            <div class="absolute left-0 top-0 bottom-0 w-1 group-hover:w-2 transition-all duration-300" :class="item.accent"></div>
            <div class="size-12 rounded-full bg-border-green flex items-center justify-center shrink-0 group-hover:neon-glow transition-all">
              <span class="material-symbols-outlined group-hover:animate-pulse" :class="item.iconColor" aria-hidden="true">{{ item.icon }}</span>
            </div>
            <div class="flex-1">
              <h4 class="text-white font-bold text-lg group-hover:text-primary transition-colors glitch-text">{{ item.title }}</h4>
              <p class="text-slate-400 text-sm italic">{{ item.info }}</p>
            </div>
            <div class="hidden md:block text-xs font-mono text-muted-green bg-border-green px-2 py-1 rounded border border-transparent group-hover:border-primary/30 transition-colors">
              {{ item.rarity }}
            </div>
            <!-- Expand Icon -->
            <div v-if="item.certificate" class="ml-2">
              <span class="material-symbols-outlined text-primary transition-transform duration-300" :class="{ 'rotate-180': expandedIndex === (currentPage * itemsPerPage + index) }">
                expand_more
              </span>
            </div>
          </div>
          
          <!-- Expanded Certificate Preview -->
          <div 
            v-show="item.certificate && expandedIndex === (currentPage * itemsPerPage + index)"
            class="certificate-preview mt-2 bg-surface-dark rounded-xl border border-primary p-4"
          >
            <div class="flex items-center justify-between mb-3">
              <h5 class="text-white font-bold">Vista Previa del Certificado</h5>
              <a 
                :href="item.certificate" 
                target="_blank"
                class="text-xs text-primary hover:text-emerald-400 flex items-center gap-1 transition-colors"
                @click.stop
              >
                <span class="material-symbols-outlined text-sm">open_in_new</span>
                Abrir en nueva pestaña
              </a>
            </div>
            <div class="bg-background-dark rounded-lg overflow-hidden border border-border-green">
              <!-- PDF Viewer for PDF files -->
              <iframe 
                v-if="item.certificate?.endsWith('.pdf')"
                :src="item.certificate"
                class="w-full h-[600px]"
                frameborder="0"
              ></iframe>
              <!-- Image viewer for PNG/JPG files -->
              <img 
                v-else
                :src="item.certificate" 
                :alt="item.title"
                class="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex items-center justify-center gap-6 mt-10">
        <button 
          @click="prevPage"
          :disabled="currentPage === 0"
          class="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none group"
        >
          <span class="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
          <span class="text-xs font-bold tracking-widest uppercase">BACK</span>
        </button>

        <div class="flex items-center gap-2">
          <span class="text-xs font-mono text-slate-500">PAGE</span>
          <span class="text-lg font-black text-white font-mono tracking-tighter">{{ currentPage + 1 }}</span>
          <span class="text-xs font-mono text-slate-500">/ {{ totalPages }}</span>
        </div>

        <button 
          @click="nextPage"
          :disabled="currentPage >= totalPages - 1"
          class="flex items-center gap-2 px-4 py-2 border border-primary/30 text-primary rounded-lg hover:bg-primary/10 transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none group"
        >
          <span class="text-xs font-bold tracking-widest uppercase">NEXT</span>
          <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Achievement } from '~/types/portfolio'

const expandedIndex = ref<number | null>(null)
const currentPage = ref(0)
const itemsPerPage = 3

const achievements: Achievement[] = [
  {
    title: 'Título Profesional - Documento Oficial',
    info: 'Instituto Profesional AIEP • Diciembre 2024',
    icon: 'military_tech',
    rarity: 'LEGENDARY',
    accent: 'bg-yellow-500',
    iconColor: 'text-yellow-400',
    certificate: '/images/certificate/TÍTULO - Camilo Ignacio Zavala Cornejo - 18341656-1 - 14-12-2025.pdf'
  },
  {
    title: 'Certificado de Título Profesional',
    info: 'Instituto Profesional AIEP • Documento Oficial',
    icon: 'workspace_premium',
    rarity: 'LEGENDARY',
    accent: 'bg-yellow-500',
    iconColor: 'text-yellow-400',
    certificate: '/images/certificate/CERTIFICADO DE TÍTULO Camilo Ignacio Zavala Cornejo - 18341656-1.pdf'
  },
  {
    title: 'Diploma en Programación Avanzada',
    info: 'Instituto Profesional IACC • 2024',
    icon: 'terminal',
    rarity: 'EPIC',
    accent: 'bg-purple-500',
    iconColor: 'text-purple-400',
    certificate: '/images/certificate/DIPLOMA EN PROGRAMACIÓN AVANZADA -1.png'
  },
  {
    title: 'Diploma en Desarrollo Web',
    info: 'Instituto Profesional IACC • 2024',
    icon: 'code',
    rarity: 'EPIC',
    accent: 'bg-purple-500',
    iconColor: 'text-purple-400',
    certificate: '/images/certificate/DIPLOMA EN DESARROLLO WEB.png'
  },
  {
    title: 'Diploma en Fundamentos de Programación y Bases de Datos',
    info: 'Instituto Profesional IACC • 2024',
    icon: 'storage',
    rarity: 'RARE',
    accent: 'bg-blue-500',
    iconColor: 'text-blue-400',
    certificate: '/images/certificate/DIPLOMA EN FUNDAMENTOS DE PROGRAMACIÓN Y BASES DE DATOS -1.png'
  },
  {
    title: 'React y Spring Boot: App Full Stack',
    info: 'Udemy • Junio 2024',
    icon: 'code',
    rarity: 'RARE',
    accent: 'bg-primary',
    iconColor: 'text-primary',
    certificate: '/images/certificate/UC-165c323b-3602-4683-82fd-1e9559c6b039-1.png'
  },
  {
    title: 'Bases de GIT, GITHUB',
    info: 'Academia Desafío Latam • Junio 2024',
    icon: 'terminal',
    rarity: 'RARE',
    accent: 'bg-primary',
    iconColor: 'text-primary',
    certificate: '/images/certificate/Camilo Ignacio Zavala Cornejo - 2024-06-10-1.png'
  },
  {
    title: 'Taller - Figma',
    info: 'Academia Desafío Latam • Mayo 2024',
    icon: 'palette',
    rarity: 'RARE',
    accent: 'bg-primary',
    iconColor: 'text-primary',
    certificate: '/images/certificate/Camilo Ignacio Zavala Cornejo - 2024-05-27-1.png'
  },
  {
    title: 'Licencia de Educación Media - Técnico Profesional',
    info: 'Ministerio de Educación de Chile • Enseñanza Media',
    icon: 'school',
    rarity: 'RARE',
    accent: 'bg-slate-500',
    iconColor: 'text-slate-400',
    certificate: '/images/certificate/certificado tecnico nivel medio-1.png'
  }
]

const totalPages = computed(() => Math.ceil(achievements.length / itemsPerPage))

const paginatedAchievements = computed(() => {
  const start = currentPage.value * itemsPerPage
  return achievements.slice(start, start + itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value - 1) {
    currentPage.value++
    expandedIndex.value = null
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
    expandedIndex.value = null
  }
}

const toggleCertificate = (index: number) => {
  if (expandedIndex.value === index) {
    expandedIndex.value = null
  } else {
    expandedIndex.value = index
  }
}
</script>

<style scoped>
.certificate-preview {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
