import { pokemonSchema } from '../../schemas/pokemonSchema';
import './PokeSearchResult.scss';

interface PokeSearchResultProp {
    selectedPokemon: pokemonSchema | undefined
}
const PokeSearchResult = ( {selectedPokemon}: PokeSearchResultProp) => {
    return <>{ selectedPokemon ? 
        <div className="search-result-card">
        <img className='result-img' src={selectedPokemon && selectedPokemon.sprites?.animated} alt={selectedPokemon && selectedPokemon.name}/>
        <p>Name: {selectedPokemon?.name}</p>
        <p>Id: {selectedPokemon?.id}</p>
        <p>Weight: {selectedPokemon?.weight}</p>
        <p>Height: {selectedPokemon?.height}</p>
        <p>Base experience: {selectedPokemon?.base_experience}</p>
    </div> : <div className='search-result-card'>
        <h2 className='welcome-text'>Welcome to Pokedex</h2>
    </div>
    }
    </>
}

export default PokeSearchResult;