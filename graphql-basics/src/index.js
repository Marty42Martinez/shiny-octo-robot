import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`
// Resolvers
const resolvers = {
    Query: {
        title() {
            return 'DingleHopper'
        },
        price() {
            return 42.42
        },
        releaseYear() {
            return 2020
        },
        rating() {
            return null
        },
        inStock() {
            return true
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log("There's only one life-form as intelligent as me within thirty parsecs of here and that's me.")
})