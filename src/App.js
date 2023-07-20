import ToDo from './Components/ToDo'
import {useState} from 'react'
import './App.css';


function App() {

  const [list,setList] = useState([])

  return (
    <div className="App">
      <ToDo/>
    </div>
  );
}

export default App;
