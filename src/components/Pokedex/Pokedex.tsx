import { pokemonSchema } from '../../schemas/pokemonSchema';
import Card from '../Card/Card';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import SearchBar from '../SearchBar/SearchBar';
import './Pokedex.scss';

interface PokedexProps {
    pokemons: pokemonSchema[];
    selectedPokemon: pokemonSchema | undefined;
    onInputChange: (inputValue: string) => void;
    onPokemonClick: (pokemonName: string | undefined) => void;
}

const Pokedex = ( 
    {
    pokemons,
    selectedPokemon,
    onInputChange,
    onPokemonClick
}:PokedexProps
) => {
    return <div className="pokedex-container">
        <div className="list-container">
            <SearchBar onInputChange={onInputChange} />
            <section className='card-wrapper'>
            { 
                pokemons.map( pokemon => <Card key={pokemon.id} pokemon={pokemon} onPokemonClick={onPokemonClick} />)
            } 
            </section>
        </div>
        <div className="result-container">
            <PokeSearchResult selectedPokemon={selectedPokemon} />
        </div>
    </div>
}

export default Pokedex;