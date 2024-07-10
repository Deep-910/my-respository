import React, { useState, useEffect } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Link } from 'react-router-dom';

function NewArrivalPage() {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [rightProducts,setRightProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_newArrivalBanner.php')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_temple_products.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_new_right.php')
      .then(response => response.json())
      .then(data => setRightProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_New_Collection.php')
      .then(response => response.json())
      .then(data => setCollections(data))
      .catch(error => console.error('Error fetching collections:', error));
  }, []);

  return (
    <div>
      {/* Hero */}
      {banners.length > 0 ? (
        banners.map((banner, index) => (
          <img key={index} className='w-full lg:h-[50vh]' src={`http://localhost/waltzify_copy/frontend/src/Database/NewArrivalBanner/${banner.image}`} alt="" />
        ))
      ) : (
        <div className="relative w-full h-[16rem] lg:h-[50vh]">
          <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="default banner" />
        </div>
      )}
      {/* Content */}
      <div className='lg:px-[4rem] px-[1rem]'>
        {/* Top */}
        <div className='py-[3rem] flex flex-col lg:flex-row gap-[2rem] justify-between items-center'>
          <button className='rounded-lg text-3xl bg-red-500 text-white py-2 px-[2rem]'>Latest Collections</button>
        </div>
        {/* Bottom */}
        <div className='py-[2rem] flex flex-col lg:flex-row gap-[4rem]'>
          {/* Left */}
          <div className='lg:w-2/3'>
            <div className='grid grid-cols-2 gap-4'>
              {collections.map((collection, index) => (
                <Link to = {`/${collection.collectionName}`}>
                <img key={index} className='w-full h-[20rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${collection.images1}`} alt={`Collection ${index + 1}`} />
                </Link>
              ))}
            </div>
            <p className='py-[1rem] text-2xl font-bold'>Featured Products</p>
            <p className='font-thin text-xl'>Description of Products</p>
          </div>
          {/* Right */}
          <div className='lg:w-1/4 flex flex-col gap-[1rem]'>
            {/* Products */}
            {rightProducts.map((product, index) => (
              <Link
                key={index}
                to={{
                  pathname: `/product/${product.Id}`,
                  state: { product: product }
                }}
              >
                <div className='shadow-xl rounded-xl px-[1rem] py-2 flex flex-col'>
                  <img className='w-full lg:h-[12rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname} />
                  <p className='mt-[1rem] font-bold text-xl'>{product.pname}</p>
                  <p className='font-bold text-xl'>₹{product.p_price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Products */}
        <div className='py-[2rem]'>
          <h1 className='text-4xl font-bold pb-[2rem]'>Latest Products</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[2rem] lg:px-[3rem]'>
            {products.map((product, index) => (
              <Link
                key={index}
                to={{
                  pathname: `/product/${product.Id}`,
                  state: { product: product }
                }}
              >
                {/* <div key={index} className='flex flex-col items-center w-[12rem] lg:w-[16rem] shadow-xl rounded-xl p-2'>
                  <img className='lg:w-[16rem] w-[12rem] h-[7rem] lg:h-[10rem] rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname} />
                  <div className='text-yellow-500 text-sm'>
                    {[...Array(5)].map((_, i) => (
                      i < product.p_rate ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                    ))}
                  </div>
                  <p className='mt-[1rem] font-bold text-sm lg:text-xl'>{product.pname}</p>
                  <p className='font-bold text-sm lg:text-xl'>₹{product.p_price}</p>
                </div> */}
                <div key={index} className='flex flex-col items-center w-[12rem] lg:w-[16rem] shadow-xl rounded-xl py-2 px-4'>
                <img className='lg:w-[16rem] w-[12rem] h-[7rem] lg:h-[10rem] rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname} />
                  <div className='text-yellow-500 text-sm'>
                    {[...Array(5)].map((_, i) => (
                      i < product.p_rate ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                    ))}
                  </div>
                  <p className='mt-[1rem] font-bold text-sm lg:text-sm'>{product.pname}</p>
                  <p className='font-bold text-sm lg:text-sm'>₹{product.p_price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalPage;



{/*import React, { useState, useEffect } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Link } from 'react-router-dom';
function NewArrivalPage() {
  const [newArrival, setNewArrival] = useState([]);
  const [products,setProducts] = useState([]);
  const [collection,setCollection] = useState([]);
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_newArrivalBanner.php')
      .then(response => response.json())
      .then(data => setNewArrival(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_temple_products.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_Collection.php')
      .then(response => response.json())
      .then(data => setCollection(data))
      .catch(error => console.error('Error fetching Collection:', error));
  }, []);

  const images = [
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title: 'product name', price: 10.99, url: 'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
  ];

  return (
    <div>
      {/* Hero *
      <div>
        {newArrival.length > 0 ? (
          newArrival.map((banner, index) => (
            <a key={index} href={banner.link_url}>
              <img className='w-full lg:h-[50vh]' src={`http://localhost/waltzify_copy/frontend/src/Database/NewArrivalBanner/${banner.image}`} alt="" />
            </a>
          ))
        ) : (
          <div className="relative w-full h-[16rem] lg:h-[50vh]">
            <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="default banner" />
          </div>
        )}
      </div>

      {/* Content *
      <div className='lg:px-[4rem] px-[1rem]'>
        {/* Top *
        <div className='py-[3rem] flex flex-col lg:flex-row gap-[2rem] justify-between items-center'>
          <button className='rounded-lg text-3xl bg-red-500 text-white py-2 px-[2rem]'>Latest Collections</button>
          {/* Time *
          <div className='flex gap-[2rem] justify-evenly items-center rounded-xl bg-red-300 p-4'>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>20</p>
              <p className='text-xl text-center'>Days</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>23</p>
              <p className='text-xl text-center'>Hours</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>50</p>
              <p className='text-xl text-center'>Minutes</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>27</p>
              <p className='text-xl text-center'>Seconds</p>
            </div>
          </div>
        </div>

        {/* Bottom *
        <div className='py-[2rem] flex flex-col lg:flex-row gap-[4rem]'>
          {/* Left *

          <div className='lg:w-2/3'>
          {collection.map((collection, index) => (
            <div key={index} className='flex flex-col lg:flex-row gap-4'>
              <img className='lg:w-1/2 h-[38rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${collection.img1}`} alt="" />
              <div className='lg:w-1/2 flex lg:flex-col justify-between'>
                <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/4d/02/02/4d02028e50438beafedc9297c01bcab3.jpg" alt="" />
                <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/b8/8d/8b/b88d8bd14909deb56c757096a810e8f0.jpg" alt="" />
              </div>
            </div>
          ))}
            <p className='py-[1rem] text-2xl font-bold'>Featured Products</p>
            <p className='font-thin text-xl'>Description of Products</p>
          </div>

          {/* Right *
          <div className='lg:w-1/3 flex flex-col gap-[1rem]'>
            {/* Products *
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
          </div>
        </div>

        {/* Products *
        
        <div className='py-[2rem]'>
          <h1 className='text-4xl font-bold pb-[2rem]'>Temple</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[2rem] lg:px-[3rem]'>
           
            {products.map((product, index) => (
                 <Link
                 key={index}
                 to={{
                     pathname: `/product/${product.Id}`,
                     state: { product: product }
                 }}
             >
              <div key={index} className='flex flex-col items-center w-[12rem] lg:w-[16rem] shadow-xl rounded-xl p-2'>
                <img className='lg:w-[20rem] w-[10rem] h-[7rem] lg:h-[13rem] rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="" />
                <div className='text-yellow-500 text-sm'>
                                    {[...Array(5)].map((_, i) => (
                                        i < product.p_rate ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                                    ))}
                </div>
                <p className='mt-[1rem] font-bold text-sm lg:text-xl'>{product.pname}</p>
                
                <p className='font-bold text-sm lg:text-xl'>₹{product.p_price}</p>
                
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalPage;*/}



















{/* import React from 'react'

function NewArrivalPage() {
  const [banners,setBanners] = useState([]);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_newArrivalBanner.php')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);
  const images = [
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
    {title:'product name',  price:10.99, url:'https://i.pinimg.com/564x/97/53/09/975309bb089a780d64f1a3797da37df4.jpg'},
  ]
  return (
    <div>
      {/* hero *
      {banners.length > 0 ? (
          banners.map((banner, index) => (
      <img key = {index}className='w-full lg:h-[50vh]' src={`http://localhost/waltzify_copy/frontend/src/Database/NewArrivalBanner/${banner.image}`} alt="" />
          ))}
      {/* content *
      <div className='lg:px-[4rem] px-[1rem]'>
        {/* top *
        <div className='py-[3rem] flex flex-col lg:flex-row gap-[2rem] justify-between items-center'>
          <button className='rounded-lg text-3xl bg-red-500 text-white py-2 px-[2rem]'>Latest Collections</button>
          {/* time *
          <div className='flex gap-[2rem] justify-evenly items-center rounded-xl bg-red-300 p-4'>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>20</p>
              <p className='text-xl text-center'>Days</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>23</p>
              <p className='text-xl text-center'>Hours</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>50</p>
              <p className='text-xl text-center'>Minutes</p>
            </div>
            <div className='flex flex-col gap-[0.5rem]'> 
              <p className='text-2xl text-center font-bold'>27</p>
              <p className='text-xl text-center'>Seconds</p>
            </div>
          </div>
        </div>
        {/* bottom *
        <div className='py-[2rem] flex flex-col lg:flex-row gap-[4rem]'>
          {/* left *
          <div className='lg:w-2/3'>
            <div className=' flex flex-col lg:flex-row gap-4'>
                <img className='lg:w-1/2 h-[38rem]' src="https://i.pinimg.com/564x/14/88/d1/1488d1f5b6656824cf821025a23f03e7.jpg" alt="" />
                <div className=' lg:w-1/2 flex lg:flex-col justify-between'>
                  <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/4d/02/02/4d02028e50438beafedc9297c01bcab3.jpg" alt="" />
                  <img className='w-1/2 lg:w-full' src="https://i.pinimg.com/564x/b8/8d/8b/b88d8bd14909deb56c757096a810e8f0.jpg" alt="" />
                </div>
            </div>
            <p className=' py-[1rem] text-2xl font-bold'>Featured Products</p>
            <p className='font-thin text-xl'>Description of Products</p>
          </div>
          {/* right *
          <div className='lg:w-1/3 flex flex-col gap-[1rem]'>
            {/* products *
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
            <div className='flex flex-col'>
              <img src="https://i.pinimg.com/564x/60/36/89/603689895f578e85cb86e0c118969758.jpg" alt="" />
              <p className='mt-[1rem] font-bold text-xl'>Product Name</p>
              <p className='font-thin'>Description of Product</p>
              <p className='font-bold text-xl'>₹10.99</p>
            </div>
          </div>
        </div>
        {/* products *
        <div className='py-[2rem]'>
          <h1 className='text-4xl font-bold pb-[2rem]'>Temple</h1>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-[2rem] lg:px-[3rem]'>
            {images.map((image,index)=>(
              <div key={index} className='flex flex-col items-center w-[12rem] lg:w-[16rem] shadow-xl rounded-xl p-2'>
                <img className='lg:w-[20rem] w-[10rem] h-[7rem] lg:h-[13rem] rounded-xl' src={image.url} alt="" />
                <p className='mt-[1rem] font-bold text-sm lg:text-xl'>{image.title}</p>
                <p className='font-thin text-sm'>Description of Product</p>
                <p className='font-bold text-sm lg:text-xl'>₹{image.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewArrivalPage */}



















































