import React, {Component} from 'react'

class EditModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: this.props.candidate.name,
      image: this.props.candidate.image,
      state: this.props.candidate.state,
      district: this.props.candidate.district,
      age: this.props.candidate.age,
      gender: this.props.candidate.gender,
      sexuality: this.props.candidate.sexuality,
      website: this.props.candidate.website,
      bio: this.props.candidate.bio,
      professions: {
        Educator: this.props.candidate.professions.Educator,
        Veteran: this.props.candidate.professions.Veteran,
        Law: this.props.candidate.professions.Law,
        'Public Servant': this.props.candidate.professions['Public Servant'],
        Politician: this.props.candidate.professions.Politician,
        Business: this.props.candidate.professions.Business,
        Academic: this.props.candidate.professions.Academic,
        STEM: this.props.candidate.professions.STEM
      },
      ethnicities: {
        White: this.props.candidate.ethnicities.White,
        Hispanic: this.props.candidate.ethnicities.Hispanic,
        'East Asian': this.props.candidate.ethnicities['East Asian'],
        'South Asian': this.props.candidate.ethnicities['South Asian'],
        'African American': this.props.candidate.ethnicities['African American'],
        Mixed: this.props.candidate.ethnicities.Mixed
      }
    }
  }
  handleChange (event) {
    console.log(event.target.name)
    console.log(event.target.value)
    // this.setState({
    //   [event.target.name]: event.target.value
    // })
  }
  render () {
    let candidate = this.props.candidate
    if (!this.props.show) return null
    console.log(this.state)
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>Edit {this.state.name}</p>
            <button className='delete' aria-label='close' onClick={this.props.toggleModal} />
          </header>
          <section className='modal-card-body'>
            <div className='card-image'>
              <figure className='image is-2by3'>
                <img src={candidate.image} alt={candidate.name} />
              </figure>
            </div>
            <div className='content'>
              <label className='label'>Name: </label>
              <div className='control'>
                <input className='input' type='text' onChange={this.handleChange} />
              </div>
              <p>{candidate.bio}</p>
              <h1>More Information</h1>
              <p>Website: <a href={candidate.website}>{candidate.website}</a></p>
              <p>District: {candidate.state} - {candidate.district}</p>
              <p>Gender: {candidate.gender}</p>
              <p>Sexuality: {candidate.sexuality}</p>
              <dt>Professions</dt>
              <dd>Academic: <input type='checkbox' checked={candidate.professions.Academic} /></dd>
              <dd>STEM: <input type='checkbox' checked={candidate.professions.STEM} /></dd>
              <dd>Educator: <input type='checkbox' checked={candidate.professions.Educator} /></dd>
              <dd>Veteran: <input type='checkbox' checked={candidate.professions.Veteran} /></dd>
              <dd>Law: <input type='checkbox' checked={candidate.professions.Law} /></dd>
              <dd>Public Servant: <input type='checkbox' checked={candidate.professions['Public Servant']} /></dd>
              <dd>Politician: <input type='checkbox' checked={candidate.professions.Politician} /></dd>
              <dd>Business: <input type='checkbox' checked={candidate.professions.Business} /></dd>
              <br />
              <dt>Ethnicities</dt>
              <dd>White: <input type='checkbox' checked={candidate.ethnicities.White} /></dd>
              <dd>Hispanic: <input type='checkbox' checked={candidate.ethnicities.Hispanic} /></dd>
              <dd>East Asian: <input type='checkbox' checked={candidate.ethnicities['East Asian']} /></dd>
              <dd>South Asian: <input type='checkbox' checked={candidate.ethnicities['South Asian']} /></dd>
              <dd>African American: <input type='checkbox' checked={candidate.ethnicities['African American']} /></dd>
              <dd>Mixed: <input type='checkbox' checked={candidate.ethnicities.Mixed} /></dd>
            </div>
          </section>
          <footer className='modal-card-foot' />
        </div>
      </div>

    )
  }
}

export default EditModal
