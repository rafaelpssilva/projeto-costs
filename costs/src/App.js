import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Container from './componets/layout/Container'
import NavBar from './componets/layout/NavBar'
import Footer from './componets/layout/Footer'

import Home from './componets/pages/Home'
import Company from './componets/pages/Company'
import Contact from './componets/pages/Contact'
import NewProject from './componets/pages/NewProject'
import Projects from './componets/pages/Projects'

function App() {
  return (
    <Router> 
      <NavBar />
      <Container customClass='min_height'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/company' element={<Company />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/newproject' element={<NewProject />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      </Container>
      <Footer />
    </Router> 
  )
}

export default App 