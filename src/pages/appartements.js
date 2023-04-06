import { useParams } from "react-router-dom";
import useLogement from "../utils/FetchLogement";
import Etoiles from "../composants/Stars/Stars";
import Hashtag from "../composants/Hastag.js/Hashtag";
import SlideShow from "../composants/slideShow/SlideShow";
import Collapse from "../composants/Collapse/Collapse";
import NotFound from "./notFound";

const Appartements = () => {
  const { id } = useParams();
  const logement = useLogement(id);
  if (!logement) {
    return <NotFound />;
  }

  return (
    <main className="logement">
      <SlideShow images={logement.pictures} />
      <div className="logement_main">
        <h1 className="logement_main_title">{logement.title}</h1>
        <p className="logement_main_city">{logement.location}</p>
        <Hashtag tags={logement.tags} />
        <Etoiles etoiles={logement.rating} />
        <div className="logement_main_hote">
          <p className="logement_main_hote_name"> {logement.host.name}</p>
          <img
            src={logement.host.picture}
            alt="Profil"
            className="logement_main_hote_photo"
          ></img>
        </div>

        <Collapse equipements={logement.equipments} />
        <Collapse description={logement.description} />
      </div>
    </main>
  );
};

export default Appartements;
