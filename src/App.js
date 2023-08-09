import { Route, Routes } from "react-router-dom";
import './App.css';

import Hero from "./components/Hero";


function App() {
  return (
    <div>
        
        <Routes>
           <Route path="/" element={<Hero />} />
       
         </Routes>
    </div>
  );
}

export default App;
