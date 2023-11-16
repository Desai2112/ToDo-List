import React from 'react'

const Footer = () => {
  let footerStyle={
      position:"relative",
      top:"10vh",
      width:"100%", 
      height:"40px", 
  }
  let textStyle={
    fontSize: "20px",
  }
  return (
    <footer className='bg-dark text-light ' style=
    {footerStyle}>
      <p className='text-center' style={textStyle}>Copyright &copy;MytodosList.com </p>
    </footer>
  )
}

export default Footer
