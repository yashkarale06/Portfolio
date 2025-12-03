<script setup lang="ts">
import { ref, onMounted } from 'vue'

const text = "Yash Karale"
const displayedText = ref("")
const isTyping = ref(true)

const typeText = async () => {
  for (let i = 0; i <= text.length; i++) {
    displayedText.value = text.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, 150))
  }
  isTyping.value = false
}

onMounted(() => {
  typeText()
})
</script>

<template>
  <section id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 font-mono">
    <!-- Background effects -->
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </div>

    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <div class="inline-block mb-6 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-accent text-sm font-semibold tracking-wide animate-fade-in-up">
        <span class="mr-2 text-slate-400">$</span> System.init("Backend_Pro")
      </div>
      
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight animate-fade-in-up animation-delay-200 min-h-[1.2em]">
        <span class="text-slate-400">&lt;</span>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-600">{{ displayedText }}</span>
        <span class="text-slate-400">/&gt;</span>
        <span class="animate-pulse text-accent ml-1" v-if="isTyping">_</span>
      </h1>
      
      <p class="mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-400 leading-relaxed">
        <span class="text-accent">const</span> <span class="text-purple-600">specialization</span> = [<span class="text-green-600">"Scalable APIs"</span>, <span class="text-green-600">"Data Pipelines"</span>, <span class="text-green-600">"Real-time Analytics"</span>];
      </p>
      
      <div class="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up animation-delay-600">
        <a href="#projects" class="group px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-accent transition-all transform hover:-translate-y-1 shadow-lg shadow-slate-900/20 hover:shadow-accent/30 flex items-center justify-center gap-2">
          <span>View Projects</span>
          <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        <a href="#contact" class="px-8 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-lg hover:border-accent hover:text-accent transition-all hover:bg-slate-50">
          Contact Me
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-200 {
  animation-delay: 0.2s;
}
.animation-delay-400 {
  animation-delay: 0.4s;
}
.animation-delay-600 {
  animation-delay: 0.6s;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-fade-in-up {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
