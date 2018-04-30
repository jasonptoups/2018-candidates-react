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
      sexuality: [],
      filteredCandidates: []
    }
    this.filterClicked = this.filterClicked.bind(this)
    this.search = this.search.bind(this)
    this.addFilter = this.addFilter.bind(this)
    this.filterCandidates = this.filterCandidates.bind(this)
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
    this.filterCandidates()
  }

  search (text, array) {
    return array.indexOf(text) > -1
  }

  filterCandidates () {
    let firstFilter
    let secondFilter
    let thirdFilter
    let fourthFilter
    this.state.gender.length === 0 ? firstFilter = this.state.candidates : firstFilter = []
    for (let i = 0; i < this.state.gender.length; i++) {
      let target = this.state.gender[i]
      let add = this.state.candidates.filter(candidate => candidate.gender === target)
      firstFilter.push(...add)
    }
    this.state.profession.length === 0 ? secondFilter = firstFilter : secondFilter = []
    for (let i = 0; i < this.state.profession.length; i++) {
      let target = this.state.profession[i]
      let add = firstFilter.filter(candidate => candidate.professions[target] === true)
      secondFilter.push(...add)
    }
    this.state.ethnicity.length === 0 ? thirdFilter = secondFilter : thirdFilter = []
    for (let i = 0; i < this.state.ethnicity.length; i++) {
      let target = this.state.ethnicity[i]
      let add = secondFilter.filter(candidate => candidate.ethnicities[target] === true)
      thirdFilter.push(...add)
    }
    this.state.sexuality.length === 0 ? fourthFilter = thirdFilter : fourthFilter = []
    for (let i = 0; i < this.state.sexuality.length; i++) {
      let target = this.state.sexuality[i]
      let add = thirdFilter.filter(candidate => candidate.sexuality === target)
      fourthFilter.push(...add)
    }
    fourthFilter = _.uniqWith(fourthFilter, _.isEqual)
    this.setState({filteredCandidates: fourthFilter})
  }

  componentDidMount () {
    let clientUrl = 'https://candidates-2018.herokuapp.com/api/candidates/'
    axios.get(clientUrl).then(res => {
      this.setState({candidates: res.data})
    })
  }

  render () {
    console.log('render', this.state)
    let candidates = this.state.candidates
    let filteredCandidates = this.state.filteredCandidates
    let showAll
    filteredCandidates.length === 0 ? showAll = true : showAll = false
    return (
      <div>
        <NavBar />
        <div className='columns'>
          <div className='column is-one-fifth'>
            <FilterBar className='padding-left' filterClicked={this.filterClicked} />
          </div>
          <div className='flex-wrap'>
            {filteredCandidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} />)}
            {candidates && showAll && candidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer
