import {useState} from 'react';

function Usestate(){
    const [name,setName] = useState(""); //initialize the useState variable
    const [family,setFamily] = useState(""); //initialize the useState variable
    let nameChg = () =>{
        setName("Henry");
    }
    let nameChanger = (event) =>{
        let inputName = event.target.name;
        let value = event.target.value;
        switch(inputName){
            case 'fname':
                setName(value);
                break;
            case 'lname':
                setFamily(value)

        }

    }

    let alertState = (event) =>{
        // setName(event.target.value);
        // setFamily(event.target.value);
        alert("Your full name is: " +name+" "+family);
    }
   
    return(
        <>
            <input type="text" placeholder='write your name' name='fname' onChange={(event)=>nameChanger(event)}/>
            <input type="text" placeholder='write your family' name = 'lname'onChange={(event)=>nameChanger(event)}/>
            <h1>Name of the student is {name} {family}</h1>
            <button onClick={nameChg}>Click Me</button>
            <button onClick={alertState}>Click Me</button>
        </>
    )
}

export default Usestate;