import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Post from "./components/Post"
import ErrorPage from "./components/ErrorPage.jsx"
import AppNav from "./components/AppNav.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Persona from "./pages/Persona.jsx"
import Article from "./pages/Article.jsx"
import Layout from "./components/Layout.jsx"

function App() {
  const user = null
  return (
    <>  
      <BrowserRouter>
        <Header />
        <main>
          <AppNav />
          <article>
          <Routes>
            <Route path="/" element={<Home />} end />
            <Route path="/body" element={<Body />} end />
            <Route path="/posts" element={<Post />} end />
            <Route path="/persona/:email" element={<Persona/>} />
            <Route path="/pokemon/:name" element={<Article/>} />
            <Route path="/register" element={user ? <Navigate to="/" replace /> : <Layout />} />
            <Route path="*" element={<ErrorPage />} end />
          </Routes>
          </article>
          <Sidebar />
        </main>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
