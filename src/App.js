import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./composants/header/header";
import FooterNav from "./composants/footer/footerNav";
import Bienvenue from "./composants/main/Bienvenue";
import Appartements from "./pages/appartements";
import APropos from "./pages/APropos";
import NotFound from "./pages/notFound";
function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element ={
        <>
          <Bienvenue /> 
        </>
        } />
         <Route path="/logements/:id" element ={
        <>
           <Appartements /> 
        </>
        } />
          <Route path="/about" element ={
        <>
        <APropos />
        </>
        } />
        <Route path='*' element={<NotFound />}/>
      </Routes>
      <FooterNav/> 
    </div>
  );
}

export default App;
