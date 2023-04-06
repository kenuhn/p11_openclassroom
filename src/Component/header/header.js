import React from 'react';
import Navigation from "./nav.js";
import  Logo  from '../../img/logo_kasa.png'
const Header = () => {
    
    return (
     <header className='header' >
        <img className="logo" src={Logo} alt="Logo" />
        <Navigation />
     </header>
    )
}

export default Header 