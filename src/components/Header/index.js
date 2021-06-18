import React from 'react'
import PropTypes from 'prop-types'

import './Header.scss'

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

function Header(props) {
  return (
    <div className='header'>
      <h2>{props.title}</h2>
      <span>{props.subtitle}</span>
    </div>
  )
}

export default Header
