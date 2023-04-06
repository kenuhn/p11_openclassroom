import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./composants/header/header";
import FooterNav from "./composants/footer/Footer";
import Bienvenue from "./pages/Welcome";
import Appartements from "./pages/appartements";
import APropos from "./pages/About";
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
