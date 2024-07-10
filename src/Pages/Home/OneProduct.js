import React, { useState, useEffect } from 'react';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link ,useNavigate } from 'react-router-dom';
function OneProduct({ addtocart, addwish }) {
    const [count, setCount] = useState(1);
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    const handleCart = () => {
        addtocart(product);
    };

    const handleWish = () => {
        addwish(product);
    };

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSub = () => {
        if (count > 1) setCount(count - 1);
    };
    const handleBuyNow = () => {
        addtocart(product); // Add the product to the cart
        navigate('/checkout', { state: { product: product } }); // Navigate to checkout page with product details
    };

    useEffect(() => {
        fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_one_product.php')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched product:', data); // Debug log
                setProduct(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (!product) {
        return <div>Loading...</div>;
    }

    const discountedPrice = product.p_price - (product.p_price * (product.discount / 100));

    return (
        
        <div className='py-[3rem] px-[1rem] lg:px-[2rem] flex flex-col lg:flex-row gap-[1rem]'>
            {/* images */}
            
            <div className='relative lg:px-[4rem] flex gap-8 flex-col lg:w-1/2'>
                <div className='absolute right-10 text-red-500 text-4xl'onClick={handleWish}><FavoriteIcon fontSize='inherit'/></div>
                {/* big */}
                <Link to = {`/${product.category}`}>
                <div className='flex justify-center items-center'>
                    
                    <img className='w-[30rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="" onError={(e) => console.error('Image load error:', e)} />
                    
                </div>
                {/* small ones */}
                <div className='flex justify-evenly items-center'>
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img2}`} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img3}`} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img4}`} alt="" />
                </div>
                </Link>
            </div>
            {/* desc */}
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-2xl font-semibold'>{product.pname}</h1>
                <div className='flex gap-[2rem]'>
                    <p className='text-green-500 text-xl'>₹{discountedPrice}</p>
                    <p className='text-red-500 text-xl line-through'>₹{product.p_price}</p>
                    <button className='bg-orange-500 px-[1rem] text-white rounded-xl'>Save</button>
                </div>
                <div className='flex gap-[2rem]'>
                    <div className='text-yellow-500 text-sm'>
                        {[...Array(5)].map((_, i) => (
                            i < product.p_rate ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                        ))}
                    </div>
                </div>
                <div>
                <Link to = {`/${product.category}`}>
                    <img className='w-[10rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img4}`} alt="" />
                </Link>
                </div>
               {/*  <p className='text-xl'>Size: {product.size}</p>
                <div className='flex gap-[4rem]'>
                    <p className='text-xl'>Quantity</p>
                    <div className='w-[7rem] flex gap-5 items-center text-xl border-2 px-[1rem] rounded-xl'>
                        <p className='cursor-pointer' onClick={handleSub}>-</p>
                        <p className='cursor-default w-2'>{count}</p>
                        <p className='cursor-pointer ml-2' onClick={handleAdd}>+</p>
                    </div>
                </div> */}
                <div className='mt-[3rem] flex flex-col text-xl gap-[2rem]'>
                    <button onClick={handleCart} className='add_to_cart'>Add To Cart</button>
                    <button onClick={handleBuyNow} className='add_to_cart'>Buy Now</button>
                </div>
            </div>
            
        </div>
    );
}

export default OneProduct;







{/*import React, { useState ,useEffect} from 'react'

function OneProduct({addtocart,addwish}) {
    const [count,setCount] = useState(1);
    const [product,setProducts] = useState('');
    const handleCart = () =>{
            addtocart(product);
    }
    const handleWish = () =>{
        addwish(product);
    }
    const handleAdd = () =>{
        setCount(count+1);
    }

    const handleSub = ()=>{
        setCount(count-1);
    }
    useEffect(() => {
        fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_one_product.php')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    /*const product = {
        name:"WALTZER WIELDING EQUIPMENTS & ACCESSORIES",
        img:"https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg",
        price:80.00,
    }*
  return (
    
    <div className='py-[3rem] px-[1rem] lg:px-[2rem] flex flex-col lg:flex-row gap-[1rem]'>

        {/* images *
        <div className=' lg:px-[4rem] flex gap-4 flex-col lg:w-1/2'>
            {/* big *
            <div className='flex justify-center items-center'>
          
                <img className='w-[30rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="" />
            </div>
            {/* small ones *
            <div className='flex justify-evenly items-center'>
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`}  alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img2}`}  alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img3}`}  alt="" />
                <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img4}`}  alt="" />
            </div>
        </div>
        {/* desc *
        <div className='flex flex-col gap-[1rem]'>
            <h1 className='text-2xl font-semibold'>{product.pname}</h1>
            <div className='flex gap-[2rem]'>
                <p className='text-green-500 text-xl'>₹{product.p_price}</p>
                <p className='text-red-500 text-xl line-through'>₹100.00</p>
                <button className='bg-orange-500 px-[1rem] text-white rounded-xl'>Save</button>
            </div>
            <div className='flex gap-[2rem]'>
                <p>⭐⭐⭐⭐</p>
                <p>no review</p>
            </div>
            <div>
                <img className='w-[10rem] border-2 border-black rounded-xl' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
            </div>
            <p className='text-xl'>Color: Torqouise</p>
            <div className='flex gap-[4rem]'>
                <p className='text-xl'>Quantity</p>
                <div className='w-[7rem] flex gap-5 items-center text-xl border-2 px-[1rem] rounded-xl'>
                    <p className='cursor-pointer' onClick={handleSub}>-</p>
                    <p className='cursor-default w-2'>{count}</p>
                    <p className='cursor-pointer ml-2' onClick={handleAdd}>+</p>
                </div>
            </div>
            <div className='mt-[3rem] flex flex-col text-xl gap-[2rem]'>
                <button onClick={handleCart} className='add_to_cart'>Add To Cart</button>
                <button onClick={handleWish} className='add_to_cart'>Add to Wishlist</button>
            </div>
        </div>
    </div>

  )

}

export default OneProduct*/}