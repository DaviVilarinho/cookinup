<script lang="ts">
import BotaoPrincipal from './BotaoPrincipal.vue';
import SelecionarIngredientes from './SelecionarIngredientes.vue';
import SelectTag from './SelectTag.vue';

export default {
  name: 'ConteudoPrincipal',
  components: { SelectTag, SelecionarIngredientes, BotaoPrincipal },
  data() {
    return {
      ingredientes: new Set<string>(),
      pageContent: 'SelecionarIngredientes' as 'SelecionarIngredientes' | 'MostrarReceitas',
    };
  },
  computed: {
    textActionButton() {
      return this.pageContent === 'SelecionarIngredientes' ? 'Buscar Receitas!' : 'Editar lista';
    }
  },
  methods: {
    toggleContent() {
      this.pageContent = this.pageContent === 'SelecionarIngredientes' ? 'MostrarReceitas' : 'SelecionarIngredientes';
    }
  }
}
</script>

<template>
  <main class="conteudo-principal">
    <section>
      <span class="substituto-lg sua-lista-texto">Sua lista:</span>
    </section>

    <ul v-if="ingredientes.size > 0" class="ingredientes-sua-lista">
      <li v-for="ingrediente in ingredientes.values()" :key="ingrediente">
        <select-tag :active="true">{{ ingrediente }}</select-tag>
      </li>
    </ul>
    <p v-else class="paragrafo lista-vazia">
      <img src="/public/imagens/icones/lista-vazia.svg" alt="Ícone de Pesquisa em Lista">
      Sua lista está vazia, selecione os ingredientes disponíveis para iniciar.
    </p>

    <selecionar-ingredientes v-if="pageContent === 'SelecionarIngredientes'"
      @ingrediente-selecionado="ingredientes.add($event)" @ingrediente-removido="ingredientes.delete($event)" />

    <botao-principal @click="toggleContent">{{ textActionButton }}</botao-principal>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>