<script setup lang="ts">
import Navbar from './components/layout/Navbar.vue'
import Hero from './components/sections/Hero.vue'
import About from './components/sections/About.vue'
import Experience from './components/sections/Experience.vue'
import Projects from './components/sections/Projects.vue'
import Skills from './components/sections/Skills.vue'
import Education from './components/sections/Education.vue'
import Contact from './components/sections/Contact.vue'
import { onMounted } from 'vue'

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('section').forEach((section) => {
    section.classList.add('reveal-on-scroll')
    observer.observe(section)
  })
})
</script>

<template>
  <div class="min-h-screen bg-primary text-slate-600 font-sans selection:bg-accent selection:text-white scroll-smooth">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <!-- Other sections will go here -->
    </main>
  </div>
</template>

<style>
.reveal-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}
.reveal-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
