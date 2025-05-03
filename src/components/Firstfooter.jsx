import React from 'react'
import emailjs from '@emailjs/browser'
const Firstfooter = () => {
  function handlecontectus(e){
    e.preventDefault()
    emailjs.sendForm('service_032j0sm','template_ls2l7zq',e.target,'oPKf7ds0EAMHvJcM-')
    .then((result) => {
      alert('Message sent Successfully');
      e.target.reset();
    }, (error) => {
      alert('Error in sending message');
    });
  }
  return (
    <div className='w-full'>
        
      <div className='home61 flex flex-col h-[100vh] gap-5 w-[100%] bg-white items-center justify-center' >
      <h1 className='text-[6vh] font-semibold'>This is how we work</h1>
      <div className=' w-[100%] relative h-[18vh] '>
        <div className='w-[92%] h-[18vh] absolute gap-70 right-0 flex items-center  border-b-2 border-green-700'>
          <h1 className=' text-[9vh] font-bold opacity-40'>01</h1>
          <h1 className=' text-[9vh] font-bold opacity-40'>02</h1>
          <h1 className=' text-[9vh] font-bold opacity-40'>03</h1>
          <h1 className=' text-[9vh] font-bold opacity-40'>04</h1>
        </div>
      </div>
      <div className='w-[85%] h-[35vh] flex'>
            <div className='w-[25%] h-full  flex flex-col gap-5 '>
                <h1 className='text-[3.5vh] font-semibold '>Analyze</h1>
                <ul className='list-disc flex flex-col gap-3 text-[3.3vh] w-[80%] pl-10 '>
                  <li className=''>Budget Consulting</li>
                  <li>Strategy Consulting</li>
                  <li>Project Discovery Workshop</li>
                </ul>
            </div>
            <div className='w-[25%]  h-full  flex flex-col gap-5 '>
                <h1 className='text-[3.5vh]  w-[80%] pl-10 font-semibold '>Discover & Define</h1>
                <ul className='list-disc flex flex-col gap-3 text-[3.3vh]  w-[100%] pl-18 '>
                  <li className=''>UX Research</li>
                  <li>Product Roadmap</li>
                  <li>UX Design</li>
                  <li>Ui Design</li>
                </ul>
            </div>
            <div className='w-[25%]  h-full  flex flex-col gap-5 '>
                <h1 className='text-[3.5vh]  w-[80%] pl-10 font-semibold '>Deliver & Scale</h1>
                <ul className='list-disc flex flex-col gap-3 text-[3.3vh]  w-[100%] pl-18 '>
                  <li className=''>Product Development</li>
                  <li>DevOps Architecture</li>
                  <li>Continuous User Feedback & Delivery</li>
                </ul>
            </div>
            <div className='w-[25%]  h-full  flex flex-col gap-5 '>
                <h1 className='text-[3.5vh]  w-[80%] pl-10 font-semibold '>Expand</h1>
                <ul className='list-disc flex flex-col gap-3 text-[3.3vh]  w-[100%] pl-18 '>
                  <li className=''>Recuit your oun team with our help</li>
                </ul>
            </div>
      </div>
      <div className='w-[82%] h-[13vh]  flex justify-between items-center'>
            <h1 className='home7btn uppercase bg-[#019E6D]  cursor-pointer  text-center font-semibold px-4 py-4.5 text-white text-[2.7vh] w-[300px]'>Bussiness Consulting</h1>
            <h1 className='home7btn uppercase bg-[#019E6D]  cursor-pointer  text-center font-semibold px-4 py-4.5 text-white text-[2.7vh] w-[230px]'>Product Design</h1>
            <h1 className='home7btn uppercase bg-[#019E6D]  cursor-pointer  text-center font-semibold px-4 py-4.5 text-white text-[2.7vh] w-[270px]'>Software development</h1>
            <h1 className='home7btn uppercase bg-[#019E6D]  cursor-pointer text-center font-semibold px-4 py-4.5 text-white text-[2.7vh] w-[230px]'>IT outsourcing</h1>
            
      </div>
      </div>

  {/* home8       */}

          <div className='hmone7 flex  justify-center gap-10 flex-col h-[100vh]  w-[100%] bg-white'>
              <h1 className='text-[6vh] font-semibold pl-25'>Check our case studies</h1>
              <div className='w-[100%] flex justify-end  h-[60%]  '>
                      <div className='w-[55%] h-[100%] flex '>
                          <div className='w-[50%] h-[100%] '>

                                <ul className='h8tabs  h-[100%] w-[100%] flex flex-col gap-9'>
                                  <li className='home8tabs'>Banking</li>
                                  <li className='home8tabs'>fintech</li>
                                  <li className='home8tabs'>Digital health</li>
                                  <li className='home8tabs'>foodtech</li>
                                  <li className='home8tabs'>e-commerce</li>
                                  <li className='home8tabs'>social media</li>
                                  <li className='home8tabs'>blockchain</li>
                                  <li className='home8tabs'>web3</li>
                                </ul>

                          </div>
                          <div className='h8tabsb w-[50%] h-[100%] gap-17 p-8 flex flex-col justify-center '>
                            <h1 className='text-[3.3vh] font-semibold'>
                            Atom - an entirely new, remote team for the UK’s first fully digital bank
                            </h1>
                            <h1 className='home8btn    cursor-pointer uppercase w-[265px] text-center py-3 px-5  text-[3vh] border-2  text-green-600 border-green-600'>
                              read the case study
                            </h1>
                          </div>
                      </div>
                      <div className='w-[35%] '>
                        <img className='object-fit w-[100%] h-[100%]' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/02/Atom-Cover.webp" alt="" />
                      </div>
              </div>
          </div>

  {/* home9       */}

          <div  className='hmone9  flex gap-20 flex-col  h-[200vh] py-30  w-[100%] '>
              <div className='w-[60%] ml-24 h-[15%] '>
                  <h1 className='text-[8vh] font-semibold' ><span>Let's</span> <span className='text-[#019E6D]'>talk</span></h1>
                  <p className='text-[3.3vh]  w-[60%]'>We’ve got answers on anything connected with software development.</p>
              </div>
              <div className=' flex  justify-center  w-[100%] h-[85%] '>
                <div className='w-[45%] h-[100%]  flex flex-col gap-5'>
                  <form  onSubmit={(e)=>handlecontectus(e)} className=' flex flex-col gap-5' method='post'>
                    <h1 className='text-[4.7vh] font-semibold'>
                    Message us
                    </h1>
                    <p className='text-[2.5vh] '>
                    Feel free to reach out using the form below, and we’ll get back to you as soon as possible.
                    </p>
                    <h1 className='text-[2.6vh] font-semibold'>Your name*</h1>
                    <input type="text" name='name' className='border p-4 outline-none border-gray-300 bg-white w-[100%]'/>
                    <h1 className='text-[2.6vh] font-semibold'>Email address*</h1>
                    <input type="text" name='email_form' className='border p-4 outline-none border-gray-300 bg-white w-[100%]'/>
                    <h1 className='text-[2.6vh] font-semibold'>Comapany name*</h1>
                    <input type="text" name='company_name' className='border p-4 outline-none border-gray-300 bg-white w-[100%]'/>
                    <h1 className='text-[2.6vh] font-semibold'>Tell us what you need or ask anything that's on your mind.*</h1>
                    {/* <input type="textarea" className='border p-4 outline-none border-gray-300 bg-white  w-[100%]'/> */}
                    <textarea  name='message' className='border p-4 outline-none border-gray-300 bg-white h-[200px] w-[100%]'></textarea>
                    <p className='text-[2.2vh] leading-loose '>
                    By sending a message you allow Pragmatic Coders Sp. z o.o., with its registered office in Poland, Kraków (31-323), ul. Opolska 100, to process your personal data provided by you in the contact form for the purpose of contacting you and providing you with the information you requested. You can withdraw your consent at any time. For more information on data processing and the data controller please refer to our <span className='cursor-pointer text-[#019E6D]'>Privacy Policy</span> and <span className='text-[#019E6D] cursor-pointer'>Terms of Use</span>.
                    </p>
                    <button className=' mt-3  uppercase hover:bg-[#008057]  bg-[#019E6D] outline-none cursor-pointer text-white text-[2.4vh] font-semibold p-4 text-center w-[160px]'>send form</button>
                    </form>
                </div>
                <div className='ml-10  w-[40%] h-[100%]  flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                <h1 className='text-[4.7vh] font-semibold'>
                Schedule a meeting
                    </h1>
                    <p className='text-[2.5vh] '>
                    You can also schedule an online meeting with Wojciech, our Senior Business Consultant.
                    </p>
                    </div>
                    <div className='w-[100%] h-[16%] flex items-center'>
                      <img src="https://www.pragmaticcoders.com/wp-content/uploads/2024/01/wojciech_knizewski.jpg" className='h-[180px] w-[180px] ' alt="" />
                            <div className='flex  ml-10  flex-col justify-center gap-3' >
                            <h1 className='text-[3.3vh] font-semibold'>Wojciech Kniżewski</h1>
                            <h1 className='text-[2.4vh]'>Senior Business Consultant</h1>
                            <button className='cursor-pointer border-2 home8btn text-[2.5vh] font-bold text-green-600 border-green-600 p-3 w-[160px]'>SCHEDULE</button>
                            </div>
                    </div>
                    <div className='w-[100%] gap-6  h-[14%] flex flex-col'>
                        <h1 className=' text-[#019E6D] text-[4.8vh] font-bold'>8 out of 10</h1>
                        <p className='text-[2.3vh] font-semibold'>founders who contacted us wanted <br />
                        to work with our team.</p>
                    </div>
                    <div className='w-[100%] gap-2  overflow-hidden  h-[15%] flex flex-col'>
                      <h1 className='text-[3.8vh] font-bold'>Trusted partner</h1>
                      <div className='gap-25  flex ml-2'>
                        <img className='w-[180px] cursor-pointer h-[100px] ' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/01/google_rating-1.svg" alt="Server Error" />
                        <img className=' w-[180px] h-[100px] cursor-pointer object-contain' src="https://www.pragmaticcoders.com/wp-content/uploads/2024/02/clutch.webp" alt="Server Error" />
                      </div>
                    </div>
                </div>
              </div>
          </div>

    {/* home10 */}

          <div className='p-20 text-white  w-full flex h-[100vh] bg-[#121212]'>
              <div className='w-[50%] h-full  flex'>
                  <div className=' w-[50%] h-full  '>
                      <div className=' w-full h-[40%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Business Consulting</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Product Discovery Workshops</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Product Management Consulting</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Fundraising Consulting</h1>
                      </div>
                      <div className=' w-full h-[50%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Software Product Design</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>UX Design</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>UX Research</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>UI Design</h1>

                      </div>
                  </div>
                  <div className='w-[50%] h-full  flex flex-col gap-4.5 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Custom Software Development-services</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Web & Cloud Application Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Mobile Application Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>No-code Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>AI Software Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Custom Blockchain Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>DevOps Services</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Technology Consulting</h1>
                  </div>
              </div>
              <div className='w-[50%] h-full  flex'>
                  <div className='w-[33%] h-full '>
                      <div className='  w-full h-[50%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Industries</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Fintech</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Degital Health</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>E-commerce</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Entertainment</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Custom Software Development<br />Service</h1>
                      </div>
                      <div className='w-full h-[50%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>About Us</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Meet Our Team</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>How We Work</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Become a Partner</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Newsroom</h1>

                      </div>
                  </div>
                  <div className='w-[33%] h-full '>
                  <div className='  w-full h-[50%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Featured Case Studies</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Atom Bank</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Kitopi</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>WithHealth</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>UltiArena</h1>
                      </div>
                      <div className=' w-full h-[50%]  flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Resources</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Degital Health Guide</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Fintech Guide</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Insutech Guide</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Newsletter</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>E-book</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Podcast & Webinars</h1>

                      </div>
                  </div>
                  <div className='w-[33%] h-full '>
                      <div className='  w-full h-full flex flex-col gap-4 '>
                          <h1 className='cursor-pointer hover:text-[#019E6D] font-bold text-[2.6vh]'>Blog</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Product Development</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Fintech</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Degital Health</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>AI</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Product Menagement</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Agile & Scrum</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Outsourcing & Collaboration</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Blockchain</h1>
                          <h1 className='cursor-pointer hover:text-[#019E6D] text-[14px]'>Startup</h1>
                      </div>
                      
                  </div>
              </div>

          </div>
          
      {/* home11   */}

            <div className='w-full h-[35vh]  bg-[#121212] border-t-1 border-gray-800'>
                      <div className='w-full h-[70%] flex '>
                          <div className='w-[50%]  justify-end h-full flex'>
                              <div className='w-[30%] flex flex-col gap-5 text-white p-5 h-full '>
                                  <img className='w-[150px]' src="https://www.pragmaticcoders.com/wp-content/themes/pragmaticcoders/assets/img/logo.svg" alt="network error" />
                                  <h1 className='text-[1.8vh]'>ul. Opolska 100</h1>
                                  <h1 className='text-[1.8vh]'>31-324 Krakow, Poland</h1>
                              </div>
                              <div className='w-[30%] h-full text-white flex items-center justify-center '>
                                <h1 className='text-[1.8vh]'>VAT ID: PL 6772398603</h1>
                              </div>
                              <div className='text-white pl-15 justify-center flex flex-col gap-5 w-[30%] h-full '>
                                <h1 className='text-[2.4vh] font-bold'>Contact</h1>
                                <h1 className='text-[1.7vh] text-[#019E6D] underline hover:no-underline cursor-pointer'>contact@pragmaticcoders.com</h1>
                                <h1 className='text-[2.4vh]'>+48 785 859 976</h1>
                              </div>
                          </div>
                          <div className='w-[50%] relative  h-full'>
                          <div className='w-[55%] p-5 flex flex-col gap-7 absolute right-0 h-full  text-white'>
                                <h1 className='text-[2.4vh] font-bold'>Follow Us</h1>
                                <ul className='flex gap-3 '>
                                  <li><i className="bg-[#11242c] cursor-pointer hover:bg-[#019E6D] p-3 rounded-[40px] ri-facebook-fill"></i></li>
                                  <li><i className="bg-[#11242c] cursor-pointer hover:bg-[#019E6D] p-3 rounded-[40px] ri-linkedin-fill"></i></li>
                                  <li><i className="bg-[#11242c] cursor-pointer hover:bg-[#019E6D] p-3 rounded-[40px] ri-github-fill"></i></li>
                                  <li><i className="bg-[#11242c] cursor-pointer hover:bg-[#019E6D] p-3 rounded-[40px] ri-behance-fill"></i></li>
                                  <li><i className="bg-[#11242c] cursor-pointer hover:bg-[#019E6D] p-3 rounded-[40px] ri-dribbble-line"></i></li>
                                </ul>
                            </div>
                          </div>
                      </div>
                      <div className='border-gray-800 border-t w-full justify-center h-[30%] flex'>
                        <div className='w-[45%] h-full flex items-center  text-white '>
                          <h1 className='text-[1.7vh]'>© 2025 Pragmatic Coders. All right reserved.</h1>
                        </div>
                        <div className='w-[45%] h-full flex items-center justify-end text-white '>
                            <div className='w-[75%] mr-5 h-full  items-center justify-between flex '>
                            <h1 className='text-[1.8vh] cursor-pointer hover:text-[#019E6D]'>Privacy Policy</h1>
                            <h1 className='text-[1.8vh] cursor-pointer hover:text-[#019E6D]'>Terms of use</h1>
                            <h1 className='text-[1.8vh] cursor-pointer hover:text-[#019E6D]'>Sitemap</h1>
                            </div>
                            
                        </div>
                      </div>
              </div>
    </div>
  )
}

export default Firstfooter