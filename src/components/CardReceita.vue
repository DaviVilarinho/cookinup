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
      <h2 class="paragrafo-lg receita__corpo">{{ receita.nome }}</h2>
    </header>
  </article>
</template>

<style scoped>
.receita {
  display: flex;
  width: 17.625rem;
  max-width: 19.5rem;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background: var(--Branco, #FFF);
  box-shadow: 4px 4px 12px 0px rgba(68, 68, 68, 0.08);
}

.receita__cabecalho {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
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

.receita__corpo {
  padding: 2rem 1rem;
}

.receita__imagem {
  width: 100%;
  border-radius: 1rem 1rem 0rem 0rem;
  display: block;
}
</style>