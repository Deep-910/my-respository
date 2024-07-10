import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CollectionList() {
    const [selectedValue, setSelectedValue] = useState('');
    const [collectionData, setCollectionData] = useState([]);
    const [showConfirm, setShowConfirm] = useState(false);
    const [collectionToDelete, setCollectionToDelete] = useState(null);

    useEffect(() => {
        fetchCollectionData();
    }, []);

    const fetchCollectionData = async () => {
        try {
            const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Collection.php');
            const data = await response.json();
            setCollectionData(data);
        } catch (error) {
            console.error('Error fetching collection data:', error);
        }
    };

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const confirmDelete = (Id) => {
        setCollectionToDelete(Id);
        setShowConfirm(true);
    };

    const handleDelete = () => {
        fetch(`http://localhost/waltzify_copy/frontend/src/Database/Delete/Delete_Collection.php?Id=${collectionToDelete}`, {
            method: 'DELETE'
        })
        .then((response) => response.json())
        .then(() => {
            setCollectionData(prevCollectionData => prevCollectionData.filter(collection => collection.Id !== collectionToDelete));
            setShowConfirm(false);
            setCollectionToDelete(null);
        })
        .catch(error => console.log(error)); // Handle any errors
    };

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
                <p className='text-xl lg:text-3xl font-bold'>Collection List</p>
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
                    <Link to='/collection'>
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
                                <p className='font-bold'>Collection_Id</p>                                
                                <p className='font-bold mr-[13rem]'>Collection</p>
                                <p className='font-bold'>Operation Update</p>
                                <p className='font-bold'>Operation Delete</p>
                            </div>
                        </div>
                        {collectionData.map(collection => (
                            <div key={collection.Id} className='flex items-center justify-between mx-[4rem] pr-[15rem]'>
                                <div className='flex items-center gap-[1rem] mr-[7.5rem]'>
                                    <p>{collection.Id}</p>
                                    <img className='w-[4rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${collection.images1}`} alt="category-img" />
                                    <p>{collection.collectionName}</p>
                                </div>
                                <p>Update</p>
                                <p className = 'cursor-pointer' onClick={() => confirmDelete(collection.Id)}>Delete</p>
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
                        <p>Are you sure you want to delete this collection?</p>
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

export default CollectionList;
