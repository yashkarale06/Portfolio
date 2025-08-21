<template>
  <button :class="buttonClasses" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value),
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClasses() {
      return [
        'base-button',
        `base-button--${this.variant}`,
        `base-button--${this.size}`,
        { 'base-button--disabled': this.disabled },
      ]
    },
  },
  emits: ['click'],
}
</script>

<style lang="scss" scoped>
.base-button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &--primary {
    background-color: #3b82f6;
    color: white;

    &:hover {
      background-color: #2563eb;
      transform: translateY(-2px);
    }
  }

  &--secondary {
    background-color: #6b7280;
    color: white;

    &:hover {
      background-color: #4b5563;
    }
  }

  &--outline {
    background-color: transparent;
    border: 2px solid #3b82f6;
    color: #3b82f6;

    &:hover {
      background-color: #3b82f6;
      color: white;
    }
  }

  &--small {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  &--large {
    padding: 1rem 2rem;
    font-size: 1.125rem;
  }

  &--disabled {
    opacity: 0.6;
    cursor: not-allowed;

    &:hover {
      transform: none;
    }
  }
}
</style>
