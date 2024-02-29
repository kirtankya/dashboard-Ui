import React, { useState } from 'react';
import './todoList.scss';
import { MdDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';


export default function Todo() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [editIndex, setEditIndex] = useState(null)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            if (editIndex !== null) {
                const updateTodos = [...todos]
                updateTodos[editIndex] = inputValue
                setTodos(updateTodos);
                setEditIndex(null)
            }
            else {
                setTodos([...todos, inputValue]);
            }
        }
        toast.success("Sucessfully")
        setInputValue('');
    };

    const handleEdit = (index) => {
        setInputValue(todos[index]);
        setEditIndex(index)
    }

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div className='todoList'>
            <div className="container">
                <h1>TO DO LIST</h1>
                <div className="todoListinput">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder='Add Item....'
                        name="item"
                    />
                    <div className="button">
                        <button onClick={handleAddTodo}>{editIndex !== null ? 'Update' : 'Add'}</button>
                        <ToastContainer />
                    </div>
                </div>
                <div className="todoListBox">
                    <ul>
                        {todos.map((todo, index) => (
                            <>
                                <div className="flex-aligment">
                                    <li key={index}>
                                        {todo}
                                    </li>
                                    <div className="aligment-item">
                                        <div className="icon">
                                            <TbEdit style={{ width: '50px', height: '30px' }} onClick={() => handleEdit(index)} />
                                        </div>
                                        <div className="icon">
                                            <MdDelete style={{ width: '50px', height: '30px' }} onClick={() => handleRemoveTodo(index)} />
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
