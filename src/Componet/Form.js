import { useState } from "react";

const Form =({CreateTodo}) =>{
    const[value,setvalue]=useState('')
    const handleSubmit = e =>{
        e.preventDefault()
        CreateTodo(value)
        setvalue('')
    }
    return(
       <form className="mb-4 w-full " onSubmit={handleSubmit}>
           <input type="text" placeholder="what task do you have today" 
           className="outline-none bg-transparent border border-gray-500 p-4 w-{300px}
            text-white mb-8 rounded
             placeholder:text-gray-300" onChange={(e) => setvalue(e.target.value)} value={value}  />
           <button className="bg-gray-500 border-none p-2 text-white curoser-pointer rounded ml-2" >Add Task</button>
       </form>
    )
}
export default Form;