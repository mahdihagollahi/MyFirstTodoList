import {AiFillEdit} from 'react-icons/ai'
import { IoTrashBinOutline } from "react-icons/io5";    
const Todo =({task}) =>{
    return(
        <>
       <div className="flex justify-between items-center bg-violet-500 text-white py-3 px-4 rounded-md mb-1  curoseer-pointer ">
        <p>{task.task}</p>
       </div>
       <div className='flex items-center gap-x-4 ' >
       <AiFillEdit className='text-xl ' />
       <IoTrashBinOutline className='text-xl ' />
        </div>
       </>
    )
}
export default Todo;