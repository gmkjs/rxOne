import React,{useState} from "react";
import Employee from "./Employee";

const App = ()=>{
    const [inpVal, setInpVal ] = useState('Mohan');
const [propChange, setPropChange] = useState('');
    const names = (e)=>{
setInpVal(e.target.value);
    }
    return <div>
        <Employee  name={propChange}/>
        <input value={inpVal} onChange={names} />
        <button onClick={()=>setPropChange(inpVal)}>pass</button>
    </div>

};

export default App;