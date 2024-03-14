import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


export default function Header() {
  return (
    <div className='header'>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="github-logo"
              src="public/github-mark-white.svg"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            <h2>Github Profile Finder</h2>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}
