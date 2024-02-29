import React, { useState } from 'react'
import './signup.scss';
import { RiAdminFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
    })
    const navigate = useNavigate()
    const handleOnchnage = (e) => {
        const { name, value } = e.target;
        setUser((PrevUser) => ({
            ...PrevUser,
            [name]: value,
        }));
    };
    const handleOnclick = (e) => {
        e.preventDefault();
        if (user.username.trim() !== '' && user.email.trim() !== '' && user.password.trim() !== "") {
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/login')
        }
    }
    return (
        <>
            <div className="form">
                <div className='container'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleOnclick} action="">
                        <div className="flex-aligment">
                            <RiAdminFill style={{ color: 'white', width: '30px', height: '40px' }} />
                            <input type="text" onChange={handleOnchnage} value={user.username} placeholder='Enter Your Username' name='username' id="" />
                        </div>
                        <div className="flex-aligment">
                            <MdEmail style={{ color: 'white', width: '30px', height: '40px' }} />
                            <input type="text" onChange={handleOnchnage} value={user.email} placeholder='Enter Your Email' name='email' id="" />
                        </div>
                        <div className="flex-aligment">
                            <RiLockPasswordFill style={{ color: 'white', width: '30px', height: '40px' }} />
                            <input type="password" onChange={handleOnchnage} value={user.password} placeholder='Enter Your Password' name='password' id="" />
                        </div>
                        <div className="signUpbutton">
                            <button type='submit' className='button'>Sign Up</button>
                        </div>
                    </form>
                    <p className='text'>Already have an account? <Link className='text-1' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </>
    )
}