// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardList from './components/CardList';
import Details from './components/Details';

const App = () => {
  return (
    <Router>
      <div className="p-4 bg-[#edf0f7]">
        <Routes>
          <Route path="/" element={<CardList />} />
          {/* Add other routes here */}
          <Route path="/property/:id" element={<Details />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
