import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import Home  from './pages/home/Home';
import Login from './pages/login/Login';
import SingUp from './pages/singup/SingUp';
import Activities from './pages/activities/Activities';

function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route exact path='/singup' element={<SingUp />} />
          <Route path='/activities' element={<Activities />} />
        </Routes>
    </Router>
  )
}

export default App;