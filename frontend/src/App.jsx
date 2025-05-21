import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/pages/LandingPage';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/userDashboard';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
