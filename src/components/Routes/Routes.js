import { Routes as Routers, Route, Link } from "react-router";
import Home from "../Home/Home";
import Signin from "../Signin/Signin";
import Signup from '../Signup/Signup'

const Routes = ()=>{
    return(
    <Routers>
        <Route path="/" element={<Home/>}></Route>
        <Route path="signup" element={<Signup/>}></Route>
        <Route path="signin" element={<Signin/>}></Route>
    </Routers>
    );
}
export default Routes;