import {BrowserRouter, Routes, Route} from 'react-router-dom';//react-router-dom 설치 방법은 npm install i -D react-router-dom
import RoutingLayout from './pages/RoutingLayout'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Nopage from './pages/Nopage';
import UserRegister from './pages/UserRegister';
import Logout from './pages/Logout';
import { useEffect, useState } from 'react'; 
import pageloadService from './services/userInfoSrv';
import $ from 'jquery'; //jquery 설치방법 : npm install jquery
import userInfoSrv from './services/userInfoSrv';
import Fileupload from './pages/Fileupload';

export default function MainApp(){
    const [user, setUser] = useState('');
    const loginFunction = (userInput) =>{
        setUser(userInput);
    }
    const pageLoad = ()=>{
        let sid = sessionStorage.getItem("sid");
        
        if(sid!=null){
            userInfoSrv.loadInfo(sid)
            .then(response =>{
                setUser(response.data);
            })
            .catch(err=>{
                console.log(err)
                // setErr(err.response.data);
            });
            // $.ajax({
            //     type:"POST",
            //     url:"http://localhost/react/reactServer/sidChk.php",
            //     data:{sid:sid},
            //     success(data){
            //         // console.log(data);
            //         setUser(JSON.parse(data));
            //     }
            // })
        }
    };
    useEffect(()=>pageLoad(),[]);
    return(
        <BrowserRouter>
            <Routes>
                <Route path ='/' element={<RoutingLayout loggedUser={user}/>}>
                    <Route index element = {<Home loggedUser={user}/>}/>
                    <Route path='login' element={<Login loginFun={loginFunction}/>}/>
                    <Route path='logout' element={<Logout/>}/>
                    <Route path='upload' element={<Fileupload/>}/>
                    <Route path='register' element={<UserRegister/>}/>
                    <Route path='contact' element={<Contact/>}/>
                    <Route path='*' element={<Nopage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}