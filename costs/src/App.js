import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/pages/Home.jsx'
import Company from './components/pages/Company.jsx'
import Contact from './components/pages/Contact.jsx'
import NewProject from './components/pages/NewProject.jsx'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contat</li>
      </ul>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/newproject" element={<NewProject />} />
      </Routes>
      <footer>Footer</footer>
    </Router>
  );
}

export default App;