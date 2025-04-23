// nuxt.config.js
export default defineNuxtConfig({
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

  // Configure nitro for better build performance
  nitro: {
    // Disable prerendering if it continues to cause issues
    prerender: {
      // Set to false to disable prerendering completely
      // Or configure specific routes to include/exclude
      ignore: [
        // Add routes that cause issues during prerendering
        // Example: '/problematic-route'
      ]
    },
    // Error handling during prerendering
    routeRules: {
      // Define fallbacks for routes
      '/**': { prerender: true }
    }
  },

  // Other existing configurations...
  app: {
    // Add a default layout if needed
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  // Development-specific configurations
  devtools: { enabled: process.env.NODE_ENV === 'development' }
})