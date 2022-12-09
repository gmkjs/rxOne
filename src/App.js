// import React, { useState } from "react";
// import Employee from "./Employee";

// const App = () => {

    import React, { useEffect, useState } from 'react';
    const App = () => {
    
        const [name,setName] = useState("")
        const [tasks,setTasks] = useState([])
        const [index,setIndex] = useState()
    
        const addTask = ()=>{
            console.log(index)
            
            if(index){
                let tempTasks = [...tasks]
                tempTasks.splice(parseInt(index), 1, name)
                setTasks([...tempTasks])
                setIndex();

            }else if(name){
                setTasks([name,...tasks])
            }
           
        } 
    
        const deletTask = (y) => {
            let temptasks = tasks.filter((i,index)=>index!==y)
            setTasks(temptasks)
        }

        const editTask = (y, x)=> {
            let tempindex = y + ''
            setIndex(tempindex)
            setName(x)
        }
    
        useEffect(()=>{
            setName("")
        },[tasks])
    
        return  <div>
                    <div>
                    <input value={name} onChange={(e)=>setName(e.target.value)} /> 
                    <button onClick={addTask}>Add Task</button>
                    </div>
                    <div>
                        {
                            tasks.map((i,index)=>{
                                return <h3 key={index} style={{backgroundColor:'yellow'}}>{i}  <span>x</span>  <button onClick={()=>deletTask(index)}>  delete</button> <button onClick={()=>editTask(index, i)}> edit</button> </h3>
                            })
                        }
                    </div>
    
                </div>
    }
    
    export default App;






    // const [inpVal, setInpVal] = useState('');
    // const [propChange, setPropChange] = useState('');

    // const names = (e) => {
    //     setInpVal(e.target.value);
    // }
    // return <div>
    //     <Employee name={propChange} />
    //     <input value={inpVal} onChange={names} />
    //     <button onClick={() => setPropChange(inpVal)}>pass</button>
    // </div>

// };

// export default App;