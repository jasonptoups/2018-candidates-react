import React, {Component} from 'react'

class FilterItem extends Component {
  render () {
    return (
      <li>
        <a onClick='filterClicked'>{this.props.filter}</a>
      </li>
    )
  }
}

export default FilterItem
