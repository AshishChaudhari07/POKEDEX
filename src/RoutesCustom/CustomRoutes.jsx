import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Pokedex from '../components/Pokedex/Pokedex'
import PokemonDetail from '../components/PokemonDetails/PokemonDetail'

function CustomRoutes() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
        <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
      </Routes>
    </div>
  )
}

export default CustomRoutes
