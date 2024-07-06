import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LogInPage from './pages/LogInPage/LogInPage';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
