import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocation, faPhone} from '@fortawesome/free-solid-svg-icons'

function Return() {
  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#F3F4F6]'>
        <div className='flex lg:w-full mx-[1rem] lg:mx-[3rem]  overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-2/5'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/a6/66/b7/a666b7ec66d46d7985ac66527219ab62.jpg" alt="bg" />
                <div className='flex flex-col gap-[2rem] absolute z-[10] top-10 left-10 text-white font-bold'>
                    <p className='text-3xl'>Contact Information</p>
                    <p className='text-xl text-gray-500 font-thin'>Say something to start live chat</p>
                    <div className='mt-[8rem] flex items-center gap-[2rem]'>
                        <FontAwesomeIcon icon={faPhone} size='lg'/>
                        <p>+91 1234567789</p>
                    </div>
                    <div className='flex items-center gap-[2rem]'>
                        <FontAwesomeIcon icon={faEnvelope} size='lg'/>
                        <p>demo@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-[2rem]'>
                        <FontAwesomeIcon icon={faLocation} size='lg'/>
                        <p>Sample Address</p>
                    </div>
                </div>
            </div>
            {/* details */}
            <div className='lg:w-3/5 bg-white pt-[4rem] pb-[3rem] flex flex-col px-[2rem] lg:pl-[5rem] lg:pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-orange-500'>Contact Us</h1>
                <p className='font-thin w-[20rem]'>Any question or marks? Just write a message.</p>
                <form className='text-gray-500 flex flex-col gap-[2rem]' action="submit">
                    <div className='flex flex-col lg:flex-row lg:items-center gap-[2rem] lg:gap-[4rem]'>
                        <label className='flex flex-col' htmlFor="first_name">First Name
                            <input className='text-black border-b-2 pb-2 w-[15rem] outline-none' type="text" />
                        </label>
                        <label className='flex flex-col' htmlFor="last_name">Last name
                            <input className='border-b-2 pb-2 w-[15rem] outline-none' type="text" />
                        </label>
                    </div>
                    <div className='flex flex-col lg:flex-row lg:items-center gap-[4rem]'>
                        <label className='flex flex-col' htmlFor="first_name">Email
                            <input className='text-black border-b-2 pb-2 w-[15rem] outline-none' type="email" />
                        </label>
                        <label className='flex flex-col' htmlFor="last_name">Phone Number
                            <input className='border-b-2 pb-2 w-[15rem] outline-none' type="text" pattern='0-9'/>
                        </label>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p className='text-black font-bold'>Select Subject</p>
                        <div className='flex items-center gap-[1rem]'>
                            <input type="radio" value="return" name="subject" /> Return/Refund
                            <input type="radio" value="query" name="subject" /> Query
                            <input type="radio" value="complaint" name="subject" /> Complaint
                        </div>
                    </div>
                    <label className='flex flex-col' htmlFor="last_name">Message
                        <input className='border-b-2 pb-2 w-[18rem] lg:w-[30rem] outline-none' type="text"/>
                    </label>
                    <button className='submit_button w-[20rem]'>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Return