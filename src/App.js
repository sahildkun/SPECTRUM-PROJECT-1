
// import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import './App.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Discover from './Discover';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Hero/>}/>
       <Route path="/discover" element={<Discover/>}/>
        
      </Routes>
     
     
     </BrowserRouter>

   
    </div>
  );
}

export default App;
