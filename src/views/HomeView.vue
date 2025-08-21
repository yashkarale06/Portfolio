<template>
  <div class="home-view">
    <!-- Parallax Background Elements -->
    <div class="parallax-bg">
      <div class="parallax-element parallax-element--1"></div>
      <div class="parallax-element parallax-element--2"></div>
      <div class="parallax-element parallax-element--3"></div>
      <div class="parallax-element parallax-element--4"></div>
    </div>

    <!-- Hero Section with Parallax -->
    <div class="hero-wrapper" ref="heroRef">
      <HeroSection />
      <div class="scroll-indicator">
        <div class="scroll-arrow"></div>
      </div>
    </div>

    <!-- About Section - Slide from Left -->
    <section id="about" class="section section--elevated section--slide-left" ref="aboutRef">
      <div class="container">
        <div class="section-content">
          <div class="section-body scroll-reveal scroll-reveal--right">
            <AboutSection />
          </div>
        </div>
      </div>
      <div class="section-decoration section-decoration--left"></div>
    </section>

    <!-- Skills Section - Just the component, no header -->
    <section id="skills" class="section section--dark section--slide-right" ref="skillsRef">
      <div class="container">
        <div class="section-content">
          <div class="section-body scroll-reveal scroll-reveal--left">
            <SkillsSection />
          </div>
        </div>
      </div>
      <div class="section-bg-pattern"></div>
      <div class="section-decoration section-decoration--right"></div>
    </section>

    <!-- Featured Projects Section - Scale + Rotate from Center -->
    <section
      id="projects"
      class="section section--gradient section--scale-rotate"
      ref="projectsRef"
    >
      <div class="container">
        <div class="section-content">
          <div class="section-header scroll-reveal scroll-reveal--zoom">
            <span class="section-number">03</span>
            <h2>Featured Projects</h2>
            <p>Some of my recent work and achievements</p>
          </div>
          <div class="section-body scroll-reveal scroll-reveal--scale scroll-reveal--delay">
            <ProjectsSection />
          </div>
        </div>
      </div>
      <div class="floating-shapes">
        <div class="shape shape--1 scroll-reveal scroll-reveal--fade-left"></div>
        <div class="shape shape--2 scroll-reveal scroll-reveal--fade-right"></div>
      </div>
    </section>

    <!-- Experience Section - Slide from Bottom -->
    <section
      id="experience"
      class="section section--elevated section--slide-bottom"
      ref="experienceRef"
    >
      <div class="container">
        <div class="section-content">
          <div class="section-header scroll-reveal scroll-reveal--up">
            <span class="section-number">04</span>
            <h2>Experience</h2>
            <p>My professional journey and accomplishments</p>
          </div>
          <div class="section-body scroll-reveal scroll-reveal--up scroll-reveal--delay">
            <ExperienceSection />
          </div>
        </div>
      </div>
      <div class="section-decoration section-decoration--bottom"></div>
    </section>

    <!-- Blog Section - Diagonal Slide -->
    <section id="blog" class="section section--pattern section--diagonal" ref="blogRef">
      <div class="container">
        <div class="section-content">
          <div class="section-header scroll-reveal scroll-reveal--diagonal-left">
            <span class="section-number">05</span>
            <h2>Blog</h2>
            <p>Read my latest posts about web development, design, and more.</p>
          </div>
          <div
            class="section-body scroll-reveal scroll-reveal--diagonal-right scroll-reveal--delay"
          >
            <BlogSection />
          </div>
        </div>
      </div>
      <div class="diagonal-elements">
        <div class="diagonal-line diagonal-line--1 scroll-reveal scroll-reveal--slide-right"></div>
        <div class="diagonal-line diagonal-line--2 scroll-reveal scroll-reveal--slide-left"></div>
      </div>
    </section>

    <!-- Contact Section - Radial Expand -->
    <section id="contact" class="section section--final section--radial" ref="contactRef">
      <div class="container">
        <div class="section-content">
          <div class="section-header scroll-reveal scroll-reveal--zoom-out">
            <span class="section-number">06</span>
            <h2>Let's Work Together</h2>
            <p>Ready to bring your next project to life?</p>
          </div>
          <div class="section-body scroll-reveal scroll-reveal--zoom-in scroll-reveal--delay">
            <ContactSection />
          </div>
        </div>
      </div>
      <div class="section-overlay"></div>
      <div class="radial-decoration scroll-reveal scroll-reveal--radial"></div>
    </section>
  </div>
</template>

<script>
import { onMounted, onUnmounted, ref } from 'vue'
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
    const heroRef = ref(null)
    const aboutRef = ref(null)
    const skillsRef = ref(null)
    const projectsRef = ref(null)
    const experienceRef = ref(null)
    const blogRef = ref(null)
    const contactRef = ref(null)

    let ticking = false
    let scrollElements = []

    // Custom scroll reveal system with improved viewport detection
    const initScrollReveal = () => {
      scrollElements = document.querySelectorAll('.scroll-reveal')
    }

    const updateScrollAnimations = () => {
      const scrolled = window.pageYOffset
      const windowHeight = window.innerHeight

      scrollElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementTop = rect.top + scrolled
        const elementHeight = element.offsetHeight
        const elementBottom = elementTop + elementHeight

        // Enhanced viewport detection
        // Element is considered "in view" when at least 30% is visible
        const triggerPoint = windowHeight * 0.7 // Trigger when element is 70% from top of viewport
        const isVisible = rect.top < triggerPoint && rect.bottom > windowHeight * 0.3

        // Calculate progress differently for better control
        // When element is properly in view (not just touching viewport)
        let progress = 0
        if (isVisible) {
          // Calculate how much of the element is in the "active" zone
          const activeZoneTop = windowHeight * 0.2
          const activeZoneBottom = windowHeight * 0.8
          const activeZoneHeight = activeZoneBottom - activeZoneTop

          const elementInActiveZone =
            Math.min(activeZoneBottom, rect.bottom) - Math.max(activeZoneTop, rect.top)
          progress = Math.max(0, Math.min(1, elementInActiveZone / (elementHeight * 0.5)))
        }

        // Apply delays for staggered animations
        let adjustedProgress = progress
        if (element.classList.contains('scroll-reveal--delay')) {
          adjustedProgress = Math.max(0, progress - 0.2) * 1.25
        }
        if (element.classList.contains('scroll-reveal--delay-long')) {
          adjustedProgress = Math.max(0, progress - 0.4) * 1.67
        }

        // Apply animations based on class with smoother transitions
        if (element.classList.contains('scroll-reveal--right')) {
          const translateX = isVisible ? (1 - adjustedProgress) * -80 : -80
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--left')) {
          const translateX = isVisible ? (1 - adjustedProgress) * 80 : 80
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--up')) {
          const translateY = isVisible ? (1 - adjustedProgress) * 40 : 40
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translateY(${translateY}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--zoom')) {
          const scale = isVisible ? 0.85 + adjustedProgress * 0.15 : 0.85
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `scale(${scale})`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--scale')) {
          const scale = isVisible ? 0.95 + adjustedProgress * 0.05 : 0.95
          const opacity = isVisible ? Math.min(adjustedProgress * 1.3, 1) : 0
          element.style.transform = `scale(${scale})`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--flip')) {
          const rotateX = isVisible ? (1 - adjustedProgress) * -60 : -60
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `perspective(1000px) rotateX(${rotateX}deg)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--diagonal-left')) {
          const translateX = isVisible ? (1 - adjustedProgress) * -60 : -60
          const translateY = isVisible ? (1 - adjustedProgress) * 30 : 30
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translate(${translateX}px, ${translateY}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--diagonal-right')) {
          const translateX = isVisible ? (1 - adjustedProgress) * 60 : 60
          const translateY = isVisible ? (1 - adjustedProgress) * -30 : -30
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translate(${translateX}px, ${translateY}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--zoom-out')) {
          const scale = isVisible ? 1.15 - adjustedProgress * 0.15 : 1.15
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `scale(${scale})`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--zoom-in')) {
          const scale = isVisible ? 0.85 + adjustedProgress * 0.15 : 0.85
          const translateY = isVisible ? (1 - adjustedProgress) * 20 : 20
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `scale(${scale}) translateY(${translateY}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--fade-left')) {
          const translateX = isVisible ? (1 - adjustedProgress) * -40 : -40
          const opacity = isVisible ? Math.min(adjustedProgress * 1.3, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--fade-right')) {
          const translateX = isVisible ? (1 - adjustedProgress) * 40 : 40
          const opacity = isVisible ? Math.min(adjustedProgress * 1.3, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--slide-right')) {
          const translateX = isVisible ? (1 - adjustedProgress) * -80 : -80
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--slide-left')) {
          const translateX = isVisible ? (1 - adjustedProgress) * 80 : 80
          const opacity = isVisible ? Math.min(adjustedProgress * 1.5, 1) : 0
          element.style.transform = `translateX(${translateX}px)`
          element.style.opacity = opacity
        } else if (element.classList.contains('scroll-reveal--radial')) {
          const scale = isVisible ? 0.7 + adjustedProgress * 0.3 : 0.7
          const opacity = isVisible ? Math.min(adjustedProgress * 1.3, 1) : 0
          element.style.transform = `translate(-50%, -50%) scale(${scale})`
          element.style.opacity = opacity
        }
      })
    }

    const updateParallax = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset
          const parallaxElements = document.querySelectorAll('.parallax-element')

          parallaxElements.forEach((element, index) => {
            const rate = scrolled * -0.3 * (index + 1)
            const horizontal = Math.sin(scrolled * 0.001 + index) * 20
            element.style.transform = `translate3d(${horizontal}px, ${rate}px, 0) rotate(${scrolled * 0.05 + index * 45}deg)`
          })

          // Hero parallax effect
          if (heroRef.value) {
            const heroOffset = scrolled * 0.5
            const heroRotation = scrolled * 0.02
            heroRef.value.style.transform = `translate3d(0, ${heroOffset}px, 0) rotateX(${heroRotation}deg)`
          }

          // Update scroll animations
          updateScrollAnimations()

          ticking = false
        })
        ticking = true
      }
    }

    const handleScroll = () => {
      updateParallax()
    }

    onMounted(() => {
      // Initialize custom scroll reveal
      setTimeout(() => {
        initScrollReveal()
        // Initial animation state
        updateScrollAnimations()
      }, 100)

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true })

      console.log('Enhanced home view mounted with improved viewport detection')
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      heroRef,
      aboutRef,
      skillsRef,
      projectsRef,
      experienceRef,
      blogRef,
      contactRef,
    }
  },
}
</script>

<style lang="scss" scoped>
.home-view {
  width: 100%;
  position: relative;
  overflow-x: hidden;
}

// Scroll reveal base styles with improved transitions
.scroll-reveal {
  transition:
    opacity 0.2s ease-out,
    transform 0.2s ease-out;
  will-change: transform, opacity;

  // Add delays for staggered animations
  &.scroll-reveal--delay {
    // Handled in JavaScript with offset calculations
  }

  &.scroll-reveal--delay-long {
    // Handled in JavaScript with offset calculations
  }
}

// Enhanced parallax background
.parallax-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  pointer-events: none;
}

.parallax-element {
  position: absolute;
  border-radius: 50%;
  opacity: 0.04;
  will-change: transform;

  &--1 {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    top: 20%;
    right: -150px;
  }

  &--2 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, var(--secondary), var(--accent));
    top: 60%;
    left: -100px;
  }

  &--3 {
    width: 400px;
    height: 400px;
    background: linear-gradient(135deg, var(--accent), var(--primary));
    top: 80%;
    right: -200px;
  }

  &--4 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    top: 40%;
    left: 50%;
  }
}

// Hero wrapper
.hero-wrapper {
  position: relative;
  will-change: transform;
  transform-style: preserve-3d;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  z-index: 10;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: var(--primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: -3px;
    width: 8px;
    height: 8px;
    border-right: 2px solid var(--primary);
    border-bottom: 2px solid var(--primary);
    transform: rotate(45deg);
  }
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

// Section styles
.section {
  padding: 8rem 0;
  position: relative;

  @media (max-width: 1024px) {
    padding: 6rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  .section-content {
    position: relative;
    z-index: 2;
  }

  &--elevated {
    background: var(--background);
    box-shadow: 0 -20px 40px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 2;
  }

  &--dark {
    background: linear-gradient(135deg, var(--surface), var(--surface-variant));
    color: var(--text-primary);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 70% 30%,
        rgba(var(--primary-rgb), 0.15) 0%,
        transparent 50%
      );
      pointer-events: none;
    }
  }

  &--gradient {
    background: linear-gradient(
      135deg,
      var(--background) 0%,
      var(--surface) 50%,
      var(--background) 100%
    );
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background:
        radial-gradient(circle at 80% 20%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%),
        radial-gradient(circle at 20% 80%, rgba(var(--secondary-rgb), 0.1) 0%, transparent 50%);
      pointer-events: none;
    }
  }

  &--pattern {
    background: var(--surface);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        radial-gradient(circle at 25% 25%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(var(--secondary-rgb), 0.05) 0%, transparent 50%);
      background-size: 60px 60px;
      pointer-events: none;
    }
  }

  &--final {
    background: linear-gradient(
      180deg,
      var(--background) 0%,
      var(--surface) 50%,
      var(--surface-variant) 100%
    );
    position: relative;
    padding-bottom: 10rem;
    overflow: hidden;

    @media (max-width: 768px) {
      padding-bottom: 6rem;
    }
  }
}

// Section decorations
.section-decoration {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  opacity: 0.05;
  pointer-events: none;

  &--left {
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    animation: float-left 6s ease-in-out infinite;
  }

  &--right {
    right: -100px;
    top: 50%;
    transform: translateY(-50%);
    background: linear-gradient(135deg, var(--secondary), var(--accent));
    animation: float-right 6s ease-in-out infinite;
  }

  &--bottom {
    bottom: -100px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, var(--accent), var(--primary));
    animation: float-bottom 6s ease-in-out infinite;
  }
}

@keyframes float-left {
  0%,
  100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(20px);
  }
}

@keyframes float-right {
  0%,
  100% {
    transform: translateY(-50%) translateX(0);
  }
  50% {
    transform: translateY(-50%) translateX(-20px);
  }
}

@keyframes float-bottom {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-20px);
  }
}

// Floating shapes
.floating-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.shape {
  position: absolute;
  border-radius: 20px;
  opacity: 0.1;

  &--1 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, var(--primary), var(--secondary));
    top: 20%;
    right: 10%;
    animation: rotate-shape 10s linear infinite;
  }

  &--2 {
    width: 150px;
    height: 80px;
    background: linear-gradient(45deg, var(--accent), var(--primary));
    bottom: 30%;
    left: 5%;
    animation: rotate-shape 12s linear infinite reverse;
  }
}

@keyframes rotate-shape {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

// Diagonal elements
.diagonal-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}

.diagonal-line {
  position: absolute;
  width: 200px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);

  &--1 {
    top: 30%;
    right: 10%;
    transform: rotate(45deg);
  }

  &--2 {
    bottom: 30%;
    left: 10%;
    transform: rotate(-45deg);
  }
}

// Radial decoration
.radial-decoration {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border: 2px solid rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border: 2px solid rgba(var(--primary-rgb), 0.05);
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    width: 200px;
    height: 200px;
  }

  &::after {
    width: 100px;
    height: 100px;
  }
}

// Section headers
.section-header {
  text-align: center;
  margin-bottom: 5rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  .section-number {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--primary);
    background: rgba(var(--primary-rgb), 0.1);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    border: 2px solid rgba(var(--primary-rgb), 0.2);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(var(--primary-rgb), 0.3);
    }
  }

  h2 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, var(--primary), var(--secondary));
      border-radius: 2px;
    }
  }

  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}

// Background patterns
.section-bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='53' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  pointer-events: none;
  animation: drift 20s ease-in-out infinite;
}

@keyframes drift {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  25% {
    transform: translateX(10px) translateY(-5px);
  }
  50% {
    transform: translateX(-5px) translateY(10px);
  }
  75% {
    transform: translateX(-10px) translateY(-10px);
  }
}

.section-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to bottom, transparent, var(--surface-variant));
  pointer-events: none;
}

// Smooth scroll
html {
  scroll-behavior: smooth;
}

#about,
#skills,
#projects,
#experience,
#blog,
#contact {
  scroll-margin-top: 120px;
}

// Performance optimizations
* {
  will-change: auto;
}

.parallax-element,
.hero-wrapper,
.scroll-reveal {
  will-change: transform, opacity;
}

// Custom scrollbar
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, var(--primary), var(--secondary));
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, var(--secondary), var(--primary));
}

// Mobile optimizations
@media (max-width: 768px) {
  .parallax-element {
    display: none;
  }

  .section-decoration,
  .floating-shapes,
  .diagonal-elements {
    display: none;
  }

  // Reduce scroll reveal effects on mobile for performance
  .scroll-reveal {
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
