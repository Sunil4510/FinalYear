import React,{useContext, useEffect} from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
import image from "./images/image1.jpg"
import img2 from "./images/img2.jpg"
import { userContext } from '../App' 
import {motion} from "framer-motion"
const Home = () => {
        const {state,dispatch} = useContext(userContext);
        const history = useNavigate(); 
        const callHome = async ()=>{
            try{
                const res = await fetch("/",{
                    method: "GET",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials:"include"
                })
                const data = await res.json()
                console.log(data, "hi");
                console.log("hii","hello")
                    if(data.status!==200 || !data){
                        const error = new Error(res.error)
                        throw error;
                    }    

            }catch(err){
                history("/Login")
                console.log(err)
            }
        }
    useEffect(()=>{
       // callHome();
    },[]);
    
    const link = "text-blue-300"
    const h3 = "text-3xl tracking-wide mb-2 text-lime-400"
    const p = "text-xl tracking-normal tracking-widest"
    const ul = "ml-10 list-disc tracking-widest text-lg"
    return(
        <section id="topsum_section" className="text-slate-100 p-8 flex justify-between">
           
            <div id="topic-summary" className="syndicates syndicate">
                <div className="summary-title syndicate border-b-2 border-gray-300">
                    <h1 className="text-fuchsia-50 text-4xl font-bold">Summary</h1>
                </div>
                <br/>
                <h3 className={h3}>What is pneumonia?</h3> 
                <p className={p}>Pneumonia is an infection in one or both of the lungs. It causes the air sacs of the lungs to fill up with fluid or pus. It can range from mild to severe, depending on the type of germ causing the infection, your age, and your overall health.</p>
                <br/>
                <h3 className={h3}>What causes pneumonia?</h3>
                    <p className={p}><a className={link}  href="https://medlineplus.gov/bacterialinfections.html">Bacterial</a>, <a className={link} href="https://medlineplus.gov/viralinfections.html">viral</a>, and <a className={link} href="https://medlineplus.gov/fungalinfections.html">fungal</a> infections can cause pneumonia.</p> 
                    <p className={p}>Bacteria are the most common cause. Bacterial pneumonia can occur on its own. It can also develop after you've had certain viral infections such as a <a className={link} href="https://medlineplus.gov/commoncold.html">cold</a> or the <a className={link} href="https://medlineplus.gov/flu.html">flu</a>. Several different types of bacteria can cause pneumonia, including:</p>
                    <ul className={ul}>
                    <li><a className={link} href="https://medlineplus.gov/pneumococcalinfections.html">Streptococcus pneumoniae</a></li>
                    <li>Legionella pneumophila; this pneumonia is often called <a className={link} href="https://medlineplus.gov/legionnairesdisease.html">Legionnaires' disease</a></li>
                    <li>Mycoplasma pneumoniae</li>
                    <li>Chlamydia pneumoniae</li>
                    <li><a className={link} href="https://medlineplus.gov/haemophilusinfections.html">Haemophilus influenzae</a></li>
                    </ul>
                    <p className={p}>Viruses that infect the respiratory tract may cause pneumonia. Viral pneumonia is often mild and goes away on its own within a few weeks. But sometimes it is serious enough that you need to get treatment in a hospital. If you have viral pneumonia, you are at risk of also getting bacterial pneumonia. The different viruses that can cause pneumonia include:</p>
                    <ul className={ul}>
                    <li><a className={link} href="https://medlineplus.gov/respiratorysyncytialvirusinfections.html">Respiratory syncytial virus</a> (RSV)</li>
                    <li>Some common cold and flu viruses</li>
                    <li>SARS-CoV-2, the virus that causes <a className={link} href="https://medlineplus.gov/covid19coronavirusdisease2019.html">COVID-19</a></li>
                    </ul>
                    <p className={p}>Fungal pneumonia is more common in people who have chronic health problems or weakened immune systems. Some of the types include:</p><ul className={ul}>
                    <li><a className={link} href="https://medlineplus.gov/pneumocystisinfections.html">Pneumocystis pneumonia</a> (PCP)</li> 
                    <li>Coccidioidomycosis, which causes <a className={link} href="https://medlineplus.gov/valleyfever.html">valley fever</a></li>
                    <li><a className={link} href="https://medlineplus.gov/histoplasmosis.html">Histoplasmosis</a></li>
                    <li>Cryptococcus</li>
                    </ul>
                    <br/>   
                            <h3 className={h3}>Who is at risk for pneumonia?</h3>
                            <p className={p}>Anyone can get pneumonia, but certain factors can increase your risk:</p><ul className={ul}>
                            <li>Age; the risk is higher for children who are age 2 and under and adults age 65 and older</li>
                            <li>Exposure to certain chemicals, pollutants, or toxic fumes</li>
                            <li>Lifestyle habits, such as <a className={link} href="https://medlineplus.gov/smoking.html">smoking</a>, <a className={link} href="https://medlineplus.gov/alcohol.html">heavy alcohol use</a>, and <a className={link} href="https://medlineplus.gov/malnutrition.html">malnourishment</a></li>
                            <li>Being in a hospital, especially if you are in the <a className={link} href="https://medlineplus.gov/criticalcare.html">ICU</a>. Being sedated and/or on a ventilator raises the risk even more.</li>
                            <li>Having a <a className={link} href="https://medlineplus.gov/lungdiseases.html">lung disease</a></li>
                            <li>Having a weakened immune system</li>
                            <li>Have trouble <a className={link} href="https://medlineplus.gov/cough.html">coughing</a> or <a className={link} href="https://medlineplus.gov/swallowingdisorders.html">swallowing</a>, from a <a className={link} href="https://medlineplus.gov/stroke.html">stroke</a> or other condition</li>
                            <li>Recently being sick with a cold or the flu</li>
                            </ul>
                            <br/>
                            <h3 className={h3}>What are the symptoms of pneumonia?</h3>
                            <p className={p}>The symptoms of pneumonia can range from mild to severe and include:</p><ul className={ul}>
                            <li><a className={link} href="https://medlineplus.gov/fever.html">Fever</a></li>
                            <li>Chills</li>
                            <li>Cough, usually with phlegm (a slimy substance from deep in your lungs)</li>
                            <li><a className={link} href="https://medlineplus.gov/breathingproblems.html">Shortness of breath</a></li>
                            <li><a className={link} href="https://medlineplus.gov/chestpain.html">Chest pain</a> when you breathe or cough</li>
                            <li><a className={link} href="https://medlineplus.gov/nauseaandvomiting.html">Nausea and/or vomiting</a></li>
                            <li><a className={link} href="https://medlineplus.gov/diarrhea.html">Diarrhea</a></li>
                            </ul>
                            <p className={p}>The symptoms can vary for different groups. Newborns and infants may not show any signs of the infection. Others may vomit and have a fever and cough. They might seem sick, with no energy, or be restless.</p>
                            <p className={p}>Older adults and people who have serious illnesses or weak immune systems may have fewer and milder symptoms. They may even have a lower than normal temperature. Older adults who have pneumonia sometimes have sudden changes in mental awareness.</p>
                            <br/>
                            <h3 className={h3}>What other problems can pneumonia cause?</h3>
                            <p className={p}>Sometimes pneumonia can cause serious complications such as:</p><ul className={ul}>
                            <li>Bacteremia, which happens when the bacteria move into the bloodstream. It is serious and can lead to <a className={link} href="https://medlineplus.gov/sepsis.html">septic shock</a>.</li>
                            <li>Lung <a className={link} href="https://medlineplus.gov/abscess.html">abscesses</a>, which are collections of pus in cavities of the lungs</li>
                            <li><a className={link} href="https://medlineplus.gov/pleuraldisorders.html">Pleural disorders</a>, which are conditions that affect the pleura. The pleura is the tissue that covers the outside of the lungs and lines the inside of your chest cavity.</li>
                            <li><a className={link} href="https://medlineplus.gov/kidneyfailure.html">Kidney failure</a></li>
                            <li><a className={link} href="https://medlineplus.gov/respiratoryfailure.html">Respiratory failure</a></li>
                            </ul>
                            <br/>
                            <h3 className={h3}>How is pneumonia diagnosed?</h3>
                            <p className={p}>Sometimes pneumonia can be hard to diagnose. This is because it can cause some of the same symptoms as a cold or the flu. It may take time for you to realize that you have a more serious condition.</p>
                            <p className={p}>Your health care provider may use many tools to make a diagnosis:</p><ul className={ul}>
                            <li>A medical history, which includes asking about your symptoms</li>
                            <li>A physical exam, including listening to your lungs with a stethoscope</li>
                            <li>Various tests, such as
                                        <ul className={ul}>
                                            <li>A chest <a className={link} href="https://medlineplus.gov/xrays.html">x-ray</a></li>
                                            <li>Blood tests such as a <a className={link} href="https://medlineplus.gov/lab-tests/complete-blood-count-cbc/">complete blood count</a> (CBC) to see if your immune system is actively fighting an infection</li>
                                            <li>A <a className={link} href="https://medlineplus.gov/lab-tests/bacteria-culture-test/">Blood culture</a> to find out whether you have a bacterial infection that has spread to your bloodstream</li>
                                        </ul>
                                    </li>
                                    </ul>
                                        <p className={p}>If you are in the hospital, have serious symptoms, are older, or have other health problems, you may also have more tests, such as:</p><ul className={ul}   >
                                        <li>Sputum test, which checks for bacteria in a sample of your sputum (spit) or phlegm (slimy substance from deep in your lungs).</li>
                                        <li>Chest <a className={link} href="https://medlineplus.gov/ctscans.html">CT scan</a> to see how much of your lungs is affected. It may also show if you have complications such as lung abscesses or pleural effusions.</li> 
                                        <li><a className={link} href="https://medlineplus.gov/lab-tests/pleural-fluid-analysis/">Pleural fluid culture</a>, which checks for bacteria in a fluid sample that was taken from the pleural space</li>
                                        <li>Pulse oximetry or <a className={link} href="https://medlineplus.gov/lab-tests/blood-oxygen-level/">blood oxygen level test,</a> to check how much oxygen is in your blood</li>
                                        <li>Bronchoscopy, a procedure used to look inside your lungs' airways</li>
                                    </ul>
                                    <br/>
                                    <h3 className={h3}>What are the treatments for pneumonia?</h3>
                                    <p className={p}>Treatment for pneumonia depends on the type of pneumonia, which germ is causing it, and how severe it is:</p>
                                    <ul className={ul}>
                                        <li><a className={link} href="https://medlineplus.gov/antibiotics.html">Antibiotics</a> treat bacterial pneumonia and some types of fungal pneumonia. They do not work for viral pneumonia.</li>
                                        <li>In some cases, your provider may prescribe antiviral medicines for viral pneumonia</li>
                                        <li>Antifungal medicines treat other types of fungal pneumonia</li>
                                    </ul>

                                    <p className={p}>You may need to be treated in a hospital if your symptoms are severe or if you are at risk for complications. While there, you may get additional treatments. For example, if your blood oxygen level is low, you may receive <a className={link} href="https://medlineplus.gov/oxygentherapy.html">oxygen therapy</a>.</p>
                                    <p className={p}>It may take time to recover from pneumonia. Some people feel better within a week. For other people, it can take a month or more.</p>
                                    <br/>
                                    <h3 className={h3}>Can pneumonia be prevented?</h3>
                                    <p className={p}>Vaccines can help prevent pneumonia caused by pneumococcal bacteria or the <a className={link} href="https://medlineplus.gov/flushot.html">flu virus</a>. Having <a className={link} href="https://medlineplus.gov/germsandhygiene.html">good hygiene</a>, not smoking, and having a <a className={link} href="https://medlineplus.gov/healthyliving.html">healthy lifestyle</a> may also help prevent pneumonia.</p>

                                    <p className={p} className="attribution">NIH: National Heart, Lung, and Blood Institute</p>
                                    </div>
                                    <div 
                                     className="home_right p-10">
                                        <motion.img src={image}
                                        whileHover={{ scale: 1.1 }}
                                        animate={{x:[-20,20,-20,20,0]}} className="w-96 h-80 cursor-pointer rounded-lg shadow-2xl" alt="img"/>
                                        <br/>
                                        <motion.img 
                                        whileHover={{scale:1.1}}
                                        animate={{y:[-20,20,-20,20,0]}} src={img2} className="w-96 h-80 cursor-pointer ml-96 rounded-lg shadow-2xl" alt="img"/>
                                        <br/>
                                        
                                        
                                    </div>
                                                                    
</section>

        // <div className="p-8">
        //     <div className="h-10">    
        //         <h1 className="text-xl text-slate-100 font-bold ">
        //             What is pneumonia?
        //         </h1>   
                
        //         <p className={p} className="text-slate-50 font-semibold">Pneumonia is an infection in one or both of the lungs.
        //             It causes the air sacs of the lungs to fill up with fluid or pus.
        //             It can range from mild to severe, depending on the type of germ causing the infection, 
        //             your age, and your overall health
        //         </p>
        //     </div>
        //     <br/>
        // </div>
    )
}

export default Home
