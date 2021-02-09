import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AuthProvider from './components/auth/AuthContext'
import AuthorizationPage from './pages/AuthorizationPage'
import AddFormPage from './pages/AddFormPage'
import LoginPage from './pages/LoginPage'
import Header from './components/Header'
import MainPage from './pages/MainPage'

const App = () => {

  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Route path="/" exact component={MainPage}/>
        <Route path="/add" component={AddFormPage}/>
        <Route path="/auth" component={AuthorizationPage}/>
        <Route path="/login" component={LoginPage}/>
      </Router>
    </AuthProvider>
  )
}

export default App