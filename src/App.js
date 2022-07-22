import './css/App.css'
import Home from './Home'
import YourRegistrations from './YourRegistrations'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/your-registrations' element={<YourRegistrations />} />
      </Routes>
    </Router>
  )
}

export default App
