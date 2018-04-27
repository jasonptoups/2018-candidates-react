import React, {Component} from 'react'
import FilterItem from './FilterItem'

class FilterBar extends Component {
  render () {
    return (
      <aside class='menu'>
        <p class='menu-label'>Gender</p>
        <ul class='menu-list'>
          <FilterItem filter='Male' />
          <FilterItem filter='Female'>Female</FilterItem>
        </ul>
        <p class='menu-label'>Professions</p>
        <ul class='menu-list'>
          <FilterItem filter='Educator' />
          <FilterItem filter='Veteran' />
          <FilterItem filter='Law' />
          <FilterItem filter='Public Servant' />
          <FilterItem filter='Business' />
          <FilterItem filter='Politician' />
          <FilterItem filter='Academic' />
          <FilterItem filter='STEM' />
        </ul>
        <p class='menu-label'>Ethnicity</p>
        <ul class='menu-list'>
          <FilterItem filter='Hispanic' />
          <FilterItem filter='East Asian' />
          <FilterItem filter='South Asian' />
          <FilterItem filter='African American' />
          <FilterItem filter='Mixed' />
          <FilterItem filter='White' />
        </ul>
        <p class='menu-label'>Sexuality</p>
        <ul class='menu-list'>
          <FilterItem filter='LGBT' />
          <FilterItem filter='Straight' />
        </ul>
      </aside>
    )
  }
}

export default FilterBar
