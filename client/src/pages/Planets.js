import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {Table, TableBody, TableCell, TableHead, TableRow, Paper, Typography} from '@material-ui/core'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import '../App.css'

const useStyles = makeStyles( theme => ({
  root: {
    [theme.breakpoints.up('lg')]: {
        paddingLeft: '3em',
        paddingRight: '3em',
    },
  },
  paper: {
    overflowX: 'auto',
    width: '100%'
  },
  table: {
    minWidth: 650
  },
  tableRow: {
    "&:hover" : {
      background: '#c8e6c9'
    }
  },
  title: {
    textAlign: 'center',
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(5)
  }
}))

const PLANETS_QUERY = gql`
  query PlanetsQuery {
    planets {
      name
      population
      climate
      rotation_period
      orbital_period
    }
  }
`

const Planets = () => {

  const cls = useStyles()

  return (
    <div className={cls.root}>
      <Typography className={cls.title} variant="h4" component="h2" color="textSecondary">The Planets of Star Wars</Typography>
      <Paper elevation={4}>
        <Table className={cls.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Day Length</TableCell>
              <TableCell>Year Length</TableCell>
              <TableCell>Climate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <Query query={PLANETS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading.....</h4>
              if (error) return console.log('ERROR: ', error)
              console.log('The data: ', data)
              return ( 
                <>{data.planets.map(planet => {
                    return (
                      <TableRow key={planet.name} className={cls.tableRow}>
                        <TableCell scope="row">{planet.name}</TableCell>
                        <TableCell>{planet.population}</TableCell>
                        <TableCell>{planet.rotation_period}</TableCell>
                        <TableCell>{planet.orbital_period}</TableCell>
                        <TableCell>{planet.climate.map( cli => `${cli} `)}</TableCell>
                      </TableRow>
                    )
                  })}
                </>
              )
      
            }}
          </Query>
          </TableBody>
        </Table>
      </Paper>
    </div>
  )
}
export default Planets
