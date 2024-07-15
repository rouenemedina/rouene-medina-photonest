import './App.scss'
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import HomePage from './pages/HomePage/HomePage';
import PhotographerPage from './pages/PhotographerPage/PhotographerPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import EditPortfolioPage from './pages/EditPortfolioPage/EditPortfolioPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/photographers" element={<PhotographerPage />}></Route>
        <Route path="/photographers/:photographerUserId" element={<PortfolioPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/editportfolio" element={<EditPortfolioPage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
