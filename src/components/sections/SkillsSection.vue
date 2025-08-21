<template>
  <section class="skills-section">
    <!-- Section Header with Gradient Text -->
    <div class="section-header">
      <h2 class="gradient-title">Skills & Technologies</h2>
      <p>Technologies I work with to bring ideas to life</p>
    </div>

    <!-- Skills Marquee -->
    <div class="skills-marquee-wrapper">
      <!-- Background decorations -->
      <div class="bg-decoration">
        <div class="bg-circle bg-circle--1"></div>
        <div class="bg-circle bg-circle--2"></div>
        <div class="bg-circle bg-circle--3"></div>
        <div class="bg-pattern"></div>
      </div>

      <div class="skills-marquee">
        <div class="marquee-content">
          <span v-for="skill in skills" :key="skill.name" class="skill-badge">
            <span class="skill-icon">{{ skill.icon }}</span>
            <span class="skill-name">{{ skill.name }}</span>
          </span>
          <!-- Duplicate for seamless loop -->
          <span v-for="skill in skills" :key="skill.name + '-clone'" class="skill-badge">
            <span class="skill-icon">{{ skill.icon }}</span>
            <span class="skill-name">{{ skill.name }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const skills = ref([
  { name: 'Python', icon: '🐍' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Django', icon: '🌿' },
  { name: 'Laravel', icon: '🚀' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Vue.js', icon: '💚' },
  { name: 'React', icon: '⚛️' },
  { name: 'REST APIs', icon: '🔗' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'MySQL', icon: '💾' },
  { name: 'PHP', icon: '🔧' },
])
</script>

<style lang="scss" scoped>
.skills-section {
  padding: 2rem 0;
}

// Section Header with Gradient Typography
.section-header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }

  .section-number {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    background: linear-gradient(135deg, #667eea, #764ba2, #f5576c);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 8s ease infinite;
    padding: 0.5rem 1rem;
    border: 2px solid;
    border-image: linear-gradient(135deg, #667eea, #764ba2, #f5576c) 1;
    border-radius: 50px;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }

  .gradient-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    position: relative;

    // Beautiful gradient text animation
    background: linear-gradient(270deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
    background-size: 600% 600%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientTitleShift 12s ease infinite;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #667eea, #f5576c);
      border-radius: 2px;
      animation: underlineShift 8s ease infinite;
    }
  }

  p {
    font-size: 1.25rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: gradientShift 10s ease infinite reverse;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.7;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
}

// Gradient animations
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes gradientTitleShift {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 200% 50%;
  }
  75% {
    background-position: 300% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes underlineShift {
  0% {
    background: linear-gradient(90deg, #667eea, #f5576c);
  }
  33% {
    background: linear-gradient(90deg, #f093fb, #4facfe);
  }
  66% {
    background: linear-gradient(90deg, #00f2fe, #667eea);
  }
  100% {
    background: linear-gradient(90deg, #667eea, #f5576c);
  }
}

// Skills Marquee Wrapper
.skills-marquee-wrapper {
  position: relative;
  padding: 3rem 0;
  background: linear-gradient(
    135deg,
    #667eea 0%,
    #764ba2 25%,
    #f093fb 50%,
    #f5576c 75%,
    #4facfe 100%
  );
  background-size: 400% 400%;
  animation: gradient-shift 15s ease infinite;
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0;
    border-radius: 16px;
  }
}

@keyframes gradient-shift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

// Background decorations
.bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}

.bg-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 8s ease-in-out infinite;

  &--1 {
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.3);
    top: -100px;
    right: -100px;
    animation-delay: 0s;
  }

  &--2 {
    width: 150px;
    height: 150px;
    background: rgba(255, 255, 255, 0.2);
    bottom: -75px;
    left: -75px;
    animation-delay: 2s;
  }

  &--3 {
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.25);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation-delay: 4s;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.bg-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  animation: pattern-move 20s ease-in-out infinite;
}

@keyframes pattern-move {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }
  33% {
    transform: translateX(10px) translateY(-10px);
  }
  66% {
    transform: translateX(-10px) translateY(10px);
  }
}

// Marquee styling
.skills-marquee {
  position: relative;
  z-index: 2;
  overflow: hidden;
  white-space: nowrap;
}

.marquee-content {
  display: inline-block;
  animation: marquee-slide 30s linear infinite;
  will-change: transform;
}

.skill-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(15px);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  margin: 0 1rem;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  user-select: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background: rgba(255, 255, 255, 1);
    box-shadow:
      0 15px 45px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);

    .skill-name {
      animation-play-state: paused; // Pause animation on hover
    }
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
  }
}

.skill-icon {
  font-size: 1.5rem;
  margin-right: 0.75rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-right: 0.5rem;
  }
}

// Animated gradient text for skill names
.skill-name {
  font-weight: 700;
  letter-spacing: 0.025em;

  // Beautiful animated gradient text
  background: linear-gradient(270deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe);
  background-size: 800% 800%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: skillNameGradient 20s ease infinite;

  // Different animation delays for each skill
  &:nth-child(2n) {
    animation-delay: -2s;
  }

  &:nth-child(3n) {
    animation-delay: -4s;
  }

  &:nth-child(4n) {
    animation-delay: -6s;
  }
}

@keyframes skillNameGradient {
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 200% 50%;
  }
  75% {
    background-position: 300% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes marquee-slide {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

// Pause animation on hover
.skills-marquee:hover .marquee-content {
  animation-play-state: paused;
}

// Gradient fade edges
.skills-marquee-wrapper::before,
.skills-marquee-wrapper::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  width: 80px;
  z-index: 3;
  pointer-events: none;
}

.skills-marquee-wrapper::before {
  left: 0;
  background: linear-gradient(90deg, rgba(102, 126, 234, 0.8) 0%, transparent 100%);
}

.skills-marquee-wrapper::after {
  right: 0;
  background: linear-gradient(-90deg, rgba(245, 87, 108, 0.8) 0%, transparent 100%);
}

// Responsive adjustments
@media (max-width: 768px) {
  .bg-circle {
    display: none;
  }

  .skills-marquee-wrapper::before,
  .skills-marquee-wrapper::after {
    width: 40px;
  }
}
</style>
