<template>
  <section class="hero-section">
    <!-- Simple Background -->
    <div class="hero-bg">
      <div class="gradient-orb gradient-orb--1"></div>
      <div class="gradient-orb gradient-orb--2"></div>
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <!-- Main Title -->
          <h1 class="hero-title">
            <span class="greeting">Hi, I'm Yash Karale</span>
            <span class="typing-line">
              <span class="typing-text">{{ displayText }}</span>
              <span class="cursor">|</span>
            </span>
          </h1>

          <!-- Updated Subtitle -->
          <p class="hero-subtitle">Backend Developer & Database Architect</p>

          <!-- Updated Description -->
          <p class="hero-description">
            I build robust server-side applications and scalable database solutions, specializing in
            real-time data management and secure backend architectures.
          </p>

          <!-- Action Buttons -->
          <div class="hero-actions">
            <BaseButton variant="primary" size="large" class="btn-glass" @click="scrollToProjects">
              View My Work
            </BaseButton>

            <BaseButton
              variant="outline"
              size="large"
              class="btn-outline-glass"
              @click="scrollToContact"
            >
              Get In Touch
            </BaseButton>
          </div>
        </div>

        <!-- Simple Visual Element -->
        <div class="hero-visual">
          <div class="glass-card">
            <div class="card-header">
              <div class="card-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <div class="card-content">
              <div class="avatar">
                <span>YK</span>
              </div>
              <div class="user-info">
                <div class="name">Yash Karale</div>
                <div class="role">Backend Developer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

export default {
  name: 'HeroSection',
  components: {
    BaseButton,
  },
  setup() {
    const displayText = ref('')
    const texts = [
      'I Design Beautiful Admin Panels',
      'I Build Scalable Backend Systems',
      'I Manage Live Database Solutions',
      'I Create Robust Server Applications',
    ]
    let textIndex = 0
    let charIndex = 0
    let isDeleting = false

    const typeText = () => {
      const currentText = texts[textIndex]

      if (isDeleting) {
        displayText.value = currentText.substring(0, charIndex - 1)
        charIndex--
      } else {
        displayText.value = currentText.substring(0, charIndex + 1)
        charIndex++
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2000)
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
      }

      const speed = isDeleting ? 50 : 100
      setTimeout(typeText, speed)
    }

    const scrollToProjects = () => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
    }

    const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    onMounted(() => {
      typeText()
    })

    return {
      displayText,
      scrollToProjects,
      scrollToContact,
    }
  },
}
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
  color: white;
  padding-top: 80px;
  overflow: hidden;
}

// Simple Background
.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;

  &--1 {
    width: 400px;
    height: 400px;
    background: linear-gradient(45deg, #ff6b6b, #feca57);
    top: -200px;
    right: -200px;
  }

  &--2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(45deg, #48cae4, #c77dff);
    bottom: -150px;
    left: -150px;
  }
}

// Content
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
}

// Typography
.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;

  .greeting {
    display: block;
    opacity: 0.9;
    margin-bottom: 0.5rem;
  }

  .typing-line {
    display: block;
  }

  .typing-text {
    background: linear-gradient(135deg, #ff6b6b, #feca57, #48cae4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradient-shift 3s ease-in-out infinite;
  }
}

@keyframes gradient-shift {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.cursor {
  color: #06ffa5;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  font-weight: 500;
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.8;
  max-width: 500px;

  @media (max-width: 768px) {
    margin: 0 auto 2.5rem;
  }
}

// Buttons
.hero-actions {
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
}

.btn-glass {
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.8), rgba(254, 202, 87, 0.8));
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
    background: linear-gradient(135deg, rgba(255, 107, 107, 0.9), rgba(254, 202, 87, 0.9));
  }
}

.btn-outline-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(6, 255, 165, 0.8);
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(6, 255, 165, 0.2);
  }
}

// Glass Card
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.glass-card {
  width: 300px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }
}

.card-header {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
}

.card-dots {
  display: flex;
  gap: 0.5rem;

  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &:nth-child(1) {
      background: #ff5f56;
    }
    &:nth-child(2) {
      background: #ffbd2e;
    }
    &:nth-child(3) {
      background: #27ca3f;
    }
  }
}

.card-content {
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.avatar {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
}

.user-info {
  .name {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .role {
    font-size: 0.875rem;
    opacity: 0.7;
  }
}

// Mobile adjustments
@media (max-width: 768px) {
  .hero-visual {
    order: -1;
  }

  .glass-card {
    width: 280px;
    height: 180px;
  }

  .card-content {
    padding: 1rem;
  }

  .avatar {
    width: 50px;
    height: 50px;
    font-size: 1rem;
  }
}
</style>
