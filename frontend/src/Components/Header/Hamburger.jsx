import React from 'react';
import { Spiral as Hamburger } from 'hamburger-react'

const HamburgerMenu = ({ 
  isOpen, 
  setOpen, 
  menuToggle 
}) => {

  return (
    <Hamburger 
      toggled={isOpen} 
      toggle={setOpen} 
      color='#ffffff'
      size={20}
      onClick={menuToggle}
      />
  )
}

export default HamburgerMenu