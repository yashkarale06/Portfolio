<template>
  <div 
    ref="container" 
    class="flex items-center justify-center h-48 transition-colors duration-500" 
    :style="{ backgroundColor: bgColor }"
  >
    <div class="w-16 h-16 bg-black rounded-full animate-bounce"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const bgColor = ref('#3498db'); // initial background color
const container = ref(null);

// Function to change the background color on every bounce
const changeColor = () => {
  bgColor.value = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

onMounted(() => {
  if (container.value) {
    container.value.addEventListener('animationiteration', changeColor);
  }
});
</script>
