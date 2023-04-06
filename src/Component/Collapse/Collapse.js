import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = (props) => {
  const tabPropsNom = Object.keys(props);
  console.log(tabPropsNom)
  let propsNom = tabPropsNom[0];
  let propriete = props[propsNom];
  let classNameContenant = propsNom + "_contenant";
  let classNameContenantTitre = propsNom + "_titre";
  let classNameFlecheBas = propsNom + "_fleche_bas";
  let classNameFlecheHaut = propsNom + "_fleche_haut";

  const [ouvertEquipements, setOuvertEquipement] = useState(false);
  const [ouvertDescription, setOuvertDescription] = useState(false);

  const clickCollapse = () => {
    if (propsNom === "equipements") {
      setOuvertEquipement((ouvertEquipements) => !ouvertEquipements);
    }
    if (propsNom === "description" || propsNom === "respect" || propsNom === "fiabilite" || propsNom === "service" || propsNom === "responsabilite" ) {
      setOuvertDescription((ouvertDescription) => !ouvertDescription);
    }
  };

  if (propsNom === "equipements") {
    const equipement = props.equipements;
   
    const marginDescription = {
      marginBottom: ouvertEquipements ? "210px" : "30px",
    };

    const contenantEquipement= {
      display: ouvertEquipements ? "block" : "none",
    };

    const styleFlecheBas = {
      display: ouvertEquipements ? "block" : "none",
    };

    const styleFlecheHaut = {
      display: ouvertEquipements ? "none" : "block",
    };
    const elEquipements = equipement.map((equipement) => {
      return (
        <div key={equipement} className="equipements_equipement">
          {" "}
          {equipement}{" "}
        </div>
      );
    });
    return (
      <div
        className={propsNom}
        onClick={clickCollapse}
        style={marginDescription}
      >
        <p className={classNameContenantTitre}>
          {propsNom}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={classNameFlecheBas}
            style={styleFlecheBas}
          />
          <FontAwesomeIcon
            icon={faChevronUp}
            className={classNameFlecheHaut}
            style={styleFlecheHaut}
          />
        </p>

        <div className="equipements_contenant" style={contenantEquipement}>{elEquipements}</div>
      </div>
    );
  }

  if (propsNom === "description" || propsNom === "respect" || propsNom === "fiabilite" || propsNom === "service" || propsNom === "responsabilite") {
    const marginDescription = {
      marginBottom: ouvertDescription ? "210px" : "30px",
    };

    const contenanteDescription = {
      display: ouvertDescription ? "block" : "none",
    };

    const styleFlecheBas = {
      display: ouvertDescription ? "block" : "none",
    };

    const styleFlecheHaut = {
      display: ouvertDescription ? "none" : "block",
    };

    return (
      <div
        className={propsNom}
        onClick={clickCollapse}
        style={marginDescription}
      >
        <p className={classNameContenantTitre}>
          {propsNom}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={classNameFlecheBas}
            style={styleFlecheBas}
          />
          <FontAwesomeIcon
            icon={faChevronUp}
            className={classNameFlecheHaut}
            style={styleFlecheHaut}
          />
        </p>

        <div className={classNameContenant} style={contenanteDescription}>
          {propriete}
        </div>
      </div>
    );
  }

};

export default Collapse;
 