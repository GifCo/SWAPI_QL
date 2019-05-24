import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Link as RouterLink} from 'react-router-dom'
import { Paper, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@material-ui/core'
import Characters from '../images/characters.png'
import Planets from '../images/planet.jpg'
import Movies from '../images/movies.jpg'
import Species from '../images/species.jpg'
import Starships from '../images/starships.jpg'
import Vehicles from '../images/vehicle.jpg'
import '../App.css'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
    card: {
        maxWidth: 345,
        margin: '0 auto'
    },
    media: {
        height: 160
    },
    subTitle: {
        marginBottom: '4rem',
        marginTop: '3rem',
        textAlign: 'center'
    }
}))

const Home = (props) => {

    const cls = useStyles()
    console.log('The navigations props: ', props)

    return (
        <div className={cls.root} style={{color: 'white'}}>
            <Typography className={cls.subTitle} variant="h5" component="h2" color="textSecondary">Explore the the Star Wars Universe with the power of GraphQL!</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Characters}
                                title="Star Wars Characters"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Characters
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the characters of the Star Wars Universe. Everything from age to homeworld learn about your favorite character here.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/characters">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Planets}
                                title="Star Wars Planets"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Planets
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the planets of the Star Wars Universe. Everything you ever wanted to know about your favorite characters homeworlds.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/planets">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Species}
                                title="Star Wars Species"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Species
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the species of the Star Wars Universe. Learn about the different aliens you have come to love from the movies.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/species">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Starships}
                                title="Star Wars Spaceships"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Starships
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the Starshis and spacecraft of the Star Wars Universe. Everything from the Millennium Falcon to the X-Wing.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/starships">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Vehicles}
                                title="Star Wars Vehicles"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Vehicles
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the vehicles of the Star Wars Universe. Want to know the top speed of Lukes speeder? Find that and much more.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/vehicles">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={cls.card} elevation={6}>
                        <CardActionArea>
                            <CardMedia 
                                className={cls.media}
                                image={Movies}
                                title="Star Wars Movies"    
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Movies
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>
                                    Explore the movies of the Star Wars Universe. All you ever wanted to know about every film to grace the big screen.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link component={RouterLink} to="/movies">
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </Link>
                        </CardActions>    
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
export default Home