import React from 'react'
import LandingPage from './pages/LandingPage';
import ImsakiyahPage from './pages/ImsakiyahPage';
import { Route, Routes } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.min.css";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path='/imsakiyah' element={<ImsakiyahPage />} />
    </Routes>
  );
}
