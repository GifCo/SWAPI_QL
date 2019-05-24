import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Face from '@material-ui/icons/Face';
import Motorcycle from '@material-ui/icons/Motorcycle';
import Language from '@material-ui/icons/Language';
import Movie from '@material-ui/icons/Movie';
import RecentActors from '@material-ui/icons/RecentActors';
import Home from '@material-ui/icons/Home';
import Help from '@material-ui/icons/Help';
import Starship from '../images/rocket-icon.svg'

const drawerWidth = 240

const useStyles = makeStyles( (theme) => { 
  return   ({
    root: {
      display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.easeIn,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      title: {
        flexGrow: 1,
        textAlign: 'center'
      },
      menuButton: {
        marginRight: theme.spacing(0),
      },
      hide: {
        display: 'none',
      },
      drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
      },
      content: {
        flexGrow: 1,
        padding: theme.spacing(3)
      }
})})


const Navigation = (props) => {

    const cls = useStyles()
    const [open, setOpen] = React.useState(false)

    function handleOpen() {
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
    }



    return (
        <div className={cls.root}>
            <AppBar position='fixed' className={`${cls.appBar} ${open ? cls.appBarShift : ''}`}>
                <Toolbar>
                    <IconButton 
                        color="inherit" 
                        onClick={handleOpen} 
                        edge="start" 
                        className={`${cls.menuButton} ${open ? cls.hide : ''}`}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={cls.title}>SWAPI QL</Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
                variant="permanent" 
                className={`${cls.drawer} ${open ? cls.drawerOpen : cls.drawerClose}`}
                classes={{paper: `${open ? cls.drawerOpen : cls.drawerClose}`}}
                open={open}
            >
                <div className={cls.toolbar}>
                    <IconButton onClick={handleClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button key={'1'}>
                    <Link component={RouterLink} to="/"><ListItemIcon><Home/> </ListItemIcon></Link>
                        <ListItemText primary='Home'/>
                    </ListItem>
                    <ListItem button key={'2'}>
                        <ListItemIcon><Face containerElement={<RouterLink to='/planets' />}/></ListItemIcon>
                        <ListItemText primary='Characters'/>
                    </ListItem>
                    <ListItem button key={'3'}>
                    <ListItemIcon><Link component={RouterLink} to="/planets"><Language/></Link></ListItemIcon>
                        <ListItemText primary='Planets'/>
                    </ListItem>
                    <ListItem button key={'4'}>
                        <ListItemIcon><Movie/></ListItemIcon>
                        <ListItemText primary='Movies'/>
                    </ListItem>
                    <ListItem button key={'5'}>
                        <ListItemIcon><RecentActors/></ListItemIcon>
                        <ListItemText primary='Species'/>
                    </ListItem>
                    <ListItem button key={'6'}>
                        <ListItemIcon><img src={Starship}/></ListItemIcon>
                        <ListItemText primary='Star Ships'/>
                    </ListItem>
                    <ListItem button key={'7'}>
                        <ListItemIcon><Motorcycle/></ListItemIcon>
                        <ListItemText primary='Vehicles'/>
                    </ListItem>
                    <ListItem button key={'8'}>
                        <ListItemIcon><Help/></ListItemIcon>
                        <ListItemText primary='About This Site'/>
                    </ListItem>
                </List>
            </Drawer>
            <main className={cls.content}>
              <div className={cls.toolbar} />
              {props.children}
            </main>
        </div>
    )
}

export default Navigation