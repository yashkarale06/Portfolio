<template>
  <div>
    <h2 class="uppercase text-xs font-semibold text-gray-400 mb-6">
      FEATURED PROJECTS
    </h2>
    <div v-if="projects && projects.length" class="space-y-4">
      <AppProjectCard
        v-for="(project, id) in projects"
        :key="id"
        :project="project"
      />
    </div>
    <div v-else class="text-center py-4 text-sm text-gray-500">
      Projects will appear here soon
    </div>
    <div class="flex items-center justify-center mt-6 text-sm">
      <UButton
        label="All Projects &rarr;"
        to="/projects"
        variant="link"
        color="gray"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Add proper error handling to the content query
const { data: projects } = await useAsyncData("projects-home", async () => {
  try {
    return await queryContent("/projects").limit(3).find();
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return []; // Return empty array as fallback
  }
});
</script>