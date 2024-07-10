import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faReply, faSearch, faWarning, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Review() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_allreview.php')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        if (value.length > 0) {
            setShowSuggestions(true);
            const filtered = products.filter(product =>
                product.pname.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setShowSuggestions(false);
            setSelectedProduct(null);
        }
    };

    const handleSuggestionClick = (product) => {
        setSearchTerm(product.pname);
        setShowSuggestions(false);
        setSelectedProduct(product);
    };

    const handleDelete = (review_id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure that you want to delete it?')) {
            fetch(`http://localhost/waltzify_copy/frontend/src/Database/Delete/review_delete.php?Id=${review_id}`, {
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then(() => {
                setProducts(prevProducts => prevProducts.filter(review => review.Id !== review_id));
                if (selectedProduct) {
                    const updatedProduct = {
                        ...selectedProduct,
                        reviews: selectedProduct.reviews.filter(review => review.Id !== review_id)
                    };
                    setSelectedProduct(updatedProduct);
                }
            })
            .catch(error => console.log(error)); // Handle any errors
        }
    };

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem] relative'>
                <p className='text-xl lg:text-3xl font-bold'>Reviews And Rating
                <Link to='/AddReview'>
                        <button className=' text-xl text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl ml-4'>
                            <FontAwesomeIcon className='pr-[1rem]' icon={faPlus}/>
                            Add New
                        </button>
                    </Link>
                </p>
                <div className='border-2 flex items-center p-2 rounded-lg relative'>
                    <input
                        className='lg:w-[25rem] focus:outline-none'
                        type="text"
                        placeholder='Search here...'
                        value={searchTerm}
                        onChange={handleInputChange}
                    />
                    <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                    {showSuggestions && (
                        <ul className="absolute left-0 top-full mt-2 py-2 bg-white rounded-lg shadow-md border border-gray-200 w-full max-h-[15rem] overflow-y-auto z-10">
                            {filteredProducts.map((product) => (
                                <li
                                    key={product.Id}
                                    className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                                    onClick={() => handleSuggestionClick(product)}
                                >
                                    <img className='w-[3rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="product-img" />
                                    <span>{product.pname}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight} /> <span className='font-thin'>Reviews and Rating</span></p>
            </div>

            {selectedProduct ? (
                <div key={selectedProduct.Id} className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem] shadow-xl'>
                    <div className='flex items-center justify-between w-full px-[1rem] lg:px-[3rem] py-[1rem]'>
                        <div className='flex flex-col items-center justify-center w-full px-[1rem] lg:px-[3rem] py-[1rem]'>
                            <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${selectedProduct.img1}`} alt={selectedProduct.pname} />
                            <div>
                                <p className='font-bold'>{selectedProduct.pname} {selectedProduct.p_rate} ⭐</p>
                            </div>
                        </div>
                    </div>
                    <hr className='mx-[2rem] h-1 bg-black' />

                    {selectedProduct.reviews.map(review => (
                        <div key={review.productId}>
                            <div className='flex flex-col lg:flex-row lg:items-center gap-[0.5rem] lg:gap-[4rem] py-[1rem] px-[1rem] lg:px-[3rem]'>
                                {/* <p><span className='font-bold'>Status</span>: {review.status}</p>
                                <p><span className='font-bold'>Purchased Date</span>: {review.purchase_date}</p>
                                <p><span className='font-bold'>Location</span>: {review.location}</p>*/}
                            </div>
                            <div className='px-[1rem] lg:px-[3rem] py-[1rem]'>
                                <p className='text-2xl'>{review.review} {review.rating} ⭐</p> <br></br>
                                <p className='text-xl text-gray-500'>{review.timestamp}</p>
                                <p className='text-xl text-gray-500'>{review.email}</p>
                            </div>
                            <div className='py-[2rem] flex flex-col lg:flex-row lg:items-center justify-between px-[2rem] lg:px-[3rem] gap-[1rem] lg:gap-0'>
                                <div className='flex items-center gap-[3rem]'>
                                    <p><FontAwesomeIcon icon={faReply} onClick={() => handleDelete(review.Id)} /> Delete</p>
                                    <p><FontAwesomeIcon icon={faWarning} /> Report</p>
                                </div>
                            </div>
                            <hr className='mx-[2rem] h-1 bg-black' />
                        </div>
                    ))}
                </div>
            ) : (
                products.map(product => (
                    <div key={product.Id} className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem] shadow-xl'>
                        <div className='flex items-center justify-between w-full px-[1rem] lg:px-[3rem] py-[1rem]'>
                            <div className='flex flex-col items-center justify-center w-full px-[1rem] lg:px-[3rem] py-[1rem]'>
                                <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt={product.pname} />
                                <div>
                                    <p className='font-bold'>{product.pname} {product.p_rate} ⭐</p>
                                </div>
                            </div>
                        </div>
                        <hr className='mx-[2rem] h-1 bg-black' />

                        {product.reviews.map(review => (
                            <div key={review.productId}>
                                <div className='flex flex-col lg:flex-row lg:items-center gap-[0.5rem] lg:gap-[4rem] py-[1rem] px-[1rem] lg:px-[3rem]'>
                                    {/* <p><span className='font-bold'>Status</span>: {review.status}</p>
                                    <p><span className='font-bold'>Purchased Date</span>: {review.purchase_date}</p>
                                    <p><span className='font-bold'>Location</span>: {review.location}</p>*/}
                                </div>
                                <div className='px-[1rem] lg:px-[3rem] py-[1rem]'>
                                    <p className='text-2xl'>{review.review} {review.rating} ⭐</p> <br></br>
                                    <p className='text-xl text-gray-500'>{review.timestamp}</p>
                                    <p className='text-xl text-gray-500'>{review.email}</p>
                                </div>
                                <div className='py-[2rem] flex flex-col lg:flex-row lg:items-center justify-between px-[2rem] lg:px-[3rem] gap-[1rem] lg:gap-0'>
                                    <div className='flex items-center gap-[3rem]'>
                                        <p><FontAwesomeIcon icon={faReply} onClick={() => handleDelete(review.Id)} /> Delete</p>
                                        <p><FontAwesomeIcon icon={faWarning} /> Report</p>
                                    </div>
                                </div>
                                <hr className='mx-[2rem] h-1 bg-black' />
                            </div>
                        ))}
                    </div>
                ))
            )}
        </div>
    );
}

export default Review;





























