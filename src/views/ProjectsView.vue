<template>
  <section class="projects-view">
    <h1>My Projects</h1>
    <p>
      Explore some of the work I've done recently. Each project showcases my skills and passion for
      web development.
    </p>
    <div class="project-list">
      <div class="project-card">
        <h2>Portfolio Website</h2>
        <p>A modern, responsive portfolio built with Vue.js and Vite.</p>
        <a href="https://your-portfolio-link.com" target="_blank">View Project</a>
      </div>
      <div class="project-card">
        <h2>Task Manager App</h2>
        <p>Task management app with authentication and real-time updates.</p>
        <a href="https://your-taskmanager-link.com" target="_blank">View Project</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.projects-view {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.projects-view h1 {
  margin-bottom: 1rem;
}
.project-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.project-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}
.project-card h2 {
  margin-top: 0;
}
.project-card a {
  color: #42b983;
  text-decoration: underline;
}
</style>
