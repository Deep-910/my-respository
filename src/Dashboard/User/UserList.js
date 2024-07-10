import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Allusers.php')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data); // Update state with fetched user data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setUsers([]); // Set empty array or handle error state as per your requirement
            });
    }, []);

    return (
        <div className='bg-[#F2F6F9] py-[2rem]'>
            <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
                <p className='text-xl lg:text-3xl font-bold'>All Users</p>
                <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight} /> Users <FontAwesomeIcon icon={faArrowRight} /> <span className='font-light text-gray-500'>User List</span></p>
            </div>
            <div className='bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
                <div className='px-[2rem] py-[1rem] flex flex-col lg:flex-row gap-[2rem] justify-between lg:items-center'>
                    <div className='border-2 flex items-center p-2 rounded-lg'>
                        <input className='w-[25rem] focus:outline-none' type="text" placeholder='Search here...' />
                        <FontAwesomeIcon icon={faSearch} color='#3B81F6' />
                    </div>
                    <button className='text-[#3B81F6] hover:text-white hover:bg-[#3B81F6] border-2 border-[#3B81F6] py-2 px-[2rem] rounded-xl'>
                        <FontAwesomeIcon className='pr-[1rem]' icon={faAdd} />
                        Add User
                    </button>
                </div>
                {/* Users List */}
                <div className='overflow-scroll lg:mx-[3rem]'>
                    <div className='w-[75rem]'>
                        {/* Headers */}
                        <div className='bg-[#F2F6F9] mx-[2rem] lg:mx-[3rem] rounded-xl'>
                            <div className='flex justify-evenly gap-[20rem] items-center p-[1rem]'>
                                <p className='font-bold'>User</p>
                                <p className='font-bold'>Phone</p>
                                <p className='font-bold'>Email</p>
                            </div>
                        </div>
                        {/* User data */}
                        {users.map(user => (
                            <div key={user.Id} className='py-[0.5rem] flex items-center justify-evenly gap-[16rem] mx-[2rem] lg:mx-[3rem]'>
                                <div className='flex items-center gap-[1rem]'>
                                    {/* Assuming images are fetched from backend */}
                                    {/* <img className='w-[3rem] rounded-xl' src={`http://localhost/dashboard_draft/frontend/src/database/images/${user.image}`} alt="user-img" /> */}
                                    <div>
                                        <p className='font-bold text-sm'>{user.name}</p>
                                    </div>
                                </div>
                                <p className='text-sm'>{user.number}</p>
                                <p className='text-sm'>{user.email}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='mx-[2rem]' />
                <div className='mx-[5rem] mt-[1rem]'>
                    <p className='font-thin text-sm'>Showing {users.length} entries</p>
                </div>
            </div>
        </div>
    );
}

export default UserList;

