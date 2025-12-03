<script setup lang="ts">
import { ref } from 'vue'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="fixed w-full z-50 bg-white/90 backdrop-blur-sm border-b border-slate-200 shadow-sm">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5 text-xl font-bold text-accent font-mono tracking-tighter hover:text-purple-600 transition-colors">
          ~/yash
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-accent" @click="mobileMenuOpen = !mobileMenuOpen">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="text-sm font-semibold leading-6 text-slate-600 hover:text-accent transition-colors duration-300">
          {{ item.name }}
        </a>
      </div>
    </nav>
    <!-- Mobile menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 z-50 bg-primary px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 shadow-xl">
        <div class="flex items-center justify-between">
             <a href="#" class="-m-1.5 p-1.5 text-xl font-bold text-accent font-mono tracking-tighter">~/yash</a>
             <button type="button" class="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-accent" @click="mobileMenuOpen = false">
                <span class="sr-only">Close menu</span>
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
             </button>
        </div>
        <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-slate-500/10">
                <div class="space-y-2 py-6">
                     <a v-for="item in navigation" :key="item.name" :href="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-700 hover:bg-slate-50 hover:text-accent transition-colors" @click="mobileMenuOpen = false">
                        {{ item.name }}
                     </a>
                </div>
            </div>
        </div>
    </div>
  </header>
</template>
