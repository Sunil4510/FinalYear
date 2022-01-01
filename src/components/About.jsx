import React, { useContext,useEffect } from 'react'
import { userContext } from '../App';
import {useNavigate} from "react-router-dom"
const About = () => {
    const {state,dispatch} = useContext(userContext);
        const history = useNavigate(); 
        const callAbout = async ()=>{
            try{
                const res = await fetch("/About",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials:"include"
                })
                const data = await res.json()
                //console.log(data)
                    if(data.status!==200 || !data){
                        dispatch({type:"user", payload:false})
                        //history("/Login")
                    }    
                    dispatch({type:"user", payload:true})

            }catch(err){
                history("/Login")
                dispatch({type:"user", payload:false})
               // console.log(err)
            }
        }
    useEffect(()=>{
       callAbout();
    },[])

    return (
        <div className="p-8">
            <h1 className="text-3xl text-slate-50">Pneumonia Detection</h1>
            <br/>
            <p className="text-xl text-slate-50">Hi there,</p>
        </div>
    )
}

export default About
