

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Form from './pages/form.js'
import Login from './pages/login.js';
import Welcome from './pages/welcome.js';
import Adelaide from './pages/adelaide.js';
import Brisbane from './pages/brisbane.js';
import Sydney from './pages/sydney.js';
import Barcelona from './pages/barcelona.js';
import Madrid from './pages/madrid.js';
import Seville from './pages/seville.js';
import LiverPool from './pages/liverpool.js';
import London from './pages/london.js';
import Manchester from './pages/manchester.js';


function App () {
   return (
    <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/adelaide" element={<Adelaide />} />
        <Route path="/brisbane" element={<Brisbane />} />
        <Route path="/sydney" element={<Sydney />} />
        <Route path="/barcelona" element={<Barcelona />} />
        <Route path="/madrid" element={<Madrid />} />
        <Route path="/seville" element={<Seville />} />
        <Route path="/liverpool" element={<LiverPool />} />
        <Route path="/london" element={<London />} />
        <Route path="/manchester" element={<Manchester />} />
      </Routes>
    </Router>
  );

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


