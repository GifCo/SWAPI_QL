const axios = require('axios')
const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = require('graphql')
const CharacterType = require('./types/CharacterType')
const PlanetType = require('./types/PlanetType')
const MovieType = require('./types/MovieType')
const SpeciesType = require('./types/SpeciesType')
const StarshipType = require('./types/StarshipType')
const VehicleType = require('./types/VehicleType')

//Root Query

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        planets: {
            type: new GraphQLList(PlanetType),
            args: {
                limit: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get('https://swapi.co/api/planets')
                    .then(res => {
                        const count = Math.ceil(res.data.count / 10)
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/planets/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        //combined results are in 2d array need to flatten
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
                        return resultData.splice(
                            0,
                            args.limit ? args.limit : resultData.length
                        )
                    })
                    .catch(err => console.log('Err: ', err))
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
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/people/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
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
        },
        movies: {
            type: new GraphQLList(MovieType),
            resolve(parent, args) {
                return axios
                    .get('https://swapi.co/api/films')
                    .then(res => {
                        const count = Math.ceil(res.data.count / 10)
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/films/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        //combined results are in 2d array need to flatten
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
                        return resultData
                    })
                    .catch(err => console.log('Err: ', err))
            }
        },
        movie: {
            type: MovieType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://swapi.co/api/films/${args.id}`)
                    .then(res => res.data)
            }
        },
        species: {
            type: new GraphQLList(SpeciesType),
            resolve(parent, args) {
                return axios
                    .get('https://swapi.co/api/species')
                    .then(res => {
                        const count = Math.ceil(res.data.count / 10)
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/species/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        //combined results are in 2d array need to flatten
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
                        return resultData
                    })
                    .catch(err => console.log('Err: ', err))
            }
        },
        single_species: {
            type: SpeciesType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://swapi.co/api/species/${args.id}`)
                    .then(res => res.data)
            }
        },
        starships: {
            type: new GraphQLList(StarshipType),
            resolve(parent, args) {
                return axios
                    .get('https://swapi.co/api/starships')
                    .then(res => {
                        const count = Math.ceil(res.data.count / 10)
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/starships/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        //combined results are in 2d array need to flatten
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
                        return resultData
                    })
                    .catch(err => console.log('Err: ', err))
            }
        },
        starship: {
            type: StarshipType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://swapi.co/api/starships/${args.id}`)
                    .then(res => res.data)
            }
        },
        vehicles: {
            type: new GraphQLList(VehicleType),
            resolve(parent, args) {
                return axios
                    .get('https://swapi.co/api/vehicles')
                    .then(res => {
                        const count = Math.ceil(res.data.count / 10)
                        let pages = []
                        for (let i = 1; i <= count; i++) {
                            pages.push(
                                axios.get(
                                    `https://swapi.co/api/vehicles/?page=${i}`
                                )
                            )
                        }
                        return Promise.all(pages)
                    })
                    .then(res => {
                        //combined results are in 2d array need to flatten
                        const resultData = res
                            .map(page => page.data.results)
                            .reduce((prev, curr) => prev.concat(curr))
                        return resultData
                    })
                    .catch(err => console.log('Err: ', err))
            }
        },
        vehicle: {
            type: VehicleType,
            args: {
                id: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios
                    .get(`https://swapi.co/api/vehicles/${args.id}`)
                    .then(res => res.data)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
