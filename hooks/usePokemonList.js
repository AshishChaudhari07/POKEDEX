import axios from "axios";
import { useState,useEffect } from "react"

function usePokemonList(url){
    const [pokemonListState, setPokemonListState] = useState({
        pokemonList:[],
        isLoading:true,
        pokedex_url:url,
        nextUrl:'',
        prevUrl:''
      });

      async function dowoloadPokemons(){
        // setIsLoading(true)
        setPokemonListState({...pokemonListState, isLoading:true});
        const response = await axios.get(pokemonListState.pokedex_url); //this download 20 pokemon list
        console.log(response);
        const pokemonsResult = response.data.results;//we get the array of pokemon from the result(pokemon na naam ane detail ghadhva mate )

        // setNextUrl(response.data.next);
        // setPrevUrl(response.data.previous);

        setPokemonListState((state)=>({
          ...state,
          nextUrl:response.data.next, 
          prevUrl:response.data.previous
        }));        
       

        // iterating over the array of pokemon, and using their url, to create an array of promises
        // that will download those 20 pokemons
        const pokemonsResultPromise = pokemonsResult.map((pokemon) => axios.get(pokemon.url))


        // passing that array promise to axios.all
        const pokemonData = await axios.all(pokemonsResultPromise);//array of 20pokemon detail data

        // now iterrate of the data of each pokemon, and extract id, name, image, types
        const pokiListResults = pokemonData.map((pokeData)=>{
           const pokemon = pokeData.data;

           return {
            id:pokemon.id,
            name: pokemon.name, 
            image: (pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default : "hello", 
            tyes:pokemon.types
          }
        })
        // setPokemonList(pokiListResults);
        // setIsLoading(false)
        setPokemonListState((state)=>({
          ...state, 
          pokemonList:pokiListResults,
          isLoading:false
        }));
    }

    useEffect(()=>{
        dowoloadPokemons();
    },[pokemonListState.pokedex_url])

     
     return {pokemonListState, setPokemonListState}
}

export default usePokemonList