import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('Pokemon Picture component', () => {
  test('debe hacer match con el snapshot ', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
  test('debe de monstrar la imagen oculta y el pokemon 151 ', () => {
    const wrapper = shallowMount(PokemonPicture, {
      props: {
        pokemonId: 151,
        showPokemon: false
      }
    })

    const [img1, img2] = wrapper.findAll('img')

    expect(img1.exists()).toBeTruthy()
    expect(img2).toBe(undefined)
    expect(img1.classes('hidden-pokemon')).toBe(true)
    expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg')
  })

  test('debe mostrar el pokemon si el showPokemon está en true', () => {
    const wrapper = shallowMount(PokemonPicture, {
        props: {
          pokemonId: 151,
          showPokemon: true
        }
      })
  
      const img = wrapper.find('img')
  
      expect(img.exists()).toBeTruthy()
     
      expect(img.classes('hidden-pokemon')).toBe(false)
      expect(img.classes('fade-in')).toBe(true)
  })
})
