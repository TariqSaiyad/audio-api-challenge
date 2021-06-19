import React from 'react'
import { render } from 'react-dom'
import App from './src/App'

function renderApp() {
  render(<App />, document.getElementById('app'))
}

renderApp()

module.hot.accept()
