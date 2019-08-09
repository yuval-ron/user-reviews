import React from 'react';

import Navbar from './Navbar'
import Reviews from '../../reviews/components/Reviews'
import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Reviews />
    </div>
  );
}

export default App;
