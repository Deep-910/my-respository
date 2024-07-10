import React from 'react'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import { faTwitter, faInstagram, faLinkedin, faFacebook} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='w-full'>
        {/* top */}
         
        {/* bottom */}
        <div className='bg-[#252527] py-[3rem] flex flex-col lg:flex-row justify-center px-[2rem] gap-6 lg:justify-evenly text-white'>
            {/* map */}
            <div className='bg-gray-500 lg:w-1/3 h-[20rem]'>
                <img src="" alt="" />
            </div>
            {/* category */}
            <div className='lg:w-[40rem] flex flex-col justify-between'>
                <div className='flex gap-4 text-sm'>
                    <div className='flex flex-col gap-3 font-thin'>
                        <p className='font-bold text-xl'>Company</p>
                        <Link to={'/about'}><p>About Us</p></Link>
                        <Link to={'/return'}><p className='cursor-pointer lg:text-sm'>Return/Exchange</p></Link>
                        <Link to={'/returnpolicy'}><p>Refund Policy</p></Link>
                        <Link to={'/terms'}><p>Terms and Conditions</p></Link>
                    </div>
                    <div className='flex flex-col gap-2 font-thin lg:ml-[2rem] lg:w-[10rem]'>
                        <p className='font-bold text-xl'>Product</p>
                        <Link to={'/Safety Products'}><p>Safety Products</p></Link>
                        <Link to={'/Search & Rescue'}><p>Search & Rescue</p></Link>
                        <Link to={'/Silica Gel'}><p>Silica Gel</p></Link>
                        <Link to = {'/Civil Lab Equipments'}><p>Civil Lab Equipments</p></Link>
                        <Link to = {'/Sneakers'}><p>Personal Care</p></Link>
                        <Link to={'/Safety Products'}><p>Safety Products</p></Link>
                        <Link to={'/Search & Rescue'}><p>Search & Rescue</p></Link>
                        <Link to={'/Silica Gel'}><p>Silica Gel</p></Link>
                        <Link to = {'/Civil Lab Equipments'}><p>Civil Lab Equipments</p></Link>
                        <Link to = {'/Sneakers'}><p>Personal Care</p></Link>
                    </div>
                    <div className='flex flex-col h-[13rem] ml-[0.5rem] lg:ml-[4rem] gap-[0.5rem] justify-between font-thin w-[10rem] lg:w-[13rem]'>
                        <p className='font-bold text-xl'>Help & contact</p>
                        
                        <div className='flex lg:justify-between items-center gap-5'>
                            {/* <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faEnvelope} size='xl' color='#2E2D39'/> */}
                            <div className=' w-[10rem]'>
                                <p className='text-sm font-bold'>Email Support</p>
                                <p className='text-sm'>info@waltzify.com</p>
                                <p className='text-sm'>sales@waltzerindia.com</p>
                            </div>
                        </div>
                        <div className='flex lg:justify-between items-center gap-5'>
                            {/* <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faPhone} size='xl' color='#2E2D39'/> */}
                            <div className=' w-[10rem]'>
                                <p className='text-sm font-bold'>Phone Support</p>
                                <p className='text-sm'>07314245858</p>
                            </div>
                        </div> 
                        <div className='flex lg:justify-between items-center gap-5'>
                            {/* <FontAwesomeIcon className='border-2 p-1 rounded-full bg-white' icon={faWhatsapp} size='xl' color='#2E2D39'/> */}
                            <div className = ' w-[10rem]'>
                                <p className='text-sm font-bold'>Whatsapp Support</p>
                                <p className='text-sm'>+91-9522582422</p>
                            </div>
                        </div>

                        <p>Track your order</p>
                        <p className='mt-[1rem]'><span className='font-bold'>Address:</span> Main Gate, 1A-Balaji Market, Hawa Bangala Rd, near R.R. Cat, opp. Hari Dham Mandir, Indore, Madhya Pradesh 452009</p>
                    </div>
                </div>
                <div className='mt-[1rem]'>
                    <p className='text-sm'>Copyright © 2024 Waltzer.com All rights reserved</p>
                </div>
            </div>
            {/* connect */}
            <div className='flex flex-col gap-[1rem]'>
                <p className='font-bold text-xl'>Connect with us</p>
                <div className='flex gap-2'>
                    <FontAwesomeIcon icon={faTwitter} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faInstagram} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faLinkedin} size='lg' className='bg-yellow-500 p-2'/>
                    <FontAwesomeIcon icon={faFacebook} size='lg' className='bg-yellow-500 p-2'/>
                </div>
                <input className='mt-[1rem] p-2 w-[15rem] rounded-lg' type="text" placeholder='example@gmail.com'/>
                <button className='bg-yellow-500 text-black w-[15rem] rounded-lg p-1'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer