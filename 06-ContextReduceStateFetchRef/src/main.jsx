import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppProvider from './contexts/AppContext.jsx'
import PostProvider from './contexts/PostContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
    <PostProvider>
       <App />
    </PostProvider>
    </AppProvider>
)
