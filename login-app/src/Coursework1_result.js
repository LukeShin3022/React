import { useState } from "react";

function Rows (props){
    const student = props.student;
    const funnyFunction = (index) =>{
        alert(index);
        // student.name = props.name;
        // student.family = props.family;
        // student.program = props.program;
    }
    return(
        <tr>
            <td>
                {student.name}
            </td>
            <td>
                {student.family}
            </td>
            <td>
                {student.program}
            </td>
            <td>
                {props.index}
            </td>
            <td>
                <button type="button" onClick={()=>funnyFunction(props.index)}>Edit</button>
            </td>
        </tr>
    )
}

function Coursework1_result(){

    const [stDetails,setStDetails] = useState({
        name: '',
        family: '',
        program: ''
    });

    const [stList,setStList]=useState([]);

    let inputChg = (event) =>{
        let property = event.target.name;
        let value = event.target.value;

        setStDetails(previousSt=>{
            return {
                ...previousSt, [property]:value
            };

        })
    }

    let adder = ()=>{
        setStList(prevList=>{
            return [...prevList,stDetails]
        })
    }
    return(
        <>
            <input placeholder="write student's name" name="name" onChange={(event)=>inputChg(event)}/>
            <input placeholder="write student's family" name="family" onChange={(event)=>inputChg(event)}/>
            <input placeholder="write student's program" name="program" onChange={(event)=>inputChg(event)}/>
            <button type="button" onClick={adder}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>program</th>
                    </tr>
                </thead>
                <tbody>
                    {stList.map((student,idx)=>{
                        return <Rows key = {idx} student = {student} index={idx}/>
                    })}
                </tbody>
            </table>
        </>
    )

}

export default Coursework1_result;