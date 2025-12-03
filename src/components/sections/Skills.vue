<script setup lang="ts">
const skills = {
  'Programming': ['Python', 'JavaScript', 'TypeScript', 'PHP', 'R'],
  'Frameworks': ['Django', 'Flask', 'Laravel', 'Filament', 'Vue.js', 'React', 'Nuxt.js'],
  'Data_ML': ['PostgreSQL', 'MySQL', 'Power BI', 'Hadoop', 'Scikit-learn', 'Pandas', 'NumPy'],
  'Cloud_DevOps': ['AWS (EC2, S3, RDS)', 'Laravel Cloud', 'Cloudflare R2', 'Docker'],
  'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Cypress']
}
</script>

<template>
  <section id="skills" class="py-20 bg-white font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">
        <span class="text-accent">const</span> <span class="text-purple-600">techStack</span> = <span class="text-slate-500">{</span>
      </h2>
      
      <div class="max-w-4xl mx-auto bg-slate-50 rounded-lg border border-slate-200 p-6 shadow-sm overflow-hidden relative group hover:border-accent transition-colors duration-300">
        <!-- Window controls -->
        <div class="flex gap-2 mb-4 border-b border-slate-200 pb-4">
            <div class="w-3 h-3 rounded-full bg-red-400"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div class="w-3 h-3 rounded-full bg-green-400"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base">
            <div v-for="(items, category) in skills" :key="category" class="font-mono">
                <span class="text-purple-600">"{{ category }}"</span>: <span class="text-slate-500">[</span>
                <div class="pl-4 flex flex-wrap gap-1">
                    <span v-for="(skill, index) in items" :key="skill">
                        <span class="text-green-600">"{{ skill }}"</span><span v-if="index < items.length - 1" class="text-slate-500">,</span>
                    </span>
                </div>
                <span class="text-slate-500">],</span>
            </div>
        </div>
        <div class="mt-4 text-slate-500">}</div>
      </div>
    </div>
  </section>
</template>
