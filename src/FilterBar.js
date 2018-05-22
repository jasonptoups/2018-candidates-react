import React, {Component} from 'react'
import FilterItem from './FilterItem'

const genderFilters = ['Male', 'Female']
const professionFilters = ['Educator', 'Veteran', 'Law', 'Public Servant', 'Business', 'Politician', 'Academic', 'STEM']
const ethnicityFilters = ['Hispanic', 'East Asian', 'South Asian', 'African American', 'Mixed', 'White']
const sexualityFilters = ['LGBT', 'Straight']

class FilterBar extends Component {
  render () {
    return (
      <aside className='menu filter-bar'>
        <p className='menu-label'>Gender</p>
        <ul className='menu-list'>
          {genderFilters.map((filter, index) => <FilterItem filter={filter} key={index} filterClicked={this.props.filterClicked} />)}
        </ul>
        <p className='menu-label'>Professions</p>
        <ul className='menu-list'>
          {professionFilters.map((filter, index) => <FilterItem filter={filter} key={index} filterClicked={this.props.filterClicked} />)}
        </ul>
        <p className='menu-label'>Ethnicity</p>
        <ul className='menu-list'>
          {ethnicityFilters.map((filter, index) => <FilterItem filter={filter} key={index} filterClicked={this.props.filterClicked} />)}
        </ul>
        <p className='menu-label'>Sexuality</p>
        <ul className='menu-list'>
          {sexualityFilters.map((filter, index) => <FilterItem filter={filter} key={index} filterClicked={this.props.filterClicked} />)}
        </ul>
      </aside>
    )
  }
}

export default FilterBar
