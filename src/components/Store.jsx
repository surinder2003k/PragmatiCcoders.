import React, { useContext } from 'react'
import './Store.css'
import { newcontext } from '../App'
const Store = () => {
    const {profiledata,setprofiledata}=useContext(newcontext)
    function handledelete(inx){
      const updated=profiledata.filter((_,index)=>index !==inx)
      setprofiledata(updated)
    }
  return (
    <div className='bg-black w-full'>
      <div className='flex flex-col h-[100vh] justify-center w-[100%] gap-10 ' >
       <div className='bg-[#dadada]  w-screen h-[500px]'>
       <table className='w-[100%]  '>
        <tbody >
            <tr className='bg-[#01A570] text-white'>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Password</th>
            </tr>
            {profiledata.map((ele,inx)=>(
            
            <tr key={inx}>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td>{ele.password}</td>
                <td ><i className="cursor-pointer text-[#01A570] ri-pencil-line text-[3vh]"></i> <i className="cursor-pointer text-[3vh] text-red-500 ri-delete-bin-6-line" onClick={()=>handledelete(inx)}></i></td>
            </tr>
            
            ))}
            
        </tbody>
       </table>
       
       </div>
       </div> 
    </div>
  )
}

export default Store