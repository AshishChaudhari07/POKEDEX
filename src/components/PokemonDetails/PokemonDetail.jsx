import { useParams } from 'react-router-dom'
import './PokemonDetail.css'
import usePokemonDeatail from '../../../hooks/usePokemonDetail';

function PokemonDetail({pokemonName}) {
    const {id} = useParams(); 
    const [pokemon] = usePokemonDeatail(id,pokemonName);

  return (
    <div className='pokemon-detail-wrapper'>
      <img className='pokemon-detail-image' src={pokemon.image} />
      <div className="pokemon-detail-name"><span>{pokemon.name}</span></div>
      <div className="pokemon-detail-name">Height:{pokemon.height}</div>
      <div className="pokemon-detail-name">Weight:{pokemon.weight}</div>
      <div className="pokemon-detail-types">
        {pokemon.types  && pokemon.types.map((t)=><div key={t}>{t}</div>)}
      </div>
    </div>
  )
}

export default PokemonDetail
