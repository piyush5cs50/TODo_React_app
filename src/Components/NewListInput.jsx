import { useState } from "react"
import './NewListInput.css'

export default function NewListInput({onAdd,tasks,onEdit,selected}){
    const [task,setTask] = useState('')    

    function handleChange(e){
        setTask(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        if(task != ''){
            onAdd(task)
        setTask('')
        }
    }

    function handleEdit(e){
        e.preventDefault()
        if(task !== ''){
            onEdit(task,selected.idx)
        setTask('')
        }
    }

    return(
        <form className="input_form">

        {selected.val ?        
        (<>
        <input type="text" name="task" onChange={handleChange}  value={task} placeholder="Edit Selected Task..."/>
        <button className="edit_button" onClick={handleEdit} type="submit">Edit Task</button>
        </>
        )
        : 
        (<>
            <input type="text" name="task" onChange={handleChange}  value={task} placeholder="Add New Task..."/>
            <button className="edit_button" onClick={handleSubmit} type="submit">Add Task</button>
            </>
            )}
        
        
        </form>
    )
}