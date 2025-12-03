<script setup lang="ts">
const projects = [
  {
    title: 'Web2AppandBeyond',
    description: 'A full-stack website built with React.js and Vue.js. Features responsive UI, SEO optimization, and CMS integration.',
    tags: ['React', 'Vue.js', 'SEO', 'CMS'],
    link: 'https://web2appandbeyond.com',
    image: 'https://placehold.co/600x400/f8fafc/334155?text=Web2App'
  },
  {
    title: '3DPrintech',
    description: 'E-commerce and service platform for 3D printing. Includes product management and secure checkout flow.',
    tags: ['Vue.js', 'E-commerce', 'Responsive'],
    link: 'https://3d-printtech.in',
    image: 'https://placehold.co/600x400/f8fafc/334155?text=3DPrintech'
  }
]
</script>

<template>
  <section id="projects" class="py-20 bg-white font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">
        <span class="text-accent">./projects</span><span class="animate-pulse">_</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div v-for="(project, index) in projects" :key="index" class="bg-slate-50 rounded-lg border border-slate-200 overflow-hidden hover:border-accent transition-all duration-300 group shadow-sm hover:shadow-md">
          <div class="h-48 overflow-hidden relative border-b border-slate-200">
            <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100">
            <div class="absolute top-2 right-2 bg-slate-900/80 text-white text-xs px-2 py-1 rounded font-mono backdrop-blur-sm">
                v1.0.0
            </div>
          </div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
                <h3 class="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">{{ project.title }}</h3>
                <div class="flex gap-1">
                    <div class="w-2 h-2 rounded-full bg-red-400"></div>
                    <div class="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
            </div>
            
            <p class="text-slate-600 mb-4 text-sm line-clamp-3 leading-relaxed">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-white text-xs text-accent rounded border border-slate-200 font-semibold">
                {{ tag }}
              </span>
            </div>
            
            <a :href="project.link" target="_blank" class="w-full block text-center py-2 bg-white border border-slate-300 text-slate-700 font-bold rounded hover:bg-accent hover:text-white hover:border-accent transition-all text-sm uppercase tracking-wide">
              View Deployment
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
