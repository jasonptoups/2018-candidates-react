import React, {Component} from 'react'
import NavBar from './NavBar'
import FilterBar from './FilterBar'
import CandidateCard from './CandidateCard'
import axios from 'axios'
import _ from 'lodash'
import {clientUrl} from './constants'

class FilterContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      candidates: [],
      gender: [],
      professions: [],
      ethnicity: [],
      sexuality: [],
      filteredCandidates: []
    }
    this.filterClicked = this.filterClicked.bind(this)
    this.search = this.search.bind(this)
    this.addFilter = this.addFilter.bind(this)
    this.filterCandidates = this.filterCandidates.bind(this)
    this.refreshPage = this.refreshPage.bind(this)
  }

  filterClicked (event) {
    let text = event.target.innerText
    const genders = ['Male', 'Female']
    const professions = ['Educator', 'Veteran', 'Law', 'Public Servant', 'Business', 'Politician', 'Academic', 'STEM']
    const ethnicities = ['Hispanic', 'East Asian', 'South Asian', 'African American', 'Mixed', 'White']
    const sexualities = ['LGBT', 'Straight']

    if (genders.includes(text)) this.addFilter(text, 'gender')
    if (professions.includes(text)) this.addFilter(text, 'professions')
    if (ethnicities.includes(text)) this.addFilter(text, 'ethnicity')
    if (sexualities.includes(text)) this.addFilter(text, 'sexuality')
  }

  addFilter (text, filter) {
    let filterArray = this.state[filter]
    this.search(text, filterArray) ? _.pull(filterArray, text) : filterArray.push(text)
    this.setState({[filter]: filterArray})
    this.filterCandidates()
  }

  search (text, array) {
    return array.indexOf(text) > -1
  }

  // This filterCandidates method is very messy because of how I structured the data on the backend
  // The backend has some data stored as booleans and other data stored as strings,
  // so the filtering on each is different. I should refactor to make the backend more consistent
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
    this.state.professions.length === 0 ? secondFilter = firstFilter : secondFilter = []
    for (let i = 0; i < this.state.professions.length; i++) {
      let target = this.state.professions[i]
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

  refreshPage () {
    axios.get(clientUrl).then(res => {
      this.setState({candidates: res.data})
    })
  }

  componentDidMount () {
    axios.get(clientUrl).then(res => {
      this.setState({candidates: res.data})
    })
  }

  render () {
    let candidates = this.state.candidates
    let filteredCandidates = this.state.filteredCandidates
    let showAll
    let filtersApplied = this.state.gender.length !== 0 || this.state.professions.length !== 0 || this.state.ethnicity.length !== 0 || this.state.sexuality.length !== 0
    filtersApplied ? showAll = false : showAll = true
    return (
      <div>
        <NavBar refreshPage={this.refreshPage} />
        <div className='columns'>
          <div className='column is-one-fifth'>
            <FilterBar className='padding-left' filterClicked={this.filterClicked} />
          </div>
          <div className='flex-wrap'>
            {filteredCandidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} refreshPage={this.refreshPage} />)}
            {!candidates && <p>Loading candidates please wait</p>}
            {candidates && showAll && candidates.map((candidate, index) => <CandidateCard key={index} candidate={candidate} refreshPage={this.refreshPage} />)}
          </div>
        </div>
      </div>
    )
  }
}

export default FilterContainer
