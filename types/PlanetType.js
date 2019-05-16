const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = require('graphql')

//PlanetType definition for GraphQL query

const PlanetType = new GraphQLObjectType({
    name: 'Planet',
    description: 'The planet resource from SWAPI',
    fields: () => ({
        name: {
            type: GraphQLString,
            description: 'Name of the planet.'
        },
        population: { type: GraphQLString },
        climate: {
            type: new GraphQLList(GraphQLString),
            resolve: planet =>
                planet.climate.split(',').map(item => item.trim()),
            description: 'The various climates of this planet'
        },
        terrain: {
            type: new GraphQLList(GraphQLString),
            resolve: planet =>
                planet.terrain.split(',').map(item => item.trim()),
            description: 'The various climates of the planet'
        },
        rotation_period: {
            type: GraphQLInt,
            resolve: planet => parseInt(planet.rotation_period),
            description: 'Time in hours it takes for planet rotation.'
        },
        orbital_period: {
            type: GraphQLInt,
            resolve: planet => parseInt(planet.orbital_period),
            description: 'Time in days it takes the planet to orbit its sun'
        },
        diameter: {
            type: GraphQLInt,
            resolve: planet => parseInt(planet.diameter),
            description: 'The diameter in kilimeters'
        },
        gravity: { type: GraphQLString },
        residents: { type: GraphQLList(GraphQLString) }
    })
})

module.exports = PlanetType
