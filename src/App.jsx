import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';
import HomePage from './pages/HomePage/HomePage';
import PhotographerPage from './pages/PhotographerPage/PhotographerPage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/profile" element={<PhotographerPage />}></Route>
        {/* <Route path="/profile/:id" element={<PortfolioPage />}></Route> */}
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
