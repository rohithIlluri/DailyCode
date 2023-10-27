import React from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas,Chatbot } from "./components";

const App = () => {
  return (
    <>
  
    <BrowserRouter>
      
      <div className="relative z-0 bg-background-color">
      <StarsCanvas/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        
          
          {/*<Chatbot/>*/}
        </div>
      </div>
    </BrowserRouter>

    </>
  );
}

export default App;