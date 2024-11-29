<template>
    <NuxtLink
      class="flex items-end gap-4 group p-2 -m-2 rounded-lg"
      :to="certification.url"
      target="_blank"
      external
    >
      <div class="max-w-sm">
        <h3 class="text-sm font-medium group-hover:text-primary-600">
          {{ certification.title }}
        </h3>
        <p class="text-gray-400 text-sm">
          {{ certification.organization }} - {{ certification.date }}
        </p>
      </div>
      <div
        class="flex-1 border-b border-dashed border-gray-300 dark:border-gray-800 group-hover:border-gray-700"
      ></div>
    </NuxtLink>
  </template>
  
  <script setup>
  defineProps({
    certification: {
      type: Object,
      required: true,
    },
  });
  </script>
  