const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//Movie Type definition for GraphQL

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
        title: { type: GraphQLString, description: 'Title of the movie' },
        episode_id: {
            type: GraphQLString,
            description: 'Episode number in the series'
        },
        opening_crawl: {
            type: GraphQLString,
            description: 'The intro text of the movie.'
        },
        director: {
            type: GraphQLString,
            description: 'Director/s of the movie'
        },
        producer: { type: GraphQLString, description: 'Producers' },
        release_date: {
            type: GraphQLString,
            description: 'Release date of the movie.'
        },
        characters: {
            type: GraphQLList(GraphQLString),
            description: 'Characters appearing in this movie.'
        },
        planets: {
            type: GraphQLList(GraphQLString),
            description: 'planets appearing in this movie.'
        },
        species: {
            type: GraphQLList(GraphQLString),
            description: 'species appearing in this movie.'
        },
        starships: {
            type: GraphQLList(GraphQLString),
            description: 'starships appearing in this movie.'
        },
        vehicles: {
            type: GraphQLList(GraphQLString),
            description: 'vehicles appearing in this movie.'
        }
    })
})

module.exports = MovieType
