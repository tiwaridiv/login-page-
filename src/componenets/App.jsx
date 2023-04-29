import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import React from "react";
import TextForms from "./TextForms";
import Navbar from "./Navbar";


const App = () => {
  
  return (
    <div>
      <Router>
      <Navbar/>
      
      
        <Routes>
       
          <Route path="/form" element={<TextForms/>}/>

        </Routes>
      </Router>
     
      
      
    </div>
  );
};

export default App;
// condition wise rendering