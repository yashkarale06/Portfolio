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
    name: "Dynamic Website Development",
    skills: "JavaScript, Vue.js, Contentful",
    description:
      "I designed a dynamic website using JavaScript and Vue.js, seamlessly integrated with Contentful for efficient content management. This project involved creating an interactive and responsive interface while enabling the client to manage content dynamically. It enhanced my expertise in front-end development and CMS integration."
   },
];
</script>
