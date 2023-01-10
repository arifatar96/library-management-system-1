import {Routes,Route} from 'react-router-dom'
import AddBook from './addbook';
import AddUser from './addUser';
import AdminDashboard from "./adminDashboard";
import AdminNavbar from "./adminNavbar";
import BookList from './bookList';
import ReadBook from './readBook';
import UserList from './userList';

const AdminPortal = () => {
    return ( 
        <div className="adminPortal">
           <AdminNavbar />
           <Routes>
                <Route path='/'  element={<AdminDashboard />}/>
                <Route path='/book-list' element={<BookList />}/>
                <Route path='/book-list/:id' element={<ReadBook />}/>
                <Route path='/add-book' element={<AddBook />} />
                <Route path='/add-user' element={<AddUser />} />
                <Route path='/user-list' element={<UserList />} />
           </Routes>
        </div>
     );
}
 
export default AdminPortal;