<template>
  <div :style="{ backgroundColor: bgColor }" class="h-48 flex items-center justify-center transition-colors duration-700 ease-in-out">
    <button @click="changeColor" class="px-8 py-4 bg-white text-black rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
      Change Color
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const bgColor = ref('#3498db');

const changeColor = () => {
  bgColor.value = `#${Math.floor(Math.random()*16777215).toString(16)}`;
};
</script>
