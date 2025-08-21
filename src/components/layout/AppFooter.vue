<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Main Footer Content -->
        <div class="footer-main">
          <div class="footer-brand">
            <h3>Your Name</h3>
            <p>Full Stack Developer & UI/UX Designer</p>
          </div>

          <div class="footer-links">
            <div class="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/projects">Projects</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Projects</h4>
              <ul>
                <li><a href="#" target="_blank">E-Commerce Dashboard</a></li>
                <li><a href="#" target="_blank">Task Management App</a></li>
                <li><a href="#" target="_blank">Portfolio Website</a></li>
              </ul>
            </div>

            <div class="footer-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="#" target="_blank" aria-label="GitHub">
                  <i class="fab fa-github"></i>
                </a>
                <a href="#" target="_blank" aria-label="LinkedIn">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" target="_blank" aria-label="Twitter">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="mailto:your.email@example.com" aria-label="Email">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p>&copy; {{ currentYear }} Your Name. All rights reserved.</p>
            <p>Built with Vue.js & ❤️</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>

<style lang="scss" scoped>
.app-footer {
  background: #1f2937;
  color: #e5e7eb;
  padding: 3rem 0 1rem;
}

.footer-content {
  display: flex;
  flex-direction: column;
}

.footer-main {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  h3 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #f9fafb;
  }

  p {
    color: #9ca3af;
    font-size: 0.95rem;
  }
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.footer-section {
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #f9fafb;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin-bottom: 0.5rem;

      a {
        color: #9ca3af;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.3s ease;

        &:hover {
          color: #3b82f6;
        }
      }
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;

  a {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    background: #374151;
    border-radius: 0.5rem;
    color: #9ca3af;
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
      background: #3b82f6;
      color: white;
      transform: translateY(-2px);
    }
  }
}

.footer-bottom {
  border-top: 1px solid #374151;
  padding-top: 1.5rem;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  p {
    color: #6b7280;
    font-size: 0.875rem;
    margin: 0;
  }
}
</style>
