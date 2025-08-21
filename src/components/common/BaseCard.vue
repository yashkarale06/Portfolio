<template>
  <div :class="cardClasses">
    <div v-if="$slots.header" class="base-card__header">
      <slot name="header" />
    </div>
    <div class="base-card__content">
      <slot />
    </div>
    <div v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCard',
  props: {
    hover: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value),
    },
  },
  computed: {
    cardClasses() {
      return ['base-card', `base-card--shadow-${this.shadow}`, { 'base-card--hover': this.hover }]
    },
  },
}
</script>

<style lang="scss" scoped>
.base-card {
  background: white;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: all 0.3s ease;

  &--shadow-small {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  }

  &--shadow-medium {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &--shadow-large {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  &--hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &__header {
    padding: 1.5rem 1.5rem 0;
  }

  &__content {
    padding: 1.5rem;
  }

  &__footer {
    padding: 0 1.5rem 1.5rem;
    border-top: 1px solid #e5e7eb;
    margin-top: 1rem;
    padding-top: 1rem;
  }
}
</style>
