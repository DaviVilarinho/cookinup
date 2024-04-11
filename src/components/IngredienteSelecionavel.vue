<template>
  <button @click.prevent="select" style="cursor: pointer" :aria-pressed="selected">
    <select-tag :active="selected">
      {{ ingrediente }}
    </select-tag>
  </button>
</template>

<script lang="ts">
import SelectTag from './SelectTag.vue';
export default {
  name: 'IngredienteSelecionavel',
  components: {
    SelectTag
  },
  methods: {
    select() {
      this.selected = !this.selected;

      this.$emit(this.selected ? 'ingredienteSelecionado' : 'ingredienteRemovido', this.ingrediente);
    }
  },
  emits: [
    'ingredienteSelecionado',
    'ingredienteRemovido'
  ],
  data() {
    return {
      selected: false
    }
  },
  props: {
    ingrediente: {
      type: String,
      required: true
    }
  }
}
</script>

<style></style>