const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//Character Type definition for GraphQL

const CharacterType = new GraphQLObjectType({
    name: 'Character',
    fields: () => ({
        name: { type: GraphQLString, description: 'Name of character' },
        height: { type: GraphQLString, description: 'Height in cm' },
        mass: { type: GraphQLString, description: 'Weight in kg' },
        hair_color: {
            type: GraphQLString,
            description: 'Characters hair color if any'
        },
        skin_color: { type: GraphQLString },
        eye_color: { type: GraphQLString },
        birth_year: { type: GraphQLString },
        gender: { type: GraphQLString },
        homeworld: {
            type: GraphQLString,
            resolve: character => {
                return axios
                    .get(`${character.homeworld}`)
                    .then(res => res.data.name)
                    .catch(err => console.log(err))
            }
        },
        species: {
            type: GraphQLString,
            resolve: character => {
                return axios
                    .get(`${character.species}`)
                    .then(res => res.data.name)
                    .catch(err => console.log(err))
            }
        },
        films: { type: GraphQLList(GraphQLString) },
        vehicles: { type: GraphQLList(GraphQLString) },
        starships: { type: GraphQLList(GraphQLString) }
    })
})

module.exports = CharacterType
