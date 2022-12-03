function InputElement(){
    const bgchg = (event)=>{
        console.log(event);
        switch(event.type){
            case "focus":
                event.target.style.backgroundColor = "yellow";
                break;
                
            case "blur":
                event.target.style.backgroundColor = "white";
                break;

            default:
        }
    }
    return(
        <input type="text" onFocus={(event)=>bgchg(event)} onBlur={(event)=>bgchg(event)}/>
    )
}

function EventCompo(prop){
    let name = prop.name;
    let age = prop.age;

    const shName = (name, age) => {
        alert("WOOW " +name+" "+age+", You have clicked me")
    }

    return(
        <>
        <InputElement/>
        <button type="button" onClick={()=>shName(name, age)}>Click me!</button>
        </>
    );

}

export default EventCompo;