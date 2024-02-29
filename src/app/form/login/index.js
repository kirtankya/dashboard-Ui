import React, { useState } from 'react'
import './login.scss';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && user.email === storedUser.email && user.password === storedUser.password) {
            setError('');
            localStorage.setItem('loggedIn', 'true');
            navigate(`/home`);
        } else {
            alert('Invalid email or password');
        }
    };


    return (
        <>
            <div className="container">
                <div className="form">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit} action="">
                        <div className="flex-aligments">
                            <MdEmail style={{ color: 'white', width: '30px', height: '40px' }} />
                            <input type="text" value={user.email} placeholder='Enter Your Email' onChange={handleOnchange} name='email' id="" />
                        </div>
                        <div className="flex-aligments">
                            <RiLockPasswordFill style={{ color: 'white', width: '30px', height: '40px' }} />
                            <input type="password" value={user.password} placeholder='Enter Your Password' name='password' onChange={handleOnchange} id="" />
                        </div>
                        <div className="signInbutton">
                            <button type='submit' className='button'>Login</button>
                        </div>
                        <p className='text'>Don't have an account?<Link className='text-1' to={'/'}>Sign Up</Link></p>
                    </form>
                </div>
            </div>

        </>
    )
}
