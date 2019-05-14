import React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const PLANETS_QUERY = gql`
  query PlanetsQuery {
    planets {
      name
      climate
      terrain
    }
  }
`

const Planets = () => {
  return (
    <div>
      <h2>Planets:</h2>
      <Query query={PLANETS_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <h4>Loading.....</h4>
          if (error) console.log('ERROR: ', error)
          console.log('Data: ', data)

          return (
            <>
              {data.planets.map(planet => {
                return (
                  <div key={planet.name}>
                    <h3>{planet.name}:</h3> has a {planet.climate} climate.
                    <p>And has {planet.terrain.map(i => ` ${i} `)} terrain</p>
                  </div>
                )
              })}
            </>
          )
        }}
      </Query>
    </div>
  )
}
export default Planets
