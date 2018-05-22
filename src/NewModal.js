import React, {Component} from 'react'
import TextInput from './TextInput'
import TextAreaInput from './TextAreaInput'
import {clientUrl} from './constants'
import axios from 'axios'

class NewModal extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      state: '',
      district: null,
      age: null,
      gender: '',
      sexuality: '',
      website: '',
      bio: '',
      professions: {
        Educator: false,
        Veteran: false,
        Law: false,
        'Public Servant': false,
        Politician: false,
        Business: false,
        Academic: false,
        STEM: false
      },
      ethnicities: {
        White: false,
        Hispanic: false,
        'East Asian': false,
        'South Asian': false,
        'African American': false,
        Mixed: false
      }
    }
    this.handleChange = this.handleChange.bind(this)
    this.updateProfessions = this.updateProfessions.bind(this)
    this.updateEthnicities = this.updateEthnicities.bind(this)
    this.submitChanges = this.submitChanges.bind(this)
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
    axios.post(clientUrl, this.state).then(res => {
      this.props.toggleModal()
      this.props.refreshPage()
    })
  }

  render () {
    if (!this.props.show) return null
    return (
      <div className='modal is-active'>
        <div className='modal-background' />
        <div className='modal-card'>
          <header className='modal-card-head'>
            <p className='modal-card-title'>New Candidate</p>
            <button className='delete' aria-label='close' onClick={this.props.toggleModal} />
          </header>
          <section className='modal-card-body'>
            <div className='content'>
              <label>Name:</label> <TextInput name='name' value={this.state.name} handleChange={this.handleChange} />
              <p>Bio: <TextAreaInput name='bio' value={this.state.bio} handleChange={this.handleChange} /> </p>
              <h1>More Information</h1>
              <label>Image URL:</label> <TextInput name='image' value={this.state.image} handleChange={this.handleChange} />
              <label>Website:</label> <TextInput name='website' value={this.state.website} handleChange={this.handleChange} />
              <label>State:</label> <TextInput name='state' value={this.state.state} handleChange={this.handleChange} />
              <label>District:</label> <TextInput name='district' value={this.state.district} handleChange={this.handleChange} />
              <label>Gender:</label> <TextInput name='gender' value={this.state.gender} handleChange={this.handleChange} />
              <label>Sexuality:</label> <TextInput name='sexuality' value={this.state.sexuality} handleChange={this.handleChange} />
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
            <button class='button is-success' type='submit' onClick={this.submitChanges} >Submit</button>
            <button class='button' onClick={this.props.toggleModal}>Cancel</button>
          </footer>
        </div>
      </div>

    )
  }
}

export default NewModal
