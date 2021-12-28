import React,{useState} from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
    const [login,setlogin] = useState(false);
    const li = "text-slate-500 hover:text-slate-200"; 
    return (
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-400 shadow-md shadow-emerald-100 ">
            <div className="left">
                <h1 className="text-3xl font-bold text-red-100">ICON</h1>
           </div>
           {
               login?(
                <div className="right space-x-10 font-bold text-xl  mr-20">
                    <Link to="/" className={li}>HOME</Link>
                    <Link to="/Pneumonia" className={li}>Check Pneumonia</Link>
                    <Link to="/About" className={li}>About</Link>
                    <Link to="/Logout" className={li}>Logout</Link>
                </div>
               ):(
                <div className="right space-x-10 font-bold text-xl  mr-20">
                    <Link to="/Login" className={li}>Login</Link>
                    <Link to="/Signup" className={li}>Signup</Link>
                </div>
               
               )
           }
            
        </div>
    )
}

export default Navbar
