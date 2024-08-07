/* eslint-disable react/prop-types */
import React from "react"

const Pokemon = ({ pokemon }) => {
  return (
    <div className="poekemon">
      <div className="pokemon__name">
        <p>{pokemon.name}</p>
      </div>
      <div className="pokemon__meta">
        <span>{pokemon.maxHP}</span>
        <span>{pokemon.maxCP}</span>
      </div>
      <div className="pokemon__image">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="pokemon__attacks">
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <span key={`${attack.name}-${attack.damage}`}>{attack.name}</span>
        ))}
      </div>
    </div>
  )
}
export default Pokemon
