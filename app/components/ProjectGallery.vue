<template>
  <section class="w-full relative overflow-hidden py-24 bg-deep-dark" id="projects">
    <!-- Digital Scanning Background -->
    <div class="scanning-matrix opacity-30"></div>
    <div class="scanning-line"></div>
    
    <!-- Centered Header -->
    <div class="max-w-[1400px] mx-auto px-4 relative z-20">
      <div class="flex flex-col items-center mb-10 text-center">
        <span class="text-primary font-bold tracking-[0.3em] text-xs mb-4 uppercase animate-pulse">Select a Mission</span>
        <h2 class="text-white text-5xl md:text-6xl font-black uppercase tracking-tighter italic">Level Select</h2>
        <div class="w-32 h-1 bg-primary mt-4 glow-line"></div>
      </div>
    </div>

    <!-- Carousel Container (Full Width Stage) -->
    <div class="relative w-full z-10">
      <!-- Navigation Buttons -->
      <div class="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-20 pointer-events-none z-30">
        <button 
          @click="prevSlide"
          class="pointer-events-auto p-3 bg-deep-dark/80 border border-primary text-primary rounded-full hover:bg-primary hover:text-deep-dark transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-[0_0_15px_rgba(13,242,89,0.3)]"
          :disabled="currentIndex === 0"
        >
          <span class="material-symbols-outlined text-3xl">chevron_left</span>
        </button>

        <button 
          @click="nextSlide"
          class="pointer-events-auto p-3 bg-deep-dark/80 border border-primary text-primary rounded-full hover:bg-primary hover:text-deep-dark transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none shadow-[0_0_15px_rgba(13,242,89,0.3)]"
          :disabled="currentIndex >= projects.length - 1"
        >
          <span class="material-symbols-outlined text-3xl">chevron_right</span>
        </button>
      </div>

      <!-- Cards Wrapper -->
      <div class="overflow-visible py-16">
        <div 
          class="flex gap-8 transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1)"
          :style="{ transform: `translateX(calc(-${currentIndex * (cardWidth + gap)}px + ${offset}px))` }"
        >
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="project.title" 
            :project="project"
            :is-active="index === currentIndex"
            :is-carousel-mode="true"
          />
        </div>
      </div>
    </div>

    <!-- Pagination Indicators -->
    <div class="flex justify-center items-center gap-4 mt-4 relative z-20">
      <div 
        v-for="(_, index) in projects" 
        :key="'dot-' + index"
        @click="currentIndex = index"
        class="cursor-pointer group flex flex-col items-center gap-1"
      >
        <span class="text-[10px] font-mono transition-colors" :class="index === currentIndex ? 'text-primary' : 'text-slate-600'">
          1-{{ index + 1 }}
        </span>
        <div 
          class="h-1 transition-all duration-300 rounded-full"
          :class="index === currentIndex ? 'w-8 bg-primary shadow-[0_0_10px_theme(\'colors.primary\')]' : 'w-2 bg-slate-700 group-hover:bg-slate-500'"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Project } from '~/types/portfolio'

const currentIndex = ref(2)
const cardWidth = ref(380)
const gap = 32
const offset = ref(0)

const updateDimensions = () => {
  if (typeof window !== 'undefined') {
    cardWidth.value = window.innerWidth < 768 ? 300 : 380
    // Perfectly center the active card: (viewport_width / 2) - (card_width / 2)
    offset.value = (window.innerWidth / 2) - (cardWidth.value / 2)
  }
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
})

const nextSlide = () => {
  if (currentIndex.value < projects.value.length - 1) {
    currentIndex.value++
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const projects = ref<Project[]>([
  {
    title: "Pokémon App con Django y SQL Server (local)",
    description: "Aplicación web para gestionar tu colección Pokémon usando la PokeAPI. Incluye login, filtros, vistas responsivas con Bootstrap 5 y persistencia en SQL Server. Totalmente funcional con autenticación, paginación y diseño adaptable.",
    image: "/images/projects/project-img12.jpg", 
    repoUrl: "https://github.com/C1ZC/web_project",
    appUrl: "https://web-project-newl.onrender.com/",
    badge: "Champion Stage",
    badgeClass: "text-primary border-primary/30",
    tags: ['Python', 'Django', 'SQL Server', 'Bootstrap 5', 'PokeAPI']
  },
  {
    title: "Chat Assistente",
    description: "Este es un proyecto chat assitente de token ChatGPT, con login y registro clasico, mas login y registro google conectado a un callback con supabase, base de datos usada en supabase, frontend es vue.js y el backend en python",
    image: "/images/projects/project-img9.png",
    repoUrl: "https://youtu.be/H8E6JcF-_5U",
    appUrl: "https://youtu.be/S4m0CCRt2tA",
    badge: "AI Challenge",
    badgeClass: "text-purple-400 border-purple-400/30",
    tags: ['Python', 'CSS', 'JavaScript','Vue,js','Supabase']
  },
  {
    title: "Lexia Demo",
    description: "Participe Full Stack en este proyecto Lexia para un cliente, ya creado como base, se adaptó para su empresa Lenguajes usados son Python en back-end, Vue.js en front-end.",
    image: "/images/projects/project-img8.png",
    repoUrl: "https://youtu.be/-4qU89dSH2A",
    appUrl: "https://youtu.be/FkuQClc1e5M",
    badge: "Full Stack",
    badgeClass: "text-yellow-400 border-yellow-400/30",
    tags: ['Python', 'CSS', 'JavaScript','Vue,js','PostgreSql']
  },
  {
    title: "Extractor de Datos de Clientes PDF",
    description: "Aplicación de escritorio para extraer datos de clientes desde facturas PDF y guardarlos en Excel. Desarrollada en Python con PyQt5, pdfplumber y openpyxl. Permite procesar múltiples archivos, corrige formatos de RUT y teléfono, y evita duplicados.",
    image: "/images/projects/project-img10.png",
    repoUrl: "https://github.com/C1ZC/lector_facturas",
    appUrl: "https://www.youtube.com/watch?v=6_T9MchPnqY",
    badge: "Data Extract",
    badgeClass: "text-emerald-400 border-emerald-400/30",
    tags: ['Python', 'PyQt5', 'pdfplumber', 'openpyxl', 'Automatización', 'Excel']
  },
  {
    title: "WhatsApp Mensajería desde Excel",
    description: "Aplicación de escritorio para envío masivo de mensajes de WhatsApp a contactos importados desde archivos Excel. Permite filtrar destinatarios, personalizar mensajes y llevar historial de envíos. Desarrollada en Python con PyQt y SQLite.",
    image: "/images/projects/project-img11.png",
    repoUrl: "https://github.com/C1ZC/lector_cartola_envia_wsp",
    appUrl: "",
    badge: "Automation",
    badgeClass: "text-orange-400 border-orange-400/30",
    tags: ['Python', 'PyQt5', 'SQLite', 'Pandas', 'Excel', 'pywhatkit']
  },
  {
    title: "Aplicacion Web RRHH",
    description: "Pequeña aplicacion web para gestionar recursos humanos, crearda en React, Spring Boot y MySQL como base de datos, desplegada en Railway",
    image: "/images/projects/project-img1.png",
    repoUrl: "https://github.com/C1ZC/rrss",
    appUrl: "https://rrss-production.up.railway.app/",
    badge: "Railway Deploy",
    badgeClass: "text-blue-400 border-blue-400/30",
    tags: ['React', 'CSS', 'JavaScript','Bootstrap','Spring Boot','MySQL','Railway']
  },
  {
    title: "Aplicacion Web Automotora",
    description: "Pequeña aplicacion web para gestionar una automotora, crearda en PHP y MySQL como base de datos, desplegada en Cpanel de Hostinger",
    image: "/images/projects/project-img2.png",
    repoUrl: "https://github.com/C1ZC/Automotora",
    appUrl: "https://camilozavala.com/Automotora/",
    badge: "Legacy App",
    badgeClass: "text-slate-400 border-slate-400/30",
    tags: ['HTML', 'CSS', 'JavaScript','PHP','MySQL','Materialize','Cpanel']
  },
  {
    title: "Login API Google",
    description: "Pequeña web hecha en PHP verion 8.3 con API OAuth 2.0 de login de Google, creada en PHP desplegada en Cpanel de Hostinger",
    image: "/images/projects/project-img3.png",
    repoUrl: "https://github.com/C1ZC/Login-API-Google",
    appUrl: "https://camilozavala.com/Login-API-Google",
    badge: "OAuth 2.0",
    badgeClass: "text-red-400 border-red-400/30",
    tags: ['HTML', 'CSS','JavaScript', 'PHP','Bootstrap','Cpanel','Google API OAuth 2.0']
  },
  {
    title: "Camilo Zavala HERPM13051 S9",
    description: "Aplicación Android desarrollada en Kotlin, la aplicación permite registrar, eliminar y listar desde una API de productos. Además, utiliza SQLite para el almacenamiento persistente de datos, muestra un grafico con los 5 productos más vendidos.",
    image: "/images/projects/project-img7.png",
    repoUrl: "https://github.com/C1ZC/camilo_zavala_herpm13051_s9",
    appUrl: "https://youtu.be/sz3H5cJS4yE",
    badge: "Android App",
    badgeClass: "text-green-500 border-green-500/30",
    tags: ['Kotlin', 'Android Studio','Java','SQLite','API']
  },
  {
    title: "Camilo Zavala HERPM13051 S7",
    description: "Aplicación Android desarrollada en Kotlin, la aplicación permite funcionalidades como obtención de días feriados desde una API pública, visualización de los datos en forma de lista, una pantalla de bienvenida (SplashScreen), y un sistema de autenticación que almacena las preferencias del usuario para mantener la sesión iniciada. Además, ofrece la opción de cerrar sesión con un solo clic.",
    image: "/images/projects/project-img6.png",
    repoUrl: "https://github.com/C1ZC/camilo_zavala_HERPM13051_s7",
    appUrl: "https://youtu.be/NxfkyU2xynw",
    badge: "Mobile Auth",
    badgeClass: "text-pink-400 border-pink-400/30",
    tags: ['Kotlin', 'Android Studio','Java','API','ScreenSplash']
  }
])
</script>

<style scoped>
.glow-line {
  box-shadow: 0 0 15px theme('colors.primary');
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}
</style>
