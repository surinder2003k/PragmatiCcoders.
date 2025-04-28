import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { data } from "react-router-dom";
import { clearcart } from "../Store/CartvalueSlice";
import { reset } from "../Store/CartSlices";

export default function CartItem() {
  const dataa =Object.values(useSelector((state)=>state.cartval.value))
  function handleclick(){
    console.log(dataa)
    alert("Proceeding to checkout")
  }
  function handleclearcart(){
    dispatch(clearcart())
    dispatch(reset())
  }
  const dispatch =useDispatch()
  return (
    <div className="w-full h-[120vh] relative ">
    <div className="  absolute top-[10%]  inset-0 max-w-4xl h-auto w-full flex flex-col justify-center item-center  mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6" >🛒 Your Cart</h2>

      <div className="overflow-y-scroll w-full h-auto space-y-6">
        {/* Cart Item 1 */}
        {dataa.map((ele,idx)=>(
          <div key={idx} className=" flex items-center gap-4 border-b pb-4">
          <img
            src={ele.image}
            alt="Product 1"
            className="w-24 h-24 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-semibold">{ele.title}</h3>
            <p className="text-sm text-gray-500">{ele.discreption}</p>
            <div className="flex items-center gap-3 mt-2">
              <button className="bg-gray-200 px-2 py-1 rounded">-</button>
              <span>1</span>
              <button className="bg-gray-200 px-2 py-1 rounded">+</button>
            </div>
          </div>
          <button  className="text-red-500 font-bold">✕</button>
        </div>
        ))}
        


      </div>

      {/* Total + Checkout */}
      <div className="text-right mt-8 relative">
        <h3 className="text-xl font-semibold">Total: $270.00</h3>
        <button 
        onClick={handleclearcart}
        className="mt-4 bg-red-600 text-white px-6 py-2 absolute left-0 rounded hover:bg-red-700">
          Clear Checkout
        </button>
        <button 
        onClick={handleclick}
        className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
    </div>
  );
}
