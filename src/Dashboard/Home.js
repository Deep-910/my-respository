import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faCircle, faStar } from '@fortawesome/free-solid-svg-icons'

function Home() {
  return (
    <div className='pl-[2rem] py-[2rem] pr-[2rem] bg-[#EEF3F9] w-full h-full'>
            <div className='flex flex-col lg:flex-row justify-evenly gap-[1rem]'>
                <div className='rounded-xl shadow-xl flex flex-col items-center justify-evenly lg:w-1/4 h-[10rem] bg-white'>
                    <div className='gap-[2rem] flex flex-row justify-center items-center'>
                        <p>Icon</p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-light'>Total Sales</p>
                            <p className='font-bold text-xl'>39,452</p>
                        </div>
                        <p className='text-green-500'>1.56%</p>
                    </div>
                    <div>
                       <img className='p-[1rem]' src={require('../asset/graph2.png')} alt="" />
                    </div>
                </div>
                <div className='rounded-xl shadow-xl flex flex-col items-center justify-evenly lg:w-1/4 h-[10rem] bg-white'>
                    <div className='gap-[2rem] flex flex-row justify-center items-center'>
                        <p>Icon</p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-light'>Total Income</p>
                            <p className='font-bold text-xl'>$37,802</p>
                        </div>
                        <p className='text-orange-500'>1.56%</p>
                    </div>
                    <div>
                        <img className='p-[1rem]' src={require('../asset/graph3.png')} alt="" />                    </div>
                </div>
                <div className='rounded-xl shadow-xl flex flex-col items-center justify-evenly lg:w-1/4 h-[10rem] bg-white'>
                    <div className='gap-[2rem] flex flex-row justify-center items-center'>
                        <p>Icon</p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-light'>Orders Paid</p>
                            <p className='font-bold text-xl'>39,452</p>
                        </div>
                        <p className='text-gray-500'>1.56%</p>
                    </div>
                    <div>
                       <img className='p-[1rem]' src={require('../asset/graph2.png')} alt="" />
                    </div>
                </div>
                <div className='rounded-xl shadow-xl flex flex-col items-center justify-evenly lg:w-1/4 h-[10rem] bg-white'>
                    <div className='gap-[2rem] flex flex-row justify-center items-center'>
                        <p>Icon</p>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-light'>Total Visitor</p>
                            <p className='font-bold text-xl'>34,925</p>
                        </div>
                        <p className='text-blue-500'>1.56%</p>
                    </div>
                    <div>
                        <img className='p-[1rem]' src={require('../asset/graph4.png')} alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-[2rem] flex flex-col lg:flex-row gap-[1rem]'>
                <div className='lg:w-1/3 h-[25rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>Recent Orders</p>
                        <p>•••</p>
                    </div>
                        <img className='p-[1rem]' src={require('../asset/graph1.png')} alt="" />
                </div>
                <div className='lg:w-1/3 h-[25rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>Top Orders</p>
                        <p className='font-light'>View All <FontAwesomeIcon className='cursor-pointer' icon={faAngleDown} /></p>
                    </div>
                    <div className='flex flex-col gap-[2rem] pt-[1rem]'>
                        <div className=' flex justify-evenly'>
                            <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                            <div className='mr-[4rem]'>
                                <p className='font-bold'>Park Avenue</p>
                                <p className='font-light'>100 items</p>
                            </div>
                            <div>
                                <p className='font-light'>coupon code</p>
                                <p className='font-bold'>Sflat</p>
                            </div>
                        </div>
                        <div className=' flex justify-evenly'>
                            <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/61pA5s8ArhL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                            <div className='mr-[4rem]'>
                                <p className='font-bold'>Park Avenue</p>
                                <p className='font-light'>100 items</p>
                            </div>
                            <div>
                                <p className='font-light'>coupon code</p>
                                <p className='font-bold'>Sflat</p>
                            </div>
                        </div>
                        <div className=' flex justify-evenly'>
                            <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                            <div className='mr-[4rem]'>
                                <p className='font-bold'>Park Avenue</p>
                                <p className='font-light'>100 items</p>
                            </div>
                            <div>
                                <p className='font-light'>coupon code</p>
                                <p className='font-bold'>Sflat</p>
                            </div>
                        </div>
                        <div className=' flex justify-evenly'>
                            <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                            <div className='mr-[4rem]'>
                                <p className='font-bold'>Park Avenue</p>
                                <p className='font-light'>100 items</p>
                            </div>
                            <div>
                                <p className='font-light'>coupon code</p>
                                <p className='font-bold'>Sflat</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/3 h-[25rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>Top Countries by Sale</p>
                        <p className='font-light'>View All <FontAwesomeIcon className='cursor-pointer' icon={faAngleDown} /></p>
                    </div>
                    <div className='flex justify-evenly items-center mt-[1rem]'>
                        <p className='text-3xl font-bold'>$37,802</p>
                        <p className='text-green-500'>1.56%</p>
                        <p>Since last weekend</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAflBMVEXxWyUAaTT////xVhoAZCz2kXFfmnrz8/fY2OTS0uDk5OwnJ2729vnq6vHw8PX6+vy9vc8jI21sbJcAAGEMDGSoqMKBgadgYJBbW4txcZuHh6kxMXIYGGjGxtcsLG8SEmU7O3odHWmZmba3t854eJ9RUYVISH+RkbFBQXyvr8UfgS9oAAABwUlEQVRoge2W2W6cMBRAyU1bvOCFfTBhMyae+f8f7G0aKW3VaibCVl98hIwf0BHy9V2yLJFIJBKJRCKR+B88RyT7GpEMPoGSUn3m+4fl+a3iNcKrWx5YLrtmqbeyqsqtXhYjQsr3ueErLUhRUEVX3ox7OLltNi8kEBACFyn81thQcluvThH8fyAEFyDKXetH7A/I94ZTAEahVYSoFihDP290CLmYFweTAguaIho3agK3zPejel/uGg9QWCU64bX2+FIWL6Nv3Hk541dBGORDbkhvbU8MboERtnJ2Wm6Xi4SpZbKfjsGY4aC9EO0E8rLY0/KjpAUmkff6MJ3B59DWSzwoWh5n5XJ8FWxvqdQX48ww4HLZJb3dmHgd5Uk54SXe8HzqKtf5a1leO4PbCSNKNk5OyulLh9Gjk24HN/B55m4YWj1RjLF7oaHlQ0B51GOJGtCoV/E9iWycJGJ8ZVgHc/eR/i5Y+kctXCDGv5fcMUTJjdosfm1zjIVuc28N2vzeoO/flIflsI8/RgtFf44WZdDRApPILG9DUb+FH4og6jj3jrxXTf6Qf4tI9iUi2VNEkjzJkzzJkzzJkzzJkzzJ/8V3qoFT2IY72o0AAAAASUVORK5CYII=" alt="india" />
                            <p className='text-xl '>India</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABcCAMAAADUMSJqAAAAIVBMVEX/zAPEAD4AAADFAz//1AB2ZRv1vxG+AEAEBAR0ZR3/zgDi9FdmAAAAUklEQVRoge3awRGAIAwAwYAoQv8F20Cc+PC5V8BWcHEn9XNE0b7mURY96xPequBwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8Nf8HSHWP/sEA/NwSkBzNR7zgAAAABJRU5ErkJggg==" alt="india" />
                            <p className='text-xl '>Belgium</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="https://i.pinimg.com/originals/30/47/3f/30473f08ede561b8b8c7953078127d31.jpg" alt="india" />
                            <p className='text-xl '>Australia</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="https://i.pinimg.com/564x/2c/60/86/2c608693f21531817c6b10129840e9b3.jpg" alt="india" />
                            <p className='text-xl '>Mexico</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="https://i.pinimg.com/564x/a6/7a/f9/a67af9c593ba25a687b95e35d294dc18.jpg" alt="india" />
                            <p className='text-xl '>Sweden</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                    <div className='flex justify-between px-[4rem] mt-[1rem]'> 
                        <div className='flex gap-[1rem] justify-center items-center'>
                            <img className='w-[1.5rem] rounded-full' src="https://i.pinimg.com/564x/2a/cb/7d/2acb7d9371550e4f145d5a1a841a41cb.jpg" alt="india" />
                            <p className='text-xl '>Vietnam</p>
                        </div>
                        <p className='text-lg'>6,972</p>
                    </div>
                </div>
            </div>
            <div className='mt-[2rem] flex flex-col lg:flex-row gap-[1rem]'>
                <div className='lg:w-1/3 h-[35rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>Orders</p>
                        <p className='font-bold'>•••</p>
                    </div>
                    <div className='flex flex-col gap-[2rem] pt-[1rem]'>
                        <div className='mr-[3rem] flex justify-evenly items-center gap-[10rem]'>
                            <p className='font-bold text-lg'>Products</p>
                            <p className='font-bold text-lg'>Price</p>
                        </div>
                        <div className=' flex justify-between gap-[1rem] items-center px-[3rem]'>
                            <div className='flex justify-center items-center gap-[1rem]'>
                                <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                                <p className='font-bold'>Park Avenue</p>
                            </div>
                            <div className='mr-[2.5rem]'>
                                <p className='font-bold'>₹320</p>
                            </div>
                        </div>
                        <div className=' flex justify-between gap-[1rem] items-center px-[3rem]'>
                            <div className='flex justify-center items-center gap-[1rem]'>
                                <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                                <p className='font-bold'>Park Avenue</p>
                            </div>
                            <div className='mr-[2.5rem]'>
                                <p className='font-bold'>₹320</p>
                            </div>
                        </div>
                        <div className=' flex justify-between gap-[1rem] items-center px-[3rem]'>
                            <div className='flex justify-center items-center gap-[1rem]'>
                                <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                                <p className='font-bold'>Park Avenue</p>
                            </div>
                            <div className='mr-[2.5rem]'>
                                <p className='font-bold'>₹320</p>
                            </div>
                        </div>
                        <div className=' flex justify-between gap-[1rem] items-center px-[3rem]'>
                            <div className='flex justify-center items-center gap-[1rem]'>
                                <img className='w-[2rem]' src="https://m.media-amazon.com/images/I/614GA7ARZxL._AC_UL640_FMwebp_QL65_.jpg" alt="" />
                                <p className='font-bold'>Park Avenue</p>
                            </div>
                            <div className='mr-[2.5rem]'>
                                <p className='font-bold'>₹320</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className='lg:w-1/3 h-[35rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>Earnings</p>
                        <p className='font-bold'>•••</p>
                    </div>
                    <div>
                        <div className='flex gap-[1rem] items-center pl-[2rem] pt-[1.5rem]'>
                            <FontAwesomeIcon icon={faCircle} color='#D7E5FE' size='sm'/>
                            <p className='font-bold text-sm text-gray-400'>Revenue</p>
                        </div>
                        <div className='flex gap-[1rem] items-center pl-[2rem] pt-[0.5rem]'>
                            <p className='text-3xl font-bold'>$37,802</p>
                            <p className='text-green-500'>0.56%</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-[1rem] items-center pl-[2rem] pt-[1.5rem]'>
                            <FontAwesomeIcon icon={faCircle} color='#4F86E8' size='sm'/>
                            <p className='font-bold text-sm text-gray-400'>Profit</p>
                        </div>
                        <div className='flex gap-[1rem] items-center pl-[2rem] pt-[0.5rem]'>
                            <p className='text-3xl font-bold'>$28,305</p>
                            <p className='text-green-500'>0.56%</p>
                        </div>
                    </div>
                    <div>
                       <img className='p-[2rem] w-[28rem] ' src={require('../asset/graph5.png')} alt="" />
                    </div>
                </div>  
                <div className='lg:w-1/3 h-[35rem] rounded-xl shadow-xl bg-white'>
                    <div className='flex justify-between px-[2rem] items-center pt-[1rem]'>
                        <p className='text-2xl font-bold'>New Comments</p>
                        <p className='font-bold'>•••</p>
                    </div>
                    <div className='pt-[2rem] flex justify-center items-start py-[0.5rem] px-[1rem] gap-[1rem]'>
                        <img className='w-[3rem] rounded-full' src="https://i.pinimg.com/564x/84/a5/f5/84a5f56879a12019e4963241263e505d.jpg" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Kathryn Murphy</p>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gray' size='sm'/>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellat? Beatae consectetur sequi distinctio quos.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-start py-[0.5rem] px-[1rem] gap-[1rem]'>
                        <img className='w-[3rem] rounded-full' src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Kathryn Murphy</p>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gray' size='sm'/>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellat? Beatae consectetur sequi distinctio quos.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-start py-[0.5rem] px-[1rem] gap-[1rem]'>
                        <img className='w-[3rem] rounded-full' src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Kathryn Murphy</p>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gray' size='sm'/>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellat? Beatae consectetur sequi distinctio quos.</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-start py-[0.5rem] px-[1rem] gap-[1rem]'>
                        <img className='w-[3rem] rounded-full' src="https://i.pinimg.com/564x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg" alt="" />
                        <div>
                            <p className='font-bold text-sm'>Kathryn Murphy</p>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gold' size='sm'/>
                            <FontAwesomeIcon icon={faStar} color='gray' size='sm'/>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, repellat? Beatae consectetur sequi distinctio quos.</p>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home