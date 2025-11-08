import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [limit ,setLimit] = useState(10);

  useEffect(() => {
    const fetchTodos = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setTodos(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // --- Loading and Error States ---
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-xl text-red-600 font-semibold p-4 bg-white rounded-lg shadow-lg">
          Error fetching todos: {error.message}
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="text-2xl font-bold text-blue-500">Loading...</div>
      </div>
    );
  }

  // --- Main Todo List Display ---
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b-4 border-blue-500 pb-2">
           Todo List
        </h1>
        <div className="space-y-4">
          {todos.slice(0, limit).map((todo) => (
            <div
              key={todo.id}
              className={`
                p-4 rounded-xl shadow-md transition duration-300 ease-in-out 
                ${todo.completed 
                  ? 'bg-green-100 border-l-4 border-green-500 hover:shadow-lg' 
                  : 'bg-white border-l-4 border-yellow-500 hover:shadow-xl'
                }
              `}
            >
              <h3 className="text-xl font-semibold text-gray-800 break-words mb-1">
                {todo.title}
              </h3>
              <p className="text-sm">
                Status: 
                <span className={`font-medium ml-2 ${todo.completed ? 'text-green-700' : 'text-yellow-700'}`}>
                  {todo.completed ? " Completed" : " Pending"}
                </span>
              </p>
            </div>
          ))}
          <button className=' bg-blue-600 p-2 rounded-2xl text-white' onClick={()=>{setLimit(limit+5)}}>Load More</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;