import { createContext, useContext } from "react";
// import { UNSAFE_RouteContext } from "react-router-dom";
const userContext = createContext();
function WelcomeMessage(){
    const user = useContext(userContext);
    console.log(user);
    return(
        <h1>Welcome {user.firstName} {user.lastName}</h1>
    )
}

function BirthLabel(){
    const user = useContext(userContext);
    return(
        <h3>Your birthdate is: {user.dob}</h3>
    )
}

function Home(props){
    const loggedUser = props.loggedUser;
    return(
        <>
            <userContext.Provider value={loggedUser}>
                <WelcomeMessage/>
                <BirthLabel/>
            </userContext.Provider>
            {/* <h1>Welcome {loggedUser.firstName} {loggedUser.lastName}</h1> */}
            <h1>Home page</h1>
        </>
    )
}
export default Home;