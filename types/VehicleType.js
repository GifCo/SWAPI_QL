const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql')

//Vehicles Type definition for GraphQL

const VehicleType = new GraphQLObjectType({
    name: 'Vehicle',
    fields: () => ({
        name: { type: GraphQLString },
        model: { type: GraphQLString },
        manufacturer: { type: GraphQLString },
        cost_in_credits: {
            type: GraphQLString,
            description: 'Cost in credits'
        },
        length: { type: GraphQLString, description: 'Length in meters' },
        max_atmosphering_speed: {
            type: GraphQLString,
            description: 'Speed in KM/H'
        },
        crew: { type: GraphQLString, description: 'Max number of crew' },
        passengers: {
            type: GraphQLString,
            description: 'Max number of passengers'
        },
        cargo_capacity: {
            type: GraphQLString,
            description: 'Max weight of cargo in Kg'
        },
        consumables: { type: GraphQLString, description: 'Max operating time' },
        vehicle_class: { type: GraphQLString, description: 'Type of vehicle' },
        pilots: {
            type: GraphQLList(GraphQLString),
            description: 'Pilots that have operated this craft'
        },
        films: {
            type: GraphQLList(GraphQLString),
            description: 'films this vehicle apears in'
        }
    })
})

module.exports = VehicleType
