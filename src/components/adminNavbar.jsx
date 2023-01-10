import { Link } from "react-router-dom";
const AdminNavbar = () => {
    return ( 
        <div className="adminNav bg-dark text-light align-items-end navbar py-2 mb-5 px-5 justify-content-around">
            <div className="logo">
                <h1>Admin Portal</h1>
            </div>
            <div className="nav_links">
                <ul>
                    <li><Link to="/admin/" className="nav-link mx-3">Dashboard</Link></li>
                    <li><Link to="/admin/add-book" className="nav-link mx-3">Add Books</Link></li>
                    <li><Link to="/admin/add-user" className="nav-link mx-3">Add Users</Link></li>
                    <li><Link to="/admin/book-list" className="nav-link mx-3">Book List</Link></li>
                    <li><Link to="/admin/user-list" className="nav-link mx-3">User List</Link></li>
                    <li><Link to="/" className="nav-link mx-3">Logout</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default AdminNavbar;