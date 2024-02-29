import React, { useState } from 'react'
import './calculator.scss';

export default function Caluculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('')

    const handleOnclick = (value) => {
        console.log(value);
        setInput(input + value)
    }
    const handleClear = () => {
        setInput('');
        setResult('');
    }
    const handleCalculate = () => {
        try {
            setResult(eval(input).toString())
        }
        catch (error) {
            setResult(error)
        }
    }


    return (
        <div className='calculator'>
            <h1>Calculator</h1>
            <div className="calculator-screen">
                <input type="text" value={input} readOnly />
                <input type="text" value={result} readOnly />
            </div>
            <div className="calculator-buttons">
                <div className="button-aligment">
                    <button onClick={handleClear} className='buttons'>C</button>
                    <button onClick={() => handleOnclick('/')} className="buttons">/</button>
                    <button onClick={() => handleOnclick('%')} className='buttons'>%</button>
                    <button onClick={() => handleOnclick('.')} className='buttons'>.</button>
                </div>
                <div className="button-aligment">
                    <button onClick={() => handleOnclick('7')} className='buttons'>7</button>
                    <button onClick={() => handleOnclick('8')} className='buttons'>8</button>
                    <button onClick={() => handleOnclick('9')} className='buttons'>9</button>
                    <button onClick={() => handleOnclick('-')} className='buttons'>-</button>
                </div>
                <div className="button-aligment">
                    <button onClick={() => handleOnclick('4')} className='buttons'>4</button>
                    <button onClick={() => handleOnclick('5')} className='buttons'>5</button>
                    <button onClick={() => handleOnclick('6')} className='buttons'>6</button>
                    <button onClick={() => handleOnclick('*')} className='buttons'>*</button>
                </div>
                <div className="button-aligment">
                    <button onClick={() => handleOnclick('1')} className='buttons'>1</button>
                    <button onClick={() => handleOnclick('2')} className='buttons'>2</button>
                    <button onClick={() => handleOnclick('3')} className='buttons'>3</button>
                    <button onClick={handleCalculate} className='buttons'>=</button>
                </div>
                <div className="button-aligment">
                    <button onClick={() => handleOnclick('0')} className='buttons-big'>0</button>
                    <button onClick={() => handleOnclick('+')} className='buttons-big'>+</button>
                </div>
            </div>
        </div>
    )
}
