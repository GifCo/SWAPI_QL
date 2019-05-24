import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Planets from './components/Planets'
import './App.css'


function App() {
  return (
    <Router>
      <Navigation>
        <Route exact path='/' component={Home}/>
        <Route path='/characters' component={Home}/>
        <Route path='/planets' component={Planets}/>
      </Navigation>
    </Router>
  )
}

export default App
