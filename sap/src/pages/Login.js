import {useEffect, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import $ from 'jquery';
import globalIP from '../services/globalIP';
import loginService from '../services/loginService';


function Login(props){
    const passInput = useRef();
    const hidePass = useRef();
    const [user,setUser] = useState('');
    const [logFlag,setLogin] = useState('');
    const [Ip,setIp] = useState('');
    const [err,setErr] = useState('');
    const navigate = useNavigate();
    const userRegister = () =>{
        navigate('/register');
    };
    const login = (event) =>{
        event.preventDefault();//새로고침을 막아주는 함수
        // const form = $(event.target);
        const formData = new FormData(event.target);
        formData.append("gip",Ip);
        loginService.login(formData) //axios 세팅 해야함(설치:npm install axios)
            .then(response =>{
                // setUser(response.data);
                // console.log(response);
                setLogin(true);
                props.loginFun(response.data);
                sessionStorage.setItem("sid",response.data.sid);
                setErr(null);
                navigate('/');
                // if(!response.data){//when the reply is a false
                //     navigate('/logout');
                    
                // }else{
                //     setLogin(true);
                //     props.loginFun(response.data);
                //     sessionStorage.setItem("sid",response.data.sid);
                //     setErr(null);
                //     navigate('/');
                // }
            })
            .catch(err=>{
                // console.log(err);
                setErr(err.response.data);
            });
        
        // console.log(event.target);
        // $.ajax({// ajax 사용시에는 아래 form에 action 및 method 필요
        //     type:"POST",
        //     url:form.attr('action'),
        //     data:form.serialize(),
        //     success(responseMsg){
        //         // console.log(user);
        //         if(responseMsg !== "false"){
        //             setUser(JSON.parse(responseMsg));
        //             setLogin(true);
        //             props.loginFun(JSON.parse(responseMsg));
        //             sessionStorage.setItem("sid",JSON.parse(responseMsg).sid);
        //             navigate('/');
        //         }else{
        //             setUser({firstName:"not valid user"});
        //             setLogin(false);
        //         }
        //     }
        // })
    }
    useEffect(()=>{
        globalIP.getIP().then(data=>{setIp(data)});
    },[]);
    const inputFocus = (event)=>{
        switch(event.type){
            case "focus":
                event.target.style.backgroundColor = "yellow";
                break;
            case "blur":
                if(event.target.value ==""){
                    event.target.style.backgroundColor ="red";
                }else{
                    event.target.style.backgroundColor ="white";
                }
                break;
        }
        passInput.current.style.backgroundColor ="yellow";
    }
    const showPass =(event) =>{
        if(event.target.innerText == "Show Password"){
            hidePass.current.type="text";
            event.target.innerText = "Hide Password";
        }else{
            hidePass.current.type="password";
            event.target.innerText = "Show Password";
        }
    }
    const hidingPass =() =>{
        hidePass.current.type="password";
    }

    return(
        <>
            <h1>Login page {Ip}</h1>
            {/* <form action="http://localhost/react/reactServer/login.php" method="POST" onSubmit={(event)=>login(event)}> // ajax 사용할떄 필요한 코드 */}
            <form onSubmit={(event)=>login(event)}>
                <input type="hidden" name="gip" value={Ip}/>
                <input type="email" name="uName" onFocus={(event)=>inputFocus(event)} onBlur={(event)=>inputFocus(event)} placeholder="Write username" required/>
                {/* <input type="password" name="pass" ref={passInput} placeholder="Write password" required/> */}
                <input type ="password" name="pass" ref={hidePass} onFocus={(event)=>inputFocus(event)} onBlur={(event)=>inputFocus(event)} placeholder="Write password" required/>
                <button type="submit">Login</button>
                <button type="button" onClick={(event)=>showPass(event)} >show/hide</button>
                {/* <button type="button" onClick={hidingPass}>hide</button> */}
                {/* <button type="button">Register</button> */}
                <button type="button" onClick={userRegister}>Register</button>
            </form>
            {err!==null ? <h1>{err}</h1> : null}
            {/* {logFlag ? <h1>Welcome {user.firstName}</h1> : user.firstName ? <h1>Welcome {user.firstName}</h1> : false } */}
        </>
    )
}
export default Login;