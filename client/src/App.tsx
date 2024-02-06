import './App.css'

import { Navigate, Route, Routes } from 'react-router-dom'
import ContentPage from './pages/ContentPage'
import LoginPage from './pages/LoginPage'
import React, { useContext, useState } from 'react';

export const TokenContext = React.createContext(null);

// @ts-ignore
const ProtectedRoute = ({element}) => {
  // @ts-ignore
  const [token] = useContext(TokenContext);
  return token ? element() : <Navigate to="/login" />
}

function App() {
  const [token, setToken] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);

  return (
    <div className='App'>
      {/*@ts-ignore*/}
      <TokenContext.Provider value={[token, setToken, isAdmin, setIsAdmin]} >
        <Routes>
          <Route path="/" element={<ProtectedRoute element={ContentPage}/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </TokenContext.Provider>
    </div>
  )
}

export default App
