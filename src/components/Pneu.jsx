import React, { useEffect, useState } from 'react'
const Pneu = () => {
//const[src,setsrc] = useState();
//const[preview,setpreview] = useState();
const [file, setFile] = useState(null);
const fileHandler = event => {
  console.log(event.target.files[0]);
  let reader = new FileReader();
  reader.onload = function(e) {
    setFile(e.target.result);
  };
  reader.readAsDataURL(event.target.files[0]);
};
// useEffect(()=>{
//     if(!src){
//         setsrc(undefined)
//         return
//     }
//     const oburl = URL.createObjectURL(src);
//     setpreview(oburl);
//     return()=>URL.revokeObjectURL(oburl);
// },[src])

const res = (e) => {
    e.preventDefault();
    alert('working');
}
// const changes = (e) => {
//     console.log(e.target.files[0].name);
//     if (!e.target.files || e.target.files.length === 0) {
//         setsrc(undefined)
//         return
//     }
//     setsrc(e.target.files[0]);
// }
//console.log(src);
return (
    <div className="home flex items-center justify-center flex-col pt-10 space-y-8">
        <div className="home__heading">
        <h1 className='home__heading_h font-bold text-6xl text-lime-700 hover:text-lime-400'>Pneumonia detection</h1>
        </div>
        <form onSubmit={res} className="flex items-center justify-evenly flex-col">
            <div className="home__input p-3 w-80 rounded-lg bg-cyan-300 shadow-2xl shadow-black-100 hover:bg-cyan-400">
                <input type="file" className="home_input_i cursor-pointer" onChange={fileHandler} required/>
            </div><br/>
           {file&&(<img src={file} className="w-96 h-50 rounded-lg"  alt="uploaded"/>)}
            <div className="home__button w-40 p-2 text-2xl rounded-lg mt-10 text-center bg-green-400 shadow-2xl shadow-black-100 hover:bg-green-500 cursor-pointer">
                <input type="submit" className="home font-semibold cursor-pointer decoration-2" value="Prediction"/>
            </div>                
        </form>
       

    </div>
)
}
export default Pneu
