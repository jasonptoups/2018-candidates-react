import React, {Component} from 'react'

class FilterItem extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clicked: false
    }

    this.filterClicked = this.filterClicked.bind(this)
  }

  filterClicked (e) {
    let newClicked = !this.state.clicked
    this.setState({clicked: newClicked})
    this.props.filterClicked(e)
  }

  render () {
    return (
      <li>
        <a className={this.state.clicked ? 'is-active' : null} onClick={this.filterClicked}>{this.props.filter}</a>
      </li>
    )
  }
}

export default FilterItem
