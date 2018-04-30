import React, {Component} from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'
import CandidateCard from './CandidateCard'
import axios from 'axios'
import _ from 'lodash'
// import clientUrl from './constants'

class FilterContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      candidates: [],
      gender: [],
      profession: [],
      ethnicity: [],
      sexuality: []
    }
    this.filterClicked = this.filterClicked.bind(this)
    this.search = this.search.bind(this)
    this.addFilter = this.addFilter.bind(this)
  }

  filterClicked (event) {
    let text = event.target.innerText
    if (text === 'Male' || text === 'Female') this.addFilter(text, 'gender')
    if (text === 'Educator' || text === 'Veteran' || text === 'Law' || text === 'Public Servant' || text === 'Business' || text === 'Politician' || text === 'Academic' || text === 'STEM') this.addFilter(text, 'profession')
    if (text === 'White' || text === 'Hispanic' || text === 'East Asian' || text === 'South Asian' || text === 'African American' || text === 'Mixed') this.addFilter(text, 'ethnicity')
    if (text === 'LGBT' || text === 'Straight') this.addFilter(text, 'sexuality')
  }

  addFilter (text, filter) {
    let filterArray = this.state[filter]
    this.search(text, filterArray) ? _.pull(filterArray, text) : filterArray.push(text)
    this.setState({[filter]: filterArray})
    console.log('addFilter', this.state)
  }

  search (text, array) {
    return array.indexOf(text) > -1
  }

  componentDidMount () {
    let clientUrl = 'https://candidates-2018.herokuapp.com/api/candidates/'
    axios.get(clientUrl).then(res => {
      this.setState({candidates: res.data})
    })
  }

  render () {
    let candidates = this.state.candidates
    return (
      <div>
        <NavBar />
        <div className='columns'>
          <div className='column is-one-fifth'>
            <FilterBar className='padding-left' filterClicked={this.filterClicked} />
          </div>
          <div className='flex-wrap'>
            {candidates && candidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer
