<template>
  <span class="tag" :class="['tag', { active }]">
    <slot></slot>
  </span>
</template>

<script lang="ts">
export default {
  name: 'SelectTag',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
}

.tag.active {
  color: var(--creme, #FFFAF3);
  background: var(--coral, #F0633C);
  font-weight: 700;
}
</style>