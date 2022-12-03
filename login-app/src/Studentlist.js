import {useState} from 'react';

function Studentlist(){
    const [students,setStudents] = useState(['Henry','Lin-Wen']);
    const [value,setValue] = useState("");
    let changeHandler = (event) =>{
        setValue(event.target.value);
    };
    let studentAdder = () =>{
        setStudents(previousState=>{
            return [...previousState,value];
        });
        setValue("");
    }
    return(
        <>
            <input onChange={(event)=>changeHandler(event)} value={value}/>
            <button type='button' onClick={studentAdder}>Add</button>
            <ul>
                {students.map((value)=>{
                    return <li>{value}</li>
                })}
            </ul>
        </>
    )
}
export default Studentlist;