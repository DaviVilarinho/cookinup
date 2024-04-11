<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CookinFooter',
});
</script>

<template>
  <footer class="footer">
    <div class="footer-center">
      <p>Desenvolvido para fins de teste</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  height: 5rem;
  background-color: var(--verde-escuro);
  display: grid;
}

.footer-center {
  margin: auto;
  display: flex;
  align-items: center;
}

.footer p {
  text-align: center;
}
</style>