import React, {Component} from 'react'

class ShowMoreModal extends Component {
  render () {
    let candidate = this.props.candidate
    if (!this.props.show) return null
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>{candidate.name}</p>
            <button className='delete' aria-label='close' onClick={this.props.toggleModal} />
          </header>
          <section className='modal-card-body'>
            <div className='card-image'>
              <figure className='image is-2by3'>
                <img src={candidate.image} alt={candidate.name} />
              </figure>
            </div>
            <div className='content'>
              <h1>{candidate.name}'s Bio</h1>
              <p>{candidate.bio}</p>
              <h1>More Information</h1>
              <p>Website: <a href={candidate.website}>{candidate.website}</a></p>
              <p>District: {candidate.state} - {candidate.district}</p>
              <p>Gender: {candidate.gender}</p>
              <p>Sexuality: {candidate.sexuality}</p>
              <dt>Professions</dt>
              <dd>Academic: <input type='checkbox' checked={candidate.professions.Academic} disabled /></dd>
              <dd>STEM: <input type='checkbox' checked={candidate.professions.STEM} disabled /></dd>
              <dd>Educator: <input type='checkbox' checked={candidate.professions.Educator} disabled /></dd>
              <dd>Veteran: <input type='checkbox' checked={candidate.professions.Veteran} disabled /></dd>
              <dd>Law: <input type='checkbox' checked={candidate.professions.Law} disabled /></dd>
              <dd>Public Servant: <input type='checkbox' checked={candidate.professions['Public Servant']} disabled /></dd>
              <dd>Politician: <input type='checkbox' checked={candidate.professions.Politician} disabled /></dd>
              <dd>Business: <input type='checkbox' checked={candidate.professions.Business} disabled /></dd>
              <br />
              <dt>Ethnicities</dt>
              <dd>White: <input type='checkbox' checked={candidate.ethnicities.White} disabled /></dd>
              <dd>Hispanic: <input type='checkbox' checked={candidate.ethnicities.Hispanic} disabled /></dd>
              <dd>East Asian: <input type='checkbox' checked={candidate.ethnicities['East Asian']} disabled /></dd>
              <dd>South Asian: <input type='checkbox' checked={candidate.ethnicities['South Asian']} disabled /></dd>
              <dd>African American: <input type='checkbox' checked={candidate.ethnicities['African American']} disabled /></dd>
              <dd>Mixed: <input type='checkbox' checked={candidate.ethnicities.Mixed} disabled /></dd>
            </div>
          </section>
          <footer className='modal-card-foot' />
        </div>
      </div>
    )
  }
}

export default ShowMoreModal
