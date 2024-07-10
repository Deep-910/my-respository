import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

function Wishlist({selectedItems,removewish}) {
    const [count,setCount] = useState(1);
    const handleremoveWish = (item) =>{
      removewish(item);
    }
      const handleAdd = () =>{
          setCount(count+1);
      }
  
      const handleSub = ()=>{
        if (count > 1) {
          setCount(count - 1);
        }
      }
    return (
      <div className='px-[1rem] lg:px-[7rem] py-[3rem]'>
          <div className='flex py-[2rem] justify-between items-center'>
        <h1 className='text-3xl lg:text-7xl font-semibold'>My Wishlist</h1>
        <Link to={'/'}>
          <div className='hover:text-orange-500 transition-all ease-in-out delay-75 flex justify-evenly items-center w-[15rem] border-l-2'>
            <FontAwesomeIcon icon={faArrowLeft} />
            <p className='font-bold'>Continue Shopping</p>
          </div>
        </Link>
      </div>
      {/* items */}
      <div className='py-[3rem]'>
        {/* category */}
        <div className='hidden lg:flex font-bold justify-between px-[5rem] items-center border-b-2 pb-[2rem]'>
          <p>Product</p>
          <div className='flex justify-evenly gap-[10rem] w-[45rem] items-center'>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
        </div>
        {/* product list */}
        <div className='flex flex-col lg:px-[3rem] justify-evenly'>
          {selectedItems.map((items, index) => (
            <div key={index} className='py-[1rem] flex flex-col lg:flex-row justify-between border-b-2'>
              <div className='flex gap-[0.5rem] items-center'>
                <img className='w-[10rem] h-[8rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${items.img1}`} alt="product-img" />
                <div className='w-[10rem]'>
                  <p className='font-bold text-sm'>{items.pname}</p>
                  {/* <p className='text-sm'>Color: Orange</p> */}
                </div>
              </div>
              <div className='ml-[1rem] flex lg:justify-evenly gap-[2rem] lg:gap-[10rem] items-center lg:w-[40rem]'>
                <p className='w-[5rem] text-sm text-center font-bold'>₹{items.p_price}</p>
                <div className='w-[8rem] flex gap-5 items-center justify-center text-lg border-2 px-[1rem] rounded-xl'>
                  <p className='cursor-pointer' onClick={handleAdd}>+</p>
                  <p className='cursor-default w-2 text-sm'>{count}</p>
                  <p className='cursor-pointer ml-2' onClick={handleSub}>-</p>
                </div>
                <p className='w-[4rem] text-center text-sm font-bold'>₹{count * items.p_price}</p>
              </div>
              <div className='mt-[1rem] lg:mt-0 flex items-center justify-center'>
                <button onClick={() => handleremoveWish(items)}><FontAwesomeIcon icon={faXmark} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
          {/* checkout */}
      </div>
    )
  }

export default Wishlist