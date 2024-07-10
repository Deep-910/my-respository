import React from 'react'
import { FaSearch, FaStar } from 'react-icons/fa'

function MyOrders() {
    const products = [
        {image:'https://rukminim2.flixcart.com/image/200/200/xif0q/jacket/m/x/o/s-12178108-roadster-original-imag24hdzbnuqcrp-bb.jpeg?q=90',title:'Roadster Full Sleeve',price:"₹1200"},
        {image:'https://rukminim2.flixcart.com/image/200/200/l19m93k0/screen-guard/edge-to-edge-tempered-glass/p/g/x/xyn-1-7p-oguv-xynity-original-imagcv9dsuanhczj.jpeg?q=90',title:'Roadster Full Sleeve',price:"₹1200"},
        {image:'https://rukminim2.flixcart.com/image/200/200/xif0q/jacket/m/x/o/s-12178108-roadster-original-imag24hdzbnuqcrp-bb.jpeg?q=90',title:'Roadster Full Sleeve',price:"₹1200"},
        {image:'https://rukminim2.flixcart.com/image/200/200/xif0q/jacket/m/x/o/s-12178108-roadster-original-imag24hdzbnuqcrp-bb.jpeg?q=90',title:'Roadster Full Sleeve',price:"₹1200"},
        {image:'https://rukminim2.flixcart.com/image/200/200/xif0q/jacket/m/x/o/s-12178108-roadster-original-imag24hdzbnuqcrp-bb.jpeg?q=90',title:'Roadster Full Sleeve',price:"₹1200"},
    ]
  return (
    <div className='bg-[#F0F3F6] py-[4rem]'>
        {/* input */}
        <div className=' flex ml-[23rem]'>
            <input className='w-[40rem] p-2 outline-none rounded-l-xl' type="text" placeholder='search for orders'/>
            <p className='flex items-center bg-orange-500 text-white px-5 rounded-r-xl'><FaSearch/>Search</p>
        </div>

        {/* orders list */}
        <div className='flex flex-col mt-[2rem]'>

            {products.map((product,index)=>(
                <div key={index} className='bg-white flex items-start justify-evenly gap-[10rem] mx-[10rem] px-[2rem] py-[1rem] rounded-xl mt-[1.5rem]'>
                    <div className='flex gap-[2rem]'>
                        <img className='w-[4rem] h-[5rem]' src={product.image} alt="" />
                        <div className='flex flex-col gap-2'>
                            <p className=''>{product.title}</p>
                            <p className='text-sm font-thin'>basic description</p>
                        </div>
                    </div>
                    <p className=' font-semibold'>{product.price}</p>
                    <div className='flex flex-col gap-[0.5rem]'>
                        <p className='text-sm font-semibold'>Delivered on june 17th</p>
                        <p className='text-sm'>Status of delivery</p>
                        <p className='text-sm text-orange-500 flex items-center gap-2'><FaStar/> Rate and Review Products</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyOrders