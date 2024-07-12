/* eslint-disable no-unused-vars */
import { useState } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import PokemonContainer from "./containers/PokemonContainer"
import './Styles.css'
function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon.now.sh",
    cache: new InMemoryCache(),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
    },
    credentials: "omit",
    mode: "no-cors",
  })

  return (
    <ApolloProvider client={client}>
      <main>
        <PokemonContainer />
      </main>
    </ApolloProvider>
  )
}

export default App
