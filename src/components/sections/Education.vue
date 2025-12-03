<script setup lang="ts">
</script>

<template>
  <section id="education" class="py-20 bg-slate-50 font-mono">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">
        <span class="text-purple-600">class</span> <span class="text-accent">Education</span> <span class="text-slate-500">{</span>
      </h2>
      <div class="max-w-3xl mx-auto">
        <div class="bg-white p-8 rounded-lg border border-slate-200 hover:border-accent transition-colors duration-300 shadow-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative overflow-hidden">
          <!-- Decoration -->
          <div class="absolute top-0 left-0 w-1 h-full bg-accent"></div>
          
          <div class="p-4 bg-slate-50 rounded border border-slate-200">
            <svg class="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div class="w-full">
            <div class="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-2">
                <h3 class="text-2xl font-bold text-slate-900">B.Sc In Data Science</h3>
                <span class="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded border border-green-200">COMPLETED</span>
            </div>
            <p class="text-lg text-accent mb-2">Thakur college of science and commerce</p>
            <div class="w-full bg-slate-100 rounded-full h-2.5 mb-1 mt-2 border border-slate-200">
                <div class="bg-accent h-2.5 rounded-full" style="width: 80%"></div>
            </div>
            <p class="text-slate-500 text-sm text-right">CGPA: 8.0/10</p>
          </div>
        </div>
        <div class="text-center mt-4 text-slate-500 text-lg">}</div>
      </div>
    </div>
  </section>
</template>
