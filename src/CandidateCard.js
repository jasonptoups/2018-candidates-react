import React, {Component} from 'react'

class CandidateCard extends Component {
  render () {
    return (
      <div class='card'>
        <div class='card-image'>
          <figure class='image is-200by300 image-resize'>
            <img src='candidate.candidate.image' alt='candidate.candidate.name' />
          </figure>
        </div>
        <div class='card-content'>
          <div class='media'>
            <div class='media-content'>
              <p class='title is-4'>Name (State-District)</p>
            </div>
          </div>
          <div class='content'>
            <p><span>Gender:</span> Gender</p>
            <p><span>Ethnicity:</span> Ethnicity</p>
            <p><span>Professions:</span> Professions</p>
            <a href='candidate.candidate.website'>Website</a>
          </div>
          <button class='button is-primary' onClick='showMore'>Show More</button>
          <button class='button is-warning' onClick='editCard'>Edit</button>
        </div>
      </div>

    )
  }
}

export default CandidateCard
