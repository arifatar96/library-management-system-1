import { Link } from "react-router-dom";
const LandingPage = () =>{
    return (
        <div className="landingpage">
            <div className="selectLoginType container">
                <h1>Library Management System</h1>
                <Link to='/admin-login' className="btn btn-outline-primary">Admin Login</Link>
                <Link to='/user-login' className="btn btn-outline-primary">User Login</Link>
            </div>
        </div>
    )
}
export default LandingPage;