<script lang="ts">
import CookinBanner from './components/CookinBanner.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';

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