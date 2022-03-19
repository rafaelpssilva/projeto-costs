import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'


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