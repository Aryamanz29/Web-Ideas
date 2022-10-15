import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter , Route,  Routes } from 'react-router-dom';
import './index.css';

//pages
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Create from './pages/Create';
import Interview from './pages/Interview';
import Applicants from './pages/Applicants';
import ViewApplication from './pages/ViewApplication';

ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/interview' element={<Interview />} />
        <Route path='/applicants' element={<Applicants />} />
        <Route path='/applicant' element={<ViewApplication />} />
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,

  document.getElementById('root')
); 