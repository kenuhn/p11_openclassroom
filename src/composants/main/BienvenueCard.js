import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const BienvenueCard = () => {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      const response = await fetch(
        "http://127.0.0.1:5501/data/logements_data.json"
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

export default BienvenueCard;
