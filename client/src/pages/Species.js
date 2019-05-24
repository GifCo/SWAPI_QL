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

const SPECIES_QUERY = gql`
  query SpeciesQuery {
    species {
      name
      designation
      skin_colors
      average_lifespan
      average_height
    }
  }
`

const Species = () => {

  const cls = useStyles()

  return (
    <div className={cls.root}>
      <Typography className={cls.title} variant="h4" component="h2" color="textSecondary">The Species of Star Wars</Typography>
      <Paper elevation={4}>
        <Table className={cls.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Designation</TableCell>
              <TableCell>Skin Colors</TableCell>
              <TableCell>Average Lifespan</TableCell>
              <TableCell>Average Height</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <Query query={SPECIES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading.....</h4>
              if (error) return console.log('ERROR: ', error)
              console.log('The data: ', data)
              return ( 
                <>{data.species.map(spec => {
                    return (
                      <TableRow key={spec.name} className={cls.tableRow}>
                        <TableCell scope="row">{spec.name}</TableCell>
                        <TableCell>{spec.designation}</TableCell>
                        <TableCell>{spec.skin_colors}</TableCell>
                        <TableCell>{spec.average_lifespan}</TableCell>
                        <TableCell>{spec.average_height}</TableCell>
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
export default Species
