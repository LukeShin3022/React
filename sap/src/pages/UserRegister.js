function UserRegister(){
    return(
        <>
            <h1>Register</h1>
            <form action="http://localhost/react/reactServer/login.php" method="POST" /*onSubmit={(event)=>register(event)}*/>
                    <input type="email" name="userID" placeholder="Write ID" required/>
                    <input type="password" name="pass" placeholder="Write password" required/>
                    <input type="text" name="fname" placeholder="Write fname" required/>
                    <input type="text" name="lname" placeholder="Write lname" required/>
                    <input type="text" name="dob" placeholder="Write Date of Birth" required/>
                    <button type="submit">Register</button>
            </form>
        </>
    )
}

export default UserRegister;