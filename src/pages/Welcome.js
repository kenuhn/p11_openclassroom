import React from "react";
import WelcomeCard from "../Component/WelcomeCard/WelcomeCard";
const Welcome = () => {
  return (
    <>
      <main>
        <div className="Bienvenue">
          <p className="Bienvenue_titre">Chez vous, partout et ailleurs</p>
        </div>
        <WelcomeCard />
      </main>
    </>
  );
};

export default Welcome;
