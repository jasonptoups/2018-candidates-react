import React, {Component} from 'react'
import _ from 'lodash'
import ShowMoreModal from './ShowMoreModal'
import EditModal from './EditModal'

class CandidateCard extends Component {
  constructor (props) {
    super(props)
    this.toggleMoreModal = this.toggleMoreModal.bind(this)
    this.toggleEditModal = this.toggleEditModal.bind(this)
    this.state = {
      moreIsOpen: false,
      editIsOpen: false
    }
  }
  showProfessions () {
    return _.keys(_.pickBy(this.props.candidate.professions)).join(', ')
  }
  showEthnicities () {
    return _.keys(_.pickBy(this.props.candidate.ethnicities)).join(', ')
  }
  toggleMoreModal () {
    this.setState({
      moreIsOpen: !this.state.moreIsOpen
    })
  }
  toggleEditModal () {
    this.setState({
      editIsOpen: !this.state.editIsOpen
    })
  }
  render () {
    let candidate = this.props.candidate
    return (
      <div className='card card-custom'>
        <div className='card-image'>
          <figure className='image is-200by300 image-resize'>
            <img src={candidate.image} alt={candidate.name} />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-content'>
              <p className='title is-4'>{candidate.name} ({candidate.state}-{candidate.district})</p>
            </div>
          </div>
          <div className='content'>
            <p><span>Gender:</span> {candidate.gender}</p>
            <p><span>Ethnicity:</span> {this.showEthnicities()}</p>
            <p><span>Professions:</span> {this.showProfessions()}</p>
            <a href={candidate.website}>{candidate.website}</a>
          </div>
          <button className='button is-primary' onClick={this.toggleMoreModal}>Show More</button>
          <button className='button is-warning' onClick={this.toggleEditModal}>Edit</button>
        </div>
        <ShowMoreModal toggleModal={this.toggleMoreModal} show={this.state.moreIsOpen} candidate={candidate} />
        <EditModal toggleModal={this.toggleEditModal} show={this.state.editIsOpen} candidate={candidate} refreshPage={this.props.refreshPage} />
      </div>
    )
  }
}

export default CandidateCard
