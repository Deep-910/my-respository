import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Correct import for useParams
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { IoStarSharp } from "react-icons/io5";
import { Link ,useNavigate} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ProductDetail({ addtocart, addwish }) {
    const { id } = useParams(); // Correct usage of useParams
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [count, setCount] = useState(1);
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost/waltzify_copy/frontend/src/Database/Fetch_Products.php?id=${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                if (data.error) {
                    throw new Error(data.error);
                }
                setProduct(data);
                setRelatedProducts(data.related_products || []);
            })
            .catch(error => {
                setError(error);
            });
    }, [id]);

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
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleBuyNow = () => {
        addtocart(product); // Add the product to the cart
        navigate('/checkout', { state: { product: product } }); // Navigate to checkout page with product details
    };
    if (!product) {
        return <p>Loading...</p>;
    }
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleString('en-IN', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };
    const discountedPrice = product.p_price - (product.p_price * (product.discount / 100));
    return (
        <div className='py-[3rem] px-[1rem] lg:px-[2rem] '>
            <div className='flex flex-col lg:flex-row gap-[4rem]'>
                {/* Render product images and description */}
                <div className='border-2 h-[33rem] lg:h-[43rem] border-orange-500 rounded-xl py-[1rem] lg:px-[2rem] flex gap-4 flex-col lg:w-[38rem]'>
                <div className='relative'>
                    <div className='absolute top-2 right-2 text-red-500 text-4xl' onClick={handleWish} ><FavoriteIcon fontSize="inherit"/></div>
                        <div className='flex justify-center items-center'>
                    
                            <img className='w-[30rem] h-[30rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname} />
                        </div>
                </div>        
                    {/* Render other small images if needed */}
                    <div className='flex justify-evenly items-center'>
                    <img className='w-[4rem] h-[4rem] lg:h-[8rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname}/>
                    <img className='w-[4rem] h-[4rem] lg:h-[8rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img2}`} alt={product.pname}/>
                    <img className='w-[4rem] h-[4rem] lg:h-[8rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img3}`} alt={product.pname} />
                    <img className='w-[4rem] h-[4rem] lg:h-[8rem] lg:w-[8rem] border-2 border-black rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img4}`} alt={product.pname}/>
                </div>

                </div>
                <div className='flex flex-col gap-[1rem]'>
                    <h1 className='text-2xl font-semibold'>{product.pname}</h1>
                    <div className='flex gap-[2rem] items-end'>
                        <p className='text-green-500 text-5xl'>₹{discountedPrice}</p>
                        <p className='text-red-500 text-xl line-through'>₹{product.p_price}</p>

                        {/* Render other price details */}
                    </div>
                    {/* Render rating */}
                    <div className='flex gap-[2rem]'>
                    <div className='text-yellow-500 text-sm'>
                    {[...Array(5)].map((_, i) => (
                            i <product.p_rate? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                        ))}
                        </div>
                        {/* Render review count */}
                    </div>
                    {/* Render available offers */}
                    <div className='flex flex-col gap-[1rem]'>
                        <p>Available Offers</p>
                        <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
                        {/* Render available offers details */}
                    </div>
                    {/* <p className='text-xl'>Size: {product.size}</p> */}
                    {/* Render quantity selection */}
                    {/* <div className='flex gap-[4rem]'>
                        <p className='text-xl'>Quantity</p>
                        <div className='w-[7rem] flex gap-5 items-center text-xl border-2 px-[1rem] rounded-xl'>
                            <p className='cursor-pointer' onClick={handleSub}>-</p>
                            <p className='cursor-default w-2'>{count}</p>
                            <p className='cursor-pointer ml-2' onClick={handleAdd}>+</p>
                        </div>
                    </div> */}
                    {/* Render add to cart and wishlist buttons */}
                    <div className='mt-[3rem] flex flex-col text-xl gap-[2rem]'>
                        <button onClick={handleCart} className='add_to_cart'>Add To Cart</button>
                        <button onClick={handleBuyNow} className='add_to_cart'>Buy Now</button>
                    </div>
                </div>
                
              </div>
            {/* Render about product section */}
            {/* ... */}
            <div className='lg:w-1/2 mt-[2rem] flex flex-col gap-[2rem]'>
                <p className='text-2xl font-bold'>About this item:</p>
                <div className=''>
                    <ul className='list-disc text-justify'>
                        {/*  {product.map((product,index)=>( */}
                            <li className="mb-4">{product.description}</li>
                        {/*))}*/}
                    </ul>
                </div>
            </div>
            
          
            {/* Render warranty and other sections */}
            <div className='flex flex-wrap gap-[1rem] items-center justify-evenly text-sm lg:text-xl py-2'>
            <div className='flex items-center gap-[0.5rem]'>
                <AssignmentReturnIcon/>
                <p>Return & Exchange</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <SupportAgentIcon/>
                <p>Customer Service</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <LocalShippingOutlinedIcon/>
                <p>Shipping and Delivery</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <SecurityOutlinedIcon/>
                <p>Warranty</p>
            </div>
        </div>
            {/* ... */}
            {/* Render customer reviews */}
            <div className='my-[2rem] py-[1.5rem] border-t-2'>
    <p className='text-4xl'>Customer Reviews:</p>
    <div className='mt-[2rem] flex gap-[2rem] overflow-x-scroll no-scrollbar'>
        {product.reviews.map((review, index) => (
            <div key={index} className='border-2 rounded-xl w-[23rem] flex-shrink-0 flex flex-col px-[1rem] py-[0.5rem]'>
                {/* Render review details */}
                <div className='flex items-center gap-2 text-xl'>
                    <AccountCircleOutlinedIcon />
                    <p className='font-bold'>{review.reviewTitle}  
                    </p>
                    <span className='bg-green-600 flex items-center text-white p-1 text-sm rounded-lg'>{review.rating}<IoStarSharp /></span>

                </div>
                <div className='flex items-center gap-1 mt-[0.5rem]'>
                    <div className='text-yellow-500 text-sm'>
                        {/* Render stars dynamically based on review.rating */}
                        {[...Array(5)].map((_, i) => (
                            i < review.rating ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                        ))}
                    </div>
                    
                </div>
                <p className='text-sm font-thin'>{`${formatDate(review.timestamp)}`}</p>
                <p className='mt-3 font-bold text-justify'>{review.review}</p>
                <div className='flex'>
                    <img className='mt-3 w-[5rem] h-[5rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Review/${review.img1}`} alt={review.title} />
                    <img className='mt-3 w-[5rem] h-[5rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Review/${review.img2}`} alt={review.title} />
                    <img className='mt-3 w-[5rem] h-[5rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Review/${review.img3}`} alt={review.title} />
                    <img className='mt-3 w-[5rem] h-[5rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Review/${review.img4}`} alt={review.title} />
                </div>
            </div>
        ))}
    </div>
</div>

          {/*   {/* Render related products *
            <div className='flex flex-col lg:flex-row gap-[1rem] py-[3rem] px-[2rem]'>
                <div className='lg:w-1/2'>
                    <p className='text-4xl font-bold'>You May Also Like</p>
                    <p>Below are some suggested items</p>
                    {relatedProducts.map((relatedProduct, index) => (
                        <div key={index} className='mt-[1rem] flex gap-[2rem] p-[1rem] rounded-xl border-2 border-orange-500 lg:mr-[10rem]'>
                            <img className='w-[8rem] p-2' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${relatedProduct.img1}`} alt={relatedProduct.name} />
                            <div className='flex flex-col gap-[1rem]'>
                                <p className='text-xl font-bold'>{relatedProduct.pname}</p>
                                <div className='flex gap-3'>
                                    <p className='text-xl'>₹{relatedProduct.p_price}</p>
                                    {/* Render other price details *
                                </div>
                                <button className='border-2 border-orange-500 text-orange-500'>Add</button>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Render other details if needed *
            </div> */}
            {/* Render related products */}
<div className='flex flex-col gap-[1rem] py-[3rem] px-[2rem]'>
    <div className='text-center lg:text-left mb-[2rem]'>
        <p className='text-4xl font-bold'>Related Products</p>
        <p>Below are some suggested items</p>
    </div>
    {/* <div className='flex flex-wrap justify-center lg:justify-start gap-[2rem]'>
        {relatedProducts.map((relatedProduct, index) => (
            <div key={index} className='w-[18rem] p-[1rem] rounded-xl border-2 border-orange-500 flex flex-col items-center'>
                
                <img className='w-[8rem] p-2' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${relatedProduct.img1}`} alt={relatedProduct.pname} />
                
                <div className='flex flex-col items-center text-center gap-[1rem] mt-[1rem]'>
                    <p className='text-xl font-bold'>{relatedProduct.pname}</p>
                    <div className='flex gap-3'>
                        <p className='text-xl'>₹{relatedProduct.p_price}</p>
                        {relatedProduct.discount > 0 && (
                            <p className='text-sm line-through text-gray-500'>
                                ₹{(relatedProduct.p_price / (1 - relatedProduct.discount / 100)).toFixed(2)}
                            </p>
                        )}
                    </div>
                    <Link to = {`/product/${relatedProduct.Id}`}>
                    <button className='border-2 border-orange-500 text-orange-500 px-[1rem] py-[0.5rem] rounded-full'>
                        View
                    </button>
                    </Link>
                </div>
            </div>
        ))}

    </div> */}
     <p className='lg:hidden mx-[2rem] bg-orange-500 px-[2rem] py-2 rounded-bl-2xl text-white text-sm lg:text-2xl'>Selected Category</p>
                <div className='overflow-hidden'>
                    <div className='px-3 lg:px-[2.5rem] py-[2rem] grid gap-[2rem] lg:grid-cols-4 grid-cols-2 items-center justify-between lg:gap-5'>
                        {relatedProducts.map((relatedProduct, index) => {
                            const discountedPrice = product.p_price - (product.p_price * (product.discount / 100));
                            
                            return(
                                <Link
                                key={index}
                                to={{
                                  pathname: `/product/${relatedProduct.Id}`,
                                  state: { product: product }
                                }}
                              >
                                <div className='shadow-xl hover:border-orange-500 group p-1 w-[10rem] lg:w-[20rem] lg:p-[1rem] border-2 rounded-xl cursor-pointer lg:h-[23rem]'>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xs bg-orange-500 text-white p-2 rounded-xl'>Save {relatedProduct.discount}%</p>
                                        <FontAwesomeIcon className='group-hover:block hidden' icon={faHeart} />
                                    </div>
                                    <img className='w-[10rem] h-[7rem] lg:h-[11rem] p-[1rem] lg:w-full rounded-xl' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${relatedProduct.img1}`} alt="" />
                                    <div className='hidden lg:block mt-[0.5rem] h-[2rem]'>
                                        <p className='hidden group-hover:block bg-orange-500 text-white text-center mx-[1rem] rounded-xl'>Quick View</p>
                                    </div>
                                    <div className='px-[0.2rem]'>
                                        <p className='font-bold text-sm'>{relatedProduct.pname}</p>
                                        <div className='flex gap-3 text-xl'>
                                            <p>₹{discountedPrice}</p>
                                            <span className='line-through text-sm'>₹{relatedProduct.p_price}</span>
                                        </div>
                                        <div className='text-yellow-500 text-sm'>
                                  
                                    {[...Array(5)].map((_, i) => (
                                        i < relatedProduct.p_rate ? <StarOutlinedIcon key={i} /> : <StarBorderOutlinedIcon key={i} />
                                    ))}
                            
                                </div>
                                    </div>
                                </div>
                            </Link>
                            );
                        })}
                    </div>

                </div>
</div>

        </div>
    );
}

export default ProductDetail;
















{/*import React,{useState,} from 'react'
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

function ProductDetail({addtocart,addwish}) {

    const [count,setCount] = useState(1);

    const handleCart = ()=>{
        addtocart(product);
    }
    const handleWish = () =>{
        addwish(product);
    }
    const handleAdd = () =>{
        setCount(count+1);
    }

    const handleSub = ()=>{
        if(count>1){
            setCount(count-1);
        }
    }
    const product = {
        name:"WALTZER WIELDING EQUIPMENTS & ACCESSORIES",
        img:"https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg",
        price:80.00,
    }

    const about = [
        "BRAND - Waltzer India, SIZE - MS Rod 12 mm Length 165 mm Width 170 mm Thickness 25 mm, COLOR – Orange, QTY – 1Pcs",
        "PVC MATERIAL - Constructed from durable PVC material, ensuring longevity and resistance to corrosion, making it suitable for various environments including construction sites, swimming pools, and both overhead and underground water tanks.",
        "SLIP-RESISTANT SURFACE - PVC rungs are designed with a textured surface, providing enhanced grip and traction even in wet conditions, minimizing the risk of slips and falls.",
        "EASY INSTALLATION - Featuring a simple yet effective design, the PVC rungs with Nut Bolt can be easily installed onto surfaces such as concrete walls or metal frames using MS Rods (12mm), allowing for quick setup and hassle-free maintenance.",
        "VERSATILE APPLICATION - Suitable for a wide range of applications, including construction sites for accessing elevated areas, swimming pools for safe entry and exit, and maintenance tasks for overhead and underground water tanks."
    ]

    const review = [
        {name:"username",review:"product is good",desc:"Quality of metal must be improved otherwise polarised and uv protection is good ."},
        {name:"username",review:"product is good",desc:"Quality of metal must be improved otherwise polarised and uv protection is good ."},
        {name:"username",review:"product is good",desc:"Quality of metal must be improved otherwise polarised and uv protection is good ."},
        {name:"username",review:"product is good",desc:"Quality of metal must be improved otherwise polarised and uv protection is good ."},
    ]
    
  return (
    <div className='py-[3rem] px-[1rem] lg:px-[2rem] '>
        <div className='flex flex-col lg:flex-row gap-[4rem]'>
            {/* images *
            <div className='border-2 h-[33rem] lg:h-[43rem] border-orange-500 rounded-xl py-[1rem] lg:px-[2rem] flex gap-4 flex-col lg:w-[38rem]'>
                {/* big *
                <div className='flex justify-center items-center'>
                    <img className='w-[30rem]' src={product.img} alt="" />
                </div>
                {/* small ones *
                <div className='flex justify-evenly items-center'>
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={product.img} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={product.img} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={product.img} alt="" />
                    <img className='w-[4rem] lg:w-[8rem] border-2 border-black rounded-xl' src={product.img} alt="" />
                </div>
            </div>
            {/* desc *
            <div className='flex flex-col gap-[1rem]'>
                <h1 className='text-2xl font-semibold'>{product.name}</h1>
                <div className='flex gap-[2rem] items-end'>
                    <p className='text-green-500 text-5xl'>₹{product.price}</p>
                    <p className='text-red-500 text-xl line-through'>₹100.00</p>
                    <button className='bg-orange-500 px-[1rem] text-white rounded-xl'>Share</button>
                </div>
                <div className='flex gap-[2rem]'>
                    <p>⭐⭐⭐⭐</p>
                    <p>no review</p>
                </div>
                <div className='flex flex-col gap-[1rem]'>
                    <p>Available Offers</p>
                    <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <LoyaltyOutlinedIcon/>
                        <p className='text-sm'>Bank OfferGet ₹50 instant discount on first Flipkart UPI transaction on order of ₹200 and above</p>
                    </div>
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
        {/* about product *
        <div className='flex flex-col lg:flex-row gap-[1rem] py-[3rem] px-[2rem]'>
            <div className='lg:w-1/2'>
                <p className='text-4xl font-bold'>You May Also Like</p>
                <p>below are some suggested items</p>
                {/* some items *
                <div className='mt-[1rem] flex gap-[2rem] p-[1rem] rounded-xl border-2 border-orange-500 lg:mr-[10rem]'>
                    <img className='w-[8rem] p-2' src="https://i.pinimg.com/564x/b0/6a/86/b06a860dfb5b0f78bbab9d0deaa0b697.jpg" alt="" />
                    <div className='flex flex-col gap-[1rem]'>
                        <p className='text-xl font-bold'>Snake Catcher Stick</p>
                        <div className='flex gap-3'>
                            <p className='text-xl'>₹120</p>
                            <p className='text-lg line-through'>₹280</p>
                        </div>
                        <button className='border-2 border-orange-500 text-orange-500'>Add</button>
                    </div>
                </div>
                <div className='mt-[1rem] flex gap-[2rem] p-[1rem] rounded-xl border-2 border-orange-500 lg:mr-[10rem]'>
                    <img className='w-[8rem] p-2' src="https://i.pinimg.com/564x/b0/6a/86/b06a860dfb5b0f78bbab9d0deaa0b697.jpg" alt="" />
                    <div className='flex flex-col gap-[1rem]'>
                        <p className='text-xl font-bold'>Snake Catcher Stick</p>
                        <div className='flex gap-3'>
                            <p className='text-xl'>₹120</p>
                            <p className='text-lg line-through'>₹280</p>
                        </div>
                        <button className='border-2 border-orange-500 text-orange-500'>Add</button>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 flex flex-col gap-[2rem]'>
                <p className='text-2xl font-bold'>About this item:</p>
                <div className=''>
                    <ul className='list-disc text-justify'>
                        {about.map((item,index)=>(
                            <li key={index} className="mb-4">{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        {/* warranty *
        <div className='flex flex-wrap gap-[1rem] items-center justify-evenly text-sm lg:text-xl py-2'>
            <div className='flex items-center gap-[0.5rem]'>
                <AssignmentReturnIcon/>
                <p>Return & Exchange</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <SupportAgentIcon/>
                <p>Customer Service</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <LocalShippingOutlinedIcon/>
                <p>Shipping and Delivery</p>
            </div>
            <div className='flex items-center gap-[0.5rem]'>
                <SecurityOutlinedIcon/>
                <p>Warranty</p>
            </div>
        </div>

        {/* reviews *
        <div className='my-[2rem] py-[1.5rem] border-t-2'>
            <p className='text-4xl'>Customer Reviews:</p>
            <div className='mt-[2rem] flex gap-[2rem] overflow-x-scroll no-scrollbar'>
                {/* template *
                {review.map((rate,index)=>(
                    <div key={index} className='border-2 rounded-xl w-[23rem] flex-shrink-0 flex flex-col px-[1rem] py-[0.5rem]'>
                        <div className='flex items-center gap-2 text-xl'>
                            <AccountCircleOutlinedIcon/>
                            <p>{rate.name}</p>
                        </div>
                        <div className='flex items-center gap-1 mt-[0.5rem]'>
                            <div className='text-yellow-500 text-sm'>
                                <StarOutlinedIcon/>
                                <StarOutlinedIcon/>
                                <StarOutlinedIcon/>
                                <StarBorderOutlinedIcon/>
                                <StarBorderOutlinedIcon/>
                            </div>
                            <p className='font-bold'>{rate.review}</p>
                        </div>
                        <p className='text-sm font-thin'>Reviewed in India on 11 May 2024</p>
                        <p className='mt-3 font-bold text-justify'>{rate.desc}</p>
                        <div className='flex'>
                            <img className='mt-3 w-[5rem] h-[5rem]' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                            <img className='mt-3 w-[5rem] h-[5rem]' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                            <img className='mt-3 w-[5rem] h-[5rem]' src="https://i.pinimg.com/736x/cb/10/83/cb108377f0ef5ea3e401fcf27daabad3.jpg" alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductDetail*/}









