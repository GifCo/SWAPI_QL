import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Planets from './pages/Planets'
import Characters from './pages/Characters'
import Species from './pages/Species'
import Movies from './pages/Movies'
import Starships from './pages/Starships'
import Vehicles from './pages/Vehicles'
import './App.css'


function App() {
  return (
    <Router>
      <Navigation>
        <Route exact path='/' component={Home}/>
        <Route path='/characters' component={Characters}/>
        <Route path='/planets' component={Planets}/>
        <Route path='/species' component={Species}/>
        <Route path='/movies' component={Movies}/>
        <Route path='/starships' component={Starships}/>
        <Route path='/vehicles' component={Vehicles}/>
      </Navigation>
    </Router>
  )
}

export default App
