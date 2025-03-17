import React from 'react'
import logo from '../assets/logo.png'
function Logo({width = '100px'}) {
  return (
    <div>
      <img width={200} src={logo} alt="" />
    </div>
  )
}

export default Logo
