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

const MOVIES_QUERY = gql`
  query MoviesQuery {
    movies {
      title
      episode_id
      director
      producer
      release_date
    }
  }
`

const Movies = () => {

  const cls = useStyles()

  return (
    <div className={cls.root}>
      <Typography className={cls.title} variant="h4" component="h2" color="textSecondary">The Star Wars Films</Typography>
      <Paper elevation={4}>
        <Table className={cls.table}>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Episode</TableCell>
              <TableCell>Director</TableCell>
              <TableCell>Producer</TableCell>
              <TableCell>Release Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <Query query={MOVIES_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading.....</h4>
              if (error) return console.log('ERROR: ', error)
              console.log('The data: ', data)
              return ( 
                <>{data.movies.map(movie => {
                    return (
                      <TableRow key={movie.title} className={cls.tableRow}>
                        <TableCell scope="row">{movie.title}</TableCell>
                        <TableCell>{movie.episode_id}</TableCell>
                        <TableCell>{movie.director}</TableCell>
                        <TableCell>{movie.producer}</TableCell>
                        <TableCell>{movie.release_date}</TableCell>
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
export default Movies
