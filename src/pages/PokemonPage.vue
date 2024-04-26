<template>
  <h1>¿Quien es este pokemon?</h1>
  <!-- Picture -->
  <PokemonPicture />
  <!-- Opciones -->
  <PokemonOptions />
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
};
</script>

