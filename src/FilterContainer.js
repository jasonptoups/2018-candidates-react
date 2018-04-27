import React, {Component} from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'
import CandidateCard from './CandidateCard'

class FilterContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      candidates: []
    }
  }

  componentDidMount () {
  }

  render () {
    return (
      <div>
        <NavBar />
        <div className='columns'>
          <div className='column is-one-fifth'>
            <FilterBar className='padding-left' />
          </div>
          <div className='flex-wrap'>
            <CandidateCard />
          </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer
