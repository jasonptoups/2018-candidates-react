import React, {Component} from 'react'
import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'
import {clientUrl} from './constants'
import axios from 'axios'

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
    this.handleChange = this.handleChange.bind(this)
    this.updateProfessions = this.updateProfessions.bind(this)
    this.updateEthnicities = this.updateEthnicities.bind(this)
    this.submitChanges = this.submitChanges.bind(this)
    this.deleteCandidate = this.deleteCandidate.bind(this)
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  updateProfessions (event) {
    let professions = this.state.professions
    professions[event.target.name] = !professions[event.target.name]
    this.setState({
      professions: professions
    })
  }

  updateEthnicities (event) {
    let ethnicities = this.state.professions
    ethnicities[event.target.name] = !ethnicities[event.target.name]
    this.setState({
      ethnicities: ethnicities
    })
  }

  submitChanges () {
    axios.put(`${clientUrl}/${this.props.candidate._id}`, this.state).then(res => {
      this.props.toggleModal()
      this.props.refreshPage()
    })
  }

  deleteCandidate () {
    axios.delete(`${clientUrl}/${this.props.candidate._id}`).then(res => {
      this.props.toggleModal()
      this.props.refreshPage()
    })
  }

  render () {
    let candidate = this.props.candidate
    if (!this.props.show) return null
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
                <img src={this.state.image} alt={candidate.name} />
              </figure>
            </div>
            <div className='content'>
              <p>Name: <TextInput name='name' value={this.state.name} handleChange={this.handleChange} /> </p>
              <p>Bio: <TextAreaInput name='bio' value={this.state.bio} handleChange={this.handleChange} /> </p>
              <h1>More Information</h1>
              <p>Image URL: <TextInput name='image' value={this.state.image} handleChange={this.handleChange} /> </p>
              <p>Website:  <TextInput name='website' value={this.state.website} handleChange={this.handleChange} /> </p>
              <p>State: <TextInput name='state' value={this.state.state} handleChange={this.handleChange} /> </p>
              <p>District:  <TextInput name='district' value={this.state.district} handleChange={this.handleChange} /></p>
              <p>Gender:  <TextInput name='gender' value={this.state.gender} handleChange={this.handleChange} /></p>
              <p>Sexuality:  <TextInput name='sexuality' value={this.state.sexuality} handleChange={this.handleChange} /></p>
              <dt>Professions</dt>
              <dd>Academic: <input type='checkbox' checked={this.state.professions.Academic} name='Academic' onChange={this.updateProfessions} /></dd>
              <dd>STEM: <input type='checkbox' checked={this.state.professions.STEM} name='STEM' onChange={this.updateProfessions} /></dd>
              <dd>Educator: <input type='checkbox' checked={this.state.professions.Educator} name='Educator' onChange={this.updateProfessions} /></dd>
              <dd>Veteran: <input type='checkbox' checked={this.state.professions.Veteran} name='Veteran' onChange={this.updateProfessions} /></dd>
              <dd>Law: <input type='checkbox' checked={this.state.professions.Law} name='Law' onChange={this.updateProfessions} /></dd>
              <dd>Public Servant: <input type='checkbox' checked={this.state.professions['Public Servant']} name='Public Servant' onChange={this.updateProfessions} /></dd>
              <dd>Politician: <input type='checkbox' checked={this.state.professions.Politician} name='Politician' onChange={this.updateProfessions} /></dd>
              <dd>Business: <input type='checkbox' checked={this.state.professions.Business} name='Business' onChange={this.updateProfessions} /></dd>
              <br />
              <dt>Ethnicities</dt>
              <dd>White: <input type='checkbox' checked={this.state.ethnicities.White} name='White' onChange={this.updateEthnicities} /></dd>
              <dd>Hispanic: <input type='checkbox' checked={this.state.ethnicities.Hispanic} name='Hispanic' onChange={this.updateEthnicities} /></dd>
              <dd>East Asian: <input type='checkbox' checked={this.state.ethnicities['East Asian']} name='East Asian' onChange={this.updateEthnicities} /></dd>
              <dd>South Asian: <input type='checkbox' checked={this.state.ethnicities['South Asian']} name='South Asian' onChange={this.updateEthnicities} /></dd>
              <dd>African American: <input type='checkbox' checked={this.state.ethnicities['African American']} name='African American' onChange={this.updateEthnicities} /></dd>
              <dd>Mixed: <input type='checkbox' checked={this.state.ethnicities.Mixed} name='Mixed' onChange={this.updateEthnicities} /></dd>
            </div>
          </section>
          <footer className='modal-card-foot'>
            <button class='button is-success' type='submit' onClick={this.submitChanges} >Save changes</button>
            <button class='button' onClick={this.props.toggleModal}>Cancel </button>
            <button class='button is-danger' onClick={this.deleteCandidate}>Delete Candidate</button>
          </footer>
        </div>
      </div>

    )
  }
}

export default EditModal
