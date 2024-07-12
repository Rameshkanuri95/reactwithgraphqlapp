/* eslint-disable no-unused-vars */
import { useState } from "react"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import PokemonContainer from "./containers/PokemonContainer"

function App() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
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
