<template>
  <div class="flex flex-col items-left">
    <!-- "MY SKILLS" title outside of the skill box -->
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      MY SKILLS
    </h2>
    <!-- Skills box -->
    <div class="p-6 border border-gray-300 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 shadow-sm w-full max-w-3xl">
      <!-- Skills grid inside the box -->
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="flex flex-col items-center text-center group"
        >
          <Icon :name="skill.icon" class="w-10 h-10 text-gray-600 dark:text-gray-300"></Icon>
          <span class="text-sm font-medium mt-2">
            {{ skill.name }}
          </span>
          <span class="text-xs text-gray-500 mt-1">
            {{ skill.level }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const skills = [
  {
    name: "Python",
    level: "Advanced",
    icon: "mdi:language-python",
  },
  {
    name: "JavaScript",
    level: "Advanced",
    icon: "mdi:language-javascript",
  },
  {
    name: "Machine Learning",
    level: "Intermediate",
    icon: "mdi:robot",
  },
  {
    name: "SQL",
    level: "Advanced",
    icon: "mdi:database",
  },
  {
    name: "Vue.js",
    level: "Intermediate",
    icon: "mdi:vuejs",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    icon: "mdi:language-typescript",
  },
  {
    name: "Power BI",
    level: "Intermediate",
    icon: "mdi:chart-bar",
  },
  {
    name: "Data Visualization",
    level: "Advanced",
    icon: "mdi:chart-pie",
  },
  {
  name: "Node.js",
  level: "Intermediate",
  icon: "mdi:nodejs",
},
{
  name: "Git",
  level: "Intermediate",
  icon: "mdi:git",
},
{
  name: "HTML",
  level: "Intermediate",
  icon: "mdi:language-html5",
},
{
  name: "Cypress",
  level: "Intermediate",
  icon: "mdi:bug",
},
];
</script>
