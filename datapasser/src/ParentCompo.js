import Childcompo from "./Childcompo";
import {useState} from "react";
function ParentCompo(){
    const[data,setData] = useState('');
    const[details,setDetails] = useState({
        name: '',
        family: ''
    })
    const parentToChild = () =>{
        setData("passd from parent")
    };
    const childToParent = (name) =>{
        alert("Hey "+name);
    }
    const detailsChanger = (event) =>{
        let property = event.target.name;
        let value = event.target.value;
        setDetails(prevDetails=>{
            return {...prevDetails,[property]:value}
        })
    }
    return(
        <>
            <Childcompo passedData = {data} childFunc={childToParent} detailFunc={detailsChanger}/>
            <button type="button" onClick={parentToChild}>Click to send data from parent</button>
            <h2>Your Name is {details.name} {details.family}</h2>
        </>
    )
}

export default ParentCompo;