import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const WelcomeCard = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      const response = await fetch(
       `${process.env.REACT_APP_ADRESSE}/data/logements_data.json`
      );
      const data = await response.json();
      setLogements(data);
    };
    fetchLogements();
  }, []);
  
  return (
    <div className="contenant_card_appartements">
      {logements.map((logement) => (
        <Link key={logement.id} to={`/logements/${logement.id}`}>
          <div key={logement.id} className="card_appartements" style={{backgroundImage: `url("${logement.cover}")`}}>
            <h2 key={logement.title}className="card_appartements_title">{logement.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default WelcomeCard;
