import React from 'react'
import { render } from 'react-dom'
import App from './src/App'

function renderApp() {
  render(<App />, document.getElementById('app'))
}

renderApp()

if(process.env.NODE_ENV === 'development'){
  module.hot.accept()
}

