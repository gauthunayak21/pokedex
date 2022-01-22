import { pokemonSchema } from '../../schemas/pokemonSchema';
import './Card.scss';

interface CardProps {
    pokemon: pokemonSchema,
    onPokemonClick: (pokemonName: string | undefined) => void;
}
const Card = ({
    pokemon,
    onPokemonClick
}: CardProps) => {
    return <div className='search-card' onClick={() => onPokemonClick(pokemon && pokemon.name)}>
        <img className='list-image' src={pokemon.sprites?.normal} alt={pokemon.name} />
        <p className='name'>{pokemon.name}</p>
    </div>
}

export default Card;