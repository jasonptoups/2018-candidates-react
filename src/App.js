import React, { Component } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import FilterContainer from './FilterContainer'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <FilterContainer />
      </div>
    )
  }
}

export default App
