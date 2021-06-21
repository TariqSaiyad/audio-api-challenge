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
      <h2>
        {props.title}
        <svg viewBox='0 0 16 16'>
          <path d='M15 0h1v11.5c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-5.751l-8 1.778v7.722c0 1.381-1.567 2.5-3.5 2.5s-3.5-1.119-3.5-2.5c0-1.381 1.567-2.5 3.5-2.5 0.979 0 1.865 0.287 2.5 0.751v-9.751l9-2z'></path>
        </svg>
      </h2>
      <span>{props.subtitle}</span>
    </div>
  )
}

export default Header
