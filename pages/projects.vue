<template>
  <main class="min-h-screen">
    <AppHeader class="mb-12" title="Certifications" :description="description" />
    <div v-if="certifications && certifications.length" class="space-y-4">
      <AppCertificationCard
        v-for="(certification, id) in certifications"
        :key="id"
        :certification="certification"
      />
    </div>
    <div v-else class="py-8 text-center">
      <p class="text-gray-600 dark:text-gray-400">
        Certifications will be displayed here soon.
      </p>
    </div>
  </main>
</template>

<script setup>
const description =
  "Here are some of the certifications I have earned over the years, showcasing my expertise and dedication in various fields. Feel free to explore and learn more about my achievements.";

useSeoMeta({
  title: "Certifications | Yash Karale",
  description,
});

// Add proper error handling to the content query
const { data: certifications } = await useAsyncData("certifications-all", async () => {
  try {
    return await queryContent("/certification").find();
  } catch (error) {
    console.error("Error fetching certifications:", error);
    return []; // Return empty array as fallback
  }
});
</script>