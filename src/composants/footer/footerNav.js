import React from "react";
import Logo from "/Users/kenuhnrimbert/p11-openclassroom/src/img/logo_kasa_white.png"
const footerNav = () => {
    return (
        <footer className="footer"> 
          <img src={Logo} alt="Logo"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default footerNav