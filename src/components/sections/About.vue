<script setup lang="ts">
import { ref } from 'vue'
import profileImage from '../../assets/profile.jpg'

const isModalOpen = ref(false)

const openModal = () => {
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const downloadImage = () => {
  const link = document.createElement('a')
  link.href = profileImage
  link.download = 'Yash_Karale_Resume_Image.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <section id="about" class="py-20 bg-white relative overflow-hidden font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        <!-- Profile Image with Tech Frame -->
        <div class="w-full md:w-1/3 flex justify-center">
            <div class="relative w-64 h-64 group cursor-pointer" @click="openModal">
                <div class="absolute inset-0 border-2 border-accent rounded-lg transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div class="absolute inset-0 border-2 border-purple-500 rounded-lg transform -translate-x-4 -translate-y-4 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
                <div class="relative w-full h-full rounded-lg overflow-hidden border-2 border-slate-900 bg-slate-100">
                    <img :src="profileImage" alt="Yash Karale" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500">
                    <!-- Scanline effect -->
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 animate-scan"></div>
                    
                    <!-- Overlay hint -->
                    <div class="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span class="text-white font-bold text-sm tracking-widest uppercase">View Image</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full md:w-2/3 text-center md:text-left">
            <h2 class="text-3xl font-bold text-slate-900 mb-8 relative inline-block">
            <span class="text-purple-600">about</span>.<span class="text-accent">me</span>
            </h2>
            <p class="text-lg text-slate-600 leading-relaxed mb-6">
            I am a results-driven backend and data professional with hands-on experience in <span class="text-accent font-bold">Python</span>, <span class="text-accent font-bold">Laravel</span>, and <span class="text-accent font-bold">AWS</span>. I specialize in building scalable APIs, intelligent data pipelines, and real-time analytics systems.
            </p>
            <p class="text-lg text-slate-600 leading-relaxed">
            Passionate about transforming complex data into actionable insights and delivering high-performance, production-grade applications that drive measurable impact.
            </p>
        </div>
      </div>
    </div>

    <!-- Image Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4" @click.self="closeModal">
        <div class="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center">
            <button class="absolute -top-12 right-0 text-white hover:text-accent transition-colors" @click="closeModal">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <img :src="profileImage" alt="Yash Karale Full" class="max-w-full max-h-[80vh] rounded-lg shadow-2xl border-2 border-accent">
            
            <button @click="downloadImage" class="mt-6 px-6 py-3 bg-accent text-white font-bold rounded hover:bg-accent-hover transition-colors flex items-center gap-2 shadow-lg">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Image
            </button>
        </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes scan {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
}
.animate-scan {
    animation: scan 2s linear infinite;
}
</style>
