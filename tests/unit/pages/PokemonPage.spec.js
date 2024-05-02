import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'
import { pokemons } from '../mocks/pokemons.mock'

describe('Pokemon Page Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
  })
  test('debe de hacer match con el snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe de llamar el "mixPokemonArray al montar ', () => {
    const mixPokemonArraySpy = jest.spyOn(
      PokemonPage.methods,
      'mixPokemonArray'
    )
    const wrapper = shallowMount(PokemonPage)

    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })

  test('debe hacer math con el snapshot cuando carguen los pokemons', () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('debe mostrar los componentes de pokemon picture y pokemon option', () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })
    //PokemonPicture existe
    const pokemonPicture = wrapper.find('pokemon-picture-stub')
    expect(pokemonPicture.exists()).toBeTruthy()
    //PokemonOptions existe
    const pokemonOptions = wrapper.find('pokemon-options-stub')
    expect(pokemonOptions.exists()).toBeTruthy()
    //PokemonPicture tiene que tener el atribute ID y tiene que ser 5
    expect(pokemonPicture.attributes('pokemonid')).toBe('5')
    //PokemonOptions tiene que tener el atribute Pokemons y tiene que ser true
    expect(pokemonOptions.attributes('pokemons')).toBeTruthy()
  })

  test('pruebas con checkAnswer ', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArray: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })

    await wrapper.vm.checkAnswer(5)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.find('h2').text()).toBe(
      `Correcto, el pokemon es ${pokemons[0].name}`
    )

    await wrapper.vm.checkAnswer(10)
    console.log(await wrapper.vm.checkAnswer(10))
    expect(wrapper.vm.message).toBe(
      `Te has equivocado era ${pokemons[0].name} `
    )
  })
})
