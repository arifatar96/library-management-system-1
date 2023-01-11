import { Link } from "react-router-dom";
const UserNavbar = () => {
    return ( 
        <div className="userNav bg-dark text-light align-items-end navbar py-2 mb-5 px-5 justify-content-around">
            <div className="logo">
                <h1>User Portal</h1>
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/user/" className="nav-link mx-3">Dashboard</Link></li>
                    <li><Link to="/user/book-list" className="nav-link mx-3">Book List</Link></li>
                    <li><Link to="/" className="nav-link mx-3">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default UserNavbar;