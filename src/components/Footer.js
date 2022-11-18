import React from 'react'

export default function Footer() {
   
  return (
    <footer className='flex-md-column justify-content-center navbar navbar-expand-lg navbar-dark bg-dark' style={{width:"100%"}}>
        <nav className='d-flex align-items-center' >
            <ul className='list-unstyled'>
                <li><a className='navbar-brand' href='http://instagram.com' rel="noopener noreferrer">IG</a></li>
            </ul>
        </nav>
        <p className='navbar-brand'>Copyright footer example</p>
    </footer>
  )
}
