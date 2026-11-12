import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import BackgroundRipple from './components/BackgroundRipple/BackgroundRipple'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Blog from './components/Blog/Blog'
import About from './components/About/About'
import Contacts from './components/Contacts/Contacts'
import Projects from './components/Projects/Projects'
import Posts from './components/Posts/Posts'
import Post from './components/Post/Post'
import Footer from './components/Footer/Footer'
import Error404 from './components/Error404/Error404'

// Скроллит к элементу по хэшу после того, как React отрендерил содержимое
// страницы. Браузер сам не может это сделать при загрузке /about#subheader3
// или при переходе через React Router, потому что элемента ещё нет в DOM.
function ScrollToHash() {
  const { hash, key } = useLocation()

  useEffect(() => {
    if (!hash) return

    let id
    try {
      id = decodeURIComponent(hash.slice(1))
    } catch {
      return
    }

    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView()
    })

    return () => cancelAnimationFrame(frame)
  }, [hash, key])

  return null
}

function App() {
  return (
    <>
      <ScrollToHash />
      <BackgroundRipple />
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
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
