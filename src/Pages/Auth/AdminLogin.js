import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    if (msg) {
      const timer = setTimeout(() => setMsg(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError("");
    if (type === "email") {
      setEmail(e.target.value);
      if (e.target.value === "") {
        setError("Email has been left Blank!");
      }
    } else if (type === "password") {
      setPassword(e.target.value);
      if (e.target.value === "") {
        setError("Password has been left Blank!");
      }
    }
  };

  const loginSubmit = () => {
    if (email !== "" && password !== "") {
      const url = "http://localhost/waltzify_copy/frontend/src/Database/AdminLogin.php";
      const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const data = { email, password };

      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.result === "Invalid Email!" || response.result === "Invalid Password" || response.result === "Invalid Email or Password") {
            setError(response.result);
            setTimeout(() => {
              navigate('/AdminLogin');
            }, 2000);
          } else {
            setMsg(response.result);
            localStorage.setItem('adminData', JSON.stringify(response.data));
            // Redirect based on role
            navigate('/NavAfterLog');
            if (response.data.role === 'Main') {
              navigate('/NavAfterLog');
            }else if (response.data.role === 'Category') {
              navigate('/newcategory');
            }
            else if (response.data.role === 'Products') {
              navigate('/addproduct');
            } 
            else if (response.data.role === 'reviews_rating') {
              navigate('/review');
            }   
            else if (response.data.role === 'Userlist') {
              navigate('/userlist');
            }             
            else {
              setError("Unknown role");
            } 
          }
        })
        .catch((err) => {
          setError("An error occurred. Please try again later.");
          console.error(err); // Log for debugging purposes
        });
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <div className='flex flex-col items-center gap-[2rem] mt-[6rem]'>
      <div className='text-center pb-[3rem]'>
        <h3 className='text-4xl'>Admin Login</h3><br></br>
        <p className='text-2xl'>Enter your credential login</p>
      </div>
      <div className='flex flex-col md:w-1/4 gap-6 border-[1px] p-[3rem] rounded-2xl border-black'>
        <p>
          {msg ? <span className="success">{msg}</span> : <span className="error">{error}</span>}
        </p>
        <input className='border-[1px] border-black p-2 rounded-3xl outline-none' type="email" value={email} onChange={(e) => handleInputChange(e, "email")} placeholder='email' />
        <input className='border-[1px] border-black p-2 rounded-3xl outline-none' type="password" value={password} onChange={(e) => handleInputChange(e, "password")} placeholder='Password' />

        <button type="submit" onClick={loginSubmit} className='bg-black text-white p-2 rounded-3xl font-bold'>Login</button>
        <p className='cursor-pointer font-bold'>Forgot Password?</p>
      </div>
      <div>
        <p className='cursor-default'>Don't have an account? <Link to={'/AdminSign'}><span className='text-[#00843C] font-bold cursor-pointer'>Sign up</span></Link></p>
      </div>
    </div>
  );
}

export default AdminLogin;


























