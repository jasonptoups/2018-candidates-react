import React, {Component} from 'react'

class NavBar extends Component {
  render () {
    return (
      <div class='tabs'>
        <ul class='padding-left'>
          <li class='is-active'><a>All Candidates</a></li>
          <li><a onClick='newModal'>Add a Candidate</a></li>
        </ul>
      </div>
    )
  }
}

export default NavBar
