import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function Navbar({ countcart, countwish }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Searchbar.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

        // Check if user is authenticated using session management
        fetch('http://localhost/waltzify_copy/frontend/src/Database/check_session.php', {
            method: 'GET',
            credentials: 'include', // Include credentials for session cookies
        })
        .then(response => response.json())
        .then(data => {
            if (data.isAuthenticated) {
                setIsAuthenticated(true);
            }
        })
        .catch(error => {
            console.error('Error checking authentication:', error);
        });
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
        }
    };

   /*  const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.pname);
        setSelectedProduct(suggestion);
        setShowSuggestions(false);
    }; */
    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.pname);
        setShowSuggestions(false);
        navigate(`/product/${suggestion.Id}`);
        setSearchTerm('')
    };

    const handleSearchClick = () => {
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.Id}`);
            setSearchTerm('')
        }
    };

    const [seen, setSeen] = useState(false);
    const [seenAccount , setSeenAccount] = useState(false);

    const handleSeen = () => {
        setSeen(!seen);
    };
    const handleSeenAccount = () =>{
        setSeenAccount(!seenAccount);

    };

 /*    const handleAccountMouseEnter = () => {
        setShowAccountDropdown(true);
        
    };

    const handleAccountMouseLeave = () => {
        setShowAccountDropdown(false);
    }; */

    const handleLogout = () => {
        // Perform logout by clearing the session on the server
        fetch('http://localhost/waltzify_copy/frontend/src/Database/logout.php', {
            method: 'POST',
            credentials: 'include', // Include credentials for session cookies
        })
        .then(response => {
            if (response.ok) {
                setIsAuthenticated(false);
                navigate('/login'); // Redirect to login page after logout
            } else {
                console.error('Logout failed');
            }
        })
        .catch(error => {
            console.error('Error during logout:', error);
        });
    };

    return (
        <div className='bg-[#F3F4F6] sticky top-0 z-[1000]'>
            {/* Navbar */}
            <div className='flex justify-between items-center mx-[1rem] lg:mx-[5rem] border-b-2 h-[6rem]'>
                {/* logo */}
                <Link to={'/'}><img className='lg:w-[9rem] w-[7rem] h-[5.5rem] lg:h-[7.5rem]' src={require('../../asset/logo.png')} alt="logo" /></Link>
                {/* searchbar */}
                <div className='gap-[1rem] flex flex-col-reverse lg:flex-row lg:w-[65rem] justify-evenly items-center'>
                    <div className='relative flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] lg:pr-[1rem] py-1 w-[15rem] lg:w-[35rem]'>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Search..'
                            className='rounded-2xl lg:text-xl px-[1rem] outline-none w-[13rem] lg:w-[30rem]'
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white' onClick={handleSearchClick} className='cursor-pointer' />
                        {showSuggestions && (
                            <ul className="z-[999] top-[3.2rem] absolute mt-2 py-2 bg-white rounded-lg shadow-md border border-gray-200 w-[16rem] lg:w-[42rem] max-h-[15rem] overflow-y-auto">
                                {filteredProducts.map((product) => (
                                    <li key={product.Id} className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(product)}>
                                        <img className='w-[3rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="product-img" />
                                        <span>{product.pname}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex gap-[1rem] lg:text-xl'>
                        <Link to={'/cart'}>
                            <div className='relative flex items-center gap-2'>
                                <ShoppingCartOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Cart</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countcart}</p>
                            </div>
                        </Link>
                        <Link to={'/wish'}>
                            <div className='relative flex items-center gap-2'>
                                <FavoriteBorderOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Wishlist</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countwish}</p>
                            </div>
                        </Link>
                        <div className='relative'>
                            <div className='flex items-center gap-2'>
                                <Person2OutlinedIcon />
                                <p onMouseOver={handleSeenAccount} className='cursor-pointer text-sm lg:text-lg'>Account</p>
                                <FontAwesomeIcon icon={faCaretDown} size='lg' />
                            </div>
                            {seenAccount && (
                                <div onMouseLeave={handleSeenAccount} className= 'absolute bg-white shadow-lg rounded-md mt-2 p-2 z-10'>
                                    <ul>
                                        <li className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'><Link to="/user">My Profile</Link></li>
                                        <li className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'><Link to="/myorders">Orders</Link></li>
                                        <li className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'><Link to="/wish">Wishlist</Link></li>
                                        <li className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer' ><Link to="/cart">My Cart</Link></li>
                                        {isAuthenticated ? (
                                            <li onClick={handleLogout} className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Logout</li>
                                        ) : (
                                            <li className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'><Link to="/login">Login/signup</Link></li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {isAuthenticated ? null : (
                            <Link to={'/AdminLogin'}>
                                <div className='flex items-center gap-2'>
                                    <Person2OutlinedIcon style={{ fontSize: 28 }} />
                                    <p className='text-sm lg:text-lg'>Admin</p>
                                    <FontAwesomeIcon icon={faCaretDown} size='lg' />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

           {/* Category */}
           <div className='flex justify-evenly lg:mx-[5rem] py-[1rem] lg:pr-[5rem]'>
                <Link to={'/'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>Home</p></Link>
                <Link to={'/newarrival'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>New Arrival</p></Link>
                <div className='relative flex gap-2 items-center'>
                    <Link to={'/allproduct'}><p onMouseOver={handleSeen} className='font-bold cursor-pointer text-xs lg:text-sm'>All Products</p></Link>
                    <FontAwesomeIcon icon={faCaretDown} size='xs' />
                    {seen && (
                        <div onMouseLeave={handleSeen} className='text-lg absolute left-[-2rem] top-10 flex flex-col gap-2 w-[16rem] bg-white border-2 p-3'>
                            <Link to={'/Safety Products'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p></Link>
                            <Link to={'/Search & Rescue'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Search & Rescue</p></Link>
                            <Link to={'/Civil Lab Equipments'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p></Link>
                            <Link to={'/Civil Lab Equipments'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p></Link>
                            <Link to={'/Safety Shoes'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p></Link>
                        </div>
                    )}
                </div>
                <Link to={'/hotdeals'}><p className='font-bold cursor-pointer text-xs lg:text-sm'>Hot deals</p></Link>
            </div>
        
        </div>
    );
}

export default Navbar;





{/* import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function Navbar({ countcart, countwish }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Searchbar.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

        // Check if user is authenticated (example check, replace with your logic)
        const userToken = localStorage.getItem('user');
        if (userToken) {
            setIsAuthenticated(true);
        }
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
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.pname);
        setSelectedProduct(suggestion);
        setShowSuggestions(false);
    };

    const handleSearchClick = () => {
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.Id}`);
        }
    };

    const [seen, setSeen] = useState(false);

    const handleSeen = () => {
        setSeen(!seen);
    };

    const handleAccountMouseEnter = () => {
        setShowAccountDropdown(true);
    };

    const handleAccountMouseLeave = () => {
        setShowAccountDropdown(false);
    };

    const handleLogout = () => {
        // Clear user data from local storage (or session storage)
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className='bg-[#F3F4F6] sticky top-0 z-[1000]'>
            {/* Navbar *
            <div className='flex justify-between items-center mx-[1rem] lg:mx-[5rem] border-b-2 h-[6rem]'>
                {/* logo *
                <Link to={'/'}><img className='lg:w-[9rem] w-[7rem] h-[5.5rem] lg:h-[7.5rem]' src={require('../../asset/logo.png')} alt="logo" /></Link>
                {/* searchbar *
                <div className='gap-[1rem] flex flex-col-reverse lg:flex-row lg:w-[65rem] justify-evenly items-center'>
                    <div className='relative flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] lg:pr-[1rem] py-1 w-[15rem] lg:w-[35rem]'>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Search..'
                            className='rounded-2xl lg:text-xl px-[1rem] outline-none w-[13rem] lg:w-[30rem]'
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white' onClick={handleSearchClick} className='cursor-pointer' />
                        {showSuggestions && (
                            <ul className="z-[999] top-[3.2rem] absolute mt-2 py-2 bg-white rounded-lg shadow-md border border-gray-200 w-[16rem] lg:w-[42rem] max-h-[15rem] overflow-y-auto">
                                {filteredProducts.map((product) => (
                                    <li key={product.Id} className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(product)}>
                                        <img className='w-[3rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="product-img" />
                                        <span>{product.pname}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex gap-[1rem] lg:text-xl'>
                        <Link to={'/cart'}>
                            <div className='relative flex items-center gap-2'>
                                <ShoppingCartOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Cart</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countcart}</p>
                            </div>
                        </Link>
                        <Link to={'/wish'}>
                            <div className='relative flex items-center gap-2'>
                                <FavoriteBorderOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Wishlist</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countwish}</p>
                            </div>
                        </Link>
                        <div className='relative' onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                            <div className='flex items-center gap-2'>
                                <Person2OutlinedIcon style={{ fontSize: 28 }} />
                                <p className='text-sm lg:text-lg'>Account</p>
                                <FontAwesomeIcon icon={faCaretDown} size='lg' />
                            </div>
                            {showAccountDropdown && (
                                <div className='absolute bg-white shadow-lg rounded-md mt-2 p-2 z-10'>
                                    <ul>
                                        <li><Link to="/user">My Profile</Link></li>
                                        <li><Link to="/myorders">Orders</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/cart">My Cart</Link></li>
                                        {isAuthenticated ? (
                                            <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
                                        ) : (
                                            <li><Link to="/login">Login/signup</Link></li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        {isAuthenticated ? null : (
                            <Link to={'/AdminLogin'}>
                                <div className='flex items-center gap-2'>
                                    <Person2OutlinedIcon style={{ fontSize: 28 }} />
                                    <p className='text-sm lg:text-lg'>Admin</p>
                                    <FontAwesomeIcon icon={faCaretDown} size='lg' />
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Category *
            <div className='flex justify-evenly lg:mx-[5rem] py-[1rem] lg:pr-[5rem]'>
                <Link to={'/'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>Home</p></Link>
                <Link to={'/newarrival'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>New Arrival</p></Link>
                <div className='relative flex gap-2 items-center'>
                    <Link to={'/allproduct'}><p onMouseOver={handleSeen} className='font-bold cursor-pointer text-xs lg:text-sm'>All Products</p></Link>
                    <FontAwesomeIcon icon={faCaretDown} size='xs' />
                    {seen && (
                        <div onMouseLeave={handleSeen} className='text-lg absolute left-[-2rem] top-10 flex flex-col gap-2 w-[16rem] bg-white border-2 p-3'>
                            <Link to={'/Safety Products'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p></Link>
                            <Link to={'/Search & Rescue'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Search & Rescue</p></Link>
                            <Link to={'/Silica Gel'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p></Link>
                            <Link to={'/Civil Lab Equipments'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p></Link>
                            <Link to={'/Sneaker'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p></Link>
                        </div>
                    )}
                </div>
                <Link to={'/hotdeals'}><p className='font-bold cursor-pointer text-xs lg:text-sm'>Hot deals</p></Link>
            </div>
        </div>
    );
}

export default Navbar; */}

















{/* import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';

function Navbar({ countcart, countwish }) {
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showAccountDropdown, setShowAccountDropdown] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Searchbar.php');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();

        // Check if user is authenticated (example check, replace with your logic)
        const userToken = localStorage.getItem('user');
        if (userToken) {
            setIsAuthenticated(true);
        }
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
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(suggestion.pname);
        setSelectedProduct(suggestion);
        setShowSuggestions(false);
    };

    const handleSearchClick = () => {
        if (selectedProduct) {
            navigate(`/product/${selectedProduct.Id}`);
        }
    };

    const [seen, setSeen] = useState(false);

    const handleSeen = () => {
        setSeen(!seen);
    };

    const handleAccountMouseEnter = () => {
        setShowAccountDropdown(true);
    };

    const handleAccountMouseLeave = () => {
        setShowAccountDropdown(false);
    };

    const handleLogout = () => {
        // Clear user data from local storage (or session storage)
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        navigate('/login'); // Redirect to login page after logout
    };

    return (
        <div className='bg-[#F3F4F6] sticky top-0 z-[1000]'>
            {/* Navbar *
            <div className='flex justify-between items-center mx-[1rem] lg:mx-[5rem] border-b-2 h-[6rem]'>
                {/* logo *
                <Link to={'/'}><img className='lg:w-[9rem] w-[7rem] h-[5.5rem] lg:h-[7.5rem]' src={require('../../asset/logo.png')} alt="logo" /></Link>
                {/* searchbar *
                <div className='gap-[1rem] flex flex-col-reverse lg:flex-row lg:w-[65rem] justify-evenly items-center'>
                    <div className='relative flex justify-between items-center bg-orange-500 rounded-2xl pl-[1px] lg:pr-[1rem] py-1 w-[15rem] lg:w-[35rem]'>
                        <input
                            value={searchTerm}
                            onChange={handleInputChange}
                            type="text"
                            placeholder='Search..'
                            className='rounded-2xl lg:text-xl px-[1rem] outline-none w-[13rem] lg:w-[30rem]'
                        />
                        <FontAwesomeIcon icon={faMagnifyingGlass} size='xl' color='white' onClick={handleSearchClick} className='cursor-pointer' />
                        {showSuggestions && (
                            <ul className="z-[999] top-[3.2rem] absolute mt-2 py-2 bg-white rounded-lg shadow-md border border-gray-200 w-[16rem] lg:w-[42rem] max-h-[15rem] overflow-y-auto">
                                {filteredProducts.map((product) => (
                                    <li key={product.Id} className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(product)}>
                                        <img className='w-[3rem]' src={`http://localhost/waltzify_copy/frontend/src/Database/Products/${product.img1}`} alt="product-img" />
                                        <span>{product.pname}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className='flex gap-[1rem] lg:text-xl'>
                        <Link to={'/cart'}>
                            <div className='relative flex items-center gap-2'>
                                <ShoppingCartOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Cart</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countcart}</p>
                            </div>
                        </Link>
                        <Link to={'/wish'}>
                            <div className='relative flex items-center gap-2'>
                                <FavoriteBorderOutlinedIcon />
                                <p className='text-sm lg:text-lg'>Wishlist</p>
                                <p className='absolute top-[-7px] left-4 text-white bg-red-500 p-1 text-xs rounded-[50%]'>{countwish}</p>
                            </div>
                        </Link>
                        <div className='relative' onMouseEnter={handleAccountMouseEnter} onMouseLeave={handleAccountMouseLeave}>
                            <div className='flex items-center gap-2'>
                                <Person2OutlinedIcon style={{ fontSize: 28 }} />
                                <p className='text-sm lg:text-lg'>Account</p>
                                <FontAwesomeIcon icon={faCaretDown} size='lg' />
                            </div>
                            {showAccountDropdown && (
                                <div className='absolute bg-white shadow-lg rounded-md mt-2 p-2 z-10'>
                                    <ul>
                                        <li><Link to="/user">My Profile</Link></li>
                                        <li><Link to="/orders">Orders</Link></li>
                                        <li><Link to="/wishlist">Wishlist</Link></li>
                                        <li><Link to="/cart">My Cart</Link></li>
                                        {isAuthenticated ? (
                                            <li onClick={handleLogout} className='cursor-pointer'>Logout</li>
                                        ) : (
                                            <li><Link to="/login">Login/signup</Link></li>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <Link to={'/AdminLogin'}>
                            <div className='flex items-center gap-2'>
                                <Person2OutlinedIcon style={{ fontSize: 28 }} />
                                <p className='text-sm lg:text-lg'>Admin</p>
                                <FontAwesomeIcon icon={faCaretDown} size='lg' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Category *
            <div className='flex justify-evenly lg:mx-[5rem] py-[1rem] lg:pr-[5rem]'>
                <Link to={'/'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>Home</p></Link>
                <Link to={'/newarrival'}><p className='text-xs lg:text-sm font-bold cursor-pointer'>New Arrival</p></Link>
                <div className='relative flex gap-2 items-center'>
                    <Link to={'/allproduct'}><p onMouseOver={handleSeen} className='font-bold cursor-pointer text-xs lg:text-sm'>All Products</p></Link>
                    <FontAwesomeIcon icon={faCaretDown} size='xs' />
                    {seen && (
                        <div onMouseLeave={handleSeen} className='text-lg absolute left-[-2rem] top-10 flex flex-col gap-2 w-[16rem] bg-white border-2 p-3'>
                            <Link to={'/Safety Products'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Products</p></Link>
                            <Link to={'/Search & Rescue'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Search & Rescue</p></Link>
                            <Link to={'/Silica Gel'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Concrete Accessories</p></Link>
                            <Link to={'/Civil Lab Equipments'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Civil Lab Equips</p></Link>
                            <Link to={'/Sneaker'}><p className='transition-all ease-in-out hover:text-white hover:bg-orange-500 p-2 cursor-pointer'>Safety Shoes</p></Link>
                        </div>
                    )}

                </div>
                <Link to={'/hotdeals'}><p className='font-bold cursor-pointer text-xs lg:text-sm'>Hot deals</p></Link>
            </div>
        </div>
    );
}

export default Navbar; */}






















