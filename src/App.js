import React, { useEffect } from 'react'
import Login from './components/Login'
import  { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './components/Home'


const App = () => {

  return  (
    <Router>
    <div>
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='home' element={<Home />} />
        </Routes>
    </div>
    </Router>
  )
}

export default App