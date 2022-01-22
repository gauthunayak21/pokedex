import { stringify } from 'querystring';
import React from 'react';
import './App.scss';
import Pokedex from './components/Pokedex/Pokedex';
import { pokemonData } from './data/pokemonData';
import { pokemonSchema, pokemonSpritesSchema, unPatchedSchema } from './schemas/pokemonSchema';

export interface AppState {
  searchField: string;
  allPokemons: pokemonSchema[];
  searchedPokemons: pokemonSchema[];
  selectedPokemon: pokemonSchema | undefined;
}
class App extends React.Component<any, AppState> {

  state = {
    searchField : '',
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined
  }

  patchData(pokeData: unPatchedSchema[]): pokemonSchema[] {
    const patchedPokeData = pokeData.map( (pokemon) => {
      let patchedSpriteData : pokemonSpritesSchema = {
        normal: undefined,
        animated: undefined
      };

      try {
        patchedSpriteData = pokemon.sprites && JSON.parse(pokemon.sprites)
      } catch {
        console.log("Error")
      }

      return {
        ...pokemon,
        sprites: patchedSpriteData
      }
    })
    return patchedPokeData;
  }

  componentDidMount() {
    const pokeData = this.patchData(pokemonData);
    this.setState({
      searchedPokemons: pokeData,
      allPokemons: pokeData
    })
  }

  handleInputChange = (inputValue: string) => {
    const searchField = inputValue;

        const { allPokemons } = this.state;

        const searchedPokemons = allPokemons.filter(
            (pokemon: pokemonSchema) => {
                return (
                    pokemon.name &&
                    pokemon.name
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }
        );

        this.setState({ searchField, searchedPokemons });
  }

  handleClick = (pokemonName: string | undefined) => {
    const allPokemons  = this.state.allPokemons;
    const selectedPokemon = allPokemons.find(
      (pokemon: pokemonSchema) => pokemon.name === pokemonName);

      this.setState({selectedPokemon})
  }

  render() {
    return (
      <div className='App'>
        <h1>Pokedex</h1>
        <Pokedex 
          pokemons={this.state.searchedPokemons}
          onInputChange={this.handleInputChange}
          onPokemonClick={this.handleClick}
          selectedPokemon={this.state.selectedPokemon} />
      </div>
    )
  }
}

export default App;
