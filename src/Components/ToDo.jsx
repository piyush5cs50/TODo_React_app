import './ToDo.css'
import NewListInput from './NewListInput';
import { useState,useEffect } from 'react';
import ToDoLists from './ToDoLists';


export default function ToDo(){

const initialTasks = JSON.parse(localStorage.getItem('tasks')) || [];


  const [tasks,setTask] = useState(initialTasks)

  const checks = tasks.reduce((count,task) => count + (task.isCheck ? 1 :0), 0)

  const [selected, setSelected] = useState({val:false,idx:-1});

  

  function handleSelect(ind){
        setTask((pre) => pre.map((val,idx) => {
            if(idx == ind){
                return ({...val, isSelected : !val.isSelected})
            }
            else if(val.isSelected == true){
                return ({...val, isSelected : false})
            }
            return val;
        }))
    
    console.log(tasks)

  }
  


    function handleAdd(listItem){
       setTask(pre => ([...pre,{text:listItem,isSelected:false,isCheck:false}]))
    }

    function handleDelet(ind){
        setTask(pre => pre.filter((value,idx) => 
        {if(idx !== ind){
return value;
        }    
    }
        
        ))
    }

    function handleUp(ind){
        if(ind > 0){
          
            setTask(pre => pre.map((val, idx) => {
                if(idx == ind-1){
                    return pre[ind]
                }
                else if(idx == ind){
                    return pre[ind-1]
                }
                else{
                    return val
                }
            }))
        }
    }


    function handleDown(ind){
        setTask((pre) => pre.map((value,idx) => 
        {
            if(idx == ind && idx < pre.length - 1){
              return pre[idx+1]
            }
            else if(idx == ind + 1){
                return pre[ind]
            }
            else return pre[idx]
        }
        ))
    }


    function handleEdit(newValue, ind){
        setTask(pre => pre.map((val,idx) => {
            if(idx == ind){
                return {...val,text:newValue}
            }
            else{
                return val
            }
        }))
    }


 

    function handleCheck(ind){
     setTask(pre => pre.map((val,idx) => {
        if(idx == ind){
            return {...val,isCheck : !val.isCheck}
        }
        else{
            return {...val};
        }
     }))
    }

//     useEffect(() => {
// },[tasks,checks])


useEffect(() => {
    // Check if there's any task with isSelected set to true
    console.log(tasks)
    const selectedIndex = tasks.findIndex((task) => task.isSelected);
    setSelected({ val: selectedIndex !== -1, idx: selectedIndex });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


    return(
        <div className="todo">
            <h3 className='todo_heading'><span style={{color:'yellow', fontStyle:'italic'}}>To</span><span style={{color:'yellow', fontStyle:'italic'}}>Do</span><span style={{fontStyle:'italic'}}>List</span> 
            </h3>
            <NewListInput selected={selected} onAdd={handleAdd} onEdit={handleEdit} tasks={tasks}/>
            <ToDoLists checks={checks} onCheck={handleCheck} onSelect={handleSelect} onUp={handleUp} onDown={handleDown} onDelet={handleDelet} tasks={tasks}/>
        </div>
    )
}