import { useState } from "react";
function Rows (props){
    const student = props.student;
    const index = props.index;

    const showStudent = () =>{
        props.show({ 
            name:student.name,
            family:student.family,
            program:student.program
        })
    }

    return(
        <tr>
            <td>{student.name}</td>
            <td>{student.family}</td>
            <td>{student.program}</td>
            <td>{props.index}</td>
            <td><button type="button" onClick={()=>showStudent()}>Edit</button></td>
            <td><button type="button" onClick={()=>props.change(index)}>Change</button></td>
        </tr>
    )
}
function Studentreg(){
    const [stDetails,setStDetails] = useState({
        name:'',
        family:'',
        program:''
    });
    const [stList,setStList] = useState([]);
    let inputChg = (event) => {
        let property = event.target.name;
        let value = event.target.value;
        setStDetails(previousSt=>{
            return {...previousSt,[property]:value};
        })
    }
    let adder = () =>{
        setStList(prevList=>{
            return [...prevList,stDetails];
        });
        setStDetails({ name:'',
        family:'',
        program:''});
    };
    let changer = (index) =>{
        stList.map((student,idx)=>{
            if(idx == index){
                setStList(previousSt=>{
                    stList[idx].name=stDetails.name;
                    stList[idx].family=stDetails.family;
                    stList[idx].program=stDetails.program;
                    return[...previousSt];
                });
                setStDetails({
                    name:'',
                    family:'',
                    program:''});
            }
        })

    };
    
    return(
        <>
            <input value={stDetails.name} name="name" onChange={(event)=>inputChg(event)}/>
            <input value={stDetails.family} name="family" onChange={(event)=>inputChg(event)}/>
            <input value={stDetails.program} name="program" onChange={(event)=>inputChg(event)}/>
            <button type="button" onClick={adder}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Name</th><th>Family</th><th>Program</th>
                    </tr>
                </thead>
                <tbody>
                    {stList.map((student,idx)=>{
                        return <Rows key={idx} student={student} index={idx} show={setStDetails} change={changer}/>
                    })}
                </tbody>
            </table>
        </>
    )
}
export default Studentreg;