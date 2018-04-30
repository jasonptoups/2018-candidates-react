import React, {Component} from 'react'
import FilterItem from './FilterItem'

class FilterBar extends Component {
  render () {
    return (
      <aside className='menu'>
        <p className='menu-label'>Gender</p>
        <ul className='menu-list'>
          <FilterItem filter='Male' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Female' filterClicked={this.props.filterClicked} >Female</FilterItem>
        </ul>
        <p className='menu-label'>Professions</p>
        <ul className='menu-list'>
          <FilterItem filter='Educator' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Veteran' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Law' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Public Servant' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Business' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Politician' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Academic' filterClicked={this.props.filterClicked} />
          <FilterItem filter='STEM' filterClicked={this.props.filterClicked} />
        </ul>
        <p className='menu-label'>Ethnicity</p>
        <ul className='menu-list'>
          <FilterItem filter='Hispanic' filterClicked={this.props.filterClicked} />
          <FilterItem filter='East Asian' filterClicked={this.props.filterClicked} />
          <FilterItem filter='South Asian' filterClicked={this.props.filterClicked} />
          <FilterItem filter='African American' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Mixed' filterClicked={this.props.filterClicked} />
          <FilterItem filter='White' filterClicked={this.props.filterClicked} />
        </ul>
        <p className='menu-label'>Sexuality</p>
        <ul className='menu-list'>
          <FilterItem filter='LGBT' filterClicked={this.props.filterClicked} />
          <FilterItem filter='Straight' filterClicked={this.props.filterClicked} />
        </ul>
      </aside>
    )
  }
}

export default FilterBar
