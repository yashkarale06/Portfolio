<template>
  <section class="blog-view">
    <h1>Blog</h1>
    <p>Read my latest posts about web development, design, and more.</p>
    <div class="blog-list">
      <div class="blog-post">
        <h2>Getting Started with Vue.js</h2>
        <p>Learn the basics of Vue.js and how to build your first component-based web app.</p>
        <a href="#">Read More</a>
      </div>
      <div class="blog-post">
        <h2>Design Tips for Developers</h2>
        <p>
          Simple design principles to make your web projects look professional and user-friendly.
        </p>
        <a href="#">Read More</a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for static content
</script>

<style scoped>
.blog-view {
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
}
.blog-view h1 {
  margin-bottom: 1rem;
}
.blog-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.blog-post {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
}
.blog-post h2 {
  margin-top: 0;
}
.blog-post a {
  color: #42b983;
  text-decoration: underline;
}
</style>
