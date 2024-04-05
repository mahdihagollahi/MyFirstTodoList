import { useState } from "react";
import Form from "./Form";
import {v4 as uuid4} from 'uuid'
import Todo from "./Todo";
uuid4()

const TodoList =() =>{
    const [todoValue , setTodo] = useState([]);
    const CreateTodo = todo =>{
        setTodo([...todoValue , {id:uuid4() , task:todo , isEditing:false}])
    }
    return(
       <div className="container bg-gray-700 mt-20 p-8 rounded-md">
       <Form CreateTodo={CreateTodo} />
       {
        todoValue.map((todo , idx)=>(
            <Todo task ={todo} key={idx}/>
        ))
       }
       </div>
    )
}
export default TodoList;