<script setup lang="ts">
const experiences = [
  {
    role: 'Backend Developer',
    company: 'Sai Ashirwad Informatia',
    period: 'Jan 2025 - Oct 2025',
    description: [
      'Built a multi-tenant project management platform using Laravel & Filament for internal teams and clients to organize and track projects.',
      'Improved analytics dashboards to make project progress clearer and more actionable for both admins and clients.',
      'Deployed scalable backend services using PostgreSQL, AWS, and R2 for reliable data storage and performance.',
      'Optimized backend performance and database queries, enhancing overall speed and scalability.',
      'Collaborated with React and Node.js teams to deliver multiple client-facing projects with seamless API integration.'
    ]
  },
  {
    role: 'Freelance Web Developer',
    company: 'Web2AppandBeyond and 3DPrintech',
    period: 'Freelance',
    description: [
      'Built and deployed two full-stack websites using React.js, Vue.js.',
      'Developed responsive UIs with SEO best practices and smooth performance across devices.',
      'Integrated CMS and admin dashboards for efficient content and product management.',
      'Delivered secure, scalable, and production-ready solutions.',
      'Live Projects: web2appandbeyond.com, 3d-printtech.in'
    ]
  }
]
</script>

<template>
  <section id="experience" class="py-20 bg-slate-50 font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 mb-16 text-center">
        <span class="text-accent">function</span> <span class="text-purple-600">getExperience</span>()
      </h2>
      
      <div class="space-y-8 max-w-4xl mx-auto">
        <div v-for="(exp, index) in experiences" :key="index" class="bg-white rounded-lg border border-slate-200 p-6 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden group">
          <!-- Tech decoration -->
          <div class="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg class="w-16 h-16 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-start mb-4">
            <div>
                <h3 class="text-xl font-bold text-accent">{{ exp.role }}</h3>
                <p class="text-slate-700 font-semibold">@ {{ exp.company }}</p>
            </div>
            <span class="px-3 py-1 bg-slate-100 text-slate-600 text-xs rounded-full border border-slate-200 mt-2 sm:mt-0">
                {{ exp.period }}
            </span>
          </div>
          
          <div class="space-y-2">
             <div v-for="(item, i) in exp.description" :key="i" class="flex items-start gap-2 text-sm text-slate-600">
                <span class="text-accent mt-1">>></span>
                <p>{{ item }}</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
