import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faFileAlt,  faSearch,} from '@fortawesome/free-solid-svg-icons'

function OrderList() {
  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
        <div className='flexflex-col lg:flex-row  justify-between items-center px-[2rem] lg:px-[4rem]'>
            <p className='text-xl lg:text-3xl font-bold'>Orders List</p>
            <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Orders <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Orders List</span></p>
        </div>
        <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
            <div className='px-[2rem] py-[1rem] flex flex-col lg:flex-row gap-[2rem] justify-between lg:items-center'>
                <div className='border-2 flex items-center p-2 rounded-lg'> 
                    <input className='w-[25rem] focus:outline-none' type="text" placeholder='Search here...'/>
                    <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                </div>
                <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                    <FontAwesomeIcon className='pr-[1rem]' icon={faFileAlt}/>
                    Export All Orders
                </button>
            </div>
            {/* Orders List */}
            <div className='overflow-scroll mx-[1rem] lg:mx-[3rem]'>
                <div className='w-[75rem]'>
                    <div className='bg-[#F2F6F9] mt-[1rem] lg:mx-[3rem] rounded-xl'>
                        <div className='flex justify-between items-center p-[1rem]'>
                            <p className='font-bold mr-[19rem]'>Product</p>
                            <p className='font-bold'>Product ID</p>
                            <p className='font-bold'>Price</p>
                            <p className='font-bold'>Quantity</p>
                            <p className='font-bold lg:mr-[1rem]'>Payment</p>
                        </div>
                    </div>
                    <div className='py-[0.5rem] flex items-center lg:mx-[3rem] justify-between'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <p className='font-bold text-sm'>Dog Food, Chicken & Chicken Liver Recipe...</p>
                        </div>
                        <p className='text-sm'>#7712309</p>
                        <p className='text-sm'>$1,452.5</p>
                        <p className='text-sm mr-[1rem]'>1,638</p>
                        <p className='p-1 text-xs mr-[2rem] text-green-500 bg-green-100'>Success</p>
                    </div>           
                    <div className='py-[0.5rem] flex items-center lg:mx-[3rem] justify-between'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <p className='font-bold text-sm'>Dog Food, Chicken & Chicken Liver Recipe...</p>
                        </div>
                        <p className='text-sm'>#7712309</p>
                        <p className='text-sm'>$1,452.5</p>
                        <p className='text-sm mr-[1rem]'>1,638</p>
                        <p className='p-1 text-xs mr-[2rem] text-gray-500 bg-gray-100'>Pending</p>
                    </div>           
                    <div className='py-[0.5rem] flex items-center lg:mx-[3rem] justify-between'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <p className='font-bold text-sm'>Dog Food, Chicken & Chicken Liver Recipe...</p>
                        </div>
                        <p className='text-sm'>#7712309</p>
                        <p className='text-sm'>$1,452.5</p>
                        <p className='text-sm mr-[1rem]'>1,638</p>
                        <p className='p-1 text-xs mr-[2rem] text-red-500 bg-red-100'>Failed</p>
                    </div>           
                    <div className='py-[0.5rem] flex items-center lg:mx-[3rem] justify-between'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <p className='font-bold text-sm'>Dog Food, Chicken & Chicken Liver Recipe...</p>
                        </div>
                        <p className='text-sm'>#7712309</p>
                        <p className='text-sm'>$1,452.5</p>
                        <p className='text-sm mr-[1rem]'>1,638</p>
                        <p className='p-1 text-xs mr-[2rem] text-green-500 bg-green-100'>Success</p>
                    </div>           
                    <div className='py-[0.5rem] flex items-center lg:mx-[3rem] justify-between'>
                        <div className='flex items-center gap-[0.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="productimg" />
                            <p className='font-bold text-sm'>Dog Food, Chicken & Chicken Liver Recipe...</p>
                        </div>
                        <p className='text-sm'>#7712309</p>
                        <p className='text-sm'>$1,452.5</p>
                        <p className='text-sm mr-[1rem]'>1,638</p>
                        <p className='p-1 text-xs mr-[2rem] text-green-500 bg-green-100'>Success</p>
                    </div>           
                </div>
            </div>
            <hr className='mx-[2rem]'/>
        </div>
    </div>
  )
}

export default OrderList