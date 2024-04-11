<script lang="ts">
import type Receita from '@/interfaces/IReceita';
import type { PropType } from 'vue';

export default {
  name: 'CardReceita',
  props: {
    receita: {
      type: Object as PropType<Receita>,
      required: true
    },
  },
}
</script>

<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img class="receita__imagem" :src="`/public/imagens/receitas/${receita.imagem}`"
        :alt="'Foto de como ficou o prato: ' + receita.nome">
      <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
    </header>
  </article>
</template>

<style scoped>
.receita {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.receita__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.receita__imagem {
  width: 3.5rem;
}

.receita__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}

.receita__ingredientes {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>