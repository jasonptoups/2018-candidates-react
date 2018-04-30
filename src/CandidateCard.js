import React, {Component} from 'react'
import _ from 'lodash'
import ShowMoreModal from './ShowMoreModal'

class CandidateCard extends Component {
  constructor (props) {
    super(props)
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      isOpen: false
    }
  }
  showProfessions () {
    return _.keys(_.pickBy(this.props.candidate.professions)).join(', ')
  }
  showEthnicities () {
    return _.keys(_.pickBy(this.props.candidate.ethnicities)).join(', ')
  }
  toggleModal () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render () {
    let candidate = this.props.candidate
    return (
      <div className='card'>
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
          <button className='button is-primary' onClick={this.toggleModal}>Show More</button>
          <button className='button is-warning' click='editCard'>Edit</button>
        </div>
        <ShowMoreModal toggleModal={this.toggleModal} show={this.state.isOpen} candidate={candidate} />
      </div>
    )
  }
}

export default CandidateCard
