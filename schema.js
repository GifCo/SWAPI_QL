const {GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLSchema, Gra} = require('graphql')
const axios = require('axios')

/*  Types   */
//////////////

//Planets
const PlanetType = new GraphQLObjectType({
    name: 'Planet',
    fields: () => ({
         name: {type: GraphQLString},
         population: {type: GraphQLString},
         climate: {type: GraphQLString},
         terrain: {type: GraphQLString},
         rotation_period: {type: GraphQLString},
         orbital_period: {type: GraphQLString},
         diameter: {type: GraphQLString},
         gravity: {type: GraphQLString},
         residents: {type : GraphQLList(GraphQLString)}

    })
})

//Characters
const CharacterType = new GraphQLObjectType({
    name: "Character",
    fields: () => ({
        name: {type: GraphQLString}
    })
})

//Movies


//Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        planets : {
            type: new GraphQLList(PlanetType),
            resolve(parent, args){
                return axios.get('https://swapi.co/api/planets')
                    .then( res => res.data.results)
            }
        },
        planet : {
            type: PlanetType,
            args: {
                id: {type: GraphQLInt}
            },
            resolve(parent, args){
                return axios.get(`https://swapi.co/api/planets/${args.id}`)
                    .then( res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})