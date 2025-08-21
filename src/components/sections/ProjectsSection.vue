<template>
  <section class="projects-section">
    <h2>Projects</h2>
    <div class="project">
      <h3>Portfolio Website</h3>
      <p>
        A modern, responsive portfolio built with Vue.js and Vite. Showcases my skills, experience,
        and projects.
      </p>
      <a href="https://your-portfolio-link.com" target="_blank">View Project</a>
    </div>
    <div class="project">
      <h3>Task Manager App</h3>
      <p>
        A simple task management app with user authentication and real-time updates, built using Vue
        and Firebase.
      </p>
      <a href="https://your-taskmanager-link.com" target="_blank">View Project</a>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.projects-section {
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.projects-section h2 {
  margin-bottom: 1rem;
}
.project {
  margin-bottom: 1.5rem;
}
.project h3 {
  margin: 0 0 0.25rem 0;
}
.project a {
  color: #42b983;
  text-decoration: underline;
}
</style>
