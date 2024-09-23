import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          
          <Link to='/' className='navbar-logo'>

            <img src='Tech Dan-logos_white.png' alt='background' style={{ width: "90px", height: "90px" }} />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/AboutMe'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resume
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Portfolio'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Artifacts
              </Link>
            </li>
            {/* <li>
              <Link
                to='/Certifications'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Certifications
              </Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;