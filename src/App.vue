<script lang="ts">
import ConteudoPrincipal from '@/components/ConteudoPrincipal.vue';
import CookinBanner from '@/components/CookinBanner.vue';

export default {
  name: "App",
  components: {
    CookinBanner, ConteudoPrincipal
  }
}
</script>

<template>
  <cookin-banner />
  <conteudo-principal />
</template>