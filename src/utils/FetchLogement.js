import { useState, useEffect } from "react";
const useLogement = (id) => {
    const [logement, setLogement] = useState(null);
  
    useEffect(() => {
      async function getData() {
        const response = await fetch(
          "http://127.0.0.1:5500/data/logements_data.json"
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