import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './style.css';
function NewCategory() {
  //const [email, setEmail] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e, setter) => {
    setError('');
    setter(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (categoryName && image) {
      try {
        const formData = new FormData();
        //formData.append('email', email);
        formData.append('categoryName', categoryName);
        formData.append('image', image);

        const response = await fetch('http://localhost/waltzify_copy/frontend/src/Database/Add_Category.php', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (data.result === 'Category Added Successfully!') {
          setMsg('Category added successfully!');
          setTimeout(() => navigate('/'), 2000);
        } else {
          setError(data.result);
        }
      } catch (err) {
        setError('Error: ' + err.message);
      }
    } else {
      setError('All fields are required!');
    }
  };

  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
        <p className='text-xl lg:text-3xl font-bold'>Add Category</p>
        <p className='text-gray-600'>
          Dashboard <FontAwesomeIcon icon={faArrowRight} /> Ecommerce <FontAwesomeIcon icon={faArrowRight} />{' '}
          <span className='font-light text-gray-500'>Add Category</span>
        </p>
      </div>

      {/*<div className='flex flex-col gap-[3rem] bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
       {/*  <div className='px-[2rem] flex flex-col lg:flex-row lg:items-center justify-between'>
          <p className='font-bold'>
            Admin Email <span className='text-red-500'>*</span>
          </p>
          <input
            className='focus:outline-none border-2 rounded-lg p-1 lg:w-[50rem]'
            type='email'
            placeholder='Admin'
            value={email}
            onChange={(e) => handleInputChange(e, setEmail)}
          />
        </div> 
      </div>*/}

      <div className='flex flex-col gap-[3rem] bg-white rounded-xl my-[2rem] mx-[2rem] lg:mx-[4rem] py-[2rem]'>
        <div className='px-[2rem] flex flex-col lg:flex-row lg:items-center justify-between'>
          <p className='font-bold'>
            Category Name <span className='text-red-500'>*</span>
          </p>
          <input
            className='focus:outline-none border-2 rounded-lg p-1 lg:w-[50rem]'
            type='text'
            placeholder='Category Name'
            value={categoryName}
            onChange={(e) => handleInputChange(e, setCategoryName)}
          />
        </div>
        <div className='px-[2rem] flex flex-col lg:flex-row lg:items-center justify-between'>
          <p className='font-bold'>
            Upload Images <span className='text-red-500'>*</span>
          </p>
          <div className='relative border-2 border-dotted border-blue-500 rounded-lg h-[10rem] lg:h-[20rem] lg:w-[50rem] flex items-center justify-center overflow-hidden'>
            <input
              className='absolute inset-0 w-full h-full opacity-0 cursor-pointer'
              type='file'
              onChange={handleImageChange}
            />
            {!imagePreview && (
              <div className='flex flex-col items-center'>
                <FontAwesomeIcon icon={faCloud} color='#3B81F6' size='7x' />
                <p className='text-center'>
                  Drop your images here or select <span className='text-blue-500'>click to browse</span>
                </p>
              </div>
            )}
            {imagePreview && (
              <img src={imagePreview} alt='Preview' className='absolute inset-0 object-cover w-full h-full' />
            )}
          </div>
        </div>
        <div className='ml-[2rem] lg:ml-[30rem]'>
          <button
            className='text-lg bg-blue-500 text-white hover:bg-white border-2 hover:text-blue-500 border-blue-500 px-[4rem] lg:py-[0.5rem] rounded-xl transition-all ease-in-out'
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </div>

      {msg && <p className='text-green-500'>{msg}</p>}
      {error && <p className='text-red-500'>{error}</p>}
    </div>
  );
}

export default NewCategory;



















