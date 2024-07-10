
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faAdd, faAngleDown, faAngleRight, faBagShopping, faLocation, faPowerOff, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function User() {
    const [account, setAccount] = useState(true);
    const [profile, setProfile] = useState(true);
    const [address, setAddress] = useState(false);
    const [addAddress, setAddAddress] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        setUser(loggedUser);
    }, []);

    const handleProfile = () => {
        setProfile(true);
        setAddress(false);
        setFilter(false);
    };

    const handleAddress = () => {
        setProfile(false);
        setAddress(true);
        setFilter(false);
    };

    const handleNotification = () => {
        setProfile(false);
        setAddress(false);
        setFilter(false);
    };

    const handleAddAddress = () => {
        setAddAddress(true);
    };

    const handleAccount = () => {
        setAccount(!account);
    };

    const [filter, setFilter] = useState(false);
    const [drop, setDrop] = useState(false);

    const handleFilter = () => {
        setDrop(false);
        setFilter(!filter);
        setTimeout(() => setDrop(true), 100);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className='mx-[1rem] lg:mx-[3rem] lg:py-[3rem] flex flex-col lg:flex-row lg:gap-[1.5rem]'>
            <div className='lg:hidden flex mb-[2rem] mt-2 border-2 rounded-xl text-xl text-orange-500'>
                <p onClick={handleFilter} className='w-full text-center p-2'><Person2OutlinedIcon /> User</p>
            </div>

            {filter && (
                <div className={`lg:hidden flex justify-evenly lg:p-[1rem] w-[90vw] top-0 z-[10] bg-white text-orange-500 transition-transform ease-in-out duration-500 transform ${drop ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className='w-full'>
                        <div className='flex flex-col gap-[1.5rem]'>
                            <div className='border-2'>
                                <div className='flex items-center justify-between text-lg p-3 lg:border-b-black border-b-2'>
                                    <div className='flex items-center gap-[1.5rem]'>
                                        <FontAwesomeIcon icon={faBagShopping} />
                                        <p>My Orders</p>
                                    </div>
                                    <FontAwesomeIcon icon={faAngleDown} />
                                </div>
                                <div className=''>
                                    <div onClick={handleAccount} className='flex items-center justify-between text-lg p-3 lg:border-b-black border-b-2'>
                                        <div className='flex items-center gap-[1.5rem]'>
                                            <FontAwesomeIcon icon={faUserAlt} />
                                            <p>Account</p>
                                        </div>
                                        <FontAwesomeIcon icon={faAngleDown} />
                                    </div>
                                    {account && (
                                        <div className='text-lg text-gray-500 cursor-default border-b-black border-b-2'>
                                            <p onClick={handleProfile} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>Profile Information</p>
                                            <p onClick={handleAddress} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>Manage Addresses</p>
                                            <Link to={'/wish'}><p className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>My Wishlist</p></Link>
                                            <p onClick={handleNotification} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>All Notification</p>
                                        </div>
                                    )}
                                </div>
                                <div className='flex items-center gap-[1.5rem] text-lg p-3 lg:border-b-black border-b-2 cursor-pointer' onClick={handleLogout}>
                                    <FontAwesomeIcon icon={faPowerOff} />
                                    <p>Logout</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='hidden lg:block lg:w-1/5'>
                <div className='flex flex-col gap-[1.5rem]'>
                    <div className='flex items-center gap-[1.5rem] text-lg border-2 rounded-xl p-3'>
                        <FontAwesomeIcon icon={faUser} color='orange' />
                        <p>Hello, <span className='font-bold'>{user?.name || 'User'}</span></p>
                    </div>
                    <div className='border-2 rounded-xl'>
                        <Link to={'/myorders'}>
                            <div className='flex items-center justify-between text-lg p-3 border-b-black border-b-2'>
                                <div className='flex items-center gap-[1.5rem]'>
                                    <FontAwesomeIcon icon={faBagShopping} color='orange' />
                                    <p>My Orders</p>
                                </div>
                                <FontAwesomeIcon icon={faAngleRight} />
                            </div>
                        </Link>
                        <div className=''>
                            <div onClick={handleAccount} className='flex items-center justify-between text-lg p-3 border-b-black border-b-2'>
                                <div className='flex items-center gap-[1.5rem]'>
                                    <FontAwesomeIcon icon={faUserAlt} color='orange' />
                                    <p>Account</p>
                                </div>
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                            {account && (
                                <div className='text-lg text-gray-500 cursor-default border-b-black border-b-2'>
                                    <p onClick={handleProfile} className={`px-[1rem] py-2 ${profile ? 'bg-orange-100 text-orange-600' : ''} hover:bg-orange-500 hover:text-white transition-all ease-in-out`}>Profile Information</p>
                                    <p onClick={handleAddress} className={`px-[1rem] py-2 ${address ? 'bg-orange-100 text-orange-600' : ''} hover:bg-orange-500 hover:text-white transition-all ease-in-out`}>Manage Addresses</p>
                                    <Link to={'/wish'}><p className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>My Wishlist</p></Link>
                                    <p onClick={handleNotification} className='px-[1rem] py-2 hover:bg-orange-500 hover:text-white transition-all ease-in-out'>All Notification</p>
                                </div>
                            )}
                        </div>
                        <div className='flex items-center gap-[1.5rem] text-lg p-3 border-b-black border-b-2 cursor-pointer'onClick={handleLogout}>
                            <FontAwesomeIcon icon={faPowerOff} color='orange' />
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:w-4/5 mb-[2rem]'>
                {profile && (
                    <div className='w-full border-2 rounded-xl p-[1rem] lg:p-[2rem]'>
                        <h1 className='text-2xl font-semibold'>Personal Information</h1>
                        <form className='flex flex-col gap-[2rem] py-[2rem]' action="submit">
                            <div className='flex flex-col lg:flex-row gap-[2rem] items-center'>
                                <label className='flex items-center gap-[1rem]' htmlFor="f_name">First Name:
                                    <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="text" placeholder='First Name' />
                                </label>
                                <label className='flex items-center gap-[1rem]' htmlFor="l_name">Last Name
                                    <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="text" placeholder='Last Name' />
                                </label>
                            </div>
                            <label htmlFor="gender">Gender</label>
                            <div className='flex gap-[1rem]'>
                                <input required type="radio" value="Male" name="gender" /> Male
                                <input required type="radio" value="Female" name="gender" /> Female
                            </div>
                            <label className='flex items-center gap-[1rem]' htmlFor="email">Email:
                                <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="email" placeholder='Email' />
                            </label>
                            <label className='flex items-center gap-[1rem]' htmlFor="phone">Phone Number:
                                <input required className='border-2 outline-none p-1 rounded-lg w-[15rem]' type="text" placeholder='Phone Number' />
                            </label>
                            <button type="submit" className='bg-orange-500 text-white px-4 py-2 rounded-lg'>Update</button>
                        </form>
                    </div>
                )}
                {address && (
                    <div className='w-full border-2 rounded-xl p-[1rem] lg:p-[2rem]'>
                        <h1 className='text-2xl font-semibold'>Manage Addresses</h1>
                        <div className='flex flex-col gap-[2rem] py-[2rem]'>
                            <button onClick={handleAddAddress} className='bg-orange-500 text-white px-4 py-2 rounded-lg'>Add New Address</button>
                            {addAddress && (
                                <form className='flex flex-col gap-[2rem]' action="submit">
                                    <label className='flex items-center gap-[1rem]' htmlFor="address">Address:
                                        <input required className='border-2 outline-none p-1 rounded-lg w-full' type="text" placeholder='Address' />
                                    </label>
                                    <label className='flex items-center gap-[1rem]' htmlFor="city">City:
                                        <input required className='border-2 outline-none p-1 rounded-lg w-full' type="text" placeholder='City' />
                                    </label>
                                    <label className='flex items-center gap-[1rem]' htmlFor="state">State:
                                        <input required className='border-2 outline-none p-1 rounded-lg w-full' type="text" placeholder='State' />
                                    </label>
                                    <label className='flex items-center gap-[1rem]' htmlFor="zip">Zip Code:
                                        <input required className='border-2 outline-none p-1 rounded-lg w-full' type="text" placeholder='Zip Code' />
                                    </label>
                                    <button type="submit" className='bg-orange-500 text-white px-4 py-2 rounded-lg'>Save</button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default User; 


























