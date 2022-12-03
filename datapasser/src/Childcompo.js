function Childcompo(props){
    let data = "marcelo";
    
    return(
        <>
            <h1>{props.passedData}</h1>
            <input name = "name" onChange={(event)=>props.detailFunc(event)}/>
            <input name = "family" onChange={(event)=>props.detailFunc(event)}/>
            <button type= "button" onClick={()=>props.childFunc(data)}>Say HI</button>
        </>
    )
}

export default Childcompo;