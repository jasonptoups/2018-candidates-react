import React, {Component} from 'react'
import NewModal from './NewModal'

class NavBar extends Component {
  constructor (props) {
    super()
    this.state = {
      newIsOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal () {
    this.setState({
      newIsOpen: !this.state.newIsOpen
    })
  }

  render () {
    return (
      <div className='tabs'>
        <ul className='padding-left'>
          <li className='is-active'><a>All Candidates</a></li>
          <li><a onClick={this.toggleModal}>Add a Candidate</a></li>
        </ul>
        <NewModal toggleModal={this.toggleModal} show={this.state.newIsOpen} refreshPage={this.props.refreshPage} />
      </div>
    )
  }
}

export default NavBar
