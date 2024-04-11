<script lang="ts">
import { getCategorias } from '@/http';
import { defineComponent } from 'vue';
import CardCategoria from '@/components/CardCategoria.vue';
import type Categoria from '@/interfaces/ICategoria';
import BotaoPrincipal from './BotaoPrincipal.vue';


export default defineComponent({
  name: 'SelecionarIngredientes',
  emits: [
    'ingredienteSelecionado',
    'ingredienteRemovido'
  ],
  data() {
    return {
      categorias: Array<Categoria>()
    }
  },
  async created() {
    this.categorias = await getCategorias();
  },
  components: {
    CardCategoria, BotaoPrincipal
  }
});
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="categorias">
      <li v-for="categoria in categorias" :key="categoria.nome">
        <card-categoria @ingrediente-selecionado="$emit('ingredienteSelecionado', $event)"
          @ingrediente-removido="$emit('ingredienteRemovido', $event)" :categoria="categoria" />
      </li>
    </ul>

    <p class="paragrafo dica">*Atenção: consideramos que você tem em casa sal, pimenta e água.</p>
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.categorias {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.dica {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}
</style>