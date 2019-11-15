import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './styles/main.scss'

import Header from './features/Header'

import SearchView from './views/SearchView'
import CssTricksView from './views/CssTricksView'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route path="/search">
              <SearchView />
            </Route>
            <Route path="/css-tricks">
              <CssTricksView />
            </Route>
            <Redirect exact from="/" to="/search" />
          </Switch>
        </main>
      </div>
    </Router>
  )
}

export default App
