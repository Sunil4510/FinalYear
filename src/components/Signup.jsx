import React,{useState,useContext} from 'react'
import {Link, useNavigate} from "react-router-dom"
import {userContext} from "../App"

const Signup = () => { 
    const {state,dispatch} = useContext(userContext);
    const history = useNavigate();   
    const [user,setUser] = useState({name:"",email:"",password:"",cpassword:"",})
    let name,value;

    const handleinputs = (e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value});
    }
    //console.log(user)

    const PostData = async (e) => {
        e.preventDefault();

        const {name, email,password, cpassword } = user;
        const res = await fetch("/Signup",{
          method: "POST",
          headers:{
            "Content-Type": "application/json" 
          },
          body: JSON.stringify({
              name, email,password, cpassword        
        })
      });

        //console.log(res.status);
        const data = await res.json();
        
        if(res.status === 422 || !data){
          window.alert("invalid registration");
          console.log("invalid registration");
        }
        else{
            dispatch({type:"user", payload:true});
          window.alert("valid registration");
          console.log("valid registration");
          history("/");
        }
      }



    
    return (
    <div className="up flex items-center justify-center h-screen">
    <div className="px-8 py-6 mx-4 mt-4 text-left rounded-xl bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
        <div className="flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        </div>
        <h3 className="text-2xl font-bold text-center">Join us</h3>
        <form method="POST" >
            <div className="mt-4">
                <div>
                    <label className="block" for="Name">Name</label>
                            <input type="text" placeholder="Enter Your Name"
                            name="name" id="name" autoComplete="off" value={user.name} onChange={handleinputs}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4">
                    <label className="block" for="email">Email</label>
                            <input type="text" placeholder="Email"
                            name="email" id="email" autoComplete="off" value={user.email} onChange={handleinputs}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                </div>
                <div className="mt-4">
                    <label className="block">Password</label>
                            <input type="password" placeholder="Password"
                            name="password" id="password" autoComplete="off" value={user.password} onChange={handleinputs}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                </div>
                <div className="mt-4">
                    <label className="block">Confirm Password</label>
                            <input type="password" placeholder="Password"
                            name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword} onChange={handleinputs}
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" required/>
                </div>
                <span className="text-xs text-red-400">Password must be same!</span>
                <div className="flex">
                    <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={PostData}>Create
                        Account</button>
                </div>
                <div className="mt-6 text-grey-dark">
                    Already have an account?
                    <Link to="/Login"className="text-blue-600 hover:underline" href="#">
                        Log in
                    </Link>
                </div>
            </div>
        </form>
    </div>
</div>
    )
}

export default Signup
