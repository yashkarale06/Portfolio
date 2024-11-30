<template>
  <div class="space-y-6">
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-4">
      EXPERIENCE
    </h2>
    <div class="space-y-5">
      <div v-for="(project, index) in experience" :key="index">
        <!-- Project Title -->
        <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {{ project.name }}
        </h3>

        <!-- Skills Used -->
        <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span class="font-medium">Skills Used:</span> {{ project.skills }}
        </div>

        <!-- Project Description -->
        <p class="text-gray-900 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    name: "Startup Website",
    skills: "JavaScript, Vue.js, Contentful",
    description:
      "I developed a website for a client's startup using JavaScript and Vue.js. The website was fully integrated with Contentful, providing dynamic content management for the client. This project allowed me to strengthen my skills in front-end development and CMS integration.",
  },
];
</script>
