import { useState } from "react";
import ToDoList from "./ToDoList";
import "./ToDoLists.css";

export default function ToDoLists({ tasks,onDelet,onUp,onDown,onSelect,onCheck,checks}) {
  function handleSelect(ind){
  onSelect(ind)
  }

  function handleDelet(ind){
    onDelet(ind)
  }

  function handleUp(ind){
    onUp(ind)
  }

  function handleDown(ind){
   onDown(ind)
  }

  function handleCheck(ind){
    onCheck(ind)
  }

  return (
    <>
      {tasks.length ? (
        <>
          <h4 style={{color:'white'}}>Copleted Item: {checks}/{tasks.length}</h4>
          <ul style={{ listStyleType: "none" }}>
            {tasks.map((task, ind) => (
              <ToDoList onCheck={handleCheck} onSelect={handleSelect} onUp={handleUp} onDown={handleDown} onDelet={handleDelet} task={task} ind={ind}/>
            ))}
          </ul>
        </>
      ) : (
        <h3>Add Tasks</h3>
      )}
    </>
  );
}
