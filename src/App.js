import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AddFormPage from './pages/AddFormPage'
import Header from './components/Header'
import MainPage from './pages/MainPage'

const App = () => {

  return (
    <Router>
      <Header/>
      <Route path="/" exact component={MainPage}/>
      <Route path="/add" component={AddFormPage}/>
    </Router>
  )
}

export default App