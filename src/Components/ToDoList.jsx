import './ToDoLists.css'
import { useState } from 'react';

export default function ToDoList({task,ind,onSelect,onDelet,onUp,onDown,onCheck}){

  function handleSelect() {
    onSelect(ind)
  }

  function handleDelet(){
    
    onDelet(ind)
  }

  function handleUp(){
    onUp(ind)
  }
  
  function handleDown(){
    onDown(ind)
}

function handleCheck(){
  onCheck(ind)
}

console.log(task)

 return(
        <div className="task_item" key={ind}>
            <div className="check_box_container">
              {task.isCheck ? <input checked type="checkbox" onClick={handleCheck}   className='check_box'/> : <input type="checkbox" onClick={handleCheck} className='check_box'/>}
            </div>
            
            <div  style={task.isSelected ? {backgroundColor:'aliceblue',} : {backgroundColor:'rgb(59 58 58)',color:'white',border:'2px solid #b5b5b5'}} onClick={handleSelect} className="task">{task.text}</div>
            <div className="buttons" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <button onClick={handleUp} className="up">Up</button>
            <button onClick={handleDown} className="down">Down</button>
            <button onClick={handleDelet} className="delet">X</button>
            </div>
            
        </div>
 )
}