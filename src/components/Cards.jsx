import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Store/CartSlices'
import { addcartitem, removecartitem } from '../Store/CartvalueSlice'

const Cards = ({ settotal }) => {
  const [data, setdata] = useState([])
  const [loading, setloading] = useState(true)
  const value=useSelector((state)=>state.cart.value)
const[cardata,setcartdata]=useState([])
const cddata =useSelector((state)=>state.cartval.value)


const dispatch =useDispatch()
  function handleheartclick(indx) {
    const updatedData = data.map((item, index) => {
      if (index === indx) {
        return  { ...item,liked: !item.liked }
          
    }
        return item
    })
    setdata(updatedData)
  }
  function handleAddclick(indx){
    
    const updatedDataa = data.map((item, index) => {
      if (index === indx) {
        dispatch(increment())
        dispatch(addcartitem(cardata))
        // console.log(cddata)
        setcartdata([...cardata,item])
        return {...item, 
          add: false,    // add button hide
          remov: true 
              }
      }
      return item
    })
    setdata(updatedDataa)
  }

  function handleremoveclick(indx){
    const updateremove=data.map((ele,index)=>{
      if(index === indx){
        dispatch(decrement())
        dispatch(removecartitem(index))
          return {...ele, 
            add: true,   
            remov: false  
          }
        }
        return ele
      })
      setdata(updateremove)
  }
  useEffect(() => {
    axios('https://fakestoreapi.com/products')
      .then((res) => {
        
        const modifiedData = res.data.map(item => ({
          ...item,
          liked: false,
          remov:false,
          add:true
        }))
        setdata(modifiedData)
        settotal(res.data.length)
        setloading(false)
      })
      .catch((error) => {
        console.log('Error in api fetch')
        setloading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className='h-full w-full flex justify-center'>
        <h2 className='text-white text-4xl'>Loading...</h2>
      </div>
    )
  }

  return (
    <div className='w-full min-h-screen border p-5 grid grid-cols-4 gap-4'>
      {data.map((ele, indx) => (
        <div key={indx} className='w-[280px] bg-white h-[400px] m-2 shadow-lg  relative'>

          <div className='bg-white  flex justify-center relative items-center w-full h-[220px]'>
            <i
              onClick={() => handleheartclick(indx)}
              className={`absolute top-3 right-3 text-[3vh] cursor-pointer ${ele.liked ? 'ri-heart-fill text-red-500' : 'ri-heart-line text-black'}`}
            ></i>

            

            <img className='h-[130px] w-[130px] '  src={ele.image} alt={ele.title} />
          </div>

          <div className='relative bg-black text-white  p-5 w-full h-[180px]'>
            <h1 className=' font-bold '>{ele.title}</h1>

            <div className='absolute bottom-5 flex space-x-2'>
              <button onClick={() => handleAddclick(indx)}
              
              className={`py-2   cursor-pointer px-3 border-2  text-[2vh] hover:duration-500 font-semibold rounded-3xl hover:text-black hover:bg-white ${!ele.add? 'hidden' :''}`}>Add To Cart
              </button>
              <button onClick={() => handleremoveclick(indx)}
              
              className={`py-2   cursor-pointer px-3 border-2  text-[2vh] hover:duration-500 font-semibold rounded-3xl hover:text-black hover:bg-white ${!ele.remov? 'hidden' :''}`}>Remove
              </button>
            </div>

            <h1 className='absolute bottom-6  right-5 text-[2.4vh]  font-bold'>${ele.price}</h1>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Cards
