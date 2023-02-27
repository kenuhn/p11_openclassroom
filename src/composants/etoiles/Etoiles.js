import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const Etoiles = (props) => {
    const etoiles = props.etoiles
    let elEtoilesColore =[]
    let elEtoileGris = []
    for (let i = 0; i < etoiles; i++) {
        let nameKey = "etoilesCouleur " +i;
        elEtoilesColore.push(<FontAwesomeIcon key={nameKey}icon={faStar} className="etoiles" style={{color: "#FF6060"}}/> )   
    }
    for (let i = 0; i < 5 - etoiles; i++) {
        let nameKey = "etoilesVides " +i;
        elEtoileGris.push(<FontAwesomeIcon key={nameKey} icon={faStar} className="etoiles" style={{color: "#E3E3E3"}}/> )   
   }
    return (
        <div className="contenant_etoiles">
           { elEtoilesColore}{elEtoileGris}
        </div>
    );
};

export default Etoiles;