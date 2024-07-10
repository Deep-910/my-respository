import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Collections() {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Collection.php')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const displayedCategories = showAll ? categories : categories.slice(0, 12);

  return (
    <div className='py-[3rem]'>
      {/* heading */}
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='text-3xl font-bold drop-shadow-xl'>COLLECTIONS</h1>
        <p>BEST OF WALTZER</p>
      </div>
      {/* collections */}
      <div className='py-[3rem] px-[1rem] lg:px-[4rem] grid grid-cols-3 lg:grid-cols-6 justify-between flex-wrap gap-[3rem] items-center overflow-hidden'>
        {displayedCategories.map((category, index) => (
          <div key={index} className='group flex flex-col items-center justify-center gap-2'>
            <Link to='/allproduct'>
              <img className='group-hover:border-orange-500 border-4 lg:w-[10rem] w-[7rem] h-[7rem] lg:h-[10rem] rounded-full' src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${category.images1}`} alt={category.cname} />
              <p className='w-[8rem] text-sm font-bold py-1 px-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all ease-in-out delay-100 text-center ml-[1rem]'>{category.collectionName}</p>
            </Link>
          </div>
        ))}
      </div>
      {/* VIEW ALL button */}
      {categories.length > 12 && !showAll && (
        <div className='flex justify-center mt-6'>
          <button
            onClick={() => setShowAll(true)}
            className='bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-all'
          >
            VIEW ALL
          </button>
        </div>
      )}
    </div>
  );
}

export default Collections;













{/* import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Collections() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Collection.php')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='py-[3rem]'>
      {/* heading *
      <div className='flex flex-col gap-3 justify-center items-center'>
        <h1 className='text-3xl font-bold drop-shadow-xl'>COLLECTIONS</h1>
        <p>BEST OF WALTZER</p>
      </div>
      {/* collections *
      <div className='py-[3rem] px-[1rem] lg:px-[4rem] grid grid-cols-3 lg:grid-cols-6 justify-between flex-wrap gap-[3rem] items-center overflow-hidden'>
        {categories.map((category, index) => (
          <div key={index} className='group flex flex-col items-center justify-center gap-2'>
            <Link to = {'/allproduct'}>
            <img className='group-hover:border-orange-500 border-4 lg:w-[10rem] w-[7rem] h-[7rem] lg:h-[10rem] rounded-full' src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${category.images1}`} alt={category.cname} />
            <p className='w-[8rem] text-sm font-bold py-1 px-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all ease-in-out delay-100 text-center'>{category.collectionName}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collections;
 */}











{/* import React from 'react'

function Collections() {
    const [categories, setCategories] = useState([]);

    
    const collections =[
        {title:'Road Safety', url:'https://i.pinimg.com/564x/e7/e2/a3/e7e2a36a845f06bb7d93f9b3bd2c38b4.jpg'},
        {title:'Home and Kitchen', url:'https://i.pinimg.com/564x/e7/e2/a3/e7e2a36a845f06bb7d93f9b3bd2c38b4.jpg'},
        {title:'E-market Choice', url:'https://i.pinimg.com/564x/b8/a0/b5/b8a0b5eadbdb129d26c14556cb73ac29.jpg'},
        {title:'Civil Lab Equipments', url:'https://i.pinimg.com/564x/8c/a0/9b/8ca09b889535e43892da4a88a95a6753.jpg'},
        {title:'Clean India Campaign', url:'https://i.pinimg.com/564x/bc/70/57/bc705702ddc8d17125a01b1af958a8a2.jpg'},
        {title:'Building Material', url:'https://i.pinimg.com/564x/fa/96/53/fa96531282f797f89c4b44c497f3c055.jpg'},
        {title:'Safety Product', url:'https://i.pinimg.com/474x/df/72/dd/df72dde7846eda025a9c5c41de7fe64c.jpg'},
        {title:'Search & Rescue', url:'https://i.pinimg.com/564x/d9/b3/b1/d9b3b1de8f2d79361019e025bf9029fa.jpg'},
        {title:'Silica Gel', url:'https://i.pinimg.com/564x/58/a6/62/58a662c125e5d67bd7a68b20be0dc324.jpg'},
        {title:'Fencing Product', url:'https://i.pinimg.com/564x/05/a2/01/05a201fe10cdcde1c6d306c8ad872ec3.jpg'},
        {title:'Foot Step', url:'https://i.pinimg.com/564x/18/77/b3/1877b39c09ef8b9478717c8d9fbbed59.jpg'},
        {title:'Snake & Garden Tool', url:'https://i.pinimg.com/736x/a9/a3/04/a9a30476fad5508cefb832ecf7bd863c.jpg'},
    ]
  return (
    <div className='py-[3rem]'>
        {/* heading *
        <div className='flex flex-col gap-3 justify-center items-center'>
            <h1 className='text-3xl font-bold drop-shadow-xl'>COLLECTIONS</h1>
            <p>BEST OF WALTZER</p>
        </div>
        {/* collections *
        <div className='py-[3rem] px-[1rem] lg:px-[4rem] grid grid-cols-3 lg:grid-cols-6 justify-between flex-wrap gap-[3rem] items-center overflow-hidden'>
            {collections.map((collection,index)=>(
                <div key={index} className=' group flex flex-col items-center justify-center gap-2'>
                    <img className='group-hover:border-orange-500 border-4 lg:w-[10rem] w-[7rem] h-[7rem] lg:h-[10rem] rounded-full' src={collection.url} alt="" />
                    <p className='w-[8rem] text-sm font-bold py-1 px-2 rounded-lg group-hover:bg-orange-500 group-hover:text-white transition-all ease-in-out delay-100 text-center'>{collection.title}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Collections */}