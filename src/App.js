import React from 'react'
import PropTypes from 'prop-types'
import './scss/main.scss'
import CodeEditor from './CodeEditor'

export class App extends React.Component {
  render() {
    return (
      <div className='container__standard'>
        <h2>Web Audio API</h2>
        <CodeEditor />
      </div>
    )
  }
}
// App.propTypes = {
//   name: PropTypes.string.isRequired,
// }
