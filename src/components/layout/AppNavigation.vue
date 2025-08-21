<template>
  <nav class="app-navigation">
    <ul>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#blog">Blog</a></li>
    </ul>
  </nav>
</template>

<script setup>
// No script needed for static navigation
</script>

<style scoped>
.app-navigation {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
}
.app-navigation ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.app-navigation a {
  color: #42b983;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.2s;
}
.app-navigation a:hover {
  color: #2c3e50;
}
</style>
