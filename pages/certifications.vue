<template>
    <main class="min-h-screen">
      <AppHeader class="mb-12" title="Certifications" :description="description" />
      <div class="space-y-4">
        <AppCertificationCard
          v-for="(certification, id) in certifications"
          :key="id"
          :certification="certification"
        />
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
  
  const { data: certifications } = await useAsyncData("certifications-all", () =>
  queryContent("/certification").find()
);
</script>
  