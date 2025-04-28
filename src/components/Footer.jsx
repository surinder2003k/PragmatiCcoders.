import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='    flex items-center bottom-0 fixed w-full h-10  bg-white text-white'>
        <marquee scrollamount="10">
        <div className=' flex gap-55 '>
            
        <span className='hover:underline bg-[#01A471] rounded-3xl px-5 py-1 font-bold'><NavLink to={''}> Join Our Newsletter!</NavLink></span>
        <span className='hover:underline bg-[#01A471] rounded-3xl px-5 py-1 font-bold'><NavLink to={''}> Follow us on Linkdin</NavLink></span>
        <span className='hover:underline bg-[#01A471] rounded-3xl px-5 py-1 font-bold'><NavLink to={''}> Our Market Insights AI is live! Try it for free.</NavLink></span>
        </div>
        </marquee>
        </div>
  )
}

export default Footer