<template>
  <div class="relative w-180 h-6 bg-gray-300 rounded-lg">
    <div :style="{ width: progress + '%'}" class="h-full bg-blue-600 rounded-lg transition-all"></div>
  </div>
  <button @click="startProgress" class="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-200">Start Progress</button>
</template>

<script setup>
import { ref } from 'vue';

const progress = ref(0);

const startProgress = () => {
  let i = 0;
  const interval = setInterval(() => {
    progress.value = i;
    i++;
    if (i > 100) clearInterval(interval);
  }, 50);
};
</script>
