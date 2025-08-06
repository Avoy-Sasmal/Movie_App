import React from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import MoviList from './components/MovieList/MoviList'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
      <MoviList/>
    </div>
  )
}

export default App
