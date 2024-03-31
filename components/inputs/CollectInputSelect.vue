<template>
  <CollectSelect
      v-model:searchTerm="searchTerm"
      :items="pokemons"
      :search-keys="['name']"
      :label-keys="['name']"
      :icon="props.icon"
      hide-add-element
      :placeholder="props.placeholder"
      @item-selected="handleItemSelected"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CollectSelect from '@/components/inputs/CollectSelect.vue'
import {fetchPokemons} from "~/lib/services/pokemonServices";

// Typage pour une ville
interface City {
  id: number
  name: string
}

/* PROPS */
const props = defineProps({
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
  icon: {
    type: String,
    required: false,
    default: 'fa-magnifying-glass',
  },
})

/* DATAS */


/* REFS */
// Référence pour searchTerm
const pokemons = ref<Pokemon[]>([])
const searchTerm = ref('');

/* METHODS */
// Fonction pour mettre à jour searchTerm
const updateSearchTerm = (value: string) => {
  searchTerm.value = value
}

// Fonction pour gérer la sélection d'un item
const handleItemSelected = (pokemon: Pokemon) => {
  searchTerm.value = pokemon.name
}

onMounted(async () => {
  pokemons.value = await fetchPokemons();
});


</script>