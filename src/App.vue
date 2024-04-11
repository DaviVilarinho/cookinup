<script lang="ts">
import ConteudoPrincipal from '@/components/ConteudoPrincipal.vue';
import CookinBanner from '@/components/CookinBanner.vue';
import CookinFooter from './components/CookinFooter.vue';

export default {
  name: "App",
  components: {
    CookinBanner, ConteudoPrincipal, CookinFooter
  }
}
</script>

<template>
  <cookin-banner />
  <conteudo-principal />
  <cookin-footer />
</template>