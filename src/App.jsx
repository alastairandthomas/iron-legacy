import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreatePage from './pages/CreatePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import FavoritePage from './pages/FavoritePage';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/create' element={<CreatePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/projectdetails/:id' element={<ProjectDetailsPage />} />
      <Route path='/favorites' element={<FavoritePage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
   
    
    </>
  )
}

export default App
