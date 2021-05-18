import { ApolloServer } from 'apollo-server-express'
import dotenv from 'dotenv'
import express from 'express'
import PlaceholderAPI from './datasources/PlaceholderAPI'
import resolvers from './resolvers'
import typeDefs from './typeDefs'

dotenv.config()
const app = express()
const port = process.env.PORT || 7714

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    PlaceholderAPI: new PlaceholderAPI(),
  }),
})
server.applyMiddleware({
  app,
  path: process.env.NODE_ENV === 'production' ? '/' : '/graphql',
})

app.listen({ port }, () =>
  console.log(
    `server started on http://localhost${port == 80 ? '' : ':' + port}${
      server.graphqlPath
    }`,
  ),
)
