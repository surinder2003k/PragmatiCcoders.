import React, { useRef, useState } from 'react'
import './home.css'
import nlogo from '../assets/nlogo.png'
import ai2 from '../assets/ai2.png'
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
const Home = () => {
  const[aibot,setaibot]=useState(false)
  const[send,setsend]=useState('')
  const[data,setdata]=useState([])
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const[isplaying,setisplaying]=useState(true)  
  const showvideoref = useRef(null)

  function handleplayvideo(){
    setShow(true)
    setisplaying(false)
    showvideoref.current.play()
  }
  
  function handlechange(e){
    setsend(e.target.value)
  }
  
  async function handlesub() {
    if (send.trim() === '') return;
  
    setdata(prev => [...prev, send]); // user ka message add
    const userMessage = send; // yeh temporary store kar liya
    setsend('');
    setLoading(true); // 👈 Start loading indicator
  
    try {
      const res = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDL2iDI9ANBqS5z7yaRc18osXo6lyJDgB4`,
        {
          contents: [{ parts: [{ text: userMessage }] }]
        },
        { headers: { "Content-Type": "application/json" } }
      );
  
      const aiReply = res.data?.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
      
      setdata(prev => [...prev, aiReply]); // AI ka reply add
    } catch (error) {
      console.error(error);
      setdata(prev => [...prev, "Error getting response."]);
    }finally{
      setLoading(false);
    }
  }


  function handlekey(e) {
  if (e.key === 'Enter') {
    handlesub();  // same handlesub call hoga
  }
}
function handleclose() {
  setaibot(false);
  setsend('');   
  setdata([]);   
}

  
  return (
    <div className=' w-full'>
  
        {/* aibot */}

        <div className='absolute inset-0 '>
          <div className=' aibot fixed  right-10 bottom-10'>
            <i onClick={()=>setaibot(true)} className= "ai bg-none cursor-pointer bg-[#009F6D] rounded-4xl p-2.5 text-white text-[5vh] ri-speak-ai-fill"></i>
          </div>
          {aibot && (
        <div className='absolute inset-0 '>
            <div className='fixed w-[280px] rounded-3xl border-9 border-[#009F6D] right-10 p-2 bottom-30 z-3 h-[400px] bg-[#E9F5FE] '>
            <h1  onClick={handleclose}  className=' cursor-pointer absolute right-3 text-[3vh] text-[#009F6D]'>x</h1>
            <img src={ai2} className='h-[80px] relative left-20 bg-[#E1EFFF] rounded-[40px] p-3 ' alt="" />
            <ul className='text-[2vh] p-2 flex  flex-col gap-2 overflow-x-auto h-[220px] w-full'>
        
        {/* this map for user sent data */}

            {data.map((ele, index) => (
            <li key={index} className={` w-[100%] rounded-2xl p-2 
              ${index % 2 === 0 ? 'bg-[#009F6D] text-white' : 'bg-white text-black'}`}>
              {ele}
            </li>
            ))}
                {loading && (
              <li className="bg-white text-gray-600 w-full rounded-2xl p-2 flex items-center gap-2">
                <span className="animate-spin">⏳</span> Thinking...
              </li>
            )}
        
        {/* here i use map for ai data */}

            </ul>
{/* ai text box        */}
             <input onKeyDown={handlekey} value={send} onChange={handlechange} type="text" className='w-[240px] h-[40px] border-2 border-[#009F6D] absolute bottom-5 left-2.5 rounded-3xl pr-8 p-3 outline-none text-[2vh]' placeholder='How can i help you ?' /> 
            <i  onClick={handlesub} className="absolute right-4 bg-gray-200 cursor-pointer text-[#009F6D] rounded-[40px] w-[25px] flex items-center justify-center bottom-7 ri-send-plane-2-fill"></i>
            </div>
        </div>
          )}
        </div>

      {/* home1 */}
      
      <div className='home1 flex flex-col h-[100vh] justify-center w-[100%] bghome gap-10 items-center' >
        <div className='h-[20vh] w-[75vh] hctext'>
          <h1 className='text-[5.5vh] text-center font-normal'>
            <span className='text-[#009F6D]'>Custom Software</span><span className='text-white'>for Fintech
              and Healthcare Leaders</span>
          </h1>
          <span className='text-white hdtext hidden'>We're on the path to becoming the <span className='text-[#009F6D]'>world's most effective</span> software development agency.</span>
        </div>
        <div className='flex h-[26%] justify-evenly w-[80%] hcardbox'>
          <div className='bg-[#1D1F23] h-[100%] w-[22%] hover-box relative'>
            <i className="hidden ri-arrow-right-s-line"></i>
            <img src="https://www.pragmaticcoders.com/wp-content/uploads/2025/02/VariantsCustom-Financial-Software-Development-Services.png" alt="" className='h-[100px] w-[100px] absolute bottom-30 fimage left-22' />

            <h1 className='text-center text-white w-[80%] absolute font-bold left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Custom Fintech Software Development</h1>

            <h1 className='text-center text-white w-[100%] absolute bottom-5 downh1 left-0'><span>Check Our Services</span> </h1>

          </div>
          <div className='bg-[#1D1F23] h-[100%] w-[22%] hover-box relative'>
            <i className="hidden ri-arrow-right-s-line"></i>
            <img src="https://www.pragmaticcoders.com/wp-content/uploads/2025/02/VariantsAI-Development.png" alt="" className='h-[100px] w-[100px] absolute bottom-30 fimage left-22' />
            <h1 className='text-center text-white w-[80%] absolute font-bold left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>AI Software Development Services</h1>
            <h1 className='text-center text-white w-[100%] absolute bottom-5 downh1 left-0'><span>Check Our Services</span></h1>
          </div>
          <div className='bg-[#1D1F23] h-[100%] w-[22%] hover-box relative'>
            <i className="hidden ri-arrow-right-s-line"></i>
            <img src="https://www.pragmaticcoders.com/wp-content/uploads/2025/02/VariantsCustom-Digital-Health-Development.png" alt="" className='h-[100px] w-[100px] absolute bottom-30 fimage left-22' />
            <h1 className='text-center text-white w-[80%] absolute font-bold left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Custom Degital Health Software Solutions</h1>
            <h1 className='text-center text-white w-[100%] absolute bottom-5 downh1 left-0'><span>Check Our Services</span></h1>
          </div>
          <div className='bg-[#1D1F23] h-[100%] w-[22%] hover-box relative'>
            <i className="hidden ri-arrow-right-s-line"></i>
            <img src="https://www.pragmaticcoders.com/wp-content/uploads/2025/02/Custom_Software_icon.png" alt="" className='h-[100px] w-[100px] absolute bottom-30 fimage left-22' />
            <h1 className='text-center text-white w-[80%] absolute font-bold left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]'>Custom Software Development Solution</h1>
            <h1 className='text-center text-white w-[100%] absolute bottom-5 downh1 left-0'><span>Check Our Services</span></h1>
          </div>
          <div className='flex text-center flex-col  text-white absolute -bottom-6'>
            <NavLink to={'#home2'}> <h1 className='text-[42px] font-extralight'>|</h1>
            <h1 className='text-center text-[1.8vh] '>Scroll to see more</h1>
            <img className='w-[38px]  text-center top-0.5  relative left-8' src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2738%27 height=%2754%27 fill=%27none%27%3E%3Crect width=%2736%27 height=%2752%27 x=%271%27 y=%271%27 fill=%27%23000%27 stroke=%27%23fff%27 stroke-width=%272%27 rx=%2718%27/%3E%3Cpath fill=%27%23E9E9E9%27 stroke=%27%23fff%27 d=%27M18.5 25.5h1v4h-1z%27/%3E%3C/svg%3E" alt="" />
            </NavLink>
          </div>
        </div>
      </div>
      
      {/* home2 */}
      
      <div id='home2' className='home2 secdiv overflow-hidden text-black bg-white bghome2 flex justify-center items-center  h-[100vh] w-[100%]' >
        <div className='flex h-[70%] justify-end p-5 w-[50%] items-center'>
          <div className='flex flex-col gap-5'>
            <h1 className='text-[3.5vh] font-bold'>
              Tony Kelly on working with Pragmatic Coders
            </h1>
            <p className='text-[2.5vh] italic'>“[…] Coming over here and having the team go, ‘We saw this, we think this is a better way of doing this,’ and you go, ‘Ooh. That’s 10x better than the way we were going to do it, and we didn’t even realize that was a problem. </p>
            <p className='text-[2.5vh] italic'>That’s the kind of solution-oriented approach you want to have in a partner, right? “</p>
            <div className='flex justify-evenly w-[70%] items-center'>
              <span className='h-[100%] text-[2.5vh]'><b>Tony Kelly</b> – Core Team Member at <br /> <b>Common Wealth</b>, Serial CTO, CPO and <br />Founder</span>
              <img src="https://www.pragmaticcoders.com/wp-content/uploads/elementor/thumbs/tony-kelly-qycgwtmfow10vt07ytn3i1ayyo1yrw9y1mvzlvcnhk.webp" className='h-[100px] w-[100px]' alt="image" />
            </div>
            <h1 className='text-[3vh] font-bold'>Key Cooperation Results:</h1>
            <ul className='list-disc text-[2.5vh] pl-7'>
              <li className='marker:text-[#0D8D65] marker:text-2xl'>Just 11 weeks from idea to launch</li>
              <li className='marker:text-[#0D8D65] marker:text-2xl'>63,000+ registrations on Common Wealth app in the first 3 weeks</li>
              <li className='marker:text-[#0D8D65] marker:text-2xl'>1.64 million missions completed by users  that's 3,291 missions/hour!</li>
            </ul>
          </div>
        </div>

        <div className='flex h-[70%] w-[40%] items-center'>
          <div className='bg-gray-600 h-[90%] w-[92%]'>
            <div className='h-[70%] w-[100%] relative'>
            {isplaying && (
              <i onClick={handleplayvideo} className= " playbtn h-[125px] p-7 text-[7vh] text-center text-white w-[120px] absolute left-[50%]  ri-play-large-fill top-[50%] transform translate-x-[-50%] translate-y-[-50%]"></i>
            )}  
              
              
              <video ref={showvideoref} muted src="https://www.pragmaticcoders.com/wp-content/uploads/2024/08/Common-Wealth-Testimonial-WWW_FHD-5Mbps.mp4"></video>

            </div>
            <div className='flex h-[30%] w-[100%]'>
              <div className='flex bg-[#01A570] h-full justify-center w-[20%] items-baseline'>
                <img src={nlogo} className='h-[80%] p-3 w-[80%]' alt="image not found" />
              </div>
              <div className='flex bg-black h-full justify-center w-[80%] items-center'>
                <h1 className='text-[2.5vh] text-white font-bold ml-7'>Case Study: How We Made Early-Stage Startup Investing Accessible to Everyone</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* home3 */}

      <div className='home3 flex bg-white h-[100vh] justify-between w-[100%] items-center' >
        <div className='flex flex-col bg-white h-[70%] w-[40%] gap-8 items-center'>
          <h1 className='text-[5.5vh] w-[70%] font-bold'>Experts in building digital products</h1>
          <p className='text-[3vh] w-[70%]'>Since 2014, we have been developing solutions that address real problems. We have helped over 100 clients bring their software ideas to life, launching digital products that have reached millions of users.</p>
        </div>
        <div className='h-[90%] w-[60%]'>
          <img className='h-full w-full' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/01/Next-Unicorn-graphic-homepage-hero-png.webp" alt="" />
        </div>
      </div>

      {/* home4 */}

      <div className='home4 flex flex-col bg-white  h-[80vh] justify-center w-[100%] gap-5 items-center'>
        <h1 className=' h-[70px] text-[5.7vh] text-center w-[70%] font-bold tracking-wide'>What our clients say about working with us</h1>
        <div className=' flex flex-col bg-[#FBFBFA] h-[300px] w-[85%] items-center'>
          <div className='  relative h-[20%] gap-5 w-[90%] flex items-center'>
            <h1 className=' text-[3.5vh] hover:underline   '>Pragmatic Coders Reviews</h1>
            <h1 className=' text-xl flex relative top-0.5 gap-2'><span>4.8</span>
              <span className='cursor-pointer'>
                <i className=" text-orange-600 ri-star-s-fill"></i>
                <i className=" text-orange-600 ri-star-s-fill"></i>
                <i className=" text-orange-600 ri-star-s-fill"></i>
                <i className=" text-orange-600 ri-star-s-fill"></i>
                <i className=" text-orange-600 ri-star-s-fill"></i>
              </span></h1>
            <h1 className='text-[11px] cursor-pointer relative top-1 -left-3.5 text-orange-600'>18 REVIEWS</h1>
            <div className='flex    w-[300px] h-[100%] absolute right-0 '>
              <p className='text-[10px]  absolute right-15 top-4 h-[40%]'>Powered by</p>
              <img className='w-[55px] h-[30px] absolute top-1.5 right-0' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 87.861 25"><path fill="%2317313b" d="M22.861 0h4v25h-4zm18 17.025c0 3.826-3.217 4.131-4.174 4.131-2.391 0-2.826-2.238-2.826-3.588V8h-4v9.548c0 2.37.744 4.326 2.048 5.63 1.152 1.153 2.878 1.783 4.748 1.783 1.326 0 3.204-.413 4.204-1.326V25h4V8h-4zM52.861 2h-4v6h-3v4h3v13h4V12h3V8h-3zm15.597 17.917c-.871.783-2.021 1.217-3.283 1.217-2.782 0-4.825-2.043-4.825-4.848s1.978-4.762 4.825-4.762c1.24 0 2.412.413 3.305 1.196l.607.522 2.697-2.696-.675-.609C69.522 8.504 67.415 7.7 65.174 7.7c-5 0-8.631 3.608-8.631 8.565 0 4.936 3.718 8.673 8.631 8.673 2.283 0 4.412-.804 5.979-2.26l.652-.609-2.739-2.694zM86.061 9.482C84.909 8.33 83.559 7.7 81.689 7.7c-1.326 0-2.828.413-3.828 1.325V0h-4v25h4v-9.365c0-3.826 2.718-4.13 3.675-4.13 2.391 0 2.325 2.239 2.325 3.587V25h4v-9.887c0-2.37-.495-4.326-1.8-5.631"/><path fill="%23FF3D2E" d="M65.043 13.438a2.891 2.891 0 1 1 0 5.784 2.891 2.891 0 0 1 0-5.784"/><path fill="%2317313b" d="M17.261 18.721c-1.521 1.565-3.587 2.413-5.761 2.413-4.456 0-7.696-3.5-7.696-8.304 0-4.826 3.24-8.326 7.696-8.326 2.153 0 4.196.847 5.74 2.391l.608.609 2.674-2.674-.587-.609C17.718 1.938 14.718.7 11.5.7 4.935.7 0 5.917 0 12.851 0 19.764 4.957 24.96 11.5 24.96c3.24 0 6.24-1.26 8.457-3.543l.587-.609-2.652-2.717z"/></svg>'} alt="" />
            </div>
          </div>

          <div className='hcards overflow-x-scroll w-[90%]  h-[80%] flex gap-6'>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"The Pragmatic Coders' team, along  product manager, assisted us in staying focused."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className='text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"The Pragmatic Coders' team, along  product manager, assisted us in staying focused."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className=' text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"The Pragmatic Coders' team, along  product manager, assisted us in staying focused."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className=' text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"Their experience in mobile development  financial projects was invaluable."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className=' text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"Their experience in mobile development  financial projects was invaluable."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className=' text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            <div className='card  w-[240px] p-3 flex flex-col gap-4 m-2  h-[200px]  '>
              <div>
              <h1 className=' w-[200px] h-[30px] text-xl flex relative top-0.5 gap-2'><span>4.8</span>
                <span className='cursor-pointer'>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                  <i className=" text-orange-600 ri-star-s-fill"></i>
                </span>
              </h1>
              <p className=' w-[220px]'>"Their experience in mobile development  financial projects was invaluable."</p>
              </div>
              <h1 className= 'tracking-wide  w-[220px] opacity-55 font-semibold text-[1.6vh]'>Head of Delivery, Healthcare Company</h1>
              <h1 className=' flex gap-1 items-center'><img className='  w-[17px] h-[17px]' src={'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14"><path d="m13.7 5-.8.2.3 1.8c0 3.4-2.8 6.1-6.2 6.1S.8 10.4.8 7a6.1 6.1 0 0 1 9.4-5.2l.4-.8C9.5.3 8.3 0 7 0a7 7 0 0 0-7 7c0 3.9 3.1 7 7 7a7 7 0 0 0 6.7-9m-8.8.4-.6.6 2.8 2.8 6.7-6.7-.6-.6-6.1 6.1z"/></svg>'} alt="" />
              <span className=' text-[1.7vh] opacity-59 font-semibold'>Verified Review</span></h1>
            </div>
            
            
          </div>
        </div>
      </div>
      
      {/* home5 */}

      <div className='home5  bg-white justify-center items-center  flex flex-col h-[100vh]  w-[100%] '>
        <div className='   h-[80%] flex justify-between w-[85%] '>
              <div className='bg-[#f7f7f7] flex flex-col gap-25 p-10 w-[49%] h-[100%] '>
                <h1 className=' text-[3.3vh]'>
                <strong>I'm impressed by how flexible Pragmatic Coders is</strong> (...). Culturally, they're a really good fit for us, and the team is very responsive to feedback. Whenever I ask them to do something, they look at it, and they're not scared to push back. I've found it very easy to work with them — we have more of a partnership than a client-supplier relationship.
                </h1>
                <div className=' flex gap-5'>
                  <img className='rimage w-[80px] object-cover  h-[80px]' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/02/Simon-Dawson1.webp"  alt="" />
                <h1 className='flex gap-3 flex-col  '>
                  <span className='text-[3.1vh]  font-bold'>Simon Dawson</span>
                  <span className='text-[2.6vh] opacity-60'>Head of Engeneering, Atom Bank</span></h1>
                </div>
              </div>
              <div className='bg-[#f7f7f7] flex flex-col gap-41 p-10 w-[49%] h-[100%] '>
                <h1 className=' text-[3.3vh]'>Pragmatic Coders <strong>pay attention to detail and understand the business domain correctly.</strong> They led us to a successful launch of our product this year. We’re happy with the effects of their work. Our team is still using the platform and building on top of it.</h1>
                <div className=' flex gap-5'>
                  <img className='rimage w-[80px] object-cover  h-[80px]' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/01/Marcin-Welner.webp"  alt="" />
                <h1 className='flex gap-3 flex-col  '>
                  <span className='text-[3.1vh]  font-bold'>Martin Welner</span>
                  <span className='text-[2.6vh] opacity-60'>Technical Director, kitopi</span></h1>
                </div>
              </div>
        </div>
      </div>


      {/* home6 */}

      <div className='home6  bg-white gap-15 py-10 px-30 flex flex-col h-[180vh]  w-[100%]'>
      <h1 className='text-[6.2vh]  w-[65%] font-semibold'>Check successful businesses that worked with us and join them</h1>
      <div className='  grid grid-cols-4 w-full '>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain  ' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/Common-Wealth-logo.png" alt="" />
                  <h1 className="h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className="text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/01/atom_bank.webp" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[170px] h-[170px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/kitopi-logo.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/with_health.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/ulti_arena.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/frost.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/unlocked.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/KodyPay_Logo-2-1.webp" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/04/webinterpret-logo.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/excc.webp" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/health-folder-logo.svg" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/green-token-logo.svg" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/congrify-logo.jpg" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/accentpharm_logo-removebg-preview.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/el_dorado.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/discover_cracow-removebg-preview.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/bloc-x-logo.webp" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[100px] h-[100px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/duel-app-logo.jpg" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/photochain.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              <div className='hicons w-[300px] h-[200px]  flex justify-center items-center'>
                  <img className='w-[150px] h-[150px] object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/03/Consdata-logo.png" alt="" />
                  <h1 className=" h-[50px] w-[50px] absolute flex justify-center items-center bottom-0 left-0 ">
                  <i className=" text-[3vh] text-[#019E6D] ri-arrow-right-line"></i>
                  </h1>
              </div>
              
      </div>
      
      </div>

{/* home7 */}


    </div>
  )
}

export default Home