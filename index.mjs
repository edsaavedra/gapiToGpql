import { gql, ApolloServer } from 'apollo-server'
import gapiToGraphQL from 'gapi-to-graphql'
import YouTubeAPI from 'gapi-to-graphql/google_apis/youtube-v3.js'

console.info(`%c⛔`, 'background: #abc123; color: #000', gapiToGraphQL);
const { schema, resolvers } = gapiToGraphQL({ gapiAsJsonSchema: YouTubeAPI })
const server = new ApolloServer({
  typeDefs: gql`
    ${schema}
  `,
  resolvers
})

server.listen({ port: 3031 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})