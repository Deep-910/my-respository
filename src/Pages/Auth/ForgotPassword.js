import React from 'react'
import { Link } from 'react-router-dom'

function ForgotPassword() {
  return (
    <div className='px-[1rem] flex items-center justify-center py-[2.5rem] bg-[#ffc89b]'>
        <div className='flex lg:w-2/3 h-[90vh] overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/5d/fb/5f/5dfb5f08b8d33aacd35b672339bd679a.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[12rem] left-4 text-7xl'>Don't Remember Password? No worries!</p>
                {/* <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" /> */}
            </div>
            {/* details */}
            <div className='lg:w-1/2 rounded-r-xl bg-white pt-[5rem] flex flex-col pl-[2rem] lg:pl-[5rem] mr-[2rem] pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-orange-500'>Forgot Password</h1>
                <p className='font-thin w-[20rem]'>Enter your details to retrieve your password</p>
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='border-2 p-1 outline-none' type="email" placeholder='example@gmail.com' required/>
                    <p className='text-center text-xl text-gray-400'>Or</p>
                    <label className='text-gray-500 p-1' htmlFor="password">Phone Number</label>
                    <input className='border-2 p-1 outline-none' type="number" placeholder='Enter Mobile Number' required/>
                    <Link to={'/user'}>
                        <button className='submit_button w-[15rem]'>Login</button>
                    </Link>
                </form>
                <Link to={'/register'}>
                    <p className='text-lg'>New User? <button className='text-orange-500 font-bold'>Sign up</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword