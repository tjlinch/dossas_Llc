import React from 'react';
import { Link } from 'react-router-dom';
import dossasLogo from '../assets/images/TYPEFACE_WHITE.png';


const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={dossasLogo} alt='Dossas typeface logo' className='headerLogo'></img>
      </Link>
    </div>
  )
}

export default Header