<template>
  <section class="experience-section">
    <h2>Experience</h2>
    <div class="job">
      <h3>Frontend Developer</h3>
      <span>ABC Tech | 2022 - Present</span>
      <p>
        Developed and maintained web applications using Vue.js, improved site performance, and
        collaborated with designers to deliver seamless user experiences.
      </p>
    </div>
    <div class="job">
      <h3>Web Designer</h3>
      <span>Freelance | 2020 - 2022</span>
      <p>
        Designed and built custom websites for small businesses, focusing on responsive layouts and
        modern aesthetics.
      </p>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.experience-section {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.experience-section h2 {
  margin-bottom: 1rem;
}
.job {
  margin-bottom: 1.5rem;
}
.job h3 {
  margin: 0 0 0.25rem 0;
}
.job span {
  display: block;
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 0.5rem;
}
</style>
