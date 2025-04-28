import React, { useState } from 'react'
import './Industries.css'
import Cards from './Cards'
const Industries = () => {
  const[total,settotal]=useState(0)
  return (
    <div className='w-full '>
        <div className=' flex justify-center items-end w-full h-[30vh] bg-black'>
            <div className='text-white'>
                <h1 className='Industriescenter flex justify-center relative text-[15px] font-bolder'>Industries</h1>
                <h1 className='text-[5vh] tracking-wide font-bold'>Check our <span className='text-[#019E6D]'>Products</span></h1>

            </div>
        </div>
        <div className='w-full  bg-black'>
                <div className='w-full flex justify-between p-5 items-center h-[10%] border-b-1 border-gray-700'>
                    <h1 className='text-[2.5vh] uppercase tracking-wide text-white'><span className='font-semibold'>{total}</span> Product Found</h1>
                    <button className=' p-3 pl-9 flex justify-center items-center  bg-[#019E6D] rounded text-white relative '>
                    <i className="absolute left-3 top-[14px] text-[white] ri-file-excel-2-fill"></i>
                      Export data to excel</button>
                </div>
                <div className='w-full  px-5  h-[10%] overflow-hidden flex justify-between items-center border-b-1 border-gray-700'>
                    <div className='w-[30%] flex  h-[70px]  gap-1'>
                        <button className='p-3 relative pl-7 flex justify-center items-center  text-[2.2vh] text-white opacity-55'>
                        <i className="absolute left-1 top-[23px] text-[orange] font-bold ri-discount-percent-line"></i>
                          On Sale</button>
                        <button className='p-3 relative pl-7 flex justify-center  items-center text-white  text-[2.2vh] opacity-55'>
                        <i className="absolute left-1 top-[23px] text-[yellow] font-bold ri-sun-fill"></i>
                          New</button>
                        <button className='p-3 pl-7 flex relative justify-center items-center  text-white text-[2.2vh] opacity-55'>
                        <i className="absolute left-1 top-[23px] text-[red]  ri-error-warning-fill"></i>
                          Out of Stock</button>
                        <button className='p-3 pl-7 flex relative justify-center items-center  text-[2.2vh] text-white opacity-55'>
                        <i className="absolute left-1 top-[23px] text-white font-bold ri-user-forbid-fill"></i>
                        Discontinued</button>
                    </div>
                    <div className='w-[30%] flex  h-[70px] items-center justify-evenly   '>
                          <div className='flex justify-center items-center gap-5'>
                          <h1 className='text-[2.2vh] opacity-55'>Sort By :</h1>
                          <input className=' bg-white  outline-none py-1.5 px-2 w-[130px]'  type="text"placeholder='Name' />
                          </div>
                        <div className='flex justify-center items-center gap-5'>
                        <h1 className='text-[2.2vh] opacity-55'>View:</h1>
                        <i className=" bg-white py-0.4 px-1.5  text-[3.5vh]  text-[#555252] ri-microsoft-fill"></i>
                        <i className=" text-white bg-blue-400  py-0.4 px-1.5  text-[3.5vh] ri-sticky-note-2-fill"></i>
                      </div>
                    </div>
                </div>
                
        </div>
        <div className='w-full bg-black  h-auto'>
                  <Cards total={total} settotal={settotal}/>
        </div>
        
    </div>
  )
}

export default Industries