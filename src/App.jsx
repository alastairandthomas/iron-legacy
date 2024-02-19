<<<<<<< HEAD
import { useState } from 'react';
import './App.css';
=======
import './App.css'
>>>>>>> 87de1af7c4ac3adc84ccf615bf0f96ecca387353
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CreatePage from './pages/CreatePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import FavoritePage from './pages/FavoritePage';
import ErrorPage from './pages/ErrorPage';
import EditPage from './pages/EditPage';

<<<<<<< HEAD
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
  const [user, loading] = useAuthState(auth);
=======

function App() {
>>>>>>> 87de1af7c4ac3adc84ccf615bf0f96ecca387353

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projectdetails/:id" element={<ProjectDetailsPage />} />
        <Route path="/modify/:id" element={<EditPage />} />
        <Route path="/favorites" element={<FavoritePage id={user?.uid} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
