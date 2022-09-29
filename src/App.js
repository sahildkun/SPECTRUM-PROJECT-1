
// import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import './App.css'
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Discover from './Discover';
import Join from './Join';
function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
      <Routes>
       <Route path="/" element={<Hero/>}/>
       <Route path="/discover" element={<Discover/>}/>
       <Route path="/join" element={<Join/>}/>

        
      </Routes>
     
     
     </BrowserRouter>

   
    </div>
  );
}

export default App;
