
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../feture/todo/todoslice';

function Todos() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();
    const [editinput, setEditinput] = useState('');
    const [editid, setEditid] = useState(null)
    const [readinput, setReadinput] = useState(true)


    const handleUpdateClick = (todo) => {
        setEditid(todo.id);
        setEditinput(todo.text);
    }

    const handleupdate = () => {
        dispatch(updateTodo({
            id: editid,
            text: editinput,
        }))
        setEditid(null)
        setEditinput('')
        setReadinput(true)
    }

    const handleEditinput=(e)=>{
        setEditinput(e.target.value);
        setReadinput(false);
     }

    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" key={todo.id}>

                        {editid === todo.id ? (
                            <input
                                type="text"
                                value={editinput}
                                onChange={(e) => {
                                    handleEditinput(e)                                }}
                                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                readOnly= {readinput}
                            />
                        ) :
                            (
                                <div className="text-white">{todo.text}</div>
                            )

                        }

                        <div className="flex">
                            {
                                editid === todo.id ? (

                                    <button
                                        onClick={handleupdate}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"

                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M14 9a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V9zM9 9v4a1 1 0 001 1h4a1 1 0 001-1V9"
                                            />
                                        </svg>

                                    </button>

                                ) : (
                                    <button


                                        onClick={() => { handleUpdateClick(todo) , setReadinput(!readinput) }}
                                        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
                                    >
                                        {/* edit  btn */}

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M14.293 3.293a1 1 0 011.414 0l1.292 1.292a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.225-1.226l1-3a1 1 0 01.242-.39l9-9zM15 5l-1.293-1.293a1 1 0 00-1.414 0l-9 9a1 1 0 00-.242.39l-1 3a1 1 0 001.226 1.226l3-1a1 1 0 00.39-.242l9-9a1 1 0 000-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>

                                    </button>

                                )
                            }



                            <button
                                onClick={() => {

                                    dispatch(removeTodo(todo.id));
                                }}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </div>
                    </li>
                ))}
            </ul >
        </>
    );
}

export default Todos;


