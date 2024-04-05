// import Edit from "./Componet/Edit";
// import Form from "./Componet/Form";
// import TodoList from "./Componet/ToDoList";
// import Todo from "./Componet/Todo";

// function App() {
//   return (
//    <>
   
//    <Form/>
//    <Edit/>
//    <Todo/>
//    <TodoList/>
//    </>
//   );
// }

// export default App;
// import React, { useState } from "react"; 

// const TodoList = () => { 
//   const [todos, setTodos] = useState([]); 
//   const [inputValue, setInputValue] = useState(""); 

//   const handleInputChange = (e) => { 
//     setInputValue(e.target.value); 
//   }; 

//   const handleAddTodo = () => { 
//     if (inputValue.trim() !== "") { 
//       setTodos([...todos, { id: Date.now(), text: inputValue }]); 
//       setInputValue(""); 
//     } 
//   };   

//   const handleRemoveTodo = (id) => { 
//     setTodos(todos.filter((todo) => todo.id !== id)); 
//   }; 

//   return ( 
//     <div className=" bg-indigo-200 border-4"> 
//     <div className="p-4"> 
//       <h1 className="text-2xl font-bold mb-4 text-pink-600" >Todo List</h1> 
//       <div className="flex mb-4"> 
//         <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a new todo" className="p-2 border border-gray-300 mr-2"/> 
//         <button onClick={handleAddTodo} className="p-2 bg-fuchsia-400 text-white rounded-full">Add Todo   </button> 
//         </div> 
//       <ul> 
//         {todos.map((todo) => ( 
//           <li key={todo.id} className="flex items-center justify-between bg-fuchsia-200 p-2 rounded mb-2"> 
//             {todo.text} 
//             <button onClick={() => handleRemoveTodo(todo.id)} className="text-red-500" >❌ </button> 
//             </li>     
//         ))} 
//       </ul> 
//     </div> 
//     </div> 
//   ); 
// }; 

// export default TodoList;


// App.js
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={handleInputChange}
          className="border rounded px-2 py-1 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-1 ml-2 rounded">
          Add
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="flex justify-between items-center mb-2 bg-gray-100 rounded px-4 py-2">
            <span>{task.text}</span>
            <button onClick={() => handleDelete(task.id)} className="text-red-600">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

