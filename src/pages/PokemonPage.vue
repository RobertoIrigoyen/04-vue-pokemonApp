<template>
  <h1>¿Quien es este pokemon?</h1>
  <!-- Picture -->
  <PokemonPicture :pokemonId="60" :showPokemon="true" />
  <!-- Opciones -->
  <PokemonOptions :pokemons="pokemonArray" />


</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonPicture from "@/components/PokemonPicture.vue";
import getPokemonOptions from "@/helpers/getPokemonOptions";

/* console.log(getPokemonOptions());
 */
export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArray: [],
    };
  },
  methods:{
    async mixPokemonArray(){
      this.pokemonArray = await getPokemonOptions()
      console.log(this.pokemonArray);
    }
  },
  mounted(){
    this.mixPokemonArray()
  }
};
</script>

