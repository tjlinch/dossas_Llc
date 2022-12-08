import React from 'react';
import { Link } from 'react-router-dom';
import dossasTypefaceLogo from '../assets/images/TYPEFACE_WHITE.png';
import dossasLogo from '../assets/images/BLACK CONCEPT.png';


const Header = () => {
  return (
    <div className='header'>
      <header>
        <Link to='/home'>
          <img src={dossasTypefaceLogo} alt='Dossas typeface logo' className='headerLogo'></img>
        </Link>
      </header>
      <nav>
        
        <button className='btn btn-light' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasScrolling' aria-controls='offcanvasScrolling'>
          <img src={dossasLogo} alt='Nav menu' id='offCanvasImg'></img>
        </button>

        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Pages</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className='list-group'>
              <Link to='/home'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Home</li>
              </Link>
              <Link to='/about'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>About Dossas</li>
              </Link>
              <Link to='/services'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Services</li>
              </Link>
              <Link to='/contact'>
                    <li className='list-group-item' data-bs-dismiss='offcanvas' aria-label='Close'>Contact info</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header