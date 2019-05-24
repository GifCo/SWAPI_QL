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

const CHARACTERS_QUERY = gql`
  query CharactersQuery {
    characters {
      name
      birth_year
      species
      homeworld
      gender
    }
  }
`

const Characters = () => {

  const cls = useStyles()

  return (
    <div className={cls.root}>
      <Typography className={cls.title} variant="h4" component="h2" color="textSecondary">The Characters of Star Wars</Typography>
      <Paper elevation={4}>
        <Table className={cls.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>age</TableCell>
              <TableCell>Species</TableCell>
              <TableCell>Home Planet</TableCell>
              <TableCell>Gender</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <Query query={CHARACTERS_QUERY}>
            {({ loading, error, data }) => {
              if (loading) return <h4>Loading.....</h4>
              if (error) return console.log('ERROR: ', error)
              console.log('The data: ', data)
              return ( 
                <>{data.characters.map(character => {
                    return (
                      <TableRow key={character.name} className={cls.tableRow}>
                        <TableCell scope="row">{character.name}</TableCell>
                        <TableCell>{character.birth_year}</TableCell>
                        <TableCell>{character.species}</TableCell>
                        <TableCell>{character.homeworld}</TableCell>
                        <TableCell>{character.gender}</TableCell>
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
export default Characters
