import React, {Component} from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'

class FilterContainer extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className='columns'>
          <div className='column is-one-fifth'>
            <FilterBar className='padding-left' />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer
