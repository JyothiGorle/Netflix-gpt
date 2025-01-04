import React, { useState } from 'react'
import headerImage from '../images/header-image.png';
import Header from './Header';

const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
    const toggleSignIn=()=>{
        setIsSignIn(!isSignIn);
    }
  return (
    <>
    <div>
    <Header /> 
      <div className='absolute'>
          <img src={headerImage} alt="header-image" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignIn ? "Sign In":"Sign Up"}</h1>
        {!isSignIn && <input type="text" placeholder='FullName' className='p-4 my-4 w-full rounded-lg bg-gray-700'/> }
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <input type="password" placeholder='Password' className='p-4 my-4 w-full rounded-lg bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignIn ? "Sign In":"Sign Up"}</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignIn}>{isSignIn ? "New to Netflix? Sign Up Now":"Already Registered sign In Now"}</p>
      </form>
      </div>
    </>
  )
}

export default Login
