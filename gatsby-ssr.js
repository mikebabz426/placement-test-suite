/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"
import { ApolloProvider } from "@apollo/client"
import { client } from "./src/components/apollo/client"
import { UserProvider } from "./src/UserContext"

export const wrapRootElement = ({ element }) => {
  return (
    <UserProvider>
      <Auth0Provider
        domain={`${process.env.AUTH0_DOMAIN}`}
        clientId={`${process.env.AUTH0_CLIENTID}`}
        redirectUri={`${process.env.AUTH0_CALLBACK}`}
      >
        <ApolloProvider client={client}>{element}</ApolloProvider>
      </Auth0Provider>
    </UserProvider>
  )
}
