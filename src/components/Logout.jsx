import React,{useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../App';

const Logout = () => {
    const history = useNavigate();
    const {state,dispatch} = useContext(userContext);
    useEffect(()=>{
        fetch("/Logout",{
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        }).then((res)=>{
            dispatch({type:"user",payload:false})
            history("/Login");
            if(res.status!==200){
                const error = new Error(res.error);
                throw error
            }
        }).catch((err)=>{
            console.log(err);
        })
    },[])    
    return (
        <div>
        </div>
    )
}

export default Logout
