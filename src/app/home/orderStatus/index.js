import React, { useState } from 'react';
import './order.scss';

export default function OrderStatus() {
    const [orderStatus, setOrderStatus] = useState('pending');
    const [orderItem, setOrderItem] = useState('');
    const [error, setError] = useState({});

    const handleOnChange = (e) => {
        setOrderItem(e.target.value);
        setError({ ...error, [e.target.name]: '' });
    }

    const validate = () => {
        let inputValid = true;
        let newError = {};

        if (!orderItem || orderItem.trim() === "") {
            inputValid = false;
            newError.input = "*Input is required";
        }

        setError(newError);
        return inputValid;
    }

    const handleOnClick = (e) => {
        e.preventDefault();

        const isValid = validate();
        if (isValid) {
            setOrderStatus('processing');
            setTimeout(() => {
                setOrderStatus('Successfully');
            }, 3000);
        }
    }

    return (
        <div className='Order'>
            <h1>Order Status</h1>
            <form>
                <div className="input">
                    <span style={{ color: 'red' }}>{error.input}</span><br />
                    <input value={orderItem} onChange={handleOnChange} type="text" placeholder='Enter Your Order Items' name="" />
                </div>
                <div className="button">
                    <button onClick={handleOnClick}>Submit</button>
                </div>
                <div className="button">
                    <button className='buttons'>Status : {orderStatus}</button>
                </div>
            </form>
        </div>
    )
}
