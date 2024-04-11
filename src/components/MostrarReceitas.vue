<script lang="ts">
import { getReceitas } from '@/http';
import { defineComponent } from 'vue';
import CardReceita from '@/components/CardReceita.vue';
import type Receita from '@/interfaces/IReceita';

export default defineComponent({
  name: 'MostrarReceitas',
  data() {
    return {
      receitas: Array<Receita>(),
    };
  },
  props: {
    ingredientesAceitos: {
      type: Set<String>,
      required: true,
    }
  },
  async created() {
    this.receitas = await getReceitas();
  },
  components: {
    CardReceita
  },
  methods: {
    isReceitaAceitavel(receita: Receita) {
      return receita.ingredientes.every(ingrediente => this.ingredientesAceitos.has(ingrediente));
    }
  }
});
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>

    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita:
    </p>

    <ul class="receitas">
      <li v-for="receita in receitas" :key="receita.nome">
        <card-receita v-if="isReceitaAceitavel(receita)" :receita="receita" />
      </li>
    </ul>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>
</template>

<style scoped>
.selecionar-ingredientes {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-ingredientes {
  color: var(--verde-medio, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.receitas {
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