import React from 'react'
// import PropTypes from 'prop-types'
import './scss/main.scss'
import CodeEditor from './CodeEditor'
import Header from './Header'
export class App extends React.Component {
  render() {
    return (
      <div className='container__standard'>
        <Header title='Web Audio API' subtitle='Tariq Saiyad' />
        <CodeEditor />
      </div>
    )
  }
}
// App.propTypes = {
//   name: PropTypes.string.isRequired,
// }
