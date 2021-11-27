import { Button } from "antd"
import { Link } from "react-router-dom"

const Home = () =>{
    return(
        <>
        <Button type="primary"><Link to="signin">Home to Signin</Link></Button>
        <h1>Home</h1>
        </>
    );
};
export default Home;