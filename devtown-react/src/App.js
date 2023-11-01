import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import these components
import Home from "./components/Home"
import Navbarwithsearch from "./components/NavbarWithSearch"

import Cart from './components/Cart';
import ContactUs from './components/Contactus';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <Navbarwithsearch/>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/cart" element={<Cart />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>

          
        
        </header>
      </div>
    </Router>
  );
}

export default App;
