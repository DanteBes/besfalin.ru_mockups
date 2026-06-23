import './App.css'
import { Routes, Route } from 'react-router'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="rootsContent">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Blog />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
