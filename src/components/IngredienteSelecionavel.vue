<template>
  <button @click.prevent="selected = !selected" style="cursor: pointer" :aria-pressed="selected">
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