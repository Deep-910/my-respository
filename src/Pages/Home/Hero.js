import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
//import './Hero.css'; // CSS styling file

function Hero() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Category.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_home_products.php')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_banner.php')
      .then(response => response.json())
      .then(data => setBanners(data))
      .catch(error => console.error('Error fetching banners:', error));
  }, []);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(4);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(3);
    } else {
      setVisibleCount(2);
    }
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - visibleCount ? prevIndex : prevIndex + 1));
  };

  return (
    <div className="relative h-[23rem] lg:h-[59rem] overflow-hidden">
      {/* Dynamic Banners */}
      <div className="">
        {banners.length > 0 ? (
          banners.map((banner, index) => (
            <div key={index} className="relative w-full h-[16rem] lg:h-[40rem]">
              <img className="w-full h-full" src={`http://localhost/waltzify_copy/frontend/src/Database/Banner/${banner.image}`} alt={banner.text} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                <a href={banner.link_url} className="bg-black bg-opacity-50 p-4 rounded">
                  <h2 className="text-xl lg:text-3xl font-bold text-white-700">{banner.text}</h2>
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="relative w-full h-[16rem] lg:h-[40rem]">
            <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="default banner" />
          </div>
        )}
      </div>
      
      {/* Category */}
      <button onClick={prevImage} className="z-[100] lg:text-3xl absolute top-[16rem] -left-4 lg:left-0 lg:top-[29rem] ml-4 p-2 rounded-full bg-white">
        <FaChevronLeft />
      </button>
      <div className="absolute top-[12rem] lg:top-[28rem] px-[1rem] flex justify-evenly items-center gap-[2rem] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
        {products.map((product, index) => (
          <div key={index} className="hover:scale-[1.02] transition-all ease-in-out duration-[500ms] rounded-xl group relative w-[7rem] lg:w-[20rem] overflow-hidden bg-white">
            <Link to={`/allproduct`} >
              <div>
                <img className="group-hover:scale-105 shadow-2xl transition-all ease-in-out duration-[500ms] w-full lg:h-[30rem] h-[10rem]" src={`http://localhost/waltzify_copy/frontend/src/Database/Category/${product.image}`} alt="" />
                <p className="transition-all ease-in-out absolute top-[14rem] w-[20rem] left-[-5rem] text-7xl text-white font-bold -rotate-90">{product.cname}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button onClick={nextImage} className="z-[100] lg:text-3xl absolute top-[16rem] lg:top-[29rem] -right-4 lg:right-0 mr-4 p-2 rounded-full bg-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;














{/*import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Collection.php')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_home_products.php')
      .then(response => response.json())
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(4);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(4);
    } else {
      setVisibleCount(4);
    }
  };

  const coordinates = [
    { left: "167px", top: "32px", right: "486px", bottom: "253px", href: "/cap" },
    { left: "489px", top: "22px", right: "708px", bottom: "259px", href: "/gloves" },
    { left: "8px", top: "151px", right: "218px", bottom: "355px", href: "/cap" },
    { left: "147px", top: "404px", right: "324px", bottom: "116px", href: "/cap" },
  ];

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === products.length - visibleCount ? prevIndex : prevIndex + 1));
  };

  return (
    <div className="relative h-[23rem] lg:h-[59rem] overflow-hidden">
      {/* banner *
      <div className="relative w-full h-[16rem] lg:h-[40rem]">
        <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="banner" />
        {coordinates.map((coordinate, index) => (
          <a
            key={index}
            href={coordinate.href}
            style={{
              position: 'absolute',
              left: coordinate.left,
              top: coordinate.top,
              right: coordinate.right,
              bottom: coordinate.bottom,
            }}
          />
        ))}
      </div>
      {/* category *
      <button onClick={prevImage} className="z-[100] lg:text-3xl absolute top-[16rem] -left-4 lg:left-0 lg:top-[29rem] ml-4 p-2 rounded-full bg-white">
        <FaChevronLeft />
      </button>
      <div className="absolute top-[12rem] lg:top-[28rem] px-[1rem] flex justify-evenly items-center gap-[2rem] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}>
        {products.map((product, index) => (
          <div key={index} className="hover:scale-[1.02] transition-all ease-in-out duration-[500ms] rounded-xl group relative w-[7rem] lg:w-[20rem] overflow-hidden bg-white">
           
              <Link to={`/allproduct`}>
                <div>
                  <img className="group-hover:scale-105 shadow-2xl transition-all ease-in-out duration-[500ms] w-full lg:h-[30rem] h-[10rem]" src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${product.images}`} alt="" />
                  <p className="transition-all ease-in-out absolute top-[14rem] w-[20rem] left-[-5rem] text-7xl text-white font-bold -rotate-90">{product.collectionName}</p>
                </div>
              </Link>
           
          </div>
        ))}
      </div>
      <button onClick={nextImage} className="z-[100] lg:text-3xl absolute top-[16rem] lg:top-[29rem] -right-4 lg:right-0 mr-4 p-2 rounded-full bg-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;*/}












{/*import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Hero() {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
 
  useEffect(() => {
      fetch('http://localhost/waltzify_copy/frontend/src/Database/Fetch_Collection.php')
          .then(response => response.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  useEffect(() => {
    fetch('http://localhost/waltzify_copy/frontend/src/Database/fetch_home_products.php')
        .then(response => response.json())
        .then(data => setCategories(data))
        .catch(error => console.error('Error fetching data:', error));
}, []);
 
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(4);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(4);
    } else {
      setVisibleCount(4);
    }
  };
  
  const coordinates = [
    { left: "167px", top: "32px", right: "486px", bottom: "253px", href: "/cap" },
    { left: "489px", top: "22px", right: "708px", bottom: "259px", href: "/gloves" },
    { left: "8px", top: "151px", right: "218px", bottom: "355px", href: "/cap" },
    { left: "147px", top: "404px",right: "324px", bottom: "116px", href: "/cap" },
  ];

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextImage = () => {
    
    setCurrentIndex((prevIndex) => (prevIndex === products.length - visibleCount ? prevIndex : prevIndex + 1));
  
  };

  return (
    <div className="relative h-[23rem] lg:h-[59rem] overflow-hidden">
      {/* banner *
      <div className="relative w-full h-[16rem] lg:h-[40rem]">
        <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="banner" />
        {coordinates.map((coordinate, index) => (
          <a
            key={index}
            href={coordinate.href}
            style={{
              position: 'absolute',
              left: coordinate.left,
              top: coordinate.top,
              right: coordinate.right,
              bottom : coordinate.bottom,
            }}
          />
        ))}
      </div>
      {/* category *
      
      <button onClick={prevImage} className="z-[100] lg:text-3xl absolute top-[16rem] -left-4 lg:left-0 lg:top-[29rem] ml-4 p-2 rounded-full bg-white">
        <FaChevronLeft />
      </button>
      <div className="absolute top-[12rem] lg:top-[28rem] px-[1rem] flex justify-evenly items-center gap-[2rem] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (50 / visibleCount)}%)` }}>
        {products.map((product, index) => (
          <div key={index} className="hover:scale-[1.02] transition-all ease-in-out duration-[500ms] rounded-xl group relative w-[7rem] lg:w-[20rem] overflow-hidden bg-white">
           {categories.map((category,index) => (
            <Link to = {category.category}
            <div key = {index}>
            <img className="group-hover:scale-105 shadow-2xl transition-all ease-in-out duration-[500ms] w-full lg:h-[30rem] h-[10rem]" src={`http://localhost/waltzify_copy/frontend/src/Database/Collection/${product.images}`} alt="" />
            <p className=" transition-all ease-in-out absolute top-[14rem] w-[20rem] left-[-5rem] text-7xl text-white font-bold -rotate-90">{product.collectionName}</p>
            </div>
           </Link>
           ))}
            </div>
        ))}
      </div>
      <button onClick={nextImage} className="z-[100] lg:text-3xl absolute top-[16rem] lg:top-[29rem] -right-4 lg:right-0 mr-4 p-2 rounded-full bg-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;*/}













{/*import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Hero() {
  const images = [
    { url: 'https://i.pinimg.com/474x/df/72/dd/df72dde7846eda025a9c5c41de7fe64c.jpg', title: 'Safety Products' },
    { url: 'https://i.pinimg.com/564x/d9/b3/b1/d9b3b1de8f2d79361019e025bf9029fa.jpg', title: 'Search& Rescue' },
    { url: 'https://i.pinimg.com/564x/05/a2/01/05a201fe10cdcde1c6d306c8ad872ec3.jpg', title: 'Fencing Product' },
    { url: 'https://i.pinimg.com/564x/8c/a0/9b/8ca09b889535e43892da4a88a95a6753.jpg', title: 'Civil Lab Equipments' },
    { url: 'https://i.pinimg.com/474x/df/72/dd/df72dde7846eda025a9c5c41de7fe64c.jpg', title: 'Safety Products' },
    { url: 'https://i.pinimg.com/564x/d9/b3/b1/d9b3b1de8f2d79361019e025bf9029fa.jpg', title: 'Search& Rescue' },
    { url: 'https://i.pinimg.com/564x/05/a2/01/05a201fe10cdcde1c6d306c8ad872ec3.jpg', title: 'Fencing Product' },
    { url: 'https://i.pinimg.com/564x/8c/a0/9b/8ca09b889535e43892da4a88a95a6753.jpg', title: 'Civil Lab Equipments' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  const updateVisibleCount = () => {
    if (window.innerWidth >= 1024) {
      setVisibleCount(4);
    } else if (window.innerWidth >= 768) {
      setVisibleCount(4);
    } else {
      setVisibleCount(4);
    }
  };
  const coordinates = [
    { left: "197px", top: "31px", right: "478px", bottom: "238px", href: "/cap" },
    { left: "477px", top: "3px", right: "779px", bottom: "258px", href: "/cap" },
    { left: "15px", top: "165px", right: "221px", bottom: "350px", href: "/cap" },
    { left: "147px", top: "404px", right: "471px", bottom: "520px", href: "/cap" },
    
  ];

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - visibleCount ? prevIndex : prevIndex + 1));
  };

  return (
    <div className="relative h-[23rem] lg:h-[59rem] overflow-hidden">
      {/* banner *
      <div className="w-full h-[16rem] lg:h-[40rem]">
        <img className="w-full h-full" src={require('../../asset/banner.jpeg')} alt="banner" />
        {coordinates.map((coordinate, index) => (
            <a
              key={index}
              href={coordinate.href}
            ></a>
          ))}
      </div>
      {/* category *
      <button onClick={prevImage} className="z-[100] lg:text-3xl absolute top-[16rem] -left-4 lg:left-0 lg:top-[29rem] ml-4 p-2 rounded-full bg-white">
        <FaChevronLeft />
      </button>
      <div className="absolute top-[12rem] lg:top-[28rem] px-[1rem] flex justify-evenly items-center gap-[2rem] transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * (50 / visibleCount)}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="hover:scale-[1.02] transition-all ease-in-out duration-[500ms] rounded-xl group relative w-[7rem] lg:w-[20rem] overflow-hidden bg-white">
            <img className="group-hover:scale-105 shadow-2xl transition-all ease-in-out duration-[500ms] w-full lg:h-[30rem] h-[10rem]" src={image.url} alt="" />
            <p className=" transition-all ease-in-out absolute top-[14rem] w-[20rem] left-[-5rem] text-7xl text-white font-bold -rotate-90">{image.title}</p>
          </div>
        ))}
      </div>
      <button onClick={nextImage} className="z-[100] lg:text-3xl absolute top-[16rem] lg:top-[29rem] -right-4 lg:right-0 mr-4 p-2 rounded-full bg-white">
        <FaChevronRight />
      </button>
    </div>
  );
}

export default Hero;*/}
