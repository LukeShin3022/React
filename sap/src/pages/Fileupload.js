import { useState } from "react";
import fileUploadSrv from "../services/fileUploadSrv";
// import loginService from '../services/loginService';

function Fileupload(){
    const [file,setFile] = useState();
    const fileChange = (event)=>{
        setFile(event.target.files[0]);
    };
    const imageSubmit = (event)=>{
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("upload",file);
        console.log(event);
        
        if(file!==null){
            fileUploadSrv.Fileupload(formData)
            .then(response=>{console.log(response)})
            .catch(err=>{console.log(err)})
        }
    }

    return(
        <>
            <h1>Upload an Image</h1>
            <form onSubmit={(event)=>{imageSubmit(event)}}>
                <input type="file" onChange={(event)=>fileChange(event)} required/>
                <input type="text" name="fName" placeholder="Write fileName"/>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}

export default Fileupload;