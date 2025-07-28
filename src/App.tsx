import MyProfile from './Pages/MyProfile';
import Dashboard from './Pages/Dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
