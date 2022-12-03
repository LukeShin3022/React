import {useState}from 'react';

function Studentlogin(){
    const [student, setStudent]= useState({
        name: 'henry',
        family: 'Ogata',
        program: 'Web Development'
    });
    let changeHandler = (event)=>{
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        setStudent(previousState=>{
            console.log(previousState);
            return{
                ...previousState,
                [propertyName]: propertyValue
               
            };
        });
    }
    // let changeHandler = (event)=>{
    //     setStudent(previousState=>{
    //         console.log(previousState);
    //         return{
    //             ...previousState,
    //             name: event.target.value
               
    //         };
    //     });
    // }
    return(
        <>
            <input value={student.name} name="name" onChange={(event)=>changeHandler(event)}/>
            <input value={student.family} name="family" onChange={(event)=>changeHandler(event)}/>
            <input value={student.program} name="program" onChange={(event)=>changeHandler(event)}/>
            <h1>Student Name: {student.name}</h1>
            <h1>Student Family: {student.family}</h1>
            <h1>Student Program: {student.program}</h1>
        </>
    )
}
export default Studentlogin;
