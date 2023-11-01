import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import these components
import {NavbarWithSearch}  from './components/NavbarWithSearch';
import Carousel from './components/Carousel';
import CardsRender from './components/CardsRender';

import Cart from './components/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavbarWithSearch />

          <Routes>
            <Route path="/" element={<Carousel />} />
            <Route path="/" element={<CardsRender />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          
        
        </header>
      </div>
    </Router>
  );
}

export default App;
