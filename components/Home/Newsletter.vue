<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        CONTACT ME
      </h2>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      Interested in collaborating or hiring me? Click below to send me an email!
    </p>
    <div class="flex justify-center mt-6">
      <UButton 
        label="Hire Me &rarr;" 
        size="lg" 
        color="black" 
        @click="openEmailClient"
      />
    </div>
  </div>
</template>

<script setup>
const openEmailClient = () => {
  const email = "yashkarale06@gmail.com";
  const subject = "Interested in Hiring";
  window.location.href = `mailto:${email}?subject=${subject}`;
};
</script>
