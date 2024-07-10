import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCoffee, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link , useNavigate } from 'react-router-dom';

function ProductList() {
    const [selectedValue, setSelectedValue] = useState('');
    const [products, setProducts] = useState([]);
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [productData, setProductData] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        const adminData = localStorage.getItem('adminData');
        if (!adminData) {
            navigate('/AdminLogin'); // Redirect to login if no admin data found
        }

        fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_home_products.php')
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching data:', error));
    }, [navigate]);


    useEffect(() => {
        const numEntries = selectedValue ? parseInt(selectedValue, 10) : products.length;
        setDisplayedProducts(products.slice(0, numEntries));
    }, [selectedValue, products]);

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const confirmDelete = (Id) => {
        setProductToDelete(Id);
        setShowConfirm(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost/waltzify_copy/frontend/src/Database/Delete/Delete_Products.php?Id=${productToDelete}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(() => {
            setProductData(prevProductData => prevProductData.filter(product=> product.Id !== productToDelete));
            setShowConfirm(false);
            setProductToDelete(null);
        })
        .catch(error => console.log(error)); // Handle any errors
    };

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex lg:flex-row flex-col justify-between lg:items-center px-[1rem] lg:px-[4rem]'>
                <p className='text-xl lg:text-3xl font-bold'>Product List</p>
                <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Ecommerce <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Product List</span></p>
            </div>
            <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
                <div className='px-[2rem] py-[1rem] flex gap-[1rem] items-center'>
                    <FontAwesomeIcon icon={faCoffee} size='lg' color='#3B81F6'/>
                    <p className='text-gray-500 text-sm'>Tip search by Product ID: Each product is provided with a unique ID, which you can rely on to find the exact product you need.</p>
                </div>
                <div className='px-[2rem] py-[1rem] flex lg:flex-row flex-col gap-[2rem] justify-between items-center'>
                    <div className='flex gap-[2rem]'>
                        <p className='text-gray-500'>Showing</p>
                        <div className=''>
                            <select value={selectedValue} className='border-2 rounded-lg focus:outline-none' onChange={handleChange}>
                                <option value="">All</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <p className='text-gray-500'>entries</p>
                    </div>
                    <div className='border-2 flex items-center p-2 rounded-lg'> 
                        <input className='lg:w-[25rem] focus:outline-none' type="text" placeholder='Search here...'/>
                        <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                    </div>
                    <Link to='/AddProduct'>
                        <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                            <FontAwesomeIcon className='pr-[1rem]' icon={faPlus}/>
                            Add New
                        </button>
                    </Link>
                </div>
                {/* Product List */}
                <div className='overflow-scroll mx-[1rem] lg:mx-[3rem]'>
                    <div className='w-[75rem]'>
                        <div className='w-full mt-[1rem]'>
                            <div className='bg-[#F2F6F9] flex justify-between items-center p-[1rem]'>
                                <p className='font-bold mr-[18rem] lg:mr-[19rem]'>Product</p>
                                <p className='font-bold'>Product ID</p>
                                <p className='font-bold'>Price</p>
                                <p className='font-bold'>Category</p>
                                <p className='font-bold lg:mr-[1rem]'>Opeartion Update</p>
                                <p className='font-bold mr-[2rem]'>Operation Delete</p>
                            </div>
                        </div>
                        {displayedProducts.map((product, index) => (
                            <div key={index} className='py-[0.5rem] flex items-center justify-between'>
                                <div className='flex items-center gap-[0.5rem]'>
                                    <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="productimg" />
                                    <p className='font-bold w-[19rem] text-sm'>{product.pname}</p>
                                </div>
                                <p className='text-sm'>{product.Id}</p>
                                <p className='text-sm'>₹{product.p_price}</p>
                                <p className='text-sm mr-[1rem]'>{product.category}</p>
                                <p className='text-sm'>Update</p>
                                <p className = 'text-sm cursor-pointer' onClick={() => confirmDelete(product.Id)}>Delete</p>

                                {/* <p className={`p-1 text-xs mr-[2rem] ${product.quantity > 0 ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100'}`}>
                                    {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                                </p> */}
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='mx-[2rem]'/>
                <div className='my-[1rem] mx-[2rem]'>
                    <p className='text-sm text-gray-500'>Showing {displayedProducts.length} items</p>
                </div>
            </div>
                {/* Confirmation Modal */}
                {showConfirm && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-md'>
                        <p>Are you sure you want to delete this Product?</p>
                        <div className='flex justify-end gap-4 mt-4'>
                            <button className='bg-gray-300 p-2 rounded' onClick={() => setShowConfirm(false)}>Cancel</button>
                            <button className='bg-red-500 text-white p-2 rounded' onClick={handleDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductList;




























