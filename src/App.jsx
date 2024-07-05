import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';

function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPage />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
