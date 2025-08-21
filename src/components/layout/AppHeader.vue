<template>
  <header class="app-header" :class="{ 'app-header--scrolled': isScrolled }">
    <div class="container">
      <div class="app-header__content">
        <router-link to="/" class="app-header__logo">
          <h1>Yash Karale</h1>
        </router-link>

        <nav class="app-header__nav">
          <ul class="nav-list">
            <li v-for="item in navItems" :key="item.name">
              <router-link
                :to="item.path"
                class="nav-link"
                :class="{ 'nav-link--active': $route.path === item.path }"
              >
                {{ item.name }}
              </router-link>
            </li>
          </ul>
        </nav>

        <button
          class="mobile-menu-toggle"
          @click="toggleMobileMenu"
          :class="{ 'mobile-menu-toggle--active': isMobileMenuOpen }"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)

    const navItems = [
      { name: 'Home', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: 'Projects', path: '/projects' },
    ]

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50
    }

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      isScrolled,
      isMobileMenuOpen,
      navItems,
      toggleMobileMenu,
    }
  },
}
</script>

<style lang="scss" scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;

  &--scrolled {
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
  }

  &__logo h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #1f2937;
    margin: 0;
  }

  &__nav {
    @media (max-width: 768px) {
      display: none;
    }
  }
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #4b5563;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover,
  &--active {
    color: #3b82f6;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -0.25rem;
    left: 0;
    width: 0;
    height: 2px;
    background: #3b82f6;
    transition: width 0.3s ease;
  }

  &:hover::after,
  &--active::after {
    width: 100%;
  }
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    width: 100%;
    height: 2px;
    background: #4b5563;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
