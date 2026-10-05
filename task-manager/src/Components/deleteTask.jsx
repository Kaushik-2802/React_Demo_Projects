import { useDispatch } from "react-redux";
import { deleteTaskRequest } from "../actions/taskActions";

export default function deleteTask({task}){
    const dispatch=useDispatch();

    const handleClick=(e)=>{
        dispatch(deleteTaskRequest(task.id));
    }

    return(
        <>
        {/* <h1>Delete a task</h1> */}
         <button
                className="delete-btn"
                onClick={handleClick}
         >
                Delete
              </button>
        </>
    )
}