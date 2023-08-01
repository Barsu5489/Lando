import React, { useState } from 'react'
import classnames from "classnames";
function UnitDetails() {
    const [show, setShow] = useState(false);
    const toggleSidenav = () => {
        setShow(!show);
      };

  const sidenavClasses = classnames({
    "bg-gray-100 transition-all duration-500 h-screen mt-5 fixed z-10": true,
    "-right-80 w-200": !show,
    "right-0 w-80": show,
  });
  return (
    <>
        <div className="w-full h-full bg-red payment">
        <div className={sidenavClasses}>
  <div className="flex flex-col items-center w-full relative">
  <button
    className="absolute right-4 top-0 text-red-600 hover:text-red-800 text-2xl"
    onClick={toggleSidenav}
  >x  </button>
    <h3 className="text-gray-800 text-xl py-4">Payment Information</h3>
    <p className="text-gray-600 text-base py-2">Amount: <span className='font-bold'> $45</span> </p>
    <p className="text-gray-600 text-base py-2">Your method of payment is: Mpesa</p>
    <p className="text-gray-600 text-base py-2">Please confirm</p>
    <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg py-2 px-4 rounded-lg mt-4">Pay Now</button>
  </div>
</div>
    </div>
    <div className=" text-center main">
        <div>
            <h1 className='font-bold'>One Bedroom near a shopping Mall</h1>
            <p>Location</p>

        </div>
    <div className="flex justify-center">
      <div className="w-300 h-90 main-img mr-2">
        <img
          className="w-full h-90 object-cover m-1"
          src="https://images.unsplash.com/photo-1523688471150-efdd09f0f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG9uZWJlZHJvb20lMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>
      <div className="w-100 h-25 small-img-container">
        <div className="flex img-column-up">
          <img
            className="w-full h-64 object-cover m-1"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
          />
          <img
            className="w-full h-64 object-cover m-1"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
          />
        </div>
        <div className="flex img-column-down">
          <img
            className="w-full h-64 object-cover m-1"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
          />
          <img
            className="w-full h-64 object-cover m-1"
            src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
    <div className='flex justify-center space-x-[500px] mt-20'>
 <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Eum commodi quaerat quae reiciendis autem sunt possimus modi <br /> fuga assumenda tempore sed quos, labore <br /> harum aperiam minus earum ad unde temporibus.</p>
 </div>
    <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">

  <div class="p-4">
    <div class="font-bold text-xl mb-1">One Bedroom</div>
  </div>
  <div class="p-4 flex justify-between items-center">


    <div class="flex flex-col">
      <span class="text-gray-600 text-sm">Price</span>
      <span class="text-green-600 font-bold text-lg">$150/pm</span>
    </div>
  </div>
  <div class="p-4 flex justify-center">
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggleSidenav}>Pay</button>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default UnitDetails
