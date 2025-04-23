<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Lab" :description="description" />
    <div class="space-y-24">
      <div v-if="labContent && labContent.length">
        <div v-for="item in labContent" :key="item._path">
          <!-- Use a conditional rendering to avoid errors -->
          <template v-if="item">
            <!-- Simplified content rendering approach -->
            <div class="mb-16">
              <h2 class="text-xl font-semibold mb-4">{{ item.title || 'Experiment' }}</h2>
              <ContentRenderer :value="item" />
            </div>
          </template>
        </div>
      </div>
      <div v-else class="text-center py-8">
        <p>No lab experiments available at the moment.</p>
        <p class="text-sm text-gray-500 mt-2">Check back soon for new UI experiments!</p>
      </div>
    </div>
  </main>
</template>

<script setup>
const description = "Some random experiments with UI I do in my free time.";
useSeoMeta({
  title: "Lab | Yash Karale",
  description,
});

// Fetch lab content with error handling
const { data: labContent } = await useAsyncData("lab-content", async () => {
  try {
    return await queryContent("/lab").find();
  } catch (error) {
    console.error("Error fetching lab content:", error);
    return []; // Return empty array as fallback
  }
});
</script>