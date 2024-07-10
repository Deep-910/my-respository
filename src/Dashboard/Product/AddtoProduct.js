import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

function AddtoProduct() {
  const [images, setImages] = useState([null, null, null, null]);
  const [pname, setPname] = useState('');
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [discount, setDiscount] = useState('');
  const [rate, setRate] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;
    switch (type) {
      case "pname":
        setPname(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "discount":
        setDiscount(value);
        break;
      case "rate":
        setRate(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pname && category && brand && images.every(img => img !== null) && description && price && rate) {
      try {
        const formData = new FormData();
        formData.append("pname", pname);
        formData.append("category", category);
        formData.append("brand", brand);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("rate", rate);

        images.forEach((img, index) => {
          formData.append(`img${index + 1}`, img);
        });

        const response = await fetch("http://localhost/waltzify_copy/frontend/src/Database/Add_Products.php", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        if (data[0].result === "Not Submitted,Please try again!" || data[0].result === "File upload failed") {
          setError(data[0].result);
        } else if (data[0].result === "Only admin can add data!!") {
          setError(data[0].result);
        } else {
          setMsg(data[0].result);
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    } else {
      setError("All fields are required!");
    }
  };

  const categories = [
    'Anti Wall Climbing spikes',
    'Animal Trap',
    'Pest Control',
    'Personal Care',
    'Industry & Scientific',
    'Home & Kitchen',
    'Construction Equipments',
    'Civil Lab Equipments',
    'Plastic Utensils',
    'Fancy Dress for kids',
    'Fencing Products',
    'Generic',
    'Silica Gel',
    'Search & Rescue',
    'Safety Products',
    'Safety Shoes',
    'Snake & Garden Tools'
  ];

  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
      <div className='flex lg:flex-row flex-col justify-between lg:items-center lg:px-[4rem] px-[1rem]'>
        <p className='text-xl lg:text-3xl font-bold'>Add Product</p>
        <p className='text-gray-600'>
          Dashboard <FontAwesomeIcon icon={faArrowRight} /> Ecommerce <FontAwesomeIcon icon={faArrowRight} />{' '}
          <span className='font-light text-gray-500'>Add Product</span>
        </p>
      </div>
      <div className='flex lg:flex-row flex-col gap-[2rem] px-[2rem]'>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
          <p>
            {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
          </p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]' autoComplete='off'>
            <label className='font-bold' htmlFor='name'>
              Product name<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={pname} onChange={(e) => handleInputChange(e, "pname")} placeholder='Enter Product Name' />
            <p className='font-thin text-sm'>Do not exceed 20 characters when entering the product name.</p>
            <div className='flex lg:flex-row flex-col gap-[2rem]'>
              <div className='flex flex-col gap-[1rem]'>
                <label className='font-bold' htmlFor='category'>
                  Category<span className='text-red-500'> *</span>
                </label>
                <select
                  className='rounded-xl p-1 focus:outline-none border-2'
                  value={category}
                  onChange={(e) => handleInputChange(e, "category")}
                >
                  <option value="">Select Category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            <label className='font-bold' htmlFor='brand'>
              Brand<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={brand} onChange={(e) => handleInputChange(e, "brand")} name='brand' placeholder='Brand' />
            <label className='font-bold' htmlFor='description'>
              Description<span className='text-red-500'> *</span>
            </label>
            <textarea
              className='h-[20rem] rounded-xl p-1 focus:outline-none border-2'
              name='desc'
              placeholder='Description'
              value={description}
              onChange={(e) => handleInputChange(e, "description")}
            ></textarea>
            <label className='font-bold' htmlFor='price'>
              Price <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='text' value={price} onChange={(e) => handleInputChange(e, "price")} placeholder='price' />
            <label className='font-bold' htmlFor='discount'>
              Discount
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} value={discount} onChange={(e) => handleInputChange(e, "discount")} placeholder='discount' />
            <label className='font-bold' htmlFor='rate'>
              Rating <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} max={5} value={rate} onChange={(e) => handleInputChange(e, "rate")} placeholder='Enter Rating' />
            <div className='p-[1rem] flex lg:flex-row flex-col gap-[2rem]'>
              <button type='submit' className='py-[1rem] px-[2rem] text-white lg:text-lg rounded-xl font-bold bg-blue-500'>Add Product</button>
            </div>
          </form>
        </div>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
          <p className='font-bold text-lg'>Upload Images</p>
          <div className='flex flex-wrap gap-[1rem]'>
            {images.map((image, index) => (
              <div key={index} className='relative flex flex-col items-center border-2 border-dotted rounded-xl border-blue-500'>
                <input
                  type='file'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={(e) => handleImageChange(index, e)}
                />
                {image ? (
                  <img className='w-[10rem] h-[15rem] object-cover rounded-xl' src={URL.createObjectURL(image)} alt={`Upload ${index + 1}`} />
                ) : (
                  <div className='w-[10rem] h-[15rem] flex flex-col items-center justify-center text-gray-400'>
                    <FontAwesomeIcon icon={faCloud} size='3x' />
                    <p>Upload Image {index + 1}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddtoProduct;











{/* //yeh code purana hai jo ki shi hai 
  import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

function AddtoProduct() {
  const [images, setImages] = useState([null, null, null, null]);
  const [pname ,setPname] = useState('');
  const [category ,setCategory] = useState('');
  const [brand,setBrand] = useState('');
  const [description,setDescription] = useState('');
  const [price,setPrice] = useState('');
  const [discount,setDiscount] = useState('');
  const [rate,setRate] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;
    switch (type) {
     
      case "pname":
        setPname(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "brand":
        setBrand(value);
        break;
      case "description":
        setDescription(value);
        break;
    
      case "price":
        setPrice(value);
        break;
      case "discount":
          setDiscount(value);
          break;
      case "rate":
          setRate(value);
         break;
      default:
        break;
    }
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pname && category && brand && images.every(img => img !== null) && description && price || discount && rate)  {
      try {
        const formData = new FormData();
       
        formData.append("pname", pname);
        formData.append("category", category);
        formData.append("brand", brand);
        formData.append("description", description);
        formData.append("price",price);
        formData.append("discount", discount);
        formData.append("rate",rate);

        images.forEach((img, index) => {
          formData.append(`img${index + 1}`, img);
        });

        const response = await fetch("http://localhost/waltzify_copy/frontend/src/Database/Add_Products.php", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        if (data[0].result === "Not Submitted,Please try again!" || data[0].result === "File upload failed") {
          setError(data[0].result);
        }
        else if(data[0].result === "Only admin can add data!!") {
          setError(data[0].result)
        }
        else {
          setMsg(data[0].result);
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
      <div className='flex lg:flex-row flex-col justify-between lg:items-center lg:px-[4rem] px-[1rem]'>
        <p className='text-xl lg:text-3xl font-bold'>Add Product</p>
        <p className='text-gray-600'>
          Dashboard <FontAwesomeIcon icon={faArrowRight} /> Ecommerce <FontAwesomeIcon icon={faArrowRight} />{' '}
          <span className='font-light text-gray-500'>Add Product</span>
        </p>
      </div>
      <div className='flex lg:flex-row flex-col gap-[2rem] px-[2rem]'>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
        <p>
          {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
        </p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]' autoComplete='off'>
           
    

            <label className='font-bold' htmlFor='name'>
              Product name<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={pname} onChange={(e) => handleInputChange(e, "pname")} placeholder='Enter Product Name' />
            <p className='font-thin text-sm'>Do not exceed 20 characters when entering the product name.</p>
            <div className='flex lg:flex-row flex-col gap-[2rem]'>
              <div className='flex flex-col gap-[1rem]'>
                <label className='font-bold' htmlFor='category'>
                Category<span className='text-red-500'> *</span>
                </label>
                <input
                  className='rounded-xl p-1 focus:outline-none border-2'
                  type='text'
                  placeholder='Category'
                  value={category} onChange={(e) => handleInputChange(e, "category")}
                />
              
              </div>
             
            </div>
            <label className='font-bold' htmlFor='brand'>
              Brand<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={brand} onChange={(e) => handleInputChange(e, "brand")} name='brand' placeholder='Brand' />
            <label className='font-bold' htmlFor='description'>
              Description<span className='text-red-500'> *</span>
            </label>
            <textarea
              className='h-[20rem] rounded-xl p-1 focus:outline-none border-2'
              name='desc'
              placeholder='Description'
              value={description}
              onChange={(e) => handleInputChange(e, "description")}
            ></textarea>
           
            <label className='font-bold' htmlFor='price'>
              Price <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='text' value={price} onChange={(e) => handleInputChange(e, "price")} placeholder='price' />
           
            <label className='font-bold' htmlFor='size'>
              Discount
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} value={discount} onChange={(e) => handleInputChange(e, "discount")} placeholder='discount' />
            <label className='font-bold' htmlFor='size'>
              Rating <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} max={5} value={rate} onChange={(e) => handleInputChange(e, "rate")} placeholder='Enter Rating' />
           
            <div className='p-[1rem] flex lg:flex-row flex-col gap-[2rem]'>
              <button type='submit' className='py-[1rem] px-[2rem] text-white lg:text-lg rounded-xl font-bold bg-blue-500'>Add Product</button>
              
            </div>
          </form>
        </div>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
          <p className='font-bold text-lg'>Upload Images</p>
          <div className='flex flex-wrap gap-[1rem]'>
            {images.map((image, index) => (
              <div key={index} className='relative flex flex-col items-center border-2 border-dotted rounded-xl border-blue-500'>
                <input
                  type='file'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={(e) => handleImageChange(index, e)}
                />
                {image ? (
                  <img className='w-[10rem] h-[15rem] object-cover rounded-xl' src={URL.createObjectURL(image)} alt={`Upload ${index + 1}`} />
                ) : (
                  <div className='flex flex-col items-center justify-center h-full'>
                    <FontAwesomeIcon icon={faCloud} color='#3B81F6' size='5x' />
                    <p className='text-center px-[1rem]'>
                      Drop your images here or <span className='text-blue-500'>click to browse</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className='font-thin px-[1rem] py-[2rem] text-sm'>
            You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the
            background color standards. Pictures must be in certain dimensions. Notice that the product shows all the
            details
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddtoProduct; */}
















{/* import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';

function AddtoProduct() {
  const [images, setImages] = useState([null, null, null, null]);
  //const [email ,setEmail] = useState('');
  const [pname ,setPname] = useState('');
  const [category ,setCategory] = useState('');
  //const [sub_category ,setSubCategory] = useState('');
  //const [gender, setGender] = useState('');
  const [brand,setBrand] = useState('');
  const [description,setDescription] = useState('');
  //const [size,setSize] = useState('');
  //const [date,setDate] = useState('');
  //const [endDate,setEndDate] = useState('');
  const [price,setPrice] = useState('');
  const [discount,setDiscount] = useState('');
  const [rate,setRate] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;
    switch (type) {
     
      case "pname":
        setPname(value);
        break;
      case "category":
        setCategory(value);
        break;
        /*case "sub_category":
          setSubCategory(value);
          break;*
      /* case "gender":
        setGender(value);
        break; *
      case "brand":
        setBrand(value);
        break;
      case "description":
        setDescription(value);
        break;
     /*  case "size":
        setSize(value);
        break; 
      /* case "date":
        setDate(value);
        break;
        case "endDate":
        setEndDate(value);
        break; 
      case "price":
        setPrice(value);
        break;
      case "discount":
          setDiscount(value);
          break;
      case "rate":
          setRate(value);
         break;
      default:
        break;
    }
  };

  const handleImageChange = (index, event) => {
    const file = event.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pname && category && brand && images.every(img => img !== null) && description && price || discount && rate)  {
      try {
        const formData = new FormData();
       
        formData.append("pname", pname);
        formData.append("category", category);
        //formData.append("sub_category", sub_category);
        //formData.append("gender", gender);
        formData.append("brand", brand);
        formData.append("description", description);
        //formData.append("size", size);
        //formData.append("date", date);
        //formData.append("endDate", endDate);
        formData.append("price",price);
        formData.append("discount", discount);
        formData.append("rate",rate);

        images.forEach((img, index) => {
          formData.append(`img${index + 1}`, img);
        });

        const response = await fetch("http://localhost/waltzify_copy/frontend/src/Database/Add_Products.php", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        if (data[0].result === "Not Submitted,Please try again!" || data[0].result === "File upload failed") {
          setError(data[0].result);
        }
        else if(data[0].result === "Only admin can add data!!") {
          setError(data[0].result)
        }
        else {
          setMsg(data[0].result);
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (err) {
        setError("Error: " + err.message);
      }
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
      <div className='flex lg:flex-row flex-col justify-between lg:items-center lg:px-[4rem] px-[1rem]'>
        <p className='text-xl lg:text-3xl font-bold'>Add Product</p>
        <p className='text-gray-600'>
          Dashboard <FontAwesomeIcon icon={faArrowRight} /> Ecommerce <FontAwesomeIcon icon={faArrowRight} />{' '}
          <span className='font-light text-gray-500'>Add Product</span>
        </p>
      </div>
      <div className='flex lg:flex-row flex-col gap-[2rem] px-[2rem]'>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
        <p>
          {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
        </p>
          <form onSubmit={handleSubmit} className='flex flex-col gap-[1rem]' autoComplete='off'>
           
    

            <label className='font-bold' htmlFor='name'>
              Product name<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={pname} onChange={(e) => handleInputChange(e, "pname")} placeholder='Enter Product Name' />
            <p className='font-thin text-sm'>Do not exceed 20 characters when entering the product name.</p>
            <div className='flex lg:flex-row flex-col gap-[2rem]'>
              <div className='flex flex-col gap-[1rem]'>
                <label className='font-bold' htmlFor='category'>
                Category<span className='text-red-500'> *</span>
                </label>
                <input
                  className='rounded-xl p-1 focus:outline-none border-2'
                  type='text'
                  placeholder='Category'
                  value={category} onChange={(e) => handleInputChange(e, "category")}
                />
                {/*<label className='font-bold' htmlFor='subcategory'>
                Sub Category<span className='text-red-500'> *</span>
                </label>
                <input
                  className='rounded-xl p-1 focus:outline-none border-2'
                  type='text'
                  placeholder='Sub Category'
                  value={sub_category} onChange={(e) => handleInputChange(e, "sub_category")}
                />*
              </div>
              {/* <div className='flex flex-col gap-[1rem]'>
                <label className='font-bold' htmlFor='gender'>
                  Gender<span className='text-red-500'> *</span>
                </label>
                <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={gender} onChange={(e) => handleInputChange(e, "gender")} placeholder='Gender' />
              </div> *
            </div>
            <label className='font-bold' htmlFor='brand'>
              Brand<span className='text-red-500'> *</span>
            </label>
            <input className='rounded-xl p-1 focus:outline-none border-2' type='text' value={brand} onChange={(e) => handleInputChange(e, "brand")} name='brand' placeholder='Brand' />
            <label className='font-bold' htmlFor='description'>
              Description<span className='text-red-500'> *</span>
            </label>
            <textarea
              className='h-[20rem] rounded-xl p-1 focus:outline-none border-2'
              name='desc'
              placeholder='Description'
              value={description}
              onChange={(e) => handleInputChange(e, "description")}
            ></textarea>
           {/*  <label className='font-bold' htmlFor='size'>
              Add Size <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='text' value={size} onChange={(e) => handleInputChange(e, "size")} placeholder='Choose Size' />
            <label className='font-bold' htmlFor='date'>
              Start Date <span className='text-red-500'>*</span>
            </label>
            <input className='w-[17rem] rounded-xl p-1 focus:outline-none border-2' type='date' value={date} onChange={(e) => handleInputChange(e, "date")} placeholder='dd/mm/yyyy' />
            <label className='font-bold' htmlFor='date'>
              End Date <span className='text-red-500'>*</span>
            </label>
            <input className='w-[17rem] rounded-xl p-1 focus:outline-none border-2' type='date' value={endDate} onChange={(e) => handleInputChange(e, "endDate")} placeholder='dd/mm/yyyy' /> *
            <label className='font-bold' htmlFor='price'>
              Price <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='text' value={price} onChange={(e) => handleInputChange(e, "price")} placeholder='price' />
           
            <label className='font-bold' htmlFor='size'>
              Discount
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} value={discount} onChange={(e) => handleInputChange(e, "discount")} placeholder='discount' />
            <label className='font-bold' htmlFor='size'>
              Rating <span className='text-red-500'>*</span>
            </label>
            <input className='w-[19rem] rounded-xl p-1 focus:outline-none border-2' type='number' min={1} max={5} value={rate} onChange={(e) => handleInputChange(e, "rate")} placeholder='Enter Rating' />
           
            <div className='p-[1rem] flex lg:flex-row flex-col gap-[2rem]'>
              <button type='submit' className='py-[1rem] px-[2rem] text-white lg:text-lg rounded-xl font-bold bg-blue-500'>Add Product</button>
              {/* <button type='button' className='py-[1rem] px-[2rem] text-blue-500 border-2 border-blue-500 lg:text-lg rounded-xl font-bold'>Save Product</button>
              <button type='button' className='py-[1rem] px-[2rem] border-2 lg:text-lg rounded-xl font-bold'>Schedule</button> 
            </div>
          </form>
        </div>
        <div className='bg-white rounded-xl shadow-xl my-[3rem] p-[2rem] lg:w-1/2'>
          <p className='font-bold text-lg'>Upload Images</p>
          <div className='flex flex-wrap gap-[1rem]'>
            {images.map((image, index) => (
              <div key={index} className='relative flex flex-col items-center border-2 border-dotted rounded-xl border-blue-500'>
                <input
                  type='file'
                  className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
                  onChange={(e) => handleImageChange(index, e)}
                />
                {image ? (
                  <img className='w-[10rem] h-[15rem] object-cover rounded-xl' src={URL.createObjectURL(image)} alt={`Upload ${index + 1}`} />
                ) : (
                  <div className='flex flex-col items-center justify-center h-full'>
                    <FontAwesomeIcon icon={faCloud} color='#3B81F6' size='5x' />
                    <p className='text-center px-[1rem]'>
                      Drop your images here or <span className='text-blue-500'>click to browse</span>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <p className='font-thin px-[1rem] py-[2rem] text-sm'>
            You need to add at least 4 images. Pay attention to the quality of the pictures you add, comply with the
            background color standards. Pictures must be in certain dimensions. Notice that the product shows all the
            details
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddtoProduct; */}












