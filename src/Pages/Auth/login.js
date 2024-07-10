import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './style.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError('');
    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };

  /* const loginSubmit = () => {
    if (email.trim() === '' || password.trim() === '') {
      setError('All fields are required!');
      return;
    }
    const url = 'http://localhost/waltzify_copy/frontend/src/Database/UserLogin.php';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const data = { email, password };

    fetch(url, {
      method: 'POST',
      headers,
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((response) => {
        if (response.result) {
          if (response.result === 'Invalid Email or Password') {
            setError(response.result);
            navigate('/login');
          } else {
            setMsg(response.result);
            setTimeout(() => {
              navigate('/user');
            }, 2000);
          }
        } else {
          throw new Error('Unexpected response format from server');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again later.');
        console.error('Error fetching data:', err);
      });
  }; */
  const loginSubmit = () => {
    if (email.trim() === '' || password.trim() === '') {
      setError('All fields are required!');
      return;
    }
    const url = 'http://localhost/waltzify_copy/frontend/src/Database/UserLogin.php';
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const data = { email, password };
  
    fetch(url, {
      method: 'POST',
      headers,
      credentials: 'include', // Include cookies in the request
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((response) => {
        console.log(response); // Log the response for debugging
        if (response.result) {
          if (response.result === 'Invalid Email or Password') {
            setError(response.result);
            navigate('/login');
          } else {
            setMsg(response.result);
            setTimeout(() => {
              navigate('/user');
            }, 2000);
          }
        } else {
          throw new Error('Unexpected response format from server');
        }
      })
      .catch((err) => {
        setError('An error occurred. Please try again later.');
        console.error('Error fetching data:', err);
      });
  };


  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#ffc89b]'>
      <div className='flex lg:w-2/3 lg:h-[90vh] overflow-hidden rounded-xl'>
        {/* image */}
        <div className='hidden lg:block relative w-1/2'>
          <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/5d/fb/5f/5dfb5f08b8d33aacd35b672339bd679a.jpg" alt="bg" />
          <p className='text-white font-bold absolute top-[16rem] left-4 text-8xl'> Hey There Welcome!</p>
        </div>
        {/* details */}
        <div className='lg:w-1/2 bg-white py-[4rem] flex flex-col pl-[3rem] lg:pl-[5rem] pr-[3rem] gap-[2rem]'>
          <h1 className='text-5xl font-bold text-orange-500'>Login</h1>
          <p className='font-thin w-[17rem]'>Welcome! Please fill the credentials to create an Account.</p>
          {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
          <form className='flex flex-col gap-[1rem]' action="submit">
            <label className='text-gray-500 p-1' htmlFor="username">Username</label>
            <input className='border-2 p-1 outline-none' type="email" value={email}
              onChange={(e) => handleInputChange(e, 'email')} placeholder='example@gmail.com' required />
            <label className='text-gray-500 p-1' htmlFor="password">Password</label>
            <input className='border-2 p-1 outline-none' type="password" value={password}
              onChange={(e) => handleInputChange(e, 'password')} placeholder='******' required />
            <button type='button' className='submit_button' onClick={loginSubmit}>Login</button>
          </form>
          <Link to={'/forgotpassword'}>
            <p className='text-lg'>Forgot Password? <button className='text-orange-500 font-bold'>Click Here!</button></p>
          </Link>
          <Link to={'/register'}>
            <p className='text-lg'>Don't have an Account? <button className='text-orange-500 font-bold'>Sign up</button></p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;














{/* import { Link ,useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './style.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => {
        setMsg('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError('');
    if (type === 'email') {
      setEmail(e.target.value);
    } else if (type === 'password') {
      setPassword(e.target.value);
    }
  };

const loginSubmit = () => {
  if (email.trim() === '' || password.trim() === '') {
    setError('All fields are required!');
    return;
  }
  const url = 'http://localhost/waltzify_copy/frontend/src/Database/UserLogin.php';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const data = { email, password };

  fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((response) => {
      if (response.result) {
        if (response.result === 'Invalid Email or Password') {
          setError(response.result);
          navigate('/login');
        } else {
          // Store user data in localStorage
          localStorage.setItem('user', JSON.stringify(response.data));
          setMsg(response.result);
          setTimeout(() => {
            navigate('/user');
          }, 2000);
        }
      } else {
        throw new Error('Unexpected response format from server');
      }
    })
    .catch((err) => {
      setError('An error occurred. Please try again later.');
      console.error('Error fetching data:', err);
    });
};


  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#ffc89b]'>
        <div className='flex lg:w-2/3 lg:h-[90vh] overflow-hidden rounded-xl'>
            {/* image *
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/5d/fb/5f/5dfb5f08b8d33aacd35b672339bd679a.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[16rem] left-4 text-8xl'> Hey There Welcome!</p>
                {/* <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" /> *
            </div>
            {/* details *
            <div className='lg:w-1/2 bg-white py-[4rem] flex flex-col pl-[3rem] lg:pl-[5rem] pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-orange-500'>Login</h1>
                <p className='font-thin w-[17rem]'>Welcome! Please fill the credentials to create an Account.</p>
                {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='border-2 p-1 outline-none' type="email" value={email}
          onChange={(e) => handleInputChange(e, 'email')} placeholder='example@gmail.com' required/>
                    <label className='text-gray-500 p-1' htmlFor="password">Password</label>
                    <input className='border-2 p-1 outline-none' type="password" value={password}
          onChange={(e) => handleInputChange(e, 'password')} placeholder='******' required/>
                    <button type='button' className='submit_button' onClick={loginSubmit}>Login</button>
                </form>
                <Link to={'/forgotpassword'}>
                    <p className='text-lg'>Forgot Password? <button className='text-orange-500 font-bold'>Click Here!</button></p>
                </Link>
                <Link to={'/register'}>
                    <p className='text-lg'>Don't have an Account? <button className='text-orange-500 font-bold'>Sign up</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Login */}