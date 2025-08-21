<template>
  <section class="about-section">
    <div class="about-content">
      <!-- Enhanced Profile Image Section -->
      <div class="profile-section">
        <div class="profile-image-container">
          <div class="profile-image">
            <span class="profile-initials">YK</span>
            <div class="profile-ring"></div>
          </div>
          <div class="tech-badges">
            <div class="tech-badge">Python</div>
            <div class="tech-badge">Node.js</div>
            <div class="tech-badge">SQL</div>
          </div>
        </div>
      </div>

      <!-- About Content -->
      <div class="about-text">
        <div class="about-description">
          <p class="highlight-text">
            Hi! I'm <span class="name-highlight">Yash Karale</span>, a passionate backend developer
            specialized in building robust server architectures and scalable database solutions.
          </p>

          <p>
            With expertise in <strong>Python, Node.js, and database management</strong>, I create
            efficient backend systems that handle real-time data processing and ensure optimal
            performance. I love designing beautiful admin panels and crafting APIs that developers
            actually enjoy working with.
          </p>

          <p>
            My journey in backend development started with curiosity about how data flows through
            applications and has evolved into a career focused on building secure, scalable, and
            maintainable server-side solutions.
          </p>
        </div>

        <!-- Simplified Skills -->
        <div class="skills-highlight">
          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div class="skill-content">
                <h4>Admin Panels</h4>
                <p>Beautiful backend interfaces</p>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <div class="skill-content">
                <h4>Database Systems</h4>
                <p>Scalable data solutions</p>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14,2 14,8 20,8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10,9 9,9 8,9" />
                </svg>
              </div>
              <div class="skill-content">
                <h4>API Development</h4>
                <p>RESTful data services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="about-decoration">
      <div class="decoration-circle decoration-circle--1"></div>
      <div class="decoration-circle decoration-circle--2"></div>
    </div>
  </section>
</template>

<script setup>
const downloadResume = () => {
  // Add resume download logic here
  console.log('Download resume')
}

const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.about-section {
  position: relative;
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0;
    border-radius: 16px;
  }
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
}

// Enhanced Profile Section
.profile-section {
  position: relative;
  display: flex;
  justify-content: center;
}

.profile-image-container {
  position: relative;
  padding: 2rem;
}

.profile-image {
  position: relative;
  width: 280px;
  height: 280px;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 3rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 15px 35px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 25px 50px rgba(255, 107, 107, 0.4);

    .profile-ring {
      transform: rotate(180deg) scale(1.1);
      border-width: 4px;
    }
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
    font-size: 3.5rem;
  }
}

.profile-initials {
  z-index: 2;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.profile-image:hover .profile-initials {
  transform: scale(1.1);
  text-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
}

.profile-ring {
  position: absolute;
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  border: 3px solid transparent;
  border-top-color: #06ffa5;
  border-right-color: #48cae4;
  border-radius: 50%;
  animation: rotate 10s linear infinite;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.tech-badges {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.tech-badge {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 1);
  }

  &:nth-child(1) {
    color: #3776ab;
    &:hover {
      border-color: #3776ab;
      box-shadow: 0 10px 25px rgba(55, 118, 171, 0.25);
      background: rgba(55, 118, 171, 0.1);
    }
  }

  &:nth-child(2) {
    color: #68a063;
    &:hover {
      border-color: #68a063;
      box-shadow: 0 10px 25px rgba(104, 160, 99, 0.25);
      background: rgba(104, 160, 99, 0.1);
    }
  }

  &:nth-child(3) {
    color: #336791;
    &:hover {
      border-color: #336791;
      box-shadow: 0 10px 25px rgba(51, 103, 145, 0.25);
      background: rgba(51, 103, 145, 0.1);
    }
  }
}

.about-description {
  margin-bottom: 2.5rem;

  p {
    font-size: 1.125rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.5rem;

    &.highlight-text {
      font-size: 1.25rem;
      color: #333;
    }

    strong {
      color: #ff6b6b;
      font-weight: 600;
    }
  }
}

.name-highlight {
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 700;
}

// Simplified Skills
.skills-highlight {
  margin-bottom: 2.5rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.skill-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
}

.skill-icon {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 20px;
    height: 20px;
    color: white;
    stroke-width: 2;
  }
}

.skill-content {
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    margin: 0;
  }
}

// Background Decoration
.about-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.05;

  &--1 {
    width: 200px;
    height: 200px;
    background: linear-gradient(135deg, #ff6b6b, #feca57);
    top: 10%;
    right: -100px;
  }

  &--2 {
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, #48cae4, #c77dff);
    bottom: 20%;
    left: -75px;
  }
}
</style>
