import React, {Component} from 'react'

class NavBar extends Component {
  render () {
    return (
      <div className='tabs'>
        <ul className='padding-left'>
          <li className='is-active'><a>All Candidates</a></li>
          <li><a click='newModal'>Add a Candidate</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
