import React from 'react';
import Home from './Components/Navbar/Pages';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
function App() {
  return (
   <Router>
    <Routes>
      <Route exact path='/' element={<Home />} />
    </Routes>
   </Router>
  );
}

export default App;
