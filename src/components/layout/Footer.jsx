import React from 'react'

function Footer() {
    const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-4 bg-gray-700 text-primary-content footer-center'>
    Copyright &copy; {footerYear}
    </footer>
  )
}

export default Footer