<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'BotaoPrincipal'
}
</script>

<style scoped>
.button {
  border: 0;
  background-color: var(--coral);
  color: var(--creme);
  border-radius: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 5rem;
  padding-right: 5rem;
  text-align: center;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  box-shadow: 4px 4px 15px 0px rgba(255, 115, 76, 0.25);
  transition: 0.2s;
}

.button:hover {
  background: var(--ocre-hover, #D1451E);
}
</style>