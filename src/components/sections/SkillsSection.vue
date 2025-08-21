<template>
  <section class="skills-section">
    <h2>Skills</h2>
    <ul>
      <li>Vue.js &amp; JavaScript</li>
      <li>HTML5 &amp; CSS3</li>
      <li>SCSS &amp; Responsive Design</li>
      <li>Git &amp; Version Control</li>
      <li>REST APIs</li>
      <li>UI/UX Principles</li>
    </ul>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.skills-section {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.skills-section h2 {
  margin-bottom: 1rem;
}
.skills-section ul {
  list-style: none;
  padding: 0;
}
.skills-section li {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}
.skills-section li:before {
  content: '✔';
  position: absolute;
  left: 0;
  color: #42b983;
}
</style>
