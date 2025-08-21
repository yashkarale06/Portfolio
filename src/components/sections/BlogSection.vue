<template>
  <section class="blog-section">
    <h2>Blog</h2>
    <p>
      Welcome to my blog! Here I share insights, tutorials, and stories about web development and
      design.
    </p>
    <div class="blog-list">
      <div class="blog-post">
        <h3>Getting Started with Vue.js</h3>
        <p>Learn the basics of Vue.js and how to build your first component-based web app.</p>
        <a href="#">Read More</a>
      </div>
      <div class="blog-post">
        <h3>Design Tips for Developers</h3>
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
.blog-section {
  padding: 2rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.blog-section h2 {
  margin-bottom: 1rem;
}
.blog-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.blog-post {
  background: #f9f9f9;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.blog-post h3 {
  margin-top: 0;
}
.blog-post a {
  color: #42b983;
  text-decoration: underline;
}
</style>
