import { useState,useEffect } from "react"
const UserList = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        let fetchData = async () => {
            let reponse = await fetch('http://localhost:4000/users')
            let data = await reponse.json()
            setUsers(data)
        }
        fetchData()
    }, [users])

    //delete a book from server
    let handleDelete = (id,name) => {
        fetch(`http://localhost:4000/users/${id}`, {
            method: 'DELETE'
        });
        alert(`${name} will be deleted permanently`)
    }
    return ( 
        <div className="userList">
            <h1>User List</h1>
            <div className="users_group justify-content-center d-flex flex-wrap">
                {users.map(data => (
                    <div className="user m-3 p-2 card w-25">
                        <div className="userdata">
                            <h2>Name: {data.name}</h2>
                            <p>Email: {data.email}</p>
                            <p>Age: {data.age}</p>
                            <p>Phone Number: {data.phoneNumber}</p>
                            <div className="btns card-footer text-center">
                                <button className="btn btn-outline-danger mx-2" onClick={() => handleDelete(data.id, data.name)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default UserList;