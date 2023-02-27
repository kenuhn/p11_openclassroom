import { useParams } from "react-router-dom";
import useLogement from "../utils/FetchLogement";
import Equipements from "../composants/equipements/Equipements";
import Etoiles from "../composants/etoiles/Etoiles";
import Hashtag from "../composants/hastag.js/Hashtag";
import SlideShow from "../composants/slideShow/SlideShow";
import Collapse from "../composants/description/Collapse";


const Appartements = () => {
  const  {id}  = useParams();
  const logement = useLogement(id);
  if (!logement) {
    return <div>Loading...</div>;
  }

  return (

    <main className="logement">
      <SlideShow images={logement.pictures} />
      <div className="logement_main">
        <h1 className="logement_main_title">{logement.title}</h1>
        <p className="logement_main_city">{logement.location}</p>
        <Hashtag tags={logement.tags}/>
        <Etoiles etoiles={logement.rating}/>
        <div className="logement_main_hote">
          <p className="logement_main_hote_name"> {logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt="Profil"
            className="logement_main_hote_photo"
          ></img>
        </div> 
         <Equipements equipements={logement.equipments}/>
         <Collapse description={logement.description}/>
      </div>
    </main>

  );
};

export default Appartements;
