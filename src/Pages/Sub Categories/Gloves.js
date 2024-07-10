import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Cap() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Gloves.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const discountedPrice = products.p_price - (products.p_price * (products.discount / 100));
  return (
    <main className='p-[3rem]'>
      <h1 className='text-5xl rs md:ml-[3rem]'>•Gloves</h1>
      <div className='flex flex-col mt-[5rem]'>
        {products.map(product => (
          <Link to={`/product/${product.Id}`} key={product.Id}>
            <div className='cursor-pointer hover:scale-105 flex flex-col md:flex-row justify-evenly  md:w-[70rem] md:ml-[4rem] hover:border-black transition-all ease-in-out border-2 p-2 md:p-[2rem] rounded-2xl'>
              <div className='img'>
                <img className='ml-[3.5rem] md:ml-0 w-[12rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="product-img" />
              </div>
              <div className='flex flex-col gap-3 text-sm'>
                <p className='text-2xl font-bold'>{product.pname}</p>
                <p>•<span className='bg-black text-white p-1 text-sm rounded-lg'>{product.p_rate}⭐</span> 2,88,454 Ratings & 11,419 Reviews</p>
                <p>•{product.p_price}</p>
                <p>•{product.description}</p>
              </div>
              <div className='price'>
                <p className='text-2xl font-bold'>₹{discountedPrice}</p>
                <p><span className=' line-through'>₹{product.p_price}</span> <span className='text-green-600'>{product.discount}% off</span></p>
                <p className='text-sm'>Free Delivery</p>
                <p className='text-sm'>Save extra with combo offers</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Cap; 


