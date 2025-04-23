// nuxt.config.js
export default defineNuxtConfig({
  // Target static deployment for GitHub Pages
  target: 'static',
  
  // Set the base path to match your repository name
  app: {
    baseURL: '/Portfolio/',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  
  // Existing modules and configuration
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-icon',
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],

  // Updated content module configuration
  content: {
    // Configure content directory
    dir: 'content',
    // Document-driven mode for better prerendering
    documentDriven: {
      // Enable navigation generation based on your content
      navigation: true,
      // Ensure this is false in production for better performance
      injectPage: false
    },
    // Handle markdown correctly
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3
      },
    },
    // Experimental features can be disabled if causing issues
    experimental: {
      clientDB: false,
      stripQueryParameters: false
    },
  },
  
  // Google Fonts configuration
  googleFonts: {
    families: {
      'Inter': [400, 500, 600, 700],
      download: true,
      inject: true
    }
  },
  
  // Image module configuration for optimized images
  image: {
    quality: 80,
    format: ['webp']
  },
  
  // UI configuration
  ui: {
    icons: ['mdi', 'heroicons', 'solar']
  },
  
  // CSS global files
  css: ['~/assets/css/main.css'],
  
  // Build configuration
  build: {
    transpile: ['@nuxt/content']
  },
  
  // Generate configuration for static site
  generate: {
    fallback: '404.html'
  },
  
  // Nitro server configuration
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/projects',
        '/lab',
        '/articles',
        '/certifications'
      ]
    }
  },
  
  // Development-specific configurations
  devtools: { enabled: process.env.NODE_ENV === 'development' },
  
  // SEO configuration
  app: {
    head: {
      title: 'Yash Karale - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Portfolio website of Yash Karale, a Data Scientist and Web Developer.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})