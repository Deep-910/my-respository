import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function AddUser() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setMsg(''), 15000);
    return () => clearTimeout(timer);
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError('');
    const value = e.target.value;

    switch (type) {
      case 'name':
        setName(value);
        if (value === '') setError('Name has been left blank!');
        break;
      case 'email':
        setEmail(value);
        if (value === '') setError('Email has been left blank!');
        break;
      case 'number':
        setNumber(value);
        if (value === '') setError('Number has been left blank!');
        break;
      case 'address':
        setAddress(value);
        if (value === '') setError('Address has been left blank!');
        break;
      case 'password':
        setPassword(value);
        if (value === '') setError('Password has been left blank!');
        break;
      case 'conpassword':
        setConpassword(value);
        if (value === '') {
          setError('Confirm Password has been left blank!');
        } else if (value !== password) {
          setError('Confirm Password Does Not Match');
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password && conpassword) {
      const url = 'http://localhost/waltzify_copy/frontend/src/Database/UserSign.php';
      const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };
      const data = { name, email, password, number, address, conpassword };

      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0].result === 'Not Submitted,Please try again!') {
            setError(response[0].result);
            setTimeout(() => navigate('/Sign'), 2000);
          } else {
            setMsg(response[0].result);
            setTimeout(() => navigate('/Login'), 2000);
          }
        })
        .catch((err) => {
          setError('Error: ' + err.message);
        });

      setName('');
      setEmail('');
      setNumber('');
      setAddress('');
      setPassword('');
      setConpassword('');
    } else {
      setError('All fields are Required!');
    }
  };

  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
      <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
        <p className='text-xl lg:text-3xl font-bold'>Add User</p>
        <p className='text-gray-600'>
          Dashboard <FontAwesomeIcon icon={faArrowRight} /> Users <FontAwesomeIcon icon={faArrowRight} />{' '}
          <span className='font-light text-gray-500'>Add User</span>
        </p>
      </div>
      <div className='bg-white m-[2rem] lg:m-[4rem] p-[2rem] rounded-xl shadow-xl flex flex-col lg:flex-row gap-[3rem]'>
        <div className='lg:w-1/4'>
          <p className='font-bold text-2xl'>Account</p>
          <p className='font-thin'>Fill in the information to add a new account</p>
        </div>
        <div className='lg:w-3/4'>
          <form className='flex flex-col gap-[1rem]' onSubmit={handleSubmit}>
            <p>
              {msg ? <span className='success'>{msg}</span> : <span className='error'>{error}</span>}
            </p>
            <label className='font-bold' htmlFor='name'>Name</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => handleInputChange(e, 'name')}
            />
            <label className='font-bold' htmlFor='email'>Email</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='email'
              name='email'
              id='email'
              placeholder='Email'
              value={email}
              onChange={(e) => handleInputChange(e, 'email')}
            />
            <label className='font-bold' htmlFor='number'>Number</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='text'
              name='number'
              id='number'
              placeholder='Number'
              value={number}
              onChange={(e) => handleInputChange(e, 'number')}
            />
            <label className='font-bold' htmlFor='address'>Address</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='text'
              name='address'
              id='address'
              placeholder='Address'
              value={address}
              onChange={(e) => handleInputChange(e, 'address')}
            />
            <label className='font-bold' htmlFor='password'>Password</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              value={password}
              onChange={(e) => handleInputChange(e, 'password')}
            />
            <label className='font-bold' htmlFor='conpassword'>Confirm Password</label>
            <input
              className='focus:outline-none border-2 py-2 px-4 rounded-xl'
              type='password'
              name='conpassword'
              id='conpassword'
              placeholder='Confirm Password'
              value={conpassword}
              onChange={(e) => handleInputChange(e, 'conpassword')}
            />
            <button
              type='submit'
              className='text-lg bg-blue-500 text-white hover:bg-white border-2 hover:text-blue-500 border-blue-500 px-[4rem] py-[0.5rem] rounded-xl transition-all ease-in-out'
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddUser;




{/*import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'

function AddUser() {
  return (
    <div className='bg-[#F2F6F9] py-[2rem]'>
        <div className='flex flex-col lg:flex-row justify-between lg:items-center px-[2rem] lg:px-[4rem]'>
            <p className='text-xl lg:text-3xl font-bold'>Add User</p>
            <p className='text-gray-600'>Dashboard <FontAwesomeIcon icon={faArrowRight}/> Users <FontAwesomeIcon icon={faArrowRight}/> <span className='font-light text-gray-500'>Add User</span></p>
        </div>
        <div className='bg-white m-[2rem] lg:m-[4rem] p-[2rem] rounded-xl shadow-xl flex flex-col lg:flex-row gap-[3rem]'>
            <div className='lg:w-1/4'>
                <p className='font-bold text-2xl'>Account</p>
                <p className='font-thin'>Fill in the information to add a new account</p>
            </div>
            <div className='lg:w-3/4'>
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='font-bold' htmlFor="name">Name</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="text" name="name" id="name" placeholder='Name'/>
                    <label className='font-bold' htmlFor="email">Email</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="email" name="name" id="name" placeholder='Username'/>
                    <label className='font-bold' htmlFor="number">Number</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="text" name="number" id="number" placeholder='Number'/>
                    <label className='font-bold' htmlFor="address">Address</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="text" name="address" id="address" placeholder='Address'/>
                    <label className='font-bold' htmlFor="password">Password</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="password" name="name" id="name" placeholder='Password'/>
                    <label className='font-bold' htmlFor="password">Confirm Password</label>
                    <input className='focus:outline-none border-2 py-2 px-4 rounded-xl' type="password" name="name" id="name" placeholder='Confirm Password'/>
                   {/*<label className='font-bold' htmlFor="image">Upload Photo</label>
                    <input type="file" />*
                </form>
            </div>
        </div>
        <div className='ml-[4rem]'>
            <button className='text-lg bg-blue-500 text-white hover:bg-white border-2 hover:text-blue-500 border-blue-500 px-[4rem] py-[0.5rem] rounded-xl transition-all ease-in-out'
            >
                Add
            </button>
        </div>
    </div>
  )
}

export default AddUser*/}