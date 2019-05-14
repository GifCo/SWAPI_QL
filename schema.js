const axios = require('axios')
const {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = require('graphql')

/*  Types   */
//////////////

//Planets
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
      resolve: planet => planet.climate.split(',').map(item => item.trim()),
      description: 'The various climates of this planet'
    },
    terrain: {
      type: new GraphQLList(GraphQLString),
      resolve: planet => planet.terrain.split(',').map(item => item.trim()),
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

//Characters
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
      resolve: planet => {
        return axios
          .get(`${planet.homeworld}`)
          .then(res => res.data.name)
          .catch(err => console.log(err))
      }
    }
  })
})

//Movies

//Root Query

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    planets: {
      type: new GraphQLList(PlanetType),
      resolve(parent, args) {
        return axios
          .get('https://swapi.co/api/planets')
          .then(res => res.data.results)
      }
    },
    planet: {
      type: PlanetType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://swapi.co/api/planets/${args.id}`)
          .then(res => res.data)
      }
    },
    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args) {
        return axios
          .get('https://swapi.co/api/people')
          .then(res => {
            const count = Math.ceil(res.data.count / 10)
            console.log('The count: ', count)
            let pages = []
            for (let i = 1; i <= count; i++) {
              console.log('adding page: ', i)
              pages.push(axios.get(`https://swapi.co/api/people/?page=${i}`))
            }
            return Promise.all(pages)
          })
          .then(res => {
            const resultData = res
              .map(page => page.data.results)
              .reduce((prevm, curr) => prevm.concat(curr))

            console.log('The results : ', resultData[1])
            return resultData
          })
          .catch(err => console.log('Err: ', err))
      }
    },
    character: {
      type: CharacterType,
      args: {
        id: { type: GraphQLInt }
      },
      resolve(parent, args) {
        return axios
          .get(`https://swapi.co/api/people/${args.id}`)
          .then(res => res.data)
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
