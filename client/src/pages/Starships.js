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

const STARSHIPS_QUERY = gql`
  query StarshipsQuery {
    starships {
      name
      manufacturer
      starship_class
      cost_in_credits
      passengers
      cargo_capacity
    }
  }
`

const Starships = () => {

  const cls = useStyles()

  return (
    <div className={cls.root}>
      <Typography className={cls.title} variant="h4" component="h2" color="textSecondary">The Planets of Star Wars</Typography>
      <Paper elevation={4}>
        <Table className={cls.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Manufacturer</TableCell>
              <TableCell>Class</TableCell>
              <TableCell>Cost</TableCell>
              <TableCell>Max Passengers</TableCell>
              <TableCell>Cargo Capacity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <Query query={STARSHIPS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading.....</h4>
              if (error) return console.log('ERROR: ', error)
              console.log('The data: ', data)
              return ( 
                <>{data.starships.map(starship => {
                    return (
                      <TableRow key={starship.name} className={cls.tableRow}>
                        <TableCell scope="row">{starship.name}</TableCell>
                        <TableCell>{starship.manufacturer}</TableCell>
                        <TableCell>{starship.starship_class}</TableCell>
                        <TableCell>{starship.cost_in_credits}</TableCell>
                        <TableCell>{starship.passengers}</TableCell>
                        <TableCell>{starship.cargo_capacity}</TableCell>
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
export default Starships
