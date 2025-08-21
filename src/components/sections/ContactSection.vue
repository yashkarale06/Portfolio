<template>
  <div class="contact-section">
    <div class="contact-content">
      <!-- Contact Information -->
      <div class="contact-info">
        <h3>Get In Touch</h3>
        <p>
          I'm always open to discussing new opportunities, interesting projects, or just having a
          chat about technology and development.
        </p>

        <div class="contact-items">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="contact-details">
              <h4>Email</h4>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="contact-details">
              <h4>Phone</h4>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
          </div>

          <div class="contact-item">
            <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="contact-details">
              <h4>Location</h4>
              <p>Your City, Country</p>
            </div>
          </div>
        </div>

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
          <a href="#" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="contact-form">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name *</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              required
              :class="{ error: errors.name }"
              placeholder="Your full name"
            />
            <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              required
              :class="{ error: errors.email }"
              placeholder="your@email.com"
            />
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <input
              id="subject"
              v-model="form.subject"
              type="text"
              required
              :class="{ error: errors.subject }"
              placeholder="What's this about?"
            />
            <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              required
              :class="{ error: errors.message }"
              placeholder="Tell me about your project or idea..."
            ></textarea>
            <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
          </div>

          <BaseButton
            type="submit"
            variant="primary"
            size="large"
            :disabled="isSubmitting"
            class="submit-button"
          >
            <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </BaseButton>
        </form>

        <!-- Success Message -->
        <div v-if="showSuccess" class="success-message">
          <i class="fas fa-check-circle"></i>
          <p>Thank you for your message! I'll get back to you soon.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import BaseButton from '@/components/common/BaseButton.vue'

export default {
  name: 'ContactSection',
  components: {
    BaseButton,
  },
  setup() {
    const form = reactive({
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    const errors = reactive({})
    const isSubmitting = ref(false)
    const showSuccess = ref(false)

    const validateForm = () => {
      // Clear previous errors
      Object.keys(errors).forEach((key) => delete errors[key])

      if (!form.name.trim()) {
        errors.name = 'Name is required'
      }

      if (!form.email.trim()) {
        errors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
      }

      if (!form.subject.trim()) {
        errors.subject = 'Subject is required'
      }

      if (!form.message.trim()) {
        errors.message = 'Message is required'
      } else if (form.message.length < 10) {
        errors.message = 'Message must be at least 10 characters long'
      }

      return Object.keys(errors).length === 0
    }

    const submitForm = async () => {
      if (!validateForm()) {
        return
      }

      isSubmitting.value = true

      try {
        // Simulate API call - replace with your actual form submission logic
        await new Promise((resolve) => setTimeout(resolve, 2000))

        // Here you would typically send the form data to your backend
        console.log('Form submitted:', form)

        // Reset form
        Object.keys(form).forEach((key) => {
          form[key] = ''
        })

        showSuccess.value = true

        // Hide success message after 5 seconds
        setTimeout(() => {
          showSuccess.value = false
        }, 5000)
      } catch (error) {
        console.error('Form submission error:', error)
        // You can add error handling here
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      form,
      errors,
      isSubmitting,
      showSuccess,
      submitForm,
    }
  },
}
</script>

<style lang="scss" scoped>
.contact-section {
  width: 100%;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

/* Contact Info Styles */
.contact-info {
  h3 {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--text-primary);
    margin-bottom: 1rem;
  }

  > p {
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
}

.contact-items {
  margin-bottom: 2.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--primary-color);
  color: white;
  border-radius: 0.5rem;
  margin-right: 1rem;
  flex-shrink: 0;

  i {
    font-size: 1.1rem;
  }
}

.contact-details {
  h4 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  a,
  p {
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.95rem;
    margin: 0;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
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
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
    transition: all 0.3s ease;

    &:hover {
      background: var(--primary-color);
      color: white;
      border-color: var(--primary-color);
      transform: translateY(-2px);
    }
  }
}

/* Contact Form Styles */
.contact-form {
  background: var(--surface);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.form-group {
  margin-bottom: 1.5rem;

  &:last-of-type {
    margin-bottom: 2rem;
  }

  label {
    display: block;
    font-weight: 500;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    font-size: 0.95rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    transition: all 0.3s ease;
    background: white;

    &::placeholder {
      color: #9ca3af;
    }

    &:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    &.error {
      border-color: #ef4444;
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
    line-height: 1.5;
  }
}

.error-message {
  display: block;
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
}

.submit-button {
  width: 100%;

  i {
    margin-right: 0.5rem;
  }
}

.success-message {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(5px);
  border-radius: 1rem;
  text-align: center;

  i {
    font-size: 3rem;
    color: #10b981;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-primary);
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    max-width: 300px;
    line-height: 1.5;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-content {
    gap: 2rem;
  }

  .contact-form {
    padding: 1.5rem;
  }

  .contact-info h3 {
    font-size: 1.5rem;
  }

  .social-links {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .contact-items {
    margin-bottom: 2rem;
  }

  .contact-item {
    margin-bottom: 1rem;
  }

  .contact-icon {
    width: 2.5rem;
    height: 2.5rem;

    i {
      font-size: 1rem;
    }
  }
}
</style>
