import {Outlet, Link} from "react-router-dom";

const RoutingLayout = (props)=>{
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                        {props.loggedUser == "" ? <li><Link to="/login">Login</Link></li> : null}
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                        
                    <li>
                        <Link to="/upload">Image Upload</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
        
    )
}
export default RoutingLayout;