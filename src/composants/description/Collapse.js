import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";

const Collapse = (props) => {
  const tabPropsNom = Object.keys(props);
  let  propsNom = tabPropsNom[0]
  let propriete = props[propsNom]
  let classNameContenant = propsNom +"_contenant"
  let classNameContenantTitre = propsNom +"_titre"
  let classNameFlecheBas = propsNom + "_fleche_bas" 
  let classNameFlecheHaut = propsNom + "_fleche_haut" 

 const [ouvert, setOuvert] = useState(false);

  const cliqueDescritpion = () => {
    if (ouvert === false) {
      document.querySelector(`.${classNameContenant}`).style.display =
        "block";
      document.querySelector(`.${propsNom}`).style.marginBottom = "180px"
      document.querySelector(`.${classNameFlecheHaut}`).style.display = "none";
      document.querySelector(`.${classNameFlecheBas}`).style.display = "block";
      setOuvert(true);
    } else {
      if (ouvert === true) {
        document.querySelector(`.${classNameContenant}`).style.display =
          "none";
          document.querySelector(`.${propsNom}`).style.marginBottom = "30px"
        document.querySelector(`.${classNameFlecheBas}`).style.display = "none";
        document.querySelector(`.${classNameFlecheHaut}`).style.display = "block";
        setOuvert(false);
      }
    }
  };
  

    return (
        <div className={propsNom} onClick={cliqueDescritpion}>
          <p className={classNameContenantTitre}>
            {propsNom}
            <FontAwesomeIcon icon={faChevronDown} className={classNameFlecheBas}/>
            <FontAwesomeIcon icon={faChevronUp} className={classNameFlecheHaut} />
          </p>
  
          <div className={classNameContenant}>{propriete}</div>
        </div>
    );
  
 
};

export default Collapse;
