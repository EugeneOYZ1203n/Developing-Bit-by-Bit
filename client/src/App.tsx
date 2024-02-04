import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import ContentPage from './pages/ContentPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<ContentPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  )
}

export default App
