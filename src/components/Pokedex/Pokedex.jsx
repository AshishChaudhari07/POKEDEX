import React, { useState } from 'react'
import Search from '../Search/Search'
import './Pokedex.css'
import PokemonList from '../PokemonList/PokemonList'
import PokemonDetail from '../PokemonDetails/PokemonDetail';

function Pokedex() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='pokedex-wrapper'>
      <Search updateSearchTerm={setSearchTerm}/>
      
      {(!searchTerm.length) ? <PokemonList/> : <PokemonDetail key={searchTerm} pokemonName={searchTerm}/>}
    </div>
  )
}

export default Pokedex
