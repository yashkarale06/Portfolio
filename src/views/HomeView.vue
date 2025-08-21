<template>
  <div class="home-view">
    <!-- Hero Section -->
    <HeroSection />

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <div class="section-header">
          <h2>About Me</h2>
          <p>Get to know more about my background and expertise</p>
        </div>
        <AboutSection />
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <h2>Skills & Technologies</h2>
          <p>Technologies I work with to bring ideas to life</p>
        </div>
        <SkillsSection />
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Featured Projects</h2>
          <p>Some of my recent work and achievements</p>
        </div>
        <ProjectsSection />

        <div class="section-cta">
          <BaseButton variant="outline" size="large" @click="$router.push('/projects')">
            View All Projects
          </BaseButton>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <h2>Experience</h2>
          <p>My professional journey and accomplishments</p>
        </div>
        <ExperienceSection />
      </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="section section--alt">
      <div class="container">
        <div class="section-header">
          <h2>Blog</h2>
          <p>Read my latest posts about web development, design, and more.</p>
        </div>
        <BlogSection />
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header">
          <h2>Let's Work Together</h2>
          <p>Ready to bring your next project to life?</p>
        </div>
        <ContactSection />
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import BaseButton from '@/components/common/BaseButton.vue'
import BlogSection from '@/components/sections/BlogSection.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    AboutSection,
    SkillsSection,
    BlogSection,
    ProjectsSection,
    ExperienceSection,
    ContactSection,
    BaseButton,
  },
  setup() {
    onMounted(() => {
      // Add any initialization logic here
      console.log('Home view mounted')
    })
  },
}
</script>

<style lang="scss" scoped>
.home-view {
  width: 100%;
}

.section {
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  &--alt {
    background-color: var(--surface);
  }
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--text-primary);
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
}

.section-cta {
  margin-top: 3rem;
  text-align: center;
}

// Scroll margin for anchor links (accounts for fixed header)
#about,
#skills,
#projects,
#experience,
#contact {
  scroll-margin-top: 100px;
}
</style>
