<template>
  <h1 v-if="!pokemon">Cargando...</h1>
  <div v-else>
    <h1>¿Quien es este pokemon?</h1>
    <!-- Picture -->
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <!-- Opciones -->
    <PokemonOptions :pokemons="pokemonArray" @selectionPokemon="checkAnswer" />

    <div v-if="showAnswer">
      <h2>{{ message }}</h2>
      <button @click="newAnswer">Nuevo juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue'
import PokemonPicture from '@/components/PokemonPicture.vue'
import getPokemonOptions from '@/helpers/getPokemonOptions'

/* console.log(getPokemonOptions());
 */
export default {
  components: {
    PokemonOptions,
    PokemonPicture
  },
  data () {
    return {
      pokemonArray: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: ''
    }
  },
  methods: {
    async mixPokemonArray () {
      this.pokemonArray = await getPokemonOptions()

      const rndInt = Math.floor(Math.random() * 4)

      this.pokemon = this.pokemonArray[rndInt]
    },
    checkAnswer (pokemonId) {
      this.showPokemon = true
      this.showAnswer = true
      if (pokemonId === this.pokemon.id) {
        this.message = `Correcto, el pokemon es ${this.pokemon.name}`
      } else {
        pokemonId = this.pokemonArray[pokemonId]
        this.message = `Te has equivocado era ${this.pokemon.name} `
      }
    },
    newAnswer () {
      this.showPokemon = false
      this.showAnswer = false
      this.pokemonArray = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted () {
    this.mixPokemonArray()
  }
}
</script>
