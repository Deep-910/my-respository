import React from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import { useEffect,useState } from 'react';
import './style.css';
function Register() {
    const navigate = useNavigate();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');  
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
  
    const handleInputChange = (e, type) => {
      setError("");
      const value = e.target.value;
      switch (type) {
        case "email":
          setEmail(value);
          break;
        case "name":
          setName(value);
          break;
        case "password":
          setPassword(value);
          break;
         default:
          break;
      }
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (email && name && password) {
        try {
          const formData = new FormData();
          formData.append("email", email);
          formData.append("name", name);
          formData.append("password", password);          
    
          const response = await fetch("http://localhost/waltzify_copy/frontend/src/Database/UserSign.php", {
            method: "POST",
            body: formData
          });
    
          const data = await response.json();
          if (data[0].result === "Not Submitted,Please try again!") {
            setError(data[0].result);
          } else {
            setMsg(data[0].result);
            setTimeout(() => navigate('/login'), 2000);
          }
        } catch (err) {
          setError("Error: " + err.message);
        }
      } else {
        setError("All fields are Required!");
      }
    };
  

  return (
    <div className='flex items-center justify-center py-[2.5rem] bg-[#ffc89b]'>
        <div className='flex lg:w-2/3 h-[90vh] overflow-hidden rounded-xl'>
            {/* image */}
            <div className='hidden lg:block relative w-1/2'>
                <img className=' w-full h-[90vh]' src="https://i.pinimg.com/564x/5d/fb/5f/5dfb5f08b8d33aacd35b672339bd679a.jpg" alt="bg" />
                <p className='text-white font-bold absolute top-[16rem] left-4 text-8xl'> Hey There Welcome!</p>
                {/* <img className='absolute top-10 w-[10rem]' src={require('../../assets/logo.png')} alt="" /> */}
            </div>
            {/* details */}
            <div className='lg:w-1/2 bg-white pt-[4rem] flex flex-col pl-[5rem] pr-[3rem] gap-[2rem]'>
                <h1 className='text-5xl font-bold text-orange-500'>Sign Up</h1>
                <p className='font-thin w-[17rem]'>Welcome! Please fill the credentials to create an Account.</p>
                {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
                <form className='flex flex-col gap-[1rem]' action="submit">
                    <label className='text-gray-500 p-1' htmlFor="Name">Name</label>
                    <input className='border-2 p-1 outline-none' type="text" placeholder='Enter your name' value = {name} onChange={(e) => handleInputChange(e, "name")} required/>
                    <label className='text-gray-500 p-1' htmlFor="username">Username</label>
                    <input className='border-2 p-1 outline-none' type="email" placeholder='example@gmail.com' value = {email} onChange={(e) => handleInputChange(e, "email")} required/>
                    <label className='text-gray-500 p-1' htmlFor="password">Password</label>
                    <input className='border-2 p-1 outline-none' type="password" placeholder='******'  value = {password} onChange={(e) => handleInputChange(e, "password")} required/>
                    <button className='submit_button'  onClick={handleSubmit}>Sign Up</button>
                </form>
                <Link to={'/login'}>
                    <p className='text-lg'>Have an Account? <button className='text-orange-500 font-bold'>Login</button></p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Register