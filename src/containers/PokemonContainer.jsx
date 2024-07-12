import React from "react"
import { useQuery } from "@apollo/client"
import Pokemon from "../components/Pokemon"
import { GET_POKEMONS } from "../graphql/get-pokemon"

const PokemonContainer = () => {
  const { data: { pokemons = [] } = {} } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  })

  return (
    <div className="containers">
        {pokemons && pokemons.map(pokemon =>
          <Pokemon key={pokemon.id} pokemon={pokemon}/>
        )}
    </div>
  )
}

export default PokemonContainer
