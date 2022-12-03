import {useState} from 'react';

function Coursework1(){

    const [students, setStudents] = useState([{
        name: 'Henry',
        family: 'Ogata',
        program: 'Software Development'
    },{
        name: 'Luke',
        family: 'Shin',
        program: 'Web Development'
    }]);

     const [student, setStudent]= useState({
        name: '',
        family: '',
        program: ''
    });

    let studentAdder = ()=>{
        console.log(student)
        setStudents(previousState=>{
            // console.log("Previouse", previousState);
            return [...previousState, student];
        });
    }

    let changeHandler = (event)=>{
        let propertyName = event.target.name;
        let propertyValue = event.target.value;
        setStudent(previousState=>{
            // console.log(previousState);
            return{
                ...previousState,
                [propertyName]: propertyValue
            };
        });
    }

    return(
        <>
            <input value={student.name} name="name" onChange={(event)=>changeHandler(event)}/>
            <input value={student.family} name="family" onChange={(event)=>changeHandler(event)}/>
            <input value={student.program} name="program" onChange={(event)=>changeHandler(event)}/>
            <h1>Student Name: {student.name}</h1>
            <h1>Student Family: {student.family}</h1>
            <h1>Student Program: {student.program}</h1>
            <button type='button' onClick={studentAdder}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>fname</th>
                        <th>lname</th>
                        <th>program</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((value)=>{
                        return <tr><td>{value.name}</td><td>{value.family}</td><td>{value.program}</td></tr>
                    })}
                </tbody>
            </table>
        </>
    )

}

export default Coursework1;