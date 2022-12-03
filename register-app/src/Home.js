function Place(props){
    return(
        <>
            <h4>likes {props.placeName}</h4>
        </>
    )
}


function Home(props){
    switch(props.type){
        case "heading":
            return (
                <>
                    <h1 style={{color:props.color}}>Home page</h1>
                    <h3>My name is {props.friendObj.name} {props.friendObj.family} {10*5}</h3>
                    <Place placeName={props.friendObj.placeName}/>
                </>
            );
        case "text":
            return (
                <>
                    <h5 style={{color:props.color}}>Home page</h5>
                    <p>My name is {props.friendObj.name} {props.friendObj.family} {10*5}</p>
                    <Place placeName={props.friendObj.placeName}/>
                </>
            );
        default:{
            console.log("Error");
        }
    }

    
}

export default Home;