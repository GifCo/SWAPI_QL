const axios = require('axios')
const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//Species Type definition for GraphQL

const SpeciesType = new GraphQLObjectType({
    name: 'Species',
    fields: () => ({
        name: { type: GraphQLString, description: 'Name of Species' },
        classification: { type: GraphQLString, description: 'Type of species' },
        designation: { type: GraphQLString },
        average_height: { type: GraphQLString, description: 'Height in cm' },
        hair_colors: {
            type: GraphQLList(GraphQLString),
            description: 'Characters hair color if any'
        },
        skin_colors: { type: GraphQLString },
        eye_color: { type: GraphQLList(GraphQLString) },
        average_lifespan: { type: GraphQLString },
        gender: { type: GraphQLString },
        homeworld: {
            type: GraphQLString,
            resolve: planet => {
                return axios
                    .get(`${planet.homeworld}`)
                    .then(res => res.data.name)
                    .catch(err => console.log(err))
            }
        },
        people: {
            type: GraphQLList(GraphQLString),
            description: 'Characters that are of this species'
        },
        films: {
            type: GraphQLList(GraphQLString),
            description: 'filims this species has appeared in.'
        }
    })
})

module.exports = SpeciesType
