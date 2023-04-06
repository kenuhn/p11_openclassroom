import { useState, useEffect } from "react";
const useLogement = (id) => {
    const [logement, setLogement] = useState(null);
    const adresse = process.env.REACT_APP_ADRESSE;
    console.log(adresse)
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          `${adresse}/data/logements_data.json`
        );
        const data = await response.json();
        const logementData = data.find((logement) => logement.id === id);
        setLogement(logementData);
      }
      getData();
    }, [id]);
  
    return logement;
  };

export default useLogement;