import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CategoryList() {
    const [selectedValue, setSelectedValue] = useState('');
    const [categoryData, setCategoryData] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [categoryToDelete, setCategoryToDelete] = useState(null);

    useEffect(() => {
        fetchCategoryData();
    }, []);

    const fetchCategoryData = async () => {
        try {
            const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Category.php');
            const data = await response.json();
            setCategoryData(data);
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const confirmDelete = (category_id) => {
        setCategoryToDelete(category_id);
        setShowConfirm(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost/waltzify_copy/frontend/src/Database/Delete/Delete_Category.php?Id=${categoryToDelete}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(() => {
            setCategoryData(prevCategoryData => prevCategoryData.filter(category => category.category_id !== categoryToDelete));
            setShowConfirm(false);
            setCategoryToDelete(null);
        })
        .catch(error => console.log(error)); // Handle any errors
    };

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
                <p className='text-xl lg:text-3xl font-bold'>Category List</p>
                <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Ecommerce <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Category List</span></p>
            </div>
            <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
                <div className='px-[2rem] py-[1rem] flex flex-col lg:flex-row gap-[2rem] justify-between lg:items-center'>
                    <div className='flex gap-[2rem]'>
                        <p className='text-gray-500'>Showing</p>
                        <div className=''>
                            <select value={selectedValue} className='border-2 rounded-lg focus:outline-none' onChange={handleChange}>
                                <option value="">0</option>
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
                        <input className='w-[25rem] focus:outline-none' type="text" placeholder='Search here...'/>
                        <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                    </div>
                    <Link to='/newcategory'>
                        <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                            <FontAwesomeIcon className='pr-[1rem]' icon={faPlus}/>
                            Add New
                        </button>
                    </Link>
                </div>
                {/* Category List */}
                <div className='overflow-scroll lg:mx-[3rem]'>
                    <div className='w-[75rem]'>
                        <div className='bg-[#F2F6F9] mt-[1rem] mx-[3rem] rounded-xl'>
                            <div className='flex justify-between items-center p-[1rem] pr-[15rem]'>
                                <p className='font-bold'>CategoryId</p>                                
                                <p className='font-bold mr-[13rem]'>Category</p>
                                <p className='font-bold'>Operation Update</p>
                                <p className='font-bold'>Operation Delete</p>
                            </div>
                        </div>
                        {categoryData.map(category => (
                            <div key={category.category_id} className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                                <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                                    <p>{category.category_id}</p>
                                    <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Category/${category.image}`} alt="category-img" />
                                    <p>{category.cname}</p>
                                </div>
                                <p>Update</p>
                                <p className = 'cursor-pointer' onClick={() => confirmDelete(category.category_id)}>Delete</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='mx-[2rem]'/>
                <div className='my-[1rem] mx-[2rem]'>
                    <p className='text-sm text-gray-500'>Showing {selectedValue} items</p>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirm && (
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-6 rounded-md'>
                        <p>Are you sure you want to delete this category?</p>
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

export default CategoryList;











{/* import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CategoryList() {
    const [selectedValue, setSelectedValue] = useState('');
    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        fetchCategoryData();
    }, []);

    const fetchCategoryData = async () => {
        try {
            const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Category.php');
            const data = await response.json();
            setCategoryData(data);
        } catch (error) {
            console.error('Error fetching category data:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleDelete = (category_id) => {
        /// eslint-disable-next-line no-restricted-globals
        if (confirm('Are you sure that you want to delete it?')) {
            fetch(`http://localhost/waltzify_copy/frontend/src/Database/Delete/Delete_Category.php?Id=${category_id}`, {
                method: 'DELETE'
            })
            .then((response) => response.json())
            .then(() => {
                setCategoryData(prevCategoryData => prevCategoryData.filter(category => category.category_id !== category_id));
            })
            .catch(error => console.log(error)); // Handle any errors
        }
    };

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
                <p className='text-xl lg:text-3xl font-bold'>Category List</p>
                <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Ecommerce <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Category List</span></p>
            </div>
            <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
                <div className='px-[2rem] py-[1rem] flex flex-col lg:flex-row gap-[2rem] justify-between lg:items-center'>
                    <div className='flex gap-[2rem]'>
                        <p className='text-gray-500'>Showing</p>
                        <div className=''>
                            <select value={selectedValue} className='border-2 rounded-lg focus:outline-none' onChange={handleChange}>
                                <option value="">0</option>
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
                        <input className='w-[25rem] focus:outline-none' type="text" placeholder='Search here...'/>
                        <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                    </div>
                    <Link to='/AddCategoryList'>
                        <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                            <FontAwesomeIcon className='pr-[1rem]' icon={faPlus}/>
                            Add New
                        </button>
                    </Link>
                </div>
                {/* Category List *
                <div className='overflow-scroll lg:mx-[3rem]'>
                    <div className='w-[75rem]'>
                        <div className='bg-[#F2F6F9] mt-[1rem] mx-[3rem] rounded-xl'>
                            <div className='flex justify-between items-center p-[1rem] pr-[15rem]'>
                           
                                <p className='font-bold'>CategoryId</p>                                
                                <p className='font-bold mr-[13rem]'>Category</p>
                                <p className='font-bold'>Opereation Update</p>
                                <p className='font-bold'>Opeartion Delete</p>
                            </div>
                        </div>
                        {categoryData.map(category => (
                            <div key={category.cname} className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                                <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                                     <p>{category.category_id}</p>
                                    <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Category/${category.image}`} alt="category-img" />
                                    <p>{category.cname}</p>
                                </div>
                                <p>Update</p>
                                <p  onClick={() => handleDelete(category.category_id)}>Delete</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='mx-[2rem]'/>
                <div className='my-[1rem] mx-[2rem]'>
                    <p className='text-sm text-gray-500'>Showing {selectedValue} items</p>
                </div>
            </div>
        </div>
    );
}

export default CategoryList; */}
























{/*import React,{useState} from 'react'







import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBowlFood, faPlus, faSearch,} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
function CategoryList() {
    const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
            <p className='text-xl lg:text-3xl font-bold'>Category List</p>
            <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Ecommerce <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Category List</span></p>
        </div>
        <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
            <div className='px-[2rem] py-[1rem] flex flex-col lg:flex-row gap-[2rem] justify-between lg:items-center'>
                <div className='flex gap-[2rem]'>
                    <p className='text-gray-500'>Showing</p>
                    <div className=''>
                        <select value={selectedValue} className='border-2 rounded-lg focus:outline-none' onChange={handleChange}>
                            <option value="">0</option>
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
                    <input className='w-[25rem] focus:outline-none' type="text" placeholder='Search here...'/>
                    <FontAwesomeIcon icon={faSearch} color='#3B81F6'/>
                </div>
                <Link to = '/AddCategoryList'>
                <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                    <FontAwesomeIcon className='pr-[1rem]' icon={faPlus}/>
                    Add New
                </button>
                </Link>
            </div>
            {/* Category List *
            <div className='overflow-scroll lg:mx-[3rem]'>
                <div className=' w-[75rem]'>
                    <div className='bg-[#F2F6F9] mt-[1rem] mx-[3rem] rounded-xl'>
                        <div className='flex justify-between items-center p-[1rem] pr-[15rem]'>
                            <p className='font-bold mr-[13rem]'>Category</p>
                            <p className='font-bold'>Icon</p>
                            <p className='font-bold'>Quantity</p>
                            <p className='font-bold'>Sale</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                        <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            <p>Dog Food</p>
                        </div>
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>1,638</p>
                        <p>20</p>
                    </div>
                    <div className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                        <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            <p>Dog Food</p>
                        </div>
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>1,638</p>
                        <p>20</p>
                    </div>
                    <div className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                        <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            <p>Dog Food</p>
                        </div>
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>1,638</p>
                        <p>20</p>
                    </div>
                    <div className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                        <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            <p>Dog Food</p>
                        </div>
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>1,638</p>
                        <p>20</p>
                    </div>
                    <div className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                        <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                            <img className='w-[4rem]' src="https://m.media-amazon.com/images/I/41Z6Wo7cJvL._SX300_SY300_QL70_FMwebp_.jpg" alt="" />
                            <p>Dog Food</p>
                        </div>
                        <FontAwesomeIcon icon={faBowlFood}/>
                        <p>1,638</p>
                        <p>20</p>
                    </div>
                </div>
            </div>
            <hr className='mx-[2rem]'/>
            <div className='my-[1rem] mx-[2rem]'>
                <p className='text-sm text-gray-500'>Showing {selectedValue} items</p>
            </div>
        </div>
    </div>
  )
}

export default CategoryList*/}