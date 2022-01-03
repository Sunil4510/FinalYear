import React,{useState,useContext} from 'react';
import {Link, useNavigate} from "react-router-dom"
import {userContext} from "../App"
const Login = () => {
    const {state,dispatch} = useContext(userContext);
    const history = useNavigate();   
    const [login,setlogin] = useState({email:"",password:""});
    let name,value;
    const handleinputs = (e) => {
        name = e.target.name;
        value = e.target.value;
        setlogin({...login,[name]:value});
    };
   // console.log(login);
        const loginuser = async (e)=> {
            e.preventDefault();
            const {email,password} = login; 
            const res = await fetch("/login",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email,password})
            });

            const data = await res.json();
            if(res.status===400 || !data) {
                window.alert("invalid login");
            }else{
                dispatch({type:"user", payload:true});
                window.alert("login Successfull");
                history('/');
            }
        }



    return (
        <div className='mt-20 flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-2xl shadow-black py-10 px-16'>
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
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form method="POST" onSubmit={loginuser}>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email' name = "email" onChange = {handleinputs} value = {login.email}
                            placeholder='Your Email'
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password' name = "password" onChange = {handleinputs} value = {login.password}
                            placeholder='Your Password'
                            required
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            type="submit"
                            className={`bg-green-400 py-2 px-4 text-sm text-white rounded border border-green-400 focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
                    <div className="mt-4">
                        <p>Don't have an account?</p>
                        Click Here to <Link to="/Signup"><span className="text-blue-400 hover:border-b-2 border-blue-200">Signup</span></Link>
                    </div>
            </div>
        </div>
    );
};

export default Login