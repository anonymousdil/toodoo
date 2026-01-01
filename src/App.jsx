import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Focus from './pages/Focus'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/focus" element={<Focus />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
