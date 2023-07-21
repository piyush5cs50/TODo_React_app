import './ToDoLists.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faArrowUp,faArrowDown } from '@fortawesome/free-solid-svg-icons';
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

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

// console.log(task)

 return(
        <div className="task_item" key={ind}>
            <div className="check_box_container">
              {task.isCheck ? <input checked type="checkbox" onClick={handleCheck}   className='check_box'/> : <input type="checkbox" onClick={handleCheck} className='check_box'/>}
            </div>
            
            <div  style={task.isSelected ? {backgroundColor:'aliceblue',} : {backgroundColor:'rgb(59 58 58)',color:'white',border:'2px solid #b5b5b5'}} onClick={handleSelect} className="task">{task.text}
            
            <div className="buttons" style={{display:'flex', alignItems:'center', justifyContent:'center'}}>

            {task.isSelected && (<>
            {/* <button className="up">Up</button>
            <button className="down">Down</button>
            <button onClick={handleDelet} className="delet"> <FontAwesomeIcon icon={faTrash} /> {}</button>
            <button  > <FontAwesomeIcon icon={faTrash} /> </button> */}
            <div onClick={handleUp} className="up_arrow"><FontAwesomeIcon icon={faArrowUp} /></div>
            <div onClick={handleDown}  className="down_arrow"><FontAwesomeIcon icon={faArrowDown} /></div>
            
            <div onClick={handleDelet} className="icon"><FontAwesomeIcon icon={faTrash} /></div>
            </>)}
            

            </div>
            </div>
            
            
        </div>
 )
}