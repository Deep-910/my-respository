import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faTruck } from '@fortawesome/free-solid-svg-icons'

function OrderDetails() {
  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
            <p className='text-xl lg:text-3xl font-bold'>Order Details</p>
            <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Orders <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Order Details</span></p>
        </div>
        <div className='flex flex-col lg:flex-row gap-[2rem] px-[1rem] lg:px-[2rem]'>
            <div className=' rounded-xl pt-[2rem] lg:py-[3rem]  lg:w-2/3'>
                <div className='bg-white flex flex-col gap-[1rem] p-[1rem] rounded-xl shadow-xl'>
                    <div className='bg-white p-[1rem] rounded-xl'>
                        <div className=' flex justify-between'>
                            <p>All item</p>
                            <select className='focus:outline-none' name="sort" id="sort">
                                <option value="" className='bg-[#F2F6F9]'>Sort</option>
                                <option value="" className='bg-[#F2F6F9]'>Name</option>
                                <option value="" className='bg-[#F2F6F9]'>Quantity</option>
                                <option value="" className='bg-[#F2F6F9]'>Price</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex justify-between items-center lg:mr-[15rem]'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <div>
                                <p className='text-sm font-thin'>Product Name</p>
                                <p className='font-bold text-sm'>Dog Food</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm'>Quantity</p>
                            <p className='font-bold text-sm'>2</p>
                        </div>
                        <div>
                            <p className='text-sm'>Price</p>
                            <p className='font-bold text-sm'>$50.47</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center lg:mr-[15rem]'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <div>
                                <p className='text-sm'>Product Name</p>
                                <p className='font-bold text-sm'>Dog Food</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm'>Quantity</p>
                            <p className='font-bold text-sm'>2</p>
                        </div>
                        <div>
                            <p className='text-sm'>Price</p>
                            <p className='font-bold text-sm'>$50.47</p>
                        </div>
                    </div>
                    <div className='flex justify-between items-center lg:mr-[15rem]'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <div>
                                <p className='text-sm'>Product Name</p>
                                <p className='font-bold text-sm'>Dog Food</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-sm'>Quantity</p>
                            <p className='font-bold text-sm'>2</p>
                        </div>
                        <div>
                            <p className='text-sm'>Price</p>
                            <p className='font-bold text-sm'>$50.47</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white mt-[3rem] flex flex-col gap-[1.5rem] p-[2rem] rounded-xl shadow-xl'>
                    <div className='bg-[#f2f6f9] rounded-xl p-[1rem] flex justify-between items-center'>
                        <p className='font-bold'>Cart Totals</p>
                        <p className='font-bold lg:mr-[10rem]'>Price</p>
                    </div>
                    <div className='flex px-[1rem] justify-between items-center lg:mr-[10rem]'>
                        <p className='font-thin'>Sub Totals:</p>
                        <p className='font-bold'>$70.13</p>
                    </div>
                    <div className='flex px-[1rem] justify-between items-center lg:mr-[10rem]'>
                        <p className='font-thin'>Shipping:</p>
                        <p className='font-bold'>$10.00</p>
                    </div>
                    <div className='flex px-[1rem] justify-between items-center lg:mr-[10rem]'>
                        <p className='font-thin'>Tax (GST):</p>
                        <p className='font-bold'>$5.00</p>
                    </div>
                    <div className='flex px-[1rem] justify-between items-center lg:mr-[10rem]'>
                        <p className='font-bold'>Total Price:</p>
                        <p className='font-bold text-red-500'>$90.13</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-[1rem] rounded-xl py-[3rem] lg:w-1/3'>
                <div className='bg-white flex flex-col gap-[1rem] p-[1.5rem] rounded-xl shadow-xl'>
                    <p className='font-bold text-lg'>Summary</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-[2rem] justify-between w-[15rem]'>
                            <p className='font-thin text-sm'>Order ID</p>
                            <p className='font-bold text-sm'>#192847</p>
                        </div>
                        <div className='flex gap-[2rem] justify-between w-[15rem]'>
                            <p className='font-thin text-sm'>Date</p>
                            <p className='font-bold text-sm'>20 Nov 2023</p>
                        </div>
                        <div className='flex gap-[2rem] justify-between w-[15rem]'>
                            <p className='font-thin text-sm'>Total</p>
                            <p className='font-bold text-red-500 text-sm'>$948.5</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white flex flex-col gap-[1rem] p-[1.5rem] rounded-xl shadow-xl'>
                    <p className='font-bold text-sm'>Shipping Address</p>
                    <p className='font-thin text-sm'>3517 W. Gray St. Utica, Pennsylvania 57867</p>
                </div>
                <div className='bg-white flex flex-col gap-[1rem] p-[1.5rem] rounded-xl shadow-xl'>
                    <p className='font-bold text-sm'>Payment Method</p>
                    <p className='font-thin w-[20rem] text-sm'>Pay on Delivery (Cash/Card). Cash on delivery (COD) available. Card/Net banking acceptance subject to device availability.</p>
                </div>
                <div className='bg-white flex flex-col gap-[1rem] p-[1.5rem] rounded-xl shadow-xl'>
                    <p className='text-sm font-bold'>Expected Date of Delivery</p>
                    <p className='text-sm text-green-500'>20 Nov 2023</p>
                    <button className='mx-[1rem] text-blue-500 border-2 border-blue-500 p-2 rounded-xl font-bold hover:bg-blue-500 hover:text-white'><FontAwesomeIcon icon={faTruck}/>  Track Order</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OrderDetails