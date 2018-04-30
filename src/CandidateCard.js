import React, {Component} from 'react'

class CandidateCard extends Component {
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
            <p><span>Ethnicity:</span> Ethnicity</p>
            <p><span>Professions:</span> Professions</p>
            <a href={candidate.website}>{candidate.website}</a>
          </div>
          <button className='button is-primary' click='showMore'>Show More</button>
          <button className='button is-warning' click='editCard'>Edit</button>
        </div>
      </div>
    )
  }
}

export default CandidateCard
