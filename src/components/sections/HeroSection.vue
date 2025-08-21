<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">
            <span class="typing-text">{{ displayText }}</span>
            <span class="cursor">|</span>
          </h1>
          <p class="hero-subtitle">Full Stack Developer & UI/UX Designer</p>
          <p class="hero-description">
            I create beautiful, responsive web applications with modern technologies and clean,
            user-friendly designs.
          </p>
          <div class="hero-actions">
            <BaseButton variant="primary" size="large" @click="scrollToProjects">
              View My Work
            </BaseButton>
            <BaseButton variant="outline" size="large" @click="scrollToContact">
              Get In Touch
            </BaseButton>
          </div>
        </div>
        <div class="hero-image">
          <!-- <img src="@/assets/images/profile.jpg" alt="Profile" /> -->
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
    const texts = ["Hello, I'm John Doe", 'I Build Amazing Apps', "Let's Create Together"]
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding-top: 80px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  min-height: 4.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.cursor {
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
}

.hero-description {
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.8;
}

.hero-actions {
  display: flex;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

.hero-image {
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 50%;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
}
</style>
