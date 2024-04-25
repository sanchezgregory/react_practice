import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import AppNav from "./components/AppNav.jsx"
import Home from "./components/Home"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Post from "./components/Post"
import ErrorPage from "./components/ErrorPage.jsx"
import AppNav from "./components/AppNav.jsx"
import Sidebar from "./components/Sidebar.jsx"

function App() {
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
