import React from 'react'
import PropTypes from 'prop-types'
import './scss/main.scss'

export class App extends React.Component {
  render() {
    return (
      <div className='container__standard'>
        <h1>Hello {this.props.name}</h1>
      </div>
    )
  }
}
App.propTypes = {
  name: PropTypes.string.isRequired,
}
