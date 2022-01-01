import React,{useState,useContext} from 'react'
import {Link,useNavigate} from "react-router-dom"
import {userContext} from "../App" 

const Navbar = () => {
    const history = useNavigate();
    //const [login,setlogin] = useState(false);
    const {state,dispatch} = useContext(userContext);
    const li = "text-slate-500 hover:text-slate-200"; 
    // const logout = ()=>{
    //     dispatch({type:"user",payload:false});
    //     history("/Login")
    // }
    const RenderMenu = () =>{
        if(state){
            //console.log(state);
            return(
                <div className="right space-x-10 font-bold text-xl  mr-20">
                <Link to="/" className={li}>HOME</Link>
                <Link to="/Pneumonia" className={li}>Check Pneumonia</Link>
                <Link to="/About" className={li}>About</Link>
                <Link to="/Logout" className={li}>Logout</Link>
            </div>
            )
        }else{
            return(

                <div className="right space-x-10 font-bold text-xl  mr-20">
                    <Link to="/" className={li}>HOME</Link>
                    <Link to="/Login" className={li}>Login</Link>
                    <Link to="/Signup" className={li}>Signup</Link>
                </div>
               )
        }
    }


    return (
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-400 shadow-md shadow-emerald-100 ">
            <div className="left">
                <h1 className="text-3xl font-bold text-red-100">ICON</h1>
           </div>
           
            <RenderMenu/>
        </div>
    )
}

export default Navbar
