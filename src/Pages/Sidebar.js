import React,{useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars, faAngleDown, faBorderAll, faCartShopping,faLayerGroup,faStar, faFile, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [show,setShow] = useState(true);
    const toggleshow = () =>{
        setShow(!show);
        console.log(show);
    }
    const [showDash,setShowDash] = useState(false);
    const [showEcommerce,setShowEcommerce] = useState(false);
    const [showCat,setShowCat] = useState(false);
    const [showOrder,setShowOrder] = useState(false);
    const [showUser,setShowUser] = useState(false);

    const toggleDash = () => {
        setShowDash(!showDash);
    }
    const toggleEcommerce = () => {
        setShowEcommerce(!showEcommerce);
        setShowUser(false);
        setShowCat(false);
        setShowOrder(false);
    }
    const toggleCat = () => {
        setShowCat(!showCat);
        setShowOrder(false);
        setShowUser(false);
        setShowEcommerce(false);
    }
    const toggleOrder = () => {
        setShowOrder(!showOrder);
        setShowUser(false);
        setShowCat(false);
        setShowEcommerce(false);
    }
    const toggleUser = () => {
        setShowUser(!showUser);
        setShowOrder(false);
        setShowCat(false);
        setShowEcommerce(false);
    }
  return (
    <>
    {show ? (
        <div className='w-[20rem] h-screen absolute top-0 left-0 bg-white border-r-2'>
                <div className='flex justify-evenly items-center pt-[1rem]'>
                    <Link className='flex' to={'/NavAfterLog'}>
                        <img className='w-[3rem]' src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Clube_do_Remo.svg/512px-Clube_do_Remo.svg.png" alt="logo" />
                        <p className='text-4xl mr-[6rem] '>Remos</p>
                    </Link>
                    <FontAwesomeIcon className='hover:text-blue-500 cursor-pointer animate-pulse' onClick={toggleshow} icon={faBars} size='xl'/>
                </div>
            {/* <p className='mt-[3rem] mb-[1.5rem] pl-[1rem] text-gray-500 font-bold'>Main Home</p>
            <div onClick={toggleDash} className='hover:text-blue-500 hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl  cursor-pointer flex items-center justify-between pr-[1rem]'>
                <div className='flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faBorderAll} size='xl'/>
                    <p className=' font-semibold'>Dashboard</p>
                </div>
                <FontAwesomeIcon className='cursor-pointer' icon={faAngleDown} />
            </div> 
            {showDash ? (
                <div className='ml-[2rem] my-[1rem]'>
                    <ul className='font-semibold'>
                        <li className='hover:text-blue-500 mb-[0.7rem]'>• Home1</li>
                        <li className='hover:text-blue-500 mb-[0.7rem]'>• Home2</li>
                        <li className='hover:text-blue-500 mb-[0.7rem]'>• Home3</li>
                    </ul>
                </div>
            ):''}*/}
            <p className='mt-[3rem] mb-[1.5rem] pl-[1rem] text-gray-500 font-bold'>All Pages</p>
            <div onClick={toggleEcommerce} className='hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl hover:text-blue-500 cursor-pointer flex items-center justify-between pr-[1rem] mb-[1.5rem]'>
                <div className='flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faCartShopping} size='lg'/>
                    <p className='font-semibold'>E-Commerce</p>
                </div>
                <FontAwesomeIcon onClick={toggleEcommerce} className='cursor-pointer' icon={faAngleDown} />
            </div>
            {showEcommerce ? (
                <div className='ml-[2rem] my-[1rem]'>
                    <ul className='font-semibold'>
                        <Link onClick={toggleshow} to={'/addproduct'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Add Product</li></Link>
                        <Link onClick={toggleshow} to={'/productlist'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Product List</li></Link>
                        <Link onClick={toggleshow} to={'/addnewarrival'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Add New Arrival(Home)</li></Link>
                        <Link onClick={toggleshow} to={'/addnewarrivalbanner'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Add New Arrival Banner</li></Link>
                        <Link onClick={toggleshow} to={'/addoneproduct'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Add One Product</li></Link>
                    </ul>
                </div>
            ):''}
            <div onClick={toggleCat} className='hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl hover:text-blue-500 cursor-pointer flex items-center justify-between pr-[1rem] mb-[1.5rem]'>
                <div className='flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faLayerGroup} size='lg'/>
                    <p className='font-semibold'>Category</p>
                </div>
                <FontAwesomeIcon onClick={toggleCat} className='cursor-pointer' icon={faAngleDown} />
            </div>
            {showCat ? (
                <div className='ml-[2rem] my-[1rem]'>
                    <ul className='font-semibold'>
                        <Link onClick={toggleshow} to={'/categorylist'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Category List</li></Link>
                        <Link onClick={toggleshow} to={'/newcategory'}><li className='hover:text-blue-500 mb-[0.7rem]'>• New Category</li></Link>
                        <Link onClick={toggleshow} to={'/collection'}><li className='hover:text-blue-500 mb-[0.7rem]'>• New Collection</li></Link>
                        <Link onClick={toggleshow} to={'/collectionlist'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Collection List</li></Link>
                        <Link onClick={toggleshow} to={'/addbanner'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Add Banner</li></Link>
                    </ul>
                </div>
            ):''}
            <div className='hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl hover:text-blue-500 cursor-pointer flex items-center justify-between pr-[1rem] mb-[1.5rem]'>
                <div className='cursor-pointer flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faStar} size='lg'/>
                    <Link onClick={toggleshow} to={'/review'}><p className='font-semibold'>Review and Ratings</p></Link>
                </div>
            </div>
            <div onClick={toggleOrder} className='hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl hover:text-blue-500 cursor-pointer flex items-center justify-between pr-[1rem] mb-[1.5rem]'>
                <div className='flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faFile} size='lg'/>
                    <p className='font-semibold'>Orders</p>
                </div>
                <FontAwesomeIcon onClick={toggleOrder} className='cursor-pointer' icon={faAngleDown} />
            </div>
            {showOrder ? (
                <div className='ml-[2rem] my-[1rem]'>
                    <ul className='font-semibold'>
                        <Link onClick={toggleshow} to={'/orderlist'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Order List</li></Link>
                        <Link onClick={toggleshow} to={'/orderdetails'}><li className='hover:text-blue-500 mb-[0.7rem]'>• Order Detail</li></Link>
                    </ul>
                </div>
            ):''}
            <div onClick={toggleUser} className='hover:bg-blue-200 mx-[1rem] py-[0.5rem] rounded-xl hover:text-blue-500 cursor-pointer flex items-center justify-between pr-[1rem] mb-[1.5rem]'>
                <div className='w-[20rem] flex items-center gap-2 pl-[1rem]'>
                    <FontAwesomeIcon icon={faUser} size='lg'/>
                    <p className='font-semibold'>Users</p>
                </div>
                <FontAwesomeIcon onClick={toggleUser} className='cursor-pointer'  icon={faAngleDown} />
            </div>
            {showUser ? (
                <div className='ml-[2rem] mt-[1rem]'>
                    <ul className='font-semibold'>
                        <Link onClick={toggleshow} to={'/userlist'}><li className='mb-[0.7rem] hover:text-blue-500'>• Users List</li></Link>
                        <Link onClick={toggleshow} to={'/adduser'}><li className='mb-[0.7rem] hover:text-blue-500'>• Add User</li></Link>
                    </ul>
                </div>
            ):''}
        </div>
    ):''}

    </>
  )
}

export default Sidebar