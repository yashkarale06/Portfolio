<script setup lang="ts">
</script>

<template>
  <section id="contact" class="py-20 bg-white relative overflow-hidden font-mono">
    <!-- Background decoration -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <h2 class="text-3xl font-bold text-slate-900 mb-12 text-center">
        <span class="text-accent">sudo</span> <span class="text-purple-600">connect</span> <span class="text-slate-500">--user="yash"</span>
      </h2>
      
      <div class="max-w-3xl mx-auto text-center">
        <div class="bg-slate-900 text-slate-300 p-6 rounded-lg shadow-xl text-left mb-10 font-mono text-sm sm:text-base border border-slate-700">
            <div class="flex gap-2 mb-4 border-b border-slate-700 pb-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <p><span class="text-green-400">user@portfolio</span>:<span class="text-blue-400">~</span>$ echo "Open to opportunities?"</p>
            <p class="mb-4">"Yes! Whether you have a question or just want to say hi, I'll try my best to get back to you!"</p>
            <p><span class="text-green-400">user@portfolio</span>:<span class="text-blue-400">~</span>$ <span class="animate-pulse">_</span></p>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6 mb-12">
          <a href="mailto:yashkarale06@gmail.com" class="flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 rounded border border-slate-200 hover:border-accent hover:bg-white transition-all group shadow-sm hover:shadow-md">
            <svg class="w-6 h-6 text-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span class="text-slate-700 font-medium group-hover:text-accent transition-colors">yashkarale06@gmail.com</span>
          </a>
          
          <a href="tel:7058696201" class="flex items-center justify-center gap-3 px-6 py-4 bg-slate-50 rounded border border-slate-200 hover:border-accent hover:bg-white transition-all group shadow-sm hover:shadow-md">
            <svg class="w-6 h-6 text-accent group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="text-slate-700 font-medium group-hover:text-accent transition-colors">7058696201</span>
          </a>
        </div>

        <div class="flex justify-center gap-8">
          <a href="https://github.com/yashkarale06" target="_blank" class="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110">
            <span class="sr-only">GitHub</span>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/yash-karale-44527722a/" target="_blank" class="text-slate-400 hover:text-slate-900 transition-colors transform hover:scale-110">
            <span class="sr-only">LinkedIn</span>
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <footer class="mt-20 text-center text-slate-400 text-sm border-t border-slate-200 pt-8">
        <p>&copy; {{ new Date().getFullYear() }} Yash Karale. All rights reserved.</p>
      </footer>
    </div>
  </section>
</template>
