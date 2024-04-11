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
      receitasEncontradas: Array<Receita>(),
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
    this.filtrarReceitas();
  },
  components: {
    CardReceita
  },
  methods: {
    isReceitaAceitavel(receita: Receita) {
      for (let ingrediente of receita.ingredientes) {
        if (!this.ingredientesAceitos.has(ingrediente)) {
          return false;
        }
      }
      return true;
    },
    filtrarReceitas() {
      this.receitasEncontradas = this.receitas.filter(receita => this.isReceitaAceitavel(receita));
    }
  },
});
</script>

<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-receitas">Receitas</h1>

    <div v-if="receitasEncontradas.length > 0" class="receitas-wrapper">
      <p class="paragrafo-lg informacoes">
        Veja as opções de receitas que encontramos com os ingredientes que você tem por aí!
      </p>

      <ul class="receitas">
        <li v-for="receita in receitasEncontradas" :key="receita.nome">
          <card-receita :receita="receita" />
        </li>
      </ul>
    </div>
    <div v-else class="receitas-nao-encontradas">
      <p class="paragrafo-lg receitas-nao-encontradas__info">
        Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
      </p>

      <img src="/public/imagens/sem-receitas.png"
        alt="Desenho de um ovo quebrado. A gema tem um rosto com uma expressão triste.">
    </div>

    <p class="paragrafo dica">
      *Atenção: consideramos que você tem em casa sal, pimenta e água.
    </p>
  </section>
</template>

<style scoped>
.mostrar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 1.5rem;
}

.resultados-encontrados {
  color: var(--verde-medio, #3D6D4A);
  margin-bottom: 0.5rem;
}

.receitas-wrapper {
  margin-bottom: 3.5rem;
}

.informacoes {
  margin-bottom: 2rem;
}

.receitas {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receitas-nao-encontradas {
  margin-bottom: 2rem;
}

.receitas-nao-encontradas__info {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 767px) {
  .receitas-wrapper {
    margin-bottom: 2rem;
  }
}
</style>
