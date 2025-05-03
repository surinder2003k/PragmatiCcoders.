import React, { useContext, useState } from 'react'
import './Nav.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom'
import { newcontext,seccontext } from '../App'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
const Nav = () => {

  const cartvalue=useSelector((state)=>state.cart.value)
  
  const {profiledata,setprofiledata}=useContext(newcontext)   /*array data*/
  
  const {objdata,setobjdata}=useContext(seccontext)         /*object data*/

  function handlechange(e){
    setobjdata({...objdata,
      [e.target.name]:e.target.value
    })
  }
  function onsub(e){
    e.preventDefault()
    setprofiledata([...profiledata,objdata])
    console.log(objdata)
    console.log(profiledata)
    setprofile(false) 
  }

function handleIndustriesdrop(){
  setServicesdrop(false)
  setAboutUs(false)
  setResources(false)
  setBlog(false)
  setCaseStudiesdrop(false)
  setIndustriesdrop(true)
}
function handleServicesdrop(){
  setIndustriesdrop(false)
  setAboutUs(false)
  setResources(false)
  setBlog(false)
  setCaseStudiesdrop(false)
  setServicesdrop(true)
}
function handleCaseStudiesdrop(){
  setIndustriesdrop(false)
  setAboutUs(false)
  setResources(false)
  setBlog(false)
  setServicesdrop(false)
  setCaseStudiesdrop(true)
}
function handleAboutUs(){
  setIndustriesdrop(false)
  setCaseStudiesdrop(false)
  setResources(false)
  setBlog(false)
  setServicesdrop(false)
  setAboutUs(true)
}
function handleBlog(){
  setIndustriesdrop(false)
  setCaseStudiesdrop(false)
  setAboutUs(false)
  setResources(false)
  setServicesdrop(false)
  setBlog(true)
}
function handleResources(){
  setIndustriesdrop(false)
  setCaseStudiesdrop(false)
  setAboutUs(false)
  setServicesdrop(false)
  setBlog(false)
  setResources(true)
}
  const[search,setsearch]=useState(false)
  const[navmanu,setnavmanu]=useState(false)
  const[profile,setprofile]=useState(false)
  const[signin,setsignin]=useState(false) 
  const[Servicesdrop,setServicesdrop]=useState(false)
  const[Industriesdrop,setIndustriesdrop]=useState(false)
  const[CaseStudiesdrop,setCaseStudiesdrop]=useState(false)
  const[AboutUs,setAboutUs]=useState(false)
  const[Blog,setBlog]=useState(false)
  const[Resources,setResources]=useState(false)
  
  

  return (
    <div className=' mainhome text-white flex px-25 items-center gap-30 navmain fixed w-screen h-20'>
        <div className='logopic' >
        <NavLink to={'https://www.pragmaticcoders.com/'}>
        <img src={logo} alt="" />
        </NavLink>
        </div>
        <div className='tabs'>
        <ul className='tabsul flex gap-2 text-[2.5vh] font-semibold'>
            <li onClick={()=>setServicesdrop(false)} onMouseOver={handleServicesdrop} className='Services p-2 hover:text-[#009F6D] ' ><NavLink  className={({isActive})=>isActive?'Activelink':'link'} to={'/services'}>Services</NavLink></li>
            {Servicesdrop && (
              <div className=' drops  absolute w-[217vh] h-[400px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setServicesdrop(false)} className='absolute w-[217vh] bottom-0 h-[50px] left-0'></div>
                  <div className='flex justify-center  w-[20%] h-[80%]   '>
                  <h1 className='text-[2.5vh] font-semibold'>All Services</h1>
                  </div>
                  
                  <div className='w-[22%] h-[90%]  flex flex-col justify-evenly'>
                      <div className='relative px-10 h-[50%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-macbook-line"></i>
                    <h1>Software Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Web & Cloud App Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Mobile Application Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>No-Code Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Blockchain Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Devops Services</h1>
                      </div>

                      <div className='relative px-10 h-[40%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-openai-line"></i>
                      <h1>AI Software Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>AI Agents Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>AI Intigration Services</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Ai Data Solutions</h1>
                      </div>
                  </div>
                  <div className='w-[22%] h-[90%]  flex flex-col justify-evenly'>
                      <div className='relative px-10 h-[50%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-exchange-funds-line"></i>
                    <h1>Custom Fintech Software</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Trading Software Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>insurence Software Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Custom Banking Software</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Custom Financial Software</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Mobile Banking App Development</h1>
                      </div>

                      <div className='relative px-10 h-[40%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-edit-line"></i>
                      <h1>Product Design</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>UI Research</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'> UX Design</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>UI Design</h1>
                      </div>
                  </div>
                  <div className='w-[22%] h-[90%]  flex flex-col justify-evenly'>
                      <div className='relative px-10 h-[50%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-pulse-line"></i>
                    <h1>Custom Helthcare Software</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Patient Portal Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Telehealth App Development</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Custom Physical Thearapy Apps</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Custom Telemadicin Software</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Custom Patient Engagement Apps</h1>
                      </div>

                      <div className='relative px-10 h-[40%] w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-group-line"></i>
                      
                      <h1>IT Outsourcing</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Nearshare Outsourcing</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Offsore Outsourcing</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Build Oprator Transfer</h1>
                      </div>
                  </div>
              </div>
            )}
            <li onClick={()=>setIndustriesdrop(false)}onMouseOver={handleIndustriesdrop} className='Industries p-2 hover:text-[#009F6D]'><NavLink  className={({isActive})=>isActive?'Activelink':'link'} to={'/industries'}>Industries</NavLink></li>
            {Industriesdrop && (
              <div  className='drops text-[2.4vh]   absolute w-[217vh] h-[200px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setIndustriesdrop(false)} className='absolute w-[217vh] bottom-0 h-[50px] left-0'></div>
                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] flex justify-center  leading-7 '>
                      <h1>All Industries</h1>
                      </div>
                    </div>

                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] leading-7 border-l-1'>
                    <h1>Fintech</h1>
                    <h1>Digital Health</h1>
                      </div>

                  </div>
                  <div className='w-[22%] h-[90%]  flex flex-col justify-center '>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>E-commerce</h1>
                      <h1>Entertainment</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%]  flex flex-col justify-center'>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>Custom Software Development Services</h1>
                      <h1>Bussiness Counsulting</h1>
                      </div>
                  </div>
              </div>
            )}
            <li onClick={()=>setCaseStudiesdrop(false)} onMouseOver={handleCaseStudiesdrop} className='CaseStudies p-2 hover:text-[#009F6D]'><NavLink className={({isActive})=>isActive?'Activelink':'link'}  to={'/casestudies'}>Case Studies</NavLink></li>
            {CaseStudiesdrop && (
              <div  className=' drops  absolute w-[217vh] h-[400px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setCaseStudiesdrop(false)} className='absolute w-[217vh] bottom-0 h-[50px] left-0'></div>
                  <div className='flex justify-center  w-[20%] h-[80%]   '>
                  <h1 className='text-[2.5vh] font-semibold'>All Case Studies</h1>
                  </div>
                  
                  <div className='w-[24%] h-[90%]  flex flex-col justify-evenly'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-money-rupee-circle-line"></i>
                    <h1>Finetech</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Atom Bank -One of UK's Top Challengers Banks</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>KodyPay - Payment Platform</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>BLOC-X -OTC Commodity Trading</h1>
                      </div>

                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-box-1-line"></i>
                      
                      <h1>E-commerce/Retail</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Kitopi -Smart Kitchen</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Webinterpret -Cross-Platform E-commerce</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Photochain: Decenterlized Photo Maketplace</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%] gap-18 flex flex-col justify-center'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-lock-2-line"></i>
                    
                    <h1>Blockchain</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Common Wealth: Web3 investing platform</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>UltiArena: Play-To-Earn NFT Hub</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>EXCC - Developing New Blockchain</h1>
                      </div>

                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-clapperboard-line"></i>
                      
                      <h1>Entertainement</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Unlocked -Event Management</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Duel -Social Media App</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>OnLive:Decenterlized Streaming Platform</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%]  flex flex-col justify-evenly'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-heart-pulse-line"></i>
                    <h1>Digital Health</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>WithHealth - Medical Platform</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>AccentPharm - medical Translation</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Health Folder - Medical Documentation Management</h1>
                      </div>

                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-openai-fill"></i>
                      <h1>AI</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Auccounting Automation</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>US Patients Care Platform | AI & Data Science</h1>
                      </div>
                  </div>
              </div>
            )}
            <li onClick={()=>setAboutUs(false)} onMouseOver={handleAboutUs} className='AboutUs p-2 hover:text-[#009F6D]'>    <NavLink className={({isActive})=>isActive?'Activelink':'link'}  to={'/aboutus'}>About Us</NavLink></li>
            {AboutUs && (
              <div  className='drops text-[2.4vh]   absolute w-[217vh] h-[200px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setAboutUs(false)} className='absolute w-[217vh] bottom-0 h-[50px] left-0'></div>
                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] flex justify-center  leading-7 '>
                      <h1>About Us</h1>
                      </div>
                    </div>

                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] leading-7 border-l-1'>
                    <h1>Meet Our Team</h1>
                    <h1>How We Work</h1>
                      </div>

                  </div>
                  <div className='w-[22%] h-[90%]  flex flex-col justify-center '>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>Become a Partner</h1>
                      <h1>News</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%]  flex flex-col justify-center'>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>Join Us!</h1>
                      </div>
                  </div>
              </div>
            )}
            <li onClick={()=>setBlog(false)} onMouseOver={handleBlog} className='Blog p-2 hover:text-[#009F6D]'>       <NavLink className={({isActive})=>isActive?'Activelink':'link'}  to={'/blog'}>Blog</NavLink></li>
            {Blog && (
              <div  className='drops text-[2.4vh]   absolute w-[217vh] h-[200px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setBlog(false)} className='absolute w-[217vh] bottom-0 h-[50px] left-0'></div>
                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] flex justify-center  leading-7 '>
                      <h1>All curated categories</h1>
                      </div>
                    </div>

                  <div className='w-[22%] h-[90%] justify-center flex flex-col '>
                      <div className='px-5 h-[50%] w-[100%] leading-7 border-l-1'>
                    <h1>Fintech</h1>
                    <h1>Digital Health</h1>
                    <h1>Blockchain</h1>
                    <h1>Ai</h1>
                      </div>

                  </div>
                  <div className='w-[22%] h-[90%]  flex flex-col justify-center '>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>Product Development</h1>
                      <h1>Product Management</h1>
                      <h1>Product Design</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%]  flex flex-col justify-center'>
                      <div className='px-5 h-[40%] w-[100%] leading-7 border-l-1'>
                      <h1>Agile & Scrum</h1>
                      <h1>Outsourcing & Collaboration</h1>
                      </div>
                  </div>
              </div>
            )}
            <li onClick={()=>setResources(false)} onMouseOver={handleResources} className='Resources p-2 hover:text-[#009F6D]'>  <NavLink className={({isActive})=>isActive?'Activelink':'link'}  to={'/resources'}>Resources</NavLink></li>
            {Resources && (
              <div  className=' drops  absolute w-[217vh] h-[450px] flex gap-2 items-center justify-evenly left-0  top-[80px]'>
                  <div onMouseOut={()=>setResources(false)} className='absolute  w-[217vh] bottom-0 h-[50px] left-0 '></div>
                  <div className='flex justify-center  w-[20%] h-[80%]   '>
                  <h1 className='text-[2.5vh] font-semibold'>All Resources</h1>
                  </div>
                  
                  <div className='w-[24%] h-[90%]  flex flex-col justify-center gap-40'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-tools-line"></i>
                    
                    <h1>Tools</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Market Insights Al</h1>
                      </div>

                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-book-2-line"></i>
                      <h1>Ebooks</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>How to start a startup</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>How to go live with your product in less
                    than 3 months</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%] gap-25 flex flex-col justify-center'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-door-open-line"></i>
                    <h1>Guides</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Fintech guide</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Digital health guide</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Insurtech guide</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Al trends</h1>
                      </div>

                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-vidicon-line"></i>
                      <h1>Video</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Podcast</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Webinars</h1>
                      </div>
                  </div>
                  <div className='w-[24%] h-[90%]  flex flex-col relative top-10'>
                      <div className='relative px-10  w-[100%] leading-7 border-l-1'>
                      <i className="absolute left-4 text-[#009F6D] font-light ri-menu-fill"></i>
                    <h1>Other</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Newsletter</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Glossary</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Product Health Checklist</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>Best Al for coding in 2025: Al tools for
                    developers</h1>
                    <h1 className='text-[2.3vh] font-medium opacity-60'>60 startup business model patterns for
                    2025</h1>
                      </div>

                      
                  </div>
              </div>
            )}
        </ul>
        </div>
        <div className='btndiv  flex gap-6 items-center'>
        <i  onClick={()=>setsearch(true)} className="searchbtn hover:text-[#009F6D] cursor-pointer text-[3.2vh]  ri-search-line"></i>
        {search&&(
          <div className='absolute  top-18 right-70 flex items-center'>
            <i className="text-[2.7vh] opacity-40 text-black absolute top-3 left-2 ri-search-line"></i>
            <input type="text" placeholder='Search' className='text-black outline-none bg-white px-9 text-[2.6vh]  py-3 w-[50vh] '  />
            <i onClick={()=>setsearch(false)} className="cursor-pointer absolute text-[2.7vh] text-red-500  right-4 top-3 ri-close-circle-line"></i>
          </div>
        )}
        <i onClick={()=>setsignin(true)} className="profilebtn cursor-pointer text-[3.2vh] ri-user-line hover:text-[#009F6D]"></i>
      
{/* Signup model */}
      
        {profile && (
          
          <div className='profilediv flex justify-center items-center w-screen inset-0 absolute h-screen  '>
          <div className='  absolute bg-white flex  w-[850px] h-[570px]'>
          <i onClick={()=>setprofile(false)} className="absolute text-[#009F6D] hover:text-[#008c60] right-2 cursor-pointer text-[4vh] ri-close-line"></i>
              <div className='w-[50%] h-[100%] bg-[#009F6D] gap-3.5 flex flex-col items-center justify-center'>
                <h1 className='text-[3.5vh]   w-[250px] font-semibold text-center'>Come join us!</h1>
                <p className='text-[2.7vh] w-[90%] h-[28%] tracking-wide text-center  '>
                We are so excited to have you here.If you haven't already, create an account to get access to exclusive offers, rewards, and discounts.
              </p>
              <h1 
              onClick={()=>{
                setprofile(false)
                setsignin(true)
              }}
              className='border-1 cursor-pointer text-[3vh] p-2.5 rounded-4xl w-[85%] hover:bg-[#008c60] text-center'>Already have an account? Signin.</h1>
              </div>
              <div className='w-[50%] flex flex-col gap-3 justify-center   h-[100%] '>
                <h1 className='text-[5vh] w-[100%] text-center font-bold text-black'>Signup</h1>
                <form onSubmit={onsub}  className='border-2 flex flex-col items-center p-7 gap-4'>
                  <input type="text" name='name' required onChange={handlechange} placeholder='Enter Your Name'  className=' rounded px-3 w-[100%] outline-none bg-[#F1EEF0]  text-black h-[60px] '/>
                  <input type="email" name='email' required onChange={handlechange} placeholder='Enter Your Email' className='rounded px-3 w-[100%] outline-none bg-[#F1EEF0] text-black h-[60px] '/>
                  <input type="text" name='phone'  required onChange={handlechange} placeholder='Enter Your Phone' className=' rounded px-3 w-[100%] outline-none bg-[#F1EEF0]  text-black h-[60px] '/>
                  <input type="password" name='password' required onChange={handlechange} placeholder='Enter Your Password' className='rounded px-3 w-[100%] outline-none bg-[#F1EEF0]  text-black h-[60px]'/>
                  <button type='submit' className='p-3 w-[100%] text-center bg-[#009F6D] hover:bg-[#008c60] cursor-pointer rounded '>Signup</button>
                </form>
              </div>
          </div>
          </div>
        )}

        {/* Signin form */}
        {signin && (
  <div className='profilediv flex justify-center items-center w-screen inset-0 absolute h-screen'>
    <div className='absolute bg-white flex w-[850px] h-[570px]'>
      <i onClick={() => setsignin(false)} className="absolute text-[#009F6D] hover:text-[#008c60] right-2 cursor-pointer text-[4vh] ri-close-line"></i>
      
      <div className='w-[50%] h-full bg-[#009F6D] gap-3.5 flex flex-col items-center justify-center'>
        <h1 className='text-[3.5vh] w-[250px] font-semibold text-center'>Welcome Back!</h1>
        <p className='text-[2.7vh] w-[90%] h-[28%] tracking-wide text-center'>
          We’ve missed you! Log in to access your account, track your orders, and enjoy all the benefits we offer.
        </p>
        <h1 
        onClick={()=>{
          setsignin(false)
          setprofile(true)
        }}
        className='border-1 cursor-pointer text-[3vh] p-2.5 rounded-4xl w-[85%] hover:bg-[#008c60] text-center'>Don’t have an account? Signup.</h1>
      </div>

      <div className='w-[50%] flex flex-col gap-4 justify-center h-full'>
        <h1 className='text-[5vh] w-full text-center font-bold text-black'>Signin</h1>
        <form  className='border-2 flex flex-col items-center p-7 gap-4'>
          <input type="email" name='email' required  placeholder='Enter Your Email' className='rounded px-3 w-full outline-none bg-[#F1EEF0] text-black h-[60px]' />
          <input type="password" name='password' required  placeholder='Enter Your Password' className='rounded px-3 w-full outline-none bg-[#F1EEF0] text-black h-[60px]' />
          <button type='submit' className='p-3 w-full text-center bg-[#009F6D] hover:bg-[#008c60] cursor-pointer rounded'>Signin</button>
        </form>
      </div>
    </div>
  </div>
)}


        <button  className='contactbtn cursor-pointer contactbtn px-3.5 py-1.5 border-2 border-[#01A471] hover:bg-[#008c60] duration-[200ms] font-normal text-[2.6vh] text-white'><NavLink to={'/'}>Contact Us</NavLink></button>
        <NavLink to={'/cartItem'}><i  className="absolute top-6 right-20 text-[3.5vh] ri-shopping-cart-line cursor-pointer"></i></NavLink>
        <h1 className='absolute right-18 top-4 w-[15px] text-center h-[15px] text-[1.5vh] font-bold bg-red-500 rounded-[40px]'>{cartvalue}</h1>
        </div>
        <i onClick={()=>setnavmanu(true)} className="manubtn hidden cursor-pointer  ri-menu-fill hover:text-[#009F6D]"></i>
        {navmanu&&(
          <div>
              <div>
              <i onClick={()=>setnavmanu(false)} class="cursor-pointer text-[2.7vh] absolute right-3 top-5 bg-black  hover:text-[#009F6D] ri-close-large-line"></i>
              </div>
              <div className='text-white  text-[2.5vh] font-bold h-90 w-screen   bg-[#323233] absolute left-0 top-20'>
                <ul className=' h-90 w-screen'>
                <NavLink to={'/services'}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    Services</li>
                    </NavLink>
                    <NavLink to={'/industries'}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    Industries</li>
                    </NavLink>
                    <NavLink to={''}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    Case Studies</li>
                    </NavLink>
                    <NavLink to={''}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    About Us</li>
                    </NavLink>
                    <NavLink to={''}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    Blog</li>
                    </NavLink>
                    <NavLink to={''}>
                  <li onClick={()=>setnavmanu(false)} className='h-15 hover:bg-[#ddd] hover:text-black w-screen py-5 px-10  '>
                    Resources</li>
                    </NavLink>
                </ul>
              </div>
          </div>
        )}
    </div>
  )
}

export default Nav