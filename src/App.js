import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Pneu from './components/Pneu'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
    return (
        <div className="w-screen h-screen bg-gradient-to-r from-gray-800 to-gray-600 overflow-y-scroll ">
            <Router>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Pneumonia" element={<Pneu/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Login" element={<Login/>}/>
                    <Route path="/Signup" element={<Signup/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
