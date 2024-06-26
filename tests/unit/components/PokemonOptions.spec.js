import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'
import { pokemons } from '../mocks/pokemons.mock'

describe('Pokemon Options Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props: {
        pokemons: pokemons
      }
    })
  })
  test('debe hacer match con el snapshot', () => {
    /*     console.log(wrapper.html())
     */
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('debe mostrar las 4 opciones correctamente', () => {
/*     const liTags = wrapper.findAll('li')

    expect(liTags.length).toBe(4)

    expect(liTags[0].text()).toBe('pikachu')
    expect(liTags[1].text()).toBe('charmander')
    expect(liTags[2].text()).toBe('venusaur')
    expect(liTags[3].text()).toBe('mew') */

    //Es lo mismo pero simplificado

    const liTags = wrapper.findAll('li');
 
    expect( liTags.length ).toBe(pokemons.length);
 
    liTags.forEach(li => {
      expect( pokemons.some(pokemon => pokemon.name === li.text()) ).toBeTruthy();
    });

  })

  test('debe de emitir "seleccion" con sus respectivos paramentros al hacer click', () => {
    /*     const [li1, li2, li3, li4] = wrapper.findAll('li')
     */
    /*   li1.trigger('click')
    li2.trigger('click')
    li3.trigger('click')
    li4.trigger('click')
    // console.log(wrapper.emitted('selectionPokemon'))
    expect(wrapper.emitted('selectionPokemon').length).toBe(4)
    expect(wrapper.emitted('selectionPokemon')[0]).toEqual([5])
    expect(wrapper.emitted('selectionPokemon')[1]).toEqual([10])
    expect(wrapper.emitted('selectionPokemon')[2]).toEqual([15])
    expect(wrapper.emitted('selectionPokemon')[3]).toEqual([20]) */

    //Es lo mismo pero simplificado

    const liTags = wrapper.findAll('li')

    liTags.forEach((li, index) => {
      li.trigger('click')
      expect(wrapper.emitted('selectionPokemon')[index][0]).toBe(
        pokemons[index].id
      )
    })
  })
})
