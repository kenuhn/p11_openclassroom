import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown} from "@fortawesome/free-solid-svg-icons";
const Equipements = (props) => {
  const equipements = props.equipements;
  const [ouvert, setOuvert] = useState(false);

  const elEquipements = equipements.map((equipement) => {
    return (
      <div key={equipement} className="tagEquipement_equipement">
        {equipement}
      </div>
    );
  });
  const equipementClick = () => {
    if (ouvert === false) {
      document.querySelector(".tagEquipement_contenant").style.display =
        "block";
        document.querySelector(".tagEquipement").style.marginBottom = "170px"
        document.querySelector(".tagEquipement_fleche_bas").style.display = "none"
        document.querySelector(".tagEquipement_fleche_haut").style.display = "block"
      setOuvert(true);
    } else {
      if (ouvert === true) {
        document.querySelector(".tagEquipement_contenant").style.display =
          "none";
          document.querySelector(".tagEquipement").style.marginBottom = "30px"
          document.querySelector(".tagEquipement_fleche_haut").style.display = "none"
          document.querySelector(".tagEquipement_fleche_bas").style.display = "block"
        setOuvert(false);
      }
    }
  };

  return (
    <div className="tagEquipement" onClick={equipementClick}>
      <p className="tagEquipement_titre">Equipements   
      <FontAwesomeIcon icon={faChevronDown} className="tagEquipement_fleche_bas"/>
    <FontAwesomeIcon icon={faChevronUp} className="tagEquipement_fleche_haut"/>
    </p>
    
      <div className="tagEquipement_contenant"> {elEquipements}</div>
    </div>
  );
};

export default Equipements;
